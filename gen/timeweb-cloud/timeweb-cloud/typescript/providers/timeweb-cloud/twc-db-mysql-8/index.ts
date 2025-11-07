// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcDbMysql8Config extends cdktf.TerraformMetaArguments {
  /**
  * Interval between indices between rows for `AUTO_INCREMENT` columns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#auto_increment_increment TwcDbMysql8#auto_increment_increment}
  */
  readonly autoIncrementIncrement?: number;
  /**
  * Start value for `AUTO_INCREMENT` columns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#auto_increment_offset TwcDbMysql8#auto_increment_offset}
  */
  readonly autoIncrementOffset?: number;
  /**
  * Hash type for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#hash_type TwcDbMysql8#hash_type}
  */
  readonly hashType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#id TwcDbMysql8#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IOPS count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#innodb_io_capacity TwcDbMysql8#innodb_io_capacity}
  */
  readonly innodbIoCapacity?: number;
  /**
  * Threads count for cleanup operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#innodb_purge_threads TwcDbMysql8#innodb_purge_threads}
  */
  readonly innodbPurgeThreads?: number;
  /**
  * Threads count for read operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#innodb_read_io_threads TwcDbMysql8#innodb_read_io_threads}
  */
  readonly innodbReadIoThreads?: number;
  /**
  * Maximum active threads count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#innodb_thread_concurrency TwcDbMysql8#innodb_thread_concurrency}
  */
  readonly innodbThreadConcurrency?: number;
  /**
  * Threads count for write operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#innodb_write_io_threads TwcDbMysql8#innodb_write_io_threads}
  */
  readonly innodbWriteIoThreads?: number;
  /**
  * Flag that shows allowability database only by external IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#is_external_ip TwcDbMysql8#is_external_ip}
  */
  readonly isExternalIp?: boolean | cdktf.IResolvable;
  /**
  * Buffer size for JOIN operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#join_buffer_size TwcDbMysql8#join_buffer_size}
  */
  readonly joinBufferSize?: number;
  /**
  * Login for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#login TwcDbMysql8#login}
  */
  readonly login?: string;
  /**
  * Max allowed size for one packet or parameter that may be sent via `mysql_stmt_send_long_data()`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#max_allowed_packet TwcDbMysql8#max_allowed_packet}
  */
  readonly maxAllowedPacket?: number;
  /**
  * The maximum permitted number of simultaneous client connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#max_connections TwcDbMysql8#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Max size for user MEMORY-tables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#max_heap_table_size TwcDbMysql8#max_heap_table_size}
  */
  readonly maxHeapTableSize?: number;
  /**
  * Name for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#name TwcDbMysql8#name}
  */
  readonly name: string;
  /**
  * Password for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#password TwcDbMysql8#password}
  */
  readonly password: string;
  /**
  * Preset ID for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#preset_id TwcDbMysql8#preset_id}
  */
  readonly presetId: number;
  /**
  * Project ID for created DB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#project_id TwcDbMysql8#project_id}
  */
  readonly projectId?: number;
  /**
  * The current server SQL mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#sql_mode TwcDbMysql8#sql_mode}
  */
  readonly sqlMode?: string[];
  /**
  * local_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#local_network TwcDbMysql8#local_network}
  */
  readonly localNetwork?: TwcDbMysql8LocalNetwork;
}
export interface TwcDbMysql8DiskStats {
}

