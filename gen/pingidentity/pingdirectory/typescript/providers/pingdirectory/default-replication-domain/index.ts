// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultReplicationDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the base DN of the replicated data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#base_dn DefaultReplicationDomain#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Defines how long to wait before retrying certain operations, specifically operations that might have failed because they depend on an operation from a different server that has not yet replicated to this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#dependent_ops_replay_failure_wait_time DefaultReplicationDomain#dependent_ops_replay_failure_wait_time}
  */
  readonly dependentOpsReplayFailureWaitTime?: string;
  /**
  * Specifies the heartbeat interval that the Directory Server will use when communicating with Replication Servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#heartbeat_interval DefaultReplicationDomain#heartbeat_interval}
  */
  readonly heartbeatInterval?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Determines how the server responds when replication detects that some changes might have been missed. Each missing changes policy is a set of missing changes actions to take for a set of missing changes types. The value configured here only applies to this particular replication domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#missing_changes_policy DefaultReplicationDomain#missing_changes_policy}
  */
  readonly missingChangesPolicy?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#name DefaultReplicationDomain#name}
  */
  readonly name: string;
  /**
  * Defines the maximum time to retry a failed operation. An operation will be retried only if it appears that the failure might be dependent on an earlier operation from a different server that hasn't replicated yet. The frequency of the retry is determined by the dependent-ops-replay-failure-wait-time property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#on_replay_failure_wait_for_dependent_ops_timeout DefaultReplicationDomain#on_replay_failure_wait_for_dependent_ops_timeout}
  */
  readonly onReplayFailureWaitForDependentOpsTimeout?: string;
  /**
  * When set to true, changes are only replicated with server instances that belong to the same replication set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#restricted DefaultReplicationDomain#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
  /**
  * Specifies a unique identifier for the Directory Server within the Replication Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#server_id DefaultReplicationDomain#server_id}
  */
  readonly serverId?: number;
  /**
  * The time in seconds after which historical information used in replication conflict resolution is purged. The information is removed from entries when they are modified after the purge delay has elapsed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#sync_hist_purge_delay DefaultReplicationDomain#sync_hist_purge_delay}
  */
  readonly syncHistPurgeDelay?: string;
  /**
  * Name of the parent Synchronization Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#synchronization_provider_name DefaultReplicationDomain#synchronization_provider_name}
  */
  readonly synchronizationProviderName: string;
  /**
  * Specifies the maximum number of replication updates the Directory Server can have outstanding from the Replication Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#window_size DefaultReplicationDomain#window_size}
  */
  readonly windowSize?: number;
}
export interface DefaultReplicationDomainRequiredActions {
}

