// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MariadbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#id Mariadb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#labels Mariadb#labels}
  */
  readonly labels?: string[];
  /**
  * Binary Logging Format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_binlog_format Mariadb#mariadb_binlog_format}
  */
  readonly mariadbBinlogFormat?: string;
  /**
  * Server Timezone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_default_time_zone Mariadb#mariadb_default_time_zone}
  */
  readonly mariadbDefaultTimeZone?: string;
  /**
  * Binary Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_log_bin Mariadb#mariadb_log_bin}
  */
  readonly mariadbLogBin?: boolean | cdktf.IResolvable;
  /**
  * Max Allowed Packet Size. Format: xM (where x is an integer, M stands for unit: k(kB), M(MB), G(GB)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_max_allowed_packet Mariadb#mariadb_max_allowed_packet}
  */
  readonly mariadbMaxAllowedPacket?: string;
  /**
  * Max Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_max_connections Mariadb#mariadb_max_connections}
  */
  readonly mariadbMaxConnections?: number;
  /**
  * Enable query cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_query_cache Mariadb#mariadb_query_cache}
  */
  readonly mariadbQueryCache?: boolean | cdktf.IResolvable;
  /**
  * Query Cache Limit. Format: xM (where x is an integer, M stands for unit: k(kB), M(MB), G(GB)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_query_cache_limit Mariadb#mariadb_query_cache_limit}
  */
  readonly mariadbQueryCacheLimit?: string;
  /**
  * Query Cache Size. Format: xM (where x is an integer, M stands for unit: k(kB), M(MB), G(GB)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_query_cache_size Mariadb#mariadb_query_cache_size}
  */
  readonly mariadbQueryCacheSize?: string;
  /**
  * Server Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_server_id Mariadb#mariadb_server_id}
  */
  readonly mariadbServerId?: number;
  /**
  * SQL Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#mariadb_sql_mode Mariadb#mariadb_sql_mode}
  */
  readonly mariadbSqlMode?: string;
  /**
  * Maximum CPU core count. The MariaDB instance's CPU core count will be autoscaled based on the workload. The number of cores stays between 1 and `max_core_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#max_core_count Mariadb#max_core_count}
  */
  readonly maxCoreCount?: number;
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#name Mariadb#name}
  */
  readonly name: string;
  /**
  * The UUID of the network that the service is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#network_uuid Mariadb#network_uuid}
  */
  readonly networkUuid?: string;
  /**
  * Performance class of MariaDB service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#performance_class Mariadb#performance_class}
  */
  readonly performanceClass: string;
  /**
  * The MariaDB release of this instance.\n
  * 				For convenience, please use gscloud https://github.com/gridscale/gscloud to get the list of available MariaDB service releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#release Mariadb#release}
  */
  readonly release: string;
  /**
  * Security zone UUID linked to MariaDB service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#security_zone_uuid Mariadb#security_zone_uuid}
  */
  readonly securityZoneUuid?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#timeouts Mariadb#timeouts}
  */
  readonly timeouts?: MariadbTimeouts;
}
export interface MariadbListenPort {
}

