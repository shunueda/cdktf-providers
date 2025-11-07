// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accepted Authentication Methods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#auth_methods UserManagement#auth_methods}
  */
  readonly authMethods?: string[];
  /**
  * Additional information about this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#comments UserManagement#comments}
  */
  readonly comments?: string;
  /**
  * User email consists of a user name and domain name. It does not have to be a valid email address, but it must be unique and its domain must belong to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#email UserManagement#email}
  */
  readonly email: string;
  /**
  * User name. This appears when choosing users for policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#name UserManagement#name}
  */
  readonly name: string;
  /**
  * User's password. Applicable only when authentication type is Hosted DB. Password strength must follow what is defined in the auth settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#password UserManagement#password}
  */
  readonly password: string;
  /**
  * Temporary Authentication Email. If you enabled one-time tokens or links, enter the email address to which the Zscaler service sends the tokens or links. If this is empty, the service will send the email to the User email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#temp_auth_email UserManagement#temp_auth_email}
  */
  readonly tempAuthEmail?: string;
  /**
  * department block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#department UserManagement#department}
  */
  readonly department: UserManagementDepartment;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#groups UserManagement#groups}
  */
  readonly groups?: UserManagementGroups;
}
export interface UserManagementDepartment {
  /**
  * Additional information about this department
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#comments UserManagement#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#deleted UserManagement#deleted}
  */
  readonly deleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#id UserManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Identity provider (IdP) ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#idp_id UserManagement#idp_id}
  */
  readonly idpId?: number;
  /**
  * Department name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#name UserManagement#name}
  */
  readonly name?: string;
}

export function userManagementDepartmentToTerraform(struct?: UserManagementDepartmentOutputReference | UserManagementDepartment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    deleted: cdktf.booleanToTerraform(struct!.deleted),
    id: cdktf.numberToTerraform(struct!.id),
    idp_id: cdktf.numberToTerraform(struct!.idpId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userManagementDepartmentToHclTerraform(struct?: UserManagementDepartmentOutputReference | UserManagementDepartment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deleted: {
      value: cdktf.booleanToHclTerraform(struct!.deleted),
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
    idp_id: {
      value: cdktf.numberToHclTerraform(struct!.idpId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserManagementDepartmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserManagementDepartment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpId = this._idpId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserManagementDepartment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comments = undefined;
      this._deleted = undefined;
      this._id = undefined;
      this._idpId = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comments = value.comments;
      this._deleted = value.deleted;
      this._id = value.id;
      this._idpId = value.idpId;
      this._name = value.name;
    }
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // deleted - computed: true, optional: true, required: false
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // idp_id - computed: true, optional: true, required: false
  private _idpId?: number; 
  public get idpId() {
    return this.getNumberAttribute('idp_id');
  }
  public set idpId(value: number) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface UserManagementGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#id UserManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function userManagementGroupsToTerraform(struct?: UserManagementGroupsOutputReference | UserManagementGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function userManagementGroupsToHclTerraform(struct?: UserManagementGroupsOutputReference | UserManagementGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserManagementGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserManagementGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserManagementGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management zia_user_management}
*/
export class UserManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_user_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagement to import
  * @param importFromId The id of the existing UserManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_user_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/user_management zia_user_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagementConfig
  */
  public constructor(scope: Construct, id: string, config: UserManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_user_management',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMethods = config.authMethods;
    this._comments = config.comments;
    this._email = config.email;
    this._name = config.name;
    this._password = config.password;
    this._tempAuthEmail = config.tempAuthEmail;
    this._department.internalValue = config.department;
    this._groups.internalValue = config.groups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_methods - computed: false, optional: true, required: false
  private _authMethods?: string[]; 
  public get authMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_methods'));
  }
  public set authMethods(value: string[]) {
    this._authMethods = value;
  }
  public resetAuthMethods() {
    this._authMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodsInput() {
    return this._authMethods;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // temp_auth_email - computed: false, optional: true, required: false
  private _tempAuthEmail?: string; 
  public get tempAuthEmail() {
    return this.getStringAttribute('temp_auth_email');
  }
  public set tempAuthEmail(value: string) {
    this._tempAuthEmail = value;
  }
  public resetTempAuthEmail() {
    this._tempAuthEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempAuthEmailInput() {
    return this._tempAuthEmail;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getNumberAttribute('user_id');
  }

  // department - computed: false, optional: false, required: true
  private _department = new UserManagementDepartmentOutputReference(this, "department");
  public get department() {
    return this._department;
  }
  public putDepartment(value: UserManagementDepartment) {
    this._department.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new UserManagementGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: UserManagementGroups) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authMethods),
      comments: cdktf.stringToTerraform(this._comments),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      temp_auth_email: cdktf.stringToTerraform(this._tempAuthEmail),
      department: userManagementDepartmentToTerraform(this._department.internalValue),
      groups: userManagementGroupsToTerraform(this._groups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temp_auth_email: {
        value: cdktf.stringToHclTerraform(this._tempAuthEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      department: {
        value: userManagementDepartmentToHclTerraform(this._department.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserManagementDepartmentList",
      },
      groups: {
        value: userManagementGroupsToHclTerraform(this._groups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserManagementGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
