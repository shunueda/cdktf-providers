// https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder UID where the secret is stored. The parent shared folder must be non empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#folder_uid Membership#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#id Membership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The secret notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#notes Membership#notes}
  */
  readonly notes?: string;
  /**
  * The secret title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#title Membership#title}
  */
  readonly title?: string;
  /**
  * The UID of the new secret (using RFC4648 URL and Filename Safe Alphabet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#uid Membership#uid}
  */
  readonly uid?: string;
  /**
  * account_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#account_number Membership#account_number}
  */
  readonly accountNumber?: MembershipAccountNumber;
  /**
  * file_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#file_ref Membership#file_ref}
  */
  readonly fileRef?: MembershipFileRef;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#name Membership#name}
  */
  readonly name?: MembershipName;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#password Membership#password}
  */
  readonly password?: MembershipPassword;
}
export interface MembershipAccountNumber {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#label Membership#label}
  */
  readonly label?: string;
  /**
  * Privacy screen flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#privacy_screen Membership#privacy_screen}
  */
  readonly privacyScreen?: boolean | cdktf.IResolvable;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#required Membership#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#value Membership#value}
  */
  readonly value?: string;
}

export function membershipAccountNumberToTerraform(struct?: MembershipAccountNumberOutputReference | MembershipAccountNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    privacy_screen: cdktf.booleanToTerraform(struct!.privacyScreen),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function membershipAccountNumberToHclTerraform(struct?: MembershipAccountNumberOutputReference | MembershipAccountNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_screen: {
      value: cdktf.booleanToHclTerraform(struct!.privacyScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MembershipAccountNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MembershipAccountNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._privacyScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyScreen = this._privacyScreen;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MembershipAccountNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._privacyScreen = undefined;
      this._required = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._privacyScreen = value.privacyScreen;
      this._required = value.required;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // privacy_screen - computed: false, optional: true, required: false
  private _privacyScreen?: boolean | cdktf.IResolvable; 
  public get privacyScreen() {
    return this.getBooleanAttribute('privacy_screen');
  }
  public set privacyScreen(value: boolean | cdktf.IResolvable) {
    this._privacyScreen = value;
  }
  public resetPrivacyScreen() {
    this._privacyScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyScreenInput() {
    return this._privacyScreen;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface MembershipFileRefValue {
  /**
  * The file ref UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#uid Membership#uid}
  */
  readonly uid?: string;
}

export function membershipFileRefValueToTerraform(struct?: MembershipFileRefValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function membershipFileRefValueToHclTerraform(struct?: MembershipFileRefValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MembershipFileRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MembershipFileRefValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MembershipFileRefValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uid = value.uid;
    }
  }

  // content_base64 - computed: true, optional: false, required: false
  public get contentBase64() {
    return this.getStringAttribute('content_base64');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class MembershipFileRefValueList extends cdktf.ComplexList {
  public internalValue? : MembershipFileRefValue[] | cdktf.IResolvable

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
  public get(index: number): MembershipFileRefValueOutputReference {
    return new MembershipFileRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MembershipFileRef {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#label Membership#label}
  */
  readonly label?: string;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#required Membership#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#value Membership#value}
  */
  readonly value?: MembershipFileRefValue[] | cdktf.IResolvable;
}

export function membershipFileRefToTerraform(struct?: MembershipFileRefOutputReference | MembershipFileRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.listMapper(membershipFileRefValueToTerraform, true)(struct!.value),
  }
}


export function membershipFileRefToHclTerraform(struct?: MembershipFileRefOutputReference | MembershipFileRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.listMapperHcl(membershipFileRefValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "MembershipFileRefValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MembershipFileRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MembershipFileRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MembershipFileRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._required = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._required = value.required;
      this._value.internalValue = value.value;
    }
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: false, optional: true, required: false
  private _value = new MembershipFileRefValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: MembershipFileRefValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface MembershipNameValue {
  /**
  * First name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#first Membership#first}
  */
  readonly first?: string;
  /**
  * Last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#last Membership#last}
  */
  readonly last?: string;
  /**
  * MIddle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#middle Membership#middle}
  */
  readonly middle?: string;
}

export function membershipNameValueToTerraform(struct?: MembershipNameValueOutputReference | MembershipNameValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first: cdktf.stringToTerraform(struct!.first),
    last: cdktf.stringToTerraform(struct!.last),
    middle: cdktf.stringToTerraform(struct!.middle),
  }
}


export function membershipNameValueToHclTerraform(struct?: MembershipNameValueOutputReference | MembershipNameValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first: {
      value: cdktf.stringToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last: {
      value: cdktf.stringToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middle: {
      value: cdktf.stringToHclTerraform(struct!.middle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MembershipNameValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MembershipNameValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    if (this._middle !== undefined) {
      hasAnyValues = true;
      internalValueResult.middle = this._middle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MembershipNameValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._first = undefined;
      this._last = undefined;
      this._middle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._first = value.first;
      this._last = value.last;
      this._middle = value.middle;
    }
  }

  // first - computed: false, optional: true, required: false
  private _first?: string; 
  public get first() {
    return this.getStringAttribute('first');
  }
  public set first(value: string) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: false, optional: true, required: false
  private _last?: string; 
  public get last() {
    return this.getStringAttribute('last');
  }
  public set last(value: string) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }

  // middle - computed: false, optional: true, required: false
  private _middle?: string; 
  public get middle() {
    return this.getStringAttribute('middle');
  }
  public set middle(value: string) {
    this._middle = value;
  }
  public resetMiddle() {
    this._middle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleInput() {
    return this._middle;
  }
}
export interface MembershipName {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#label Membership#label}
  */
  readonly label?: string;
  /**
  * Privacy screen flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#privacy_screen Membership#privacy_screen}
  */
  readonly privacyScreen?: boolean | cdktf.IResolvable;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#required Membership#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#value Membership#value}
  */
  readonly value?: MembershipNameValue;
}

export function membershipNameToTerraform(struct?: MembershipNameOutputReference | MembershipName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    privacy_screen: cdktf.booleanToTerraform(struct!.privacyScreen),
    required: cdktf.booleanToTerraform(struct!.required),
    value: membershipNameValueToTerraform(struct!.value),
  }
}


export function membershipNameToHclTerraform(struct?: MembershipNameOutputReference | MembershipName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_screen: {
      value: cdktf.booleanToHclTerraform(struct!.privacyScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: membershipNameValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "MembershipNameValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MembershipNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MembershipName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._privacyScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyScreen = this._privacyScreen;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MembershipName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._label = undefined;
      this._privacyScreen = undefined;
      this._required = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._label = value.label;
      this._privacyScreen = value.privacyScreen;
      this._required = value.required;
      this._value.internalValue = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // privacy_screen - computed: false, optional: true, required: false
  private _privacyScreen?: boolean | cdktf.IResolvable; 
  public get privacyScreen() {
    return this.getBooleanAttribute('privacy_screen');
  }
  public set privacyScreen(value: boolean | cdktf.IResolvable) {
    this._privacyScreen = value;
  }
  public resetPrivacyScreen() {
    this._privacyScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyScreenInput() {
    return this._privacyScreen;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: false, optional: true, required: false
  private _value = new MembershipNameValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: MembershipNameValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface MembershipPasswordComplexity {
  /**
  * Number of uppercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#caps Membership#caps}
  */
  readonly caps?: number;
  /**
  * Number of digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#digits Membership#digits}
  */
  readonly digits?: number;
  /**
  * Password length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#length Membership#length}
  */
  readonly length?: number;
  /**
  * Number of lowercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#lowercase Membership#lowercase}
  */
  readonly lowercase?: number;
  /**
  * Number of special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#special Membership#special}
  */
  readonly special?: number;
}

export function membershipPasswordComplexityToTerraform(struct?: MembershipPasswordComplexityOutputReference | MembershipPasswordComplexity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caps: cdktf.numberToTerraform(struct!.caps),
    digits: cdktf.numberToTerraform(struct!.digits),
    length: cdktf.numberToTerraform(struct!.length),
    lowercase: cdktf.numberToTerraform(struct!.lowercase),
    special: cdktf.numberToTerraform(struct!.special),
  }
}


export function membershipPasswordComplexityToHclTerraform(struct?: MembershipPasswordComplexityOutputReference | MembershipPasswordComplexity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caps: {
      value: cdktf.numberToHclTerraform(struct!.caps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    digits: {
      value: cdktf.numberToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lowercase: {
      value: cdktf.numberToHclTerraform(struct!.lowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    special: {
      value: cdktf.numberToHclTerraform(struct!.special),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MembershipPasswordComplexityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MembershipPasswordComplexity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caps !== undefined) {
      hasAnyValues = true;
      internalValueResult.caps = this._caps;
    }
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._lowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowercase = this._lowercase;
    }
    if (this._special !== undefined) {
      hasAnyValues = true;
      internalValueResult.special = this._special;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MembershipPasswordComplexity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caps = undefined;
      this._digits = undefined;
      this._length = undefined;
      this._lowercase = undefined;
      this._special = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caps = value.caps;
      this._digits = value.digits;
      this._length = value.length;
      this._lowercase = value.lowercase;
      this._special = value.special;
    }
  }

  // caps - computed: false, optional: true, required: false
  private _caps?: number; 
  public get caps() {
    return this.getNumberAttribute('caps');
  }
  public set caps(value: number) {
    this._caps = value;
  }
  public resetCaps() {
    this._caps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capsInput() {
    return this._caps;
  }

  // digits - computed: false, optional: true, required: false
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // lowercase - computed: false, optional: true, required: false
  private _lowercase?: number; 
  public get lowercase() {
    return this.getNumberAttribute('lowercase');
  }
  public set lowercase(value: number) {
    this._lowercase = value;
  }
  public resetLowercase() {
    this._lowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowercaseInput() {
    return this._lowercase;
  }

  // special - computed: false, optional: true, required: false
  private _special?: number; 
  public get special() {
    return this.getNumberAttribute('special');
  }
  public set special(value: number) {
    this._special = value;
  }
  public resetSpecial() {
    this._special = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialInput() {
    return this._special;
  }
}
export interface MembershipPassword {
  /**
  * Enforce generation flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#enforce_generation Membership#enforce_generation}
  */
  readonly enforceGeneration?: boolean | cdktf.IResolvable;
  /**
  * Flag to force password generation (when set to 'yes' or 'true').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#generate Membership#generate}
  */
  readonly generate?: string;
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#label Membership#label}
  */
  readonly label?: string;
  /**
  * Privacy screen flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#privacy_screen Membership#privacy_screen}
  */
  readonly privacyScreen?: boolean | cdktf.IResolvable;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#required Membership#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#value Membership#value}
  */
  readonly value?: string;
  /**
  * complexity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#complexity Membership#complexity}
  */
  readonly complexity?: MembershipPasswordComplexity;
}

export function membershipPasswordToTerraform(struct?: MembershipPasswordOutputReference | MembershipPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_generation: cdktf.booleanToTerraform(struct!.enforceGeneration),
    generate: cdktf.stringToTerraform(struct!.generate),
    label: cdktf.stringToTerraform(struct!.label),
    privacy_screen: cdktf.booleanToTerraform(struct!.privacyScreen),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.stringToTerraform(struct!.value),
    complexity: membershipPasswordComplexityToTerraform(struct!.complexity),
  }
}


export function membershipPasswordToHclTerraform(struct?: MembershipPasswordOutputReference | MembershipPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce_generation: {
      value: cdktf.booleanToHclTerraform(struct!.enforceGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate: {
      value: cdktf.stringToHclTerraform(struct!.generate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_screen: {
      value: cdktf.booleanToHclTerraform(struct!.privacyScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    complexity: {
      value: membershipPasswordComplexityToHclTerraform(struct!.complexity),
      isBlock: true,
      type: "list",
      storageClassType: "MembershipPasswordComplexityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MembershipPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MembershipPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceGeneration = this._enforceGeneration;
    }
    if (this._generate !== undefined) {
      hasAnyValues = true;
      internalValueResult.generate = this._generate;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._privacyScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyScreen = this._privacyScreen;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._complexity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MembershipPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforceGeneration = undefined;
      this._generate = undefined;
      this._label = undefined;
      this._privacyScreen = undefined;
      this._required = undefined;
      this._value = undefined;
      this._complexity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforceGeneration = value.enforceGeneration;
      this._generate = value.generate;
      this._label = value.label;
      this._privacyScreen = value.privacyScreen;
      this._required = value.required;
      this._value = value.value;
      this._complexity.internalValue = value.complexity;
    }
  }

  // enforce_generation - computed: false, optional: true, required: false
  private _enforceGeneration?: boolean | cdktf.IResolvable; 
  public get enforceGeneration() {
    return this.getBooleanAttribute('enforce_generation');
  }
  public set enforceGeneration(value: boolean | cdktf.IResolvable) {
    this._enforceGeneration = value;
  }
  public resetEnforceGeneration() {
    this._enforceGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceGenerationInput() {
    return this._enforceGeneration;
  }

  // generate - computed: false, optional: true, required: false
  private _generate?: string; 
  public get generate() {
    return this.getStringAttribute('generate');
  }
  public set generate(value: string) {
    this._generate = value;
  }
  public resetGenerate() {
    this._generate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // privacy_screen - computed: false, optional: true, required: false
  private _privacyScreen?: boolean | cdktf.IResolvable; 
  public get privacyScreen() {
    return this.getBooleanAttribute('privacy_screen');
  }
  public set privacyScreen(value: boolean | cdktf.IResolvable) {
    this._privacyScreen = value;
  }
  public resetPrivacyScreen() {
    this._privacyScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyScreenInput() {
    return this._privacyScreen;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity = new MembershipPasswordComplexityOutputReference(this, "complexity");
  public get complexity() {
    return this._complexity;
  }
  public putComplexity(value: MembershipPasswordComplexity) {
    this._complexity.internalValue = value;
  }
  public resetComplexity() {
    this._complexity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership secretsmanager_membership}
*/
export class Membership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secretsmanager_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Membership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Membership to import
  * @param importFromId The id of the existing Membership that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Membership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secretsmanager_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/membership secretsmanager_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MembershipConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MembershipConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'secretsmanager_membership',
      terraformGeneratorMetadata: {
        providerName: 'secretsmanager',
        providerVersion: '1.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folderUid = config.folderUid;
    this._id = config.id;
    this._notes = config.notes;
    this._title = config.title;
    this._uid = config.uid;
    this._accountNumber.internalValue = config.accountNumber;
    this._fileRef.internalValue = config.fileRef;
    this._name.internalValue = config.name;
    this._password.internalValue = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // folder_uid - computed: true, optional: true, required: false
  private _folderUid?: string; 
  public get folderUid() {
    return this.getStringAttribute('folder_uid');
  }
  public set folderUid(value: string) {
    this._folderUid = value;
  }
  public resetFolderUid() {
    this._folderUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUidInput() {
    return this._folderUid;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // account_number - computed: false, optional: true, required: false
  private _accountNumber = new MembershipAccountNumberOutputReference(this, "account_number");
  public get accountNumber() {
    return this._accountNumber;
  }
  public putAccountNumber(value: MembershipAccountNumber) {
    this._accountNumber.internalValue = value;
  }
  public resetAccountNumber() {
    this._accountNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber.internalValue;
  }

  // file_ref - computed: false, optional: true, required: false
  private _fileRef = new MembershipFileRefOutputReference(this, "file_ref");
  public get fileRef() {
    return this._fileRef;
  }
  public putFileRef(value: MembershipFileRef) {
    this._fileRef.internalValue = value;
  }
  public resetFileRef() {
    this._fileRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRefInput() {
    return this._fileRef.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new MembershipNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: MembershipName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new MembershipPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: MembershipPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_uid: cdktf.stringToTerraform(this._folderUid),
      id: cdktf.stringToTerraform(this._id),
      notes: cdktf.stringToTerraform(this._notes),
      title: cdktf.stringToTerraform(this._title),
      uid: cdktf.stringToTerraform(this._uid),
      account_number: membershipAccountNumberToTerraform(this._accountNumber.internalValue),
      file_ref: membershipFileRefToTerraform(this._fileRef.internalValue),
      name: membershipNameToTerraform(this._name.internalValue),
      password: membershipPasswordToTerraform(this._password.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder_uid: {
        value: cdktf.stringToHclTerraform(this._folderUid),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_number: {
        value: membershipAccountNumberToHclTerraform(this._accountNumber.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MembershipAccountNumberList",
      },
      file_ref: {
        value: membershipFileRefToHclTerraform(this._fileRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MembershipFileRefList",
      },
      name: {
        value: membershipNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MembershipNameList",
      },
      password: {
        value: membershipPasswordToHclTerraform(this._password.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MembershipPasswordList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
