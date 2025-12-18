// https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration#config NetworkIntegration#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration#description NetworkIntegration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration#name NetworkIntegration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration#project NetworkIntegration#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration#remote NetworkIntegration#remote}
  */
  readonly remote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration#type NetworkIntegration#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration incus_network_integration}
*/
export class NetworkIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incus_network_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkIntegration to import
  * @param importFromId The id of the existing NetworkIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incus_network_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/resources/network_integration incus_network_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'incus_network_integration',
      terraformGeneratorMetadata: {
        providerName: 'incus',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
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
    this._project = config.project;
    this._remote = config.remote;
    this._type = config.type;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      remote: cdktf.stringToTerraform(this._remote),
      type: cdktf.stringToTerraform(this._type),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
