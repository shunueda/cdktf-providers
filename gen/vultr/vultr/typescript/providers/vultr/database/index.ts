// https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#access_cert Database#access_cert}
  */
  readonly accessCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#access_key Database#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#backup_hour Database#backup_hour}
  */
  readonly backupHour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#backup_minute Database#backup_minute}
  */
  readonly backupMinute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#cluster_time_zone Database#cluster_time_zone}
  */
  readonly clusterTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#database_engine Database#database_engine}
  */
  readonly databaseEngine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#database_engine_version Database#database_engine_version}
  */
  readonly databaseEngineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#enable_kafka_connect Database#enable_kafka_connect}
  */
  readonly enableKafkaConnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#enable_kafka_rest Database#enable_kafka_rest}
  */
  readonly enableKafkaRest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#enable_schema_registry Database#enable_schema_registry}
  */
  readonly enableSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#eviction_policy Database#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#ferretdb_credentials Database#ferretdb_credentials}
  */
  readonly ferretdbCredentials?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#id Database#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#kafka_rest_uri Database#kafka_rest_uri}
  */
  readonly kafkaRestUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#label Database#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#maintenance_dow Database#maintenance_dow}
  */
  readonly maintenanceDow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#maintenance_time Database#maintenance_time}
  */
  readonly maintenanceTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_long_query_time Database#mysql_long_query_time}
  */
  readonly mysqlLongQueryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_require_primary_key Database#mysql_require_primary_key}
  */
  readonly mysqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_slow_query_log Database#mysql_slow_query_log}
  */
  readonly mysqlSlowQueryLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_sql_modes Database#mysql_sql_modes}
  */
  readonly mysqlSqlModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#password Database#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#plan Database#plan}
  */
  readonly plan: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#plan_brokers Database#plan_brokers}
  */
  readonly planBrokers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#plan_disk Database#plan_disk}
  */
  readonly planDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#plan_replicas Database#plan_replicas}
  */
  readonly planReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#public_host Database#public_host}
  */
  readonly publicHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#region Database#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#sasl_port Database#sasl_port}
  */
  readonly saslPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#schema_registry_uri Database#schema_registry_uri}
  */
  readonly schemaRegistryUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#tag Database#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#trusted_ips Database#trusted_ips}
  */
  readonly trustedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#vpc_id Database#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * read_replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#read_replicas Database#read_replicas}
  */
  readonly readReplicas?: DatabaseReadReplicas[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#timeouts Database#timeouts}
  */
  readonly timeouts?: DatabaseTimeouts;
}
export interface DatabaseReadReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#backup_hour Database#backup_hour}
  */
  readonly backupHour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#backup_minute Database#backup_minute}
  */
  readonly backupMinute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#eviction_policy Database#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#ferretdb_credentials Database#ferretdb_credentials}
  */
  readonly ferretdbCredentials?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#label Database#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_long_query_time Database#mysql_long_query_time}
  */
  readonly mysqlLongQueryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_require_primary_key Database#mysql_require_primary_key}
  */
  readonly mysqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_slow_query_log Database#mysql_slow_query_log}
  */
  readonly mysqlSlowQueryLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#mysql_sql_modes Database#mysql_sql_modes}
  */
  readonly mysqlSqlModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#plan_disk Database#plan_disk}
  */
  readonly planDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#public_host Database#public_host}
  */
  readonly publicHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#region Database#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#tag Database#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#trusted_ips Database#trusted_ips}
  */
  readonly trustedIps?: string[];
}

export function databaseReadReplicasToTerraform(struct?: DatabaseReadReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_hour: cdktf.stringToTerraform(struct!.backupHour),
    backup_minute: cdktf.stringToTerraform(struct!.backupMinute),
    eviction_policy: cdktf.stringToTerraform(struct!.evictionPolicy),
    ferretdb_credentials: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ferretdbCredentials),
    label: cdktf.stringToTerraform(struct!.label),
    mysql_long_query_time: cdktf.numberToTerraform(struct!.mysqlLongQueryTime),
    mysql_require_primary_key: cdktf.booleanToTerraform(struct!.mysqlRequirePrimaryKey),
    mysql_slow_query_log: cdktf.booleanToTerraform(struct!.mysqlSlowQueryLog),
    mysql_sql_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mysqlSqlModes),
    plan_disk: cdktf.numberToTerraform(struct!.planDisk),
    public_host: cdktf.stringToTerraform(struct!.publicHost),
    region: cdktf.stringToTerraform(struct!.region),
    tag: cdktf.stringToTerraform(struct!.tag),
    trusted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedIps),
  }
}


