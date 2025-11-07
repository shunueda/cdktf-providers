// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#id Mysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#labels Mysql#labels}
  */
  readonly labels?: string[];
  /**
  * Maximum CPU core count. The MySQL instance's CPU core count will be autoscaled based on the workload. The number of cores stays between 1 and `max_core_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#max_core_count Mysql#max_core_count}
  */
  readonly maxCoreCount?: number;
  /**
  * Binary Logging Format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_binlog_format Mysql#mysql_binlog_format}
  */
  readonly mysqlBinlogFormat?: string;
  /**
  * Server Timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_default_time_zone Mysql#mysql_default_time_zone}
  */
  readonly mysqlDefaultTimeZone?: string;
  /**
  * Binary Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_log_bin Mysql#mysql_log_bin}
  */
  readonly mysqlLogBin?: boolean | cdktf.IResolvable;
  /**
  * Max Allowed Packet Size. Format: xM (where x is an integer, M stands for unit: k(kB), M(MB), G(GB)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_max_allowed_packet Mysql#mysql_max_allowed_packet}
  */
  readonly mysqlMaxAllowedPacket?: string;
  /**
  * Max Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_max_connections Mysql#mysql_max_connections}
  */
  readonly mysqlMaxConnections?: number;
  /**
  * Enable query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_query_cache Mysql#mysql_query_cache}
  */
  readonly mysqlQueryCache?: boolean | cdktf.IResolvable;
  /**
  * Query Cache Limit. Format: xM (where x is an integer, M stands for unit: k(kB), M(MB), G(GB)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_query_cache_limit Mysql#mysql_query_cache_limit}
  */
  readonly mysqlQueryCacheLimit?: string;
  /**
  * Query Cache Size. Format: xM (where x is an integer, M stands for unit: k(kB), M(MB), G(GB)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_query_cache_size Mysql#mysql_query_cache_size}
  */
  readonly mysqlQueryCacheSize?: string;
  /**
  * Server Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_server_id Mysql#mysql_server_id}
  */
  readonly mysqlServerId?: number;
  /**
  * SQL Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#mysql_sql_mode Mysql#mysql_sql_mode}
  */
  readonly mysqlSqlMode?: string;
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#name Mysql#name}
  */
  readonly name: string;
  /**
  * The UUID of the network that the service is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#network_uuid Mysql#network_uuid}
  */
  readonly networkUuid?: string;
  /**
  * Performance class of MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#performance_class Mysql#performance_class}
  */
  readonly performanceClass: string;
  /**
  * The MySQL release of this instance.\n
  * 				For convenience, please use gscloud https://github.com/gridscale/gscloud to get the list of available MySQL service releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#release Mysql#release}
  */
  readonly release: string;
  /**
  * Security zone UUID linked to MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#security_zone_uuid Mysql#security_zone_uuid}
  */
  readonly securityZoneUuid?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#timeouts Mysql#timeouts}
  */
  readonly timeouts?: MysqlTimeouts;
}
export interface MysqlListenPort {
}

