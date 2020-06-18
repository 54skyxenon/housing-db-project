# A realllyy bad backend written by Brandon
# It supports four hardcoded routes

from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import simplejson as json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# fix this issue
app.config['MYSQL_DB'] = os.environ.get('DB_NAME')
app.config['MYSQL_USER'] = os.environ.get('DB_USERNAME')
app.config['MYSQL_PASSWORD'] = os.environ.get('DB_PASSWORD')
app.config['MYSQL_HOST'] = os.environ.get('DB_ENDPOINT')
app.config['MYSQL_PORT'] = int(os.environ.get('DB_PORT'))

mysql = MySQL(app)

# https://stackoverflow.com/a/43796849
def toJson(cur):
    # this will extract row headers
    row_headers = [x[0] for x in cur.description]
    rv = cur.fetchall()
    json_data = []
    for result in rv:
        json_data.append(dict(zip(row_headers, result)))
    return json.dumps(json_data)

# avg subway distance from new constructions
@app.route('/subway', methods=['GET'])
def subway():
    cur = mysql.connection.cursor()
    cur.execute('''
        select
            neighborhood.neighborhood_id,
            neighborhood.name,
            avg(distance),
            commuting_subway / working_population * 100 as 'percent_commuting_subway'
        from neighborhood join zip_neighborhood using (neighborhood_id)
        join zip using (zip_id)
        join new_construction_permits using (zip_id)
        join closest_subway_stop using (new_construction_permit_id)
        left join subway_stats using (neighborhood_id)
        group by neighborhood.name
        order by percent_commuting_subway desc;
    ''')
    return toJson(cur)

# amount of low income housing compared to population
@app.route('/loinc', methods=['GET'])
def loinc():
    cur = mysql.connection.cursor()
    cur.execute('''
        select 
            neighborhood.name, 
            sum(income_restricted_units) as 'total_income_restricted_units', 
            working_population
        from neighborhood join zip_neighborhood using (neighborhood_id)
        join zip using (zip_id)
        join low_income_housing using (zip_id)
        left join subway_stats using (neighborhood_id)
        group by neighborhood.name
        order by total_income_restricted_units desc;
    ''')
    return toJson(cur)

# which neighborhoods are building the most apartments?
@app.route('/most-apartments', methods=['GET'])
def mostApartments():
    cur = mysql.connection.cursor()
    cur.execute('''
        select 
            neighborhood.name, 
            count(*) as 'num_apartments'
        from neighborhood join zip_neighborhood using (neighborhood_id)
        join zip using (zip_id)
        join new_construction_permits using (zip_id)
        where occupancy = 'Multi'
        group by neighborhood.name
        order by num_apartments desc;
    ''')
    return toJson(cur)

# will new apartments be closer to subways than other buildings?
@app.route('/new-apartments', methods=['GET'])
def newApartments():
    cur = mysql.connection.cursor()
    cur.execute('''
        select 
            "Apartments", 
            avg(distance)
        from new_construction_permits join closest_subway_stop using (new_construction_permit_id)
        where occupancy = 'Multi'
        union
        select 
            "Other buildings", 
            avg(distance)
        from new_construction_permits join closest_subway_stop using (new_construction_permit_id)
        where occupancy != 'Multi';
    ''')
    return toJson(cur)
