// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultReplicationServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies when the replication traffic should be compressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#compression_criteria DefaultReplicationServer#compression_criteria}
  */
  readonly compressionCriteria?: string;
  /**
  * Specifies the gateway priority of the Replication Server in the current location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#gateway_priority DefaultReplicationServer#gateway_priority}
  */
  readonly gatewayPriority?: number;
  /**
  * Specifies the heartbeat interval that the Directory Server will use when communicating with Replication Servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#heartbeat_interval DefaultReplicationServer#heartbeat_interval}
  */
  readonly heartbeatInterval?: string;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Indicates monitor messages should include information about remote servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#include_all_remote_servers_state_in_monitor_message DefaultReplicationServer#include_all_remote_servers_state_in_monitor_message}
  */
  readonly includeAllRemoteServersStateInMonitorMessage?: boolean | cdktf.IResolvable;
  /**
  * Specifies the database and environment properties for the Berkeley DB Java Edition database for the replication changelog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#je_property DefaultReplicationServer#je_property}
  */
  readonly jeProperty?: string[];
  /**
  * Indicates whether the Replication Server should listen on all addresses for this host. If set to FALSE, then the Replication Server will listen only to the address resolved from the hostname provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#listen_on_all_addresses DefaultReplicationServer#listen_on_all_addresses}
  */
  readonly listenOnAllAddresses?: boolean | cdktf.IResolvable;
  /**
  * Specifies the missing changes alert threshold as a percentage of the total pending changes. For instance, a value of 80 indicates that the replica is 80% of the way to losing changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#missing_changes_alert_threshold_percent DefaultReplicationServer#missing_changes_alert_threshold_percent}
  */
  readonly missingChangesAlertThresholdPercent?: number;
  /**
  * Supported in PingDirectory product version 10.0.0.0+. Determines how the server responds when replication detects that some changes might have been missed. Each missing changes policy is a set of missing changes actions to take for a set of missing changes types. The value configured here acts as a default for all replication domains on this replication server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#missing_changes_policy DefaultReplicationServer#missing_changes_policy}
  */
  readonly missingChangesPolicy?: string;
  /**
  * Specifies the duration that topology monitor data will be cached before it is requested again from a remote server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#remote_monitor_update_interval DefaultReplicationServer#remote_monitor_update_interval}
  */
  readonly remoteMonitorUpdateInterval?: string;
  /**
  * The path where the Replication Server stores all persistent information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#replication_db_directory DefaultReplicationServer#replication_db_directory}
  */
  readonly replicationDbDirectory?: string;
  /**
  * The port on which this Replication Server waits for connections from other Replication Servers or Directory Server instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#replication_port DefaultReplicationServer#replication_port}
  */
  readonly replicationPort?: number;
  /**
  * Changes are guaranteed to be maintained in the changelog database for at least this duration. Setting target-database-size can allow additional changes to be maintained up to the configured size on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#replication_purge_delay DefaultReplicationServer#replication_purge_delay}
  */
  readonly replicationPurgeDelay?: string;
  /**
  * Specifies a unique identifier for the Replication Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#replication_server_id DefaultReplicationServer#replication_server_id}
  */
  readonly replicationServerId?: number;
  /**
  * Specifies the base DN of domains that are only replicated between server instances that belong to the same replication set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#restricted_domain DefaultReplicationServer#restricted_domain}
  */
  readonly restrictedDomain?: string[];
  /**
  * Name of the parent Synchronization Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#synchronization_provider_name DefaultReplicationServer#synchronization_provider_name}
  */
  readonly synchronizationProviderName: string;
  /**
  * The replication changelog database is allowed to grow up to this size even if changes are older than the configured replication-purge-delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#target_database_size DefaultReplicationServer#target_database_size}
  */
  readonly targetDatabaseSize?: string;
}
export interface DefaultReplicationServerRequiredActions {
}

