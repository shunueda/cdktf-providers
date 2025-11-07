// https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsnCardConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder UID where the secret is stored. The parent shared folder must be non empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#folder_uid SsnCard#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#id SsnCard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The secret notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#notes SsnCard#notes}
  */
  readonly notes?: string;
  /**
  * The secret title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#title SsnCard#title}
  */
  readonly title?: string;
  /**
  * The UID of the new secret (using RFC4648 URL and Filename Safe Alphabet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#uid SsnCard#uid}
  */
  readonly uid?: string;
  /**
  * file_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#file_ref SsnCard#file_ref}
  */
  readonly fileRef?: SsnCardFileRef;
  /**
  * identity_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#identity_number SsnCard#identity_number}
  */
  readonly identityNumber?: SsnCardIdentityNumber;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#name SsnCard#name}
  */
  readonly name?: SsnCardName;
}
export interface SsnCardFileRefValue {
  /**
  * The file ref UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#uid SsnCard#uid}
  */
  readonly uid?: string;
}

export function ssnCardFileRefValueToTerraform(struct?: SsnCardFileRefValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function ssnCardFileRefValueToHclTerraform(struct?: SsnCardFileRefValue | cdktf.IResolvable): any {
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

export class SsnCardFileRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsnCardFileRefValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SsnCardFileRefValue | cdktf.IResolvable | undefined) {
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

export class SsnCardFileRefValueList extends cdktf.ComplexList {
  public internalValue? : SsnCardFileRefValue[] | cdktf.IResolvable

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
  public get(index: number): SsnCardFileRefValueOutputReference {
    return new SsnCardFileRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsnCardFileRef {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#label SsnCard#label}
  */
  readonly label?: string;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#required SsnCard#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#value SsnCard#value}
  */
  readonly value?: SsnCardFileRefValue[] | cdktf.IResolvable;
}

export function ssnCardFileRefToTerraform(struct?: SsnCardFileRefOutputReference | SsnCardFileRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.listMapper(ssnCardFileRefValueToTerraform, true)(struct!.value),
  }
}


export function ssnCardFileRefToHclTerraform(struct?: SsnCardFileRefOutputReference | SsnCardFileRef): any {
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
      value: cdktf.listMapperHcl(ssnCardFileRefValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SsnCardFileRefValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsnCardFileRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsnCardFileRef | undefined {
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

  public set internalValue(value: SsnCardFileRef | undefined) {
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
  private _value = new SsnCardFileRefValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: SsnCardFileRefValue[] | cdktf.IResolvable) {
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
export interface SsnCardIdentityNumber {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#label SsnCard#label}
  */
  readonly label?: string;
  /**
  * Privacy screen flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#privacy_screen SsnCard#privacy_screen}
  */
  readonly privacyScreen?: boolean | cdktf.IResolvable;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#required SsnCard#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#value SsnCard#value}
  */
  readonly value?: string;
}

export function ssnCardIdentityNumberToTerraform(struct?: SsnCardIdentityNumberOutputReference | SsnCardIdentityNumber): any {
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


export function ssnCardIdentityNumberToHclTerraform(struct?: SsnCardIdentityNumberOutputReference | SsnCardIdentityNumber): any {
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

export class SsnCardIdentityNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsnCardIdentityNumber | undefined {
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

  public set internalValue(value: SsnCardIdentityNumber | undefined) {
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
export interface SsnCardNameValue {
  /**
  * First name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#first SsnCard#first}
  */
  readonly first?: string;
  /**
  * Last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#last SsnCard#last}
  */
  readonly last?: string;
  /**
  * MIddle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#middle SsnCard#middle}
  */
  readonly middle?: string;
}

export function ssnCardNameValueToTerraform(struct?: SsnCardNameValueOutputReference | SsnCardNameValue): any {
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


export function ssnCardNameValueToHclTerraform(struct?: SsnCardNameValueOutputReference | SsnCardNameValue): any {
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

export class SsnCardNameValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsnCardNameValue | undefined {
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

  public set internalValue(value: SsnCardNameValue | undefined) {
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
export interface SsnCardName {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#label SsnCard#label}
  */
  readonly label?: string;
  /**
  * Privacy screen flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#privacy_screen SsnCard#privacy_screen}
  */
  readonly privacyScreen?: boolean | cdktf.IResolvable;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#required SsnCard#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#value SsnCard#value}
  */
  readonly value?: SsnCardNameValue;
}

export function ssnCardNameToTerraform(struct?: SsnCardNameOutputReference | SsnCardName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    privacy_screen: cdktf.booleanToTerraform(struct!.privacyScreen),
    required: cdktf.booleanToTerraform(struct!.required),
    value: ssnCardNameValueToTerraform(struct!.value),
  }
}


export function ssnCardNameToHclTerraform(struct?: SsnCardNameOutputReference | SsnCardName): any {
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
      value: ssnCardNameValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SsnCardNameValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SsnCardNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsnCardName | undefined {
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

  public set internalValue(value: SsnCardName | undefined) {
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
  private _value = new SsnCardNameValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SsnCardNameValue) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card secretsmanager_ssn_card}
*/
export class SsnCard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secretsmanager_ssn_card";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsnCard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsnCard to import
  * @param importFromId The id of the existing SsnCard that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsnCard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secretsmanager_ssn_card", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/ssn_card secretsmanager_ssn_card} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsnCardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SsnCardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'secretsmanager_ssn_card',
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
    this._fileRef.internalValue = config.fileRef;
    this._identityNumber.internalValue = config.identityNumber;
    this._name.internalValue = config.name;
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

  // file_ref - computed: false, optional: true, required: false
  private _fileRef = new SsnCardFileRefOutputReference(this, "file_ref");
  public get fileRef() {
    return this._fileRef;
  }
  public putFileRef(value: SsnCardFileRef) {
    this._fileRef.internalValue = value;
  }
  public resetFileRef() {
    this._fileRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRefInput() {
    return this._fileRef.internalValue;
  }

  // identity_number - computed: false, optional: true, required: false
  private _identityNumber = new SsnCardIdentityNumberOutputReference(this, "identity_number");
  public get identityNumber() {
    return this._identityNumber;
  }
  public putIdentityNumber(value: SsnCardIdentityNumber) {
    this._identityNumber.internalValue = value;
  }
  public resetIdentityNumber() {
    this._identityNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityNumberInput() {
    return this._identityNumber.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new SsnCardNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: SsnCardName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
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
      file_ref: ssnCardFileRefToTerraform(this._fileRef.internalValue),
      identity_number: ssnCardIdentityNumberToTerraform(this._identityNumber.internalValue),
      name: ssnCardNameToTerraform(this._name.internalValue),
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
      file_ref: {
        value: ssnCardFileRefToHclTerraform(this._fileRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsnCardFileRefList",
      },
      identity_number: {
        value: ssnCardIdentityNumberToHclTerraform(this._identityNumber.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsnCardIdentityNumberList",
      },
      name: {
        value: ssnCardNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SsnCardNameList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
