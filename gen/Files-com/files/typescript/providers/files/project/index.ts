// https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Global access settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/project#global_access Project#global_access}
  */
  readonly globalAccess: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/project files_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/project files_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'files_project',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.375'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._globalAccess = config.globalAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_access - computed: false, optional: false, required: true
  private _globalAccess?: string; 
  public get globalAccess() {
    return this.getStringAttribute('global_access');
  }
  public set globalAccess(value: string) {
    this._globalAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAccessInput() {
    return this._globalAccess;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_access: cdktf.stringToTerraform(this._globalAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      global_access: {
        value: cdktf.stringToHclTerraform(this._globalAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
