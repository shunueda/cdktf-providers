// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Change the current authentication method of user. SAML user association can be removed using this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#authenticationmethod UserV2#authenticationmethod}
  */
  readonly authenticationmethod?: string;
  /**
  * Used to provide an email-id to the new user. This email-id is used for logging in the user. Please note that email ids are compulsory for company and local users and optional for external users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#email UserV2#email}
  */
  readonly email: string;
  /**
  * enable or disable the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#enabled UserV2#enabled}
  */
  readonly enabled?: string;
  /**
  * Used to provide a name to the new user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#fullname UserV2#fullname}
  */
  readonly fullname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#id UserV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User will receive an email to install backup software package on their device if this is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#inviteuser UserV2#inviteuser}
  */
  readonly inviteuser?: string;
  /**
  * Used to provide the new user with a username. This username can be used for logging in the user instead of email-id when duplicate email-ids are present. For external user, it is necessary to provide the domain name along with the username (domainName\\username). To create a company user, the company id or name needs to be provided in the company entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#name UserV2#name}
  */
  readonly name?: string;
  /**
  * Used to provide a password to the user being created. This will be accepted when the useSystemGeneratePassword tag is false. The password has to be provided in Base64 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#password UserV2#password}
  */
  readonly password?: string;
  /**
  * Change User Principal Name(UPN) for existing user. This User Principal Name can be used for logging-in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#userprincipalname UserV2#userprincipalname}
  */
  readonly userprincipalname?: string;
  /**
  * Choose to provide a system generated password to the user instead of providing your own password. An email will be sent to the user to reset the password. If it is set to true, password tag need not be provided. If it is set to false, password needs to be provided in the password tag in Base64 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#usesystemgeneratepassword UserV2#usesystemgeneratepassword}
  */
  readonly usesystemgeneratepassword?: string;
  /**
  * company block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#company UserV2#company}
  */
  readonly company?: UserV2Company[] | cdktf.IResolvable;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#plan UserV2#plan}
  */
  readonly plan?: UserV2Plan[] | cdktf.IResolvable;
}
export interface UserV2Company {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#id UserV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#name UserV2#name}
  */
  readonly name?: string;
}

export function userV2CompanyToTerraform(struct?: UserV2Company | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userV2CompanyToHclTerraform(struct?: UserV2Company | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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

export class UserV2CompanyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserV2Company | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserV2Company | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: true, required: false
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

export class UserV2CompanyList extends cdktf.ComplexList {
  public internalValue? : UserV2Company[] | cdktf.IResolvable

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
  public get(index: number): UserV2CompanyOutputReference {
    return new UserV2CompanyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserV2Plan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#id UserV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#name UserV2#name}
  */
  readonly name?: string;
}

export function userV2PlanToTerraform(struct?: UserV2Plan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userV2PlanToHclTerraform(struct?: UserV2Plan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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

export class UserV2PlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserV2Plan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserV2Plan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
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

  // name - computed: false, optional: true, required: false
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

export class UserV2PlanList extends cdktf.ComplexList {
  public internalValue? : UserV2Plan[] | cdktf.IResolvable

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
  public get(index: number): UserV2PlanOutputReference {
    return new UserV2PlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2 commvault_user_v2}
*/
export class UserV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_user_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserV2 to import
  * @param importFromId The id of the existing UserV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_user_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/user_v2 commvault_user_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserV2Config
  */
  public constructor(scope: Construct, id: string, config: UserV2Config) {
    super(scope, id, {
      terraformResourceType: 'commvault_user_v2',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationmethod = config.authenticationmethod;
    this._email = config.email;
    this._enabled = config.enabled;
    this._fullname = config.fullname;
    this._id = config.id;
    this._inviteuser = config.inviteuser;
    this._name = config.name;
    this._password = config.password;
    this._userprincipalname = config.userprincipalname;
    this._usesystemgeneratepassword = config.usesystemgeneratepassword;
    this._company.internalValue = config.company;
    this._plan.internalValue = config.plan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticationmethod - computed: true, optional: true, required: false
  private _authenticationmethod?: string; 
  public get authenticationmethod() {
    return this.getStringAttribute('authenticationmethod');
  }
  public set authenticationmethod(value: string) {
    this._authenticationmethod = value;
  }
  public resetAuthenticationmethod() {
    this._authenticationmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationmethodInput() {
    return this._authenticationmethod;
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fullname - computed: true, optional: true, required: false
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

  // inviteuser - computed: true, optional: true, required: false
  private _inviteuser?: string; 
  public get inviteuser() {
    return this.getStringAttribute('inviteuser');
  }
  public set inviteuser(value: string) {
    this._inviteuser = value;
  }
  public resetInviteuser() {
    this._inviteuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteuserInput() {
    return this._inviteuser;
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

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // userprincipalname - computed: true, optional: true, required: false
  private _userprincipalname?: string; 
  public get userprincipalname() {
    return this.getStringAttribute('userprincipalname');
  }
  public set userprincipalname(value: string) {
    this._userprincipalname = value;
  }
  public resetUserprincipalname() {
    this._userprincipalname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userprincipalnameInput() {
    return this._userprincipalname;
  }

  // usesystemgeneratepassword - computed: true, optional: true, required: false
  private _usesystemgeneratepassword?: string; 
  public get usesystemgeneratepassword() {
    return this.getStringAttribute('usesystemgeneratepassword');
  }
  public set usesystemgeneratepassword(value: string) {
    this._usesystemgeneratepassword = value;
  }
  public resetUsesystemgeneratepassword() {
    this._usesystemgeneratepassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usesystemgeneratepasswordInput() {
    return this._usesystemgeneratepassword;
  }

  // company - computed: false, optional: true, required: false
  private _company = new UserV2CompanyList(this, "company", false);
  public get company() {
    return this._company;
  }
  public putCompany(value: UserV2Company[] | cdktf.IResolvable) {
    this._company.internalValue = value;
  }
  public resetCompany() {
    this._company.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new UserV2PlanList(this, "plan", false);
  public get plan() {
    return this._plan;
  }
  public putPlan(value: UserV2Plan[] | cdktf.IResolvable) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticationmethod: cdktf.stringToTerraform(this._authenticationmethod),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.stringToTerraform(this._enabled),
      fullname: cdktf.stringToTerraform(this._fullname),
      id: cdktf.stringToTerraform(this._id),
      inviteuser: cdktf.stringToTerraform(this._inviteuser),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      userprincipalname: cdktf.stringToTerraform(this._userprincipalname),
      usesystemgeneratepassword: cdktf.stringToTerraform(this._usesystemgeneratepassword),
      company: cdktf.listMapper(userV2CompanyToTerraform, true)(this._company.internalValue),
      plan: cdktf.listMapper(userV2PlanToTerraform, true)(this._plan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticationmethod: {
        value: cdktf.stringToHclTerraform(this._authenticationmethod),
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
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
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
      inviteuser: {
        value: cdktf.stringToHclTerraform(this._inviteuser),
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
      userprincipalname: {
        value: cdktf.stringToHclTerraform(this._userprincipalname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usesystemgeneratepassword: {
        value: cdktf.stringToHclTerraform(this._usesystemgeneratepassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.listMapperHcl(userV2CompanyToHclTerraform, true)(this._company.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserV2CompanyList",
      },
      plan: {
        value: cdktf.listMapperHcl(userV2PlanToHclTerraform, true)(this._plan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserV2PlanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
