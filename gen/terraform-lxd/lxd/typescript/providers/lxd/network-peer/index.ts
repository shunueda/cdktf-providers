// https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#config NetworkPeer#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Description of the network peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#description NetworkPeer#description}
  */
  readonly description?: string;
  /**
  * Name of the network peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#name NetworkPeer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#remote NetworkPeer#remote}
  */
  readonly remote?: string;
  /**
  * Name of the source network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#source_network NetworkPeer#source_network}
  */
  readonly sourceNetwork: string;
  /**
  * Project of the source network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#source_project NetworkPeer#source_project}
  */
  readonly sourceProject?: string;
  /**
  * Name of the target network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#target_network NetworkPeer#target_network}
  */
  readonly targetNetwork: string;
  /**
  * Project of the target network. Defaults to source project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#target_project NetworkPeer#target_project}
  */
  readonly targetProject?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer lxd_network_peer}
*/
export class NetworkPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lxd_network_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPeer to import
  * @param importFromId The id of the existing NetworkPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lxd_network_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-lxd/lxd/2.6.0/docs/resources/network_peer lxd_network_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPeerConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'lxd_network_peer',
      terraformGeneratorMetadata: {
        providerName: 'lxd',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._description = config.description;
    this._name = config.name;
    this._remote = config.remote;
    this._sourceNetwork = config.sourceNetwork;
    this._sourceProject = config.sourceProject;
    this._targetNetwork = config.targetNetwork;
    this._targetProject = config.targetProject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // source_network - computed: false, optional: false, required: true
  private _sourceNetwork?: string; 
  public get sourceNetwork() {
    return this.getStringAttribute('source_network');
  }
  public set sourceNetwork(value: string) {
    this._sourceNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInput() {
    return this._sourceNetwork;
  }

  // source_project - computed: true, optional: true, required: false
  private _sourceProject?: string; 
  public get sourceProject() {
    return this.getStringAttribute('source_project');
  }
  public set sourceProject(value: string) {
    this._sourceProject = value;
  }
  public resetSourceProject() {
    this._sourceProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProjectInput() {
    return this._sourceProject;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_network - computed: false, optional: false, required: true
  private _targetNetwork?: string; 
  public get targetNetwork() {
    return this.getStringAttribute('target_network');
  }
  public set targetNetwork(value: string) {
    this._targetNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNetworkInput() {
    return this._targetNetwork;
  }

  // target_project - computed: true, optional: true, required: false
  private _targetProject?: string; 
  public get targetProject() {
    return this.getStringAttribute('target_project');
  }
  public set targetProject(value: string) {
    this._targetProject = value;
  }
  public resetTargetProject() {
    this._targetProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetProjectInput() {
    return this._targetProject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      remote: cdktf.stringToTerraform(this._remote),
      source_network: cdktf.stringToTerraform(this._sourceNetwork),
      source_project: cdktf.stringToTerraform(this._sourceProject),
      target_network: cdktf.stringToTerraform(this._targetNetwork),
      target_project: cdktf.stringToTerraform(this._targetProject),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_network: {
        value: cdktf.stringToHclTerraform(this._sourceNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_project: {
        value: cdktf.stringToHclTerraform(this._sourceProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_network: {
        value: cdktf.stringToHclTerraform(this._targetNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_project: {
        value: cdktf.stringToHclTerraform(this._targetProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
