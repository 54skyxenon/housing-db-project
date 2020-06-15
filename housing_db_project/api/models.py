# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Light(models.Model):
    the_geom = models.CharField(max_length=50, blank=True, null=True)
    objectid = models.IntegerField(db_column='OBJECTID', primary_key=True)  # Field name made lowercase.
    type = models.CharField(db_column='TYPE', max_length=6, blank=True, null=True)  # Field name made lowercase.
    lat = models.FloatField(db_column='Lat', blank=True, null=True)  # Field name made lowercase.
    longi = models.FloatField(db_column='Longi', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'light'


class Loinc(models.Model):
    project_name = models.CharField(db_column='Project_Name', max_length=50, blank=True, null=True)  # Field name made lowercase.
    neighborhood = models.CharField(db_column='Neighborhood', max_length=50, blank=True, null=True)  # Field name made lowercase.
    zip_code = models.IntegerField(db_column='Zip_Code', blank=True, null=True)  # Field name made lowercase.
    ttlprojunits = models.IntegerField(db_column='TtlProjUnits', blank=True, null=True)  # Field name made lowercase.
    rentunits = models.IntegerField(db_column='RentUnits', blank=True, null=True)  # Field name made lowercase.
    ownunits = models.IntegerField(db_column='OwnUnits', blank=True, null=True)  # Field name made lowercase.
    ttlmarket = models.IntegerField(db_column='TtlMarket', blank=True, null=True)  # Field name made lowercase.
    marketrent = models.IntegerField(db_column='MarketRent', blank=True, null=True)  # Field name made lowercase.
    marketown = models.IntegerField(db_column='MarketOwn', blank=True, null=True)  # Field name made lowercase.
    total_income_restricted = models.IntegerField(db_column='Total_Income_Restricted', blank=True, null=True)  # Field name made lowercase.
    income_restricted_rental = models.IntegerField(db_column='Income_Restricted_Rental', blank=True, null=True)  # Field name made lowercase.
    income_restricted_ownership = models.IntegerField(db_column='Income_Restricted_Ownership', blank=True, null=True)  # Field name made lowercase.
    tenure = models.CharField(db_column='Tenure', max_length=30, blank=True, null=True)  # Field name made lowercase.
    public_private = models.CharField(db_column='Public_Private', max_length=8, blank=True, null=True)  # Field name made lowercase.
    includes_elderly_units = models.CharField(db_column='Includes_Elderly_Units', max_length=2, blank=True, null=True)  # Field name made lowercase.
    section_8 = models.CharField(db_column='Section_8', max_length=25, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'loinc'


class Neighborhood(models.Model):
    neighborhood_id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'neighborhood'


class Permit(models.Model):
    permitnumber = models.CharField(max_length=12, blank=True, null=True)
    worktype = models.CharField(max_length=12, blank=True, null=True)
    permittypedescr = models.CharField(max_length=50, blank=True, null=True)
    description = models.CharField(max_length=50, blank=True, null=True)
    comments = models.TextField(blank=True, null=True)
    applicant = models.CharField(max_length=100, blank=True, null=True)
    declared_valuation = models.FloatField(blank=True, null=True)
    total_fees = models.IntegerField(blank=True, null=True)
    issued_date = models.DateTimeField(blank=True, null=True)
    expiration_date = models.DateTimeField(blank=True, null=True)
    status = models.CharField(max_length=12, blank=True, null=True)
    owner = models.CharField(max_length=50, blank=True, null=True)
    occupancy = models.CharField(max_length=25, blank=True, null=True)
    sq_ft = models.BigIntegerField(blank=True, null=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=2, blank=True, null=True)
    zip = models.IntegerField(blank=True, null=True)
    property_id = models.IntegerField(blank=True, null=True)
    parcel_id = models.BigIntegerField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    longi = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'permit'


class SocialVulnerabilityS(models.Model):
    fid = models.IntegerField(db_column='FID', primary_key=True)  # Field name made lowercase.
    geoid10 = models.BigIntegerField(db_column='GEOID10', blank=True, null=True)  # Field name made lowercase.
    area_sqft = models.FloatField(db_column='AREA_SQFT', blank=True, null=True)  # Field name made lowercase.
    area_acres = models.FloatField(db_column='AREA_ACRES', blank=True, null=True)  # Field name made lowercase.
    pop100_re = models.IntegerField(db_column='POP100_RE', blank=True, null=True)  # Field name made lowercase.
    hu100_re = models.IntegerField(db_column='HU100_RE', blank=True, null=True)  # Field name made lowercase.
    totdis = models.IntegerField(db_column='TotDis', blank=True, null=True)  # Field name made lowercase.
    totchild = models.IntegerField(db_column='TotChild', blank=True, null=True)  # Field name made lowercase.
    olderadult = models.IntegerField(db_column='OlderAdult', blank=True, null=True)  # Field name made lowercase.
    low_to_no = models.IntegerField(db_column='Low_to_No', blank=True, null=True)  # Field name made lowercase.
    lep = models.IntegerField(db_column='LEP', blank=True, null=True)  # Field name made lowercase.
    poc2 = models.IntegerField(db_column='POC2', blank=True, null=True)  # Field name made lowercase.
    medillnes = models.FloatField(db_column='MedIllnes', blank=True, null=True)  # Field name made lowercase.
    name = models.CharField(db_column='Name', max_length=30, blank=True, null=True)  # Field name made lowercase.
    shape_area = models.FloatField(db_column='Shape__Area', blank=True, null=True)  # Field name made lowercase. Field renamed because it contained more than one '_' in a row.
    shape_length = models.FloatField(db_column='Shape__Length', blank=True, null=True)  # Field name made lowercase. Field renamed because it contained more than one '_' in a row.

    class Meta:
        managed = False
        db_table = 'social_vulnerability_s'


class Stop(models.Model):
    ignore_this = models.IntegerField(blank=True, null=True)
    stop_id = models.IntegerField(primary_key=True)
    stop_name = models.CharField(max_length=25, blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    longitude = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'stop'


class Tree(models.Model):
    x = models.FloatField(db_column='X', blank=True, null=True)  # Field name made lowercase.
    y = models.FloatField(db_column='Y', blank=True, null=True)  # Field name made lowercase.
    objectid = models.IntegerField(db_column='OBJECTID', primary_key=True)  # Field name made lowercase.
    type = models.CharField(db_column='TYPE', max_length=12, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tree'
