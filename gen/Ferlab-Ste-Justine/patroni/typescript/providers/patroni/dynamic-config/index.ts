// https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables DCS Failsafe Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#failsafe_mode DynamicConfig#failsafe_mode}
  */
  readonly failsafeMode?: boolean | cdktf.IResolvable;
  /**
  * The number of seconds the loop will sleep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#loop_wait DynamicConfig#loop_wait}
  */
  readonly loopWait?: number;
  /**
  * Maximum number of timeline history items kept in DCS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#max_timelines_history DynamicConfig#max_timelines_history}
  */
  readonly maxTimelinesHistory?: number;
  /**
  * The maximum bytes a follower may lag to be able to participate in leader election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#maximum_lag_on_failover DynamicConfig#maximum_lag_on_failover}
  */
  readonly maximumLagOnFailover?: number;
  /**
  * The maximum bytes a synchronous follower may lag before it is considered as an unhealthy candidate and swapped by healthy asynchronous follower
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#maximum_lag_on_syncnode DynamicConfig#maximum_lag_on_syncnode}
  */
  readonly maximumLagOnSyncnode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#postgresql DynamicConfig#postgresql}
  */
  readonly postgresql?: DynamicConfigPostgresql;
  /**
  * The amount of time a primary is allowed to recover from failures before failover is triggered (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#primary_start_timeout DynamicConfig#primary_start_timeout}
  */
  readonly primaryStartTimeout?: number;
  /**
  * The number of seconds Patroni is allowed to wait when stopping Postgres and effective only when synchronous_mode is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#primary_stop_timeout DynamicConfig#primary_stop_timeout}
  */
  readonly primaryStopTimeout?: number;
  /**
  * Timeout for DCS and PostgreSQL operation retries (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#retry_timeout DynamicConfig#retry_timeout}
  */
  readonly retryTimeout?: number;
  /**
  * Turns on synchronous replication mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#synchronous_mode DynamicConfig#synchronous_mode}
  */
  readonly synchronousMode?: boolean | cdktf.IResolvable;
  /**
  * Prevents disabling synchronous replication if no synchronous replicas are available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#synchronous_mode_strict DynamicConfig#synchronous_mode_strict}
  */
  readonly synchronousModeStrict?: boolean | cdktf.IResolvable;
  /**
  * If synchronous_mode is enabled, this parameter is used by Patroni to manage the precise number of synchronous standby instances and adjusts the state in DCS and the synchronous_standby_names parameter in PostgreSQL as members join and leave
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#synchronous_node_count DynamicConfig#synchronous_node_count}
  */
  readonly synchronousNodeCount?: number;
  /**
  * The TTL to acquire the leader lock (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#ttl DynamicConfig#ttl}
  */
  readonly ttl?: number;
}
export interface DynamicConfigPostgresql {
  /**
  * Configuration parameters (GUCs) for Postgres. Note that parameter input values are strings, but "true" or "false" strings values will be interpreted as booleans when interacting with the patroni api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#parameters DynamicConfig#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * List of lines that Patroni will use to generate pg_hba.conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#pg_hba DynamicConfig#pg_hba}
  */
  readonly pgHba?: string[];
  /**
  * List of lines that Patroni will use to generate pg_ident.conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#pg_ident DynamicConfig#pg_ident}
  */
  readonly pgIdent?: string[];
  /**
  * Whether or not to use pg_rewind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#use_pg_rewind DynamicConfig#use_pg_rewind}
  */
  readonly usePgRewind?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to use replication slots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#use_slots DynamicConfig#use_slots}
  */
  readonly useSlots?: boolean | cdktf.IResolvable;
}

export function dynamicConfigPostgresqlToTerraform(struct?: DynamicConfigPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    pg_hba: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pgHba),
    pg_ident: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pgIdent),
    use_pg_rewind: cdktf.booleanToTerraform(struct!.usePgRewind),
    use_slots: cdktf.booleanToTerraform(struct!.useSlots),
  }
}


