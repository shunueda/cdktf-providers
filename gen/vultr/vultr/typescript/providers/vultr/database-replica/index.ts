// https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseReplicaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#backup_hour DatabaseReplica#backup_hour}
  */
  readonly backupHour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#backup_minute DatabaseReplica#backup_minute}
  */
  readonly backupMinute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#database_id DatabaseReplica#database_id}
  */
  readonly databaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#eviction_policy DatabaseReplica#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#ferretdb_credentials DatabaseReplica#ferretdb_credentials}
  */
  readonly ferretdbCredentials?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#label DatabaseReplica#label}
  */
  readonly label: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#mysql_long_query_time DatabaseReplica#mysql_long_query_time}
  */
  readonly mysqlLongQueryTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#mysql_require_primary_key DatabaseReplica#mysql_require_primary_key}
  */
  readonly mysqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#mysql_slow_query_log DatabaseReplica#mysql_slow_query_log}
  */
  readonly mysqlSlowQueryLog?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#mysql_sql_modes DatabaseReplica#mysql_sql_modes}
  */
  readonly mysqlSqlModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#plan_disk DatabaseReplica#plan_disk}
  */
  readonly planDisk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#public_host DatabaseReplica#public_host}
  */
  readonly publicHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#region DatabaseReplica#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#tag DatabaseReplica#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#trusted_ips DatabaseReplica#trusted_ips}
  */
  readonly trustedIps?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#timeouts DatabaseReplica#timeouts}
  */
  readonly timeouts?: DatabaseReplicaTimeouts;
}
export interface DatabaseReplicaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#create DatabaseReplica#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#update DatabaseReplica#update}
  */
  readonly update?: string;
}

export function databaseReplicaTimeoutsToTerraform(struct?: DatabaseReplicaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseReplicaTimeoutsToHclTerraform(struct?: DatabaseReplicaTimeouts | cdktf.IResolvable): any {
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

export class DatabaseReplicaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseReplicaTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseReplicaTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica vultr_database_replica}
*/
export class DatabaseReplica extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_database_replica";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseReplica resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseReplica to import
  * @param importFromId The id of the existing DatabaseReplica that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseReplica to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_database_replica", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/database_replica vultr_database_replica} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseReplicaConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseReplicaConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_database_replica',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.28.0',
        providerVersionConstraint: '2.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupHour = config.backupHour;
    this._backupMinute = config.backupMinute;
    this._databaseId = config.databaseId;
    this._evictionPolicy = config.evictionPolicy;
    this._ferretdbCredentials = config.ferretdbCredentials;
    this._label = config.label;
    this._mysqlLongQueryTime = config.mysqlLongQueryTime;
    this._mysqlRequirePrimaryKey = config.mysqlRequirePrimaryKey;
    this._mysqlSlowQueryLog = config.mysqlSlowQueryLog;
    this._mysqlSqlModes = config.mysqlSqlModes;
    this._planDisk = config.planDisk;
    this._publicHost = config.publicHost;
    this._region = config.region;
    this._tag = config.tag;
    this._trustedIps = config.trustedIps;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: string; 
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }
  public set databaseId(value: string) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseReplicaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseReplicaTimeouts) {
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
      backup_hour: cdktf.stringToTerraform(this._backupHour),
      backup_minute: cdktf.stringToTerraform(this._backupMinute),
      database_id: cdktf.stringToTerraform(this._databaseId),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      ferretdb_credentials: cdktf.hashMapper(cdktf.stringToTerraform)(this._ferretdbCredentials),
      label: cdktf.stringToTerraform(this._label),
      mysql_long_query_time: cdktf.numberToTerraform(this._mysqlLongQueryTime),
      mysql_require_primary_key: cdktf.booleanToTerraform(this._mysqlRequirePrimaryKey),
      mysql_slow_query_log: cdktf.booleanToTerraform(this._mysqlSlowQueryLog),
      mysql_sql_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mysqlSqlModes),
      plan_disk: cdktf.numberToTerraform(this._planDisk),
      public_host: cdktf.stringToTerraform(this._publicHost),
      region: cdktf.stringToTerraform(this._region),
      tag: cdktf.stringToTerraform(this._tag),
      trusted_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustedIps),
      timeouts: databaseReplicaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      database_id: {
        value: cdktf.stringToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      plan_disk: {
        value: cdktf.numberToHclTerraform(this._planDisk),
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
      timeouts: {
        value: databaseReplicaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseReplicaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
