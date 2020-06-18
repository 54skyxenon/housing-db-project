# A realllyy bad backend written by Brandon

from flask import Flask, render_template, request
from flask_mysqldb import MySQL
import simplejson as json
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

app.config['MYSQL_DB'] = os.getenv('DB_NAME')
app.config['MYSQL_USER'] = os.getenv('DB_USERNAME')
app.config['MYSQL_PASSWORD'] = os.getenv('DB_PASSWORD')
app.config['MYSQL_HOST'] = os.getenv('DB_ENDPOINT')
app.config['MYSQL_PORT'] = int(os.getenv('DB_PORT'))

mysql = MySQL(app)

def toJson(cur):
    row_headers = [x[0] for x in cur.description]  # this will extract row headers
    rv = cur.fetchall()
    json_data=[]
    for result in rv:
        json_data.append(dict(zip(row_headers,result)))
    return json.dumps(json_data)

@app.route('/')
def hello():
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

if __name__ == '__main__':
    app.run()
