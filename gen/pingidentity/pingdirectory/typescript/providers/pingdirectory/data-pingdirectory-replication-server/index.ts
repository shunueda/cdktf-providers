// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryReplicationServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a unique identifier for the Replication Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_server#replication_server_id DataPingdirectoryReplicationServer#replication_server_id}
  */
  readonly replicationServerId: number;
  /**
  * Name of the parent Synchronization Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_server#synchronization_provider_name DataPingdirectoryReplicationServer#synchronization_provider_name}
  */
  readonly synchronizationProviderName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_server pingdirectory_replication_server}
*/
export class DataPingdirectoryReplicationServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_replication_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryReplicationServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryReplicationServer to import
  * @param importFromId The id of the existing DataPingdirectoryReplicationServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryReplicationServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_replication_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_server pingdirectory_replication_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryReplicationServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryReplicationServerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_replication_server',
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
    this._replicationServerId = config.replicationServerId;
    this._synchronizationProviderName = config.synchronizationProviderName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compression_criteria - computed: true, optional: false, required: false
  public get compressionCriteria() {
    return this.getStringAttribute('compression_criteria');
  }

  // gateway_priority - computed: true, optional: false, required: false
  public get gatewayPriority() {
    return this.getNumberAttribute('gateway_priority');
  }

  // heartbeat_interval - computed: true, optional: false, required: false
  public get heartbeatInterval() {
    return this.getStringAttribute('heartbeat_interval');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_all_remote_servers_state_in_monitor_message - computed: true, optional: false, required: false
  public get includeAllRemoteServersStateInMonitorMessage() {
    return this.getBooleanAttribute('include_all_remote_servers_state_in_monitor_message');
  }

  // je_property - computed: true, optional: false, required: false
  public get jeProperty() {
    return cdktf.Fn.tolist(this.getListAttribute('je_property'));
  }

  // listen_on_all_addresses - computed: true, optional: false, required: false
  public get listenOnAllAddresses() {
    return this.getBooleanAttribute('listen_on_all_addresses');
  }

  // missing_changes_alert_threshold_percent - computed: true, optional: false, required: false
  public get missingChangesAlertThresholdPercent() {
    return this.getNumberAttribute('missing_changes_alert_threshold_percent');
  }

  // missing_changes_policy - computed: true, optional: false, required: false
  public get missingChangesPolicy() {
    return this.getStringAttribute('missing_changes_policy');
  }

  // remote_monitor_update_interval - computed: true, optional: false, required: false
  public get remoteMonitorUpdateInterval() {
    return this.getStringAttribute('remote_monitor_update_interval');
  }

  // replication_db_directory - computed: true, optional: false, required: false
  public get replicationDbDirectory() {
    return this.getStringAttribute('replication_db_directory');
  }

  // replication_port - computed: true, optional: false, required: false
  public get replicationPort() {
    return this.getNumberAttribute('replication_port');
  }

  // replication_purge_delay - computed: true, optional: false, required: false
  public get replicationPurgeDelay() {
    return this.getStringAttribute('replication_purge_delay');
  }

  // replication_server_id - computed: false, optional: false, required: true
  private _replicationServerId?: number; 
  public get replicationServerId() {
    return this.getNumberAttribute('replication_server_id');
  }
  public set replicationServerId(value: number) {
    this._replicationServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationServerIdInput() {
    return this._replicationServerId;
  }

  // restricted_domain - computed: true, optional: false, required: false
  public get restrictedDomain() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_domain'));
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

  // target_database_size - computed: true, optional: false, required: false
  public get targetDatabaseSize() {
    return this.getStringAttribute('target_database_size');
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
      replication_server_id: cdktf.numberToTerraform(this._replicationServerId),
      synchronization_provider_name: cdktf.stringToTerraform(this._synchronizationProviderName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      replication_server_id: {
        value: cdktf.numberToHclTerraform(this._replicationServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synchronization_provider_name: {
        value: cdktf.stringToHclTerraform(this._synchronizationProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
