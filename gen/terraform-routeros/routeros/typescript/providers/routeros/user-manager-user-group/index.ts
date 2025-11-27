// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group#___path___ UserManagerUserGroup#___path___}
  */
  readonly path?: string;
  /**
  * A custom set of colon-separated attributes with their values will be added to `Access-Accept` messages for users in this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group#attributes UserManagerUserGroup#attributes}
  */
  readonly attributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group#id UserManagerUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of allowed authentication methods for tunneled authentication methods (`ttls-pap`, `ttls-chap`, `ttls-mschap1`, `ttls-mschap2`, `peap-mschap2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group#inner_auths UserManagerUserGroup#inner_auths}
  */
  readonly innerAuths?: string[];
  /**
  * Unique name of the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group#name UserManagerUserGroup#name}
  */
  readonly name: string;
  /**
  * A set of allowed authentication methods (`pap`, `chap`, `mschap1`, `mschap2`, `eap-tls`, `eap-ttls`, `eap-peap`, `eap-mschap2`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group#outer_auths UserManagerUserGroup#outer_auths}
  */
  readonly outerAuths?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group routeros_user_manager_user_group}
*/
export class UserManagerUserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerUserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerUserGroup to import
  * @param importFromId The id of the existing UserManagerUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerUserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/user_manager_user_group routeros_user_manager_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerUserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UserManagerUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_user_group',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._attributes = config.attributes;
    this._id = config.id;
    this._innerAuths = config.innerAuths;
    this._name = config.name;
    this._outerAuths = config.outerAuths;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string[]; 
  public get attributes() {
    return this.getListAttribute('attributes');
  }
  public set attributes(value: string[]) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // default_name - computed: true, optional: false, required: false
  public get defaultName() {
    return this.getStringAttribute('default_name');
  }

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

  // inner_auths - computed: false, optional: true, required: false
  private _innerAuths?: string[]; 
  public get innerAuths() {
    return cdktf.Fn.tolist(this.getListAttribute('inner_auths'));
  }
  public set innerAuths(value: string[]) {
    this._innerAuths = value;
  }
  public resetInnerAuths() {
    this._innerAuths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innerAuthsInput() {
    return this._innerAuths;
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

  // outer_auths - computed: false, optional: true, required: false
  private _outerAuths?: string[]; 
  public get outerAuths() {
    return cdktf.Fn.tolist(this.getListAttribute('outer_auths'));
  }
  public set outerAuths(value: string[]) {
    this._outerAuths = value;
  }
  public resetOuterAuths() {
    this._outerAuths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerAuthsInput() {
    return this._outerAuths;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      inner_auths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._innerAuths),
      name: cdktf.stringToTerraform(this._name),
      outer_auths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._outerAuths),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inner_auths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._innerAuths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outer_auths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._outerAuths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
