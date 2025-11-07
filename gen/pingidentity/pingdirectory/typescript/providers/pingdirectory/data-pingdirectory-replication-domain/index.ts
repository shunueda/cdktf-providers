// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryReplicationDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_domain#name DataPingdirectoryReplicationDomain#name}
  */
  readonly name: string;
  /**
  * Name of the parent Synchronization Provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_domain#synchronization_provider_name DataPingdirectoryReplicationDomain#synchronization_provider_name}
  */
  readonly synchronizationProviderName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_domain pingdirectory_replication_domain}
*/
export class DataPingdirectoryReplicationDomain extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_replication_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryReplicationDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryReplicationDomain to import
  * @param importFromId The id of the existing DataPingdirectoryReplicationDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryReplicationDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_replication_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/replication_domain pingdirectory_replication_domain} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryReplicationDomainConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryReplicationDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_replication_domain',
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
    this._name = config.name;
    this._synchronizationProviderName = config.synchronizationProviderName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dn - computed: true, optional: false, required: false
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }

  // dependent_ops_replay_failure_wait_time - computed: true, optional: false, required: false
  public get dependentOpsReplayFailureWaitTime() {
    return this.getStringAttribute('dependent_ops_replay_failure_wait_time');
  }

  // heartbeat_interval - computed: true, optional: false, required: false
  public get heartbeatInterval() {
    return this.getStringAttribute('heartbeat_interval');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // missing_changes_policy - computed: true, optional: false, required: false
  public get missingChangesPolicy() {
    return this.getStringAttribute('missing_changes_policy');
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

  // on_replay_failure_wait_for_dependent_ops_timeout - computed: true, optional: false, required: false
  public get onReplayFailureWaitForDependentOpsTimeout() {
    return this.getStringAttribute('on_replay_failure_wait_for_dependent_ops_timeout');
  }

  // restricted - computed: true, optional: false, required: false
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getNumberAttribute('server_id');
  }

  // sync_hist_purge_delay - computed: true, optional: false, required: false
  public get syncHistPurgeDelay() {
    return this.getStringAttribute('sync_hist_purge_delay');
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

  // window_size - computed: true, optional: false, required: false
  public get windowSize() {
    return this.getNumberAttribute('window_size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      synchronization_provider_name: cdktf.stringToTerraform(this._synchronizationProviderName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
