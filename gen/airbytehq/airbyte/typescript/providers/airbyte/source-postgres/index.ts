// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourcePostgresConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#configuration SourcePostgres#configuration}
  */
  readonly configuration: SourcePostgresConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#definition_id SourcePostgres#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#name SourcePostgres#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#secret_id SourcePostgres#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#workspace_id SourcePostgres#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn {
}

export function sourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumnToTerraform(struct?: SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumnToHclTerraform(struct?: SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#additional_properties SourcePostgres#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Specifies a query that the connector executes on the source database when the connector sends a heartbeat message. Please see the <a href="https://docs.airbyte.com/integrations/sources/postgres/postgres-troubleshooting#advanced-wal-disk-consumption-and-heartbeat-action-query">setup guide</a> for how and when to configure this setting. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#heartbeat_action_query SourcePostgres#heartbeat_action_query}
  */
  readonly heartbeatActionQuery?: string;
  /**
  * The amount of time an initial load is allowed to continue for before catching up on CDC logs. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#initial_load_timeout_hours SourcePostgres#initial_load_timeout_hours}
  */
  readonly initialLoadTimeoutHours?: number;
  /**
  * The amount of time the connector will wait when it launches to determine if there is new data to sync or not. Defaults to 1200 seconds. Valid range: 120 seconds to 2400 seconds. Read about <a href="https://docs.airbyte.com/integrations/sources/postgres/postgres-troubleshooting#advanced-setting-up-initial-cdc-waiting-time">initial waiting time</a>. Default: 1200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#initial_waiting_seconds SourcePostgres#initial_waiting_seconds}
  */
  readonly initialWaitingSeconds?: number;
  /**
  * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value into the WAL. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. Default: "Fail sync"; must be one of ["Fail sync", "Re-sync data"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#invalid_cdc_cursor_position_behavior SourcePostgres#invalid_cdc_cursor_position_behavior}
  */
  readonly invalidCdcCursorPositionBehavior?: string;
  /**
  * Determines when Airbyte should flush the LSN of processed WAL logs in the source database. `After loading Data in the destination` is default. If `While reading Data` is selected, in case of a downstream failure (while loading data into the destination), next sync would result in a full sync. Default: "After loading Data in the destination"; must be one of ["While reading Data", "After loading Data in the destination"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#lsn_commit_behaviour SourcePostgres#lsn_commit_behaviour}
  */
  readonly lsnCommitBehaviour?: string;
  /**
  * A logical decoding plugin installed on the PostgreSQL server. Default: "pgoutput"; must be "pgoutput"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#plugin SourcePostgres#plugin}
  */
  readonly plugin?: string;
  /**
  * A Postgres publication used for consuming changes. Read about <a href="https://docs.airbyte.com/integrations/sources/postgres#step-4-create-publications-and-replication-identities-for-tables">publications and replication identities</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#publication SourcePostgres#publication}
  */
  readonly publication: string;
  /**
  * The size of the internal queue. This may interfere with memory consumption and efficiency of the connector, please be careful. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#queue_size SourcePostgres#queue_size}
  */
  readonly queueSize?: number;
  /**
  * A plugin logical replication slot. Read about <a href="https://docs.airbyte.com/integrations/sources/postgres#step-3-create-replication-slot">replication slots</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#replication_slot SourcePostgres#replication_slot}
  */
  readonly replicationSlot: string;
}

export function sourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdcToTerraform(struct?: SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    heartbeat_action_query: cdktf.stringToTerraform(struct!.heartbeatActionQuery),
    initial_load_timeout_hours: cdktf.numberToTerraform(struct!.initialLoadTimeoutHours),
    initial_waiting_seconds: cdktf.numberToTerraform(struct!.initialWaitingSeconds),
    invalid_cdc_cursor_position_behavior: cdktf.stringToTerraform(struct!.invalidCdcCursorPositionBehavior),
    lsn_commit_behaviour: cdktf.stringToTerraform(struct!.lsnCommitBehaviour),
    plugin: cdktf.stringToTerraform(struct!.plugin),
    publication: cdktf.stringToTerraform(struct!.publication),
    queue_size: cdktf.numberToTerraform(struct!.queueSize),
    replication_slot: cdktf.stringToTerraform(struct!.replicationSlot),
  }
}


