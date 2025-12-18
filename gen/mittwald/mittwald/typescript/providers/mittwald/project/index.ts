// https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for your project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/project#description Project#description}
  */
  readonly description: string;
  /**
  * ID of the server this project belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/project#server_id Project#server_id}
  */
  readonly serverId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/project mittwald_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/resources/project mittwald_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_project',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
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
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_ips - computed: true, optional: false, required: false
  public get defaultIps() {
    return this.getListAttribute('default_ips');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // directories - computed: true, optional: false, required: false
  private _directories = new cdktf.StringMap(this, "directories");
  public get directories() {
    return this._directories;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_id - computed: false, optional: true, required: false
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  public resetServerId() {
    this._serverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // short_id - computed: true, optional: false, required: false
  public get shortId() {
    return this.getStringAttribute('short_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      server_id: cdktf.stringToTerraform(this._serverId),
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
      server_id: {
        value: cdktf.stringToHclTerraform(this._serverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
