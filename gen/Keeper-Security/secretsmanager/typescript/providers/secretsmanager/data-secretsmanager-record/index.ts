// https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSecretsmanagerRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#id DataSecretsmanagerRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path where the secret is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#path DataSecretsmanagerRecord#path}
  */
  readonly path: string;
  /**
  * The secret title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#title DataSecretsmanagerRecord#title}
  */
  readonly title?: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#custom DataSecretsmanagerRecord#custom}
  */
  readonly custom?: DataSecretsmanagerRecordCustom[] | cdktf.IResolvable;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#fields DataSecretsmanagerRecord#fields}
  */
  readonly fields?: DataSecretsmanagerRecordFields[] | cdktf.IResolvable;
}
export interface DataSecretsmanagerRecordFileRef {
}

export function dataSecretsmanagerRecordFileRefToTerraform(struct?: DataSecretsmanagerRecordFileRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSecretsmanagerRecordFileRefToHclTerraform(struct?: DataSecretsmanagerRecordFileRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSecretsmanagerRecordFileRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSecretsmanagerRecordFileRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSecretsmanagerRecordFileRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataSecretsmanagerRecordFileRefList extends cdktf.ComplexList {

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
  public get(index: number): DataSecretsmanagerRecordFileRefOutputReference {
    return new DataSecretsmanagerRecordFileRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSecretsmanagerRecordCustomComplexity {
  /**
  * Number of uppercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#caps DataSecretsmanagerRecord#caps}
  */
  readonly caps?: number;
  /**
  * Number of digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#digits DataSecretsmanagerRecord#digits}
  */
  readonly digits?: number;
  /**
  * Password length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#length DataSecretsmanagerRecord#length}
  */
  readonly length?: number;
  /**
  * Number of lowercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#lowercase DataSecretsmanagerRecord#lowercase}
  */
  readonly lowercase?: number;
  /**
  * Number of special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#special DataSecretsmanagerRecord#special}
  */
  readonly special?: number;
}

export function dataSecretsmanagerRecordCustomComplexityToTerraform(struct?: DataSecretsmanagerRecordCustomComplexityOutputReference | DataSecretsmanagerRecordCustomComplexity): any {
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


export function dataSecretsmanagerRecordCustomComplexityToHclTerraform(struct?: DataSecretsmanagerRecordCustomComplexityOutputReference | DataSecretsmanagerRecordCustomComplexity): any {
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

export class DataSecretsmanagerRecordCustomComplexityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSecretsmanagerRecordCustomComplexity | undefined {
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

  public set internalValue(value: DataSecretsmanagerRecordCustomComplexity | undefined) {
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
export interface DataSecretsmanagerRecordCustom {
  /**
  * complexity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#complexity DataSecretsmanagerRecord#complexity}
  */
  readonly complexity?: DataSecretsmanagerRecordCustomComplexity;
}

export function dataSecretsmanagerRecordCustomToTerraform(struct?: DataSecretsmanagerRecordCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complexity: dataSecretsmanagerRecordCustomComplexityToTerraform(struct!.complexity),
  }
}


export function dataSecretsmanagerRecordCustomToHclTerraform(struct?: DataSecretsmanagerRecordCustom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    complexity: {
      value: dataSecretsmanagerRecordCustomComplexityToHclTerraform(struct!.complexity),
      isBlock: true,
      type: "list",
      storageClassType: "DataSecretsmanagerRecordCustomComplexityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSecretsmanagerRecordCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSecretsmanagerRecordCustom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSecretsmanagerRecordCustom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complexity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complexity.internalValue = value.complexity;
    }
  }

  // enforce_generation - computed: true, optional: false, required: false
  public get enforceGeneration() {
    return this.getBooleanAttribute('enforce_generation');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // privacy_screen - computed: true, optional: false, required: false
  public get privacyScreen() {
    return this.getBooleanAttribute('privacy_screen');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity = new DataSecretsmanagerRecordCustomComplexityOutputReference(this, "complexity");
  public get complexity() {
    return this._complexity;
  }
  public putComplexity(value: DataSecretsmanagerRecordCustomComplexity) {
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

export class DataSecretsmanagerRecordCustomList extends cdktf.ComplexList {
  public internalValue? : DataSecretsmanagerRecordCustom[] | cdktf.IResolvable

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
  public get(index: number): DataSecretsmanagerRecordCustomOutputReference {
    return new DataSecretsmanagerRecordCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSecretsmanagerRecordFieldsComplexity {
  /**
  * Number of uppercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#caps DataSecretsmanagerRecord#caps}
  */
  readonly caps?: number;
  /**
  * Number of digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#digits DataSecretsmanagerRecord#digits}
  */
  readonly digits?: number;
  /**
  * Password length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#length DataSecretsmanagerRecord#length}
  */
  readonly length?: number;
  /**
  * Number of lowercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#lowercase DataSecretsmanagerRecord#lowercase}
  */
  readonly lowercase?: number;
  /**
  * Number of special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#special DataSecretsmanagerRecord#special}
  */
  readonly special?: number;
}

export function dataSecretsmanagerRecordFieldsComplexityToTerraform(struct?: DataSecretsmanagerRecordFieldsComplexityOutputReference | DataSecretsmanagerRecordFieldsComplexity): any {
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


export function dataSecretsmanagerRecordFieldsComplexityToHclTerraform(struct?: DataSecretsmanagerRecordFieldsComplexityOutputReference | DataSecretsmanagerRecordFieldsComplexity): any {
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

export class DataSecretsmanagerRecordFieldsComplexityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSecretsmanagerRecordFieldsComplexity | undefined {
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

  public set internalValue(value: DataSecretsmanagerRecordFieldsComplexity | undefined) {
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
export interface DataSecretsmanagerRecordFields {
  /**
  * complexity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#complexity DataSecretsmanagerRecord#complexity}
  */
  readonly complexity?: DataSecretsmanagerRecordFieldsComplexity;
}

export function dataSecretsmanagerRecordFieldsToTerraform(struct?: DataSecretsmanagerRecordFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complexity: dataSecretsmanagerRecordFieldsComplexityToTerraform(struct!.complexity),
  }
}


export function dataSecretsmanagerRecordFieldsToHclTerraform(struct?: DataSecretsmanagerRecordFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    complexity: {
      value: dataSecretsmanagerRecordFieldsComplexityToHclTerraform(struct!.complexity),
      isBlock: true,
      type: "list",
      storageClassType: "DataSecretsmanagerRecordFieldsComplexityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSecretsmanagerRecordFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSecretsmanagerRecordFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSecretsmanagerRecordFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complexity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complexity.internalValue = value.complexity;
    }
  }

  // enforce_generation - computed: true, optional: false, required: false
  public get enforceGeneration() {
    return this.getBooleanAttribute('enforce_generation');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // privacy_screen - computed: true, optional: false, required: false
  public get privacyScreen() {
    return this.getBooleanAttribute('privacy_screen');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity = new DataSecretsmanagerRecordFieldsComplexityOutputReference(this, "complexity");
  public get complexity() {
    return this._complexity;
  }
  public putComplexity(value: DataSecretsmanagerRecordFieldsComplexity) {
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

export class DataSecretsmanagerRecordFieldsList extends cdktf.ComplexList {
  public internalValue? : DataSecretsmanagerRecordFields[] | cdktf.IResolvable

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
  public get(index: number): DataSecretsmanagerRecordFieldsOutputReference {
    return new DataSecretsmanagerRecordFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record secretsmanager_record}
*/
export class DataSecretsmanagerRecord extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "secretsmanager_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSecretsmanagerRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSecretsmanagerRecord to import
  * @param importFromId The id of the existing DataSecretsmanagerRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSecretsmanagerRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "secretsmanager_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/secretsmanager/1.1.7/docs/data-sources/record secretsmanager_record} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSecretsmanagerRecordConfig
  */
  public constructor(scope: Construct, id: string, config: DataSecretsmanagerRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'secretsmanager_record',
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
    this._id = config.id;
    this._path = config.path;
    this._title = config.title;
    this._custom.internalValue = config.custom;
    this._fields.internalValue = config.fields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_ref - computed: true, optional: false, required: false
  private _fileRef = new DataSecretsmanagerRecordFileRefList(this, "file_ref", false);
  public get fileRef() {
    return this._fileRef;
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

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // custom - computed: false, optional: true, required: false
  private _custom = new DataSecretsmanagerRecordCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataSecretsmanagerRecordCustom[] | cdktf.IResolvable) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DataSecretsmanagerRecordFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataSecretsmanagerRecordFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      title: cdktf.stringToTerraform(this._title),
      custom: cdktf.listMapper(dataSecretsmanagerRecordCustomToTerraform, true)(this._custom.internalValue),
      fields: cdktf.listMapper(dataSecretsmanagerRecordFieldsToTerraform, true)(this._fields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      custom: {
        value: cdktf.listMapperHcl(dataSecretsmanagerRecordCustomToHclTerraform, true)(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSecretsmanagerRecordCustomList",
      },
      fields: {
        value: cdktf.listMapperHcl(dataSecretsmanagerRecordFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSecretsmanagerRecordFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
