// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#adom ObjectUserGroup#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#auth_concurrent_override ObjectUserGroup#auth_concurrent_override}
  */
  readonly authConcurrentOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#auth_concurrent_value ObjectUserGroup#auth_concurrent_value}
  */
  readonly authConcurrentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#authtimeout ObjectUserGroup#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#company ObjectUserGroup#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#dynamic_sort_subtable ObjectUserGroup#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#email ObjectUserGroup#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#expire ObjectUserGroup#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#expire_type ObjectUserGroup#expire_type}
  */
  readonly expireType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#fosid ObjectUserGroup#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#group_type ObjectUserGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#http_digest_realm ObjectUserGroup#http_digest_realm}
  */
  readonly httpDigestRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#id ObjectUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#max_accounts ObjectUserGroup#max_accounts}
  */
  readonly maxAccounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#member ObjectUserGroup#member}
  */
  readonly member?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#mobile_phone ObjectUserGroup#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#multiple_guest_add ObjectUserGroup#multiple_guest_add}
  */
  readonly multipleGuestAdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#name ObjectUserGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#password ObjectUserGroup#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#scopetype ObjectUserGroup#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sms_custom_server ObjectUserGroup#sms_custom_server}
  */
  readonly smsCustomServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sms_server ObjectUserGroup#sms_server}
  */
  readonly smsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sponsor ObjectUserGroup#sponsor}
  */
  readonly sponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sso_attribute_value ObjectUserGroup#sso_attribute_value}
  */
  readonly ssoAttributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#user_id ObjectUserGroup#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#user_name ObjectUserGroup#user_name}
  */
  readonly userName?: string;
  /**
  * dynamic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#dynamic_mapping ObjectUserGroup#dynamic_mapping}
  */
  readonly dynamicMapping?: ObjectUserGroupDynamicMapping[] | cdktf.IResolvable;
  /**
  * guest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#guest ObjectUserGroup#guest}
  */
  readonly guest?: ObjectUserGroupGuest[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#match ObjectUserGroup#match}
  */
  readonly match?: ObjectUserGroupMatch[] | cdktf.IResolvable;
}
export interface ObjectUserGroupDynamicMappingScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#name ObjectUserGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#vdom ObjectUserGroup#vdom}
  */
  readonly vdom?: string;
}

