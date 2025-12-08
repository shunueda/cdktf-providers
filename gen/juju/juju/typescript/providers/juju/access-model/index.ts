// https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of access to the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_model#access AccessModel#access}
  */
  readonly access: string;
  /**
  * The name of the model for access management
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_model#model AccessModel#model}
  */
  readonly model: string;
  /**
  * Set of users to grant access to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_model#users AccessModel#users}
  */
  readonly users: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_model juju_access_model}
*/
export class AccessModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_access_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessModel to import
  * @param importFromId The id of the existing AccessModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_access_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/access_model juju_access_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessModelConfig
  */
  public constructor(scope: Construct, id: string, config: AccessModelConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_access_model',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '0.23.2',
        providerVersionConstraint: '0.23.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._model = config.model;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model - computed: false, optional: false, required: true
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // users - computed: false, optional: false, required: true
  private _users?: string[]; 
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }
  public set users(value: string[]) {
    this._users = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      model: cdktf.stringToTerraform(this._model),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model: {
        value: cdktf.stringToHclTerraform(this._model),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
