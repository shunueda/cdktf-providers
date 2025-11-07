// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aggregation type for the request values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#aggregation RequestAttribute#aggregation}
  */
  readonly aggregation: string;
  /**
  * Confidential data flag. Set `true` to treat the captured data as confidential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#confidential RequestAttribute#confidential}
  */
  readonly confidential?: boolean | cdktf.IResolvable;
  /**
  * The data type of the request attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#data_type RequestAttribute#data_type}
  */
  readonly dataType: string;
  /**
  * The request attribute is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#enabled RequestAttribute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#id RequestAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the request attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#name RequestAttribute#name}
  */
  readonly name: string;
  /**
  * String values transformation.   If the **dataType** is not `string`, set the `Original` here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#normalization RequestAttribute#normalization}
  */
  readonly normalization: string;
  /**
  * Personal data masking flag. Set `true` to skip masking.   Warning: This will potentially access personalized data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#skip_personal_data_masking RequestAttribute#skip_personal_data_masking}
  */
  readonly skipPersonalDataMasking?: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * data_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#data_sources RequestAttribute#data_sources}
  */
  readonly dataSources?: RequestAttributeDataSources[] | cdktf.IResolvable;
}
export interface RequestAttributeDataSourcesCicsSdkMethodNodeCondition {
  /**
  * Negate the comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#negate RequestAttribute#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator comparing the extracted value to the comparison value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#operator RequestAttribute#operator}
  */
  readonly operator: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value RequestAttribute#value}
  */
  readonly value: string;
}

