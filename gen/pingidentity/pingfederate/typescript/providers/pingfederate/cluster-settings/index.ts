// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/cluster_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether changes to OAuth clients will automatically be replicated to the cluster. This setting only applies when using XML Client storage. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/cluster_settings#replicate_clients_on_save ClusterSettings#replicate_clients_on_save}
  */
  readonly replicateClientsOnSave?: boolean | cdktf.IResolvable;
  /**
  * Whether changes to connections will automatically be replicated to the cluster. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/cluster_settings#replicate_connections_on_save ClusterSettings#replicate_connections_on_save}
  */
  readonly replicateConnectionsOnSave?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/cluster_settings pingfederate_cluster_settings}
*/
export class ClusterSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_cluster_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterSettings to import
  * @param importFromId The id of the existing ClusterSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/cluster_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_cluster_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/cluster_settings pingfederate_cluster_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_cluster_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._replicateClientsOnSave = config.replicateClientsOnSave;
    this._replicateConnectionsOnSave = config.replicateConnectionsOnSave;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // replicate_clients_on_save - computed: true, optional: true, required: false
  private _replicateClientsOnSave?: boolean | cdktf.IResolvable; 
  public get replicateClientsOnSave() {
    return this.getBooleanAttribute('replicate_clients_on_save');
  }
  public set replicateClientsOnSave(value: boolean | cdktf.IResolvable) {
    this._replicateClientsOnSave = value;
  }
  public resetReplicateClientsOnSave() {
    this._replicateClientsOnSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateClientsOnSaveInput() {
    return this._replicateClientsOnSave;
  }

  // replicate_connections_on_save - computed: true, optional: true, required: false
  private _replicateConnectionsOnSave?: boolean | cdktf.IResolvable; 
  public get replicateConnectionsOnSave() {
    return this.getBooleanAttribute('replicate_connections_on_save');
  }
  public set replicateConnectionsOnSave(value: boolean | cdktf.IResolvable) {
    this._replicateConnectionsOnSave = value;
  }
  public resetReplicateConnectionsOnSave() {
    this._replicateConnectionsOnSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateConnectionsOnSaveInput() {
    return this._replicateConnectionsOnSave;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      replicate_clients_on_save: cdktf.booleanToTerraform(this._replicateClientsOnSave),
      replicate_connections_on_save: cdktf.booleanToTerraform(this._replicateConnectionsOnSave),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      replicate_clients_on_save: {
        value: cdktf.booleanToHclTerraform(this._replicateClientsOnSave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replicate_connections_on_save: {
        value: cdktf.booleanToHclTerraform(this._replicateConnectionsOnSave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
