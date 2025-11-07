// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#auth_concurrent_override UserGroup#auth_concurrent_override}
  */
  readonly authConcurrentOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#auth_concurrent_value UserGroup#auth_concurrent_value}
  */
  readonly authConcurrentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#authtimeout UserGroup#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#company UserGroup#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#dynamic_sort_subtable UserGroup#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#email UserGroup#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#expire UserGroup#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#expire_type UserGroup#expire_type}
  */
  readonly expireType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#fosid UserGroup#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#get_all_tables UserGroup#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#group_type UserGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#http_digest_realm UserGroup#http_digest_realm}
  */
  readonly httpDigestRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#id UserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#max_accounts UserGroup#max_accounts}
  */
  readonly maxAccounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#mobile_phone UserGroup#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#multiple_guest_add UserGroup#multiple_guest_add}
  */
  readonly multipleGuestAdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#name UserGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#password UserGroup#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#sms_custom_server UserGroup#sms_custom_server}
  */
  readonly smsCustomServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#sms_server UserGroup#sms_server}
  */
  readonly smsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#sponsor UserGroup#sponsor}
  */
  readonly sponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#sso_attribute_value UserGroup#sso_attribute_value}
  */
  readonly ssoAttributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#user_id UserGroup#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#user_name UserGroup#user_name}
  */
  readonly userName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#vdomparam UserGroup#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * guest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#guest UserGroup#guest}
  */
  readonly guest?: UserGroupGuest[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#match UserGroup#match}
  */
  readonly match?: UserGroupMatch[] | cdktf.IResolvable;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#member UserGroup#member}
  */
  readonly member?: UserGroupMember[] | cdktf.IResolvable;
}
export interface UserGroupGuest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#comment UserGroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#company UserGroup#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#email UserGroup#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#expiration UserGroup#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#id UserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#mobile_phone UserGroup#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#name UserGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#password UserGroup#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#sponsor UserGroup#sponsor}
  */
  readonly sponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#user_id UserGroup#user_id}
  */
  readonly userId?: string;
}