export function twcDbMysql8DiskStatsToTerraform(struct?: TwcDbMysql8DiskStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcDbMysql8DiskStatsToHclTerraform(struct?: TwcDbMysql8DiskStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcDbMysql8DiskStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcDbMysql8DiskStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcDbMysql8DiskStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}

export class TwcDbMysql8DiskStatsList extends cdktf.ComplexList {

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
  public get(index: number): TwcDbMysql8DiskStatsOutputReference {
    return new TwcDbMysql8DiskStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcDbMysql8LocalNetwork {
  /**
  * ID of VPC for assign address from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#id TwcDbMysql8#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Address in VPC subnetwork for manual assign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#ip TwcDbMysql8#ip}
  */
  readonly ip?: string;
}

export function twcDbMysql8LocalNetworkToTerraform(struct?: TwcDbMysql8LocalNetworkOutputReference | TwcDbMysql8LocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function twcDbMysql8LocalNetworkToHclTerraform(struct?: TwcDbMysql8LocalNetworkOutputReference | TwcDbMysql8LocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TwcDbMysql8LocalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcDbMysql8LocalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcDbMysql8LocalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._ip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._ip = value.ip;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8 twc_db_mysql_8}
*/
export class TwcDbMysql8 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_db_mysql_8";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcDbMysql8 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcDbMysql8 to import
  * @param importFromId The id of the existing TwcDbMysql8 that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcDbMysql8 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_db_mysql_8", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.6/docs/resources/twc_db_mysql_8 twc_db_mysql_8} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcDbMysql8Config
  */
  public constructor(scope: Construct, id: string, config: TwcDbMysql8Config) {
    super(scope, id, {
      terraformResourceType: 'twc_db_mysql_8',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoIncrementIncrement = config.autoIncrementIncrement;
    this._autoIncrementOffset = config.autoIncrementOffset;
    this._hashType = config.hashType;
    this._id = config.id;
    this._innodbIoCapacity = config.innodbIoCapacity;
    this._innodbPurgeThreads = config.innodbPurgeThreads;
    this._innodbReadIoThreads = config.innodbReadIoThreads;
    this._innodbThreadConcurrency = config.innodbThreadConcurrency;
    this._innodbWriteIoThreads = config.innodbWriteIoThreads;
    this._isExternalIp = config.isExternalIp;
    this._joinBufferSize = config.joinBufferSize;
    this._login = config.login;
    this._maxAllowedPacket = config.maxAllowedPacket;
    this._maxConnections = config.maxConnections;
    this._maxHeapTableSize = config.maxHeapTableSize;
    this._name = config.name;
    this._password = config.password;
    this._presetId = config.presetId;
    this._projectId = config.projectId;
    this._sqlMode = config.sqlMode;
    this._localNetwork.internalValue = config.localNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_increment_increment - computed: true, optional: true, required: false
  private _autoIncrementIncrement?: number; 
  public get autoIncrementIncrement() {
    return this.getNumberAttribute('auto_increment_increment');
  }
  public set autoIncrementIncrement(value: number) {
    this._autoIncrementIncrement = value;
  }
  public resetAutoIncrementIncrement() {
    this._autoIncrementIncrement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementIncrementInput() {
    return this._autoIncrementIncrement;
  }

  // auto_increment_offset - computed: true, optional: true, required: false
  private _autoIncrementOffset?: number; 
  public get autoIncrementOffset() {
    return this.getNumberAttribute('auto_increment_offset');
  }
  public set autoIncrementOffset(value: number) {
    this._autoIncrementOffset = value;
  }
  public resetAutoIncrementOffset() {
    this._autoIncrementOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIncrementOffsetInput() {
    return this._autoIncrementOffset;
  }

  // disk_stats - computed: true, optional: false, required: false
  private _diskStats = new TwcDbMysql8DiskStatsList(this, "disk_stats", false);
  public get diskStats() {
    return this._diskStats;
  }

  // hash_type - computed: false, optional: true, required: false
  private _hashType?: string; 
  public get hashType() {
    return this.getStringAttribute('hash_type');
  }
  public set hashType(value: string) {
    this._hashType = value;
  }
  public resetHashType() {
    this._hashType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashTypeInput() {
    return this._hashType;
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

  // innodb_io_capacity - computed: true, optional: true, required: false
  private _innodbIoCapacity?: number; 
  public get innodbIoCapacity() {
    return this.getNumberAttribute('innodb_io_capacity');
  }
  public set innodbIoCapacity(value: number) {
    this._innodbIoCapacity = value;
  }
  public resetInnodbIoCapacity() {
    this._innodbIoCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbIoCapacityInput() {
    return this._innodbIoCapacity;
  }

  // innodb_purge_threads - computed: true, optional: true, required: false
  private _innodbPurgeThreads?: number; 
  public get innodbPurgeThreads() {
    return this.getNumberAttribute('innodb_purge_threads');
  }
  public set innodbPurgeThreads(value: number) {
    this._innodbPurgeThreads = value;
  }
  public resetInnodbPurgeThreads() {
    this._innodbPurgeThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbPurgeThreadsInput() {
    return this._innodbPurgeThreads;
  }

  // innodb_read_io_threads - computed: true, optional: true, required: false
  private _innodbReadIoThreads?: number; 
  public get innodbReadIoThreads() {
    return this.getNumberAttribute('innodb_read_io_threads');
  }
  public set innodbReadIoThreads(value: number) {
    this._innodbReadIoThreads = value;
  }
  public resetInnodbReadIoThreads() {
    this._innodbReadIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbReadIoThreadsInput() {
    return this._innodbReadIoThreads;
  }

  // innodb_thread_concurrency - computed: true, optional: true, required: false
  private _innodbThreadConcurrency?: number; 
  public get innodbThreadConcurrency() {
    return this.getNumberAttribute('innodb_thread_concurrency');
  }
  public set innodbThreadConcurrency(value: number) {
    this._innodbThreadConcurrency = value;
  }
  public resetInnodbThreadConcurrency() {
    this._innodbThreadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbThreadConcurrencyInput() {
    return this._innodbThreadConcurrency;
  }

  // innodb_write_io_threads - computed: true, optional: true, required: false
  private _innodbWriteIoThreads?: number; 
  public get innodbWriteIoThreads() {
    return this.getNumberAttribute('innodb_write_io_threads');
  }
  public set innodbWriteIoThreads(value: number) {
    this._innodbWriteIoThreads = value;
  }
  public resetInnodbWriteIoThreads() {
    this._innodbWriteIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbWriteIoThreadsInput() {
    return this._innodbWriteIoThreads;
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // is_external_ip - computed: true, optional: true, required: false
  private _isExternalIp?: boolean | cdktf.IResolvable; 
  public get isExternalIp() {
    return this.getBooleanAttribute('is_external_ip');
  }
  public set isExternalIp(value: boolean | cdktf.IResolvable) {
    this._isExternalIp = value;
  }
  public resetIsExternalIp() {
    this._isExternalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExternalIpInput() {
    return this._isExternalIp;
  }

  // join_buffer_size - computed: true, optional: true, required: false
  private _joinBufferSize?: number; 
  public get joinBufferSize() {
    return this.getNumberAttribute('join_buffer_size');
  }
  public set joinBufferSize(value: number) {
    this._joinBufferSize = value;
  }
  public resetJoinBufferSize() {
    this._joinBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinBufferSizeInput() {
    return this._joinBufferSize;
  }

  // local_ip - computed: true, optional: false, required: false
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }

  // login - computed: false, optional: true, required: false
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  public resetLogin() {
    this._login = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // max_allowed_packet - computed: true, optional: true, required: false
  private _maxAllowedPacket?: number; 
  public get maxAllowedPacket() {
    return this.getNumberAttribute('max_allowed_packet');
  }
  public set maxAllowedPacket(value: number) {
    this._maxAllowedPacket = value;
  }
  public resetMaxAllowedPacket() {
    this._maxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedPacketInput() {
    return this._maxAllowedPacket;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_heap_table_size - computed: true, optional: true, required: false
  private _maxHeapTableSize?: number; 
  public get maxHeapTableSize() {
    return this.getNumberAttribute('max_heap_table_size');
  }
  public set maxHeapTableSize(value: number) {
    this._maxHeapTableSize = value;
  }
  public resetMaxHeapTableSize() {
    this._maxHeapTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeapTableSizeInput() {
    return this._maxHeapTableSize;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // preset_id - computed: false, optional: false, required: true
  private _presetId?: number; 
  public get presetId() {
    return this.getNumberAttribute('preset_id');
  }
  public set presetId(value: number) {
    this._presetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // sql_mode - computed: true, optional: true, required: false
  private _sqlMode?: string[]; 
  public get sqlMode() {
    return cdktf.Fn.tolist(this.getListAttribute('sql_mode'));
  }
  public set sqlMode(value: string[]) {
    this._sqlMode = value;
  }
  public resetSqlMode() {
    this._sqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlModeInput() {
    return this._sqlMode;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // local_network - computed: false, optional: true, required: false
  private _localNetwork = new TwcDbMysql8LocalNetworkOutputReference(this, "local_network");
  public get localNetwork() {
    return this._localNetwork;
  }
  public putLocalNetwork(value: TwcDbMysql8LocalNetwork) {
    this._localNetwork.internalValue = value;
  }
  public resetLocalNetwork() {
    this._localNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetworkInput() {
    return this._localNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_increment_increment: cdktf.numberToTerraform(this._autoIncrementIncrement),
      auto_increment_offset: cdktf.numberToTerraform(this._autoIncrementOffset),
      hash_type: cdktf.stringToTerraform(this._hashType),
      id: cdktf.stringToTerraform(this._id),
      innodb_io_capacity: cdktf.numberToTerraform(this._innodbIoCapacity),
      innodb_purge_threads: cdktf.numberToTerraform(this._innodbPurgeThreads),
      innodb_read_io_threads: cdktf.numberToTerraform(this._innodbReadIoThreads),
      innodb_thread_concurrency: cdktf.numberToTerraform(this._innodbThreadConcurrency),
      innodb_write_io_threads: cdktf.numberToTerraform(this._innodbWriteIoThreads),
      is_external_ip: cdktf.booleanToTerraform(this._isExternalIp),
      join_buffer_size: cdktf.numberToTerraform(this._joinBufferSize),
      login: cdktf.stringToTerraform(this._login),
      max_allowed_packet: cdktf.numberToTerraform(this._maxAllowedPacket),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      max_heap_table_size: cdktf.numberToTerraform(this._maxHeapTableSize),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      preset_id: cdktf.numberToTerraform(this._presetId),
      project_id: cdktf.numberToTerraform(this._projectId),
      sql_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sqlMode),
      local_network: twcDbMysql8LocalNetworkToTerraform(this._localNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_increment_increment: {
        value: cdktf.numberToHclTerraform(this._autoIncrementIncrement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_increment_offset: {
        value: cdktf.numberToHclTerraform(this._autoIncrementOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hash_type: {
        value: cdktf.stringToHclTerraform(this._hashType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      innodb_io_capacity: {
        value: cdktf.numberToHclTerraform(this._innodbIoCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_purge_threads: {
        value: cdktf.numberToHclTerraform(this._innodbPurgeThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_read_io_threads: {
        value: cdktf.numberToHclTerraform(this._innodbReadIoThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_thread_concurrency: {
        value: cdktf.numberToHclTerraform(this._innodbThreadConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      innodb_write_io_threads: {
        value: cdktf.numberToHclTerraform(this._innodbWriteIoThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_external_ip: {
        value: cdktf.booleanToHclTerraform(this._isExternalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      join_buffer_size: {
        value: cdktf.numberToHclTerraform(this._joinBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login: {
        value: cdktf.stringToHclTerraform(this._login),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_allowed_packet: {
        value: cdktf.numberToHclTerraform(this._maxAllowedPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_heap_table_size: {
        value: cdktf.numberToHclTerraform(this._maxHeapTableSize),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset_id: {
        value: cdktf.numberToHclTerraform(this._presetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sql_mode: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sqlMode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_network: {
        value: twcDbMysql8LocalNetworkToHclTerraform(this._localNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcDbMysql8LocalNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