export function mariadbListenPortToTerraform(struct?: MariadbListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mariadbListenPortToHclTerraform(struct?: MariadbListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MariadbListenPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MariadbListenPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MariadbListenPort | undefined) {
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

export class MariadbListenPortList extends cdktf.ComplexList {

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
  public get(index: number): MariadbListenPortOutputReference {
    return new MariadbListenPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MariadbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#create Mariadb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#delete Mariadb#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#update Mariadb#update}
  */
  readonly update?: string;
}

export function mariadbTimeoutsToTerraform(struct?: MariadbTimeouts | cdktf.IResolvable): any {
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


export function mariadbTimeoutsToHclTerraform(struct?: MariadbTimeouts | cdktf.IResolvable): any {
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

export class MariadbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MariadbTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MariadbTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb gridscale_mariadb}
*/
export class Mariadb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_mariadb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mariadb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mariadb to import
  * @param importFromId The id of the existing Mariadb that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mariadb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_mariadb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/mariadb gridscale_mariadb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MariadbConfig
  */
  public constructor(scope: Construct, id: string, config: MariadbConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_mariadb',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3',
        providerVersionConstraint: '2.2.3'
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
    this._mariadbBinlogFormat = config.mariadbBinlogFormat;
    this._mariadbDefaultTimeZone = config.mariadbDefaultTimeZone;
    this._mariadbLogBin = config.mariadbLogBin;
    this._mariadbMaxAllowedPacket = config.mariadbMaxAllowedPacket;
    this._mariadbMaxConnections = config.mariadbMaxConnections;
    this._mariadbQueryCache = config.mariadbQueryCache;
    this._mariadbQueryCacheLimit = config.mariadbQueryCacheLimit;
    this._mariadbQueryCacheSize = config.mariadbQueryCacheSize;
    this._mariadbServerId = config.mariadbServerId;
    this._mariadbSqlMode = config.mariadbSqlMode;
    this._maxCoreCount = config.maxCoreCount;
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
  private _listenPort = new MariadbListenPortList(this, "listen_port", true);
  public get listenPort() {
    return this._listenPort;
  }

  // mariadb_binlog_format - computed: false, optional: true, required: false
  private _mariadbBinlogFormat?: string; 
  public get mariadbBinlogFormat() {
    return this.getStringAttribute('mariadb_binlog_format');
  }
  public set mariadbBinlogFormat(value: string) {
    this._mariadbBinlogFormat = value;
  }
  public resetMariadbBinlogFormat() {
    this._mariadbBinlogFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbBinlogFormatInput() {
    return this._mariadbBinlogFormat;
  }

  // mariadb_default_time_zone - computed: false, optional: true, required: false
  private _mariadbDefaultTimeZone?: string; 
  public get mariadbDefaultTimeZone() {
    return this.getStringAttribute('mariadb_default_time_zone');
  }
  public set mariadbDefaultTimeZone(value: string) {
    this._mariadbDefaultTimeZone = value;
  }
  public resetMariadbDefaultTimeZone() {
    this._mariadbDefaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbDefaultTimeZoneInput() {
    return this._mariadbDefaultTimeZone;
  }

  // mariadb_log_bin - computed: false, optional: true, required: false
  private _mariadbLogBin?: boolean | cdktf.IResolvable; 
  public get mariadbLogBin() {
    return this.getBooleanAttribute('mariadb_log_bin');
  }
  public set mariadbLogBin(value: boolean | cdktf.IResolvable) {
    this._mariadbLogBin = value;
  }
  public resetMariadbLogBin() {
    this._mariadbLogBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbLogBinInput() {
    return this._mariadbLogBin;
  }

  // mariadb_max_allowed_packet - computed: false, optional: true, required: false
  private _mariadbMaxAllowedPacket?: string; 
  public get mariadbMaxAllowedPacket() {
    return this.getStringAttribute('mariadb_max_allowed_packet');
  }
  public set mariadbMaxAllowedPacket(value: string) {
    this._mariadbMaxAllowedPacket = value;
  }
  public resetMariadbMaxAllowedPacket() {
    this._mariadbMaxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbMaxAllowedPacketInput() {
    return this._mariadbMaxAllowedPacket;
  }

  // mariadb_max_connections - computed: false, optional: true, required: false
  private _mariadbMaxConnections?: number; 
  public get mariadbMaxConnections() {
    return this.getNumberAttribute('mariadb_max_connections');
  }
  public set mariadbMaxConnections(value: number) {
    this._mariadbMaxConnections = value;
  }
  public resetMariadbMaxConnections() {
    this._mariadbMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbMaxConnectionsInput() {
    return this._mariadbMaxConnections;
  }

  // mariadb_query_cache - computed: false, optional: true, required: false
  private _mariadbQueryCache?: boolean | cdktf.IResolvable; 
  public get mariadbQueryCache() {
    return this.getBooleanAttribute('mariadb_query_cache');
  }
  public set mariadbQueryCache(value: boolean | cdktf.IResolvable) {
    this._mariadbQueryCache = value;
  }
  public resetMariadbQueryCache() {
    this._mariadbQueryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbQueryCacheInput() {
    return this._mariadbQueryCache;
  }

  // mariadb_query_cache_limit - computed: false, optional: true, required: false
  private _mariadbQueryCacheLimit?: string; 
  public get mariadbQueryCacheLimit() {
    return this.getStringAttribute('mariadb_query_cache_limit');
  }
  public set mariadbQueryCacheLimit(value: string) {
    this._mariadbQueryCacheLimit = value;
  }
  public resetMariadbQueryCacheLimit() {
    this._mariadbQueryCacheLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbQueryCacheLimitInput() {
    return this._mariadbQueryCacheLimit;
  }

  // mariadb_query_cache_size - computed: false, optional: true, required: false
  private _mariadbQueryCacheSize?: string; 
  public get mariadbQueryCacheSize() {
    return this.getStringAttribute('mariadb_query_cache_size');
  }
  public set mariadbQueryCacheSize(value: string) {
    this._mariadbQueryCacheSize = value;
  }
  public resetMariadbQueryCacheSize() {
    this._mariadbQueryCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbQueryCacheSizeInput() {
    return this._mariadbQueryCacheSize;
  }

  // mariadb_server_id - computed: false, optional: true, required: false
  private _mariadbServerId?: number; 
  public get mariadbServerId() {
    return this.getNumberAttribute('mariadb_server_id');
  }
  public set mariadbServerId(value: number) {
    this._mariadbServerId = value;
  }
  public resetMariadbServerId() {
    this._mariadbServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbServerIdInput() {
    return this._mariadbServerId;
  }

  // mariadb_sql_mode - computed: false, optional: true, required: false
  private _mariadbSqlMode?: string; 
  public get mariadbSqlMode() {
    return this.getStringAttribute('mariadb_sql_mode');
  }
  public set mariadbSqlMode(value: string) {
    this._mariadbSqlMode = value;
  }
  public resetMariadbSqlMode() {
    this._mariadbSqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mariadbSqlModeInput() {
    return this._mariadbSqlMode;
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
  private _timeouts = new MariadbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MariadbTimeouts) {
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
      mariadb_binlog_format: cdktf.stringToTerraform(this._mariadbBinlogFormat),
      mariadb_default_time_zone: cdktf.stringToTerraform(this._mariadbDefaultTimeZone),
      mariadb_log_bin: cdktf.booleanToTerraform(this._mariadbLogBin),
      mariadb_max_allowed_packet: cdktf.stringToTerraform(this._mariadbMaxAllowedPacket),
      mariadb_max_connections: cdktf.numberToTerraform(this._mariadbMaxConnections),
      mariadb_query_cache: cdktf.booleanToTerraform(this._mariadbQueryCache),
      mariadb_query_cache_limit: cdktf.stringToTerraform(this._mariadbQueryCacheLimit),
      mariadb_query_cache_size: cdktf.stringToTerraform(this._mariadbQueryCacheSize),
      mariadb_server_id: cdktf.numberToTerraform(this._mariadbServerId),
      mariadb_sql_mode: cdktf.stringToTerraform(this._mariadbSqlMode),
      max_core_count: cdktf.numberToTerraform(this._maxCoreCount),
      name: cdktf.stringToTerraform(this._name),
      network_uuid: cdktf.stringToTerraform(this._networkUuid),
      performance_class: cdktf.stringToTerraform(this._performanceClass),
      release: cdktf.stringToTerraform(this._release),
      security_zone_uuid: cdktf.stringToTerraform(this._securityZoneUuid),
      timeouts: mariadbTimeoutsToTerraform(this._timeouts.internalValue),
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
      mariadb_binlog_format: {
        value: cdktf.stringToHclTerraform(this._mariadbBinlogFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mariadb_default_time_zone: {
        value: cdktf.stringToHclTerraform(this._mariadbDefaultTimeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mariadb_log_bin: {
        value: cdktf.booleanToHclTerraform(this._mariadbLogBin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mariadb_max_allowed_packet: {
        value: cdktf.stringToHclTerraform(this._mariadbMaxAllowedPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mariadb_max_connections: {
        value: cdktf.numberToHclTerraform(this._mariadbMaxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mariadb_query_cache: {
        value: cdktf.booleanToHclTerraform(this._mariadbQueryCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mariadb_query_cache_limit: {
        value: cdktf.stringToHclTerraform(this._mariadbQueryCacheLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mariadb_query_cache_size: {
        value: cdktf.stringToHclTerraform(this._mariadbQueryCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mariadb_server_id: {
        value: cdktf.numberToHclTerraform(this._mariadbServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mariadb_sql_mode: {
        value: cdktf.stringToHclTerraform(this._mariadbSqlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_core_count: {
        value: cdktf.numberToHclTerraform(this._maxCoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: mariadbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MariadbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
