// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#annotations DataType#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#compliances DataType#compliances}
  */
  readonly compliances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#description DataType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#disable DataType#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#id DataType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#is_pii DataType#is_pii}
  */
  readonly isPii?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#is_sensitive_data DataType#is_sensitive_data}
  */
  readonly isSensitiveData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#labels DataType#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#name DataType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#namespace DataType#namespace}
  */
  readonly namespace: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#rules DataType#rules}
  */
  readonly rules: DataTypeRules[] | cdktf.IResolvable;
}
export interface DataTypeRulesKeyPatternExactValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues: string[];
}

export function dataTypeRulesKeyPatternExactValuesToTerraform(struct?: DataTypeRulesKeyPatternExactValuesOutputReference | DataTypeRulesKeyPatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function dataTypeRulesKeyPatternExactValuesToHclTerraform(struct?: DataTypeRulesKeyPatternExactValuesOutputReference | DataTypeRulesKeyPatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesKeyPatternExactValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesKeyPatternExactValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesKeyPatternExactValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
    }
  }

  // exact_values - computed: false, optional: false, required: true
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }
}
export interface DataTypeRulesKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#regex_value DataType#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#substring_value DataType#substring_value}
  */
  readonly substringValue?: string;
  /**
  * exact_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues?: DataTypeRulesKeyPatternExactValues;
}

export function dataTypeRulesKeyPatternToTerraform(struct?: DataTypeRulesKeyPatternOutputReference | DataTypeRulesKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    substring_value: cdktf.stringToTerraform(struct!.substringValue),
    exact_values: dataTypeRulesKeyPatternExactValuesToTerraform(struct!.exactValues),
  }
}


export function dataTypeRulesKeyPatternToHclTerraform(struct?: DataTypeRulesKeyPatternOutputReference | DataTypeRulesKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substring_value: {
      value: cdktf.stringToHclTerraform(struct!.substringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_values: {
      value: dataTypeRulesKeyPatternExactValuesToHclTerraform(struct!.exactValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesKeyPatternExactValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._substringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substringValue = this._substringValue;
    }
    if (this._exactValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexValue = undefined;
      this._substringValue = undefined;
      this._exactValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexValue = value.regexValue;
      this._substringValue = value.substringValue;
      this._exactValues.internalValue = value.exactValues;
    }
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // substring_value - computed: false, optional: true, required: false
  private _substringValue?: string; 
  public get substringValue() {
    return this.getStringAttribute('substring_value');
  }
  public set substringValue(value: string) {
    this._substringValue = value;
  }
  public resetSubstringValue() {
    this._substringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringValueInput() {
    return this._substringValue;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues = new DataTypeRulesKeyPatternExactValuesOutputReference(this, "exact_values");
  public get exactValues() {
    return this._exactValues;
  }
  public putExactValues(value: DataTypeRulesKeyPatternExactValues) {
    this._exactValues.internalValue = value;
  }
  public resetExactValues() {
    this._exactValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues.internalValue;
  }
}
export interface DataTypeRulesKeyValuePatternKeyPatternExactValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues: string[];
}

export function dataTypeRulesKeyValuePatternKeyPatternExactValuesToTerraform(struct?: DataTypeRulesKeyValuePatternKeyPatternExactValuesOutputReference | DataTypeRulesKeyValuePatternKeyPatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function dataTypeRulesKeyValuePatternKeyPatternExactValuesToHclTerraform(struct?: DataTypeRulesKeyValuePatternKeyPatternExactValuesOutputReference | DataTypeRulesKeyValuePatternKeyPatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesKeyValuePatternKeyPatternExactValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesKeyValuePatternKeyPatternExactValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesKeyValuePatternKeyPatternExactValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
    }
  }

  // exact_values - computed: false, optional: false, required: true
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }
}
export interface DataTypeRulesKeyValuePatternKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#regex_value DataType#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#substring_value DataType#substring_value}
  */
  readonly substringValue?: string;
  /**
  * exact_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues?: DataTypeRulesKeyValuePatternKeyPatternExactValues;
}

export function dataTypeRulesKeyValuePatternKeyPatternToTerraform(struct?: DataTypeRulesKeyValuePatternKeyPatternOutputReference | DataTypeRulesKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    substring_value: cdktf.stringToTerraform(struct!.substringValue),
    exact_values: dataTypeRulesKeyValuePatternKeyPatternExactValuesToTerraform(struct!.exactValues),
  }
}


export function dataTypeRulesKeyValuePatternKeyPatternToHclTerraform(struct?: DataTypeRulesKeyValuePatternKeyPatternOutputReference | DataTypeRulesKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substring_value: {
      value: cdktf.stringToHclTerraform(struct!.substringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_values: {
      value: dataTypeRulesKeyValuePatternKeyPatternExactValuesToHclTerraform(struct!.exactValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesKeyValuePatternKeyPatternExactValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesKeyValuePatternKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesKeyValuePatternKeyPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._substringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substringValue = this._substringValue;
    }
    if (this._exactValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesKeyValuePatternKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexValue = undefined;
      this._substringValue = undefined;
      this._exactValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexValue = value.regexValue;
      this._substringValue = value.substringValue;
      this._exactValues.internalValue = value.exactValues;
    }
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // substring_value - computed: false, optional: true, required: false
  private _substringValue?: string; 
  public get substringValue() {
    return this.getStringAttribute('substring_value');
  }
  public set substringValue(value: string) {
    this._substringValue = value;
  }
  public resetSubstringValue() {
    this._substringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringValueInput() {
    return this._substringValue;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues = new DataTypeRulesKeyValuePatternKeyPatternExactValuesOutputReference(this, "exact_values");
  public get exactValues() {
    return this._exactValues;
  }
  public putExactValues(value: DataTypeRulesKeyValuePatternKeyPatternExactValues) {
    this._exactValues.internalValue = value;
  }
  public resetExactValues() {
    this._exactValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues.internalValue;
  }
}
export interface DataTypeRulesKeyValuePatternValuePatternExactValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues: string[];
}

export function dataTypeRulesKeyValuePatternValuePatternExactValuesToTerraform(struct?: DataTypeRulesKeyValuePatternValuePatternExactValuesOutputReference | DataTypeRulesKeyValuePatternValuePatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function dataTypeRulesKeyValuePatternValuePatternExactValuesToHclTerraform(struct?: DataTypeRulesKeyValuePatternValuePatternExactValuesOutputReference | DataTypeRulesKeyValuePatternValuePatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesKeyValuePatternValuePatternExactValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesKeyValuePatternValuePatternExactValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesKeyValuePatternValuePatternExactValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
    }
  }

  // exact_values - computed: false, optional: false, required: true
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }
}
export interface DataTypeRulesKeyValuePatternValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#regex_value DataType#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#substring_value DataType#substring_value}
  */
  readonly substringValue?: string;
  /**
  * exact_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues?: DataTypeRulesKeyValuePatternValuePatternExactValues;
}

export function dataTypeRulesKeyValuePatternValuePatternToTerraform(struct?: DataTypeRulesKeyValuePatternValuePatternOutputReference | DataTypeRulesKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    substring_value: cdktf.stringToTerraform(struct!.substringValue),
    exact_values: dataTypeRulesKeyValuePatternValuePatternExactValuesToTerraform(struct!.exactValues),
  }
}


export function dataTypeRulesKeyValuePatternValuePatternToHclTerraform(struct?: DataTypeRulesKeyValuePatternValuePatternOutputReference | DataTypeRulesKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substring_value: {
      value: cdktf.stringToHclTerraform(struct!.substringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_values: {
      value: dataTypeRulesKeyValuePatternValuePatternExactValuesToHclTerraform(struct!.exactValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesKeyValuePatternValuePatternExactValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesKeyValuePatternValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesKeyValuePatternValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._substringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substringValue = this._substringValue;
    }
    if (this._exactValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesKeyValuePatternValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexValue = undefined;
      this._substringValue = undefined;
      this._exactValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexValue = value.regexValue;
      this._substringValue = value.substringValue;
      this._exactValues.internalValue = value.exactValues;
    }
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // substring_value - computed: false, optional: true, required: false
  private _substringValue?: string; 
  public get substringValue() {
    return this.getStringAttribute('substring_value');
  }
  public set substringValue(value: string) {
    this._substringValue = value;
  }
  public resetSubstringValue() {
    this._substringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringValueInput() {
    return this._substringValue;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues = new DataTypeRulesKeyValuePatternValuePatternExactValuesOutputReference(this, "exact_values");
  public get exactValues() {
    return this._exactValues;
  }
  public putExactValues(value: DataTypeRulesKeyValuePatternValuePatternExactValues) {
    this._exactValues.internalValue = value;
  }
  public resetExactValues() {
    this._exactValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues.internalValue;
  }
}
export interface DataTypeRulesKeyValuePattern {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#key_pattern DataType#key_pattern}
  */
  readonly keyPattern: DataTypeRulesKeyValuePatternKeyPattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#value_pattern DataType#value_pattern}
  */
  readonly valuePattern: DataTypeRulesKeyValuePatternValuePattern;
}