export function requestAttributeDataSourcesCicsSdkMethodNodeConditionToTerraform(struct?: RequestAttributeDataSourcesCicsSdkMethodNodeConditionOutputReference | RequestAttributeDataSourcesCicsSdkMethodNodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function requestAttributeDataSourcesCicsSdkMethodNodeConditionToHclTerraform(struct?: RequestAttributeDataSourcesCicsSdkMethodNodeConditionOutputReference | RequestAttributeDataSourcesCicsSdkMethodNodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RequestAttributeDataSourcesCicsSdkMethodNodeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesCicsSdkMethodNodeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesCicsSdkMethodNodeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RequestAttributeDataSourcesIibLabelMethodNodeCondition {
  /**
  * Negate the comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#negate RequestAttribute#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator comparing the extracted value to the comparison value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#operator RequestAttribute#operator}
  */
  readonly operator: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value RequestAttribute#value}
  */
  readonly value: string;
}

export function requestAttributeDataSourcesIibLabelMethodNodeConditionToTerraform(struct?: RequestAttributeDataSourcesIibLabelMethodNodeConditionOutputReference | RequestAttributeDataSourcesIibLabelMethodNodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function requestAttributeDataSourcesIibLabelMethodNodeConditionToHclTerraform(struct?: RequestAttributeDataSourcesIibLabelMethodNodeConditionOutputReference | RequestAttributeDataSourcesIibLabelMethodNodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RequestAttributeDataSourcesIibLabelMethodNodeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesIibLabelMethodNodeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesIibLabelMethodNodeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RequestAttributeDataSourcesIibMethodNodeCondition {
  /**
  * Negate the comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#negate RequestAttribute#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator comparing the extracted value to the comparison value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#operator RequestAttribute#operator}
  */
  readonly operator: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value RequestAttribute#value}
  */
  readonly value: string;
}

export function requestAttributeDataSourcesIibMethodNodeConditionToTerraform(struct?: RequestAttributeDataSourcesIibMethodNodeConditionOutputReference | RequestAttributeDataSourcesIibMethodNodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function requestAttributeDataSourcesIibMethodNodeConditionToHclTerraform(struct?: RequestAttributeDataSourcesIibMethodNodeConditionOutputReference | RequestAttributeDataSourcesIibMethodNodeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RequestAttributeDataSourcesIibMethodNodeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesIibMethodNodeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesIibMethodNodeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RequestAttributeDataSourcesIibNodeTypeCondition {
  /**
  * Negate the comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#negate RequestAttribute#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator comparing the extracted value to the comparison value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#operator RequestAttribute#operator}
  */
  readonly operator: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value RequestAttribute#value}
  */
  readonly value: string;
}

export function requestAttributeDataSourcesIibNodeTypeConditionToTerraform(struct?: RequestAttributeDataSourcesIibNodeTypeConditionOutputReference | RequestAttributeDataSourcesIibNodeTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function requestAttributeDataSourcesIibNodeTypeConditionToHclTerraform(struct?: RequestAttributeDataSourcesIibNodeTypeConditionOutputReference | RequestAttributeDataSourcesIibNodeTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RequestAttributeDataSourcesIibNodeTypeConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesIibNodeTypeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesIibNodeTypeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RequestAttributeDataSourcesMethodsMethod {
  /**
  * Configuration of a method to be captured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#argument_types RequestAttribute#argument_types}
  */
  readonly argumentTypes?: string[];
  /**
  * The class name where the method to capture resides.   Either this or the **fileName** must be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#class_name RequestAttribute#class_name}
  */
  readonly className?: string;
  /**
  * The file name where the method to capture resides.   Either this or **className** must be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#file_name RequestAttribute#file_name}
  */
  readonly fileName?: string;
  /**
  * The operator of the comparison. If not set, `EQUALS` is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#file_name_matcher RequestAttribute#file_name_matcher}
  */
  readonly fileNameMatcher?: string;
  /**
  * The name of the method to capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#method_name RequestAttribute#method_name}
  */
  readonly methodName: string;
  /**
  * The modifiers of the method to capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#modifiers RequestAttribute#modifiers}
  */
  readonly modifiers?: string[];
  /**
  * The return type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#return_type RequestAttribute#return_type}
  */
  readonly returnType: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The visibility of the method to capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#visibility RequestAttribute#visibility}
  */
  readonly visibility: string;
}

export function requestAttributeDataSourcesMethodsMethodToTerraform(struct?: RequestAttributeDataSourcesMethodsMethodOutputReference | RequestAttributeDataSourcesMethodsMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.argumentTypes),
    class_name: cdktf.stringToTerraform(struct!.className),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_name_matcher: cdktf.stringToTerraform(struct!.fileNameMatcher),
    method_name: cdktf.stringToTerraform(struct!.methodName),
    modifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modifiers),
    return_type: cdktf.stringToTerraform(struct!.returnType),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function requestAttributeDataSourcesMethodsMethodToHclTerraform(struct?: RequestAttributeDataSourcesMethodsMethodOutputReference | RequestAttributeDataSourcesMethodsMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argument_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.argumentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    class_name: {
      value: cdktf.stringToHclTerraform(struct!.className),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name_matcher: {
      value: cdktf.stringToHclTerraform(struct!.fileNameMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_name: {
      value: cdktf.stringToHclTerraform(struct!.methodName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    return_type: {
      value: cdktf.stringToHclTerraform(struct!.returnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAttributeDataSourcesMethodsMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesMethodsMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argumentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.argumentTypes = this._argumentTypes;
    }
    if (this._className !== undefined) {
      hasAnyValues = true;
      internalValueResult.className = this._className;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._fileNameMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileNameMatcher = this._fileNameMatcher;
    }
    if (this._methodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodName = this._methodName;
    }
    if (this._modifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifiers = this._modifiers;
    }
    if (this._returnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnType = this._returnType;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesMethodsMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._argumentTypes = undefined;
      this._className = undefined;
      this._fileName = undefined;
      this._fileNameMatcher = undefined;
      this._methodName = undefined;
      this._modifiers = undefined;
      this._returnType = undefined;
      this._unknowns = undefined;
      this._visibility = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._argumentTypes = value.argumentTypes;
      this._className = value.className;
      this._fileName = value.fileName;
      this._fileNameMatcher = value.fileNameMatcher;
      this._methodName = value.methodName;
      this._modifiers = value.modifiers;
      this._returnType = value.returnType;
      this._unknowns = value.unknowns;
      this._visibility = value.visibility;
    }
  }

  // argument_types - computed: false, optional: true, required: false
  private _argumentTypes?: string[]; 
  public get argumentTypes() {
    return this.getListAttribute('argument_types');
  }
  public set argumentTypes(value: string[]) {
    this._argumentTypes = value;
  }
  public resetArgumentTypes() {
    this._argumentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentTypesInput() {
    return this._argumentTypes;
  }

  // class_name - computed: false, optional: true, required: false
  private _className?: string; 
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  public resetClassName() {
    this._className = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_name_matcher - computed: false, optional: true, required: false
  private _fileNameMatcher?: string; 
  public get fileNameMatcher() {
    return this.getStringAttribute('file_name_matcher');
  }
  public set fileNameMatcher(value: string) {
    this._fileNameMatcher = value;
  }
  public resetFileNameMatcher() {
    this._fileNameMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameMatcherInput() {
    return this._fileNameMatcher;
  }

  // method_name - computed: false, optional: false, required: true
  private _methodName?: string; 
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
  public set methodName(value: string) {
    this._methodName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNameInput() {
    return this._methodName;
  }

  // modifiers - computed: false, optional: true, required: false
  private _modifiers?: string[]; 
  public get modifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('modifiers'));
  }
  public set modifiers(value: string[]) {
    this._modifiers = value;
  }
  public resetModifiers() {
    this._modifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiersInput() {
    return this._modifiers;
  }

  // return_type - computed: false, optional: false, required: true
  private _returnType?: string; 
  public get returnType() {
    return this.getStringAttribute('return_type');
  }
  public set returnType(value: string) {
    this._returnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTypeInput() {
    return this._returnType;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}
export interface RequestAttributeDataSourcesMethods {
  /**
  * The index of the argument to capture. Set `0` to capture the return value, `1` or higher to capture a mehtod argument.   Required if the **capture** is set to `ARGUMENT`.  Not applicable in other cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#argument_index RequestAttribute#argument_index}
  */
  readonly argumentIndex?: number;
  /**
  * What to capture from the method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#capture RequestAttribute#capture}
  */
  readonly capture: string;
  /**
  * The getter chain to apply to the captured object. It is required in one of the following cases:  The **capture** is set to `THIS`.    The **capture** is set to `ARGUMENT`, and the argument is not a primitive, a primitive wrapper class, a string, or an array.   Not applicable in other cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#deep_object_access RequestAttribute#deep_object_access}
  */
  readonly deepObjectAccess?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#method RequestAttribute#method}
  */
  readonly method?: RequestAttributeDataSourcesMethodsMethod;
}

export function requestAttributeDataSourcesMethodsToTerraform(struct?: RequestAttributeDataSourcesMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument_index: cdktf.numberToTerraform(struct!.argumentIndex),
    capture: cdktf.stringToTerraform(struct!.capture),
    deep_object_access: cdktf.stringToTerraform(struct!.deepObjectAccess),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    method: requestAttributeDataSourcesMethodsMethodToTerraform(struct!.method),
  }
}


export function requestAttributeDataSourcesMethodsToHclTerraform(struct?: RequestAttributeDataSourcesMethods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argument_index: {
      value: cdktf.numberToHclTerraform(struct!.argumentIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capture: {
      value: cdktf.stringToHclTerraform(struct!.capture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deep_object_access: {
      value: cdktf.stringToHclTerraform(struct!.deepObjectAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: requestAttributeDataSourcesMethodsMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesMethodsMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAttributeDataSourcesMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestAttributeDataSourcesMethods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argumentIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.argumentIndex = this._argumentIndex;
    }
    if (this._capture !== undefined) {
      hasAnyValues = true;
      internalValueResult.capture = this._capture;
    }
    if (this._deepObjectAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.deepObjectAccess = this._deepObjectAccess;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesMethods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argumentIndex = undefined;
      this._capture = undefined;
      this._deepObjectAccess = undefined;
      this._unknowns = undefined;
      this._method.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argumentIndex = value.argumentIndex;
      this._capture = value.capture;
      this._deepObjectAccess = value.deepObjectAccess;
      this._unknowns = value.unknowns;
      this._method.internalValue = value.method;
    }
  }

  // argument_index - computed: false, optional: true, required: false
  private _argumentIndex?: number; 
  public get argumentIndex() {
    return this.getNumberAttribute('argument_index');
  }
  public set argumentIndex(value: number) {
    this._argumentIndex = value;
  }
  public resetArgumentIndex() {
    this._argumentIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentIndexInput() {
    return this._argumentIndex;
  }

  // capture - computed: false, optional: false, required: true
  private _capture?: string; 
  public get capture() {
    return this.getStringAttribute('capture');
  }
  public set capture(value: string) {
    this._capture = value;
  }
  // Temporarily expose input value. Use with caution.
  public get captureInput() {
    return this._capture;
  }

  // deep_object_access - computed: false, optional: true, required: false
  private _deepObjectAccess?: string; 
  public get deepObjectAccess() {
    return this.getStringAttribute('deep_object_access');
  }
  public set deepObjectAccess(value: string) {
    this._deepObjectAccess = value;
  }
  public resetDeepObjectAccess() {
    this._deepObjectAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepObjectAccessInput() {
    return this._deepObjectAccess;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // method - computed: false, optional: true, required: false
  private _method = new RequestAttributeDataSourcesMethodsMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: RequestAttributeDataSourcesMethodsMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }
}

export class RequestAttributeDataSourcesMethodsList extends cdktf.ComplexList {
  public internalValue? : RequestAttributeDataSourcesMethods[] | cdktf.IResolvable

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
  public get(index: number): RequestAttributeDataSourcesMethodsOutputReference {
    return new RequestAttributeDataSourcesMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestAttributeDataSourcesScope {
  /**
  * Only applies to this host group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#host_group RequestAttribute#host_group}
  */
  readonly hostGroup?: string;
  /**
  * Only applies to this process group. Note that this can't be transferred between different clusters or environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#process_group RequestAttribute#process_group}
  */
  readonly processGroup?: string;
  /**
  * Only applies to this service technology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#service_technology RequestAttribute#service_technology}
  */
  readonly serviceTechnology?: string;
  /**
  * Only apply to process groups matching this tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#tag_of_process_group RequestAttribute#tag_of_process_group}
  */
  readonly tagOfProcessGroup?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
}

export function requestAttributeDataSourcesScopeToTerraform(struct?: RequestAttributeDataSourcesScopeOutputReference | RequestAttributeDataSourcesScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_group: cdktf.stringToTerraform(struct!.hostGroup),
    process_group: cdktf.stringToTerraform(struct!.processGroup),
    service_technology: cdktf.stringToTerraform(struct!.serviceTechnology),
    tag_of_process_group: cdktf.stringToTerraform(struct!.tagOfProcessGroup),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function requestAttributeDataSourcesScopeToHclTerraform(struct?: RequestAttributeDataSourcesScopeOutputReference | RequestAttributeDataSourcesScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_group: {
      value: cdktf.stringToHclTerraform(struct!.hostGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    process_group: {
      value: cdktf.stringToHclTerraform(struct!.processGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_technology: {
      value: cdktf.stringToHclTerraform(struct!.serviceTechnology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_of_process_group: {
      value: cdktf.stringToHclTerraform(struct!.tagOfProcessGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAttributeDataSourcesScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroup = this._hostGroup;
    }
    if (this._processGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.processGroup = this._processGroup;
    }
    if (this._serviceTechnology !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTechnology = this._serviceTechnology;
    }
    if (this._tagOfProcessGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOfProcessGroup = this._tagOfProcessGroup;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostGroup = undefined;
      this._processGroup = undefined;
      this._serviceTechnology = undefined;
      this._tagOfProcessGroup = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostGroup = value.hostGroup;
      this._processGroup = value.processGroup;
      this._serviceTechnology = value.serviceTechnology;
      this._tagOfProcessGroup = value.tagOfProcessGroup;
      this._unknowns = value.unknowns;
    }
  }

  // host_group - computed: false, optional: true, required: false
  private _hostGroup?: string; 
  public get hostGroup() {
    return this.getStringAttribute('host_group');
  }
  public set hostGroup(value: string) {
    this._hostGroup = value;
  }
  public resetHostGroup() {
    this._hostGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupInput() {
    return this._hostGroup;
  }

  // process_group - computed: false, optional: true, required: false
  private _processGroup?: string; 
  public get processGroup() {
    return this.getStringAttribute('process_group');
  }
  public set processGroup(value: string) {
    this._processGroup = value;
  }
  public resetProcessGroup() {
    this._processGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processGroupInput() {
    return this._processGroup;
  }

  // service_technology - computed: false, optional: true, required: false
  private _serviceTechnology?: string; 
  public get serviceTechnology() {
    return this.getStringAttribute('service_technology');
  }
  public set serviceTechnology(value: string) {
    this._serviceTechnology = value;
  }
  public resetServiceTechnology() {
    this._serviceTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTechnologyInput() {
    return this._serviceTechnology;
  }

  // tag_of_process_group - computed: false, optional: true, required: false
  private _tagOfProcessGroup?: string; 
  public get tagOfProcessGroup() {
    return this.getStringAttribute('tag_of_process_group');
  }
  public set tagOfProcessGroup(value: string) {
    this._tagOfProcessGroup = value;
  }
  public resetTagOfProcessGroup() {
    this._tagOfProcessGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOfProcessGroupInput() {
    return this._tagOfProcessGroup;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface RequestAttributeDataSourcesValueProcessingExtractSubstring {
  /**
  * The delimiter string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#delimiter RequestAttribute#delimiter}
  */
  readonly delimiter: string;
  /**
  * The end-delimiter string.   Required if the **position** value is `BETWEEN`. Otherwise not allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#end_delimiter RequestAttribute#end_delimiter}
  */
  readonly endDelimiter?: string;
  /**
  * The position of the extracted string relative to delimiters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#position RequestAttribute#position}
  */
  readonly position: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
}

export function requestAttributeDataSourcesValueProcessingExtractSubstringToTerraform(struct?: RequestAttributeDataSourcesValueProcessingExtractSubstringOutputReference | RequestAttributeDataSourcesValueProcessingExtractSubstring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    end_delimiter: cdktf.stringToTerraform(struct!.endDelimiter),
    position: cdktf.stringToTerraform(struct!.position),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function requestAttributeDataSourcesValueProcessingExtractSubstringToHclTerraform(struct?: RequestAttributeDataSourcesValueProcessingExtractSubstringOutputReference | RequestAttributeDataSourcesValueProcessingExtractSubstring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.endDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAttributeDataSourcesValueProcessingExtractSubstringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesValueProcessingExtractSubstring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._endDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDelimiter = this._endDelimiter;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesValueProcessingExtractSubstring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._endDelimiter = undefined;
      this._position = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._endDelimiter = value.endDelimiter;
      this._position = value.position;
      this._unknowns = value.unknowns;
    }
  }

  // delimiter - computed: false, optional: false, required: true
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // end_delimiter - computed: false, optional: true, required: false
  private _endDelimiter?: string; 
  public get endDelimiter() {
    return this.getStringAttribute('end_delimiter');
  }
  public set endDelimiter(value: string) {
    this._endDelimiter = value;
  }
  public resetEndDelimiter() {
    this._endDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDelimiterInput() {
    return this._endDelimiter;
  }

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface RequestAttributeDataSourcesValueProcessingValueCondition {
  /**
  * Negate the comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#negate RequestAttribute#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator comparing the extracted value to the comparison value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#operator RequestAttribute#operator}
  */
  readonly operator: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value RequestAttribute#value}
  */
  readonly value: string;
}

export function requestAttributeDataSourcesValueProcessingValueConditionToTerraform(struct?: RequestAttributeDataSourcesValueProcessingValueConditionOutputReference | RequestAttributeDataSourcesValueProcessingValueCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function requestAttributeDataSourcesValueProcessingValueConditionToHclTerraform(struct?: RequestAttributeDataSourcesValueProcessingValueConditionOutputReference | RequestAttributeDataSourcesValueProcessingValueCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RequestAttributeDataSourcesValueProcessingValueConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesValueProcessingValueCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesValueProcessingValueCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface RequestAttributeDataSourcesValueProcessing {
  /**
  * Split (preprocessed) string values at this separator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#split_at RequestAttribute#split_at}
  */
  readonly splitAt?: string;
  /**
  * Prune Whitespaces. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#trim RequestAttribute#trim}
  */
  readonly trim?: boolean | cdktf.IResolvable;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Extract value from captured data per regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value_extractor_regex RequestAttribute#value_extractor_regex}
  */
  readonly valueExtractorRegex?: string;
  /**
  * extract_substring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#extract_substring RequestAttribute#extract_substring}
  */
  readonly extractSubstring?: RequestAttributeDataSourcesValueProcessingExtractSubstring;
  /**
  * value_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value_condition RequestAttribute#value_condition}
  */
  readonly valueCondition?: RequestAttributeDataSourcesValueProcessingValueCondition;
}

export function requestAttributeDataSourcesValueProcessingToTerraform(struct?: RequestAttributeDataSourcesValueProcessingOutputReference | RequestAttributeDataSourcesValueProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    split_at: cdktf.stringToTerraform(struct!.splitAt),
    trim: cdktf.booleanToTerraform(struct!.trim),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value_extractor_regex: cdktf.stringToTerraform(struct!.valueExtractorRegex),
    extract_substring: requestAttributeDataSourcesValueProcessingExtractSubstringToTerraform(struct!.extractSubstring),
    value_condition: requestAttributeDataSourcesValueProcessingValueConditionToTerraform(struct!.valueCondition),
  }
}


export function requestAttributeDataSourcesValueProcessingToHclTerraform(struct?: RequestAttributeDataSourcesValueProcessingOutputReference | RequestAttributeDataSourcesValueProcessing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    split_at: {
      value: cdktf.stringToHclTerraform(struct!.splitAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trim: {
      value: cdktf.booleanToHclTerraform(struct!.trim),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_extractor_regex: {
      value: cdktf.stringToHclTerraform(struct!.valueExtractorRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extract_substring: {
      value: requestAttributeDataSourcesValueProcessingExtractSubstringToHclTerraform(struct!.extractSubstring),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesValueProcessingExtractSubstringList",
    },
    value_condition: {
      value: requestAttributeDataSourcesValueProcessingValueConditionToHclTerraform(struct!.valueCondition),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesValueProcessingValueConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAttributeDataSourcesValueProcessingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestAttributeDataSourcesValueProcessing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splitAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitAt = this._splitAt;
    }
    if (this._trim !== undefined) {
      hasAnyValues = true;
      internalValueResult.trim = this._trim;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._valueExtractorRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueExtractorRegex = this._valueExtractorRegex;
    }
    if (this._extractSubstring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extractSubstring = this._extractSubstring?.internalValue;
    }
    if (this._valueCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueCondition = this._valueCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSourcesValueProcessing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splitAt = undefined;
      this._trim = undefined;
      this._unknowns = undefined;
      this._valueExtractorRegex = undefined;
      this._extractSubstring.internalValue = undefined;
      this._valueCondition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splitAt = value.splitAt;
      this._trim = value.trim;
      this._unknowns = value.unknowns;
      this._valueExtractorRegex = value.valueExtractorRegex;
      this._extractSubstring.internalValue = value.extractSubstring;
      this._valueCondition.internalValue = value.valueCondition;
    }
  }

  // split_at - computed: false, optional: true, required: false
  private _splitAt?: string; 
  public get splitAt() {
    return this.getStringAttribute('split_at');
  }
  public set splitAt(value: string) {
    this._splitAt = value;
  }
  public resetSplitAt() {
    this._splitAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitAtInput() {
    return this._splitAt;
  }

  // trim - computed: false, optional: true, required: false
  private _trim?: boolean | cdktf.IResolvable; 
  public get trim() {
    return this.getBooleanAttribute('trim');
  }
  public set trim(value: boolean | cdktf.IResolvable) {
    this._trim = value;
  }
  public resetTrim() {
    this._trim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trimInput() {
    return this._trim;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value_extractor_regex - computed: false, optional: true, required: false
  private _valueExtractorRegex?: string; 
  public get valueExtractorRegex() {
    return this.getStringAttribute('value_extractor_regex');
  }
  public set valueExtractorRegex(value: string) {
    this._valueExtractorRegex = value;
  }
  public resetValueExtractorRegex() {
    this._valueExtractorRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueExtractorRegexInput() {
    return this._valueExtractorRegex;
  }

  // extract_substring - computed: false, optional: true, required: false
  private _extractSubstring = new RequestAttributeDataSourcesValueProcessingExtractSubstringOutputReference(this, "extract_substring");
  public get extractSubstring() {
    return this._extractSubstring;
  }
  public putExtractSubstring(value: RequestAttributeDataSourcesValueProcessingExtractSubstring) {
    this._extractSubstring.internalValue = value;
  }
  public resetExtractSubstring() {
    this._extractSubstring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extractSubstringInput() {
    return this._extractSubstring.internalValue;
  }

  // value_condition - computed: false, optional: true, required: false
  private _valueCondition = new RequestAttributeDataSourcesValueProcessingValueConditionOutputReference(this, "value_condition");
  public get valueCondition() {
    return this._valueCondition;
  }
  public putValueCondition(value: RequestAttributeDataSourcesValueProcessingValueCondition) {
    this._valueCondition.internalValue = value;
  }
  public resetValueCondition() {
    this._valueCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueConditionInput() {
    return this._valueCondition.internalValue;
  }
}
export interface RequestAttributeDataSources {
  /**
  * Specifies the location where the values are captured and stored.  Required if the **source** is one of the following: `GET_PARAMETER`, `URI`, `REQUEST_HEADER`, `RESPONSE_HEADER`.   Not applicable in other cases.   If the **source** value is `REQUEST_HEADER` or `RESPONSE_HEADER`, the `CAPTURE_AND_STORE_ON_BOTH` location is not allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#capturing_and_storage_location RequestAttribute#capturing_and_storage_location}
  */
  readonly capturingAndStorageLocation?: string;
  /**
  * CICS transaction call type condition for which the value is captured. Required if the source is: `CICS_TRANSACTION_CALL_TYPE`. Not applicable in other cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#cics_transaction_call_type RequestAttribute#cics_transaction_call_type}
  */
  readonly cicsTransactionCallType?: string;
  /**
  * The data source is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#enabled RequestAttribute#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The IBM integration bus node type for which the value is captured.  This or `iibMethodNodeCondition` is required if the **source** is: `IIB_NODE`.  Not applicable in other cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#iib_node_type RequestAttribute#iib_node_type}
  */
  readonly iibNodeType?: string;
  /**
  * IMS transaction call type condition for which the value is captured. Required if the source is: `IMS_TRANSACTION_CALL_TYPE`. Not applicable in other cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#ims_transaction_call_type RequestAttribute#ims_transaction_call_type}
  */
  readonly imsTransactionCallType?: string;
  /**
  * The name of the web request parameter to capture.  Required if the **source** is one of the following: `POST_PARAMETER`, `GET_PARAMETER`, `REQUEST_HEADER`, `RESPONSE_HEADER`, `CUSTOM_ATTRIBUTE`.  Not applicable in other cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#parameter_name RequestAttribute#parameter_name}
  */
  readonly parameterName?: string;
  /**
  * The technology of the server variable to capture if the source value is SERVER_VARIABLE. 
  * 
  *  Not applicable in other cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#server_variable_technology RequestAttribute#server_variable_technology}
  */
  readonly serverVariableTechnology?: string;
  /**
  * The technology of the session attribute to capture if the **source** value is `SESSION_ATTRIBUTE`. 
  * 
  *  Not applicable in other cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#session_attribute_technology RequestAttribute#session_attribute_technology}
  */
  readonly sessionAttributeTechnology?: string;
  /**
  * The source of the attribute to capture. Works in conjunction with **parameterName** or **methods** and **technology**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#source RequestAttribute#source}
  */
  readonly source: string;
  /**
  * The key of the span attribute to capture. Required if the source is: `SPAN_ATTRIBUTE`. Not applicable in other cases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#span_attribute_key RequestAttribute#span_attribute_key}
  */
  readonly spanAttributeKey?: string;
  /**
  * The technology of the method to capture if the **source** value is `METHOD_PARAM`. 
  * 
  *  Not applicable in other cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#technology RequestAttribute#technology}
  */
  readonly technology?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#unknowns RequestAttribute#unknowns}
  */
  readonly unknowns?: string;
  /**
  * cics_sdk_method_node_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#cics_sdk_method_node_condition RequestAttribute#cics_sdk_method_node_condition}
  */
  readonly cicsSdkMethodNodeCondition?: RequestAttributeDataSourcesCicsSdkMethodNodeCondition;
  /**
  * iib_label_method_node_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#iib_label_method_node_condition RequestAttribute#iib_label_method_node_condition}
  */
  readonly iibLabelMethodNodeCondition?: RequestAttributeDataSourcesIibLabelMethodNodeCondition;
  /**
  * iib_method_node_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#iib_method_node_condition RequestAttribute#iib_method_node_condition}
  */
  readonly iibMethodNodeCondition?: RequestAttributeDataSourcesIibMethodNodeCondition;
  /**
  * iib_node_type_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#iib_node_type_condition RequestAttribute#iib_node_type_condition}
  */
  readonly iibNodeTypeCondition?: RequestAttributeDataSourcesIibNodeTypeCondition;
  /**
  * methods block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#methods RequestAttribute#methods}
  */
  readonly methods?: RequestAttributeDataSourcesMethods[] | cdktf.IResolvable;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#scope RequestAttribute#scope}
  */
  readonly scope?: RequestAttributeDataSourcesScope;
  /**
  * value_processing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#value_processing RequestAttribute#value_processing}
  */
  readonly valueProcessing?: RequestAttributeDataSourcesValueProcessing;
}

export function requestAttributeDataSourcesToTerraform(struct?: RequestAttributeDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capturing_and_storage_location: cdktf.stringToTerraform(struct!.capturingAndStorageLocation),
    cics_transaction_call_type: cdktf.stringToTerraform(struct!.cicsTransactionCallType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    iib_node_type: cdktf.stringToTerraform(struct!.iibNodeType),
    ims_transaction_call_type: cdktf.stringToTerraform(struct!.imsTransactionCallType),
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    server_variable_technology: cdktf.stringToTerraform(struct!.serverVariableTechnology),
    session_attribute_technology: cdktf.stringToTerraform(struct!.sessionAttributeTechnology),
    source: cdktf.stringToTerraform(struct!.source),
    span_attribute_key: cdktf.stringToTerraform(struct!.spanAttributeKey),
    technology: cdktf.stringToTerraform(struct!.technology),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    cics_sdk_method_node_condition: requestAttributeDataSourcesCicsSdkMethodNodeConditionToTerraform(struct!.cicsSdkMethodNodeCondition),
    iib_label_method_node_condition: requestAttributeDataSourcesIibLabelMethodNodeConditionToTerraform(struct!.iibLabelMethodNodeCondition),
    iib_method_node_condition: requestAttributeDataSourcesIibMethodNodeConditionToTerraform(struct!.iibMethodNodeCondition),
    iib_node_type_condition: requestAttributeDataSourcesIibNodeTypeConditionToTerraform(struct!.iibNodeTypeCondition),
    methods: cdktf.listMapper(requestAttributeDataSourcesMethodsToTerraform, true)(struct!.methods),
    scope: requestAttributeDataSourcesScopeToTerraform(struct!.scope),
    value_processing: requestAttributeDataSourcesValueProcessingToTerraform(struct!.valueProcessing),
  }
}


export function requestAttributeDataSourcesToHclTerraform(struct?: RequestAttributeDataSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capturing_and_storage_location: {
      value: cdktf.stringToHclTerraform(struct!.capturingAndStorageLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cics_transaction_call_type: {
      value: cdktf.stringToHclTerraform(struct!.cicsTransactionCallType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iib_node_type: {
      value: cdktf.stringToHclTerraform(struct!.iibNodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ims_transaction_call_type: {
      value: cdktf.stringToHclTerraform(struct!.imsTransactionCallType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.parameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_variable_technology: {
      value: cdktf.stringToHclTerraform(struct!.serverVariableTechnology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_attribute_technology: {
      value: cdktf.stringToHclTerraform(struct!.sessionAttributeTechnology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span_attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.spanAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    technology: {
      value: cdktf.stringToHclTerraform(struct!.technology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cics_sdk_method_node_condition: {
      value: requestAttributeDataSourcesCicsSdkMethodNodeConditionToHclTerraform(struct!.cicsSdkMethodNodeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesCicsSdkMethodNodeConditionList",
    },
    iib_label_method_node_condition: {
      value: requestAttributeDataSourcesIibLabelMethodNodeConditionToHclTerraform(struct!.iibLabelMethodNodeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesIibLabelMethodNodeConditionList",
    },
    iib_method_node_condition: {
      value: requestAttributeDataSourcesIibMethodNodeConditionToHclTerraform(struct!.iibMethodNodeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesIibMethodNodeConditionList",
    },
    iib_node_type_condition: {
      value: requestAttributeDataSourcesIibNodeTypeConditionToHclTerraform(struct!.iibNodeTypeCondition),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesIibNodeTypeConditionList",
    },
    methods: {
      value: cdktf.listMapperHcl(requestAttributeDataSourcesMethodsToHclTerraform, true)(struct!.methods),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesMethodsList",
    },
    scope: {
      value: requestAttributeDataSourcesScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesScopeList",
    },
    value_processing: {
      value: requestAttributeDataSourcesValueProcessingToHclTerraform(struct!.valueProcessing),
      isBlock: true,
      type: "list",
      storageClassType: "RequestAttributeDataSourcesValueProcessingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestAttributeDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestAttributeDataSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capturingAndStorageLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.capturingAndStorageLocation = this._capturingAndStorageLocation;
    }
    if (this._cicsTransactionCallType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cicsTransactionCallType = this._cicsTransactionCallType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._iibNodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.iibNodeType = this._iibNodeType;
    }
    if (this._imsTransactionCallType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsTransactionCallType = this._imsTransactionCallType;
    }
    if (this._parameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterName = this._parameterName;
    }
    if (this._serverVariableTechnology !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverVariableTechnology = this._serverVariableTechnology;
    }
    if (this._sessionAttributeTechnology !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAttributeTechnology = this._sessionAttributeTechnology;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._spanAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.spanAttributeKey = this._spanAttributeKey;
    }
    if (this._technology !== undefined) {
      hasAnyValues = true;
      internalValueResult.technology = this._technology;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._cicsSdkMethodNodeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cicsSdkMethodNodeCondition = this._cicsSdkMethodNodeCondition?.internalValue;
    }
    if (this._iibLabelMethodNodeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iibLabelMethodNodeCondition = this._iibLabelMethodNodeCondition?.internalValue;
    }
    if (this._iibMethodNodeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iibMethodNodeCondition = this._iibMethodNodeCondition?.internalValue;
    }
    if (this._iibNodeTypeCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iibNodeTypeCondition = this._iibNodeTypeCondition?.internalValue;
    }
    if (this._methods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods?.internalValue;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._valueProcessing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueProcessing = this._valueProcessing?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestAttributeDataSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capturingAndStorageLocation = undefined;
      this._cicsTransactionCallType = undefined;
      this._enabled = undefined;
      this._iibNodeType = undefined;
      this._imsTransactionCallType = undefined;
      this._parameterName = undefined;
      this._serverVariableTechnology = undefined;
      this._sessionAttributeTechnology = undefined;
      this._source = undefined;
      this._spanAttributeKey = undefined;
      this._technology = undefined;
      this._unknowns = undefined;
      this._cicsSdkMethodNodeCondition.internalValue = undefined;
      this._iibLabelMethodNodeCondition.internalValue = undefined;
      this._iibMethodNodeCondition.internalValue = undefined;
      this._iibNodeTypeCondition.internalValue = undefined;
      this._methods.internalValue = undefined;
      this._scope.internalValue = undefined;
      this._valueProcessing.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capturingAndStorageLocation = value.capturingAndStorageLocation;
      this._cicsTransactionCallType = value.cicsTransactionCallType;
      this._enabled = value.enabled;
      this._iibNodeType = value.iibNodeType;
      this._imsTransactionCallType = value.imsTransactionCallType;
      this._parameterName = value.parameterName;
      this._serverVariableTechnology = value.serverVariableTechnology;
      this._sessionAttributeTechnology = value.sessionAttributeTechnology;
      this._source = value.source;
      this._spanAttributeKey = value.spanAttributeKey;
      this._technology = value.technology;
      this._unknowns = value.unknowns;
      this._cicsSdkMethodNodeCondition.internalValue = value.cicsSdkMethodNodeCondition;
      this._iibLabelMethodNodeCondition.internalValue = value.iibLabelMethodNodeCondition;
      this._iibMethodNodeCondition.internalValue = value.iibMethodNodeCondition;
      this._iibNodeTypeCondition.internalValue = value.iibNodeTypeCondition;
      this._methods.internalValue = value.methods;
      this._scope.internalValue = value.scope;
      this._valueProcessing.internalValue = value.valueProcessing;
    }
  }

  // capturing_and_storage_location - computed: false, optional: true, required: false
  private _capturingAndStorageLocation?: string; 
  public get capturingAndStorageLocation() {
    return this.getStringAttribute('capturing_and_storage_location');
  }
  public set capturingAndStorageLocation(value: string) {
    this._capturingAndStorageLocation = value;
  }
  public resetCapturingAndStorageLocation() {
    this._capturingAndStorageLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capturingAndStorageLocationInput() {
    return this._capturingAndStorageLocation;
  }

  // cics_transaction_call_type - computed: false, optional: true, required: false
  private _cicsTransactionCallType?: string; 
  public get cicsTransactionCallType() {
    return this.getStringAttribute('cics_transaction_call_type');
  }
  public set cicsTransactionCallType(value: string) {
    this._cicsTransactionCallType = value;
  }
  public resetCicsTransactionCallType() {
    this._cicsTransactionCallType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cicsTransactionCallTypeInput() {
    return this._cicsTransactionCallType;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // iib_node_type - computed: false, optional: true, required: false
  private _iibNodeType?: string; 
  public get iibNodeType() {
    return this.getStringAttribute('iib_node_type');
  }
  public set iibNodeType(value: string) {
    this._iibNodeType = value;
  }
  public resetIibNodeType() {
    this._iibNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iibNodeTypeInput() {
    return this._iibNodeType;
  }

  // ims_transaction_call_type - computed: false, optional: true, required: false
  private _imsTransactionCallType?: string; 
  public get imsTransactionCallType() {
    return this.getStringAttribute('ims_transaction_call_type');
  }
  public set imsTransactionCallType(value: string) {
    this._imsTransactionCallType = value;
  }
  public resetImsTransactionCallType() {
    this._imsTransactionCallType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsTransactionCallTypeInput() {
    return this._imsTransactionCallType;
  }

  // parameter_name - computed: false, optional: true, required: false
  private _parameterName?: string; 
  public get parameterName() {
    return this.getStringAttribute('parameter_name');
  }
  public set parameterName(value: string) {
    this._parameterName = value;
  }
  public resetParameterName() {
    this._parameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterNameInput() {
    return this._parameterName;
  }

  // server_variable_technology - computed: false, optional: true, required: false
  private _serverVariableTechnology?: string; 
  public get serverVariableTechnology() {
    return this.getStringAttribute('server_variable_technology');
  }
  public set serverVariableTechnology(value: string) {
    this._serverVariableTechnology = value;
  }
  public resetServerVariableTechnology() {
    this._serverVariableTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVariableTechnologyInput() {
    return this._serverVariableTechnology;
  }

  // session_attribute_technology - computed: false, optional: true, required: false
  private _sessionAttributeTechnology?: string; 
  public get sessionAttributeTechnology() {
    return this.getStringAttribute('session_attribute_technology');
  }
  public set sessionAttributeTechnology(value: string) {
    this._sessionAttributeTechnology = value;
  }
  public resetSessionAttributeTechnology() {
    this._sessionAttributeTechnology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAttributeTechnologyInput() {
    return this._sessionAttributeTechnology;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // span_attribute_key - computed: false, optional: true, required: false
  private _spanAttributeKey?: string; 
  public get spanAttributeKey() {
    return this.getStringAttribute('span_attribute_key');
  }
  public set spanAttributeKey(value: string) {
    this._spanAttributeKey = value;
  }
  public resetSpanAttributeKey() {
    this._spanAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanAttributeKeyInput() {
    return this._spanAttributeKey;
  }

  // technology - computed: false, optional: true, required: false
  private _technology?: string; 
  public get technology() {
    return this.getStringAttribute('technology');
  }
  public set technology(value: string) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // cics_sdk_method_node_condition - computed: false, optional: true, required: false
  private _cicsSdkMethodNodeCondition = new RequestAttributeDataSourcesCicsSdkMethodNodeConditionOutputReference(this, "cics_sdk_method_node_condition");
  public get cicsSdkMethodNodeCondition() {
    return this._cicsSdkMethodNodeCondition;
  }
  public putCicsSdkMethodNodeCondition(value: RequestAttributeDataSourcesCicsSdkMethodNodeCondition) {
    this._cicsSdkMethodNodeCondition.internalValue = value;
  }
  public resetCicsSdkMethodNodeCondition() {
    this._cicsSdkMethodNodeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cicsSdkMethodNodeConditionInput() {
    return this._cicsSdkMethodNodeCondition.internalValue;
  }

  // iib_label_method_node_condition - computed: false, optional: true, required: false
  private _iibLabelMethodNodeCondition = new RequestAttributeDataSourcesIibLabelMethodNodeConditionOutputReference(this, "iib_label_method_node_condition");
  public get iibLabelMethodNodeCondition() {
    return this._iibLabelMethodNodeCondition;
  }
  public putIibLabelMethodNodeCondition(value: RequestAttributeDataSourcesIibLabelMethodNodeCondition) {
    this._iibLabelMethodNodeCondition.internalValue = value;
  }
  public resetIibLabelMethodNodeCondition() {
    this._iibLabelMethodNodeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iibLabelMethodNodeConditionInput() {
    return this._iibLabelMethodNodeCondition.internalValue;
  }

  // iib_method_node_condition - computed: false, optional: true, required: false
  private _iibMethodNodeCondition = new RequestAttributeDataSourcesIibMethodNodeConditionOutputReference(this, "iib_method_node_condition");
  public get iibMethodNodeCondition() {
    return this._iibMethodNodeCondition;
  }
  public putIibMethodNodeCondition(value: RequestAttributeDataSourcesIibMethodNodeCondition) {
    this._iibMethodNodeCondition.internalValue = value;
  }
  public resetIibMethodNodeCondition() {
    this._iibMethodNodeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iibMethodNodeConditionInput() {
    return this._iibMethodNodeCondition.internalValue;
  }

  // iib_node_type_condition - computed: false, optional: true, required: false
  private _iibNodeTypeCondition = new RequestAttributeDataSourcesIibNodeTypeConditionOutputReference(this, "iib_node_type_condition");
  public get iibNodeTypeCondition() {
    return this._iibNodeTypeCondition;
  }
  public putIibNodeTypeCondition(value: RequestAttributeDataSourcesIibNodeTypeCondition) {
    this._iibNodeTypeCondition.internalValue = value;
  }
  public resetIibNodeTypeCondition() {
    this._iibNodeTypeCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iibNodeTypeConditionInput() {
    return this._iibNodeTypeCondition.internalValue;
  }

  // methods - computed: false, optional: true, required: false
  private _methods = new RequestAttributeDataSourcesMethodsList(this, "methods", false);
  public get methods() {
    return this._methods;
  }
  public putMethods(value: RequestAttributeDataSourcesMethods[] | cdktf.IResolvable) {
    this._methods.internalValue = value;
  }
  public resetMethods() {
    this._methods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new RequestAttributeDataSourcesScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: RequestAttributeDataSourcesScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // value_processing - computed: false, optional: true, required: false
  private _valueProcessing = new RequestAttributeDataSourcesValueProcessingOutputReference(this, "value_processing");
  public get valueProcessing() {
    return this._valueProcessing;
  }
  public putValueProcessing(value: RequestAttributeDataSourcesValueProcessing) {
    this._valueProcessing.internalValue = value;
  }
  public resetValueProcessing() {
    this._valueProcessing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueProcessingInput() {
    return this._valueProcessing.internalValue;
  }
}

export class RequestAttributeDataSourcesList extends cdktf.ComplexList {
  public internalValue? : RequestAttributeDataSources[] | cdktf.IResolvable

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
  public get(index: number): RequestAttributeDataSourcesOutputReference {
    return new RequestAttributeDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute dynatrace_request_attribute}
*/
export class RequestAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_request_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RequestAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RequestAttribute to import
  * @param importFromId The id of the existing RequestAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RequestAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_request_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/request_attribute dynatrace_request_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: RequestAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_request_attribute',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregation = config.aggregation;
    this._confidential = config.confidential;
    this._dataType = config.dataType;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._normalization = config.normalization;
    this._skipPersonalDataMasking = config.skipPersonalDataMasking;
    this._unknowns = config.unknowns;
    this._dataSources.internalValue = config.dataSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // confidential - computed: false, optional: true, required: false
  private _confidential?: boolean | cdktf.IResolvable; 
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }
  public set confidential(value: boolean | cdktf.IResolvable) {
    this._confidential = value;
  }
  public resetConfidential() {
    this._confidential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInput() {
    return this._confidential;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // normalization - computed: false, optional: false, required: true
  private _normalization?: string; 
  public get normalization() {
    return this.getStringAttribute('normalization');
  }
  public set normalization(value: string) {
    this._normalization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationInput() {
    return this._normalization;
  }

  // skip_personal_data_masking - computed: false, optional: true, required: false
  private _skipPersonalDataMasking?: boolean | cdktf.IResolvable; 
  public get skipPersonalDataMasking() {
    return this.getBooleanAttribute('skip_personal_data_masking');
  }
  public set skipPersonalDataMasking(value: boolean | cdktf.IResolvable) {
    this._skipPersonalDataMasking = value;
  }
  public resetSkipPersonalDataMasking() {
    this._skipPersonalDataMasking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipPersonalDataMaskingInput() {
    return this._skipPersonalDataMasking;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // data_sources - computed: false, optional: true, required: false
  private _dataSources = new RequestAttributeDataSourcesList(this, "data_sources", false);
  public get dataSources() {
    return this._dataSources;
  }
  public putDataSources(value: RequestAttributeDataSources[] | cdktf.IResolvable) {
    this._dataSources.internalValue = value;
  }
  public resetDataSources() {
    this._dataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourcesInput() {
    return this._dataSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation: cdktf.stringToTerraform(this._aggregation),
      confidential: cdktf.booleanToTerraform(this._confidential),
      data_type: cdktf.stringToTerraform(this._dataType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      normalization: cdktf.stringToTerraform(this._normalization),
      skip_personal_data_masking: cdktf.booleanToTerraform(this._skipPersonalDataMasking),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      data_sources: cdktf.listMapper(requestAttributeDataSourcesToTerraform, true)(this._dataSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation: {
        value: cdktf.stringToHclTerraform(this._aggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidential: {
        value: cdktf.booleanToHclTerraform(this._confidential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      normalization: {
        value: cdktf.stringToHclTerraform(this._normalization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_personal_data_masking: {
        value: cdktf.booleanToHclTerraform(this._skipPersonalDataMasking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_sources: {
        value: cdktf.listMapperHcl(requestAttributeDataSourcesToHclTerraform, true)(this._dataSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RequestAttributeDataSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
