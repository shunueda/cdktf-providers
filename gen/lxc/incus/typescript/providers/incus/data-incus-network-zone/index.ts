// https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncusNetworkZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone#description DataIncusNetworkZone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone#name DataIncusNetworkZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone#project DataIncusNetworkZone#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone#remote DataIncusNetworkZone#remote}
  */
  readonly remote?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone incus_network_zone}
*/
export class DataIncusNetworkZone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incus_network_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncusNetworkZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncusNetworkZone to import
  * @param importFromId The id of the existing DataIncusNetworkZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncusNetworkZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incus_network_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lxc/incus/1.0.2/docs/data-sources/network_zone incus_network_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncusNetworkZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataIncusNetworkZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'incus_network_zone',
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
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._remote = config.remote;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new cdktf.StringMap(this, "config");
  public get config() {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      remote: cdktf.stringToTerraform(this._remote),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