export function dynamicConfigPostgresqlToHclTerraform(struct?: DynamicConfigPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pg_hba: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pgHba),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pg_ident: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pgIdent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_pg_rewind: {
      value: cdktf.booleanToHclTerraform(struct!.usePgRewind),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_slots: {
      value: cdktf.booleanToHclTerraform(struct!.useSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DynamicConfigPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DynamicConfigPostgresql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._pgHba !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgHba = this._pgHba;
    }
    if (this._pgIdent !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgIdent = this._pgIdent;
    }
    if (this._usePgRewind !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePgRewind = this._usePgRewind;
    }
    if (this._useSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSlots = this._useSlots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DynamicConfigPostgresql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters = undefined;
      this._pgHba = undefined;
      this._pgIdent = undefined;
      this._usePgRewind = undefined;
      this._useSlots = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters = value.parameters;
      this._pgHba = value.pgHba;
      this._pgIdent = value.pgIdent;
      this._usePgRewind = value.usePgRewind;
      this._useSlots = value.useSlots;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // pg_hba - computed: false, optional: true, required: false
  private _pgHba?: string[]; 
  public get pgHba() {
    return this.getListAttribute('pg_hba');
  }
  public set pgHba(value: string[]) {
    this._pgHba = value;
  }
  public resetPgHba() {
    this._pgHba = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgHbaInput() {
    return this._pgHba;
  }

  // pg_ident - computed: false, optional: true, required: false
  private _pgIdent?: string[]; 
  public get pgIdent() {
    return this.getListAttribute('pg_ident');
  }
  public set pgIdent(value: string[]) {
    this._pgIdent = value;
  }
  public resetPgIdent() {
    this._pgIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgIdentInput() {
    return this._pgIdent;
  }

  // use_pg_rewind - computed: false, optional: true, required: false
  private _usePgRewind?: boolean | cdktf.IResolvable; 
  public get usePgRewind() {
    return this.getBooleanAttribute('use_pg_rewind');
  }
  public set usePgRewind(value: boolean | cdktf.IResolvable) {
    this._usePgRewind = value;
  }
  public resetUsePgRewind() {
    this._usePgRewind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePgRewindInput() {
    return this._usePgRewind;
  }

  // use_slots - computed: false, optional: true, required: false
  private _useSlots?: boolean | cdktf.IResolvable; 
  public get useSlots() {
    return this.getBooleanAttribute('use_slots');
  }
  public set useSlots(value: boolean | cdktf.IResolvable) {
    this._useSlots = value;
  }
  public resetUseSlots() {
    this._useSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSlotsInput() {
    return this._useSlots;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config patroni_dynamic_config}
*/
export class DynamicConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "patroni_dynamic_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicConfig to import
  * @param importFromId The id of the existing DynamicConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "patroni_dynamic_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/resources/dynamic_config patroni_dynamic_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DynamicConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'patroni_dynamic_config',
      terraformGeneratorMetadata: {
        providerName: 'patroni',
        providerVersion: '0.1.1',
        providerVersionConstraint: '0.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failsafeMode = config.failsafeMode;
    this._loopWait = config.loopWait;
    this._maxTimelinesHistory = config.maxTimelinesHistory;
    this._maximumLagOnFailover = config.maximumLagOnFailover;
    this._maximumLagOnSyncnode = config.maximumLagOnSyncnode;
    this._postgresql.internalValue = config.postgresql;
    this._primaryStartTimeout = config.primaryStartTimeout;
    this._primaryStopTimeout = config.primaryStopTimeout;
    this._retryTimeout = config.retryTimeout;
    this._synchronousMode = config.synchronousMode;
    this._synchronousModeStrict = config.synchronousModeStrict;
    this._synchronousNodeCount = config.synchronousNodeCount;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failsafe_mode - computed: false, optional: true, required: false
  private _failsafeMode?: boolean | cdktf.IResolvable; 
  public get failsafeMode() {
    return this.getBooleanAttribute('failsafe_mode');
  }
  public set failsafeMode(value: boolean | cdktf.IResolvable) {
    this._failsafeMode = value;
  }
  public resetFailsafeMode() {
    this._failsafeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsafeModeInput() {
    return this._failsafeMode;
  }

  // loop_wait - computed: false, optional: true, required: false
  private _loopWait?: number; 
  public get loopWait() {
    return this.getNumberAttribute('loop_wait');
  }
  public set loopWait(value: number) {
    this._loopWait = value;
  }
  public resetLoopWait() {
    this._loopWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopWaitInput() {
    return this._loopWait;
  }

  // max_timelines_history - computed: false, optional: true, required: false
  private _maxTimelinesHistory?: number; 
  public get maxTimelinesHistory() {
    return this.getNumberAttribute('max_timelines_history');
  }
  public set maxTimelinesHistory(value: number) {
    this._maxTimelinesHistory = value;
  }
  public resetMaxTimelinesHistory() {
    this._maxTimelinesHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimelinesHistoryInput() {
    return this._maxTimelinesHistory;
  }

  // maximum_lag_on_failover - computed: false, optional: true, required: false
  private _maximumLagOnFailover?: number; 
  public get maximumLagOnFailover() {
    return this.getNumberAttribute('maximum_lag_on_failover');
  }
  public set maximumLagOnFailover(value: number) {
    this._maximumLagOnFailover = value;
  }
  public resetMaximumLagOnFailover() {
    this._maximumLagOnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLagOnFailoverInput() {
    return this._maximumLagOnFailover;
  }

  // maximum_lag_on_syncnode - computed: false, optional: true, required: false
  private _maximumLagOnSyncnode?: number; 
  public get maximumLagOnSyncnode() {
    return this.getNumberAttribute('maximum_lag_on_syncnode');
  }
  public set maximumLagOnSyncnode(value: number) {
    this._maximumLagOnSyncnode = value;
  }
  public resetMaximumLagOnSyncnode() {
    this._maximumLagOnSyncnode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLagOnSyncnodeInput() {
    return this._maximumLagOnSyncnode;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new DynamicConfigPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: DynamicConfigPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // primary_start_timeout - computed: false, optional: true, required: false
  private _primaryStartTimeout?: number; 
  public get primaryStartTimeout() {
    return this.getNumberAttribute('primary_start_timeout');
  }
  public set primaryStartTimeout(value: number) {
    this._primaryStartTimeout = value;
  }
  public resetPrimaryStartTimeout() {
    this._primaryStartTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryStartTimeoutInput() {
    return this._primaryStartTimeout;
  }

  // primary_stop_timeout - computed: false, optional: true, required: false
  private _primaryStopTimeout?: number; 
  public get primaryStopTimeout() {
    return this.getNumberAttribute('primary_stop_timeout');
  }
  public set primaryStopTimeout(value: number) {
    this._primaryStopTimeout = value;
  }
  public resetPrimaryStopTimeout() {
    this._primaryStopTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryStopTimeoutInput() {
    return this._primaryStopTimeout;
  }

  // retry_timeout - computed: false, optional: true, required: false
  private _retryTimeout?: number; 
  public get retryTimeout() {
    return this.getNumberAttribute('retry_timeout');
  }
  public set retryTimeout(value: number) {
    this._retryTimeout = value;
  }
  public resetRetryTimeout() {
    this._retryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeoutInput() {
    return this._retryTimeout;
  }

  // synchronous_mode - computed: false, optional: true, required: false
  private _synchronousMode?: boolean | cdktf.IResolvable; 
  public get synchronousMode() {
    return this.getBooleanAttribute('synchronous_mode');
  }
  public set synchronousMode(value: boolean | cdktf.IResolvable) {
    this._synchronousMode = value;
  }
  public resetSynchronousMode() {
    this._synchronousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousModeInput() {
    return this._synchronousMode;
  }

  // synchronous_mode_strict - computed: false, optional: true, required: false
  private _synchronousModeStrict?: boolean | cdktf.IResolvable; 
  public get synchronousModeStrict() {
    return this.getBooleanAttribute('synchronous_mode_strict');
  }
  public set synchronousModeStrict(value: boolean | cdktf.IResolvable) {
    this._synchronousModeStrict = value;
  }
  public resetSynchronousModeStrict() {
    this._synchronousModeStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousModeStrictInput() {
    return this._synchronousModeStrict;
  }

  // synchronous_node_count - computed: false, optional: true, required: false
  private _synchronousNodeCount?: number; 
  public get synchronousNodeCount() {
    return this.getNumberAttribute('synchronous_node_count');
  }
  public set synchronousNodeCount(value: number) {
    this._synchronousNodeCount = value;
  }
  public resetSynchronousNodeCount() {
    this._synchronousNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousNodeCountInput() {
    return this._synchronousNodeCount;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      failsafe_mode: cdktf.booleanToTerraform(this._failsafeMode),
      loop_wait: cdktf.numberToTerraform(this._loopWait),
      max_timelines_history: cdktf.numberToTerraform(this._maxTimelinesHistory),
      maximum_lag_on_failover: cdktf.numberToTerraform(this._maximumLagOnFailover),
      maximum_lag_on_syncnode: cdktf.numberToTerraform(this._maximumLagOnSyncnode),
      postgresql: dynamicConfigPostgresqlToTerraform(this._postgresql.internalValue),
      primary_start_timeout: cdktf.numberToTerraform(this._primaryStartTimeout),
      primary_stop_timeout: cdktf.numberToTerraform(this._primaryStopTimeout),
      retry_timeout: cdktf.numberToTerraform(this._retryTimeout),
      synchronous_mode: cdktf.booleanToTerraform(this._synchronousMode),
      synchronous_mode_strict: cdktf.booleanToTerraform(this._synchronousModeStrict),
      synchronous_node_count: cdktf.numberToTerraform(this._synchronousNodeCount),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      failsafe_mode: {
        value: cdktf.booleanToHclTerraform(this._failsafeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loop_wait: {
        value: cdktf.numberToHclTerraform(this._loopWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_timelines_history: {
        value: cdktf.numberToHclTerraform(this._maxTimelinesHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_lag_on_failover: {
        value: cdktf.numberToHclTerraform(this._maximumLagOnFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_lag_on_syncnode: {
        value: cdktf.numberToHclTerraform(this._maximumLagOnSyncnode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      postgresql: {
        value: dynamicConfigPostgresqlToHclTerraform(this._postgresql.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DynamicConfigPostgresql",
      },
      primary_start_timeout: {
        value: cdktf.numberToHclTerraform(this._primaryStartTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_stop_timeout: {
        value: cdktf.numberToHclTerraform(this._primaryStopTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_timeout: {
        value: cdktf.numberToHclTerraform(this._retryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synchronous_mode: {
        value: cdktf.booleanToHclTerraform(this._synchronousMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      synchronous_mode_strict: {
        value: cdktf.booleanToHclTerraform(this._synchronousModeStrict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      synchronous_node_count: {
        value: cdktf.numberToHclTerraform(this._synchronousNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