export function dataTypeRulesKeyValuePatternToTerraform(struct?: DataTypeRulesKeyValuePatternOutputReference | DataTypeRulesKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: dataTypeRulesKeyValuePatternKeyPatternToTerraform(struct!.keyPattern),
    value_pattern: dataTypeRulesKeyValuePatternValuePatternToTerraform(struct!.valuePattern),
  }
}


export function dataTypeRulesKeyValuePatternToHclTerraform(struct?: DataTypeRulesKeyValuePatternOutputReference | DataTypeRulesKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: dataTypeRulesKeyValuePatternKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesKeyValuePatternKeyPatternList",
    },
    value_pattern: {
      value: dataTypeRulesKeyValuePatternValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesKeyValuePatternValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesKeyValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesKeyValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesKeyValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPattern.internalValue = value.keyPattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // key_pattern - computed: false, optional: false, required: true
  private _keyPattern = new DataTypeRulesKeyValuePatternKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: DataTypeRulesKeyValuePatternKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // value_pattern - computed: false, optional: false, required: true
  private _valuePattern = new DataTypeRulesKeyValuePatternValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: DataTypeRulesKeyValuePatternValuePattern) {
    this._valuePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface DataTypeRulesValuePatternExactValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues: string[];
}