export function userGroupGuestToTerraform(struct?: UserGroupGuest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    id: cdktf.numberToTerraform(struct!.id),
    mobile_phone: cdktf.stringToTerraform(struct!.mobilePhone),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    sponsor: cdktf.stringToTerraform(struct!.sponsor),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function userGroupGuestToHclTerraform(struct?: UserGroupGuest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company: {
      value: cdktf.stringToHclTerraform(struct!.company),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mobile_phone: {
      value: cdktf.stringToHclTerraform(struct!.mobilePhone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sponsor: {
      value: cdktf.stringToHclTerraform(struct!.sponsor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupGuestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupGuest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mobilePhone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePhone = this._mobilePhone;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sponsor !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsor = this._sponsor;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupGuest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._company = undefined;
      this._email = undefined;
      this._expiration = undefined;
      this._id = undefined;
      this._mobilePhone = undefined;
      this._name = undefined;
      this._password = undefined;
      this._sponsor = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._company = value.company;
      this._email = value.email;
      this._expiration = value.expiration;
      this._id = value.id;
      this._mobilePhone = value.mobilePhone;
      this._name = value.name;
      this._password = value.password;
      this._sponsor = value.sponsor;
      this._userId = value.userId;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
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

  // mobile_phone - computed: false, optional: true, required: false
  private _mobilePhone?: string; 
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }
  public set mobilePhone(value: string) {
    this._mobilePhone = value;
  }
  public resetMobilePhone() {
    this._mobilePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneInput() {
    return this._mobilePhone;
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

  // password - computed: false, optional: true, required: false
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

  // sponsor - computed: false, optional: true, required: false
  private _sponsor?: string; 
  public get sponsor() {
    return this.getStringAttribute('sponsor');
  }
  public set sponsor(value: string) {
    this._sponsor = value;
  }
  public resetSponsor() {
    this._sponsor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInput() {
    return this._sponsor;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class UserGroupGuestList extends cdktf.ComplexList {
  public internalValue? : UserGroupGuest[] | cdktf.IResolvable

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
  public get(index: number): UserGroupGuestOutputReference {
    return new UserGroupGuestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#group_name UserGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#id UserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#server_name UserGroup#server_name}
  */
  readonly serverName?: string;
}

export function userGroupMatchToTerraform(struct?: UserGroupMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    id: cdktf.numberToTerraform(struct!.id),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function userGroupMatchToHclTerraform(struct?: UserGroupMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._id = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._id = value.id;
      this._serverName = value.serverName;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}

export class UserGroupMatchList extends cdktf.ComplexList {
  public internalValue? : UserGroupMatch[] | cdktf.IResolvable

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
  public get(index: number): UserGroupMatchOutputReference {
    return new UserGroupMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupMember {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#name UserGroup#name}
  */
  readonly name?: string;
}

export function userGroupMemberToTerraform(struct?: UserGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userGroupMemberToHclTerraform(struct?: UserGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class UserGroupMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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

export class UserGroupMemberList extends cdktf.ComplexList {
  public internalValue? : UserGroupMember[] | cdktf.IResolvable

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
  public get(index: number): UserGroupMemberOutputReference {
    return new UserGroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group fortios_user_group}
*/
export class UserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroup to import
  * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_group fortios_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_group',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authConcurrentOverride = config.authConcurrentOverride;
    this._authConcurrentValue = config.authConcurrentValue;
    this._authtimeout = config.authtimeout;
    this._company = config.company;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._email = config.email;
    this._expire = config.expire;
    this._expireType = config.expireType;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._groupType = config.groupType;
    this._httpDigestRealm = config.httpDigestRealm;
    this._id = config.id;
    this._maxAccounts = config.maxAccounts;
    this._mobilePhone = config.mobilePhone;
    this._multipleGuestAdd = config.multipleGuestAdd;
    this._name = config.name;
    this._password = config.password;
    this._smsCustomServer = config.smsCustomServer;
    this._smsServer = config.smsServer;
    this._sponsor = config.sponsor;
    this._ssoAttributeValue = config.ssoAttributeValue;
    this._userId = config.userId;
    this._userName = config.userName;
    this._vdomparam = config.vdomparam;
    this._guest.internalValue = config.guest;
    this._match.internalValue = config.match;
    this._member.internalValue = config.member;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_concurrent_override - computed: true, optional: true, required: false
  private _authConcurrentOverride?: string; 
  public get authConcurrentOverride() {
    return this.getStringAttribute('auth_concurrent_override');
  }
  public set authConcurrentOverride(value: string) {
    this._authConcurrentOverride = value;
  }
  public resetAuthConcurrentOverride() {
    this._authConcurrentOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConcurrentOverrideInput() {
    return this._authConcurrentOverride;
  }

  // auth_concurrent_value - computed: false, optional: true, required: false
  private _authConcurrentValue?: number; 
  public get authConcurrentValue() {
    return this.getNumberAttribute('auth_concurrent_value');
  }
  public set authConcurrentValue(value: number) {
    this._authConcurrentValue = value;
  }
  public resetAuthConcurrentValue() {
    this._authConcurrentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConcurrentValueInput() {
    return this._authConcurrentValue;
  }

  // authtimeout - computed: false, optional: true, required: false
  private _authtimeout?: number; 
  public get authtimeout() {
    return this.getNumberAttribute('authtimeout');
  }
  public set authtimeout(value: number) {
    this._authtimeout = value;
  }
  public resetAuthtimeout() {
    this._authtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtimeoutInput() {
    return this._authtimeout;
  }

  // company - computed: true, optional: true, required: false
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expire - computed: true, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
  }

  // expire_type - computed: true, optional: true, required: false
  private _expireType?: string; 
  public get expireType() {
    return this.getStringAttribute('expire_type');
  }
  public set expireType(value: string) {
    this._expireType = value;
  }
  public resetExpireType() {
    this._expireType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTypeInput() {
    return this._expireType;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // group_type - computed: true, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
  }

  // http_digest_realm - computed: false, optional: true, required: false
  private _httpDigestRealm?: string; 
  public get httpDigestRealm() {
    return this.getStringAttribute('http_digest_realm');
  }
  public set httpDigestRealm(value: string) {
    this._httpDigestRealm = value;
  }
  public resetHttpDigestRealm() {
    this._httpDigestRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDigestRealmInput() {
    return this._httpDigestRealm;
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

  // max_accounts - computed: false, optional: true, required: false
  private _maxAccounts?: number; 
  public get maxAccounts() {
    return this.getNumberAttribute('max_accounts');
  }
  public set maxAccounts(value: number) {
    this._maxAccounts = value;
  }
  public resetMaxAccounts() {
    this._maxAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAccountsInput() {
    return this._maxAccounts;
  }

  // mobile_phone - computed: true, optional: true, required: false
  private _mobilePhone?: string; 
  public get mobilePhone() {
    return this.getStringAttribute('mobile_phone');
  }
  public set mobilePhone(value: string) {
    this._mobilePhone = value;
  }
  public resetMobilePhone() {
    this._mobilePhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneInput() {
    return this._mobilePhone;
  }

  // multiple_guest_add - computed: true, optional: true, required: false
  private _multipleGuestAdd?: string; 
  public get multipleGuestAdd() {
    return this.getStringAttribute('multiple_guest_add');
  }
  public set multipleGuestAdd(value: string) {
    this._multipleGuestAdd = value;
  }
  public resetMultipleGuestAdd() {
    this._multipleGuestAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleGuestAddInput() {
    return this._multipleGuestAdd;
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

  // sms_custom_server - computed: false, optional: true, required: false
  private _smsCustomServer?: string; 
  public get smsCustomServer() {
    return this.getStringAttribute('sms_custom_server');
  }
  public set smsCustomServer(value: string) {
    this._smsCustomServer = value;
  }
  public resetSmsCustomServer() {
    this._smsCustomServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsCustomServerInput() {
    return this._smsCustomServer;
  }

  // sms_server - computed: true, optional: true, required: false
  private _smsServer?: string; 
  public get smsServer() {
    return this.getStringAttribute('sms_server');
  }
  public set smsServer(value: string) {
    this._smsServer = value;
  }
  public resetSmsServer() {
    this._smsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsServerInput() {
    return this._smsServer;
  }

  // sponsor - computed: true, optional: true, required: false
  private _sponsor?: string; 
  public get sponsor() {
    return this.getStringAttribute('sponsor');
  }
  public set sponsor(value: string) {
    this._sponsor = value;
  }
  public resetSponsor() {
    this._sponsor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sponsorInput() {
    return this._sponsor;
  }

  // sso_attribute_value - computed: false, optional: true, required: false
  private _ssoAttributeValue?: string; 
  public get ssoAttributeValue() {
    return this.getStringAttribute('sso_attribute_value');
  }
  public set ssoAttributeValue(value: string) {
    this._ssoAttributeValue = value;
  }
  public resetSsoAttributeValue() {
    this._ssoAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAttributeValueInput() {
    return this._ssoAttributeValue;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // guest - computed: false, optional: true, required: false
  private _guest = new UserGroupGuestList(this, "guest", false);
  public get guest() {
    return this._guest;
  }
  public putGuest(value: UserGroupGuest[] | cdktf.IResolvable) {
    this._guest.internalValue = value;
  }
  public resetGuest() {
    this._guest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestInput() {
    return this._guest.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new UserGroupMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: UserGroupMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // member - computed: false, optional: true, required: false
  private _member = new UserGroupMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: UserGroupMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_concurrent_override: cdktf.stringToTerraform(this._authConcurrentOverride),
      auth_concurrent_value: cdktf.numberToTerraform(this._authConcurrentValue),
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      company: cdktf.stringToTerraform(this._company),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      email: cdktf.stringToTerraform(this._email),
      expire: cdktf.numberToTerraform(this._expire),
      expire_type: cdktf.stringToTerraform(this._expireType),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      group_type: cdktf.stringToTerraform(this._groupType),
      http_digest_realm: cdktf.stringToTerraform(this._httpDigestRealm),
      id: cdktf.stringToTerraform(this._id),
      max_accounts: cdktf.numberToTerraform(this._maxAccounts),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      multiple_guest_add: cdktf.stringToTerraform(this._multipleGuestAdd),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      sms_custom_server: cdktf.stringToTerraform(this._smsCustomServer),
      sms_server: cdktf.stringToTerraform(this._smsServer),
      sponsor: cdktf.stringToTerraform(this._sponsor),
      sso_attribute_value: cdktf.stringToTerraform(this._ssoAttributeValue),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      guest: cdktf.listMapper(userGroupGuestToTerraform, true)(this._guest.internalValue),
      match: cdktf.listMapper(userGroupMatchToTerraform, true)(this._match.internalValue),
      member: cdktf.listMapper(userGroupMemberToTerraform, true)(this._member.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_concurrent_override: {
        value: cdktf.stringToHclTerraform(this._authConcurrentOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_concurrent_value: {
        value: cdktf.numberToHclTerraform(this._authConcurrentValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authtimeout: {
        value: cdktf.numberToHclTerraform(this._authtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      expire_type: {
        value: cdktf.stringToHclTerraform(this._expireType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_digest_realm: {
        value: cdktf.stringToHclTerraform(this._httpDigestRealm),
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
      max_accounts: {
        value: cdktf.numberToHclTerraform(this._maxAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mobile_phone: {
        value: cdktf.stringToHclTerraform(this._mobilePhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multiple_guest_add: {
        value: cdktf.stringToHclTerraform(this._multipleGuestAdd),
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
      sms_custom_server: {
        value: cdktf.stringToHclTerraform(this._smsCustomServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sms_server: {
        value: cdktf.stringToHclTerraform(this._smsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sponsor: {
        value: cdktf.stringToHclTerraform(this._sponsor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_attribute_value: {
        value: cdktf.stringToHclTerraform(this._ssoAttributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guest: {
        value: cdktf.listMapperHcl(userGroupGuestToHclTerraform, true)(this._guest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupGuestList",
      },
      match: {
        value: cdktf.listMapperHcl(userGroupMatchToHclTerraform, true)(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupMatchList",
      },
      member: {
        value: cdktf.listMapperHcl(userGroupMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UserGroupMemberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