export function defaultReplicationDomainRequiredActionsToTerraform(struct?: DefaultReplicationDomainRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultReplicationDomainRequiredActionsToHclTerraform(struct?: DefaultReplicationDomainRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultReplicationDomainRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultReplicationDomainRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultReplicationDomainRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultReplicationDomainRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultReplicationDomainRequiredActionsOutputReference {
    return new DefaultReplicationDomainRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain pingdirectory_default_replication_domain}
*/
export class DefaultReplicationDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_replication_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultReplicationDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultReplicationDomain to import
  * @param importFromId The id of the existing DefaultReplicationDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultReplicationDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_replication_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_domain pingdirectory_default_replication_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultReplicationDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultReplicationDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_replication_domain',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDn = config.baseDn;
    this._dependentOpsReplayFailureWaitTime = config.dependentOpsReplayFailureWaitTime;
    this._heartbeatInterval = config.heartbeatInterval;
    this._missingChangesPolicy = config.missingChangesPolicy;
    this._name = config.name;
    this._onReplayFailureWaitForDependentOpsTimeout = config.onReplayFailureWaitForDependentOpsTimeout;
    this._restricted = config.restricted;
    this._serverId = config.serverId;
    this._syncHistPurgeDelay = config.syncHistPurgeDelay;
    this._synchronizationProviderName = config.synchronizationProviderName;
    this._windowSize = config.windowSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // dependent_ops_replay_failure_wait_time - computed: true, optional: true, required: false
  private _dependentOpsReplayFailureWaitTime?: string; 
  public get dependentOpsReplayFailureWaitTime() {
    return this.getStringAttribute('dependent_ops_replay_failure_wait_time');
  }
  public set dependentOpsReplayFailureWaitTime(value: string) {
    this._dependentOpsReplayFailureWaitTime = value;
  }
  public resetDependentOpsReplayFailureWaitTime() {
    this._dependentOpsReplayFailureWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependentOpsReplayFailureWaitTimeInput() {
    return this._dependentOpsReplayFailureWaitTime;
  }

  // heartbeat_interval - computed: true, optional: true, required: false
  private _heartbeatInterval?: string; 
  public get heartbeatInterval() {
    return this.getStringAttribute('heartbeat_interval');
  }
  public set heartbeatInterval(value: string) {
    this._heartbeatInterval = value;
  }
  public resetHeartbeatInterval() {
    this._heartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatIntervalInput() {
    return this._heartbeatInterval;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // missing_changes_policy - computed: true, optional: true, required: false
  private _missingChangesPolicy?: string; 
  public get missingChangesPolicy() {
    return this.getStringAttribute('missing_changes_policy');
  }
  public set missingChangesPolicy(value: string) {
    this._missingChangesPolicy = value;
  }
  public resetMissingChangesPolicy() {
    this._missingChangesPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingChangesPolicyInput() {
    return this._missingChangesPolicy;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // on_replay_failure_wait_for_dependent_ops_timeout - computed: true, optional: true, required: false
  private _onReplayFailureWaitForDependentOpsTimeout?: string; 
  public get onReplayFailureWaitForDependentOpsTimeout() {
    return this.getStringAttribute('on_replay_failure_wait_for_dependent_ops_timeout');
  }
  public set onReplayFailureWaitForDependentOpsTimeout(value: string) {
    this._onReplayFailureWaitForDependentOpsTimeout = value;
  }
  public resetOnReplayFailureWaitForDependentOpsTimeout() {
    this._onReplayFailureWaitForDependentOpsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onReplayFailureWaitForDependentOpsTimeoutInput() {
    return this._onReplayFailureWaitForDependentOpsTimeout;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultReplicationDomainRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // restricted - computed: true, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // server_id - computed: true, optional: true, required: false
  private _serverId?: number; 
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }
  public set serverId(value: number) {
    this._serverId = value;
  }
  public resetServerId() {
    this._serverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // sync_hist_purge_delay - computed: true, optional: true, required: false
  private _syncHistPurgeDelay?: string; 
  public get syncHistPurgeDelay() {
    return this.getStringAttribute('sync_hist_purge_delay');
  }
  public set syncHistPurgeDelay(value: string) {
    this._syncHistPurgeDelay = value;
  }
  public resetSyncHistPurgeDelay() {
    this._syncHistPurgeDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncHistPurgeDelayInput() {
    return this._syncHistPurgeDelay;
  }

  // synchronization_provider_name - computed: false, optional: false, required: true
  private _synchronizationProviderName?: string; 
  public get synchronizationProviderName() {
    return this.getStringAttribute('synchronization_provider_name');
  }
  public set synchronizationProviderName(value: string) {
    this._synchronizationProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizationProviderNameInput() {
    return this._synchronizationProviderName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // window_size - computed: true, optional: true, required: false
  private _windowSize?: number; 
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }
  public set windowSize(value: number) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_dn: cdktf.stringToTerraform(this._baseDn),
      dependent_ops_replay_failure_wait_time: cdktf.stringToTerraform(this._dependentOpsReplayFailureWaitTime),
      heartbeat_interval: cdktf.stringToTerraform(this._heartbeatInterval),
      missing_changes_policy: cdktf.stringToTerraform(this._missingChangesPolicy),
      name: cdktf.stringToTerraform(this._name),
      on_replay_failure_wait_for_dependent_ops_timeout: cdktf.stringToTerraform(this._onReplayFailureWaitForDependentOpsTimeout),
      restricted: cdktf.booleanToTerraform(this._restricted),
      server_id: cdktf.numberToTerraform(this._serverId),
      sync_hist_purge_delay: cdktf.stringToTerraform(this._syncHistPurgeDelay),
      synchronization_provider_name: cdktf.stringToTerraform(this._synchronizationProviderName),
      window_size: cdktf.numberToTerraform(this._windowSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_dn: {
        value: cdktf.stringToHclTerraform(this._baseDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dependent_ops_replay_failure_wait_time: {
        value: cdktf.stringToHclTerraform(this._dependentOpsReplayFailureWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heartbeat_interval: {
        value: cdktf.stringToHclTerraform(this._heartbeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      missing_changes_policy: {
        value: cdktf.stringToHclTerraform(this._missingChangesPolicy),
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
      on_replay_failure_wait_for_dependent_ops_timeout: {
        value: cdktf.stringToHclTerraform(this._onReplayFailureWaitForDependentOpsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restricted: {
        value: cdktf.booleanToHclTerraform(this._restricted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_id: {
        value: cdktf.numberToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sync_hist_purge_delay: {
        value: cdktf.stringToHclTerraform(this._syncHistPurgeDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synchronization_provider_name: {
        value: cdktf.stringToHclTerraform(this._synchronizationProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      window_size: {
        value: cdktf.numberToHclTerraform(this._windowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
