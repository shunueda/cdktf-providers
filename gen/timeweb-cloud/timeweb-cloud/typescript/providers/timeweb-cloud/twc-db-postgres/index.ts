// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcDbPostgresConfig extends cdktf.TerraformMetaArguments {
  /**
  * Change ration before `ANALYZE` will be started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#autovacuum_analyze_scale_factor TwcDbPostgres#autovacuum_analyze_scale_factor}
  */
  readonly autovacuumAnalyzeScaleFactor?: number;
  /**
  * Interval between background writes runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#bgwriter_delay TwcDbPostgres#bgwriter_delay}
  */
  readonly bgwriterDelay?: number;
  /**
  * Maximum pages cache count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#bgwriter_lru_maxpages TwcDbPostgres#bgwriter_lru_maxpages}
  */
  readonly bgwriterLruMaxpages?: number;
  /**
  * Timeout between deadlock checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#deadlock_timeout TwcDbPostgres#deadlock_timeout}
  */
  readonly deadlockTimeout?: number;
  /**
  * Maximum write queue size of `GIN` index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#gin_pending_list_limit TwcDbPostgres#gin_pending_list_limit}
  */
  readonly ginPendingListLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#id TwcDbPostgres#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum idle time for opened transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#idle_in_transaction_session_timeout TwcDbPostgres#idle_in_transaction_session_timeout}
  */
  readonly idleInTransactionSessionTimeout?: number;
  /**
  * Maximum idle time for session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#idle_session_timeout TwcDbPostgres#idle_session_timeout}
  */
  readonly idleSessionTimeout?: number;
  /**
  * Flag that shows allowability database only by external IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#is_external_ip TwcDbPostgres#is_external_ip}
  */
  readonly isExternalIp?: boolean | cdktf.IResolvable;
  /**
  * Threshold of elements in `FROM` that will be transformed to explicit `JOIN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#join_collapse_limit TwcDbPostgres#join_collapse_limit}
  */
  readonly joinCollapseLimit?: number;
  /**
  * Time for obtaining lock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#lock_timeout TwcDbPostgres#lock_timeout}
  */
  readonly lockTimeout?: number;
  /**
  * Login for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#login TwcDbPostgres#login}
  */
  readonly login?: string;
  /**
  * Determines the maximum number of concurrent connections to the database server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#max_connections TwcDbPostgres#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Max count of stored prepared statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#max_prepared_transactions TwcDbPostgres#max_prepared_transactions}
  */
  readonly maxPreparedTransactions?: number;
  /**
  * Name for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#name TwcDbPostgres#name}
  */
  readonly name: string;
  /**
  * Password for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#password TwcDbPostgres#password}
  */
  readonly password: string;
  /**
  * Preset ID for database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#preset_id TwcDbPostgres#preset_id}
  */
  readonly presetId: number;
  /**
  * Project ID for created DB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#project_id TwcDbPostgres#project_id}
  */
  readonly projectId?: number;
  /**
  * Sets the number of shared memory buffers used by the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#shared_buffers TwcDbPostgres#shared_buffers}
  */
  readonly sharedBuffers?: number;
  /**
  * Sets the maximum number of temporary buffers used by each session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#temp_buffers TwcDbPostgres#temp_buffers}
  */
  readonly tempBuffers?: number;
  /**
  * Sets the number of disk-page buffers in shared memory for WAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#wal_buffers TwcDbPostgres#wal_buffers}
  */
  readonly walBuffers?: number;
  /**
  * Sets the maximum memory to be used by each autovacuum worker process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#work_mem TwcDbPostgres#work_mem}
  */
  readonly workMem?: number;
  /**
  * local_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#local_network TwcDbPostgres#local_network}
  */
  readonly localNetwork?: TwcDbPostgresLocalNetwork;
}
export interface TwcDbPostgresDiskStats {
}

