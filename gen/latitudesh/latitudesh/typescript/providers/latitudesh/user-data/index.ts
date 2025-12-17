// https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/user_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base64 encoded content of the User Data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/user_data#content UserData#content}
  */
  readonly content: string;
  /**
  * The User Data description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/user_data#description UserData#description}
  */
  readonly description: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/user_data latitudesh_user_data}
*/
export class UserData extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "latitudesh_user_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserData to import
  * @param importFromId The id of the existing UserData that should be imported. Refer to the {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/user_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "latitudesh_user_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/latitudesh/latitudesh/2.8.7/docs/resources/user_data latitudesh_user_data} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserDataConfig
  */
  public constructor(scope: Construct, id: string, config: UserDataConfig) {
    super(scope, id, {
      terraformResourceType: 'latitudesh_user_data',
      terraformGeneratorMetadata: {
        providerName: 'latitudesh',
        providerVersion: '2.8.7',
        providerVersionConstraint: '2.8.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._description = config.description;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      description: cdktf.stringToTerraform(this._description),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