export function objectUserGroupDynamicMappingScopeToTerraform(struct?: ObjectUserGroupDynamicMappingScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectUserGroupDynamicMappingScopeToHclTerraform(struct?: ObjectUserGroupDynamicMappingScope | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserGroupDynamicMappingScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserGroupDynamicMappingScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserGroupDynamicMappingScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectUserGroupDynamicMappingScopeList extends cdktf.ComplexList {
  public internalValue? : ObjectUserGroupDynamicMappingScope[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserGroupDynamicMappingScopeOutputReference {
    return new ObjectUserGroupDynamicMappingScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserGroupDynamicMappingGuest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#comment ObjectUserGroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#company ObjectUserGroup#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#email ObjectUserGroup#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#expiration ObjectUserGroup#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#group ObjectUserGroup#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#id ObjectUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#mobile_phone ObjectUserGroup#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#name ObjectUserGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#password ObjectUserGroup#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sponsor ObjectUserGroup#sponsor}
  */
  readonly sponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#user_id ObjectUserGroup#user_id}
  */
  readonly userId?: string;
}

export function objectUserGroupDynamicMappingGuestToTerraform(struct?: ObjectUserGroupDynamicMappingGuest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    group: cdktf.stringToTerraform(struct!.group),
    id: cdktf.numberToTerraform(struct!.id),
    mobile_phone: cdktf.stringToTerraform(struct!.mobilePhone),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    sponsor: cdktf.stringToTerraform(struct!.sponsor),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function objectUserGroupDynamicMappingGuestToHclTerraform(struct?: ObjectUserGroupDynamicMappingGuest | cdktf.IResolvable): any {
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
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ObjectUserGroupDynamicMappingGuestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserGroupDynamicMappingGuest | cdktf.IResolvable | undefined {
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
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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

  public set internalValue(value: ObjectUserGroupDynamicMappingGuest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._company = undefined;
      this._email = undefined;
      this._expiration = undefined;
      this._group = undefined;
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
      this._group = value.group;
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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
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

export class ObjectUserGroupDynamicMappingGuestList extends cdktf.ComplexList {
  public internalValue? : ObjectUserGroupDynamicMappingGuest[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserGroupDynamicMappingGuestOutputReference {
    return new ObjectUserGroupDynamicMappingGuestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserGroupDynamicMappingMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#_gui_meta ObjectUserGroup#_gui_meta}
  */
  readonly guiMeta?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#group_name ObjectUserGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#id ObjectUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#server_name ObjectUserGroup#server_name}
  */
  readonly serverName?: string;
}

export function objectUserGroupDynamicMappingMatchToTerraform(struct?: ObjectUserGroupDynamicMappingMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _gui_meta: cdktf.stringToTerraform(struct!.guiMeta),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    id: cdktf.numberToTerraform(struct!.id),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function objectUserGroupDynamicMappingMatchToHclTerraform(struct?: ObjectUserGroupDynamicMappingMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _gui_meta: {
      value: cdktf.stringToHclTerraform(struct!.guiMeta),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ObjectUserGroupDynamicMappingMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserGroupDynamicMappingMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guiMeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiMeta = this._guiMeta;
    }
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

  public set internalValue(value: ObjectUserGroupDynamicMappingMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guiMeta = undefined;
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
      this._guiMeta = value.guiMeta;
      this._groupName = value.groupName;
      this._id = value.id;
      this._serverName = value.serverName;
    }
  }

  // _gui_meta - computed: false, optional: true, required: false
  private _guiMeta?: string; 
  public get guiMeta() {
    return this.getStringAttribute('_gui_meta');
  }
  public set guiMeta(value: string) {
    this._guiMeta = value;
  }
  public resetGuiMeta() {
    this._guiMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiMetaInput() {
    return this._guiMeta;
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

export class ObjectUserGroupDynamicMappingMatchList extends cdktf.ComplexList {
  public internalValue? : ObjectUserGroupDynamicMappingMatch[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserGroupDynamicMappingMatchOutputReference {
    return new ObjectUserGroupDynamicMappingMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserGroupDynamicMappingSslvpnOsCheckListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#action ObjectUserGroup#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#latest_patch_level ObjectUserGroup#latest_patch_level}
  */
  readonly latestPatchLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#name ObjectUserGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#tolerance ObjectUserGroup#tolerance}
  */
  readonly tolerance?: number;
}

export function objectUserGroupDynamicMappingSslvpnOsCheckListStructToTerraform(struct?: ObjectUserGroupDynamicMappingSslvpnOsCheckListStructOutputReference | ObjectUserGroupDynamicMappingSslvpnOsCheckListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    latest_patch_level: cdktf.stringToTerraform(struct!.latestPatchLevel),
    name: cdktf.stringToTerraform(struct!.name),
    tolerance: cdktf.numberToTerraform(struct!.tolerance),
  }
}


export function objectUserGroupDynamicMappingSslvpnOsCheckListStructToHclTerraform(struct?: ObjectUserGroupDynamicMappingSslvpnOsCheckListStructOutputReference | ObjectUserGroupDynamicMappingSslvpnOsCheckListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latest_patch_level: {
      value: cdktf.stringToHclTerraform(struct!.latestPatchLevel),
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
    tolerance: {
      value: cdktf.numberToHclTerraform(struct!.tolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserGroupDynamicMappingSslvpnOsCheckListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectUserGroupDynamicMappingSslvpnOsCheckListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._latestPatchLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.latestPatchLevel = this._latestPatchLevel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerance = this._tolerance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserGroupDynamicMappingSslvpnOsCheckListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._latestPatchLevel = undefined;
      this._name = undefined;
      this._tolerance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._latestPatchLevel = value.latestPatchLevel;
      this._name = value.name;
      this._tolerance = value.tolerance;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // latest_patch_level - computed: false, optional: true, required: false
  private _latestPatchLevel?: string; 
  public get latestPatchLevel() {
    return this.getStringAttribute('latest_patch_level');
  }
  public set latestPatchLevel(value: string) {
    this._latestPatchLevel = value;
  }
  public resetLatestPatchLevel() {
    this._latestPatchLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestPatchLevelInput() {
    return this._latestPatchLevel;
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

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
  }
}
export interface ObjectUserGroupDynamicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#auth_concurrent_override ObjectUserGroup#auth_concurrent_override}
  */
  readonly authConcurrentOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#auth_concurrent_value ObjectUserGroup#auth_concurrent_value}
  */
  readonly authConcurrentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#authtimeout ObjectUserGroup#authtimeout}
  */
  readonly authtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#company ObjectUserGroup#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#email ObjectUserGroup#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#expire ObjectUserGroup#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#expire_type ObjectUserGroup#expire_type}
  */
  readonly expireType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#group_type ObjectUserGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#http_digest_realm ObjectUserGroup#http_digest_realm}
  */
  readonly httpDigestRealm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#id ObjectUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#ldap_memberof ObjectUserGroup#ldap_memberof}
  */
  readonly ldapMemberof?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#logic_type ObjectUserGroup#logic_type}
  */
  readonly logicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#max_accounts ObjectUserGroup#max_accounts}
  */
  readonly maxAccounts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#member ObjectUserGroup#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#mobile_phone ObjectUserGroup#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#multiple_guest_add ObjectUserGroup#multiple_guest_add}
  */
  readonly multipleGuestAdd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#password ObjectUserGroup#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#redir_url ObjectUserGroup#redir_url}
  */
  readonly redirUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sms_custom_server ObjectUserGroup#sms_custom_server}
  */
  readonly smsCustomServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sms_server ObjectUserGroup#sms_server}
  */
  readonly smsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sponsor ObjectUserGroup#sponsor}
  */
  readonly sponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_bookmarks_group ObjectUserGroup#sslvpn_bookmarks_group}
  */
  readonly sslvpnBookmarksGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_cache_cleaner ObjectUserGroup#sslvpn_cache_cleaner}
  */
  readonly sslvpnCacheCleaner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_client_check ObjectUserGroup#sslvpn_client_check}
  */
  readonly sslvpnClientCheck?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_ftp ObjectUserGroup#sslvpn_ftp}
  */
  readonly sslvpnFtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_http ObjectUserGroup#sslvpn_http}
  */
  readonly sslvpnHttp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_os_check ObjectUserGroup#sslvpn_os_check}
  */
  readonly sslvpnOsCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_portal ObjectUserGroup#sslvpn_portal}
  */
  readonly sslvpnPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_portal_heading ObjectUserGroup#sslvpn_portal_heading}
  */
  readonly sslvpnPortalHeading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_rdp ObjectUserGroup#sslvpn_rdp}
  */
  readonly sslvpnRdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_samba ObjectUserGroup#sslvpn_samba}
  */
  readonly sslvpnSamba?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_split_tunneling ObjectUserGroup#sslvpn_split_tunneling}
  */
  readonly sslvpnSplitTunneling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_ssh ObjectUserGroup#sslvpn_ssh}
  */
  readonly sslvpnSsh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_telnet ObjectUserGroup#sslvpn_telnet}
  */
  readonly sslvpnTelnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_tunnel ObjectUserGroup#sslvpn_tunnel}
  */
  readonly sslvpnTunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_tunnel_endip ObjectUserGroup#sslvpn_tunnel_endip}
  */
  readonly sslvpnTunnelEndip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_tunnel_ip_mode ObjectUserGroup#sslvpn_tunnel_ip_mode}
  */
  readonly sslvpnTunnelIpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_tunnel_startip ObjectUserGroup#sslvpn_tunnel_startip}
  */
  readonly sslvpnTunnelStartip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_virtual_desktop ObjectUserGroup#sslvpn_virtual_desktop}
  */
  readonly sslvpnVirtualDesktop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_vnc ObjectUserGroup#sslvpn_vnc}
  */
  readonly sslvpnVnc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_webapp ObjectUserGroup#sslvpn_webapp}
  */
  readonly sslvpnWebapp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sso_attribute_value ObjectUserGroup#sso_attribute_value}
  */
  readonly ssoAttributeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#user_id ObjectUserGroup#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#user_name ObjectUserGroup#user_name}
  */
  readonly userName?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#_scope ObjectUserGroup#_scope}
  */
  readonly scope?: ObjectUserGroupDynamicMappingScope[] | cdktf.IResolvable;
  /**
  * guest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#guest ObjectUserGroup#guest}
  */
  readonly guest?: ObjectUserGroupDynamicMappingGuest[] | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#match ObjectUserGroup#match}
  */
  readonly match?: ObjectUserGroupDynamicMappingMatch[] | cdktf.IResolvable;
  /**
  * sslvpn_os_check_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sslvpn_os_check_list ObjectUserGroup#sslvpn_os_check_list}
  */
  readonly sslvpnOsCheckList?: ObjectUserGroupDynamicMappingSslvpnOsCheckListStruct;
}

export function objectUserGroupDynamicMappingToTerraform(struct?: ObjectUserGroupDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_concurrent_override: cdktf.stringToTerraform(struct!.authConcurrentOverride),
    auth_concurrent_value: cdktf.numberToTerraform(struct!.authConcurrentValue),
    authtimeout: cdktf.numberToTerraform(struct!.authtimeout),
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    expire: cdktf.numberToTerraform(struct!.expire),
    expire_type: cdktf.stringToTerraform(struct!.expireType),
    group_type: cdktf.stringToTerraform(struct!.groupType),
    http_digest_realm: cdktf.stringToTerraform(struct!.httpDigestRealm),
    id: cdktf.numberToTerraform(struct!.id),
    ldap_memberof: cdktf.stringToTerraform(struct!.ldapMemberof),
    logic_type: cdktf.stringToTerraform(struct!.logicType),
    max_accounts: cdktf.numberToTerraform(struct!.maxAccounts),
    member: cdktf.stringToTerraform(struct!.member),
    mobile_phone: cdktf.stringToTerraform(struct!.mobilePhone),
    multiple_guest_add: cdktf.stringToTerraform(struct!.multipleGuestAdd),
    password: cdktf.stringToTerraform(struct!.password),
    redir_url: cdktf.stringToTerraform(struct!.redirUrl),
    sms_custom_server: cdktf.stringToTerraform(struct!.smsCustomServer),
    sms_server: cdktf.stringToTerraform(struct!.smsServer),
    sponsor: cdktf.stringToTerraform(struct!.sponsor),
    sslvpn_bookmarks_group: cdktf.stringToTerraform(struct!.sslvpnBookmarksGroup),
    sslvpn_cache_cleaner: cdktf.stringToTerraform(struct!.sslvpnCacheCleaner),
    sslvpn_client_check: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslvpnClientCheck),
    sslvpn_ftp: cdktf.stringToTerraform(struct!.sslvpnFtp),
    sslvpn_http: cdktf.stringToTerraform(struct!.sslvpnHttp),
    sslvpn_os_check: cdktf.stringToTerraform(struct!.sslvpnOsCheck),
    sslvpn_portal: cdktf.stringToTerraform(struct!.sslvpnPortal),
    sslvpn_portal_heading: cdktf.stringToTerraform(struct!.sslvpnPortalHeading),
    sslvpn_rdp: cdktf.stringToTerraform(struct!.sslvpnRdp),
    sslvpn_samba: cdktf.stringToTerraform(struct!.sslvpnSamba),
    sslvpn_split_tunneling: cdktf.stringToTerraform(struct!.sslvpnSplitTunneling),
    sslvpn_ssh: cdktf.stringToTerraform(struct!.sslvpnSsh),
    sslvpn_telnet: cdktf.stringToTerraform(struct!.sslvpnTelnet),
    sslvpn_tunnel: cdktf.stringToTerraform(struct!.sslvpnTunnel),
    sslvpn_tunnel_endip: cdktf.stringToTerraform(struct!.sslvpnTunnelEndip),
    sslvpn_tunnel_ip_mode: cdktf.stringToTerraform(struct!.sslvpnTunnelIpMode),
    sslvpn_tunnel_startip: cdktf.stringToTerraform(struct!.sslvpnTunnelStartip),
    sslvpn_virtual_desktop: cdktf.stringToTerraform(struct!.sslvpnVirtualDesktop),
    sslvpn_vnc: cdktf.stringToTerraform(struct!.sslvpnVnc),
    sslvpn_webapp: cdktf.stringToTerraform(struct!.sslvpnWebapp),
    sso_attribute_value: cdktf.stringToTerraform(struct!.ssoAttributeValue),
    user_id: cdktf.stringToTerraform(struct!.userId),
    user_name: cdktf.stringToTerraform(struct!.userName),
    _scope: cdktf.listMapper(objectUserGroupDynamicMappingScopeToTerraform, true)(struct!.scope),
    guest: cdktf.listMapper(objectUserGroupDynamicMappingGuestToTerraform, true)(struct!.guest),
    match: cdktf.listMapper(objectUserGroupDynamicMappingMatchToTerraform, true)(struct!.match),
    sslvpn_os_check_list: objectUserGroupDynamicMappingSslvpnOsCheckListStructToTerraform(struct!.sslvpnOsCheckList),
  }
}


export function objectUserGroupDynamicMappingToHclTerraform(struct?: ObjectUserGroupDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_concurrent_override: {
      value: cdktf.stringToHclTerraform(struct!.authConcurrentOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_concurrent_value: {
      value: cdktf.numberToHclTerraform(struct!.authConcurrentValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authtimeout: {
      value: cdktf.numberToHclTerraform(struct!.authtimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    expire: {
      value: cdktf.numberToHclTerraform(struct!.expire),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expire_type: {
      value: cdktf.stringToHclTerraform(struct!.expireType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_type: {
      value: cdktf.stringToHclTerraform(struct!.groupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_digest_realm: {
      value: cdktf.stringToHclTerraform(struct!.httpDigestRealm),
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
    ldap_memberof: {
      value: cdktf.stringToHclTerraform(struct!.ldapMemberof),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic_type: {
      value: cdktf.stringToHclTerraform(struct!.logicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_accounts: {
      value: cdktf.numberToHclTerraform(struct!.maxAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_phone: {
      value: cdktf.stringToHclTerraform(struct!.mobilePhone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiple_guest_add: {
      value: cdktf.stringToHclTerraform(struct!.multipleGuestAdd),
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
    redir_url: {
      value: cdktf.stringToHclTerraform(struct!.redirUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_custom_server: {
      value: cdktf.stringToHclTerraform(struct!.smsCustomServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_server: {
      value: cdktf.stringToHclTerraform(struct!.smsServer),
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
    sslvpn_bookmarks_group: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnBookmarksGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_cache_cleaner: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnCacheCleaner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_client_check: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslvpnClientCheck),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sslvpn_ftp: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnFtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_http: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_os_check: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnOsCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_portal: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_portal_heading: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnPortalHeading),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_rdp: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnRdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_samba: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnSamba),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_split_tunneling: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnSplitTunneling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_ssh: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_telnet: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnTelnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_tunnel: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_tunnel_endip: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnTunnelEndip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_tunnel_ip_mode: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnTunnelIpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_tunnel_startip: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnTunnelStartip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_virtual_desktop: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnVirtualDesktop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_vnc: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnVnc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sslvpn_webapp: {
      value: cdktf.stringToHclTerraform(struct!.sslvpnWebapp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_attribute_value: {
      value: cdktf.stringToHclTerraform(struct!.ssoAttributeValue),
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
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    _scope: {
      value: cdktf.listMapperHcl(objectUserGroupDynamicMappingScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectUserGroupDynamicMappingScopeList",
    },
    guest: {
      value: cdktf.listMapperHcl(objectUserGroupDynamicMappingGuestToHclTerraform, true)(struct!.guest),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectUserGroupDynamicMappingGuestList",
    },
    match: {
      value: cdktf.listMapperHcl(objectUserGroupDynamicMappingMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectUserGroupDynamicMappingMatchList",
    },
    sslvpn_os_check_list: {
      value: objectUserGroupDynamicMappingSslvpnOsCheckListStructToHclTerraform(struct!.sslvpnOsCheckList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectUserGroupDynamicMappingSslvpnOsCheckListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserGroupDynamicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserGroupDynamicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authConcurrentOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConcurrentOverride = this._authConcurrentOverride;
    }
    if (this._authConcurrentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConcurrentValue = this._authConcurrentValue;
    }
    if (this._authtimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.authtimeout = this._authtimeout;
    }
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._expire !== undefined) {
      hasAnyValues = true;
      internalValueResult.expire = this._expire;
    }
    if (this._expireType !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireType = this._expireType;
    }
    if (this._groupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupType = this._groupType;
    }
    if (this._httpDigestRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDigestRealm = this._httpDigestRealm;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ldapMemberof !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapMemberof = this._ldapMemberof;
    }
    if (this._logicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicType = this._logicType;
    }
    if (this._maxAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAccounts = this._maxAccounts;
    }
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._mobilePhone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePhone = this._mobilePhone;
    }
    if (this._multipleGuestAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleGuestAdd = this._multipleGuestAdd;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._redirUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirUrl = this._redirUrl;
    }
    if (this._smsCustomServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsCustomServer = this._smsCustomServer;
    }
    if (this._smsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsServer = this._smsServer;
    }
    if (this._sponsor !== undefined) {
      hasAnyValues = true;
      internalValueResult.sponsor = this._sponsor;
    }
    if (this._sslvpnBookmarksGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnBookmarksGroup = this._sslvpnBookmarksGroup;
    }
    if (this._sslvpnCacheCleaner !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnCacheCleaner = this._sslvpnCacheCleaner;
    }
    if (this._sslvpnClientCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnClientCheck = this._sslvpnClientCheck;
    }
    if (this._sslvpnFtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnFtp = this._sslvpnFtp;
    }
    if (this._sslvpnHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnHttp = this._sslvpnHttp;
    }
    if (this._sslvpnOsCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnOsCheck = this._sslvpnOsCheck;
    }
    if (this._sslvpnPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnPortal = this._sslvpnPortal;
    }
    if (this._sslvpnPortalHeading !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnPortalHeading = this._sslvpnPortalHeading;
    }
    if (this._sslvpnRdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnRdp = this._sslvpnRdp;
    }
    if (this._sslvpnSamba !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnSamba = this._sslvpnSamba;
    }
    if (this._sslvpnSplitTunneling !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnSplitTunneling = this._sslvpnSplitTunneling;
    }
    if (this._sslvpnSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnSsh = this._sslvpnSsh;
    }
    if (this._sslvpnTelnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnTelnet = this._sslvpnTelnet;
    }
    if (this._sslvpnTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnTunnel = this._sslvpnTunnel;
    }
    if (this._sslvpnTunnelEndip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnTunnelEndip = this._sslvpnTunnelEndip;
    }
    if (this._sslvpnTunnelIpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnTunnelIpMode = this._sslvpnTunnelIpMode;
    }
    if (this._sslvpnTunnelStartip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnTunnelStartip = this._sslvpnTunnelStartip;
    }
    if (this._sslvpnVirtualDesktop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnVirtualDesktop = this._sslvpnVirtualDesktop;
    }
    if (this._sslvpnVnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnVnc = this._sslvpnVnc;
    }
    if (this._sslvpnWebapp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnWebapp = this._sslvpnWebapp;
    }
    if (this._ssoAttributeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoAttributeValue = this._ssoAttributeValue;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._guest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guest = this._guest?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._sslvpnOsCheckList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslvpnOsCheckList = this._sslvpnOsCheckList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserGroupDynamicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authConcurrentOverride = undefined;
      this._authConcurrentValue = undefined;
      this._authtimeout = undefined;
      this._company = undefined;
      this._email = undefined;
      this._expire = undefined;
      this._expireType = undefined;
      this._groupType = undefined;
      this._httpDigestRealm = undefined;
      this._id = undefined;
      this._ldapMemberof = undefined;
      this._logicType = undefined;
      this._maxAccounts = undefined;
      this._member = undefined;
      this._mobilePhone = undefined;
      this._multipleGuestAdd = undefined;
      this._password = undefined;
      this._redirUrl = undefined;
      this._smsCustomServer = undefined;
      this._smsServer = undefined;
      this._sponsor = undefined;
      this._sslvpnBookmarksGroup = undefined;
      this._sslvpnCacheCleaner = undefined;
      this._sslvpnClientCheck = undefined;
      this._sslvpnFtp = undefined;
      this._sslvpnHttp = undefined;
      this._sslvpnOsCheck = undefined;
      this._sslvpnPortal = undefined;
      this._sslvpnPortalHeading = undefined;
      this._sslvpnRdp = undefined;
      this._sslvpnSamba = undefined;
      this._sslvpnSplitTunneling = undefined;
      this._sslvpnSsh = undefined;
      this._sslvpnTelnet = undefined;
      this._sslvpnTunnel = undefined;
      this._sslvpnTunnelEndip = undefined;
      this._sslvpnTunnelIpMode = undefined;
      this._sslvpnTunnelStartip = undefined;
      this._sslvpnVirtualDesktop = undefined;
      this._sslvpnVnc = undefined;
      this._sslvpnWebapp = undefined;
      this._ssoAttributeValue = undefined;
      this._userId = undefined;
      this._userName = undefined;
      this._scope.internalValue = undefined;
      this._guest.internalValue = undefined;
      this._match.internalValue = undefined;
      this._sslvpnOsCheckList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authConcurrentOverride = value.authConcurrentOverride;
      this._authConcurrentValue = value.authConcurrentValue;
      this._authtimeout = value.authtimeout;
      this._company = value.company;
      this._email = value.email;
      this._expire = value.expire;
      this._expireType = value.expireType;
      this._groupType = value.groupType;
      this._httpDigestRealm = value.httpDigestRealm;
      this._id = value.id;
      this._ldapMemberof = value.ldapMemberof;
      this._logicType = value.logicType;
      this._maxAccounts = value.maxAccounts;
      this._member = value.member;
      this._mobilePhone = value.mobilePhone;
      this._multipleGuestAdd = value.multipleGuestAdd;
      this._password = value.password;
      this._redirUrl = value.redirUrl;
      this._smsCustomServer = value.smsCustomServer;
      this._smsServer = value.smsServer;
      this._sponsor = value.sponsor;
      this._sslvpnBookmarksGroup = value.sslvpnBookmarksGroup;
      this._sslvpnCacheCleaner = value.sslvpnCacheCleaner;
      this._sslvpnClientCheck = value.sslvpnClientCheck;
      this._sslvpnFtp = value.sslvpnFtp;
      this._sslvpnHttp = value.sslvpnHttp;
      this._sslvpnOsCheck = value.sslvpnOsCheck;
      this._sslvpnPortal = value.sslvpnPortal;
      this._sslvpnPortalHeading = value.sslvpnPortalHeading;
      this._sslvpnRdp = value.sslvpnRdp;
      this._sslvpnSamba = value.sslvpnSamba;
      this._sslvpnSplitTunneling = value.sslvpnSplitTunneling;
      this._sslvpnSsh = value.sslvpnSsh;
      this._sslvpnTelnet = value.sslvpnTelnet;
      this._sslvpnTunnel = value.sslvpnTunnel;
      this._sslvpnTunnelEndip = value.sslvpnTunnelEndip;
      this._sslvpnTunnelIpMode = value.sslvpnTunnelIpMode;
      this._sslvpnTunnelStartip = value.sslvpnTunnelStartip;
      this._sslvpnVirtualDesktop = value.sslvpnVirtualDesktop;
      this._sslvpnVnc = value.sslvpnVnc;
      this._sslvpnWebapp = value.sslvpnWebapp;
      this._ssoAttributeValue = value.ssoAttributeValue;
      this._userId = value.userId;
      this._userName = value.userName;
      this._scope.internalValue = value.scope;
      this._guest.internalValue = value.guest;
      this._match.internalValue = value.match;
      this._sslvpnOsCheckList.internalValue = value.sslvpnOsCheckList;
    }
  }

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

  // expire - computed: false, optional: true, required: false
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

  // expire_type - computed: false, optional: true, required: false
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

  // ldap_memberof - computed: false, optional: true, required: false
  private _ldapMemberof?: string; 
  public get ldapMemberof() {
    return this.getStringAttribute('ldap_memberof');
  }
  public set ldapMemberof(value: string) {
    this._ldapMemberof = value;
  }
  public resetLdapMemberof() {
    this._ldapMemberof = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapMemberofInput() {
    return this._ldapMemberof;
  }

  // logic_type - computed: false, optional: true, required: false
  private _logicType?: string; 
  public get logicType() {
    return this.getStringAttribute('logic_type');
  }
  public set logicType(value: string) {
    this._logicType = value;
  }
  public resetLogicType() {
    this._logicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicTypeInput() {
    return this._logicType;
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

  // member - computed: false, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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

  // multiple_guest_add - computed: false, optional: true, required: false
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

  // redir_url - computed: false, optional: true, required: false
  private _redirUrl?: string; 
  public get redirUrl() {
    return this.getStringAttribute('redir_url');
  }
  public set redirUrl(value: string) {
    this._redirUrl = value;
  }
  public resetRedirUrl() {
    this._redirUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirUrlInput() {
    return this._redirUrl;
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

  // sslvpn_bookmarks_group - computed: false, optional: true, required: false
  private _sslvpnBookmarksGroup?: string; 
  public get sslvpnBookmarksGroup() {
    return this.getStringAttribute('sslvpn_bookmarks_group');
  }
  public set sslvpnBookmarksGroup(value: string) {
    this._sslvpnBookmarksGroup = value;
  }
  public resetSslvpnBookmarksGroup() {
    this._sslvpnBookmarksGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnBookmarksGroupInput() {
    return this._sslvpnBookmarksGroup;
  }

  // sslvpn_cache_cleaner - computed: false, optional: true, required: false
  private _sslvpnCacheCleaner?: string; 
  public get sslvpnCacheCleaner() {
    return this.getStringAttribute('sslvpn_cache_cleaner');
  }
  public set sslvpnCacheCleaner(value: string) {
    this._sslvpnCacheCleaner = value;
  }
  public resetSslvpnCacheCleaner() {
    this._sslvpnCacheCleaner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnCacheCleanerInput() {
    return this._sslvpnCacheCleaner;
  }

  // sslvpn_client_check - computed: true, optional: true, required: false
  private _sslvpnClientCheck?: string[]; 
  public get sslvpnClientCheck() {
    return cdktf.Fn.tolist(this.getListAttribute('sslvpn_client_check'));
  }
  public set sslvpnClientCheck(value: string[]) {
    this._sslvpnClientCheck = value;
  }
  public resetSslvpnClientCheck() {
    this._sslvpnClientCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnClientCheckInput() {
    return this._sslvpnClientCheck;
  }

  // sslvpn_ftp - computed: false, optional: true, required: false
  private _sslvpnFtp?: string; 
  public get sslvpnFtp() {
    return this.getStringAttribute('sslvpn_ftp');
  }
  public set sslvpnFtp(value: string) {
    this._sslvpnFtp = value;
  }
  public resetSslvpnFtp() {
    this._sslvpnFtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnFtpInput() {
    return this._sslvpnFtp;
  }

  // sslvpn_http - computed: false, optional: true, required: false
  private _sslvpnHttp?: string; 
  public get sslvpnHttp() {
    return this.getStringAttribute('sslvpn_http');
  }
  public set sslvpnHttp(value: string) {
    this._sslvpnHttp = value;
  }
  public resetSslvpnHttp() {
    this._sslvpnHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnHttpInput() {
    return this._sslvpnHttp;
  }

  // sslvpn_os_check - computed: false, optional: true, required: false
  private _sslvpnOsCheck?: string; 
  public get sslvpnOsCheck() {
    return this.getStringAttribute('sslvpn_os_check');
  }
  public set sslvpnOsCheck(value: string) {
    this._sslvpnOsCheck = value;
  }
  public resetSslvpnOsCheck() {
    this._sslvpnOsCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnOsCheckInput() {
    return this._sslvpnOsCheck;
  }

  // sslvpn_portal - computed: false, optional: true, required: false
  private _sslvpnPortal?: string; 
  public get sslvpnPortal() {
    return this.getStringAttribute('sslvpn_portal');
  }
  public set sslvpnPortal(value: string) {
    this._sslvpnPortal = value;
  }
  public resetSslvpnPortal() {
    this._sslvpnPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnPortalInput() {
    return this._sslvpnPortal;
  }

  // sslvpn_portal_heading - computed: false, optional: true, required: false
  private _sslvpnPortalHeading?: string; 
  public get sslvpnPortalHeading() {
    return this.getStringAttribute('sslvpn_portal_heading');
  }
  public set sslvpnPortalHeading(value: string) {
    this._sslvpnPortalHeading = value;
  }
  public resetSslvpnPortalHeading() {
    this._sslvpnPortalHeading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnPortalHeadingInput() {
    return this._sslvpnPortalHeading;
  }

  // sslvpn_rdp - computed: false, optional: true, required: false
  private _sslvpnRdp?: string; 
  public get sslvpnRdp() {
    return this.getStringAttribute('sslvpn_rdp');
  }
  public set sslvpnRdp(value: string) {
    this._sslvpnRdp = value;
  }
  public resetSslvpnRdp() {
    this._sslvpnRdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnRdpInput() {
    return this._sslvpnRdp;
  }

  // sslvpn_samba - computed: false, optional: true, required: false
  private _sslvpnSamba?: string; 
  public get sslvpnSamba() {
    return this.getStringAttribute('sslvpn_samba');
  }
  public set sslvpnSamba(value: string) {
    this._sslvpnSamba = value;
  }
  public resetSslvpnSamba() {
    this._sslvpnSamba = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnSambaInput() {
    return this._sslvpnSamba;
  }

  // sslvpn_split_tunneling - computed: false, optional: true, required: false
  private _sslvpnSplitTunneling?: string; 
  public get sslvpnSplitTunneling() {
    return this.getStringAttribute('sslvpn_split_tunneling');
  }
  public set sslvpnSplitTunneling(value: string) {
    this._sslvpnSplitTunneling = value;
  }
  public resetSslvpnSplitTunneling() {
    this._sslvpnSplitTunneling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnSplitTunnelingInput() {
    return this._sslvpnSplitTunneling;
  }

  // sslvpn_ssh - computed: false, optional: true, required: false
  private _sslvpnSsh?: string; 
  public get sslvpnSsh() {
    return this.getStringAttribute('sslvpn_ssh');
  }
  public set sslvpnSsh(value: string) {
    this._sslvpnSsh = value;
  }
  public resetSslvpnSsh() {
    this._sslvpnSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnSshInput() {
    return this._sslvpnSsh;
  }

  // sslvpn_telnet - computed: false, optional: true, required: false
  private _sslvpnTelnet?: string; 
  public get sslvpnTelnet() {
    return this.getStringAttribute('sslvpn_telnet');
  }
  public set sslvpnTelnet(value: string) {
    this._sslvpnTelnet = value;
  }
  public resetSslvpnTelnet() {
    this._sslvpnTelnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnTelnetInput() {
    return this._sslvpnTelnet;
  }

  // sslvpn_tunnel - computed: false, optional: true, required: false
  private _sslvpnTunnel?: string; 
  public get sslvpnTunnel() {
    return this.getStringAttribute('sslvpn_tunnel');
  }
  public set sslvpnTunnel(value: string) {
    this._sslvpnTunnel = value;
  }
  public resetSslvpnTunnel() {
    this._sslvpnTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnTunnelInput() {
    return this._sslvpnTunnel;
  }

  // sslvpn_tunnel_endip - computed: false, optional: true, required: false
  private _sslvpnTunnelEndip?: string; 
  public get sslvpnTunnelEndip() {
    return this.getStringAttribute('sslvpn_tunnel_endip');
  }
  public set sslvpnTunnelEndip(value: string) {
    this._sslvpnTunnelEndip = value;
  }
  public resetSslvpnTunnelEndip() {
    this._sslvpnTunnelEndip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnTunnelEndipInput() {
    return this._sslvpnTunnelEndip;
  }

  // sslvpn_tunnel_ip_mode - computed: false, optional: true, required: false
  private _sslvpnTunnelIpMode?: string; 
  public get sslvpnTunnelIpMode() {
    return this.getStringAttribute('sslvpn_tunnel_ip_mode');
  }
  public set sslvpnTunnelIpMode(value: string) {
    this._sslvpnTunnelIpMode = value;
  }
  public resetSslvpnTunnelIpMode() {
    this._sslvpnTunnelIpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnTunnelIpModeInput() {
    return this._sslvpnTunnelIpMode;
  }

  // sslvpn_tunnel_startip - computed: false, optional: true, required: false
  private _sslvpnTunnelStartip?: string; 
  public get sslvpnTunnelStartip() {
    return this.getStringAttribute('sslvpn_tunnel_startip');
  }
  public set sslvpnTunnelStartip(value: string) {
    this._sslvpnTunnelStartip = value;
  }
  public resetSslvpnTunnelStartip() {
    this._sslvpnTunnelStartip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnTunnelStartipInput() {
    return this._sslvpnTunnelStartip;
  }

  // sslvpn_virtual_desktop - computed: false, optional: true, required: false
  private _sslvpnVirtualDesktop?: string; 
  public get sslvpnVirtualDesktop() {
    return this.getStringAttribute('sslvpn_virtual_desktop');
  }
  public set sslvpnVirtualDesktop(value: string) {
    this._sslvpnVirtualDesktop = value;
  }
  public resetSslvpnVirtualDesktop() {
    this._sslvpnVirtualDesktop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnVirtualDesktopInput() {
    return this._sslvpnVirtualDesktop;
  }

  // sslvpn_vnc - computed: false, optional: true, required: false
  private _sslvpnVnc?: string; 
  public get sslvpnVnc() {
    return this.getStringAttribute('sslvpn_vnc');
  }
  public set sslvpnVnc(value: string) {
    this._sslvpnVnc = value;
  }
  public resetSslvpnVnc() {
    this._sslvpnVnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnVncInput() {
    return this._sslvpnVnc;
  }

  // sslvpn_webapp - computed: false, optional: true, required: false
  private _sslvpnWebapp?: string; 
  public get sslvpnWebapp() {
    return this.getStringAttribute('sslvpn_webapp');
  }
  public set sslvpnWebapp(value: string) {
    this._sslvpnWebapp = value;
  }
  public resetSslvpnWebapp() {
    this._sslvpnWebapp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnWebappInput() {
    return this._sslvpnWebapp;
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

  // user_name - computed: false, optional: true, required: false
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

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectUserGroupDynamicMappingScopeList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectUserGroupDynamicMappingScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // guest - computed: false, optional: true, required: false
  private _guest = new ObjectUserGroupDynamicMappingGuestList(this, "guest", false);
  public get guest() {
    return this._guest;
  }
  public putGuest(value: ObjectUserGroupDynamicMappingGuest[] | cdktf.IResolvable) {
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
  private _match = new ObjectUserGroupDynamicMappingMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: ObjectUserGroupDynamicMappingMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // sslvpn_os_check_list - computed: false, optional: true, required: false
  private _sslvpnOsCheckList = new ObjectUserGroupDynamicMappingSslvpnOsCheckListStructOutputReference(this, "sslvpn_os_check_list");
  public get sslvpnOsCheckList() {
    return this._sslvpnOsCheckList;
  }
  public putSslvpnOsCheckList(value: ObjectUserGroupDynamicMappingSslvpnOsCheckListStruct) {
    this._sslvpnOsCheckList.internalValue = value;
  }
  public resetSslvpnOsCheckList() {
    this._sslvpnOsCheckList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslvpnOsCheckListInput() {
    return this._sslvpnOsCheckList.internalValue;
  }
}

export class ObjectUserGroupDynamicMappingList extends cdktf.ComplexList {
  public internalValue? : ObjectUserGroupDynamicMapping[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserGroupDynamicMappingOutputReference {
    return new ObjectUserGroupDynamicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserGroupGuest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#comment ObjectUserGroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#company ObjectUserGroup#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#email ObjectUserGroup#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#expiration ObjectUserGroup#expiration}
  */
  readonly expiration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#id ObjectUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#mobile_phone ObjectUserGroup#mobile_phone}
  */
  readonly mobilePhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#name ObjectUserGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#password ObjectUserGroup#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#sponsor ObjectUserGroup#sponsor}
  */
  readonly sponsor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#user_id ObjectUserGroup#user_id}
  */
  readonly userId?: string;
}

export function objectUserGroupGuestToTerraform(struct?: ObjectUserGroupGuest | cdktf.IResolvable): any {
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
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    sponsor: cdktf.stringToTerraform(struct!.sponsor),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function objectUserGroupGuestToHclTerraform(struct?: ObjectUserGroupGuest | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ObjectUserGroupGuestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserGroupGuest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectUserGroupGuest | cdktf.IResolvable | undefined) {
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

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
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

export class ObjectUserGroupGuestList extends cdktf.ComplexList {
  public internalValue? : ObjectUserGroupGuest[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserGroupGuestOutputReference {
    return new ObjectUserGroupGuestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectUserGroupMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#_gui_meta ObjectUserGroup#_gui_meta}
  */
  readonly guiMeta?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#group_name ObjectUserGroup#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#id ObjectUserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#server_name ObjectUserGroup#server_name}
  */
  readonly serverName?: string;
}

export function objectUserGroupMatchToTerraform(struct?: ObjectUserGroupMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _gui_meta: cdktf.stringToTerraform(struct!.guiMeta),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    id: cdktf.numberToTerraform(struct!.id),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function objectUserGroupMatchToHclTerraform(struct?: ObjectUserGroupMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _gui_meta: {
      value: cdktf.stringToHclTerraform(struct!.guiMeta),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ObjectUserGroupMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserGroupMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guiMeta !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiMeta = this._guiMeta;
    }
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

  public set internalValue(value: ObjectUserGroupMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guiMeta = undefined;
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
      this._guiMeta = value.guiMeta;
      this._groupName = value.groupName;
      this._id = value.id;
      this._serverName = value.serverName;
    }
  }

  // _gui_meta - computed: false, optional: true, required: false
  private _guiMeta?: string; 
  public get guiMeta() {
    return this.getStringAttribute('_gui_meta');
  }
  public set guiMeta(value: string) {
    this._guiMeta = value;
  }
  public resetGuiMeta() {
    this._guiMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiMetaInput() {
    return this._guiMeta;
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

export class ObjectUserGroupMatchList extends cdktf.ComplexList {
  public internalValue? : ObjectUserGroupMatch[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserGroupMatchOutputReference {
    return new ObjectUserGroupMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group fortimanager_object_user_group}
*/
export class ObjectUserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserGroup to import
  * @param importFromId The id of the existing ObjectUserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_group fortimanager_object_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_group',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._authConcurrentOverride = config.authConcurrentOverride;
    this._authConcurrentValue = config.authConcurrentValue;
    this._authtimeout = config.authtimeout;
    this._company = config.company;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._email = config.email;
    this._expire = config.expire;
    this._expireType = config.expireType;
    this._fosid = config.fosid;
    this._groupType = config.groupType;
    this._httpDigestRealm = config.httpDigestRealm;
    this._id = config.id;
    this._maxAccounts = config.maxAccounts;
    this._member = config.member;
    this._mobilePhone = config.mobilePhone;
    this._multipleGuestAdd = config.multipleGuestAdd;
    this._name = config.name;
    this._password = config.password;
    this._scopetype = config.scopetype;
    this._smsCustomServer = config.smsCustomServer;
    this._smsServer = config.smsServer;
    this._sponsor = config.sponsor;
    this._ssoAttributeValue = config.ssoAttributeValue;
    this._userId = config.userId;
    this._userName = config.userName;
    this._dynamicMapping.internalValue = config.dynamicMapping;
    this._guest.internalValue = config.guest;
    this._match.internalValue = config.match;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

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

  // expire - computed: false, optional: true, required: false
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

  // expire_type - computed: false, optional: true, required: false
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

  // fosid - computed: false, optional: true, required: false
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

  // member - computed: true, optional: true, required: false
  private _member?: string[]; 
  public get member() {
    return cdktf.Fn.tolist(this.getListAttribute('member'));
  }
  public set member(value: string[]) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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

  // multiple_guest_add - computed: false, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // user_name - computed: false, optional: true, required: false
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

  // dynamic_mapping - computed: false, optional: true, required: false
  private _dynamicMapping = new ObjectUserGroupDynamicMappingList(this, "dynamic_mapping", false);
  public get dynamicMapping() {
    return this._dynamicMapping;
  }
  public putDynamicMapping(value: ObjectUserGroupDynamicMapping[] | cdktf.IResolvable) {
    this._dynamicMapping.internalValue = value;
  }
  public resetDynamicMapping() {
    this._dynamicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingInput() {
    return this._dynamicMapping.internalValue;
  }

  // guest - computed: false, optional: true, required: false
  private _guest = new ObjectUserGroupGuestList(this, "guest", false);
  public get guest() {
    return this._guest;
  }
  public putGuest(value: ObjectUserGroupGuest[] | cdktf.IResolvable) {
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
  private _match = new ObjectUserGroupMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: ObjectUserGroupMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      auth_concurrent_override: cdktf.stringToTerraform(this._authConcurrentOverride),
      auth_concurrent_value: cdktf.numberToTerraform(this._authConcurrentValue),
      authtimeout: cdktf.numberToTerraform(this._authtimeout),
      company: cdktf.stringToTerraform(this._company),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      email: cdktf.stringToTerraform(this._email),
      expire: cdktf.numberToTerraform(this._expire),
      expire_type: cdktf.stringToTerraform(this._expireType),
      fosid: cdktf.numberToTerraform(this._fosid),
      group_type: cdktf.stringToTerraform(this._groupType),
      http_digest_realm: cdktf.stringToTerraform(this._httpDigestRealm),
      id: cdktf.stringToTerraform(this._id),
      max_accounts: cdktf.numberToTerraform(this._maxAccounts),
      member: cdktf.listMapper(cdktf.stringToTerraform, false)(this._member),
      mobile_phone: cdktf.stringToTerraform(this._mobilePhone),
      multiple_guest_add: cdktf.stringToTerraform(this._multipleGuestAdd),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sms_custom_server: cdktf.stringToTerraform(this._smsCustomServer),
      sms_server: cdktf.stringToTerraform(this._smsServer),
      sponsor: cdktf.stringToTerraform(this._sponsor),
      sso_attribute_value: cdktf.stringToTerraform(this._ssoAttributeValue),
      user_id: cdktf.stringToTerraform(this._userId),
      user_name: cdktf.stringToTerraform(this._userName),
      dynamic_mapping: cdktf.listMapper(objectUserGroupDynamicMappingToTerraform, true)(this._dynamicMapping.internalValue),
      guest: cdktf.listMapper(objectUserGroupGuestToTerraform, true)(this._guest.internalValue),
      match: cdktf.listMapper(objectUserGroupMatchToTerraform, true)(this._match.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      member: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._member),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      dynamic_mapping: {
        value: cdktf.listMapperHcl(objectUserGroupDynamicMappingToHclTerraform, true)(this._dynamicMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserGroupDynamicMappingList",
      },
      guest: {
        value: cdktf.listMapperHcl(objectUserGroupGuestToHclTerraform, true)(this._guest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserGroupGuestList",
      },
      match: {
        value: cdktf.listMapperHcl(objectUserGroupMatchToHclTerraform, true)(this._match.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserGroupMatchList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
