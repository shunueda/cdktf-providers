// https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVultrDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database#id DataVultrDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database#filter DataVultrDatabase#filter}
  */
  readonly filter?: DataVultrDatabaseFilter[] | cdktf.IResolvable;
}
export interface DataVultrDatabaseReadReplicas {
}

export function dataVultrDatabaseReadReplicasToTerraform(struct?: DataVultrDatabaseReadReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVultrDatabaseReadReplicasToHclTerraform(struct?: DataVultrDatabaseReadReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVultrDatabaseReadReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVultrDatabaseReadReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVultrDatabaseReadReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_hour - computed: true, optional: false, required: false
  public get backupHour() {
    return this.getStringAttribute('backup_hour');
  }

  // backup_minute - computed: true, optional: false, required: false
  public get backupMinute() {
    return this.getStringAttribute('backup_minute');
  }

  // cluster_time_zone - computed: true, optional: false, required: false
  public get clusterTimeZone() {
    return this.getStringAttribute('cluster_time_zone');
  }

  // database_engine - computed: true, optional: false, required: false
  public get databaseEngine() {
    return this.getStringAttribute('database_engine');
  }

  // database_engine_version - computed: true, optional: false, required: false
  public get databaseEngineVersion() {
    return this.getStringAttribute('database_engine_version');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // eviction_policy - computed: true, optional: false, required: false
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }

  // ferretdb_credentials - computed: true, optional: false, required: false
  private _ferretdbCredentials = new cdktf.StringMap(this, "ferretdb_credentials");
  public get ferretdbCredentials() {
    return this._ferretdbCredentials;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // latest_backup - computed: true, optional: false, required: false
  public get latestBackup() {
    return this.getStringAttribute('latest_backup');
  }

  // maintenance_dow - computed: true, optional: false, required: false
  public get maintenanceDow() {
    return this.getStringAttribute('maintenance_dow');
  }

  // maintenance_time - computed: true, optional: false, required: false
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }

  // mysql_long_query_time - computed: true, optional: false, required: false
  public get mysqlLongQueryTime() {
    return this.getNumberAttribute('mysql_long_query_time');
  }

  // mysql_require_primary_key - computed: true, optional: false, required: false
  public get mysqlRequirePrimaryKey() {
    return this.getBooleanAttribute('mysql_require_primary_key');
  }

  // mysql_slow_query_log - computed: true, optional: false, required: false
  public get mysqlSlowQueryLog() {
    return this.getBooleanAttribute('mysql_slow_query_log');
  }

  // mysql_sql_modes - computed: true, optional: false, required: false
  public get mysqlSqlModes() {
    return cdktf.Fn.tolist(this.getListAttribute('mysql_sql_modes'));
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // plan_disk - computed: true, optional: false, required: false
  public get planDisk() {
    return this.getNumberAttribute('plan_disk');
  }

  // plan_ram - computed: true, optional: false, required: false
  public get planRam() {
    return this.getNumberAttribute('plan_ram');
  }

  // plan_replicas - computed: true, optional: false, required: false
  public get planReplicas() {
    return this.getNumberAttribute('plan_replicas');
  }

  // plan_vcpus - computed: true, optional: false, required: false
  public get planVcpus() {
    return this.getNumberAttribute('plan_vcpus');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // public_host - computed: true, optional: false, required: false
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // trusted_ips - computed: true, optional: false, required: false
  public get trustedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_ips'));
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataVultrDatabaseReadReplicasList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVultrDatabaseReadReplicasOutputReference {
    return new DataVultrDatabaseReadReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVultrDatabaseFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database#name DataVultrDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database#values DataVultrDatabase#values}
  */
  readonly values: string[];
}

export function dataVultrDatabaseFilterToTerraform(struct?: DataVultrDatabaseFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataVultrDatabaseFilterToHclTerraform(struct?: DataVultrDatabaseFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVultrDatabaseFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVultrDatabaseFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVultrDatabaseFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataVultrDatabaseFilterList extends cdktf.ComplexList {
  public internalValue? : DataVultrDatabaseFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataVultrDatabaseFilterOutputReference {
    return new DataVultrDatabaseFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database vultr_database}
*/
export class DataVultrDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVultrDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVultrDatabase to import
  * @param importFromId The id of the existing DataVultrDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVultrDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/data-sources/database vultr_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVultrDatabaseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVultrDatabaseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vultr_database',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_cert - computed: true, optional: false, required: false
  public get accessCert() {
    return this.getStringAttribute('access_cert');
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // backup_hour - computed: true, optional: false, required: false
  public get backupHour() {
    return this.getStringAttribute('backup_hour');
  }

  // backup_minute - computed: true, optional: false, required: false
  public get backupMinute() {
    return this.getStringAttribute('backup_minute');
  }

  // cluster_time_zone - computed: true, optional: false, required: false
  public get clusterTimeZone() {
    return this.getStringAttribute('cluster_time_zone');
  }

  // database_engine - computed: true, optional: false, required: false
  public get databaseEngine() {
    return this.getStringAttribute('database_engine');
  }

  // database_engine_version - computed: true, optional: false, required: false
  public get databaseEngineVersion() {
    return this.getStringAttribute('database_engine_version');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // enable_kafka_connect - computed: true, optional: false, required: false
  public get enableKafkaConnect() {
    return this.getBooleanAttribute('enable_kafka_connect');
  }

  // enable_kafka_rest - computed: true, optional: false, required: false
  public get enableKafkaRest() {
    return this.getBooleanAttribute('enable_kafka_rest');
  }

  // enable_schema_registry - computed: true, optional: false, required: false
  public get enableSchemaRegistry() {
    return this.getBooleanAttribute('enable_schema_registry');
  }

  // eviction_policy - computed: true, optional: false, required: false
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }

  // ferretdb_credentials - computed: true, optional: false, required: false
  private _ferretdbCredentials = new cdktf.StringMap(this, "ferretdb_credentials");
  public get ferretdbCredentials() {
    return this._ferretdbCredentials;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // kafka_rest_uri - computed: true, optional: false, required: false
  public get kafkaRestUri() {
    return this.getStringAttribute('kafka_rest_uri');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // latest_backup - computed: true, optional: false, required: false
  public get latestBackup() {
    return this.getStringAttribute('latest_backup');
  }

  // maintenance_dow - computed: true, optional: false, required: false
  public get maintenanceDow() {
    return this.getStringAttribute('maintenance_dow');
  }

  // maintenance_time - computed: true, optional: false, required: false
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }

  // mysql_long_query_time - computed: true, optional: false, required: false
  public get mysqlLongQueryTime() {
    return this.getNumberAttribute('mysql_long_query_time');
  }

  // mysql_require_primary_key - computed: true, optional: false, required: false
  public get mysqlRequirePrimaryKey() {
    return this.getBooleanAttribute('mysql_require_primary_key');
  }

  // mysql_slow_query_log - computed: true, optional: false, required: false
  public get mysqlSlowQueryLog() {
    return this.getBooleanAttribute('mysql_slow_query_log');
  }

  // mysql_sql_modes - computed: true, optional: false, required: false
  public get mysqlSqlModes() {
    return cdktf.Fn.tolist(this.getListAttribute('mysql_sql_modes'));
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // plan_brokers - computed: true, optional: false, required: false
  public get planBrokers() {
    return this.getNumberAttribute('plan_brokers');
  }

  // plan_disk - computed: true, optional: false, required: false
  public get planDisk() {
    return this.getNumberAttribute('plan_disk');
  }

  // plan_ram - computed: true, optional: false, required: false
  public get planRam() {
    return this.getNumberAttribute('plan_ram');
  }

  // plan_replicas - computed: true, optional: false, required: false
  public get planReplicas() {
    return this.getNumberAttribute('plan_replicas');
  }

  // plan_vcpus - computed: true, optional: false, required: false
  public get planVcpus() {
    return this.getNumberAttribute('plan_vcpus');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // public_host - computed: true, optional: false, required: false
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }

  // read_replicas - computed: true, optional: false, required: false
  private _readReplicas = new DataVultrDatabaseReadReplicasList(this, "read_replicas", false);
  public get readReplicas() {
    return this._readReplicas;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // sasl_port - computed: true, optional: false, required: false
  public get saslPort() {
    return this.getStringAttribute('sasl_port');
  }

  // schema_registry_uri - computed: true, optional: false, required: false
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // trusted_ips - computed: true, optional: false, required: false
  public get trustedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_ips'));
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataVultrDatabaseFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataVultrDatabaseFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataVultrDatabaseFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataVultrDatabaseFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataVultrDatabaseFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
