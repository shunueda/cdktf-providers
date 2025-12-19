// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestNamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The rule is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#enabled RequestNaming#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#id RequestNaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the management zones for which this rule should be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#management_zones RequestNaming#management_zones}
  */
  readonly managementZones?: string[];
  /**
  * The name to be assigned to matching requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#naming_pattern RequestNaming#naming_pattern}
  */
  readonly namingPattern: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#conditions RequestNaming#conditions}
  */
  readonly conditions: RequestNamingConditions;
  /**
  * placeholders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#placeholders RequestNaming#placeholders}
  */
  readonly placeholders?: RequestNamingPlaceholders;
}
export interface RequestNamingConditionsConditionComparisonBoolean {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value: boolean | cdktf.IResolvable;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
}

export function requestNamingConditionsConditionComparisonBooleanToTerraform(struct?: RequestNamingConditionsConditionComparisonBooleanOutputReference | RequestNamingConditionsConditionComparisonBoolean): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.booleanToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonBooleanToHclTerraform(struct?: RequestNamingConditionsConditionComparisonBooleanOutputReference | RequestNamingConditionsConditionComparisonBoolean): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "booleanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonBooleanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonBoolean | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonBoolean | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // values - computed: false, optional: true, required: false
  private _values?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get values() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('values')));
  }
  public set values(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonEsbInputNodeType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonEsbInputNodeTypeToTerraform(struct?: RequestNamingConditionsConditionComparisonEsbInputNodeTypeOutputReference | RequestNamingConditionsConditionComparisonEsbInputNodeType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonEsbInputNodeTypeToHclTerraform(struct?: RequestNamingConditionsConditionComparisonEsbInputNodeTypeOutputReference | RequestNamingConditionsConditionComparisonEsbInputNodeType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonEsbInputNodeTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonEsbInputNodeType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonEsbInputNodeType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonFailedState {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `FAILED` and `FAILED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `FAILED` and `FAILED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonFailedStateToTerraform(struct?: RequestNamingConditionsConditionComparisonFailedStateOutputReference | RequestNamingConditionsConditionComparisonFailedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonFailedStateToHclTerraform(struct?: RequestNamingConditionsConditionComparisonFailedStateOutputReference | RequestNamingConditionsConditionComparisonFailedState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonFailedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonFailedState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonFailedState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonFailureReason {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `EXCEPTION_AT_ENTRY_NODE`, `EXCEPTION_ON_ANY_NODE`, `HTTP_CODE` and `REQUEST_ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `EXCEPTION_AT_ENTRY_NODE`, `EXCEPTION_ON_ANY_NODE`, `HTTP_CODE` and `REQUEST_ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonFailureReasonToTerraform(struct?: RequestNamingConditionsConditionComparisonFailureReasonOutputReference | RequestNamingConditionsConditionComparisonFailureReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonFailureReasonToHclTerraform(struct?: RequestNamingConditionsConditionComparisonFailureReasonOutputReference | RequestNamingConditionsConditionComparisonFailureReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonFailureReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonFailureReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonFailureReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonFastString {
  /**
  * The comparison is case-sensitive (`true`) or not case-sensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#case_sensitive RequestNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `CONTAINS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonFastStringToTerraform(struct?: RequestNamingConditionsConditionComparisonFastStringOutputReference | RequestNamingConditionsConditionComparisonFastString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonFastStringToHclTerraform(struct?: RequestNamingConditionsConditionComparisonFastStringOutputReference | RequestNamingConditionsConditionComparisonFastString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonFastStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonFastString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonFastString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonFlawState {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `FLAWED` and `NOT_FLAWED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `FLAWED` and `NOT_FLAWED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonFlawStateToTerraform(struct?: RequestNamingConditionsConditionComparisonFlawStateOutputReference | RequestNamingConditionsConditionComparisonFlawState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonFlawStateToHclTerraform(struct?: RequestNamingConditionsConditionComparisonFlawStateOutputReference | RequestNamingConditionsConditionComparisonFlawState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonFlawStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonFlawState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonFlawState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonGeneric {
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#type RequestNaming#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function requestNamingConditionsConditionComparisonGenericToTerraform(struct?: RequestNamingConditionsConditionComparisonGenericOutputReference | RequestNamingConditionsConditionComparisonGeneric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function requestNamingConditionsConditionComparisonGenericToHclTerraform(struct?: RequestNamingConditionsConditionComparisonGenericOutputReference | RequestNamingConditionsConditionComparisonGeneric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class RequestNamingConditionsConditionComparisonGenericOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonGeneric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonGeneric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
export interface RequestNamingConditionsConditionComparisonHttpMethod {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CONNECT`, `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CONNECT`, `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonHttpMethodToTerraform(struct?: RequestNamingConditionsConditionComparisonHttpMethodOutputReference | RequestNamingConditionsConditionComparisonHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonHttpMethodToHclTerraform(struct?: RequestNamingConditionsConditionComparisonHttpMethodOutputReference | RequestNamingConditionsConditionComparisonHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonHttpStatusClass {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `C_1XX`, `C_2XX`, `C_3XX`, `C_4XX`, `C_5XX` and `NO_RESPONSE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `C_1XX`, `C_2XX`, `C_3XX`, `C_4XX`, `C_5XX` and `NO_RESPONSE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonHttpStatusClassToTerraform(struct?: RequestNamingConditionsConditionComparisonHttpStatusClassOutputReference | RequestNamingConditionsConditionComparisonHttpStatusClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonHttpStatusClassToHclTerraform(struct?: RequestNamingConditionsConditionComparisonHttpStatusClassOutputReference | RequestNamingConditionsConditionComparisonHttpStatusClass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonHttpStatusClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonHttpStatusClass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonHttpStatusClass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonIibInputNodeType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonIibInputNodeTypeToTerraform(struct?: RequestNamingConditionsConditionComparisonIibInputNodeTypeOutputReference | RequestNamingConditionsConditionComparisonIibInputNodeType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonIibInputNodeTypeToHclTerraform(struct?: RequestNamingConditionsConditionComparisonIibInputNodeTypeOutputReference | RequestNamingConditionsConditionComparisonIibInputNodeType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonIibInputNodeTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonIibInputNodeType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonIibInputNodeType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonNumber {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF`, `EXISTS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `LOWER_THAN` and `LOWER_THAN_OR_EQUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: number;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: number[];
}

export function requestNamingConditionsConditionComparisonNumberToTerraform(struct?: RequestNamingConditionsConditionComparisonNumberOutputReference | RequestNamingConditionsConditionComparisonNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonNumberToHclTerraform(struct?: RequestNamingConditionsConditionComparisonNumberOutputReference | RequestNamingConditionsConditionComparisonNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('values')));
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey {
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context?: string;
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key?: string;
}

export function requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTag {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. For custom tags use the `CONTEXTLESS` value. The context is set for tags that are automatically imported by OneAgent (for example, from the AWS console or environment variables). It’s useful for determining the origin of tags when not manually defined, and it also helps to prevent clashes with other existing tags. If the tag is not automatically imported, `CONTEXTLESS` set. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_COMPUTE_ENGINE` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context?: string;
  /**
  * The key of the tag. For custom tags, put the tag value here. The key allows categorization of multiple tags. It is possible that there are multiple values for a single key which will all be represented as standalone tags. Therefore, the key does not have the semantic of a map key but is more like a key of a key-value tuple. In some cases, for example custom tags, the key represents the actual tag value and the value field is not set – those are called valueless tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags. If a tag does have a separate key and value (in the textual representation they are split by the colon ‘:’), this field is set with the actual value. Key-value pairs can occur for automatically imported tags and tags set by rules if extractors are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * tag_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#tag_key RequestNaming#tag_key}
  */
  readonly tagKey?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey;
}

export function requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    tag_key: requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToTerraform(struct!.tagKey),
  }
}


export function requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToHclTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    tag_key: {
      value: requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct!.tagKey),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._tagKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._value = undefined;
      this._tagKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._value = value.value;
      this._tagKey.internalValue = value.tagKey;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // tag_key - computed: false, optional: true, required: false
  private _tagKey = new RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference(this, "tag_key");
  public get tagKey() {
    return this._tagKey;
  }
  public putTagKey(value: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey) {
    this._tagKey.internalValue = value;
  }
  public resetTagKey() {
    this._tagKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey.internalValue;
  }
}
export interface RequestNamingConditionsConditionComparisonNumberRequestAttributeSource {
  /**
  * Use only request attributes from services that belong to this management zone.. Use either this or `serviceTag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#management_zone RequestNaming#management_zone}
  */
  readonly managementZone?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * service_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#service_tag RequestNaming#service_tag}
  */
  readonly serviceTag?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTag;
}

export function requestNamingConditionsConditionComparisonNumberRequestAttributeSourceToTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_zone: cdktf.stringToTerraform(struct!.managementZone),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    service_tag: requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToTerraform(struct!.serviceTag),
  }
}


export function requestNamingConditionsConditionComparisonNumberRequestAttributeSourceToHclTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_zone: {
      value: cdktf.stringToHclTerraform(struct!.managementZone),
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
    service_tag: {
      value: requestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToHclTerraform(struct!.serviceTag),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonNumberRequestAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZone = this._managementZone;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._serviceTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonNumberRequestAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementZone = undefined;
      this._unknowns = undefined;
      this._serviceTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementZone = value.managementZone;
      this._unknowns = value.unknowns;
      this._serviceTag.internalValue = value.serviceTag;
    }
  }

  // management_zone - computed: false, optional: true, required: false
  private _managementZone?: string; 
  public get managementZone() {
    return this.getStringAttribute('management_zone');
  }
  public set managementZone(value: string) {
    this._managementZone = value;
  }
  public resetManagementZone() {
    this._managementZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone;
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

  // service_tag - computed: false, optional: true, required: false
  private _serviceTag = new RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference(this, "service_tag");
  public get serviceTag() {
    return this._serviceTag;
  }
  public putServiceTag(value: RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceServiceTag) {
    this._serviceTag.internalValue = value;
  }
  public resetServiceTag() {
    this._serviceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag.internalValue;
  }
}
export interface RequestNamingConditionsConditionComparisonNumberRequestAttribute {
  /**
  * If `true`, the request attribute is matched on child service calls. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#match_on_child_calls RequestNaming#match_on_child_calls}
  */
  readonly matchOnChildCalls?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF`, `EXISTS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `LOWER_THAN` and `LOWER_THAN_OR_EQUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * No documentation available for this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#request_attribute RequestNaming#request_attribute}
  */
  readonly requestAttribute: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: number;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: number[];
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#source RequestNaming#source}
  */
  readonly source?: RequestNamingConditionsConditionComparisonNumberRequestAttributeSource;
}

export function requestNamingConditionsConditionComparisonNumberRequestAttributeToTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_on_child_calls: cdktf.booleanToTerraform(struct!.matchOnChildCalls),
    operator: cdktf.stringToTerraform(struct!.operator),
    request_attribute: cdktf.stringToTerraform(struct!.requestAttribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.values),
    source: requestNamingConditionsConditionComparisonNumberRequestAttributeSourceToTerraform(struct!.source),
  }
}


export function requestNamingConditionsConditionComparisonNumberRequestAttributeToHclTerraform(struct?: RequestNamingConditionsConditionComparisonNumberRequestAttributeOutputReference | RequestNamingConditionsConditionComparisonNumberRequestAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_on_child_calls: {
      value: cdktf.booleanToHclTerraform(struct!.matchOnChildCalls),
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
    request_attribute: {
      value: cdktf.stringToHclTerraform(struct!.requestAttribute),
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    source: {
      value: requestNamingConditionsConditionComparisonNumberRequestAttributeSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonNumberRequestAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonNumberRequestAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchOnChildCalls !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOnChildCalls = this._matchOnChildCalls;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._requestAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAttribute = this._requestAttribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonNumberRequestAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchOnChildCalls = undefined;
      this._operator = undefined;
      this._requestAttribute = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchOnChildCalls = value.matchOnChildCalls;
      this._operator = value.operator;
      this._requestAttribute = value.requestAttribute;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
      this._source.internalValue = value.source;
    }
  }

  // match_on_child_calls - computed: false, optional: true, required: false
  private _matchOnChildCalls?: boolean | cdktf.IResolvable; 
  public get matchOnChildCalls() {
    return this.getBooleanAttribute('match_on_child_calls');
  }
  public set matchOnChildCalls(value: boolean | cdktf.IResolvable) {
    this._matchOnChildCalls = value;
  }
  public resetMatchOnChildCalls() {
    this._matchOnChildCalls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOnChildCallsInput() {
    return this._matchOnChildCalls;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // request_attribute - computed: false, optional: false, required: true
  private _requestAttribute?: string; 
  public get requestAttribute() {
    return this.getStringAttribute('request_attribute');
  }
  public set requestAttribute(value: string) {
    this._requestAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAttributeInput() {
    return this._requestAttribute;
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

  // values - computed: false, optional: true, required: false
  private _values?: number[]; 
  public get values() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('values')));
  }
  public set values(value: number[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // source - computed: false, optional: true, required: false
  private _source = new RequestNamingConditionsConditionComparisonNumberRequestAttributeSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RequestNamingConditionsConditionComparisonNumberRequestAttributeSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface RequestNamingConditionsConditionComparisonServiceType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `BACKGROUND_ACTIVITY`, `CICS_SERVICE`, `CUSTOM_SERVICE`, `DATABASE_SERVICE`, `ENTERPRISE_SERVICE_BUS_SERVICE`, `EXTERNAL`, `IBM_INTEGRATION_BUS_SERVICE`, `IMS_SERVICE`, `MESSAGING_SERVICE`, `RMI_SERVICE`, `RPC_SERVICE`, `WEB_REQUEST_SERVICE` and `WEB_SERVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `BACKGROUND_ACTIVITY`, `CICS_SERVICE`, `CUSTOM_SERVICE`, `DATABASE_SERVICE`, `ENTERPRISE_SERVICE_BUS_SERVICE`, `EXTERNAL`, `IBM_INTEGRATION_BUS_SERVICE`, `IMS_SERVICE`, `MESSAGING_SERVICE`, `RMI_SERVICE`, `RPC_SERVICE`, `WEB_REQUEST_SERVICE` and `WEB_SERVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonServiceTypeToTerraform(struct?: RequestNamingConditionsConditionComparisonServiceTypeOutputReference | RequestNamingConditionsConditionComparisonServiceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonServiceTypeToHclTerraform(struct?: RequestNamingConditionsConditionComparisonServiceTypeOutputReference | RequestNamingConditionsConditionComparisonServiceType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonServiceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonServiceType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonServiceType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonString {
  /**
  * The comparison is case-sensitive (`true`) or not case-sensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#case_sensitive RequestNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `BEGINS_WITH`, `BEGINS_WITH_ANY_OF`, `CONTAINS`, `ENDS_WITH`, `ENDS_WITH_ANY_OF`, `EQUALS`, `EQUALS_ANY_OF`, `EXISTS` and `REGEX_MATCHES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonStringToTerraform(struct?: RequestNamingConditionsConditionComparisonStringOutputReference | RequestNamingConditionsConditionComparisonString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonStringToHclTerraform(struct?: RequestNamingConditionsConditionComparisonStringOutputReference | RequestNamingConditionsConditionComparisonString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey {
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context?: string;
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key?: string;
}

export function requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTag {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. For custom tags use the `CONTEXTLESS` value. The context is set for tags that are automatically imported by OneAgent (for example, from the AWS console or environment variables). It’s useful for determining the origin of tags when not manually defined, and it also helps to prevent clashes with other existing tags. If the tag is not automatically imported, `CONTEXTLESS` set. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_COMPUTE_ENGINE` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context?: string;
  /**
  * The key of the tag. For custom tags, put the tag value here. The key allows categorization of multiple tags. It is possible that there are multiple values for a single key which will all be represented as standalone tags. Therefore, the key does not have the semantic of a map key but is more like a key of a key-value tuple. In some cases, for example custom tags, the key represents the actual tag value and the value field is not set – those are called valueless tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags. If a tag does have a separate key and value (in the textual representation they are split by the colon ‘:’), this field is set with the actual value. Key-value pairs can occur for automatically imported tags and tags set by rules if extractors are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * tag_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#tag_key RequestNaming#tag_key}
  */
  readonly tagKey?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey;
}

export function requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagToTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    tag_key: requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToTerraform(struct!.tagKey),
  }
}


export function requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagToHclTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    tag_key: {
      value: requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct!.tagKey),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._tagKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._value = undefined;
      this._tagKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._value = value.value;
      this._tagKey.internalValue = value.tagKey;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // tag_key - computed: false, optional: true, required: false
  private _tagKey = new RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference(this, "tag_key");
  public get tagKey() {
    return this._tagKey;
  }
  public putTagKey(value: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey) {
    this._tagKey.internalValue = value;
  }
  public resetTagKey() {
    this._tagKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey.internalValue;
  }
}
export interface RequestNamingConditionsConditionComparisonStringRequestAttributeSource {
  /**
  * Use only request attributes from services that belong to this management zone.. Use either this or `serviceTag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#management_zone RequestNaming#management_zone}
  */
  readonly managementZone?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * service_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#service_tag RequestNaming#service_tag}
  */
  readonly serviceTag?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTag;
}

export function requestNamingConditionsConditionComparisonStringRequestAttributeSourceToTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_zone: cdktf.stringToTerraform(struct!.managementZone),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    service_tag: requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagToTerraform(struct!.serviceTag),
  }
}


export function requestNamingConditionsConditionComparisonStringRequestAttributeSourceToHclTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_zone: {
      value: cdktf.stringToHclTerraform(struct!.managementZone),
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
    service_tag: {
      value: requestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagToHclTerraform(struct!.serviceTag),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonStringRequestAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonStringRequestAttributeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZone = this._managementZone;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._serviceTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonStringRequestAttributeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementZone = undefined;
      this._unknowns = undefined;
      this._serviceTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementZone = value.managementZone;
      this._unknowns = value.unknowns;
      this._serviceTag.internalValue = value.serviceTag;
    }
  }

  // management_zone - computed: false, optional: true, required: false
  private _managementZone?: string; 
  public get managementZone() {
    return this.getStringAttribute('management_zone');
  }
  public set managementZone(value: string) {
    this._managementZone = value;
  }
  public resetManagementZone() {
    this._managementZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone;
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

  // service_tag - computed: false, optional: true, required: false
  private _serviceTag = new RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference(this, "service_tag");
  public get serviceTag() {
    return this._serviceTag;
  }
  public putServiceTag(value: RequestNamingConditionsConditionComparisonStringRequestAttributeSourceServiceTag) {
    this._serviceTag.internalValue = value;
  }
  public resetServiceTag() {
    this._serviceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag.internalValue;
  }
}
export interface RequestNamingConditionsConditionComparisonStringRequestAttribute {
  /**
  * The comparison is case-sensitive (`true`) or not case-sensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#case_sensitive RequestNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the request attribute is matched on child service calls. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#match_on_child_calls RequestNaming#match_on_child_calls}
  */
  readonly matchOnChildCalls?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `BEGINS_WITH`, `BEGINS_WITH_ANY_OF`, `CONTAINS`, `ENDS_WITH`, `ENDS_WITH_ANY_OF`, `EQUALS`, `EQUALS_ANY_OF`, `EXISTS` and `REGEX_MATCHES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * No documentation available for this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#request_attribute RequestNaming#request_attribute}
  */
  readonly requestAttribute: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#source RequestNaming#source}
  */
  readonly source?: RequestNamingConditionsConditionComparisonStringRequestAttributeSource;
}

export function requestNamingConditionsConditionComparisonStringRequestAttributeToTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    match_on_child_calls: cdktf.booleanToTerraform(struct!.matchOnChildCalls),
    operator: cdktf.stringToTerraform(struct!.operator),
    request_attribute: cdktf.stringToTerraform(struct!.requestAttribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
    source: requestNamingConditionsConditionComparisonStringRequestAttributeSourceToTerraform(struct!.source),
  }
}


export function requestNamingConditionsConditionComparisonStringRequestAttributeToHclTerraform(struct?: RequestNamingConditionsConditionComparisonStringRequestAttributeOutputReference | RequestNamingConditionsConditionComparisonStringRequestAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_on_child_calls: {
      value: cdktf.booleanToHclTerraform(struct!.matchOnChildCalls),
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
    request_attribute: {
      value: cdktf.stringToHclTerraform(struct!.requestAttribute),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source: {
      value: requestNamingConditionsConditionComparisonStringRequestAttributeSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonStringRequestAttributeSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonStringRequestAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonStringRequestAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._matchOnChildCalls !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOnChildCalls = this._matchOnChildCalls;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._requestAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAttribute = this._requestAttribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonStringRequestAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caseSensitive = undefined;
      this._matchOnChildCalls = undefined;
      this._operator = undefined;
      this._requestAttribute = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caseSensitive = value.caseSensitive;
      this._matchOnChildCalls = value.matchOnChildCalls;
      this._operator = value.operator;
      this._requestAttribute = value.requestAttribute;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
      this._source.internalValue = value.source;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // match_on_child_calls - computed: false, optional: true, required: false
  private _matchOnChildCalls?: boolean | cdktf.IResolvable; 
  public get matchOnChildCalls() {
    return this.getBooleanAttribute('match_on_child_calls');
  }
  public set matchOnChildCalls(value: boolean | cdktf.IResolvable) {
    this._matchOnChildCalls = value;
  }
  public resetMatchOnChildCalls() {
    this._matchOnChildCalls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOnChildCallsInput() {
    return this._matchOnChildCalls;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // request_attribute - computed: false, optional: false, required: true
  private _requestAttribute?: string; 
  public get requestAttribute() {
    return this.getStringAttribute('request_attribute');
  }
  public set requestAttribute(value: string) {
    this._requestAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAttributeInput() {
    return this._requestAttribute;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // source - computed: false, optional: true, required: false
  private _source = new RequestNamingConditionsConditionComparisonStringRequestAttributeSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RequestNamingConditionsConditionComparisonStringRequestAttributeSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface RequestNamingConditionsConditionComparisonTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_CLOUD` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
}

export function requestNamingConditionsConditionComparisonTagValueToTerraform(struct?: RequestNamingConditionsConditionComparisonTagValueOutputReference | RequestNamingConditionsConditionComparisonTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function requestNamingConditionsConditionComparisonTagValueToHclTerraform(struct?: RequestNamingConditionsConditionComparisonTagValueOutputReference | RequestNamingConditionsConditionComparisonTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class RequestNamingConditionsConditionComparisonTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: RequestNamingConditionsConditionComparisonTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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
export interface RequestNamingConditionsConditionComparisonTagValuesValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_CLOUD` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
}

export function requestNamingConditionsConditionComparisonTagValuesValueToTerraform(struct?: RequestNamingConditionsConditionComparisonTagValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function requestNamingConditionsConditionComparisonTagValuesValueToHclTerraform(struct?: RequestNamingConditionsConditionComparisonTagValuesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class RequestNamingConditionsConditionComparisonTagValuesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestNamingConditionsConditionComparisonTagValuesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
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

  public set internalValue(value: RequestNamingConditionsConditionComparisonTagValuesValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class RequestNamingConditionsConditionComparisonTagValuesValueList extends cdktf.ComplexList {
  public internalValue? : RequestNamingConditionsConditionComparisonTagValuesValue[] | cdktf.IResolvable

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
  public get(index: number): RequestNamingConditionsConditionComparisonTagValuesValueOutputReference {
    return new RequestNamingConditionsConditionComparisonTagValuesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestNamingConditionsConditionComparisonTagValues {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: RequestNamingConditionsConditionComparisonTagValuesValue[] | cdktf.IResolvable;
}

export function requestNamingConditionsConditionComparisonTagValuesToTerraform(struct?: RequestNamingConditionsConditionComparisonTagValuesOutputReference | RequestNamingConditionsConditionComparisonTagValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.listMapper(requestNamingConditionsConditionComparisonTagValuesValueToTerraform, true)(struct!.value),
  }
}


export function requestNamingConditionsConditionComparisonTagValuesToHclTerraform(struct?: RequestNamingConditionsConditionComparisonTagValuesOutputReference | RequestNamingConditionsConditionComparisonTagValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.listMapperHcl(requestNamingConditionsConditionComparisonTagValuesValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonTagValuesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonTagValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonTagValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonTagValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value.internalValue = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value = new RequestNamingConditionsConditionComparisonTagValuesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: RequestNamingConditionsConditionComparisonTagValuesValue[] | cdktf.IResolvable) {
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
export interface RequestNamingConditionsConditionComparisonTag {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF`, `TAG_KEY_EQUALS` and `TAG_KEY_EQUALS_ANY_OF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: RequestNamingConditionsConditionComparisonTagValue;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: RequestNamingConditionsConditionComparisonTagValues;
}

export function requestNamingConditionsConditionComparisonTagToTerraform(struct?: RequestNamingConditionsConditionComparisonTagOutputReference | RequestNamingConditionsConditionComparisonTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: requestNamingConditionsConditionComparisonTagValueToTerraform(struct!.value),
    values: requestNamingConditionsConditionComparisonTagValuesToTerraform(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonTagToHclTerraform(struct?: RequestNamingConditionsConditionComparisonTagOutputReference | RequestNamingConditionsConditionComparisonTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
      value: requestNamingConditionsConditionComparisonTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonTagValueList",
    },
    values: {
      value: requestNamingConditionsConditionComparisonTagValuesToHclTerraform(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonTagValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
      this._values.internalValue = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // value - computed: false, optional: true, required: false
  private _value = new RequestNamingConditionsConditionComparisonTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: RequestNamingConditionsConditionComparisonTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new RequestNamingConditionsConditionComparisonTagValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: RequestNamingConditionsConditionComparisonTagValues) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface RequestNamingConditionsConditionComparisonZosCallType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#operator RequestNaming#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CTG`, `DPL`, `EXPLICIT_ADK`, `IMS_CONNECT`, `IMS_CONNECT_API`, `IMS_ITRA`, `IMS_MSC`, `IMS_PGM_SWITCH`, `IMS_SHARED_QUEUES`, `IMS_TRANS_EXEC`, `MQ`, `SOAP`, `START`, `TX` and `UNKNOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CTG`, `DPL`, `EXPLICIT_ADK`, `IMS_CONNECT`, `IMS_CONNECT_API`, `IMS_ITRA`, `IMS_MSC`, `IMS_PGM_SWITCH`, `IMS_SHARED_QUEUES`, `IMS_TRANS_EXEC`, `MQ`, `SOAP`, `START`, `TX` and `UNKNOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#values RequestNaming#values}
  */
  readonly values?: string[];
}

export function requestNamingConditionsConditionComparisonZosCallTypeToTerraform(struct?: RequestNamingConditionsConditionComparisonZosCallTypeOutputReference | RequestNamingConditionsConditionComparisonZosCallType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function requestNamingConditionsConditionComparisonZosCallTypeToHclTerraform(struct?: RequestNamingConditionsConditionComparisonZosCallTypeOutputReference | RequestNamingConditionsConditionComparisonZosCallType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonZosCallTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparisonZosCallType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparisonZosCallType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface RequestNamingConditionsConditionComparison {
  /**
  * Reverse the comparison **operator**. For example, it turns **equals** into **does not equal**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#negate RequestNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * boolean block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#boolean RequestNaming#boolean}
  */
  readonly boolean?: RequestNamingConditionsConditionComparisonBoolean;
  /**
  * esb_input_node_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#esb_input_node_type RequestNaming#esb_input_node_type}
  */
  readonly esbInputNodeType?: RequestNamingConditionsConditionComparisonEsbInputNodeType;
  /**
  * failed_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#failed_state RequestNaming#failed_state}
  */
  readonly failedState?: RequestNamingConditionsConditionComparisonFailedState;
  /**
  * failure_reason block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#failure_reason RequestNaming#failure_reason}
  */
  readonly failureReason?: RequestNamingConditionsConditionComparisonFailureReason;
  /**
  * fast_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#fast_string RequestNaming#fast_string}
  */
  readonly fastString?: RequestNamingConditionsConditionComparisonFastString;
  /**
  * flaw_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#flaw_state RequestNaming#flaw_state}
  */
  readonly flawState?: RequestNamingConditionsConditionComparisonFlawState;
  /**
  * generic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#generic RequestNaming#generic}
  */
  readonly generic?: RequestNamingConditionsConditionComparisonGeneric;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#http_method RequestNaming#http_method}
  */
  readonly httpMethod?: RequestNamingConditionsConditionComparisonHttpMethod;
  /**
  * http_status_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#http_status_class RequestNaming#http_status_class}
  */
  readonly httpStatusClass?: RequestNamingConditionsConditionComparisonHttpStatusClass;
  /**
  * iib_input_node_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#iib_input_node_type RequestNaming#iib_input_node_type}
  */
  readonly iibInputNodeType?: RequestNamingConditionsConditionComparisonIibInputNodeType;
  /**
  * number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#number RequestNaming#number}
  */
  readonly number?: RequestNamingConditionsConditionComparisonNumber;
  /**
  * number_request_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#number_request_attribute RequestNaming#number_request_attribute}
  */
  readonly numberRequestAttribute?: RequestNamingConditionsConditionComparisonNumberRequestAttribute;
  /**
  * service_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#service_type RequestNaming#service_type}
  */
  readonly serviceType?: RequestNamingConditionsConditionComparisonServiceType;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#string RequestNaming#string}
  */
  readonly string?: RequestNamingConditionsConditionComparisonString;
  /**
  * string_request_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#string_request_attribute RequestNaming#string_request_attribute}
  */
  readonly stringRequestAttribute?: RequestNamingConditionsConditionComparisonStringRequestAttribute;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#tag RequestNaming#tag}
  */
  readonly tag?: RequestNamingConditionsConditionComparisonTag;
  /**
  * zos_call_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#zos_call_type RequestNaming#zos_call_type}
  */
  readonly zosCallType?: RequestNamingConditionsConditionComparisonZosCallType;
}

export function requestNamingConditionsConditionComparisonToTerraform(struct?: RequestNamingConditionsConditionComparisonOutputReference | RequestNamingConditionsConditionComparison): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    boolean: requestNamingConditionsConditionComparisonBooleanToTerraform(struct!.boolean),
    esb_input_node_type: requestNamingConditionsConditionComparisonEsbInputNodeTypeToTerraform(struct!.esbInputNodeType),
    failed_state: requestNamingConditionsConditionComparisonFailedStateToTerraform(struct!.failedState),
    failure_reason: requestNamingConditionsConditionComparisonFailureReasonToTerraform(struct!.failureReason),
    fast_string: requestNamingConditionsConditionComparisonFastStringToTerraform(struct!.fastString),
    flaw_state: requestNamingConditionsConditionComparisonFlawStateToTerraform(struct!.flawState),
    generic: requestNamingConditionsConditionComparisonGenericToTerraform(struct!.generic),
    http_method: requestNamingConditionsConditionComparisonHttpMethodToTerraform(struct!.httpMethod),
    http_status_class: requestNamingConditionsConditionComparisonHttpStatusClassToTerraform(struct!.httpStatusClass),
    iib_input_node_type: requestNamingConditionsConditionComparisonIibInputNodeTypeToTerraform(struct!.iibInputNodeType),
    number: requestNamingConditionsConditionComparisonNumberToTerraform(struct!.number),
    number_request_attribute: requestNamingConditionsConditionComparisonNumberRequestAttributeToTerraform(struct!.numberRequestAttribute),
    service_type: requestNamingConditionsConditionComparisonServiceTypeToTerraform(struct!.serviceType),
    string: requestNamingConditionsConditionComparisonStringToTerraform(struct!.string),
    string_request_attribute: requestNamingConditionsConditionComparisonStringRequestAttributeToTerraform(struct!.stringRequestAttribute),
    tag: requestNamingConditionsConditionComparisonTagToTerraform(struct!.tag),
    zos_call_type: requestNamingConditionsConditionComparisonZosCallTypeToTerraform(struct!.zosCallType),
  }
}


export function requestNamingConditionsConditionComparisonToHclTerraform(struct?: RequestNamingConditionsConditionComparisonOutputReference | RequestNamingConditionsConditionComparison): any {
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
    boolean: {
      value: requestNamingConditionsConditionComparisonBooleanToHclTerraform(struct!.boolean),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonBooleanList",
    },
    esb_input_node_type: {
      value: requestNamingConditionsConditionComparisonEsbInputNodeTypeToHclTerraform(struct!.esbInputNodeType),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonEsbInputNodeTypeList",
    },
    failed_state: {
      value: requestNamingConditionsConditionComparisonFailedStateToHclTerraform(struct!.failedState),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonFailedStateList",
    },
    failure_reason: {
      value: requestNamingConditionsConditionComparisonFailureReasonToHclTerraform(struct!.failureReason),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonFailureReasonList",
    },
    fast_string: {
      value: requestNamingConditionsConditionComparisonFastStringToHclTerraform(struct!.fastString),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonFastStringList",
    },
    flaw_state: {
      value: requestNamingConditionsConditionComparisonFlawStateToHclTerraform(struct!.flawState),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonFlawStateList",
    },
    generic: {
      value: requestNamingConditionsConditionComparisonGenericToHclTerraform(struct!.generic),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonGenericList",
    },
    http_method: {
      value: requestNamingConditionsConditionComparisonHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonHttpMethodList",
    },
    http_status_class: {
      value: requestNamingConditionsConditionComparisonHttpStatusClassToHclTerraform(struct!.httpStatusClass),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonHttpStatusClassList",
    },
    iib_input_node_type: {
      value: requestNamingConditionsConditionComparisonIibInputNodeTypeToHclTerraform(struct!.iibInputNodeType),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonIibInputNodeTypeList",
    },
    number: {
      value: requestNamingConditionsConditionComparisonNumberToHclTerraform(struct!.number),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonNumberList",
    },
    number_request_attribute: {
      value: requestNamingConditionsConditionComparisonNumberRequestAttributeToHclTerraform(struct!.numberRequestAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonNumberRequestAttributeList",
    },
    service_type: {
      value: requestNamingConditionsConditionComparisonServiceTypeToHclTerraform(struct!.serviceType),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonServiceTypeList",
    },
    string: {
      value: requestNamingConditionsConditionComparisonStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonStringList",
    },
    string_request_attribute: {
      value: requestNamingConditionsConditionComparisonStringRequestAttributeToHclTerraform(struct!.stringRequestAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonStringRequestAttributeList",
    },
    tag: {
      value: requestNamingConditionsConditionComparisonTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonTagList",
    },
    zos_call_type: {
      value: requestNamingConditionsConditionComparisonZosCallTypeToHclTerraform(struct!.zosCallType),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonZosCallTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditionsConditionComparison | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._boolean?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean?.internalValue;
    }
    if (this._esbInputNodeType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.esbInputNodeType = this._esbInputNodeType?.internalValue;
    }
    if (this._failedState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedState = this._failedState?.internalValue;
    }
    if (this._failureReason?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureReason = this._failureReason?.internalValue;
    }
    if (this._fastString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastString = this._fastString?.internalValue;
    }
    if (this._flawState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flawState = this._flawState?.internalValue;
    }
    if (this._generic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generic = this._generic?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._httpStatusClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatusClass = this._httpStatusClass?.internalValue;
    }
    if (this._iibInputNodeType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iibInputNodeType = this._iibInputNodeType?.internalValue;
    }
    if (this._number?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number?.internalValue;
    }
    if (this._numberRequestAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberRequestAttribute = this._numberRequestAttribute?.internalValue;
    }
    if (this._serviceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._stringRequestAttribute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringRequestAttribute = this._stringRequestAttribute?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._zosCallType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zosCallType = this._zosCallType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsConditionComparison | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._negate = undefined;
      this._boolean.internalValue = undefined;
      this._esbInputNodeType.internalValue = undefined;
      this._failedState.internalValue = undefined;
      this._failureReason.internalValue = undefined;
      this._fastString.internalValue = undefined;
      this._flawState.internalValue = undefined;
      this._generic.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._httpStatusClass.internalValue = undefined;
      this._iibInputNodeType.internalValue = undefined;
      this._number.internalValue = undefined;
      this._numberRequestAttribute.internalValue = undefined;
      this._serviceType.internalValue = undefined;
      this._string.internalValue = undefined;
      this._stringRequestAttribute.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._zosCallType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._negate = value.negate;
      this._boolean.internalValue = value.boolean;
      this._esbInputNodeType.internalValue = value.esbInputNodeType;
      this._failedState.internalValue = value.failedState;
      this._failureReason.internalValue = value.failureReason;
      this._fastString.internalValue = value.fastString;
      this._flawState.internalValue = value.flawState;
      this._generic.internalValue = value.generic;
      this._httpMethod.internalValue = value.httpMethod;
      this._httpStatusClass.internalValue = value.httpStatusClass;
      this._iibInputNodeType.internalValue = value.iibInputNodeType;
      this._number.internalValue = value.number;
      this._numberRequestAttribute.internalValue = value.numberRequestAttribute;
      this._serviceType.internalValue = value.serviceType;
      this._string.internalValue = value.string;
      this._stringRequestAttribute.internalValue = value.stringRequestAttribute;
      this._tag.internalValue = value.tag;
      this._zosCallType.internalValue = value.zosCallType;
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

  // boolean - computed: false, optional: true, required: false
  private _boolean = new RequestNamingConditionsConditionComparisonBooleanOutputReference(this, "boolean");
  public get boolean() {
    return this._boolean;
  }
  public putBoolean(value: RequestNamingConditionsConditionComparisonBoolean) {
    this._boolean.internalValue = value;
  }
  public resetBoolean() {
    this._boolean.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean.internalValue;
  }

  // esb_input_node_type - computed: false, optional: true, required: false
  private _esbInputNodeType = new RequestNamingConditionsConditionComparisonEsbInputNodeTypeOutputReference(this, "esb_input_node_type");
  public get esbInputNodeType() {
    return this._esbInputNodeType;
  }
  public putEsbInputNodeType(value: RequestNamingConditionsConditionComparisonEsbInputNodeType) {
    this._esbInputNodeType.internalValue = value;
  }
  public resetEsbInputNodeType() {
    this._esbInputNodeType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esbInputNodeTypeInput() {
    return this._esbInputNodeType.internalValue;
  }

  // failed_state - computed: false, optional: true, required: false
  private _failedState = new RequestNamingConditionsConditionComparisonFailedStateOutputReference(this, "failed_state");
  public get failedState() {
    return this._failedState;
  }
  public putFailedState(value: RequestNamingConditionsConditionComparisonFailedState) {
    this._failedState.internalValue = value;
  }
  public resetFailedState() {
    this._failedState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedStateInput() {
    return this._failedState.internalValue;
  }

  // failure_reason - computed: false, optional: true, required: false
  private _failureReason = new RequestNamingConditionsConditionComparisonFailureReasonOutputReference(this, "failure_reason");
  public get failureReason() {
    return this._failureReason;
  }
  public putFailureReason(value: RequestNamingConditionsConditionComparisonFailureReason) {
    this._failureReason.internalValue = value;
  }
  public resetFailureReason() {
    this._failureReason.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason.internalValue;
  }

  // fast_string - computed: false, optional: true, required: false
  private _fastString = new RequestNamingConditionsConditionComparisonFastStringOutputReference(this, "fast_string");
  public get fastString() {
    return this._fastString;
  }
  public putFastString(value: RequestNamingConditionsConditionComparisonFastString) {
    this._fastString.internalValue = value;
  }
  public resetFastString() {
    this._fastString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastStringInput() {
    return this._fastString.internalValue;
  }

  // flaw_state - computed: false, optional: true, required: false
  private _flawState = new RequestNamingConditionsConditionComparisonFlawStateOutputReference(this, "flaw_state");
  public get flawState() {
    return this._flawState;
  }
  public putFlawState(value: RequestNamingConditionsConditionComparisonFlawState) {
    this._flawState.internalValue = value;
  }
  public resetFlawState() {
    this._flawState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flawStateInput() {
    return this._flawState.internalValue;
  }

  // generic - computed: false, optional: true, required: false
  private _generic = new RequestNamingConditionsConditionComparisonGenericOutputReference(this, "generic");
  public get generic() {
    return this._generic;
  }
  public putGeneric(value: RequestNamingConditionsConditionComparisonGeneric) {
    this._generic.internalValue = value;
  }
  public resetGeneric() {
    this._generic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new RequestNamingConditionsConditionComparisonHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: RequestNamingConditionsConditionComparisonHttpMethod) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // http_status_class - computed: false, optional: true, required: false
  private _httpStatusClass = new RequestNamingConditionsConditionComparisonHttpStatusClassOutputReference(this, "http_status_class");
  public get httpStatusClass() {
    return this._httpStatusClass;
  }
  public putHttpStatusClass(value: RequestNamingConditionsConditionComparisonHttpStatusClass) {
    this._httpStatusClass.internalValue = value;
  }
  public resetHttpStatusClass() {
    this._httpStatusClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusClassInput() {
    return this._httpStatusClass.internalValue;
  }

  // iib_input_node_type - computed: false, optional: true, required: false
  private _iibInputNodeType = new RequestNamingConditionsConditionComparisonIibInputNodeTypeOutputReference(this, "iib_input_node_type");
  public get iibInputNodeType() {
    return this._iibInputNodeType;
  }
  public putIibInputNodeType(value: RequestNamingConditionsConditionComparisonIibInputNodeType) {
    this._iibInputNodeType.internalValue = value;
  }
  public resetIibInputNodeType() {
    this._iibInputNodeType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iibInputNodeTypeInput() {
    return this._iibInputNodeType.internalValue;
  }

  // number - computed: false, optional: true, required: false
  private _number = new RequestNamingConditionsConditionComparisonNumberOutputReference(this, "number");
  public get number() {
    return this._number;
  }
  public putNumber(value: RequestNamingConditionsConditionComparisonNumber) {
    this._number.internalValue = value;
  }
  public resetNumber() {
    this._number.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number.internalValue;
  }

  // number_request_attribute - computed: false, optional: true, required: false
  private _numberRequestAttribute = new RequestNamingConditionsConditionComparisonNumberRequestAttributeOutputReference(this, "number_request_attribute");
  public get numberRequestAttribute() {
    return this._numberRequestAttribute;
  }
  public putNumberRequestAttribute(value: RequestNamingConditionsConditionComparisonNumberRequestAttribute) {
    this._numberRequestAttribute.internalValue = value;
  }
  public resetNumberRequestAttribute() {
    this._numberRequestAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberRequestAttributeInput() {
    return this._numberRequestAttribute.internalValue;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType = new RequestNamingConditionsConditionComparisonServiceTypeOutputReference(this, "service_type");
  public get serviceType() {
    return this._serviceType;
  }
  public putServiceType(value: RequestNamingConditionsConditionComparisonServiceType) {
    this._serviceType.internalValue = value;
  }
  public resetServiceType() {
    this._serviceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new RequestNamingConditionsConditionComparisonStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: RequestNamingConditionsConditionComparisonString) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // string_request_attribute - computed: false, optional: true, required: false
  private _stringRequestAttribute = new RequestNamingConditionsConditionComparisonStringRequestAttributeOutputReference(this, "string_request_attribute");
  public get stringRequestAttribute() {
    return this._stringRequestAttribute;
  }
  public putStringRequestAttribute(value: RequestNamingConditionsConditionComparisonStringRequestAttribute) {
    this._stringRequestAttribute.internalValue = value;
  }
  public resetStringRequestAttribute() {
    this._stringRequestAttribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringRequestAttributeInput() {
    return this._stringRequestAttribute.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new RequestNamingConditionsConditionComparisonTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: RequestNamingConditionsConditionComparisonTag) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // zos_call_type - computed: false, optional: true, required: false
  private _zosCallType = new RequestNamingConditionsConditionComparisonZosCallTypeOutputReference(this, "zos_call_type");
  public get zosCallType() {
    return this._zosCallType;
  }
  public putZosCallType(value: RequestNamingConditionsConditionComparisonZosCallType) {
    this._zosCallType.internalValue = value;
  }
  public resetZosCallType() {
    this._zosCallType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zosCallTypeInput() {
    return this._zosCallType.internalValue;
  }
}
export interface RequestNamingConditionsCondition {
  /**
  * The attribute to be matched.  Note that for a service property attribute you must use the comparison of the `FAST_STRING` type. Possible values are `ACTOR_SYSTEM`, `AKKA_ACTOR_CLASS_NAME`, `AKKA_ACTOR_MESSAGE_TYPE`, `AKKA_ACTOR_PATH`, `APPLICATION_BUILD_VERSION`, `APPLICATION_RELEASE_VERSION`, `AZURE_FUNCTIONS_FUNCTION_NAME`, `AZURE_FUNCTIONS_SITE_NAME`, `CICS_PROGRAM_NAME`, `CICS_SYSTEM_ID`, `CICS_TASK_ID`, `CICS_TRANSACTION_ID`, `CICS_USER_ID`, `CPU_TIME`, `CTG_GATEWAY_URL`, `CTG_PROGRAM`, `CTG_SERVER_NAME`, `CTG_TRANSACTION_ID`, `CUSTOMSERVICE_CLASS`, `CUSTOMSERVICE_METHOD`, `DATABASE_CHILD_CALL_COUNT`, `DATABASE_CHILD_CALL_TIME`, `DATABASE_HOST`, `DATABASE_NAME`, `DATABASE_TYPE`, `DATABASE_URL`, `DISK_IO_TIME`, `ERROR_COUNT`, `ESB_APPLICATION_NAME`, `ESB_INPUT_TYPE`, `ESB_LIBRARY_NAME`, `ESB_MESSAGE_FLOW_NAME`, `EXCEPTION_CLASS`, `EXCEPTION_MESSAGE`, `FAILED_STATE`, `FAILURE_REASON`, `FLAW_STATE`, `HTTP_REQUEST_METHOD`, `HTTP_STATUS`, `HTTP_STATUS_CLASS`, `IMS_PROGRAM_NAME`, `IMS_TRANSACTION_ID`, `IMS_USER_ID`, `IO_TIME`, `IS_KEY_REQUEST`, `LAMBDA_COLDSTART`, `LOCK_TIME`, `MESSAGING_DESTINATION_TYPE`, `MESSAGING_IS_TEMPORARY_QUEUE`, `MESSAGING_QUEUE_NAME`, `MESSAGING_QUEUE_VENDOR`, `NETWORK_IO_TIME`, `NON_DATABASE_CHILD_CALL_COUNT`, `NON_DATABASE_CHILD_CALL_TIME`, `PROCESS_GROUP_NAME`, `PROCESS_GROUP_TAG`, `REMOTE_ENDPOINT`, `REMOTE_METHOD`, `REMOTE_SERVICE_NAME`, `REQUEST_NAME`, `REQUEST_TYPE`, `RESPONSE_TIME`, `RESPONSE_TIME_CLIENT`, `RMI_CLASS`, `RMI_METHOD`, `SERVICE_DISPLAY_NAME`, `SERVICE_NAME`, `SERVICE_PORT`, `SERVICE_PUBLIC_DOMAIN_NAME`, `SERVICE_REQUEST_ATTRIBUTE`, `SERVICE_TAG`, `SERVICE_TYPE`, `SERVICE_WEB_APPLICATION_ID`, `SERVICE_WEB_CONTEXT_ROOT`, `SERVICE_WEB_SERVER_NAME`, `SERVICE_WEB_SERVICE_NAME`, `SERVICE_WEB_SERVICE_NAMESPACE`, `SUSPENSION_TIME`, `TOTAL_PROCESSING_TIME`, `WAIT_TIME`, `WEBREQUEST_QUERY`, `WEBREQUEST_RELATIVE_URL`, `WEBREQUEST_URL`, `WEBREQUEST_URL_HOST`, `WEBREQUEST_URL_PATH`, `WEBREQUEST_URL_PORT`, `WEBSERVICE_ENDPOINT`, `WEBSERVICE_METHOD` and `ZOS_CALL_TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#attribute RequestNaming#attribute}
  */
  readonly attribute: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#comparison RequestNaming#comparison}
  */
  readonly comparison: RequestNamingConditionsConditionComparison;
}

export function requestNamingConditionsConditionToTerraform(struct?: RequestNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    comparison: requestNamingConditionsConditionComparisonToTerraform(struct!.comparison),
  }
}


export function requestNamingConditionsConditionToHclTerraform(struct?: RequestNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
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
    comparison: {
      value: requestNamingConditionsConditionComparisonToHclTerraform(struct!.comparison),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionComparisonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestNamingConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._comparison.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._comparison.internalValue = value.comparison;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
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

  // comparison - computed: false, optional: false, required: true
  private _comparison = new RequestNamingConditionsConditionComparisonOutputReference(this, "comparison");
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: RequestNamingConditionsConditionComparison) {
    this._comparison.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }
}

export class RequestNamingConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : RequestNamingConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): RequestNamingConditionsConditionOutputReference {
    return new RequestNamingConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestNamingConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#condition RequestNaming#condition}
  */
  readonly condition?: RequestNamingConditionsCondition[] | cdktf.IResolvable;
}

export function requestNamingConditionsToTerraform(struct?: RequestNamingConditionsOutputReference | RequestNamingConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(requestNamingConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function requestNamingConditionsToHclTerraform(struct?: RequestNamingConditionsOutputReference | RequestNamingConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(requestNamingConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new RequestNamingConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: RequestNamingConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKey {
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context?: string;
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key?: string;
}

export function requestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyToTerraform(struct?: RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference | RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function requestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyToHclTerraform(struct?: RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference | RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface RequestNamingPlaceholdersPlaceholderSourceServiceTag {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. For custom tags use the `CONTEXTLESS` value. The context is set for tags that are automatically imported by OneAgent (for example, from the AWS console or environment variables). It’s useful for determining the origin of tags when not manually defined, and it also helps to prevent clashes with other existing tags. If the tag is not automatically imported, `CONTEXTLESS` set. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_COMPUTE_ENGINE` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#context RequestNaming#context}
  */
  readonly context?: string;
  /**
  * The key of the tag. For custom tags, put the tag value here. The key allows categorization of multiple tags. It is possible that there are multiple values for a single key which will all be represented as standalone tags. Therefore, the key does not have the semantic of a map key but is more like a key of a key-value tuple. In some cases, for example custom tags, the key represents the actual tag value and the value field is not set – those are called valueless tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#key RequestNaming#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags. If a tag does have a separate key and value (in the textual representation they are split by the colon ‘:’), this field is set with the actual value. Key-value pairs can occur for automatically imported tags and tags set by rules if extractors are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#value RequestNaming#value}
  */
  readonly value?: string;
  /**
  * tag_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#tag_key RequestNaming#tag_key}
  */
  readonly tagKey?: RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKey;
}

export function requestNamingPlaceholdersPlaceholderSourceServiceTagToTerraform(struct?: RequestNamingPlaceholdersPlaceholderSourceServiceTagOutputReference | RequestNamingPlaceholdersPlaceholderSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    tag_key: requestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyToTerraform(struct!.tagKey),
  }
}


export function requestNamingPlaceholdersPlaceholderSourceServiceTagToHclTerraform(struct?: RequestNamingPlaceholdersPlaceholderSourceServiceTagOutputReference | RequestNamingPlaceholdersPlaceholderSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    tag_key: {
      value: requestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyToHclTerraform(struct!.tagKey),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingPlaceholdersPlaceholderSourceServiceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingPlaceholdersPlaceholderSourceServiceTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._tagKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingPlaceholdersPlaceholderSourceServiceTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._value = undefined;
      this._tagKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._value = value.value;
      this._tagKey.internalValue = value.tagKey;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // tag_key - computed: false, optional: true, required: false
  private _tagKey = new RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference(this, "tag_key");
  public get tagKey() {
    return this._tagKey;
  }
  public putTagKey(value: RequestNamingPlaceholdersPlaceholderSourceServiceTagTagKey) {
    this._tagKey.internalValue = value;
  }
  public resetTagKey() {
    this._tagKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey.internalValue;
  }
}
export interface RequestNamingPlaceholdersPlaceholderSource {
  /**
  * Use only request attributes from services that belong to this management zone.. Use either this or `serviceTag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#management_zone RequestNaming#management_zone}
  */
  readonly managementZone?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * service_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#service_tag RequestNaming#service_tag}
  */
  readonly serviceTag?: RequestNamingPlaceholdersPlaceholderSourceServiceTag;
}

export function requestNamingPlaceholdersPlaceholderSourceToTerraform(struct?: RequestNamingPlaceholdersPlaceholderSourceOutputReference | RequestNamingPlaceholdersPlaceholderSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_zone: cdktf.stringToTerraform(struct!.managementZone),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    service_tag: requestNamingPlaceholdersPlaceholderSourceServiceTagToTerraform(struct!.serviceTag),
  }
}


export function requestNamingPlaceholdersPlaceholderSourceToHclTerraform(struct?: RequestNamingPlaceholdersPlaceholderSourceOutputReference | RequestNamingPlaceholdersPlaceholderSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_zone: {
      value: cdktf.stringToHclTerraform(struct!.managementZone),
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
    service_tag: {
      value: requestNamingPlaceholdersPlaceholderSourceServiceTagToHclTerraform(struct!.serviceTag),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingPlaceholdersPlaceholderSourceServiceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingPlaceholdersPlaceholderSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingPlaceholdersPlaceholderSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZone = this._managementZone;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._serviceTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingPlaceholdersPlaceholderSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementZone = undefined;
      this._unknowns = undefined;
      this._serviceTag.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementZone = value.managementZone;
      this._unknowns = value.unknowns;
      this._serviceTag.internalValue = value.serviceTag;
    }
  }

  // management_zone - computed: false, optional: true, required: false
  private _managementZone?: string; 
  public get managementZone() {
    return this.getStringAttribute('management_zone');
  }
  public set managementZone(value: string) {
    this._managementZone = value;
  }
  public resetManagementZone() {
    this._managementZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone;
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

  // service_tag - computed: false, optional: true, required: false
  private _serviceTag = new RequestNamingPlaceholdersPlaceholderSourceServiceTagOutputReference(this, "service_tag");
  public get serviceTag() {
    return this._serviceTag;
  }
  public putServiceTag(value: RequestNamingPlaceholdersPlaceholderSourceServiceTag) {
    this._serviceTag.internalValue = value;
  }
  public resetServiceTag() {
    this._serviceTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag.internalValue;
  }
}
export interface RequestNamingPlaceholdersPlaceholder {
  /**
  * Which value of the request attribute must be used when it occurs across multiple child requests. Only applicable for the `SERVICE_REQUEST_ATTRIBUTE` attribute, when **useFromChildCalls** is `true`. For the `COUNT` aggregation, the **kind** field is not applicable. Possible values are `COUNT`, `FIRST` and `LAST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#aggregation RequestNaming#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The attribute to extract from. You can only use attributes of the **string** type. Possible values are `ACTOR_SYSTEM`, `AKKA_ACTOR_CLASS_NAME`, `AKKA_ACTOR_MESSAGE_TYPE`, `AKKA_ACTOR_PATH`, `APPLICATION_BUILD_VERSION`, `APPLICATION_RELEASE_VERSION`, `AZURE_FUNCTIONS_FUNCTION_NAME`, `AZURE_FUNCTIONS_SITE_NAME`, `CICS_PROGRAM_NAME`, `CICS_SYSTEM_ID`, `CICS_TASK_ID`, `CICS_TRANSACTION_ID`, `CICS_USER_ID`, `CPU_TIME`, `CTG_GATEWAY_URL`, `CTG_PROGRAM`, `CTG_SERVER_NAME`, `CTG_TRANSACTION_ID`, `CUSTOMSERVICE_CLASS`, `CUSTOMSERVICE_METHOD`, `DATABASE_CHILD_CALL_COUNT`, `DATABASE_CHILD_CALL_TIME`, `DATABASE_HOST`, `DATABASE_NAME`, `DATABASE_TYPE`, `DATABASE_URL`, `DISK_IO_TIME`, `ERROR_COUNT`, `ESB_APPLICATION_NAME`, `ESB_INPUT_TYPE`, `ESB_LIBRARY_NAME`, `ESB_MESSAGE_FLOW_NAME`, `EXCEPTION_CLASS`, `EXCEPTION_MESSAGE`, `FAILED_STATE`, `FAILURE_REASON`, `FLAW_STATE`, `HTTP_REQUEST_METHOD`, `HTTP_STATUS`, `HTTP_STATUS_CLASS`, `IMS_PROGRAM_NAME`, `IMS_TRANSACTION_ID`, `IMS_USER_ID`, `IO_TIME`, `IS_KEY_REQUEST`, `LAMBDA_COLDSTART`, `LOCK_TIME`, `MESSAGING_DESTINATION_TYPE`, `MESSAGING_IS_TEMPORARY_QUEUE`, `MESSAGING_QUEUE_NAME`, `MESSAGING_QUEUE_VENDOR`, `NETWORK_IO_TIME`, `NON_DATABASE_CHILD_CALL_COUNT`, `NON_DATABASE_CHILD_CALL_TIME`, `PROCESS_GROUP_NAME`, `PROCESS_GROUP_TAG`, `REMOTE_ENDPOINT`, `REMOTE_METHOD`, `REMOTE_SERVICE_NAME`, `REQUEST_NAME`, `REQUEST_TYPE`, `RESPONSE_TIME`, `RESPONSE_TIME_CLIENT`, `RMI_CLASS`, `RMI_METHOD`, `SERVICE_DISPLAY_NAME`, `SERVICE_NAME`, `SERVICE_PORT`, `SERVICE_PUBLIC_DOMAIN_NAME`, `SERVICE_REQUEST_ATTRIBUTE`, `SERVICE_TAG`, `SERVICE_TYPE`, `SERVICE_WEB_APPLICATION_ID`, `SERVICE_WEB_CONTEXT_ROOT`, `SERVICE_WEB_SERVER_NAME`, `SERVICE_WEB_SERVICE_NAME`, `SERVICE_WEB_SERVICE_NAMESPACE`, `SUSPENSION_TIME`, `TOTAL_PROCESSING_TIME`, `WAIT_TIME`, `WEBREQUEST_QUERY`, `WEBREQUEST_RELATIVE_URL`, `WEBREQUEST_URL`, `WEBREQUEST_URL_HOST`, `WEBREQUEST_URL_PATH`, `WEBREQUEST_URL_PORT`, `WEBSERVICE_ENDPOINT`, `WEBSERVICE_METHOD` and `ZOS_CALL_TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#attribute RequestNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Depending on the `kind` value:
  * 
  * 
  * * `REGEX_EXTRACTION`: The regular expression.
  * 
  * 
  * * `BETWEEN_DELIMITER`: The opening delimiter string to look for.
  * 
  * 
  * * All other values: The delimiter string to look for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#delimiter_or_regex RequestNaming#delimiter_or_regex}
  */
  readonly delimiterOrRegex?: string;
  /**
  * The closing delimiter string to look for. Required if the `kind` value is `BETWEEN_DELIMITER`. Not applicable otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#end_delimiter RequestNaming#end_delimiter}
  */
  readonly endDelimiter?: string;
  /**
  * The type of extraction. Defines either usage of regular expression (`regex`) or the position of request attribute value to be extracted. When the `attribute` is `SERVICE_REQUEST_ATTRIBUTE` attribute and `aggregation` is `COUNT`, needs to be set to `ORIGINAL_TEXT`. Possible values are 	`AFTER_DELIMITER`, `BEFORE_DELIMITER`, `BETWEEN_DELIMITER`, `ORIGINAL_TEXT` and `REGEX_EXTRACTION`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#kind RequestNaming#kind}
  */
  readonly kind: string;
  /**
  * The name of the placeholder. Use it in the naming pattern as `{name}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#name RequestNaming#name}
  */
  readonly name: string;
  /**
  * The format of the extracted string. Possible values are `ORIGINAL`, `TO_LOWER_CASE` and `TO_UPPER_CASE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#normalization RequestNaming#normalization}
  */
  readonly normalization?: string;
  /**
  * The One Agent attribute to extract from. Required if the kind value is `ONE_AGENT_ATTRIBUTE`. Not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#oneagent_attribute_key RequestNaming#oneagent_attribute_key}
  */
  readonly oneagentAttributeKey?: string;
  /**
  * The request attribute to extract from. Required if the `kind` value is `SERVICE_REQUEST_ATTRIBUTE`. Not applicable otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#request_attribute RequestNaming#request_attribute}
  */
  readonly requestAttribute?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#unknowns RequestNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * If `true` request attribute will be taken from a child service call. Only applicable for the `SERVICE_REQUEST_ATTRIBUTE` attribute. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#use_from_child_calls RequestNaming#use_from_child_calls}
  */
  readonly useFromChildCalls?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#source RequestNaming#source}
  */
  readonly source?: RequestNamingPlaceholdersPlaceholderSource;
}

export function requestNamingPlaceholdersPlaceholderToTerraform(struct?: RequestNamingPlaceholdersPlaceholder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    attribute: cdktf.stringToTerraform(struct!.attribute),
    delimiter_or_regex: cdktf.stringToTerraform(struct!.delimiterOrRegex),
    end_delimiter: cdktf.stringToTerraform(struct!.endDelimiter),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    normalization: cdktf.stringToTerraform(struct!.normalization),
    oneagent_attribute_key: cdktf.stringToTerraform(struct!.oneagentAttributeKey),
    request_attribute: cdktf.stringToTerraform(struct!.requestAttribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    use_from_child_calls: cdktf.booleanToTerraform(struct!.useFromChildCalls),
    source: requestNamingPlaceholdersPlaceholderSourceToTerraform(struct!.source),
  }
}


export function requestNamingPlaceholdersPlaceholderToHclTerraform(struct?: RequestNamingPlaceholdersPlaceholder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delimiter_or_regex: {
      value: cdktf.stringToHclTerraform(struct!.delimiterOrRegex),
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    normalization: {
      value: cdktf.stringToHclTerraform(struct!.normalization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oneagent_attribute_key: {
      value: cdktf.stringToHclTerraform(struct!.oneagentAttributeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_attribute: {
      value: cdktf.stringToHclTerraform(struct!.requestAttribute),
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
    use_from_child_calls: {
      value: cdktf.booleanToHclTerraform(struct!.useFromChildCalls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: requestNamingPlaceholdersPlaceholderSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingPlaceholdersPlaceholderSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingPlaceholdersPlaceholderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RequestNamingPlaceholdersPlaceholder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._delimiterOrRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiterOrRegex = this._delimiterOrRegex;
    }
    if (this._endDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDelimiter = this._endDelimiter;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._normalization !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalization = this._normalization;
    }
    if (this._oneagentAttributeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneagentAttributeKey = this._oneagentAttributeKey;
    }
    if (this._requestAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAttribute = this._requestAttribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._useFromChildCalls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useFromChildCalls = this._useFromChildCalls;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingPlaceholdersPlaceholder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._attribute = undefined;
      this._delimiterOrRegex = undefined;
      this._endDelimiter = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._normalization = undefined;
      this._oneagentAttributeKey = undefined;
      this._requestAttribute = undefined;
      this._unknowns = undefined;
      this._useFromChildCalls = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._attribute = value.attribute;
      this._delimiterOrRegex = value.delimiterOrRegex;
      this._endDelimiter = value.endDelimiter;
      this._kind = value.kind;
      this._name = value.name;
      this._normalization = value.normalization;
      this._oneagentAttributeKey = value.oneagentAttributeKey;
      this._requestAttribute = value.requestAttribute;
      this._unknowns = value.unknowns;
      this._useFromChildCalls = value.useFromChildCalls;
      this._source.internalValue = value.source;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // delimiter_or_regex - computed: false, optional: true, required: false
  private _delimiterOrRegex?: string; 
  public get delimiterOrRegex() {
    return this.getStringAttribute('delimiter_or_regex');
  }
  public set delimiterOrRegex(value: string) {
    this._delimiterOrRegex = value;
  }
  public resetDelimiterOrRegex() {
    this._delimiterOrRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterOrRegexInput() {
    return this._delimiterOrRegex;
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

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // normalization - computed: false, optional: true, required: false
  private _normalization?: string; 
  public get normalization() {
    return this.getStringAttribute('normalization');
  }
  public set normalization(value: string) {
    this._normalization = value;
  }
  public resetNormalization() {
    this._normalization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizationInput() {
    return this._normalization;
  }

  // oneagent_attribute_key - computed: false, optional: true, required: false
  private _oneagentAttributeKey?: string; 
  public get oneagentAttributeKey() {
    return this.getStringAttribute('oneagent_attribute_key');
  }
  public set oneagentAttributeKey(value: string) {
    this._oneagentAttributeKey = value;
  }
  public resetOneagentAttributeKey() {
    this._oneagentAttributeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneagentAttributeKeyInput() {
    return this._oneagentAttributeKey;
  }

  // request_attribute - computed: false, optional: true, required: false
  private _requestAttribute?: string; 
  public get requestAttribute() {
    return this.getStringAttribute('request_attribute');
  }
  public set requestAttribute(value: string) {
    this._requestAttribute = value;
  }
  public resetRequestAttribute() {
    this._requestAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAttributeInput() {
    return this._requestAttribute;
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

  // use_from_child_calls - computed: false, optional: true, required: false
  private _useFromChildCalls?: boolean | cdktf.IResolvable; 
  public get useFromChildCalls() {
    return this.getBooleanAttribute('use_from_child_calls');
  }
  public set useFromChildCalls(value: boolean | cdktf.IResolvable) {
    this._useFromChildCalls = value;
  }
  public resetUseFromChildCalls() {
    this._useFromChildCalls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFromChildCallsInput() {
    return this._useFromChildCalls;
  }

  // source - computed: false, optional: true, required: false
  private _source = new RequestNamingPlaceholdersPlaceholderSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: RequestNamingPlaceholdersPlaceholderSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}

export class RequestNamingPlaceholdersPlaceholderList extends cdktf.ComplexList {
  public internalValue? : RequestNamingPlaceholdersPlaceholder[] | cdktf.IResolvable

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
  public get(index: number): RequestNamingPlaceholdersPlaceholderOutputReference {
    return new RequestNamingPlaceholdersPlaceholderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RequestNamingPlaceholders {
  /**
  * placeholder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#placeholder RequestNaming#placeholder}
  */
  readonly placeholder?: RequestNamingPlaceholdersPlaceholder[] | cdktf.IResolvable;
}

export function requestNamingPlaceholdersToTerraform(struct?: RequestNamingPlaceholdersOutputReference | RequestNamingPlaceholders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder: cdktf.listMapper(requestNamingPlaceholdersPlaceholderToTerraform, true)(struct!.placeholder),
  }
}


export function requestNamingPlaceholdersToHclTerraform(struct?: RequestNamingPlaceholdersOutputReference | RequestNamingPlaceholders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    placeholder: {
      value: cdktf.listMapperHcl(requestNamingPlaceholdersPlaceholderToHclTerraform, true)(struct!.placeholder),
      isBlock: true,
      type: "list",
      storageClassType: "RequestNamingPlaceholdersPlaceholderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RequestNamingPlaceholdersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RequestNamingPlaceholders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholder = this._placeholder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RequestNamingPlaceholders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._placeholder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._placeholder.internalValue = value.placeholder;
    }
  }

  // placeholder - computed: false, optional: true, required: false
  private _placeholder = new RequestNamingPlaceholdersPlaceholderList(this, "placeholder", false);
  public get placeholder() {
    return this._placeholder;
  }
  public putPlaceholder(value: RequestNamingPlaceholdersPlaceholder[] | cdktf.IResolvable) {
    this._placeholder.internalValue = value;
  }
  public resetPlaceholder() {
    this._placeholder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderInput() {
    return this._placeholder.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming dynatrace_request_naming}
*/
export class RequestNaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_request_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RequestNaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RequestNaming to import
  * @param importFromId The id of the existing RequestNaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RequestNaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_request_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/request_naming dynatrace_request_naming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestNamingConfig
  */
  public constructor(scope: Construct, id: string, config: RequestNamingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_request_naming',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._managementZones = config.managementZones;
    this._namingPattern = config.namingPattern;
    this._unknowns = config.unknowns;
    this._conditions.internalValue = config.conditions;
    this._placeholders.internalValue = config.placeholders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // management_zones - computed: false, optional: true, required: false
  private _managementZones?: string[]; 
  public get managementZones() {
    return cdktf.Fn.tolist(this.getListAttribute('management_zones'));
  }
  public set managementZones(value: string[]) {
    this._managementZones = value;
  }
  public resetManagementZones() {
    this._managementZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZonesInput() {
    return this._managementZones;
  }

  // naming_pattern - computed: false, optional: false, required: true
  private _namingPattern?: string; 
  public get namingPattern() {
    return this.getStringAttribute('naming_pattern');
  }
  public set namingPattern(value: string) {
    this._namingPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namingPatternInput() {
    return this._namingPattern;
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

  // conditions - computed: false, optional: false, required: true
  private _conditions = new RequestNamingConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RequestNamingConditions) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // placeholders - computed: false, optional: true, required: false
  private _placeholders = new RequestNamingPlaceholdersOutputReference(this, "placeholders");
  public get placeholders() {
    return this._placeholders;
  }
  public putPlaceholders(value: RequestNamingPlaceholders) {
    this._placeholders.internalValue = value;
  }
  public resetPlaceholders() {
    this._placeholders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholdersInput() {
    return this._placeholders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      management_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementZones),
      naming_pattern: cdktf.stringToTerraform(this._namingPattern),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      conditions: requestNamingConditionsToTerraform(this._conditions.internalValue),
      placeholders: requestNamingPlaceholdersToTerraform(this._placeholders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      management_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      naming_pattern: {
        value: cdktf.stringToHclTerraform(this._namingPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: requestNamingConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RequestNamingConditionsList",
      },
      placeholders: {
        value: requestNamingPlaceholdersToHclTerraform(this._placeholders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RequestNamingPlaceholdersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