export function mysqlListenPortToTerraform(struct?: MysqlListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlListenPortToHclTerraform(struct?: MysqlListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlListenPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlListenPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlListenPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class MysqlListenPortList extends cdktf.ComplexList {

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
  public get(index: number): MysqlListenPortOutputReference {
    return new MysqlListenPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#create Mysql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#delete Mysql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#update Mysql#update}
  */
  readonly update?: string;
}

export function mysqlTimeoutsToTerraform(struct?: MysqlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function mysqlTimeoutsToHclTerraform(struct?: MysqlTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class MysqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql gridscale_mysql}
*/
export class Mysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mysql to import
  * @param importFromId The id of the existing Mysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mysql gridscale_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_mysql',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
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
    this._labels = config.labels;
    this._maxCoreCount = config.maxCoreCount;
    this._mysqlBinlogFormat = config.mysqlBinlogFormat;
    this._mysqlDefaultTimeZone = config.mysqlDefaultTimeZone;
    this._mysqlLogBin = config.mysqlLogBin;
    this._mysqlMaxAllowedPacket = config.mysqlMaxAllowedPacket;
    this._mysqlMaxConnections = config.mysqlMaxConnections;
    this._mysqlQueryCache = config.mysqlQueryCache;
    this._mysqlQueryCacheLimit = config.mysqlQueryCacheLimit;
    this._mysqlQueryCacheSize = config.mysqlQueryCacheSize;
    this._mysqlServerId = config.mysqlServerId;
    this._mysqlSqlMode = config.mysqlSqlMode;
    this._name = config.name;
    this._networkUuid = config.networkUuid;
    this._performanceClass = config.performanceClass;
    this._release = config.release;
    this._securityZoneUuid = config.securityZoneUuid;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // listen_port - computed: true, optional: false, required: false
  private _listenPort = new MysqlListenPortList(this, "listen_port", true);
  public get listenPort() {
    return this._listenPort;
  }

  // max_core_count - computed: true, optional: true, required: false
  private _maxCoreCount?: number; 
  public get maxCoreCount() {
    return this.getNumberAttribute('max_core_count');
  }
  public set maxCoreCount(value: number) {
    this._maxCoreCount = value;
  }
  public resetMaxCoreCount() {
    this._maxCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCoreCountInput() {
    return this._maxCoreCount;
  }

  // mysql_binlog_format - computed: false, optional: true, required: false
  private _mysqlBinlogFormat?: string; 
  public get mysqlBinlogFormat() {
    return this.getStringAttribute('mysql_binlog_format');
  }
  public set mysqlBinlogFormat(value: string) {
    this._mysqlBinlogFormat = value;
  }
  public resetMysqlBinlogFormat() {
    this._mysqlBinlogFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlBinlogFormatInput() {
    return this._mysqlBinlogFormat;
  }

  // mysql_default_time_zone - computed: false, optional: true, required: false
  private _mysqlDefaultTimeZone?: string; 
  public get mysqlDefaultTimeZone() {
    return this.getStringAttribute('mysql_default_time_zone');
  }
  public set mysqlDefaultTimeZone(value: string) {
    this._mysqlDefaultTimeZone = value;
  }
  public resetMysqlDefaultTimeZone() {
    this._mysqlDefaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDefaultTimeZoneInput() {
    return this._mysqlDefaultTimeZone;
  }

  // mysql_log_bin - computed: false, optional: true, required: false
  private _mysqlLogBin?: boolean | cdktf.IResolvable; 
  public get mysqlLogBin() {
    return this.getBooleanAttribute('mysql_log_bin');
  }
  public set mysqlLogBin(value: boolean | cdktf.IResolvable) {
    this._mysqlLogBin = value;
  }
  public resetMysqlLogBin() {
    this._mysqlLogBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLogBinInput() {
    return this._mysqlLogBin;
  }

  // mysql_max_allowed_packet - computed: false, optional: true, required: false
  private _mysqlMaxAllowedPacket?: string; 
  public get mysqlMaxAllowedPacket() {
    return this.getStringAttribute('mysql_max_allowed_packet');
  }
  public set mysqlMaxAllowedPacket(value: string) {
    this._mysqlMaxAllowedPacket = value;
  }
  public resetMysqlMaxAllowedPacket() {
    this._mysqlMaxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlMaxAllowedPacketInput() {
    return this._mysqlMaxAllowedPacket;
  }

  // mysql_max_connections - computed: false, optional: true, required: false
  private _mysqlMaxConnections?: number; 
  public get mysqlMaxConnections() {
    return this.getNumberAttribute('mysql_max_connections');
  }
  public set mysqlMaxConnections(value: number) {
    this._mysqlMaxConnections = value;
  }
  public resetMysqlMaxConnections() {
    this._mysqlMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlMaxConnectionsInput() {
    return this._mysqlMaxConnections;
  }

  // mysql_query_cache - computed: false, optional: true, required: false
  private _mysqlQueryCache?: boolean | cdktf.IResolvable; 
  public get mysqlQueryCache() {
    return this.getBooleanAttribute('mysql_query_cache');
  }
  public set mysqlQueryCache(value: boolean | cdktf.IResolvable) {
    this._mysqlQueryCache = value;
  }
  public resetMysqlQueryCache() {
    this._mysqlQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlQueryCacheInput() {
    return this._mysqlQueryCache;
  }

  // mysql_query_cache_limit - computed: false, optional: true, required: false
  private _mysqlQueryCacheLimit?: string; 
  public get mysqlQueryCacheLimit() {
    return this.getStringAttribute('mysql_query_cache_limit');
  }
  public set mysqlQueryCacheLimit(value: string) {
    this._mysqlQueryCacheLimit = value;
  }
  public resetMysqlQueryCacheLimit() {
    this._mysqlQueryCacheLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlQueryCacheLimitInput() {
    return this._mysqlQueryCacheLimit;
  }

  // mysql_query_cache_size - computed: false, optional: true, required: false
  private _mysqlQueryCacheSize?: string; 
  public get mysqlQueryCacheSize() {
    return this.getStringAttribute('mysql_query_cache_size');
  }
  public set mysqlQueryCacheSize(value: string) {
    this._mysqlQueryCacheSize = value;
  }
  public resetMysqlQueryCacheSize() {
    this._mysqlQueryCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlQueryCacheSizeInput() {
    return this._mysqlQueryCacheSize;
  }

  // mysql_server_id - computed: false, optional: true, required: false
  private _mysqlServerId?: number; 
  public get mysqlServerId() {
    return this.getNumberAttribute('mysql_server_id');
  }
  public set mysqlServerId(value: number) {
    this._mysqlServerId = value;
  }
  public resetMysqlServerId() {
    this._mysqlServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlServerIdInput() {
    return this._mysqlServerId;
  }

  // mysql_sql_mode - computed: false, optional: true, required: false
  private _mysqlSqlMode?: string; 
  public get mysqlSqlMode() {
    return this.getStringAttribute('mysql_sql_mode');
  }
  public set mysqlSqlMode(value: string) {
    this._mysqlSqlMode = value;
  }
  public resetMysqlSqlMode() {
    this._mysqlSqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSqlModeInput() {
    return this._mysqlSqlMode;
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

  // network_uuid - computed: true, optional: true, required: false
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  public resetNetworkUuid() {
    this._networkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // performance_class - computed: false, optional: false, required: true
  private _performanceClass?: string; 
  public get performanceClass() {
    return this.getStringAttribute('performance_class');
  }
  public set performanceClass(value: string) {
    this._performanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassInput() {
    return this._performanceClass;
  }

  // release - computed: false, optional: false, required: true
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // security_zone_uuid - computed: true, optional: true, required: false
  private _securityZoneUuid?: string; 
  public get securityZoneUuid() {
    return this.getStringAttribute('security_zone_uuid');
  }
  public set securityZoneUuid(value: string) {
    this._securityZoneUuid = value;
  }
  public resetSecurityZoneUuid() {
    this._securityZoneUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneUuidInput() {
    return this._securityZoneUuid;
  }

  // service_template_category - computed: true, optional: false, required: false
  public get serviceTemplateCategory() {
    return this.getStringAttribute('service_template_category');
  }

  // service_template_uuid - computed: true, optional: false, required: false
  public get serviceTemplateUuid() {
    return this.getStringAttribute('service_template_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // usage_in_minutes - computed: true, optional: false, required: false
  public get usageInMinutes() {
    return this.getNumberAttribute('usage_in_minutes');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MysqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      max_core_count: cdktf.numberToTerraform(this._maxCoreCount),
      mysql_binlog_format: cdktf.stringToTerraform(this._mysqlBinlogFormat),
      mysql_default_time_zone: cdktf.stringToTerraform(this._mysqlDefaultTimeZone),
      mysql_log_bin: cdktf.booleanToTerraform(this._mysqlLogBin),
      mysql_max_allowed_packet: cdktf.stringToTerraform(this._mysqlMaxAllowedPacket),
      mysql_max_connections: cdktf.numberToTerraform(this._mysqlMaxConnections),
      mysql_query_cache: cdktf.booleanToTerraform(this._mysqlQueryCache),
      mysql_query_cache_limit: cdktf.stringToTerraform(this._mysqlQueryCacheLimit),
      mysql_query_cache_size: cdktf.stringToTerraform(this._mysqlQueryCacheSize),
      mysql_server_id: cdktf.numberToTerraform(this._mysqlServerId),
      mysql_sql_mode: cdktf.stringToTerraform(this._mysqlSqlMode),
      name: cdktf.stringToTerraform(this._name),
      network_uuid: cdktf.stringToTerraform(this._networkUuid),
      performance_class: cdktf.stringToTerraform(this._performanceClass),
      release: cdktf.stringToTerraform(this._release),
      security_zone_uuid: cdktf.stringToTerraform(this._securityZoneUuid),
      timeouts: mysqlTimeoutsToTerraform(this._timeouts.internalValue),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_core_count: {
        value: cdktf.numberToHclTerraform(this._maxCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysql_binlog_format: {
        value: cdktf.stringToHclTerraform(this._mysqlBinlogFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_default_time_zone: {
        value: cdktf.stringToHclTerraform(this._mysqlDefaultTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_log_bin: {
        value: cdktf.booleanToHclTerraform(this._mysqlLogBin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mysql_max_allowed_packet: {
        value: cdktf.stringToHclTerraform(this._mysqlMaxAllowedPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_max_connections: {
        value: cdktf.numberToHclTerraform(this._mysqlMaxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysql_query_cache: {
        value: cdktf.booleanToHclTerraform(this._mysqlQueryCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mysql_query_cache_limit: {
        value: cdktf.stringToHclTerraform(this._mysqlQueryCacheLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_query_cache_size: {
        value: cdktf.stringToHclTerraform(this._mysqlQueryCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_server_id: {
        value: cdktf.numberToHclTerraform(this._mysqlServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mysql_sql_mode: {
        value: cdktf.stringToHclTerraform(this._mysqlSqlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_uuid: {
        value: cdktf.stringToHclTerraform(this._networkUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_class: {
        value: cdktf.stringToHclTerraform(this._performanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.stringToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_zone_uuid: {
        value: cdktf.stringToHclTerraform(this._securityZoneUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mysqlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