export function twcDbPostgresDiskStatsToTerraform(struct?: TwcDbPostgresDiskStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function twcDbPostgresDiskStatsToHclTerraform(struct?: TwcDbPostgresDiskStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TwcDbPostgresDiskStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcDbPostgresDiskStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcDbPostgresDiskStats | undefined) {
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

export class TwcDbPostgresDiskStatsList extends cdktf.ComplexList {

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
  public get(index: number): TwcDbPostgresDiskStatsOutputReference {
    return new TwcDbPostgresDiskStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcDbPostgresLocalNetwork {
  /**
  * ID of VPC for assign address from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#id TwcDbPostgres#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Address in VPC subnetwork for manual assign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#ip TwcDbPostgres#ip}
  */
  readonly ip?: string;
}

export function twcDbPostgresLocalNetworkToTerraform(struct?: TwcDbPostgresLocalNetworkOutputReference | TwcDbPostgresLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function twcDbPostgresLocalNetworkToHclTerraform(struct?: TwcDbPostgresLocalNetworkOutputReference | TwcDbPostgresLocalNetwork): any {
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

export class TwcDbPostgresLocalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcDbPostgresLocalNetwork | undefined {
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

  public set internalValue(value: TwcDbPostgresLocalNetwork | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres twc_db_postgres}
*/
export class TwcDbPostgres extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_db_postgres";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcDbPostgres resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcDbPostgres to import
  * @param importFromId The id of the existing TwcDbPostgres that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcDbPostgres to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_db_postgres", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_db_postgres twc_db_postgres} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcDbPostgresConfig
  */
  public constructor(scope: Construct, id: string, config: TwcDbPostgresConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_db_postgres',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.8',
        providerVersionConstraint: '1.6.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autovacuumAnalyzeScaleFactor = config.autovacuumAnalyzeScaleFactor;
    this._bgwriterDelay = config.bgwriterDelay;
    this._bgwriterLruMaxpages = config.bgwriterLruMaxpages;
    this._deadlockTimeout = config.deadlockTimeout;
    this._ginPendingListLimit = config.ginPendingListLimit;
    this._id = config.id;
    this._idleInTransactionSessionTimeout = config.idleInTransactionSessionTimeout;
    this._idleSessionTimeout = config.idleSessionTimeout;
    this._isExternalIp = config.isExternalIp;
    this._joinCollapseLimit = config.joinCollapseLimit;
    this._lockTimeout = config.lockTimeout;
    this._login = config.login;
    this._maxConnections = config.maxConnections;
    this._maxPreparedTransactions = config.maxPreparedTransactions;
    this._name = config.name;
    this._password = config.password;
    this._presetId = config.presetId;
    this._projectId = config.projectId;
    this._sharedBuffers = config.sharedBuffers;
    this._tempBuffers = config.tempBuffers;
    this._walBuffers = config.walBuffers;
    this._workMem = config.workMem;
    this._localNetwork.internalValue = config.localNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autovacuum_analyze_scale_factor - computed: true, optional: true, required: false
  private _autovacuumAnalyzeScaleFactor?: number; 
  public get autovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('autovacuum_analyze_scale_factor');
  }
  public set autovacuumAnalyzeScaleFactor(value: number) {
    this._autovacuumAnalyzeScaleFactor = value;
  }
  public resetAutovacuumAnalyzeScaleFactor() {
    this._autovacuumAnalyzeScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeScaleFactorInput() {
    return this._autovacuumAnalyzeScaleFactor;
  }

  // bgwriter_delay - computed: true, optional: true, required: false
  private _bgwriterDelay?: number; 
  public get bgwriterDelay() {
    return this.getNumberAttribute('bgwriter_delay');
  }
  public set bgwriterDelay(value: number) {
    this._bgwriterDelay = value;
  }
  public resetBgwriterDelay() {
    this._bgwriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterDelayInput() {
    return this._bgwriterDelay;
  }

  // bgwriter_lru_maxpages - computed: true, optional: true, required: false
  private _bgwriterLruMaxpages?: number; 
  public get bgwriterLruMaxpages() {
    return this.getNumberAttribute('bgwriter_lru_maxpages');
  }
  public set bgwriterLruMaxpages(value: number) {
    this._bgwriterLruMaxpages = value;
  }
  public resetBgwriterLruMaxpages() {
    this._bgwriterLruMaxpages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMaxpagesInput() {
    return this._bgwriterLruMaxpages;
  }

  // deadlock_timeout - computed: true, optional: true, required: false
  private _deadlockTimeout?: number; 
  public get deadlockTimeout() {
    return this.getNumberAttribute('deadlock_timeout');
  }
  public set deadlockTimeout(value: number) {
    this._deadlockTimeout = value;
  }
  public resetDeadlockTimeout() {
    this._deadlockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlockTimeoutInput() {
    return this._deadlockTimeout;
  }

  // disk_stats - computed: true, optional: false, required: false
  private _diskStats = new TwcDbPostgresDiskStatsList(this, "disk_stats", false);
  public get diskStats() {
    return this._diskStats;
  }

  // gin_pending_list_limit - computed: true, optional: true, required: false
  private _ginPendingListLimit?: number; 
  public get ginPendingListLimit() {
    return this.getNumberAttribute('gin_pending_list_limit');
  }
  public set ginPendingListLimit(value: number) {
    this._ginPendingListLimit = value;
  }
  public resetGinPendingListLimit() {
    this._ginPendingListLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ginPendingListLimitInput() {
    return this._ginPendingListLimit;
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

  // idle_in_transaction_session_timeout - computed: true, optional: true, required: false
  private _idleInTransactionSessionTimeout?: number; 
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }
  public set idleInTransactionSessionTimeout(value: number) {
    this._idleInTransactionSessionTimeout = value;
  }
  public resetIdleInTransactionSessionTimeout() {
    this._idleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionSessionTimeoutInput() {
    return this._idleInTransactionSessionTimeout;
  }

  // idle_session_timeout - computed: true, optional: true, required: false
  private _idleSessionTimeout?: number; 
  public get idleSessionTimeout() {
    return this.getNumberAttribute('idle_session_timeout');
  }
  public set idleSessionTimeout(value: number) {
    this._idleSessionTimeout = value;
  }
  public resetIdleSessionTimeout() {
    this._idleSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionTimeoutInput() {
    return this._idleSessionTimeout;
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

  // join_collapse_limit - computed: true, optional: true, required: false
  private _joinCollapseLimit?: number; 
  public get joinCollapseLimit() {
    return this.getNumberAttribute('join_collapse_limit');
  }
  public set joinCollapseLimit(value: number) {
    this._joinCollapseLimit = value;
  }
  public resetJoinCollapseLimit() {
    this._joinCollapseLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinCollapseLimitInput() {
    return this._joinCollapseLimit;
  }

  // local_ip - computed: true, optional: false, required: false
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }

  // lock_timeout - computed: true, optional: true, required: false
  private _lockTimeout?: number; 
  public get lockTimeout() {
    return this.getNumberAttribute('lock_timeout');
  }
  public set lockTimeout(value: number) {
    this._lockTimeout = value;
  }
  public resetLockTimeout() {
    this._lockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeoutInput() {
    return this._lockTimeout;
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

  // max_prepared_transactions - computed: true, optional: true, required: false
  private _maxPreparedTransactions?: number; 
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }
  public set maxPreparedTransactions(value: number) {
    this._maxPreparedTransactions = value;
  }
  public resetMaxPreparedTransactions() {
    this._maxPreparedTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedTransactionsInput() {
    return this._maxPreparedTransactions;
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

  // shared_buffers - computed: true, optional: true, required: false
  private _sharedBuffers?: number; 
  public get sharedBuffers() {
    return this.getNumberAttribute('shared_buffers');
  }
  public set sharedBuffers(value: number) {
    this._sharedBuffers = value;
  }
  public resetSharedBuffers() {
    this._sharedBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBuffersInput() {
    return this._sharedBuffers;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // temp_buffers - computed: true, optional: true, required: false
  private _tempBuffers?: number; 
  public get tempBuffers() {
    return this.getNumberAttribute('temp_buffers');
  }
  public set tempBuffers(value: number) {
    this._tempBuffers = value;
  }
  public resetTempBuffers() {
    this._tempBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempBuffersInput() {
    return this._tempBuffers;
  }

  // wal_buffers - computed: true, optional: true, required: false
  private _walBuffers?: number; 
  public get walBuffers() {
    return this.getNumberAttribute('wal_buffers');
  }
  public set walBuffers(value: number) {
    this._walBuffers = value;
  }
  public resetWalBuffers() {
    this._walBuffers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walBuffersInput() {
    return this._walBuffers;
  }

  // work_mem - computed: true, optional: true, required: false
  private _workMem?: number; 
  public get workMem() {
    return this.getNumberAttribute('work_mem');
  }
  public set workMem(value: number) {
    this._workMem = value;
  }
  public resetWorkMem() {
    this._workMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workMemInput() {
    return this._workMem;
  }

  // local_network - computed: false, optional: true, required: false
  private _localNetwork = new TwcDbPostgresLocalNetworkOutputReference(this, "local_network");
  public get localNetwork() {
    return this._localNetwork;
  }
  public putLocalNetwork(value: TwcDbPostgresLocalNetwork) {
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
      autovacuum_analyze_scale_factor: cdktf.numberToTerraform(this._autovacuumAnalyzeScaleFactor),
      bgwriter_delay: cdktf.numberToTerraform(this._bgwriterDelay),
      bgwriter_lru_maxpages: cdktf.numberToTerraform(this._bgwriterLruMaxpages),
      deadlock_timeout: cdktf.numberToTerraform(this._deadlockTimeout),
      gin_pending_list_limit: cdktf.numberToTerraform(this._ginPendingListLimit),
      id: cdktf.stringToTerraform(this._id),
      idle_in_transaction_session_timeout: cdktf.numberToTerraform(this._idleInTransactionSessionTimeout),
      idle_session_timeout: cdktf.numberToTerraform(this._idleSessionTimeout),
      is_external_ip: cdktf.booleanToTerraform(this._isExternalIp),
      join_collapse_limit: cdktf.numberToTerraform(this._joinCollapseLimit),
      lock_timeout: cdktf.numberToTerraform(this._lockTimeout),
      login: cdktf.stringToTerraform(this._login),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      max_prepared_transactions: cdktf.numberToTerraform(this._maxPreparedTransactions),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      preset_id: cdktf.numberToTerraform(this._presetId),
      project_id: cdktf.numberToTerraform(this._projectId),
      shared_buffers: cdktf.numberToTerraform(this._sharedBuffers),
      temp_buffers: cdktf.numberToTerraform(this._tempBuffers),
      wal_buffers: cdktf.numberToTerraform(this._walBuffers),
      work_mem: cdktf.numberToTerraform(this._workMem),
      local_network: twcDbPostgresLocalNetworkToTerraform(this._localNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autovacuum_analyze_scale_factor: {
        value: cdktf.numberToHclTerraform(this._autovacuumAnalyzeScaleFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgwriter_delay: {
        value: cdktf.numberToHclTerraform(this._bgwriterDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgwriter_lru_maxpages: {
        value: cdktf.numberToHclTerraform(this._bgwriterLruMaxpages),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deadlock_timeout: {
        value: cdktf.numberToHclTerraform(this._deadlockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gin_pending_list_limit: {
        value: cdktf.numberToHclTerraform(this._ginPendingListLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_in_transaction_session_timeout: {
        value: cdktf.numberToHclTerraform(this._idleInTransactionSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      idle_session_timeout: {
        value: cdktf.numberToHclTerraform(this._idleSessionTimeout),
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
      join_collapse_limit: {
        value: cdktf.numberToHclTerraform(this._joinCollapseLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lock_timeout: {
        value: cdktf.numberToHclTerraform(this._lockTimeout),
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
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_prepared_transactions: {
        value: cdktf.numberToHclTerraform(this._maxPreparedTransactions),
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
      shared_buffers: {
        value: cdktf.numberToHclTerraform(this._sharedBuffers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      temp_buffers: {
        value: cdktf.numberToHclTerraform(this._tempBuffers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wal_buffers: {
        value: cdktf.numberToHclTerraform(this._walBuffers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      work_mem: {
        value: cdktf.numberToHclTerraform(this._workMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_network: {
        value: twcDbPostgresLocalNetworkToHclTerraform(this._localNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcDbPostgresLocalNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