export function sourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdcToHclTerraform(struct?: SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heartbeat_action_query: {
      value: cdktf.stringToHclTerraform(struct!.heartbeatActionQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_load_timeout_hours: {
      value: cdktf.numberToHclTerraform(struct!.initialLoadTimeoutHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_waiting_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialWaitingSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_cdc_cursor_position_behavior: {
      value: cdktf.stringToHclTerraform(struct!.invalidCdcCursorPositionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lsn_commit_behaviour: {
      value: cdktf.stringToHclTerraform(struct!.lsnCommitBehaviour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin: {
      value: cdktf.stringToHclTerraform(struct!.plugin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publication: {
      value: cdktf.stringToHclTerraform(struct!.publication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_size: {
      value: cdktf.numberToHclTerraform(struct!.queueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_slot: {
      value: cdktf.stringToHclTerraform(struct!.replicationSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._heartbeatActionQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatActionQuery = this._heartbeatActionQuery;
    }
    if (this._initialLoadTimeoutHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLoadTimeoutHours = this._initialLoadTimeoutHours;
    }
    if (this._initialWaitingSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialWaitingSeconds = this._initialWaitingSeconds;
    }
    if (this._invalidCdcCursorPositionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidCdcCursorPositionBehavior = this._invalidCdcCursorPositionBehavior;
    }
    if (this._lsnCommitBehaviour !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnCommitBehaviour = this._lsnCommitBehaviour;
    }
    if (this._plugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin;
    }
    if (this._publication !== undefined) {
      hasAnyValues = true;
      internalValueResult.publication = this._publication;
    }
    if (this._queueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueSize = this._queueSize;
    }
    if (this._replicationSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSlot = this._replicationSlot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._heartbeatActionQuery = undefined;
      this._initialLoadTimeoutHours = undefined;
      this._initialWaitingSeconds = undefined;
      this._invalidCdcCursorPositionBehavior = undefined;
      this._lsnCommitBehaviour = undefined;
      this._plugin = undefined;
      this._publication = undefined;
      this._queueSize = undefined;
      this._replicationSlot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._heartbeatActionQuery = value.heartbeatActionQuery;
      this._initialLoadTimeoutHours = value.initialLoadTimeoutHours;
      this._initialWaitingSeconds = value.initialWaitingSeconds;
      this._invalidCdcCursorPositionBehavior = value.invalidCdcCursorPositionBehavior;
      this._lsnCommitBehaviour = value.lsnCommitBehaviour;
      this._plugin = value.plugin;
      this._publication = value.publication;
      this._queueSize = value.queueSize;
      this._replicationSlot = value.replicationSlot;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // heartbeat_action_query - computed: true, optional: true, required: false
  private _heartbeatActionQuery?: string; 
  public get heartbeatActionQuery() {
    return this.getStringAttribute('heartbeat_action_query');
  }
  public set heartbeatActionQuery(value: string) {
    this._heartbeatActionQuery = value;
  }
  public resetHeartbeatActionQuery() {
    this._heartbeatActionQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatActionQueryInput() {
    return this._heartbeatActionQuery;
  }

  // initial_load_timeout_hours - computed: true, optional: true, required: false
  private _initialLoadTimeoutHours?: number; 
  public get initialLoadTimeoutHours() {
    return this.getNumberAttribute('initial_load_timeout_hours');
  }
  public set initialLoadTimeoutHours(value: number) {
    this._initialLoadTimeoutHours = value;
  }
  public resetInitialLoadTimeoutHours() {
    this._initialLoadTimeoutHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLoadTimeoutHoursInput() {
    return this._initialLoadTimeoutHours;
  }

  // initial_waiting_seconds - computed: true, optional: true, required: false
  private _initialWaitingSeconds?: number; 
  public get initialWaitingSeconds() {
    return this.getNumberAttribute('initial_waiting_seconds');
  }
  public set initialWaitingSeconds(value: number) {
    this._initialWaitingSeconds = value;
  }
  public resetInitialWaitingSeconds() {
    this._initialWaitingSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWaitingSecondsInput() {
    return this._initialWaitingSeconds;
  }

  // invalid_cdc_cursor_position_behavior - computed: true, optional: true, required: false
  private _invalidCdcCursorPositionBehavior?: string; 
  public get invalidCdcCursorPositionBehavior() {
    return this.getStringAttribute('invalid_cdc_cursor_position_behavior');
  }
  public set invalidCdcCursorPositionBehavior(value: string) {
    this._invalidCdcCursorPositionBehavior = value;
  }
  public resetInvalidCdcCursorPositionBehavior() {
    this._invalidCdcCursorPositionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCdcCursorPositionBehaviorInput() {
    return this._invalidCdcCursorPositionBehavior;
  }

  // lsn_commit_behaviour - computed: true, optional: true, required: false
  private _lsnCommitBehaviour?: string; 
  public get lsnCommitBehaviour() {
    return this.getStringAttribute('lsn_commit_behaviour');
  }
  public set lsnCommitBehaviour(value: string) {
    this._lsnCommitBehaviour = value;
  }
  public resetLsnCommitBehaviour() {
    this._lsnCommitBehaviour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnCommitBehaviourInput() {
    return this._lsnCommitBehaviour;
  }

  // plugin - computed: true, optional: true, required: false
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  public resetPlugin() {
    this._plugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // publication - computed: false, optional: false, required: true
  private _publication?: string; 
  public get publication() {
    return this.getStringAttribute('publication');
  }
  public set publication(value: string) {
    this._publication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicationInput() {
    return this._publication;
  }

  // queue_size - computed: true, optional: true, required: false
  private _queueSize?: number; 
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }
  public set queueSize(value: number) {
    this._queueSize = value;
  }
  public resetQueueSize() {
    this._queueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSizeInput() {
    return this._queueSize;
  }

  // replication_slot - computed: false, optional: false, required: true
  private _replicationSlot?: string; 
  public get replicationSlot() {
    return this.getStringAttribute('replication_slot');
  }
  public set replicationSlot(value: string) {
    this._replicationSlot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSlotInput() {
    return this._replicationSlot;
  }
}
export interface SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor {
}

export function sourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursorToTerraform(struct?: SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursorToHclTerraform(struct?: SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourcePostgresConfigurationReplicationMethod {
  /**
  * <i>Recommended</i> - Incrementally reads new inserts and updates via Postgres <a href="https://docs.airbyte.com/integrations/sources/postgres/#xmin">Xmin system column</a>. Suitable for databases that have low transaction pressure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#detect_changes_with_xmin_system_column SourcePostgres#detect_changes_with_xmin_system_column}
  */
  readonly detectChangesWithXminSystemColumn?: SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn;
  /**
  * <i>Recommended</i> - Incrementally reads new inserts, updates, and deletes using the Postgres <a href="https://docs.airbyte.com/integrations/sources/postgres/#cdc">write-ahead log (WAL)</a>. This needs to be configured on the source database itself. Recommended for tables of any size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#read_changes_using_write_ahead_log_cdc SourcePostgres#read_changes_using_write_ahead_log_cdc}
  */
  readonly readChangesUsingWriteAheadLogCdc?: SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc;
  /**
  * Incrementally detects new inserts and updates using the <a href="https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#scan_changes_with_user_defined_cursor SourcePostgres#scan_changes_with_user_defined_cursor}
  */
  readonly scanChangesWithUserDefinedCursor?: SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor;
}

export function sourcePostgresConfigurationReplicationMethodToTerraform(struct?: SourcePostgresConfigurationReplicationMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detect_changes_with_xmin_system_column: sourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumnToTerraform(struct!.detectChangesWithXminSystemColumn),
    read_changes_using_write_ahead_log_cdc: sourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdcToTerraform(struct!.readChangesUsingWriteAheadLogCdc),
    scan_changes_with_user_defined_cursor: sourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursorToTerraform(struct!.scanChangesWithUserDefinedCursor),
  }
}


export function sourcePostgresConfigurationReplicationMethodToHclTerraform(struct?: SourcePostgresConfigurationReplicationMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detect_changes_with_xmin_system_column: {
      value: sourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumnToHclTerraform(struct!.detectChangesWithXminSystemColumn),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn",
    },
    read_changes_using_write_ahead_log_cdc: {
      value: sourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdcToHclTerraform(struct!.readChangesUsingWriteAheadLogCdc),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc",
    },
    scan_changes_with_user_defined_cursor: {
      value: sourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursorToHclTerraform(struct!.scanChangesWithUserDefinedCursor),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationReplicationMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationReplicationMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectChangesWithXminSystemColumn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectChangesWithXminSystemColumn = this._detectChangesWithXminSystemColumn?.internalValue;
    }
    if (this._readChangesUsingWriteAheadLogCdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readChangesUsingWriteAheadLogCdc = this._readChangesUsingWriteAheadLogCdc?.internalValue;
    }
    if (this._scanChangesWithUserDefinedCursor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanChangesWithUserDefinedCursor = this._scanChangesWithUserDefinedCursor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationReplicationMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectChangesWithXminSystemColumn.internalValue = undefined;
      this._readChangesUsingWriteAheadLogCdc.internalValue = undefined;
      this._scanChangesWithUserDefinedCursor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectChangesWithXminSystemColumn.internalValue = value.detectChangesWithXminSystemColumn;
      this._readChangesUsingWriteAheadLogCdc.internalValue = value.readChangesUsingWriteAheadLogCdc;
      this._scanChangesWithUserDefinedCursor.internalValue = value.scanChangesWithUserDefinedCursor;
    }
  }

  // detect_changes_with_xmin_system_column - computed: false, optional: true, required: false
  private _detectChangesWithXminSystemColumn = new SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumnOutputReference(this, "detect_changes_with_xmin_system_column");
  public get detectChangesWithXminSystemColumn() {
    return this._detectChangesWithXminSystemColumn;
  }
  public putDetectChangesWithXminSystemColumn(value: SourcePostgresConfigurationReplicationMethodDetectChangesWithXminSystemColumn) {
    this._detectChangesWithXminSystemColumn.internalValue = value;
  }
  public resetDetectChangesWithXminSystemColumn() {
    this._detectChangesWithXminSystemColumn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectChangesWithXminSystemColumnInput() {
    return this._detectChangesWithXminSystemColumn.internalValue;
  }

  // read_changes_using_write_ahead_log_cdc - computed: false, optional: true, required: false
  private _readChangesUsingWriteAheadLogCdc = new SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdcOutputReference(this, "read_changes_using_write_ahead_log_cdc");
  public get readChangesUsingWriteAheadLogCdc() {
    return this._readChangesUsingWriteAheadLogCdc;
  }
  public putReadChangesUsingWriteAheadLogCdc(value: SourcePostgresConfigurationReplicationMethodReadChangesUsingWriteAheadLogCdc) {
    this._readChangesUsingWriteAheadLogCdc.internalValue = value;
  }
  public resetReadChangesUsingWriteAheadLogCdc() {
    this._readChangesUsingWriteAheadLogCdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readChangesUsingWriteAheadLogCdcInput() {
    return this._readChangesUsingWriteAheadLogCdc.internalValue;
  }

  // scan_changes_with_user_defined_cursor - computed: false, optional: true, required: false
  private _scanChangesWithUserDefinedCursor = new SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursorOutputReference(this, "scan_changes_with_user_defined_cursor");
  public get scanChangesWithUserDefinedCursor() {
    return this._scanChangesWithUserDefinedCursor;
  }
  public putScanChangesWithUserDefinedCursor(value: SourcePostgresConfigurationReplicationMethodScanChangesWithUserDefinedCursor) {
    this._scanChangesWithUserDefinedCursor.internalValue = value;
  }
  public resetScanChangesWithUserDefinedCursor() {
    this._scanChangesWithUserDefinedCursor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanChangesWithUserDefinedCursorInput() {
    return this._scanChangesWithUserDefinedCursor.internalValue;
  }
}
export interface SourcePostgresConfigurationSslModeAllow {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#additional_properties SourcePostgres#additional_properties}
  */
  readonly additionalProperties?: string;
}

export function sourcePostgresConfigurationSslModeAllowToTerraform(struct?: SourcePostgresConfigurationSslModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
  }
}


export function sourcePostgresConfigurationSslModeAllowToHclTerraform(struct?: SourcePostgresConfigurationSslModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationSslModeAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationSslModeAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationSslModeAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }
}
export interface SourcePostgresConfigurationSslModeDisable {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#additional_properties SourcePostgres#additional_properties}
  */
  readonly additionalProperties?: string;
}

export function sourcePostgresConfigurationSslModeDisableToTerraform(struct?: SourcePostgresConfigurationSslModeDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
  }
}


export function sourcePostgresConfigurationSslModeDisableToHclTerraform(struct?: SourcePostgresConfigurationSslModeDisable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationSslModeDisableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationSslModeDisable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationSslModeDisable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }
}
export interface SourcePostgresConfigurationSslModePrefer {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#additional_properties SourcePostgres#additional_properties}
  */
  readonly additionalProperties?: string;
}

export function sourcePostgresConfigurationSslModePreferToTerraform(struct?: SourcePostgresConfigurationSslModePrefer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
  }
}


export function sourcePostgresConfigurationSslModePreferToHclTerraform(struct?: SourcePostgresConfigurationSslModePrefer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationSslModePreferOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationSslModePrefer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationSslModePrefer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }
}
export interface SourcePostgresConfigurationSslModeRequire {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#additional_properties SourcePostgres#additional_properties}
  */
  readonly additionalProperties?: string;
}

export function sourcePostgresConfigurationSslModeRequireToTerraform(struct?: SourcePostgresConfigurationSslModeRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
  }
}


export function sourcePostgresConfigurationSslModeRequireToHclTerraform(struct?: SourcePostgresConfigurationSslModeRequire | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationSslModeRequireOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationSslModeRequire | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationSslModeRequire | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }
}
export interface SourcePostgresConfigurationSslModeVerifyCa {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#additional_properties SourcePostgres#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#ca_certificate SourcePostgres#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * Client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#client_certificate SourcePostgres#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#client_key SourcePostgres#client_key}
  */
  readonly clientKey?: string;
  /**
  * Password for keystorage. If you do not add it - the password will be generated automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#client_key_password SourcePostgres#client_key_password}
  */
  readonly clientKeyPassword?: string;
}

export function sourcePostgresConfigurationSslModeVerifyCaToTerraform(struct?: SourcePostgresConfigurationSslModeVerifyCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    client_key_password: cdktf.stringToTerraform(struct!.clientKeyPassword),
  }
}


export function sourcePostgresConfigurationSslModeVerifyCaToHclTerraform(struct?: SourcePostgresConfigurationSslModeVerifyCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_password: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationSslModeVerifyCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationSslModeVerifyCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._clientKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPassword = this._clientKeyPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationSslModeVerifyCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._clientKeyPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._clientKeyPassword = value.clientKeyPassword;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_password - computed: false, optional: true, required: false
  private _clientKeyPassword?: string; 
  public get clientKeyPassword() {
    return this.getStringAttribute('client_key_password');
  }
  public set clientKeyPassword(value: string) {
    this._clientKeyPassword = value;
  }
  public resetClientKeyPassword() {
    this._clientKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPasswordInput() {
    return this._clientKeyPassword;
  }
}
export interface SourcePostgresConfigurationSslModeVerifyFull {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#additional_properties SourcePostgres#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * CA certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#ca_certificate SourcePostgres#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * Client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#client_certificate SourcePostgres#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Client key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#client_key SourcePostgres#client_key}
  */
  readonly clientKey?: string;
  /**
  * Password for keystorage. If you do not add it - the password will be generated automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#client_key_password SourcePostgres#client_key_password}
  */
  readonly clientKeyPassword?: string;
}

export function sourcePostgresConfigurationSslModeVerifyFullToTerraform(struct?: SourcePostgresConfigurationSslModeVerifyFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    client_key_password: cdktf.stringToTerraform(struct!.clientKeyPassword),
  }
}


export function sourcePostgresConfigurationSslModeVerifyFullToHclTerraform(struct?: SourcePostgresConfigurationSslModeVerifyFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key_password: {
      value: cdktf.stringToHclTerraform(struct!.clientKeyPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationSslModeVerifyFullOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationSslModeVerifyFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._clientKeyPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeyPassword = this._clientKeyPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationSslModeVerifyFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._clientKeyPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._clientKeyPassword = value.clientKeyPassword;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // client_key_password - computed: false, optional: true, required: false
  private _clientKeyPassword?: string; 
  public get clientKeyPassword() {
    return this.getStringAttribute('client_key_password');
  }
  public set clientKeyPassword(value: string) {
    this._clientKeyPassword = value;
  }
  public resetClientKeyPassword() {
    this._clientKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyPasswordInput() {
    return this._clientKeyPassword;
  }
}
export interface SourcePostgresConfigurationSslMode {
  /**
  * Enables encryption only when required by the source database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#allow SourcePostgres#allow}
  */
  readonly allow?: SourcePostgresConfigurationSslModeAllow;
  /**
  * Disables encryption of communication between Airbyte and source database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#disable SourcePostgres#disable}
  */
  readonly disable?: SourcePostgresConfigurationSslModeDisable;
  /**
  * Allows unencrypted connection only if the source database does not support encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#prefer SourcePostgres#prefer}
  */
  readonly prefer?: SourcePostgresConfigurationSslModePrefer;
  /**
  * Always require encryption. If the source database server does not support encryption, connection will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#require SourcePostgres#require}
  */
  readonly require?: SourcePostgresConfigurationSslModeRequire;
  /**
  * Always require encryption and verifies that the source database server has a valid SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#verify_ca SourcePostgres#verify_ca}
  */
  readonly verifyCa?: SourcePostgresConfigurationSslModeVerifyCa;
  /**
  * This is the most secure mode. Always require encryption and verifies the identity of the source database server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#verify_full SourcePostgres#verify_full}
  */
  readonly verifyFull?: SourcePostgresConfigurationSslModeVerifyFull;
}

export function sourcePostgresConfigurationSslModeToTerraform(struct?: SourcePostgresConfigurationSslMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: sourcePostgresConfigurationSslModeAllowToTerraform(struct!.allow),
    disable: sourcePostgresConfigurationSslModeDisableToTerraform(struct!.disable),
    prefer: sourcePostgresConfigurationSslModePreferToTerraform(struct!.prefer),
    require: sourcePostgresConfigurationSslModeRequireToTerraform(struct!.require),
    verify_ca: sourcePostgresConfigurationSslModeVerifyCaToTerraform(struct!.verifyCa),
    verify_full: sourcePostgresConfigurationSslModeVerifyFullToTerraform(struct!.verifyFull),
  }
}


export function sourcePostgresConfigurationSslModeToHclTerraform(struct?: SourcePostgresConfigurationSslMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: sourcePostgresConfigurationSslModeAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationSslModeAllow",
    },
    disable: {
      value: sourcePostgresConfigurationSslModeDisableToHclTerraform(struct!.disable),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationSslModeDisable",
    },
    prefer: {
      value: sourcePostgresConfigurationSslModePreferToHclTerraform(struct!.prefer),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationSslModePrefer",
    },
    require: {
      value: sourcePostgresConfigurationSslModeRequireToHclTerraform(struct!.require),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationSslModeRequire",
    },
    verify_ca: {
      value: sourcePostgresConfigurationSslModeVerifyCaToHclTerraform(struct!.verifyCa),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationSslModeVerifyCa",
    },
    verify_full: {
      value: sourcePostgresConfigurationSslModeVerifyFullToHclTerraform(struct!.verifyFull),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationSslModeVerifyFull",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationSslModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationSslMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._disable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable?.internalValue;
    }
    if (this._prefer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefer = this._prefer?.internalValue;
    }
    if (this._require?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.require = this._require?.internalValue;
    }
    if (this._verifyCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCa = this._verifyCa?.internalValue;
    }
    if (this._verifyFull?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyFull = this._verifyFull?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationSslMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._disable.internalValue = undefined;
      this._prefer.internalValue = undefined;
      this._require.internalValue = undefined;
      this._verifyCa.internalValue = undefined;
      this._verifyFull.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._disable.internalValue = value.disable;
      this._prefer.internalValue = value.prefer;
      this._require.internalValue = value.require;
      this._verifyCa.internalValue = value.verifyCa;
      this._verifyFull.internalValue = value.verifyFull;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new SourcePostgresConfigurationSslModeAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: SourcePostgresConfigurationSslModeAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // disable - computed: false, optional: true, required: false
  private _disable = new SourcePostgresConfigurationSslModeDisableOutputReference(this, "disable");
  public get disable() {
    return this._disable;
  }
  public putDisable(value: SourcePostgresConfigurationSslModeDisable) {
    this._disable.internalValue = value;
  }
  public resetDisable() {
    this._disable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable.internalValue;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer = new SourcePostgresConfigurationSslModePreferOutputReference(this, "prefer");
  public get prefer() {
    return this._prefer;
  }
  public putPrefer(value: SourcePostgresConfigurationSslModePrefer) {
    this._prefer.internalValue = value;
  }
  public resetPrefer() {
    this._prefer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer.internalValue;
  }

  // require - computed: false, optional: true, required: false
  private _require = new SourcePostgresConfigurationSslModeRequireOutputReference(this, "require");
  public get require() {
    return this._require;
  }
  public putRequire(value: SourcePostgresConfigurationSslModeRequire) {
    this._require.internalValue = value;
  }
  public resetRequire() {
    this._require.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireInput() {
    return this._require.internalValue;
  }

  // verify_ca - computed: false, optional: true, required: false
  private _verifyCa = new SourcePostgresConfigurationSslModeVerifyCaOutputReference(this, "verify_ca");
  public get verifyCa() {
    return this._verifyCa;
  }
  public putVerifyCa(value: SourcePostgresConfigurationSslModeVerifyCa) {
    this._verifyCa.internalValue = value;
  }
  public resetVerifyCa() {
    this._verifyCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCaInput() {
    return this._verifyCa.internalValue;
  }

  // verify_full - computed: false, optional: true, required: false
  private _verifyFull = new SourcePostgresConfigurationSslModeVerifyFullOutputReference(this, "verify_full");
  public get verifyFull() {
    return this._verifyFull;
  }
  public putVerifyFull(value: SourcePostgresConfigurationSslModeVerifyFull) {
    this._verifyFull.internalValue = value;
  }
  public resetVerifyFull() {
    this._verifyFull.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyFullInput() {
    return this._verifyFull.internalValue;
  }
}
export interface SourcePostgresConfigurationTunnelMethodNoTunnel {
}

export function sourcePostgresConfigurationTunnelMethodNoTunnelToTerraform(struct?: SourcePostgresConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcePostgresConfigurationTunnelMethodNoTunnelToHclTerraform(struct?: SourcePostgresConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcePostgresConfigurationTunnelMethodNoTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface SourcePostgresConfigurationTunnelMethodPasswordAuthentication {
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_host SourcePostgres#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_port SourcePostgres#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_user SourcePostgres#tunnel_user}
  */
  readonly tunnelUser: string;
  /**
  * OS-level password for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_user_password SourcePostgres#tunnel_user_password}
  */
  readonly tunnelUserPassword: string;
}

export function sourcePostgresConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct?: SourcePostgresConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
    tunnel_user_password: cdktf.stringToTerraform(struct!.tunnelUserPassword),
  }
}


export function sourcePostgresConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct?: SourcePostgresConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_user_password: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationTunnelMethodPasswordAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    if (this._tunnelUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUserPassword = this._tunnelUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
      this._tunnelUserPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
      this._tunnelUserPassword = value.tunnelUserPassword;
    }
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }

  // tunnel_user_password - computed: false, optional: false, required: true
  private _tunnelUserPassword?: string; 
  public get tunnelUserPassword() {
    return this.getStringAttribute('tunnel_user_password');
  }
  public set tunnelUserPassword(value: string) {
    this._tunnelUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserPasswordInput() {
    return this._tunnelUserPassword;
  }
}
export interface SourcePostgresConfigurationTunnelMethodSshKeyAuthentication {
  /**
  * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#ssh_key SourcePostgres#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_host SourcePostgres#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_port SourcePostgres#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_user SourcePostgres#tunnel_user}
  */
  readonly tunnelUser: string;
}

export function sourcePostgresConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct?: SourcePostgresConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
  }
}


export function sourcePostgresConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct?: SourcePostgresConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationTunnelMethodSshKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sshKey = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sshKey = value.sshKey;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
    }
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }
}
export interface SourcePostgresConfigurationTunnelMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#no_tunnel SourcePostgres#no_tunnel}
  */
  readonly noTunnel?: SourcePostgresConfigurationTunnelMethodNoTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#password_authentication SourcePostgres#password_authentication}
  */
  readonly passwordAuthentication?: SourcePostgresConfigurationTunnelMethodPasswordAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#ssh_key_authentication SourcePostgres#ssh_key_authentication}
  */
  readonly sshKeyAuthentication?: SourcePostgresConfigurationTunnelMethodSshKeyAuthentication;
}

export function sourcePostgresConfigurationTunnelMethodToTerraform(struct?: SourcePostgresConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tunnel: sourcePostgresConfigurationTunnelMethodNoTunnelToTerraform(struct!.noTunnel),
    password_authentication: sourcePostgresConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct!.passwordAuthentication),
    ssh_key_authentication: sourcePostgresConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct!.sshKeyAuthentication),
  }
}


export function sourcePostgresConfigurationTunnelMethodToHclTerraform(struct?: SourcePostgresConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tunnel: {
      value: sourcePostgresConfigurationTunnelMethodNoTunnelToHclTerraform(struct!.noTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationTunnelMethodNoTunnel",
    },
    password_authentication: {
      value: sourcePostgresConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct!.passwordAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationTunnelMethodPasswordAuthentication",
    },
    ssh_key_authentication: {
      value: sourcePostgresConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct!.sshKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationTunnelMethodSshKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationTunnelMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfigurationTunnelMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnel = this._noTunnel?.internalValue;
    }
    if (this._passwordAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthentication = this._passwordAuthentication?.internalValue;
    }
    if (this._sshKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyAuthentication = this._sshKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfigurationTunnelMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = undefined;
      this._passwordAuthentication.internalValue = undefined;
      this._sshKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = value.noTunnel;
      this._passwordAuthentication.internalValue = value.passwordAuthentication;
      this._sshKeyAuthentication.internalValue = value.sshKeyAuthentication;
    }
  }

  // no_tunnel - computed: false, optional: true, required: false
  private _noTunnel = new SourcePostgresConfigurationTunnelMethodNoTunnelOutputReference(this, "no_tunnel");
  public get noTunnel() {
    return this._noTunnel;
  }
  public putNoTunnel(value: SourcePostgresConfigurationTunnelMethodNoTunnel) {
    this._noTunnel.internalValue = value;
  }
  public resetNoTunnel() {
    this._noTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelInput() {
    return this._noTunnel.internalValue;
  }

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication = new SourcePostgresConfigurationTunnelMethodPasswordAuthenticationOutputReference(this, "password_authentication");
  public get passwordAuthentication() {
    return this._passwordAuthentication;
  }
  public putPasswordAuthentication(value: SourcePostgresConfigurationTunnelMethodPasswordAuthentication) {
    this._passwordAuthentication.internalValue = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication.internalValue;
  }

  // ssh_key_authentication - computed: false, optional: true, required: false
  private _sshKeyAuthentication = new SourcePostgresConfigurationTunnelMethodSshKeyAuthenticationOutputReference(this, "ssh_key_authentication");
  public get sshKeyAuthentication() {
    return this._sshKeyAuthentication;
  }
  public putSshKeyAuthentication(value: SourcePostgresConfigurationTunnelMethodSshKeyAuthentication) {
    this._sshKeyAuthentication.internalValue = value;
  }
  public resetSshKeyAuthentication() {
    this._sshKeyAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyAuthenticationInput() {
    return this._sshKeyAuthentication.internalValue;
  }
}
export interface SourcePostgresConfiguration {
  /**
  * Name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#database SourcePostgres#database}
  */
  readonly database: string;
  /**
  * Hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#host SourcePostgres#host}
  */
  readonly host: string;
  /**
  * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (Eg. key1=value1&key2=value2&key3=value3). For more information read about <a href="https://jdbc.postgresql.org/documentation/head/connect.html">JDBC URL parameters</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#jdbc_url_params SourcePostgres#jdbc_url_params}
  */
  readonly jdbcUrlParams?: string;
  /**
  * Password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#password SourcePostgres#password}
  */
  readonly password?: string;
  /**
  * Port of the database. Default: 5432
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#port SourcePostgres#port}
  */
  readonly port?: number;
  /**
  * Configures how data is extracted from the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#replication_method SourcePostgres#replication_method}
  */
  readonly replicationMethod?: SourcePostgresConfigurationReplicationMethod;
  /**
  * The list of schemas (case sensitive) to sync from. Defaults to public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#schemas SourcePostgres#schemas}
  */
  readonly schemas?: string[];
  /**
  * SSL connection modes. 
  *   Read more <a href="https://jdbc.postgresql.org/documentation/head/ssl-client.html"> in the docs</a>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#ssl_mode SourcePostgres#ssl_mode}
  */
  readonly sslMode?: SourcePostgresConfigurationSslMode;
  /**
  * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#tunnel_method SourcePostgres#tunnel_method}
  */
  readonly tunnelMethod?: SourcePostgresConfigurationTunnelMethod;
  /**
  * Username to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#username SourcePostgres#username}
  */
  readonly username: string;
}

export function sourcePostgresConfigurationToTerraform(struct?: SourcePostgresConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_url_params: cdktf.stringToTerraform(struct!.jdbcUrlParams),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    replication_method: sourcePostgresConfigurationReplicationMethodToTerraform(struct!.replicationMethod),
    schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.schemas),
    ssl_mode: sourcePostgresConfigurationSslModeToTerraform(struct!.sslMode),
    tunnel_method: sourcePostgresConfigurationTunnelMethodToTerraform(struct!.tunnelMethod),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function sourcePostgresConfigurationToHclTerraform(struct?: SourcePostgresConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jdbc_url_params: {
      value: cdktf.stringToHclTerraform(struct!.jdbcUrlParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replication_method: {
      value: sourcePostgresConfigurationReplicationMethodToHclTerraform(struct!.replicationMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationReplicationMethod",
    },
    schemas: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.schemas),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssl_mode: {
      value: sourcePostgresConfigurationSslModeToHclTerraform(struct!.sslMode),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationSslMode",
    },
    tunnel_method: {
      value: sourcePostgresConfigurationTunnelMethodToHclTerraform(struct!.tunnelMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourcePostgresConfigurationTunnelMethod",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourcePostgresConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._jdbcUrlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcUrlParams = this._jdbcUrlParams;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replicationMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationMethod = this._replicationMethod?.internalValue;
    }
    if (this._schemas !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas;
    }
    if (this._sslMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMode = this._sslMode?.internalValue;
    }
    if (this._tunnelMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._host = undefined;
      this._jdbcUrlParams = undefined;
      this._password = undefined;
      this._port = undefined;
      this._replicationMethod.internalValue = undefined;
      this._schemas = undefined;
      this._sslMode.internalValue = undefined;
      this._tunnelMethod.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._host = value.host;
      this._jdbcUrlParams = value.jdbcUrlParams;
      this._password = value.password;
      this._port = value.port;
      this._replicationMethod.internalValue = value.replicationMethod;
      this._schemas = value.schemas;
      this._sslMode.internalValue = value.sslMode;
      this._tunnelMethod.internalValue = value.tunnelMethod;
      this._username = value.username;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // jdbc_url_params - computed: false, optional: true, required: false
  private _jdbcUrlParams?: string; 
  public get jdbcUrlParams() {
    return this.getStringAttribute('jdbc_url_params');
  }
  public set jdbcUrlParams(value: string) {
    this._jdbcUrlParams = value;
  }
  public resetJdbcUrlParams() {
    this._jdbcUrlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlParamsInput() {
    return this._jdbcUrlParams;
  }

  // password - computed: false, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // replication_method - computed: false, optional: true, required: false
  private _replicationMethod = new SourcePostgresConfigurationReplicationMethodOutputReference(this, "replication_method");
  public get replicationMethod() {
    return this._replicationMethod;
  }
  public putReplicationMethod(value: SourcePostgresConfigurationReplicationMethod) {
    this._replicationMethod.internalValue = value;
  }
  public resetReplicationMethod() {
    this._replicationMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationMethodInput() {
    return this._replicationMethod.internalValue;
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  public resetSchemas() {
    this._schemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode = new SourcePostgresConfigurationSslModeOutputReference(this, "ssl_mode");
  public get sslMode() {
    return this._sslMode;
  }
  public putSslMode(value: SourcePostgresConfigurationSslMode) {
    this._sslMode.internalValue = value;
  }
  public resetSslMode() {
    this._sslMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode.internalValue;
  }

  // tunnel_method - computed: false, optional: true, required: false
  private _tunnelMethod = new SourcePostgresConfigurationTunnelMethodOutputReference(this, "tunnel_method");
  public get tunnelMethod() {
    return this._tunnelMethod;
  }
  public putTunnelMethod(value: SourcePostgresConfigurationTunnelMethod) {
    this._tunnelMethod.internalValue = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SourcePostgresResourceAllocationDefault {
}

export function sourcePostgresResourceAllocationDefaultToTerraform(struct?: SourcePostgresResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcePostgresResourceAllocationDefaultToHclTerraform(struct?: SourcePostgresResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcePostgresResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourcePostgresResourceAllocationJobSpecificResourceRequirements {
}

export function sourcePostgresResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourcePostgresResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcePostgresResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourcePostgresResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcePostgresResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourcePostgresResourceAllocationJobSpecific {
}

export function sourcePostgresResourceAllocationJobSpecificToTerraform(struct?: SourcePostgresResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcePostgresResourceAllocationJobSpecificToHclTerraform(struct?: SourcePostgresResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcePostgresResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourcePostgresResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new SourcePostgresResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourcePostgresResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourcePostgresResourceAllocationJobSpecificOutputReference {
    return new SourcePostgresResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourcePostgresResourceAllocation {
}

export function sourcePostgresResourceAllocationToTerraform(struct?: SourcePostgresResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourcePostgresResourceAllocationToHclTerraform(struct?: SourcePostgresResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourcePostgresResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourcePostgresResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourcePostgresResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourcePostgresResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourcePostgresResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres airbyte_source_postgres}
*/
export class SourcePostgres extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_postgres";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourcePostgres resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourcePostgres to import
  * @param importFromId The id of the existing SourcePostgres that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourcePostgres to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_postgres", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_postgres airbyte_source_postgres} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourcePostgresConfig
  */
  public constructor(scope: Construct, id: string, config: SourcePostgresConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_postgres',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._secretId = config.secretId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SourcePostgresConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourcePostgresConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new SourcePostgresResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: sourcePostgresConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourcePostgresConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourcePostgresConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
