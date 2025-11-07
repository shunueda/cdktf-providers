// https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EncryptedNotesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder UID where the secret is stored. The parent shared folder must be non empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#folder_uid EncryptedNotes#folder_uid}
  */
  readonly folderUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#id EncryptedNotes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The secret notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#notes EncryptedNotes#notes}
  */
  readonly notes?: string;
  /**
  * The secret title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#title EncryptedNotes#title}
  */
  readonly title?: string;
  /**
  * The UID of the new secret (using RFC4648 URL and Filename Safe Alphabet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#uid EncryptedNotes#uid}
  */
  readonly uid?: string;
  /**
  * date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#date EncryptedNotes#date}
  */
  readonly date?: EncryptedNotesDate;
  /**
  * file_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#file_ref EncryptedNotes#file_ref}
  */
  readonly fileRef?: EncryptedNotesFileRef;
  /**
  * note block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#note EncryptedNotes#note}
  */
  readonly note?: EncryptedNotesNote;
}
export interface EncryptedNotesDate {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#label EncryptedNotes#label}
  */
  readonly label?: string;
  /**
  * Privacy screen flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#privacy_screen EncryptedNotes#privacy_screen}
  */
  readonly privacyScreen?: boolean | cdktf.IResolvable;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#required EncryptedNotes#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#value EncryptedNotes#value}
  */
  readonly value?: number;
}

export function encryptedNotesDateToTerraform(struct?: EncryptedNotesDateOutputReference | EncryptedNotesDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    privacy_screen: cdktf.booleanToTerraform(struct!.privacyScreen),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function encryptedNotesDateToHclTerraform(struct?: EncryptedNotesDateOutputReference | EncryptedNotesDate): any {
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EncryptedNotesDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptedNotesDate | undefined {
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

  public set internalValue(value: EncryptedNotesDate | undefined) {
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
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface EncryptedNotesFileRefValue {
  /**
  * The file ref UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#uid EncryptedNotes#uid}
  */
  readonly uid?: string;
}

export function encryptedNotesFileRefValueToTerraform(struct?: EncryptedNotesFileRefValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function encryptedNotesFileRefValueToHclTerraform(struct?: EncryptedNotesFileRefValue | cdktf.IResolvable): any {
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

export class EncryptedNotesFileRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EncryptedNotesFileRefValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EncryptedNotesFileRefValue | cdktf.IResolvable | undefined) {
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

export class EncryptedNotesFileRefValueList extends cdktf.ComplexList {
  public internalValue? : EncryptedNotesFileRefValue[] | cdktf.IResolvable

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
  public get(index: number): EncryptedNotesFileRefValueOutputReference {
    return new EncryptedNotesFileRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EncryptedNotesFileRef {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#label EncryptedNotes#label}
  */
  readonly label?: string;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#required EncryptedNotes#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#value EncryptedNotes#value}
  */
  readonly value?: EncryptedNotesFileRefValue[] | cdktf.IResolvable;
}

export function encryptedNotesFileRefToTerraform(struct?: EncryptedNotesFileRefOutputReference | EncryptedNotesFileRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.listMapper(encryptedNotesFileRefValueToTerraform, true)(struct!.value),
  }
}


export function encryptedNotesFileRefToHclTerraform(struct?: EncryptedNotesFileRefOutputReference | EncryptedNotesFileRef): any {
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
      value: cdktf.listMapperHcl(encryptedNotesFileRefValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "EncryptedNotesFileRefValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EncryptedNotesFileRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptedNotesFileRef | undefined {
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

  public set internalValue(value: EncryptedNotesFileRef | undefined) {
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
  private _value = new EncryptedNotesFileRefValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: EncryptedNotesFileRefValue[] | cdktf.IResolvable) {
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
export interface EncryptedNotesNote {
  /**
  * Field label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#label EncryptedNotes#label}
  */
  readonly label?: string;
  /**
  * Privacy screen flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#privacy_screen EncryptedNotes#privacy_screen}
  */
  readonly privacyScreen?: boolean | cdktf.IResolvable;
  /**
  * Required flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#required EncryptedNotes#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#value EncryptedNotes#value}
  */
  readonly value?: string;
}

export function encryptedNotesNoteToTerraform(struct?: EncryptedNotesNoteOutputReference | EncryptedNotesNote): any {
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


export function encryptedNotesNoteToHclTerraform(struct?: EncryptedNotesNoteOutputReference | EncryptedNotesNote): any {
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

export class EncryptedNotesNoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EncryptedNotesNote | undefined {
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

  public set internalValue(value: EncryptedNotesNote | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes secretsmanager_encrypted_notes}
*/
export class EncryptedNotes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secretsmanager_encrypted_notes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EncryptedNotes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EncryptedNotes to import
  * @param importFromId The id of the existing EncryptedNotes that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EncryptedNotes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secretsmanager_encrypted_notes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/resources/encrypted_notes secretsmanager_encrypted_notes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EncryptedNotesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EncryptedNotesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'secretsmanager_encrypted_notes',
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
    this._date.internalValue = config.date;
    this._fileRef.internalValue = config.fileRef;
    this._note.internalValue = config.note;
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

  // date - computed: false, optional: true, required: false
  private _date = new EncryptedNotesDateOutputReference(this, "date");
  public get date() {
    return this._date;
  }
  public putDate(value: EncryptedNotesDate) {
    this._date.internalValue = value;
  }
  public resetDate() {
    this._date.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date.internalValue;
  }

  // file_ref - computed: false, optional: true, required: false
  private _fileRef = new EncryptedNotesFileRefOutputReference(this, "file_ref");
  public get fileRef() {
    return this._fileRef;
  }
  public putFileRef(value: EncryptedNotesFileRef) {
    this._fileRef.internalValue = value;
  }
  public resetFileRef() {
    this._fileRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRefInput() {
    return this._fileRef.internalValue;
  }

  // note - computed: false, optional: true, required: false
  private _note = new EncryptedNotesNoteOutputReference(this, "note");
  public get note() {
    return this._note;
  }
  public putNote(value: EncryptedNotesNote) {
    this._note.internalValue = value;
  }
  public resetNote() {
    this._note.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note.internalValue;
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
      date: encryptedNotesDateToTerraform(this._date.internalValue),
      file_ref: encryptedNotesFileRefToTerraform(this._fileRef.internalValue),
      note: encryptedNotesNoteToTerraform(this._note.internalValue),
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
      date: {
        value: encryptedNotesDateToHclTerraform(this._date.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EncryptedNotesDateList",
      },
      file_ref: {
        value: encryptedNotesFileRefToHclTerraform(this._fileRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EncryptedNotesFileRefList",
      },
      note: {
        value: encryptedNotesNoteToHclTerraform(this._note.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EncryptedNotesNoteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
