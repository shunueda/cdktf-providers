// https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LabConfig extends cdktf.TerraformMetaArguments {
  /**
  * Author of the lab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab#author Lab#author}
  */
  readonly author?: string;
  /**
  * Body content of the lab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab#body Lab#body}
  */
  readonly body?: string;
  /**
  * Description of the lab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab#description Lab#description}
  */
  readonly description?: string;
  /**
  * Path of the lab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab#folder_path Lab#folder_path}
  */
  readonly folderPath?: string;
  /**
  * Name of the lab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab#name Lab#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab eveng_lab}
*/
export class Lab extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "eveng_lab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lab to import
  * @param importFromId The id of the existing Lab that should be imported. Refer to the {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "eveng_lab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/corentinptrl/eveng/0.1.7/docs/resources/lab eveng_lab} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LabConfig
  */
  public constructor(scope: Construct, id: string, config: LabConfig) {
    super(scope, id, {
      terraformResourceType: 'eveng_lab',
      terraformGeneratorMetadata: {
        providerName: 'eveng',
        providerVersion: '0.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._author = config.author;
    this._body = config.body;
    this._description = config.description;
    this._folderPath = config.folderPath;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: false, optional: true, required: false
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  public resetAuthor() {
    this._author = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // description - computed: false, optional: true, required: false
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

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // folder_path - computed: false, optional: true, required: false
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  public resetFolderPath() {
    this._folderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author: cdktf.stringToTerraform(this._author),
      body: cdktf.stringToTerraform(this._body),
      description: cdktf.stringToTerraform(this._description),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_path: {
        value: cdktf.stringToHclTerraform(this._folderPath),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