export function databaseReadReplicasToHclTerraform(struct?: DatabaseReadReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_hour: {
      value: cdktf.stringToHclTerraform(struct!.backupHour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_minute: {
      value: cdktf.stringToHclTerraform(struct!.backupMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.evictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ferretdb_credentials: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ferretdbCredentials),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mysql_long_query_time: {
      value: cdktf.numberToHclTerraform(struct!.mysqlLongQueryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mysql_require_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.mysqlRequirePrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mysql_slow_query_log: {
      value: cdktf.booleanToHclTerraform(struct!.mysqlSlowQueryLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mysql_sql_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mysqlSqlModes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    plan_disk: {
      value: cdktf.numberToHclTerraform(struct!.planDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_host: {
      value: cdktf.stringToHclTerraform(struct!.publicHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseReadReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseReadReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupHour = this._backupHour;
    }
    if (this._backupMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinute = this._backupMinute;
    }
    if (this._evictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPolicy = this._evictionPolicy;
    }
    if (this._ferretdbCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.ferretdbCredentials = this._ferretdbCredentials;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._mysqlLongQueryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlLongQueryTime = this._mysqlLongQueryTime;
    }
    if (this._mysqlRequirePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlRequirePrimaryKey = this._mysqlRequirePrimaryKey;
    }
    if (this._mysqlSlowQueryLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSlowQueryLog = this._mysqlSlowQueryLog;
    }
    if (this._mysqlSqlModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSqlModes = this._mysqlSqlModes;
    }
    if (this._planDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.planDisk = this._planDisk;
    }
    if (this._publicHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicHost = this._publicHost;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._trustedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedIps = this._trustedIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseReadReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._evictionPolicy = undefined;
      this._ferretdbCredentials = undefined;
      this._label = undefined;
      this._mysqlLongQueryTime = undefined;
      this._mysqlRequirePrimaryKey = undefined;
      this._mysqlSlowQueryLog = undefined;
      this._mysqlSqlModes = undefined;
      this._planDisk = undefined;
      this._publicHost = undefined;
      this._region = undefined;
      this._tag = undefined;
      this._trustedIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._evictionPolicy = value.evictionPolicy;
      this._ferretdbCredentials = value.ferretdbCredentials;
      this._label = value.label;
      this._mysqlLongQueryTime = value.mysqlLongQueryTime;
      this._mysqlRequirePrimaryKey = value.mysqlRequirePrimaryKey;
      this._mysqlSlowQueryLog = value.mysqlSlowQueryLog;
      this._mysqlSqlModes = value.mysqlSqlModes;
      this._planDisk = value.planDisk;
      this._publicHost = value.publicHost;
      this._region = value.region;
      this._tag = value.tag;
      this._trustedIps = value.trustedIps;
    }
  }

  // backup_hour - computed: true, optional: true, required: false
  private _backupHour?: string; 
  public get backupHour() {
    return this.getStringAttribute('backup_hour');
  }
  public set backupHour(value: string) {
    this._backupHour = value;
  }
  public resetBackupHour() {
    this._backupHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHourInput() {
    return this._backupHour;
  }

  // backup_minute - computed: true, optional: true, required: false
  private _backupMinute?: string; 
  public get backupMinute() {
    return this.getStringAttribute('backup_minute');
  }
  public set backupMinute(value: string) {
    this._backupMinute = value;
  }
  public resetBackupMinute() {
    this._backupMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinuteInput() {
    return this._backupMinute;
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

  // eviction_policy - computed: true, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // ferretdb_credentials - computed: true, optional: true, required: false
  private _ferretdbCredentials?: { [key: string]: string }; 
  public get ferretdbCredentials() {
    return this.getStringMapAttribute('ferretdb_credentials');
  }
  public set ferretdbCredentials(value: { [key: string]: string }) {
    this._ferretdbCredentials = value;
  }
  public resetFerretdbCredentials() {
    this._ferretdbCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ferretdbCredentialsInput() {
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // mysql_long_query_time - computed: true, optional: true, required: false
  private _mysqlLongQueryTime?: number; 
  public get mysqlLongQueryTime() {
    return this.getNumberAttribute('mysql_long_query_time');
  }
  public set mysqlLongQueryTime(value: number) {
    this._mysqlLongQueryTime = value;
  }
  public resetMysqlLongQueryTime() {
    this._mysqlLongQueryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLongQueryTimeInput() {
    return this._mysqlLongQueryTime;
  }

  // mysql_require_primary_key - computed: true, optional: true, required: false
  private _mysqlRequirePrimaryKey?: boolean | cdktf.IResolvable; 
  public get mysqlRequirePrimaryKey() {
    return this.getBooleanAttribute('mysql_require_primary_key');
  }
  public set mysqlRequirePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._mysqlRequirePrimaryKey = value;
  }
  public resetMysqlRequirePrimaryKey() {
    this._mysqlRequirePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlRequirePrimaryKeyInput() {
    return this._mysqlRequirePrimaryKey;
  }

  // mysql_slow_query_log - computed: true, optional: true, required: false
  private _mysqlSlowQueryLog?: boolean | cdktf.IResolvable; 
  public get mysqlSlowQueryLog() {
    return this.getBooleanAttribute('mysql_slow_query_log');
  }
  public set mysqlSlowQueryLog(value: boolean | cdktf.IResolvable) {
    this._mysqlSlowQueryLog = value;
  }
  public resetMysqlSlowQueryLog() {
    this._mysqlSlowQueryLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSlowQueryLogInput() {
    return this._mysqlSlowQueryLog;
  }

  // mysql_sql_modes - computed: true, optional: true, required: false
  private _mysqlSqlModes?: string[]; 
  public get mysqlSqlModes() {
    return cdktf.Fn.tolist(this.getListAttribute('mysql_sql_modes'));
  }
  public set mysqlSqlModes(value: string[]) {
    this._mysqlSqlModes = value;
  }
  public resetMysqlSqlModes() {
    this._mysqlSqlModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSqlModesInput() {
    return this._mysqlSqlModes;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // plan_disk - computed: true, optional: true, required: false
  private _planDisk?: number; 
  public get planDisk() {
    return this.getNumberAttribute('plan_disk');
  }
  public set planDisk(value: number) {
    this._planDisk = value;
  }
  public resetPlanDisk() {
    this._planDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planDiskInput() {
    return this._planDisk;
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

  // public_host - computed: true, optional: true, required: false
  private _publicHost?: string; 
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }
  public set publicHost(value: string) {
    this._publicHost = value;
  }
  public resetPublicHost() {
    this._publicHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicHostInput() {
    return this._publicHost;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // trusted_ips - computed: true, optional: true, required: false
  private _trustedIps?: string[]; 
  public get trustedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_ips'));
  }
  public set trustedIps(value: string[]) {
    this._trustedIps = value;
  }
  public resetTrustedIps() {
    this._trustedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIpsInput() {
    return this._trustedIps;
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

export class DatabaseReadReplicasList extends cdktf.ComplexList {
  public internalValue? : DatabaseReadReplicas[] | cdktf.IResolvable

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
  public get(index: number): DatabaseReadReplicasOutputReference {
    return new DatabaseReadReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#create Database#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#update Database#update}
  */
  readonly update?: string;
}

export function databaseTimeoutsToTerraform(struct?: DatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseTimeoutsToHclTerraform(struct?: DatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database vultr_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Database to import
  * @param importFromId The id of the existing Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.27.1/docs/resources/database vultr_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_database',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.27.1',
        providerVersionConstraint: '2.27.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessCert = config.accessCert;
    this._accessKey = config.accessKey;
    this._backupHour = config.backupHour;
    this._backupMinute = config.backupMinute;
    this._clusterTimeZone = config.clusterTimeZone;
    this._databaseEngine = config.databaseEngine;
    this._databaseEngineVersion = config.databaseEngineVersion;
    this._enableKafkaConnect = config.enableKafkaConnect;
    this._enableKafkaRest = config.enableKafkaRest;
    this._enableSchemaRegistry = config.enableSchemaRegistry;
    this._evictionPolicy = config.evictionPolicy;
    this._ferretdbCredentials = config.ferretdbCredentials;
    this._id = config.id;
    this._kafkaRestUri = config.kafkaRestUri;
    this._label = config.label;
    this._maintenanceDow = config.maintenanceDow;
    this._maintenanceTime = config.maintenanceTime;
    this._mysqlLongQueryTime = config.mysqlLongQueryTime;
    this._mysqlRequirePrimaryKey = config.mysqlRequirePrimaryKey;
    this._mysqlSlowQueryLog = config.mysqlSlowQueryLog;
    this._mysqlSqlModes = config.mysqlSqlModes;
    this._password = config.password;
    this._plan = config.plan;
    this._planBrokers = config.planBrokers;
    this._planDisk = config.planDisk;
    this._planReplicas = config.planReplicas;
    this._publicHost = config.publicHost;
    this._region = config.region;
    this._saslPort = config.saslPort;
    this._schemaRegistryUri = config.schemaRegistryUri;
    this._tag = config.tag;
    this._trustedIps = config.trustedIps;
    this._vpcId = config.vpcId;
    this._readReplicas.internalValue = config.readReplicas;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_cert - computed: true, optional: true, required: false
  private _accessCert?: string; 
  public get accessCert() {
    return this.getStringAttribute('access_cert');
  }
  public set accessCert(value: string) {
    this._accessCert = value;
  }
  public resetAccessCert() {
    this._accessCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCertInput() {
    return this._accessCert;
  }

  // access_key - computed: true, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // backup_hour - computed: false, optional: true, required: false
  private _backupHour?: string; 
  public get backupHour() {
    return this.getStringAttribute('backup_hour');
  }
  public set backupHour(value: string) {
    this._backupHour = value;
  }
  public resetBackupHour() {
    this._backupHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHourInput() {
    return this._backupHour;
  }

  // backup_minute - computed: false, optional: true, required: false
  private _backupMinute?: string; 
  public get backupMinute() {
    return this.getStringAttribute('backup_minute');
  }
  public set backupMinute(value: string) {
    this._backupMinute = value;
  }
  public resetBackupMinute() {
    this._backupMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinuteInput() {
    return this._backupMinute;
  }

  // cluster_time_zone - computed: true, optional: true, required: false
  private _clusterTimeZone?: string; 
  public get clusterTimeZone() {
    return this.getStringAttribute('cluster_time_zone');
  }
  public set clusterTimeZone(value: string) {
    this._clusterTimeZone = value;
  }
  public resetClusterTimeZone() {
    this._clusterTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTimeZoneInput() {
    return this._clusterTimeZone;
  }

  // database_engine - computed: false, optional: false, required: true
  private _databaseEngine?: string; 
  public get databaseEngine() {
    return this.getStringAttribute('database_engine');
  }
  public set databaseEngine(value: string) {
    this._databaseEngine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEngineInput() {
    return this._databaseEngine;
  }

  // database_engine_version - computed: false, optional: false, required: true
  private _databaseEngineVersion?: string; 
  public get databaseEngineVersion() {
    return this.getStringAttribute('database_engine_version');
  }
  public set databaseEngineVersion(value: string) {
    this._databaseEngineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEngineVersionInput() {
    return this._databaseEngineVersion;
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // enable_kafka_connect - computed: false, optional: true, required: false
  private _enableKafkaConnect?: boolean | cdktf.IResolvable; 
  public get enableKafkaConnect() {
    return this.getBooleanAttribute('enable_kafka_connect');
  }
  public set enableKafkaConnect(value: boolean | cdktf.IResolvable) {
    this._enableKafkaConnect = value;
  }
  public resetEnableKafkaConnect() {
    this._enableKafkaConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKafkaConnectInput() {
    return this._enableKafkaConnect;
  }

  // enable_kafka_rest - computed: false, optional: true, required: false
  private _enableKafkaRest?: boolean | cdktf.IResolvable; 
  public get enableKafkaRest() {
    return this.getBooleanAttribute('enable_kafka_rest');
  }
  public set enableKafkaRest(value: boolean | cdktf.IResolvable) {
    this._enableKafkaRest = value;
  }
  public resetEnableKafkaRest() {
    this._enableKafkaRest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKafkaRestInput() {
    return this._enableKafkaRest;
  }

  // enable_schema_registry - computed: false, optional: true, required: false
  private _enableSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get enableSchemaRegistry() {
    return this.getBooleanAttribute('enable_schema_registry');
  }
  public set enableSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._enableSchemaRegistry = value;
  }
  public resetEnableSchemaRegistry() {
    this._enableSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSchemaRegistryInput() {
    return this._enableSchemaRegistry;
  }

  // eviction_policy - computed: true, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // ferretdb_credentials - computed: true, optional: true, required: false
  private _ferretdbCredentials?: { [key: string]: string }; 
  public get ferretdbCredentials() {
    return this.getStringMapAttribute('ferretdb_credentials');
  }
  public set ferretdbCredentials(value: { [key: string]: string }) {
    this._ferretdbCredentials = value;
  }
  public resetFerretdbCredentials() {
    this._ferretdbCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ferretdbCredentialsInput() {
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

  // kafka_rest_uri - computed: true, optional: true, required: false
  private _kafkaRestUri?: string; 
  public get kafkaRestUri() {
    return this.getStringAttribute('kafka_rest_uri');
  }
  public set kafkaRestUri(value: string) {
    this._kafkaRestUri = value;
  }
  public resetKafkaRestUri() {
    this._kafkaRestUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaRestUriInput() {
    return this._kafkaRestUri;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // latest_backup - computed: true, optional: false, required: false
  public get latestBackup() {
    return this.getStringAttribute('latest_backup');
  }

  // maintenance_dow - computed: true, optional: true, required: false
  private _maintenanceDow?: string; 
  public get maintenanceDow() {
    return this.getStringAttribute('maintenance_dow');
  }
  public set maintenanceDow(value: string) {
    this._maintenanceDow = value;
  }
  public resetMaintenanceDow() {
    this._maintenanceDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDowInput() {
    return this._maintenanceDow;
  }

  // maintenance_time - computed: true, optional: true, required: false
  private _maintenanceTime?: string; 
  public get maintenanceTime() {
    return this.getStringAttribute('maintenance_time');
  }
  public set maintenanceTime(value: string) {
    this._maintenanceTime = value;
  }
  public resetMaintenanceTime() {
    this._maintenanceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeInput() {
    return this._maintenanceTime;
  }

  // mysql_long_query_time - computed: true, optional: true, required: false
  private _mysqlLongQueryTime?: number; 
  public get mysqlLongQueryTime() {
    return this.getNumberAttribute('mysql_long_query_time');
  }
  public set mysqlLongQueryTime(value: number) {
    this._mysqlLongQueryTime = value;
  }
  public resetMysqlLongQueryTime() {
    this._mysqlLongQueryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLongQueryTimeInput() {
    return this._mysqlLongQueryTime;
  }

  // mysql_require_primary_key - computed: false, optional: true, required: false
  private _mysqlRequirePrimaryKey?: boolean | cdktf.IResolvable; 
  public get mysqlRequirePrimaryKey() {
    return this.getBooleanAttribute('mysql_require_primary_key');
  }
  public set mysqlRequirePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._mysqlRequirePrimaryKey = value;
  }
  public resetMysqlRequirePrimaryKey() {
    this._mysqlRequirePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlRequirePrimaryKeyInput() {
    return this._mysqlRequirePrimaryKey;
  }

  // mysql_slow_query_log - computed: true, optional: true, required: false
  private _mysqlSlowQueryLog?: boolean | cdktf.IResolvable; 
  public get mysqlSlowQueryLog() {
    return this.getBooleanAttribute('mysql_slow_query_log');
  }
  public set mysqlSlowQueryLog(value: boolean | cdktf.IResolvable) {
    this._mysqlSlowQueryLog = value;
  }
  public resetMysqlSlowQueryLog() {
    this._mysqlSlowQueryLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSlowQueryLogInput() {
    return this._mysqlSlowQueryLog;
  }

  // mysql_sql_modes - computed: false, optional: true, required: false
  private _mysqlSqlModes?: string[]; 
  public get mysqlSqlModes() {
    return cdktf.Fn.tolist(this.getListAttribute('mysql_sql_modes'));
  }
  public set mysqlSqlModes(value: string[]) {
    this._mysqlSqlModes = value;
  }
  public resetMysqlSqlModes() {
    this._mysqlSqlModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSqlModesInput() {
    return this._mysqlSqlModes;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // plan_brokers - computed: true, optional: true, required: false
  private _planBrokers?: number; 
  public get planBrokers() {
    return this.getNumberAttribute('plan_brokers');
  }
  public set planBrokers(value: number) {
    this._planBrokers = value;
  }
  public resetPlanBrokers() {
    this._planBrokers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planBrokersInput() {
    return this._planBrokers;
  }

  // plan_disk - computed: true, optional: true, required: false
  private _planDisk?: number; 
  public get planDisk() {
    return this.getNumberAttribute('plan_disk');
  }
  public set planDisk(value: number) {
    this._planDisk = value;
  }
  public resetPlanDisk() {
    this._planDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planDiskInput() {
    return this._planDisk;
  }

  // plan_ram - computed: true, optional: false, required: false
  public get planRam() {
    return this.getNumberAttribute('plan_ram');
  }

  // plan_replicas - computed: true, optional: true, required: false
  private _planReplicas?: number; 
  public get planReplicas() {
    return this.getNumberAttribute('plan_replicas');
  }
  public set planReplicas(value: number) {
    this._planReplicas = value;
  }
  public resetPlanReplicas() {
    this._planReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planReplicasInput() {
    return this._planReplicas;
  }

  // plan_vcpus - computed: true, optional: false, required: false
  public get planVcpus() {
    return this.getNumberAttribute('plan_vcpus');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // public_host - computed: true, optional: true, required: false
  private _publicHost?: string; 
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }
  public set publicHost(value: string) {
    this._publicHost = value;
  }
  public resetPublicHost() {
    this._publicHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicHostInput() {
    return this._publicHost;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sasl_port - computed: true, optional: true, required: false
  private _saslPort?: string; 
  public get saslPort() {
    return this.getStringAttribute('sasl_port');
  }
  public set saslPort(value: string) {
    this._saslPort = value;
  }
  public resetSaslPort() {
    this._saslPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPortInput() {
    return this._saslPort;
  }

  // schema_registry_uri - computed: true, optional: true, required: false
  private _schemaRegistryUri?: string; 
  public get schemaRegistryUri() {
    return this.getStringAttribute('schema_registry_uri');
  }
  public set schemaRegistryUri(value: string) {
    this._schemaRegistryUri = value;
  }
  public resetSchemaRegistryUri() {
    this._schemaRegistryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryUriInput() {
    return this._schemaRegistryUri;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // trusted_ips - computed: false, optional: true, required: false
  private _trustedIps?: string[]; 
  public get trustedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_ips'));
  }
  public set trustedIps(value: string[]) {
    this._trustedIps = value;
  }
  public resetTrustedIps() {
    this._trustedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedIpsInput() {
    return this._trustedIps;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // read_replicas - computed: false, optional: true, required: false
  private _readReplicas = new DatabaseReadReplicasList(this, "read_replicas", true);
  public get readReplicas() {
    return this._readReplicas;
  }
  public putReadReplicas(value: DatabaseReadReplicas[] | cdktf.IResolvable) {
    this._readReplicas.internalValue = value;
  }
  public resetReadReplicas() {
    this._readReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readReplicasInput() {
    return this._readReplicas.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_cert: cdktf.stringToTerraform(this._accessCert),
      access_key: cdktf.stringToTerraform(this._accessKey),
      backup_hour: cdktf.stringToTerraform(this._backupHour),
      backup_minute: cdktf.stringToTerraform(this._backupMinute),
      cluster_time_zone: cdktf.stringToTerraform(this._clusterTimeZone),
      database_engine: cdktf.stringToTerraform(this._databaseEngine),
      database_engine_version: cdktf.stringToTerraform(this._databaseEngineVersion),
      enable_kafka_connect: cdktf.booleanToTerraform(this._enableKafkaConnect),
      enable_kafka_rest: cdktf.booleanToTerraform(this._enableKafkaRest),
      enable_schema_registry: cdktf.booleanToTerraform(this._enableSchemaRegistry),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      ferretdb_credentials: cdktf.hashMapper(cdktf.stringToTerraform)(this._ferretdbCredentials),
      id: cdktf.stringToTerraform(this._id),
      kafka_rest_uri: cdktf.stringToTerraform(this._kafkaRestUri),
      label: cdktf.stringToTerraform(this._label),
      maintenance_dow: cdktf.stringToTerraform(this._maintenanceDow),
      maintenance_time: cdktf.stringToTerraform(this._maintenanceTime),
      mysql_long_query_time: cdktf.numberToTerraform(this._mysqlLongQueryTime),
      mysql_require_primary_key: cdktf.booleanToTerraform(this._mysqlRequirePrimaryKey),
      mysql_slow_query_log: cdktf.booleanToTerraform(this._mysqlSlowQueryLog),
      mysql_sql_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mysqlSqlModes),
      password: cdktf.stringToTerraform(this._password),
      plan: cdktf.stringToTerraform(this._plan),
      plan_brokers: cdktf.numberToTerraform(this._planBrokers),
      plan_disk: cdktf.numberToTerraform(this._planDisk),
      plan_replicas: cdktf.numberToTerraform(this._planReplicas),
      public_host: cdktf.stringToTerraform(this._publicHost),
      region: cdktf.stringToTerraform(this._region),
      sasl_port: cdktf.stringToTerraform(this._saslPort),
      schema_registry_uri: cdktf.stringToTerraform(this._schemaRegistryUri),
      tag: cdktf.stringToTerraform(this._tag),
      trusted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustedIps),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      read_replicas: cdktf.listMapper(databaseReadReplicasToTerraform, true)(this._readReplicas.internalValue),
      timeouts: databaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_cert: {
        value: cdktf.stringToHclTerraform(this._accessCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_hour: {
        value: cdktf.stringToHclTerraform(this._backupHour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_minute: {
        value: cdktf.stringToHclTerraform(this._backupMinute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_time_zone: {
        value: cdktf.stringToHclTerraform(this._clusterTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_engine: {
        value: cdktf.stringToHclTerraform(this._databaseEngine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_engine_version: {
        value: cdktf.stringToHclTerraform(this._databaseEngineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_kafka_connect: {
        value: cdktf.booleanToHclTerraform(this._enableKafkaConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_kafka_rest: {
        value: cdktf.booleanToHclTerraform(this._enableKafkaRest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_schema_registry: {
        value: cdktf.booleanToHclTerraform(this._enableSchemaRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      eviction_policy: {
        value: cdktf.stringToHclTerraform(this._evictionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ferretdb_credentials: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ferretdbCredentials),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_rest_uri: {
        value: cdktf.stringToHclTerraform(this._kafkaRestUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_long_query_time: {
        value: cdktf.numberToHclTerraform(this._mysqlLongQueryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysql_require_primary_key: {
        value: cdktf.booleanToHclTerraform(this._mysqlRequirePrimaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mysql_slow_query_log: {
        value: cdktf.booleanToHclTerraform(this._mysqlSlowQueryLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mysql_sql_modes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mysqlSqlModes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan_brokers: {
        value: cdktf.numberToHclTerraform(this._planBrokers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan_disk: {
        value: cdktf.numberToHclTerraform(this._planDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      plan_replicas: {
        value: cdktf.numberToHclTerraform(this._planReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_host: {
        value: cdktf.stringToHclTerraform(this._publicHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_port: {
        value: cdktf.stringToHclTerraform(this._saslPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_registry_uri: {
        value: cdktf.stringToHclTerraform(this._schemaRegistryUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trusted_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustedIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_replicas: {
        value: cdktf.listMapperHcl(databaseReadReplicasToHclTerraform, true)(this._readReplicas.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DatabaseReadReplicasList",
      },
      timeouts: {
        value: databaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