export function defaultReplicationServerRequiredActionsToTerraform(struct?: DefaultReplicationServerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultReplicationServerRequiredActionsToHclTerraform(struct?: DefaultReplicationServerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultReplicationServerRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultReplicationServerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultReplicationServerRequiredActions | undefined) {
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

export class DefaultReplicationServerRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultReplicationServerRequiredActionsOutputReference {
    return new DefaultReplicationServerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server pingdirectory_default_replication_server}
*/
export class DefaultReplicationServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_replication_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultReplicationServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultReplicationServer to import
  * @param importFromId The id of the existing DefaultReplicationServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultReplicationServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_replication_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_replication_server pingdirectory_default_replication_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultReplicationServerConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultReplicationServerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_replication_server',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compressionCriteria = config.compressionCriteria;
    this._gatewayPriority = config.gatewayPriority;
    this._heartbeatInterval = config.heartbeatInterval;
    this._includeAllRemoteServersStateInMonitorMessage = config.includeAllRemoteServersStateInMonitorMessage;
    this._jeProperty = config.jeProperty;
    this._listenOnAllAddresses = config.listenOnAllAddresses;
    this._missingChangesAlertThresholdPercent = config.missingChangesAlertThresholdPercent;
    this._missingChangesPolicy = config.missingChangesPolicy;
    this._remoteMonitorUpdateInterval = config.remoteMonitorUpdateInterval;
    this._replicationDbDirectory = config.replicationDbDirectory;
    this._replicationPort = config.replicationPort;
    this._replicationPurgeDelay = config.replicationPurgeDelay;
    this._replicationServerId = config.replicationServerId;
    this._restrictedDomain = config.restrictedDomain;
    this._synchronizationProviderName = config.synchronizationProviderName;
    this._targetDatabaseSize = config.targetDatabaseSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compression_criteria - computed: true, optional: true, required: false
  private _compressionCriteria?: string; 
  public get compressionCriteria() {
    return this.getStringAttribute('compression_criteria');
  }
  public set compressionCriteria(value: string) {
    this._compressionCriteria = value;
  }
  public resetCompressionCriteria() {
    this._compressionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionCriteriaInput() {
    return this._compressionCriteria;
  }

  // gateway_priority - computed: true, optional: true, required: false
  private _gatewayPriority?: number; 
  public get gatewayPriority() {
    return this.getNumberAttribute('gateway_priority');
  }
  public set gatewayPriority(value: number) {
    this._gatewayPriority = value;
  }
  public resetGatewayPriority() {
    this._gatewayPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPriorityInput() {
    return this._gatewayPriority;
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

  // include_all_remote_servers_state_in_monitor_message - computed: true, optional: true, required: false
  private _includeAllRemoteServersStateInMonitorMessage?: boolean | cdktf.IResolvable; 
  public get includeAllRemoteServersStateInMonitorMessage() {
    return this.getBooleanAttribute('include_all_remote_servers_state_in_monitor_message');
  }
  public set includeAllRemoteServersStateInMonitorMessage(value: boolean | cdktf.IResolvable) {
    this._includeAllRemoteServersStateInMonitorMessage = value;
  }
  public resetIncludeAllRemoteServersStateInMonitorMessage() {
    this._includeAllRemoteServersStateInMonitorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllRemoteServersStateInMonitorMessageInput() {
    return this._includeAllRemoteServersStateInMonitorMessage;
  }

  // je_property - computed: true, optional: true, required: false
  private _jeProperty?: string[]; 
  public get jeProperty() {
    return cdktf.Fn.tolist(this.getListAttribute('je_property'));
  }
  public set jeProperty(value: string[]) {
    this._jeProperty = value;
  }
  public resetJeProperty() {
    this._jeProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jePropertyInput() {
    return this._jeProperty;
  }

  // listen_on_all_addresses - computed: true, optional: true, required: false
  private _listenOnAllAddresses?: boolean | cdktf.IResolvable; 
  public get listenOnAllAddresses() {
    return this.getBooleanAttribute('listen_on_all_addresses');
  }
  public set listenOnAllAddresses(value: boolean | cdktf.IResolvable) {
    this._listenOnAllAddresses = value;
  }
  public resetListenOnAllAddresses() {
    this._listenOnAllAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnAllAddressesInput() {
    return this._listenOnAllAddresses;
  }

  // missing_changes_alert_threshold_percent - computed: true, optional: true, required: false
  private _missingChangesAlertThresholdPercent?: number; 
  public get missingChangesAlertThresholdPercent() {
    return this.getNumberAttribute('missing_changes_alert_threshold_percent');
  }
  public set missingChangesAlertThresholdPercent(value: number) {
    this._missingChangesAlertThresholdPercent = value;
  }
  public resetMissingChangesAlertThresholdPercent() {
    this._missingChangesAlertThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingChangesAlertThresholdPercentInput() {
    return this._missingChangesAlertThresholdPercent;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // remote_monitor_update_interval - computed: true, optional: true, required: false
  private _remoteMonitorUpdateInterval?: string; 
  public get remoteMonitorUpdateInterval() {
    return this.getStringAttribute('remote_monitor_update_interval');
  }
  public set remoteMonitorUpdateInterval(value: string) {
    this._remoteMonitorUpdateInterval = value;
  }
  public resetRemoteMonitorUpdateInterval() {
    this._remoteMonitorUpdateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMonitorUpdateIntervalInput() {
    return this._remoteMonitorUpdateInterval;
  }

  // replication_db_directory - computed: true, optional: true, required: false
  private _replicationDbDirectory?: string; 
  public get replicationDbDirectory() {
    return this.getStringAttribute('replication_db_directory');
  }
  public set replicationDbDirectory(value: string) {
    this._replicationDbDirectory = value;
  }
  public resetReplicationDbDirectory() {
    this._replicationDbDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationDbDirectoryInput() {
    return this._replicationDbDirectory;
  }

  // replication_port - computed: true, optional: true, required: false
  private _replicationPort?: number; 
  public get replicationPort() {
    return this.getNumberAttribute('replication_port');
  }
  public set replicationPort(value: number) {
    this._replicationPort = value;
  }
  public resetReplicationPort() {
    this._replicationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPortInput() {
    return this._replicationPort;
  }

  // replication_purge_delay - computed: true, optional: true, required: false
  private _replicationPurgeDelay?: string; 
  public get replicationPurgeDelay() {
    return this.getStringAttribute('replication_purge_delay');
  }
  public set replicationPurgeDelay(value: string) {
    this._replicationPurgeDelay = value;
  }
  public resetReplicationPurgeDelay() {
    this._replicationPurgeDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPurgeDelayInput() {
    return this._replicationPurgeDelay;
  }

  // replication_server_id - computed: true, optional: true, required: false
  private _replicationServerId?: number; 
  public get replicationServerId() {
    return this.getNumberAttribute('replication_server_id');
  }
  public set replicationServerId(value: number) {
    this._replicationServerId = value;
  }
  public resetReplicationServerId() {
    this._replicationServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationServerIdInput() {
    return this._replicationServerId;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultReplicationServerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // restricted_domain - computed: true, optional: true, required: false
  private _restrictedDomain?: string[]; 
  public get restrictedDomain() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_domain'));
  }
  public set restrictedDomain(value: string[]) {
    this._restrictedDomain = value;
  }
  public resetRestrictedDomain() {
    this._restrictedDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedDomainInput() {
    return this._restrictedDomain;
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

  // target_database_size - computed: true, optional: true, required: false
  private _targetDatabaseSize?: string; 
  public get targetDatabaseSize() {
    return this.getStringAttribute('target_database_size');
  }
  public set targetDatabaseSize(value: string) {
    this._targetDatabaseSize = value;
  }
  public resetTargetDatabaseSize() {
    this._targetDatabaseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseSizeInput() {
    return this._targetDatabaseSize;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compression_criteria: cdktf.stringToTerraform(this._compressionCriteria),
      gateway_priority: cdktf.numberToTerraform(this._gatewayPriority),
      heartbeat_interval: cdktf.stringToTerraform(this._heartbeatInterval),
      include_all_remote_servers_state_in_monitor_message: cdktf.booleanToTerraform(this._includeAllRemoteServersStateInMonitorMessage),
      je_property: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jeProperty),
      listen_on_all_addresses: cdktf.booleanToTerraform(this._listenOnAllAddresses),
      missing_changes_alert_threshold_percent: cdktf.numberToTerraform(this._missingChangesAlertThresholdPercent),
      missing_changes_policy: cdktf.stringToTerraform(this._missingChangesPolicy),
      remote_monitor_update_interval: cdktf.stringToTerraform(this._remoteMonitorUpdateInterval),
      replication_db_directory: cdktf.stringToTerraform(this._replicationDbDirectory),
      replication_port: cdktf.numberToTerraform(this._replicationPort),
      replication_purge_delay: cdktf.stringToTerraform(this._replicationPurgeDelay),
      replication_server_id: cdktf.numberToTerraform(this._replicationServerId),
      restricted_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedDomain),
      synchronization_provider_name: cdktf.stringToTerraform(this._synchronizationProviderName),
      target_database_size: cdktf.stringToTerraform(this._targetDatabaseSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compression_criteria: {
        value: cdktf.stringToHclTerraform(this._compressionCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_priority: {
        value: cdktf.numberToHclTerraform(this._gatewayPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeat_interval: {
        value: cdktf.stringToHclTerraform(this._heartbeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_all_remote_servers_state_in_monitor_message: {
        value: cdktf.booleanToHclTerraform(this._includeAllRemoteServersStateInMonitorMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      je_property: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jeProperty),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      listen_on_all_addresses: {
        value: cdktf.booleanToHclTerraform(this._listenOnAllAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      missing_changes_alert_threshold_percent: {
        value: cdktf.numberToHclTerraform(this._missingChangesAlertThresholdPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      missing_changes_policy: {
        value: cdktf.stringToHclTerraform(this._missingChangesPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_monitor_update_interval: {
        value: cdktf.stringToHclTerraform(this._remoteMonitorUpdateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_db_directory: {
        value: cdktf.stringToHclTerraform(this._replicationDbDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_port: {
        value: cdktf.numberToHclTerraform(this._replicationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_purge_delay: {
        value: cdktf.stringToHclTerraform(this._replicationPurgeDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_server_id: {
        value: cdktf.numberToHclTerraform(this._replicationServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restricted_domain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictedDomain),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      synchronization_provider_name: {
        value: cdktf.stringToHclTerraform(this._synchronizationProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_database_size: {
        value: cdktf.stringToHclTerraform(this._targetDatabaseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
