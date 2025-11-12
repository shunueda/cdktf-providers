// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Company the user works for. Usually useful for multi-tenant systems where the company provides Netris Controller access to customers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#company User#company}
  */
  readonly company?: string;
  /**
  * The email address of the user. Also used for system notifications and for password retrieval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * Send copies of email notifications to this address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#emailcc User#emailcc}
  */
  readonly emailcc?: string;
  /**
  * Full Name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#fullname User#fullname}
  */
  readonly fullname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of Permission Group. User permissions for viewing and editing parts of the Netris Controller. (if User Role is not used).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#pgroup User#pgroup}
  */
  readonly pgroup?: string;
  /**
  * User’s phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#phone User#phone}
  */
  readonly phone?: string;
  /**
  * Position within the company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#position User#position}
  */
  readonly position?: string;
  /**
  * Unique username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#username User#username}
  */
  readonly username: string;
  /**
  * Name of User Role. When using a User Role object to define RBAC (role-based access control), `pgroup` and `tenants` fields will be ignoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#userrole User#userrole}
  */
  readonly userrole: string;
  /**
  * tenants block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#tenants User#tenants}
  */
  readonly tenants?: UserTenants[] | cdktf.IResolvable;
}
export interface UserTenants {
  /**
  * Edit access for tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#edit User#edit}
  */
  readonly edit?: boolean | cdktf.IResolvable;
  /**
  * Tenant ID (-1 menas 'All tenants')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function userTenantsToTerraform(struct?: UserTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edit: cdktf.booleanToTerraform(struct!.edit),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function userTenantsToHclTerraform(struct?: UserTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edit: {
      value: cdktf.booleanToHclTerraform(struct!.edit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): UserTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edit !== undefined) {
      hasAnyValues = true;
      internalValueResult.edit = this._edit;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edit = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edit = value.edit;
      this._id = value.id;
    }
  }

  // edit - computed: false, optional: true, required: false
  private _edit?: boolean | cdktf.IResolvable; 
  public get edit() {
    return this.getBooleanAttribute('edit');
  }
  public set edit(value: boolean | cdktf.IResolvable) {
    this._edit = value;
  }
  public resetEdit() {
    this._edit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editInput() {
    return this._edit;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class UserTenantsList extends cdktf.ComplexList {
  public internalValue? : UserTenants[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): UserTenantsOutputReference {
    return new UserTenantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user netris_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/user netris_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_user',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._company = config.company;
    this._email = config.email;
    this._emailcc = config.emailcc;
    this._fullname = config.fullname;
    this._id = config.id;
    this._pgroup = config.pgroup;
    this._phone = config.phone;
    this._position = config.position;
    this._username = config.username;
    this._userrole = config.userrole;
    this._tenants.internalValue = config.tenants;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // emailcc - computed: false, optional: true, required: false
  private _emailcc?: string; 
  public get emailcc() {
    return this.getStringAttribute('emailcc');
  }
  public set emailcc(value: string) {
    this._emailcc = value;
  }
  public resetEmailcc() {
    this._emailcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailccInput() {
    return this._emailcc;
  }

  // fullname - computed: false, optional: true, required: false
  private _fullname?: string; 
  public get fullname() {
    return this.getStringAttribute('fullname');
  }
  public set fullname(value: string) {
    this._fullname = value;
  }
  public resetFullname() {
    this._fullname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullnameInput() {
    return this._fullname;
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

  // pgroup - computed: false, optional: true, required: false
  private _pgroup?: string; 
  public get pgroup() {
    return this.getStringAttribute('pgroup');
  }
  public set pgroup(value: string) {
    this._pgroup = value;
  }
  public resetPgroup() {
    this._pgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgroupInput() {
    return this._pgroup;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // userrole - computed: false, optional: false, required: true
  private _userrole?: string; 
  public get userrole() {
    return this.getStringAttribute('userrole');
  }
  public set userrole(value: string) {
    this._userrole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userroleInput() {
    return this._userrole;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants = new UserTenantsList(this, "tenants", false);
  public get tenants() {
    return this._tenants;
  }
  public putTenants(value: UserTenants[] | cdktf.IResolvable) {
    this._tenants.internalValue = value;
  }
  public resetTenants() {
    this._tenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      company: cdktf.stringToTerraform(this._company),
      email: cdktf.stringToTerraform(this._email),
      emailcc: cdktf.stringToTerraform(this._emailcc),
      fullname: cdktf.stringToTerraform(this._fullname),
      id: cdktf.stringToTerraform(this._id),
      pgroup: cdktf.stringToTerraform(this._pgroup),
      phone: cdktf.stringToTerraform(this._phone),
      position: cdktf.stringToTerraform(this._position),
      username: cdktf.stringToTerraform(this._username),
      userrole: cdktf.stringToTerraform(this._userrole),
      tenants: cdktf.listMapper(userTenantsToTerraform, true)(this._tenants.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      emailcc: {
        value: cdktf.stringToHclTerraform(this._emailcc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fullname: {
        value: cdktf.stringToHclTerraform(this._fullname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgroup: {
        value: cdktf.stringToHclTerraform(this._pgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userrole: {
        value: cdktf.stringToHclTerraform(this._userrole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenants: {
        value: cdktf.listMapperHcl(userTenantsToHclTerraform, true)(this._tenants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserTenantsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
