// https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project#next_unix_gid Project#next_unix_gid}
  */
  readonly nextUnixGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project#next_unix_uid Project#next_unix_uid}
  */
  readonly nextUnixUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project#project_name Project#project_name}
  */
  readonly projectName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project oktaasa_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktaasa_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktaasa_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oktadeveloper/oktaasa/1.0.1/docs/resources/project oktaasa_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'oktaasa_project',
      terraformGeneratorMetadata: {
        providerName: 'oktaasa',
        providerVersion: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._nextUnixGid = config.nextUnixGid;
    this._nextUnixUid = config.nextUnixUid;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // next_unix_gid - computed: false, optional: true, required: false
  private _nextUnixGid?: number; 
  public get nextUnixGid() {
    return this.getNumberAttribute('next_unix_gid');
  }
  public set nextUnixGid(value: number) {
    this._nextUnixGid = value;
  }
  public resetNextUnixGid() {
    this._nextUnixGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUnixGidInput() {
    return this._nextUnixGid;
  }

  // next_unix_uid - computed: false, optional: true, required: false
  private _nextUnixUid?: number; 
  public get nextUnixUid() {
    return this.getNumberAttribute('next_unix_uid');
  }
  public set nextUnixUid(value: number) {
    this._nextUnixUid = value;
  }
  public resetNextUnixUid() {
    this._nextUnixUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUnixUidInput() {
    return this._nextUnixUid;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      next_unix_gid: cdktf.numberToTerraform(this._nextUnixGid),
      next_unix_uid: cdktf.numberToTerraform(this._nextUnixUid),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_unix_gid: {
        value: cdktf.numberToHclTerraform(this._nextUnixGid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      next_unix_uid: {
        value: cdktf.numberToHclTerraform(this._nextUnixUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