export function dataTypeRulesValuePatternExactValuesToTerraform(struct?: DataTypeRulesValuePatternExactValuesOutputReference | DataTypeRulesValuePatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function dataTypeRulesValuePatternExactValuesToHclTerraform(struct?: DataTypeRulesValuePatternExactValuesOutputReference | DataTypeRulesValuePatternExactValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesValuePatternExactValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesValuePatternExactValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesValuePatternExactValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
    }
  }

  // exact_values - computed: false, optional: false, required: true
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }
}
export interface DataTypeRulesValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#regex_value DataType#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#substring_value DataType#substring_value}
  */
  readonly substringValue?: string;
  /**
  * exact_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#exact_values DataType#exact_values}
  */
  readonly exactValues?: DataTypeRulesValuePatternExactValues;
}

export function dataTypeRulesValuePatternToTerraform(struct?: DataTypeRulesValuePatternOutputReference | DataTypeRulesValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    substring_value: cdktf.stringToTerraform(struct!.substringValue),
    exact_values: dataTypeRulesValuePatternExactValuesToTerraform(struct!.exactValues),
  }
}


export function dataTypeRulesValuePatternToHclTerraform(struct?: DataTypeRulesValuePatternOutputReference | DataTypeRulesValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substring_value: {
      value: cdktf.stringToHclTerraform(struct!.substringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_values: {
      value: dataTypeRulesValuePatternExactValuesToHclTerraform(struct!.exactValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesValuePatternExactValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTypeRulesValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._substringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.substringValue = this._substringValue;
    }
    if (this._exactValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRulesValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexValue = undefined;
      this._substringValue = undefined;
      this._exactValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexValue = value.regexValue;
      this._substringValue = value.substringValue;
      this._exactValues.internalValue = value.exactValues;
    }
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // substring_value - computed: false, optional: true, required: false
  private _substringValue?: string; 
  public get substringValue() {
    return this.getStringAttribute('substring_value');
  }
  public set substringValue(value: string) {
    this._substringValue = value;
  }
  public resetSubstringValue() {
    this._substringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringValueInput() {
    return this._substringValue;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues = new DataTypeRulesValuePatternExactValuesOutputReference(this, "exact_values");
  public get exactValues() {
    return this._exactValues;
  }
  public putExactValues(value: DataTypeRulesValuePatternExactValues) {
    this._exactValues.internalValue = value;
  }
  public resetExactValues() {
    this._exactValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues.internalValue;
  }
}
export interface DataTypeRules {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#key_pattern DataType#key_pattern}
  */
  readonly keyPattern?: DataTypeRulesKeyPattern;
  /**
  * key_value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#key_value_pattern DataType#key_value_pattern}
  */
  readonly keyValuePattern?: DataTypeRulesKeyValuePattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#value_pattern DataType#value_pattern}
  */
  readonly valuePattern?: DataTypeRulesValuePattern;
}

export function dataTypeRulesToTerraform(struct?: DataTypeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: dataTypeRulesKeyPatternToTerraform(struct!.keyPattern),
    key_value_pattern: dataTypeRulesKeyValuePatternToTerraform(struct!.keyValuePattern),
    value_pattern: dataTypeRulesValuePatternToTerraform(struct!.valuePattern),
  }
}


export function dataTypeRulesToHclTerraform(struct?: DataTypeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: dataTypeRulesKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesKeyPatternList",
    },
    key_value_pattern: {
      value: dataTypeRulesKeyValuePatternToHclTerraform(struct!.keyValuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesKeyValuePatternList",
    },
    value_pattern: {
      value: dataTypeRulesValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "DataTypeRulesValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTypeRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTypeRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._keyValuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePattern = this._keyValuePattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTypeRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyPattern.internalValue = undefined;
      this._keyValuePattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyPattern.internalValue = value.keyPattern;
      this._keyValuePattern.internalValue = value.keyValuePattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // key_pattern - computed: false, optional: true, required: false
  private _keyPattern = new DataTypeRulesKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: DataTypeRulesKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  public resetKeyPattern() {
    this._keyPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // key_value_pattern - computed: false, optional: true, required: false
  private _keyValuePattern = new DataTypeRulesKeyValuePatternOutputReference(this, "key_value_pattern");
  public get keyValuePattern() {
    return this._keyValuePattern;
  }
  public putKeyValuePattern(value: DataTypeRulesKeyValuePattern) {
    this._keyValuePattern.internalValue = value;
  }
  public resetKeyValuePattern() {
    this._keyValuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePatternInput() {
    return this._keyValuePattern.internalValue;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern = new DataTypeRulesValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: DataTypeRulesValuePattern) {
    this._valuePattern.internalValue = value;
  }
  public resetValuePattern() {
    this._valuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}

export class DataTypeRulesList extends cdktf.ComplexList {
  public internalValue? : DataTypeRules[] | cdktf.IResolvable

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
  public get(index: number): DataTypeRulesOutputReference {
    return new DataTypeRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type volterra_data_type}
*/
export class DataType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_data_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataType to import
  * @param importFromId The id of the existing DataType that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_data_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/data_type volterra_data_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTypeConfig
  */
  public constructor(scope: Construct, id: string, config: DataTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_data_type',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._compliances = config.compliances;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._isPii = config.isPii;
    this._isSensitiveData = config.isSensitiveData;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // compliances - computed: false, optional: true, required: false
  private _compliances?: string[]; 
  public get compliances() {
    return this.getListAttribute('compliances');
  }
  public set compliances(value: string[]) {
    this._compliances = value;
  }
  public resetCompliances() {
    this._compliances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancesInput() {
    return this._compliances;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // is_pii - computed: false, optional: true, required: false
  private _isPii?: boolean | cdktf.IResolvable; 
  public get isPii() {
    return this.getBooleanAttribute('is_pii');
  }
  public set isPii(value: boolean | cdktf.IResolvable) {
    this._isPii = value;
  }
  public resetIsPii() {
    this._isPii = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPiiInput() {
    return this._isPii;
  }

  // is_sensitive_data - computed: false, optional: true, required: false
  private _isSensitiveData?: boolean | cdktf.IResolvable; 
  public get isSensitiveData() {
    return this.getBooleanAttribute('is_sensitive_data');
  }
  public set isSensitiveData(value: boolean | cdktf.IResolvable) {
    this._isSensitiveData = value;
  }
  public resetIsSensitiveData() {
    this._isSensitiveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSensitiveDataInput() {
    return this._isSensitiveData;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataTypeRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataTypeRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      compliances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._compliances),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      is_pii: cdktf.booleanToTerraform(this._isPii),
      is_sensitive_data: cdktf.booleanToTerraform(this._isSensitiveData),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      rules: cdktf.listMapper(dataTypeRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      compliances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._compliances),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_pii: {
        value: cdktf.booleanToHclTerraform(this._isPii),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_sensitive_data: {
        value: cdktf.booleanToHclTerraform(this._isSensitiveData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(dataTypeRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTypeRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
