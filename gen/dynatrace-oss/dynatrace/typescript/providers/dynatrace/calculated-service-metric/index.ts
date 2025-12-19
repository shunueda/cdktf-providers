// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CalculatedServiceMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * The displayed description of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#description CalculatedServiceMetric#description}
  */
  readonly description?: string;
  /**
  * The metric is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#enabled CalculatedServiceMetric#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Restricts the metric usage to the specified service. This field is mutually exclusive with the `management_zones` field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#entity_id CalculatedServiceMetric#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#id CalculatedServiceMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metric should (true) or not (false) ignore muted requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#ignore_muted_requests CalculatedServiceMetric#ignore_muted_requests}
  */
  readonly ignoreMutedRequests?: boolean | cdktf.IResolvable;
  /**
  * Restricts the metric usage to specified management zones. This field is mutually exclusive with the `entity_id` field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#management_zones CalculatedServiceMetric#management_zones}
  */
  readonly managementZones?: string[];
  /**
  * The key of the calculated service metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#metric_key CalculatedServiceMetric#metric_key}
  */
  readonly metricKey: string;
  /**
  * The displayed name of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#name CalculatedServiceMetric#name}
  */
  readonly name: string;
  /**
  * The unit of the metric. Possible values are `BIT`, `BIT_PER_HOUR`, `BIT_PER_MINUTE`, `BIT_PER_SECOND`, `BYTE`, `BYTE_PER_HOUR`, `BYTE_PER_MINUTE`, `BYTE_PER_SECOND`, `CORES`, `COUNT`, `DAY`, `DECIBEL_MILLI_WATT`, `GIBI_BYTE`, `GIGA`, `GIGA_BYTE`, `HOUR`, `KIBI_BYTE`, `KIBI_BYTE_PER_HOUR`, `KIBI_BYTE_PER_MINUTE`, `KIBI_BYTE_PER_SECOND`, `KILO`, `KILO_BYTE`, `KILO_BYTE_PER_HOUR`, `KILO_BYTE_PER_MINUTE`, `KILO_BYTE_PER_SECOND`, `MEBI_BYTE`, `MEBI_BYTE_PER_HOUR`, `MEBI_BYTE_PER_MINUTE`, `MEBI_BYTE_PER_SECOND`, `MEGA`, `MEGA_BYTE`, `MEGA_BYTE_PER_HOUR`, `MEGA_BYTE_PER_MINUTE`, `MEGA_BYTE_PER_SECOND`, `MICRO_SECOND`, `MILLI_CORES`, `MILLI_SECOND`, `MILLI_SECOND_PER_MINUTE`, `MINUTE`, `MONTH`, `MSU`, `NANO_SECOND`, `NANO_SECOND_PER_MINUTE`, `NOT_APPLICABLE`, `PERCENT`, `PER_HOUR`, `PER_MINUTE`, `PER_SECOND`, `PIXEL`, `PROMILLE`, `RATIO`, `SECOND`, `STATE`, `UNSPECIFIED`, `WEEK` and `YEAR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unit CalculatedServiceMetric#unit}
  */
  readonly unit: string;
  /**
  * The display name of the metric's unit. Only applicable when the **unit** parameter is set to `UNSPECIFIED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unit_display_name CalculatedServiceMetric#unit_display_name}
  */
  readonly unitDisplayName?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#conditions CalculatedServiceMetric#conditions}
  */
  readonly conditions?: CalculatedServiceMetricConditions[] | cdktf.IResolvable;
  /**
  * dimension_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#dimension_definition CalculatedServiceMetric#dimension_definition}
  */
  readonly dimensionDefinition?: CalculatedServiceMetricDimensionDefinition;
  /**
  * metric_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#metric_definition CalculatedServiceMetric#metric_definition}
  */
  readonly metricDefinition?: CalculatedServiceMetricMetricDefinition;
}
export interface CalculatedServiceMetricConditionsConditionComparisonBoolean {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value: boolean | cdktf.IResolvable;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
}

export function calculatedServiceMetricConditionsConditionComparisonBooleanToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonBooleanOutputReference | CalculatedServiceMetricConditionsConditionComparisonBoolean): any {
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


export function calculatedServiceMetricConditionsConditionComparisonBooleanToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonBooleanOutputReference | CalculatedServiceMetricConditionsConditionComparisonBoolean): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonBooleanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonBoolean | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonBoolean | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeType): any {
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


export function calculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeType): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeType | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeType | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonFailedState {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `FAILED` and `FAILED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `FAILED` and `FAILED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonFailedStateToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFailedStateOutputReference | CalculatedServiceMetricConditionsConditionComparisonFailedState): any {
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


export function calculatedServiceMetricConditionsConditionComparisonFailedStateToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFailedStateOutputReference | CalculatedServiceMetricConditionsConditionComparisonFailedState): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonFailedStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonFailedState | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonFailedState | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonFailureReason {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `EXCEPTION_AT_ENTRY_NODE`, `EXCEPTION_ON_ANY_NODE`, `HTTP_CODE` and `REQUEST_ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `EXCEPTION_AT_ENTRY_NODE`, `EXCEPTION_ON_ANY_NODE`, `HTTP_CODE` and `REQUEST_ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonFailureReasonToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFailureReasonOutputReference | CalculatedServiceMetricConditionsConditionComparisonFailureReason): any {
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


export function calculatedServiceMetricConditionsConditionComparisonFailureReasonToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFailureReasonOutputReference | CalculatedServiceMetricConditionsConditionComparisonFailureReason): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonFailureReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonFailureReason | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonFailureReason | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonFastString {
  /**
  * The comparison is case-sensitive (`true`) or not case-sensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#case_sensitive CalculatedServiceMetric#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `CONTAINS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonFastStringToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFastStringOutputReference | CalculatedServiceMetricConditionsConditionComparisonFastString): any {
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


export function calculatedServiceMetricConditionsConditionComparisonFastStringToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFastStringOutputReference | CalculatedServiceMetricConditionsConditionComparisonFastString): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonFastStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonFastString | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonFastString | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonFlawState {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `FLAWED` and `NOT_FLAWED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `FLAWED` and `NOT_FLAWED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonFlawStateToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFlawStateOutputReference | CalculatedServiceMetricConditionsConditionComparisonFlawState): any {
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


export function calculatedServiceMetricConditionsConditionComparisonFlawStateToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonFlawStateOutputReference | CalculatedServiceMetricConditionsConditionComparisonFlawState): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonFlawStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonFlawState | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonFlawState | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonGeneric {
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#type CalculatedServiceMetric#type}
  */
  readonly type: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
}

export function calculatedServiceMetricConditionsConditionComparisonGenericToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonGenericOutputReference | CalculatedServiceMetricConditionsConditionComparisonGeneric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonGenericToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonGenericOutputReference | CalculatedServiceMetricConditionsConditionComparisonGeneric): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonGenericOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonGeneric | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonGeneric | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonHttpMethod {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CONNECT`, `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CONNECT`, `DELETE`, `GET`, `HEAD`, `OPTIONS`, `PATCH`, `POST`, `PUT` and `TRACE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonHttpMethodToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonHttpMethodOutputReference | CalculatedServiceMetricConditionsConditionComparisonHttpMethod): any {
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


export function calculatedServiceMetricConditionsConditionComparisonHttpMethodToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonHttpMethodOutputReference | CalculatedServiceMetricConditionsConditionComparisonHttpMethod): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonHttpMethod | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonHttpMethod | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonHttpStatusClass {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `C_1XX`, `C_2XX`, `C_3XX`, `C_4XX`, `C_5XX` and `NO_RESPONSE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `C_1XX`, `C_2XX`, `C_3XX`, `C_4XX`, `C_5XX` and `NO_RESPONSE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonHttpStatusClassToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonHttpStatusClassOutputReference | CalculatedServiceMetricConditionsConditionComparisonHttpStatusClass): any {
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


export function calculatedServiceMetricConditionsConditionComparisonHttpStatusClassToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonHttpStatusClassOutputReference | CalculatedServiceMetricConditionsConditionComparisonHttpStatusClass): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonHttpStatusClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonHttpStatusClass | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonHttpStatusClass | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonIibInputNodeType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CALLABLE_FLOW_ASYNC_RESPONSE_NODE`, `CALLABLE_FLOW_INPUT_NODE`, `DATABASE_INPUT_NODE`, `DOTNET_INPUT_NODE`, `EMAIL_INPUT_NODE`, `EVENT_INPUT`, `EVENT_INPUT_NODE`, `FILE_INPUT_NODE`, `FTE_INPUT_NODE`, `HTTP_ASYNC_RESPONSE`, `JD_EDWARDS_INPUT_NODE`, `JMS_CLIENT_INPUT_NODE`, `LABEL_NODE`, `MQ_INPUT_NODE`, `PEOPLE_SOFT_INPUT_NODE`, `REST_ASYNC_RESPONSE`, `REST_REQUEST`, `SAP_INPUT_NODE`, `SCA_ASYNC_RESPONSE_NODE`, `SCA_INPUT_NODE`, `SIEBEL_INPUT_NODE`, `SOAP_INPUT_NODE`, `TCPIP_CLIENT_INPUT_NODE`, `TCPIP_CLIENT_REQUEST_NODE`, `TCPIP_SERVER_INPUT_NODE`, `TCPIP_SERVER_REQUEST_NODE`, `TIMEOUT_NOTIFICATION_NODE` and `WS_INPUT_NODE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonIibInputNodeType): any {
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


export function calculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonIibInputNodeType): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonIibInputNodeType | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonIibInputNodeType | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonNumber {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF`, `EXISTS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `LOWER_THAN` and `LOWER_THAN_OR_EQUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: number;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: number[];
}

export function calculatedServiceMetricConditionsConditionComparisonNumberToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumber): any {
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


export function calculatedServiceMetricConditionsConditionComparisonNumberToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumber): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonNumber | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonNumber | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey {
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context?: string;
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key?: string;
}

export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTag {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. For custom tags use the `CONTEXTLESS` value. The context is set for tags that are automatically imported by OneAgent (for example, from the AWS console or environment variables). It’s useful for determining the origin of tags when not manually defined, and it also helps to prevent clashes with other existing tags. If the tag is not automatically imported, `CONTEXTLESS` set. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_COMPUTE_ENGINE` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context?: string;
  /**
  * The key of the tag. For custom tags, put the tag value here. The key allows categorization of multiple tags. It is possible that there are multiple values for a single key which will all be represented as standalone tags. Therefore, the key does not have the semantic of a map key but is more like a key of a key-value tuple. In some cases, for example custom tags, the key represents the actual tag value and the value field is not set – those are called valueless tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags. If a tag does have a separate key and value (in the textual representation they are split by the colon ‘:’), this field is set with the actual value. Key-value pairs can occur for automatically imported tags and tags set by rules if extractors are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * tag_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#tag_key CalculatedServiceMetric#tag_key}
  */
  readonly tagKey?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey;
}

export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    tag_key: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToTerraform(struct!.tagKey),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTag): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct!.tagKey),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTag | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTag | undefined) {
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
  private _tagKey = new CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKeyOutputReference(this, "tag_key");
  public get tagKey() {
    return this._tagKey;
  }
  public putTagKey(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagTagKey) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSource {
  /**
  * Use only request attributes from services that belong to this management zone.. Use either this or `serviceTag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#management_zone CalculatedServiceMetric#management_zone}
  */
  readonly managementZone?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * service_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#service_tag CalculatedServiceMetric#service_tag}
  */
  readonly serviceTag?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTag;
}

export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_zone: cdktf.stringToTerraform(struct!.managementZone),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    service_tag: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToTerraform(struct!.serviceTag),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSource): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagToHclTerraform(struct!.serviceTag),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSource | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSource | undefined) {
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
  private _serviceTag = new CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTagOutputReference(this, "service_tag");
  public get serviceTag() {
    return this._serviceTag;
  }
  public putServiceTag(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceServiceTag) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttribute {
  /**
  * If `true`, the request attribute is matched on child service calls. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#match_on_child_calls CalculatedServiceMetric#match_on_child_calls}
  */
  readonly matchOnChildCalls?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF`, `EXISTS`, `GREATER_THAN`, `GREATER_THAN_OR_EQUAL`, `LOWER_THAN` and `LOWER_THAN_OR_EQUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * No documentation available for this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#request_attribute CalculatedServiceMetric#request_attribute}
  */
  readonly requestAttribute: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: number;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: number[];
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#source CalculatedServiceMetric#source}
  */
  readonly source?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSource;
}

export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttribute): any {
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
    source: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceToTerraform(struct!.source),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeOutputReference | CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttribute): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttribute | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttribute | undefined) {
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
  private _source = new CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeSource) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonServiceType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `BACKGROUND_ACTIVITY`, `CICS_SERVICE`, `CUSTOM_SERVICE`, `DATABASE_SERVICE`, `ENTERPRISE_SERVICE_BUS_SERVICE`, `EXTERNAL`, `IBM_INTEGRATION_BUS_SERVICE`, `IMS_SERVICE`, `MESSAGING_SERVICE`, `RMI_SERVICE`, `RPC_SERVICE`, `WEB_REQUEST_SERVICE` and `WEB_SERVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `BACKGROUND_ACTIVITY`, `CICS_SERVICE`, `CUSTOM_SERVICE`, `DATABASE_SERVICE`, `ENTERPRISE_SERVICE_BUS_SERVICE`, `EXTERNAL`, `IBM_INTEGRATION_BUS_SERVICE`, `IMS_SERVICE`, `MESSAGING_SERVICE`, `RMI_SERVICE`, `RPC_SERVICE`, `WEB_REQUEST_SERVICE` and `WEB_SERVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonServiceTypeToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonServiceTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonServiceType): any {
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


export function calculatedServiceMetricConditionsConditionComparisonServiceTypeToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonServiceTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonServiceType): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonServiceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonServiceType | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonServiceType | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonString {
  /**
  * The comparison is case-sensitive (`true`) or not case-sensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#case_sensitive CalculatedServiceMetric#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `BEGINS_WITH`, `BEGINS_WITH_ANY_OF`, `CONTAINS`, `ENDS_WITH`, `ENDS_WITH_ANY_OF`, `EQUALS`, `EQUALS_ANY_OF`, `EXISTS` and `REGEX_MATCHES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonStringToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringOutputReference | CalculatedServiceMetricConditionsConditionComparisonString): any {
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


export function calculatedServiceMetricConditionsConditionComparisonStringToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringOutputReference | CalculatedServiceMetricConditionsConditionComparisonString): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonString | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonString | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey {
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context?: string;
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key?: string;
}

export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTag {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. For custom tags use the `CONTEXTLESS` value. The context is set for tags that are automatically imported by OneAgent (for example, from the AWS console or environment variables). It’s useful for determining the origin of tags when not manually defined, and it also helps to prevent clashes with other existing tags. If the tag is not automatically imported, `CONTEXTLESS` set. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_COMPUTE_ENGINE` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context?: string;
  /**
  * The key of the tag. For custom tags, put the tag value here. The key allows categorization of multiple tags. It is possible that there are multiple values for a single key which will all be represented as standalone tags. Therefore, the key does not have the semantic of a map key but is more like a key of a key-value tuple. In some cases, for example custom tags, the key represents the actual tag value and the value field is not set – those are called valueless tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags. If a tag does have a separate key and value (in the textual representation they are split by the colon ‘:’), this field is set with the actual value. Key-value pairs can occur for automatically imported tags and tags set by rules if extractors are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * tag_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#tag_key CalculatedServiceMetric#tag_key}
  */
  readonly tagKey?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey;
}

export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    tag_key: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToTerraform(struct!.tagKey),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTag): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyToHclTerraform(struct!.tagKey),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTag | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTag | undefined) {
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
  private _tagKey = new CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKeyOutputReference(this, "tag_key");
  public get tagKey() {
    return this._tagKey;
  }
  public putTagKey(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagTagKey) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSource {
  /**
  * Use only request attributes from services that belong to this management zone.. Use either this or `serviceTag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#management_zone CalculatedServiceMetric#management_zone}
  */
  readonly managementZone?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * service_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#service_tag CalculatedServiceMetric#service_tag}
  */
  readonly serviceTag?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTag;
}

export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_zone: cdktf.stringToTerraform(struct!.managementZone),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    service_tag: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagToTerraform(struct!.serviceTag),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSource): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagToHclTerraform(struct!.serviceTag),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSource | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSource | undefined) {
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
  private _serviceTag = new CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTagOutputReference(this, "service_tag");
  public get serviceTag() {
    return this._serviceTag;
  }
  public putServiceTag(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceServiceTag) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonStringRequestAttribute {
  /**
  * The comparison is case-sensitive (`true`) or not case-sensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#case_sensitive CalculatedServiceMetric#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * If `true`, the request attribute is matched on child service calls. Default is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#match_on_child_calls CalculatedServiceMetric#match_on_child_calls}
  */
  readonly matchOnChildCalls?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `BEGINS_WITH`, `BEGINS_WITH_ANY_OF`, `CONTAINS`, `ENDS_WITH`, `ENDS_WITH_ANY_OF`, `EQUALS`, `EQUALS_ANY_OF`, `EXISTS` and `REGEX_MATCHES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * No documentation available for this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#request_attribute CalculatedServiceMetric#request_attribute}
  */
  readonly requestAttribute: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#source CalculatedServiceMetric#source}
  */
  readonly source?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSource;
}

export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttribute): any {
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
    source: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceToTerraform(struct!.source),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeOutputReference | CalculatedServiceMetricConditionsConditionComparisonStringRequestAttribute): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonStringRequestAttribute | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttribute | undefined) {
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
  private _source = new CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeSource) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_CLOUD` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
}

export function calculatedServiceMetricConditionsConditionComparisonTagValueToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagValueOutputReference | CalculatedServiceMetricConditionsConditionComparisonTagValue): any {
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


export function calculatedServiceMetricConditionsConditionComparisonTagValueToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagValueOutputReference | CalculatedServiceMetricConditionsConditionComparisonTagValue): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonTagValue | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonTagValue | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonTagValuesValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Custom tags use the `CONTEXTLESS` value. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_CLOUD` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
}

export function calculatedServiceMetricConditionsConditionComparisonTagValuesValueToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagValuesValue | cdktf.IResolvable): any {
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


export function calculatedServiceMetricConditionsConditionComparisonTagValuesValueToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagValuesValue | cdktf.IResolvable): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonTagValuesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonTagValuesValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonTagValuesValue | cdktf.IResolvable | undefined) {
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

export class CalculatedServiceMetricConditionsConditionComparisonTagValuesValueList extends cdktf.ComplexList {
  public internalValue? : CalculatedServiceMetricConditionsConditionComparisonTagValuesValue[] | cdktf.IResolvable

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
  public get(index: number): CalculatedServiceMetricConditionsConditionComparisonTagValuesValueOutputReference {
    return new CalculatedServiceMetricConditionsConditionComparisonTagValuesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedServiceMetricConditionsConditionComparisonTagValues {
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: CalculatedServiceMetricConditionsConditionComparisonTagValuesValue[] | cdktf.IResolvable;
}

export function calculatedServiceMetricConditionsConditionComparisonTagValuesToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagValuesOutputReference | CalculatedServiceMetricConditionsConditionComparisonTagValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.listMapper(calculatedServiceMetricConditionsConditionComparisonTagValuesValueToTerraform, true)(struct!.value),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonTagValuesToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagValuesOutputReference | CalculatedServiceMetricConditionsConditionComparisonTagValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.listMapperHcl(calculatedServiceMetricConditionsConditionComparisonTagValuesValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonTagValuesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonTagValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonTagValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonTagValues | undefined) {
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
  private _value = new CalculatedServiceMetricConditionsConditionComparisonTagValuesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: CalculatedServiceMetricConditionsConditionComparisonTagValuesValue[] | cdktf.IResolvable) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonTag {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF`, `TAG_KEY_EQUALS` and `TAG_KEY_EQUALS_ANY_OF`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: CalculatedServiceMetricConditionsConditionComparisonTagValue;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: CalculatedServiceMetricConditionsConditionComparisonTagValues;
}

export function calculatedServiceMetricConditionsConditionComparisonTagToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagOutputReference | CalculatedServiceMetricConditionsConditionComparisonTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: calculatedServiceMetricConditionsConditionComparisonTagValueToTerraform(struct!.value),
    values: calculatedServiceMetricConditionsConditionComparisonTagValuesToTerraform(struct!.values),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonTagToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonTagOutputReference | CalculatedServiceMetricConditionsConditionComparisonTag): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonTagValueList",
    },
    values: {
      value: calculatedServiceMetricConditionsConditionComparisonTagValuesToHclTerraform(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonTagValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonTag | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonTag | undefined) {
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
  private _value = new CalculatedServiceMetricConditionsConditionComparisonTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: CalculatedServiceMetricConditionsConditionComparisonTagValue) {
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
  private _values = new CalculatedServiceMetricConditionsConditionComparisonTagValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: CalculatedServiceMetricConditionsConditionComparisonTagValues) {
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
export interface CalculatedServiceMetricConditionsConditionComparisonZosCallType {
  /**
  * Operator of the comparison. You can reverse it by setting `negate` to `true`. Possible values are `EQUALS`, `EQUALS_ANY_OF` and `EXISTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#operator CalculatedServiceMetric#operator}
  */
  readonly operator?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are `CTG`, `DPL`, `EXPLICIT_ADK`, `IMS_CONNECT`, `IMS_CONNECT_API`, `IMS_ITRA`, `IMS_MSC`, `IMS_PGM_SWITCH`, `IMS_SHARED_QUEUES`, `IMS_TRANS_EXEC`, `MQ`, `SOAP`, `START`, `TX` and `UNKNOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * The values to compare to. Possible values are `CTG`, `DPL`, `EXPLICIT_ADK`, `IMS_CONNECT`, `IMS_CONNECT_API`, `IMS_ITRA`, `IMS_MSC`, `IMS_PGM_SWITCH`, `IMS_SHARED_QUEUES`, `IMS_TRANS_EXEC`, `MQ`, `SOAP`, `START`, `TX` and `UNKNOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#values CalculatedServiceMetric#values}
  */
  readonly values?: string[];
}

export function calculatedServiceMetricConditionsConditionComparisonZosCallTypeToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonZosCallTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonZosCallType): any {
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


export function calculatedServiceMetricConditionsConditionComparisonZosCallTypeToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonZosCallTypeOutputReference | CalculatedServiceMetricConditionsConditionComparisonZosCallType): any {
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

export class CalculatedServiceMetricConditionsConditionComparisonZosCallTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparisonZosCallType | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparisonZosCallType | undefined) {
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
export interface CalculatedServiceMetricConditionsConditionComparison {
  /**
  * Reverse the comparison **operator**. For example, it turns **equals** into **does not equal**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#negate CalculatedServiceMetric#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * boolean block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#boolean CalculatedServiceMetric#boolean}
  */
  readonly boolean?: CalculatedServiceMetricConditionsConditionComparisonBoolean;
  /**
  * esb_input_node_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#esb_input_node_type CalculatedServiceMetric#esb_input_node_type}
  */
  readonly esbInputNodeType?: CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeType;
  /**
  * failed_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#failed_state CalculatedServiceMetric#failed_state}
  */
  readonly failedState?: CalculatedServiceMetricConditionsConditionComparisonFailedState;
  /**
  * failure_reason block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#failure_reason CalculatedServiceMetric#failure_reason}
  */
  readonly failureReason?: CalculatedServiceMetricConditionsConditionComparisonFailureReason;
  /**
  * fast_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#fast_string CalculatedServiceMetric#fast_string}
  */
  readonly fastString?: CalculatedServiceMetricConditionsConditionComparisonFastString;
  /**
  * flaw_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#flaw_state CalculatedServiceMetric#flaw_state}
  */
  readonly flawState?: CalculatedServiceMetricConditionsConditionComparisonFlawState;
  /**
  * generic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#generic CalculatedServiceMetric#generic}
  */
  readonly generic?: CalculatedServiceMetricConditionsConditionComparisonGeneric;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#http_method CalculatedServiceMetric#http_method}
  */
  readonly httpMethod?: CalculatedServiceMetricConditionsConditionComparisonHttpMethod;
  /**
  * http_status_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#http_status_class CalculatedServiceMetric#http_status_class}
  */
  readonly httpStatusClass?: CalculatedServiceMetricConditionsConditionComparisonHttpStatusClass;
  /**
  * iib_input_node_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#iib_input_node_type CalculatedServiceMetric#iib_input_node_type}
  */
  readonly iibInputNodeType?: CalculatedServiceMetricConditionsConditionComparisonIibInputNodeType;
  /**
  * number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#number CalculatedServiceMetric#number}
  */
  readonly number?: CalculatedServiceMetricConditionsConditionComparisonNumber;
  /**
  * number_request_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#number_request_attribute CalculatedServiceMetric#number_request_attribute}
  */
  readonly numberRequestAttribute?: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttribute;
  /**
  * service_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#service_type CalculatedServiceMetric#service_type}
  */
  readonly serviceType?: CalculatedServiceMetricConditionsConditionComparisonServiceType;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#string CalculatedServiceMetric#string}
  */
  readonly string?: CalculatedServiceMetricConditionsConditionComparisonString;
  /**
  * string_request_attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#string_request_attribute CalculatedServiceMetric#string_request_attribute}
  */
  readonly stringRequestAttribute?: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttribute;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#tag CalculatedServiceMetric#tag}
  */
  readonly tag?: CalculatedServiceMetricConditionsConditionComparisonTag;
  /**
  * zos_call_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#zos_call_type CalculatedServiceMetric#zos_call_type}
  */
  readonly zosCallType?: CalculatedServiceMetricConditionsConditionComparisonZosCallType;
}

export function calculatedServiceMetricConditionsConditionComparisonToTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonOutputReference | CalculatedServiceMetricConditionsConditionComparison): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    boolean: calculatedServiceMetricConditionsConditionComparisonBooleanToTerraform(struct!.boolean),
    esb_input_node_type: calculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeToTerraform(struct!.esbInputNodeType),
    failed_state: calculatedServiceMetricConditionsConditionComparisonFailedStateToTerraform(struct!.failedState),
    failure_reason: calculatedServiceMetricConditionsConditionComparisonFailureReasonToTerraform(struct!.failureReason),
    fast_string: calculatedServiceMetricConditionsConditionComparisonFastStringToTerraform(struct!.fastString),
    flaw_state: calculatedServiceMetricConditionsConditionComparisonFlawStateToTerraform(struct!.flawState),
    generic: calculatedServiceMetricConditionsConditionComparisonGenericToTerraform(struct!.generic),
    http_method: calculatedServiceMetricConditionsConditionComparisonHttpMethodToTerraform(struct!.httpMethod),
    http_status_class: calculatedServiceMetricConditionsConditionComparisonHttpStatusClassToTerraform(struct!.httpStatusClass),
    iib_input_node_type: calculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeToTerraform(struct!.iibInputNodeType),
    number: calculatedServiceMetricConditionsConditionComparisonNumberToTerraform(struct!.number),
    number_request_attribute: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeToTerraform(struct!.numberRequestAttribute),
    service_type: calculatedServiceMetricConditionsConditionComparisonServiceTypeToTerraform(struct!.serviceType),
    string: calculatedServiceMetricConditionsConditionComparisonStringToTerraform(struct!.string),
    string_request_attribute: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeToTerraform(struct!.stringRequestAttribute),
    tag: calculatedServiceMetricConditionsConditionComparisonTagToTerraform(struct!.tag),
    zos_call_type: calculatedServiceMetricConditionsConditionComparisonZosCallTypeToTerraform(struct!.zosCallType),
  }
}


export function calculatedServiceMetricConditionsConditionComparisonToHclTerraform(struct?: CalculatedServiceMetricConditionsConditionComparisonOutputReference | CalculatedServiceMetricConditionsConditionComparison): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonBooleanToHclTerraform(struct!.boolean),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonBooleanList",
    },
    esb_input_node_type: {
      value: calculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeToHclTerraform(struct!.esbInputNodeType),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeList",
    },
    failed_state: {
      value: calculatedServiceMetricConditionsConditionComparisonFailedStateToHclTerraform(struct!.failedState),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonFailedStateList",
    },
    failure_reason: {
      value: calculatedServiceMetricConditionsConditionComparisonFailureReasonToHclTerraform(struct!.failureReason),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonFailureReasonList",
    },
    fast_string: {
      value: calculatedServiceMetricConditionsConditionComparisonFastStringToHclTerraform(struct!.fastString),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonFastStringList",
    },
    flaw_state: {
      value: calculatedServiceMetricConditionsConditionComparisonFlawStateToHclTerraform(struct!.flawState),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonFlawStateList",
    },
    generic: {
      value: calculatedServiceMetricConditionsConditionComparisonGenericToHclTerraform(struct!.generic),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonGenericList",
    },
    http_method: {
      value: calculatedServiceMetricConditionsConditionComparisonHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonHttpMethodList",
    },
    http_status_class: {
      value: calculatedServiceMetricConditionsConditionComparisonHttpStatusClassToHclTerraform(struct!.httpStatusClass),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonHttpStatusClassList",
    },
    iib_input_node_type: {
      value: calculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeToHclTerraform(struct!.iibInputNodeType),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeList",
    },
    number: {
      value: calculatedServiceMetricConditionsConditionComparisonNumberToHclTerraform(struct!.number),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonNumberList",
    },
    number_request_attribute: {
      value: calculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeToHclTerraform(struct!.numberRequestAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeList",
    },
    service_type: {
      value: calculatedServiceMetricConditionsConditionComparisonServiceTypeToHclTerraform(struct!.serviceType),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonServiceTypeList",
    },
    string: {
      value: calculatedServiceMetricConditionsConditionComparisonStringToHclTerraform(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonStringList",
    },
    string_request_attribute: {
      value: calculatedServiceMetricConditionsConditionComparisonStringRequestAttributeToHclTerraform(struct!.stringRequestAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeList",
    },
    tag: {
      value: calculatedServiceMetricConditionsConditionComparisonTagToHclTerraform(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonTagList",
    },
    zos_call_type: {
      value: calculatedServiceMetricConditionsConditionComparisonZosCallTypeToHclTerraform(struct!.zosCallType),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonZosCallTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionComparisonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricConditionsConditionComparison | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsConditionComparison | undefined) {
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
  private _boolean = new CalculatedServiceMetricConditionsConditionComparisonBooleanOutputReference(this, "boolean");
  public get boolean() {
    return this._boolean;
  }
  public putBoolean(value: CalculatedServiceMetricConditionsConditionComparisonBoolean) {
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
  private _esbInputNodeType = new CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeTypeOutputReference(this, "esb_input_node_type");
  public get esbInputNodeType() {
    return this._esbInputNodeType;
  }
  public putEsbInputNodeType(value: CalculatedServiceMetricConditionsConditionComparisonEsbInputNodeType) {
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
  private _failedState = new CalculatedServiceMetricConditionsConditionComparisonFailedStateOutputReference(this, "failed_state");
  public get failedState() {
    return this._failedState;
  }
  public putFailedState(value: CalculatedServiceMetricConditionsConditionComparisonFailedState) {
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
  private _failureReason = new CalculatedServiceMetricConditionsConditionComparisonFailureReasonOutputReference(this, "failure_reason");
  public get failureReason() {
    return this._failureReason;
  }
  public putFailureReason(value: CalculatedServiceMetricConditionsConditionComparisonFailureReason) {
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
  private _fastString = new CalculatedServiceMetricConditionsConditionComparisonFastStringOutputReference(this, "fast_string");
  public get fastString() {
    return this._fastString;
  }
  public putFastString(value: CalculatedServiceMetricConditionsConditionComparisonFastString) {
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
  private _flawState = new CalculatedServiceMetricConditionsConditionComparisonFlawStateOutputReference(this, "flaw_state");
  public get flawState() {
    return this._flawState;
  }
  public putFlawState(value: CalculatedServiceMetricConditionsConditionComparisonFlawState) {
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
  private _generic = new CalculatedServiceMetricConditionsConditionComparisonGenericOutputReference(this, "generic");
  public get generic() {
    return this._generic;
  }
  public putGeneric(value: CalculatedServiceMetricConditionsConditionComparisonGeneric) {
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
  private _httpMethod = new CalculatedServiceMetricConditionsConditionComparisonHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: CalculatedServiceMetricConditionsConditionComparisonHttpMethod) {
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
  private _httpStatusClass = new CalculatedServiceMetricConditionsConditionComparisonHttpStatusClassOutputReference(this, "http_status_class");
  public get httpStatusClass() {
    return this._httpStatusClass;
  }
  public putHttpStatusClass(value: CalculatedServiceMetricConditionsConditionComparisonHttpStatusClass) {
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
  private _iibInputNodeType = new CalculatedServiceMetricConditionsConditionComparisonIibInputNodeTypeOutputReference(this, "iib_input_node_type");
  public get iibInputNodeType() {
    return this._iibInputNodeType;
  }
  public putIibInputNodeType(value: CalculatedServiceMetricConditionsConditionComparisonIibInputNodeType) {
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
  private _number = new CalculatedServiceMetricConditionsConditionComparisonNumberOutputReference(this, "number");
  public get number() {
    return this._number;
  }
  public putNumber(value: CalculatedServiceMetricConditionsConditionComparisonNumber) {
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
  private _numberRequestAttribute = new CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttributeOutputReference(this, "number_request_attribute");
  public get numberRequestAttribute() {
    return this._numberRequestAttribute;
  }
  public putNumberRequestAttribute(value: CalculatedServiceMetricConditionsConditionComparisonNumberRequestAttribute) {
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
  private _serviceType = new CalculatedServiceMetricConditionsConditionComparisonServiceTypeOutputReference(this, "service_type");
  public get serviceType() {
    return this._serviceType;
  }
  public putServiceType(value: CalculatedServiceMetricConditionsConditionComparisonServiceType) {
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
  private _string = new CalculatedServiceMetricConditionsConditionComparisonStringOutputReference(this, "string");
  public get string() {
    return this._string;
  }
  public putString(value: CalculatedServiceMetricConditionsConditionComparisonString) {
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
  private _stringRequestAttribute = new CalculatedServiceMetricConditionsConditionComparisonStringRequestAttributeOutputReference(this, "string_request_attribute");
  public get stringRequestAttribute() {
    return this._stringRequestAttribute;
  }
  public putStringRequestAttribute(value: CalculatedServiceMetricConditionsConditionComparisonStringRequestAttribute) {
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
  private _tag = new CalculatedServiceMetricConditionsConditionComparisonTagOutputReference(this, "tag");
  public get tag() {
    return this._tag;
  }
  public putTag(value: CalculatedServiceMetricConditionsConditionComparisonTag) {
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
  private _zosCallType = new CalculatedServiceMetricConditionsConditionComparisonZosCallTypeOutputReference(this, "zos_call_type");
  public get zosCallType() {
    return this._zosCallType;
  }
  public putZosCallType(value: CalculatedServiceMetricConditionsConditionComparisonZosCallType) {
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
export interface CalculatedServiceMetricConditionsCondition {
  /**
  * The attribute to be matched.  Note that for a service property attribute you must use the comparison of the `FAST_STRING` type. Possible values are `ACTOR_SYSTEM`, `AKKA_ACTOR_CLASS_NAME`, `AKKA_ACTOR_MESSAGE_TYPE`, `AKKA_ACTOR_PATH`, `APPLICATION_BUILD_VERSION`, `APPLICATION_RELEASE_VERSION`, `AZURE_FUNCTIONS_FUNCTION_NAME`, `AZURE_FUNCTIONS_SITE_NAME`, `CICS_PROGRAM_NAME`, `CICS_SYSTEM_ID`, `CICS_TASK_ID`, `CICS_TRANSACTION_ID`, `CICS_USER_ID`, `CPU_TIME`, `CTG_GATEWAY_URL`, `CTG_PROGRAM`, `CTG_SERVER_NAME`, `CTG_TRANSACTION_ID`, `CUSTOMSERVICE_CLASS`, `CUSTOMSERVICE_METHOD`, `DATABASE_CHILD_CALL_COUNT`, `DATABASE_CHILD_CALL_TIME`, `DATABASE_HOST`, `DATABASE_NAME`, `DATABASE_TYPE`, `DATABASE_URL`, `DISK_IO_TIME`, `ERROR_COUNT`, `ESB_APPLICATION_NAME`, `ESB_INPUT_TYPE`, `ESB_LIBRARY_NAME`, `ESB_MESSAGE_FLOW_NAME`, `EXCEPTION_CLASS`, `EXCEPTION_MESSAGE`, `FAILED_STATE`, `FAILURE_REASON`, `FLAW_STATE`, `HTTP_REQUEST_METHOD`, `HTTP_STATUS`, `HTTP_STATUS_CLASS`, `IMS_PROGRAM_NAME`, `IMS_TRANSACTION_ID`, `IMS_USER_ID`, `IO_TIME`, `IS_KEY_REQUEST`, `LAMBDA_COLDSTART`, `LOCK_TIME`, `MESSAGING_DESTINATION_TYPE`, `MESSAGING_IS_TEMPORARY_QUEUE`, `MESSAGING_QUEUE_NAME`, `MESSAGING_QUEUE_VENDOR`, `NETWORK_IO_TIME`, `NON_DATABASE_CHILD_CALL_COUNT`, `NON_DATABASE_CHILD_CALL_TIME`, `PROCESS_GROUP_NAME`, `PROCESS_GROUP_TAG`, `REMOTE_ENDPOINT`, `REMOTE_METHOD`, `REMOTE_SERVICE_NAME`, `REQUEST_NAME`, `REQUEST_TYPE`, `RESPONSE_TIME`, `RESPONSE_TIME_CLIENT`, `RMI_CLASS`, `RMI_METHOD`, `SERVICE_DISPLAY_NAME`, `SERVICE_NAME`, `SERVICE_PORT`, `SERVICE_PUBLIC_DOMAIN_NAME`, `SERVICE_REQUEST_ATTRIBUTE`, `SERVICE_TAG`, `SERVICE_TYPE`, `SERVICE_WEB_APPLICATION_ID`, `SERVICE_WEB_CONTEXT_ROOT`, `SERVICE_WEB_SERVER_NAME`, `SERVICE_WEB_SERVICE_NAME`, `SERVICE_WEB_SERVICE_NAMESPACE`, `SUSPENSION_TIME`, `TOTAL_PROCESSING_TIME`, `WAIT_TIME`, `WEBREQUEST_QUERY`, `WEBREQUEST_RELATIVE_URL`, `WEBREQUEST_URL`, `WEBREQUEST_URL_HOST`, `WEBREQUEST_URL_PATH`, `WEBREQUEST_URL_PORT`, `WEBSERVICE_ENDPOINT`, `WEBSERVICE_METHOD` and `ZOS_CALL_TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#attribute CalculatedServiceMetric#attribute}
  */
  readonly attribute: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#comparison CalculatedServiceMetric#comparison}
  */
  readonly comparison: CalculatedServiceMetricConditionsConditionComparison;
}

export function calculatedServiceMetricConditionsConditionToTerraform(struct?: CalculatedServiceMetricConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    comparison: calculatedServiceMetricConditionsConditionComparisonToTerraform(struct!.comparison),
  }
}


export function calculatedServiceMetricConditionsConditionToHclTerraform(struct?: CalculatedServiceMetricConditionsCondition | cdktf.IResolvable): any {
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
      value: calculatedServiceMetricConditionsConditionComparisonToHclTerraform(struct!.comparison),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionComparisonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedServiceMetricConditionsCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CalculatedServiceMetricConditionsCondition | cdktf.IResolvable | undefined) {
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
  private _comparison = new CalculatedServiceMetricConditionsConditionComparisonOutputReference(this, "comparison");
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: CalculatedServiceMetricConditionsConditionComparison) {
    this._comparison.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }
}

export class CalculatedServiceMetricConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : CalculatedServiceMetricConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): CalculatedServiceMetricConditionsConditionOutputReference {
    return new CalculatedServiceMetricConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedServiceMetricConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#condition CalculatedServiceMetric#condition}
  */
  readonly condition?: CalculatedServiceMetricConditionsCondition[] | cdktf.IResolvable;
}

export function calculatedServiceMetricConditionsToTerraform(struct?: CalculatedServiceMetricConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(calculatedServiceMetricConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function calculatedServiceMetricConditionsToHclTerraform(struct?: CalculatedServiceMetricConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(calculatedServiceMetricConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedServiceMetricConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedServiceMetricConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new CalculatedServiceMetricConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: CalculatedServiceMetricConditionsCondition[] | cdktf.IResolvable) {
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

export class CalculatedServiceMetricConditionsList extends cdktf.ComplexList {
  public internalValue? : CalculatedServiceMetricConditions[] | cdktf.IResolvable

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
  public get(index: number): CalculatedServiceMetricConditionsOutputReference {
    return new CalculatedServiceMetricConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKey {
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context?: string;
  /**
  * has no documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key?: string;
}

export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyToTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyToHclTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKey): any {
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

export class CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKey | undefined {
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

  public set internalValue(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKey | undefined) {
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
export interface CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTag {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. For custom tags use the `CONTEXTLESS` value. The context is set for tags that are automatically imported by OneAgent (for example, from the AWS console or environment variables). It’s useful for determining the origin of tags when not manually defined, and it also helps to prevent clashes with other existing tags. If the tag is not automatically imported, `CONTEXTLESS` set. Possible values are `AWS`, `AWS_GENERIC`, `AZURE`, `CLOUD_FOUNDRY`, `CONTEXTLESS`, `ENVIRONMENT`, `GOOGLE_COMPUTE_ENGINE` and `KUBERNETES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#context CalculatedServiceMetric#context}
  */
  readonly context?: string;
  /**
  * The key of the tag. For custom tags, put the tag value here. The key allows categorization of multiple tags. It is possible that there are multiple values for a single key which will all be represented as standalone tags. Therefore, the key does not have the semantic of a map key but is more like a key of a key-value tuple. In some cases, for example custom tags, the key represents the actual tag value and the value field is not set – those are called valueless tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#key CalculatedServiceMetric#key}
  */
  readonly key: string;
  /**
  * The value of the tag. Not applicable to custom tags. If a tag does have a separate key and value (in the textual representation they are split by the colon ‘:’), this field is set with the actual value. Key-value pairs can occur for automatically imported tags and tags set by rules if extractors are used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#value CalculatedServiceMetric#value}
  */
  readonly value?: string;
  /**
  * tag_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#tag_key CalculatedServiceMetric#tag_key}
  */
  readonly tagKey?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKey;
}

export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagToTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    tag_key: calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyToTerraform(struct!.tagKey),
  }
}


export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagToHclTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTag): any {
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
      value: calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyToHclTerraform(struct!.tagKey),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTag | undefined {
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

  public set internalValue(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTag | undefined) {
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
  private _tagKey = new CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKeyOutputReference(this, "tag_key");
  public get tagKey() {
    return this._tagKey;
  }
  public putTagKey(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagTagKey) {
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
export interface CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSource {
  /**
  * Use only request attributes from services that belong to this management zone.. Use either this or `serviceTag`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#management_zone CalculatedServiceMetric#management_zone}
  */
  readonly managementZone?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * service_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#service_tag CalculatedServiceMetric#service_tag}
  */
  readonly serviceTag?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTag;
}

export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceToTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_zone: cdktf.stringToTerraform(struct!.managementZone),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    service_tag: calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagToTerraform(struct!.serviceTag),
  }
}


export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceToHclTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSource): any {
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
      value: calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagToHclTerraform(struct!.serviceTag),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSource | undefined {
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

  public set internalValue(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSource | undefined) {
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
  private _serviceTag = new CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTagOutputReference(this, "service_tag");
  public get serviceTag() {
    return this._serviceTag;
  }
  public putServiceTag(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceServiceTag) {
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
export interface CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder {
  /**
  * Which value of the request attribute must be used when it occurs across multiple child requests. Only applicable for the `SERVICE_REQUEST_ATTRIBUTE` attribute, when **useFromChildCalls** is `true`. For the `COUNT` aggregation, the **kind** field is not applicable. Possible values are `COUNT`, `FIRST` and `LAST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#aggregation CalculatedServiceMetric#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The attribute to extract from. You can only use attributes of the **string** type. Possible values are `ACTOR_SYSTEM`, `AKKA_ACTOR_CLASS_NAME`, `AKKA_ACTOR_MESSAGE_TYPE`, `AKKA_ACTOR_PATH`, `APPLICATION_BUILD_VERSION`, `APPLICATION_RELEASE_VERSION`, `AZURE_FUNCTIONS_FUNCTION_NAME`, `AZURE_FUNCTIONS_SITE_NAME`, `CICS_PROGRAM_NAME`, `CICS_SYSTEM_ID`, `CICS_TASK_ID`, `CICS_TRANSACTION_ID`, `CICS_USER_ID`, `CPU_TIME`, `CTG_GATEWAY_URL`, `CTG_PROGRAM`, `CTG_SERVER_NAME`, `CTG_TRANSACTION_ID`, `CUSTOMSERVICE_CLASS`, `CUSTOMSERVICE_METHOD`, `DATABASE_CHILD_CALL_COUNT`, `DATABASE_CHILD_CALL_TIME`, `DATABASE_HOST`, `DATABASE_NAME`, `DATABASE_TYPE`, `DATABASE_URL`, `DISK_IO_TIME`, `ERROR_COUNT`, `ESB_APPLICATION_NAME`, `ESB_INPUT_TYPE`, `ESB_LIBRARY_NAME`, `ESB_MESSAGE_FLOW_NAME`, `EXCEPTION_CLASS`, `EXCEPTION_MESSAGE`, `FAILED_STATE`, `FAILURE_REASON`, `FLAW_STATE`, `HTTP_REQUEST_METHOD`, `HTTP_STATUS`, `HTTP_STATUS_CLASS`, `IMS_PROGRAM_NAME`, `IMS_TRANSACTION_ID`, `IMS_USER_ID`, `IO_TIME`, `IS_KEY_REQUEST`, `LAMBDA_COLDSTART`, `LOCK_TIME`, `MESSAGING_DESTINATION_TYPE`, `MESSAGING_IS_TEMPORARY_QUEUE`, `MESSAGING_QUEUE_NAME`, `MESSAGING_QUEUE_VENDOR`, `NETWORK_IO_TIME`, `NON_DATABASE_CHILD_CALL_COUNT`, `NON_DATABASE_CHILD_CALL_TIME`, `PROCESS_GROUP_NAME`, `PROCESS_GROUP_TAG`, `REMOTE_ENDPOINT`, `REMOTE_METHOD`, `REMOTE_SERVICE_NAME`, `REQUEST_NAME`, `REQUEST_TYPE`, `RESPONSE_TIME`, `RESPONSE_TIME_CLIENT`, `RMI_CLASS`, `RMI_METHOD`, `SERVICE_DISPLAY_NAME`, `SERVICE_NAME`, `SERVICE_PORT`, `SERVICE_PUBLIC_DOMAIN_NAME`, `SERVICE_REQUEST_ATTRIBUTE`, `SERVICE_TAG`, `SERVICE_TYPE`, `SERVICE_WEB_APPLICATION_ID`, `SERVICE_WEB_CONTEXT_ROOT`, `SERVICE_WEB_SERVER_NAME`, `SERVICE_WEB_SERVICE_NAME`, `SERVICE_WEB_SERVICE_NAMESPACE`, `SUSPENSION_TIME`, `TOTAL_PROCESSING_TIME`, `WAIT_TIME`, `WEBREQUEST_QUERY`, `WEBREQUEST_RELATIVE_URL`, `WEBREQUEST_URL`, `WEBREQUEST_URL_HOST`, `WEBREQUEST_URL_PATH`, `WEBREQUEST_URL_PORT`, `WEBSERVICE_ENDPOINT`, `WEBSERVICE_METHOD` and `ZOS_CALL_TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#attribute CalculatedServiceMetric#attribute}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#delimiter_or_regex CalculatedServiceMetric#delimiter_or_regex}
  */
  readonly delimiterOrRegex?: string;
  /**
  * The closing delimiter string to look for. Required if the `kind` value is `BETWEEN_DELIMITER`. Not applicable otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#end_delimiter CalculatedServiceMetric#end_delimiter}
  */
  readonly endDelimiter?: string;
  /**
  * The type of extraction. Defines either usage of regular expression (`regex`) or the position of request attribute value to be extracted. When the `attribute` is `SERVICE_REQUEST_ATTRIBUTE` attribute and `aggregation` is `COUNT`, needs to be set to `ORIGINAL_TEXT`. Possible values are 	`AFTER_DELIMITER`, `BEFORE_DELIMITER`, `BETWEEN_DELIMITER`, `ORIGINAL_TEXT` and `REGEX_EXTRACTION`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#kind CalculatedServiceMetric#kind}
  */
  readonly kind: string;
  /**
  * The name of the placeholder. Use it in the naming pattern as `{name}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#name CalculatedServiceMetric#name}
  */
  readonly name: string;
  /**
  * The format of the extracted string. Possible values are `ORIGINAL`, `TO_LOWER_CASE` and `TO_UPPER_CASE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#normalization CalculatedServiceMetric#normalization}
  */
  readonly normalization?: string;
  /**
  * The One Agent attribute to extract from. Required if the kind value is `ONE_AGENT_ATTRIBUTE`. Not applicable otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#oneagent_attribute_key CalculatedServiceMetric#oneagent_attribute_key}
  */
  readonly oneagentAttributeKey?: string;
  /**
  * The request attribute to extract from. Required if the `kind` value is `SERVICE_REQUEST_ATTRIBUTE`. Not applicable otherwise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#request_attribute CalculatedServiceMetric#request_attribute}
  */
  readonly requestAttribute?: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * If `true` request attribute will be taken from a child service call. Only applicable for the `SERVICE_REQUEST_ATTRIBUTE` attribute. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#use_from_child_calls CalculatedServiceMetric#use_from_child_calls}
  */
  readonly useFromChildCalls?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#source CalculatedServiceMetric#source}
  */
  readonly source?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSource;
}

export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderToTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder | cdktf.IResolvable): any {
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
    source: calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceToTerraform(struct!.source),
  }
}


export function calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderToHclTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder | cdktf.IResolvable): any {
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
      value: calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder | cdktf.IResolvable | undefined) {
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
  private _source = new CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderSource) {
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

export class CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderList extends cdktf.ComplexList {
  public internalValue? : CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder[] | cdktf.IResolvable

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
  public get(index: number): CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderOutputReference {
    return new CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CalculatedServiceMetricDimensionDefinitionPlaceholders {
  /**
  * placeholder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#placeholder CalculatedServiceMetric#placeholder}
  */
  readonly placeholder?: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder[] | cdktf.IResolvable;
}

export function calculatedServiceMetricDimensionDefinitionPlaceholdersToTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placeholder: cdktf.listMapper(calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderToTerraform, true)(struct!.placeholder),
  }
}


export function calculatedServiceMetricDimensionDefinitionPlaceholdersToHclTerraform(struct?: CalculatedServiceMetricDimensionDefinitionPlaceholdersOutputReference | CalculatedServiceMetricDimensionDefinitionPlaceholders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    placeholder: {
      value: cdktf.listMapperHcl(calculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderToHclTerraform, true)(struct!.placeholder),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricDimensionDefinitionPlaceholdersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricDimensionDefinitionPlaceholders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placeholder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholder = this._placeholder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedServiceMetricDimensionDefinitionPlaceholders | undefined) {
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
  private _placeholder = new CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholderList(this, "placeholder", false);
  public get placeholder() {
    return this._placeholder;
  }
  public putPlaceholder(value: CalculatedServiceMetricDimensionDefinitionPlaceholdersPlaceholder[] | cdktf.IResolvable) {
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
export interface CalculatedServiceMetricDimensionDefinition {
  /**
  * The dimension value pattern. You can define custom placeholders in the `placeholders` field and use them here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#dimension CalculatedServiceMetric#dimension}
  */
  readonly dimension: string;
  /**
  * The name of the dimension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#name CalculatedServiceMetric#name}
  */
  readonly name: string;
  /**
  * The number of top values to be calculated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#top_x CalculatedServiceMetric#top_x}
  */
  readonly topX: number;
  /**
  * The aggregation of the dimension. Possible values are `AVERAGE`, `COUNT`, `MAX`, `MIN`, `OF_INTEREST_RATIO`, `OTHER_RATIO`, `SINGLE_VALUE` and `SUM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#top_x_aggregation CalculatedServiceMetric#top_x_aggregation}
  */
  readonly topXAggregation: string;
  /**
  * How to calculate the **topX** values. Possible values are `ASCENDING` and `DESCENDING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#top_x_direction CalculatedServiceMetric#top_x_direction}
  */
  readonly topXDirection: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#unknowns CalculatedServiceMetric#unknowns}
  */
  readonly unknowns?: string;
  /**
  * placeholders block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#placeholders CalculatedServiceMetric#placeholders}
  */
  readonly placeholders?: CalculatedServiceMetricDimensionDefinitionPlaceholders;
}

export function calculatedServiceMetricDimensionDefinitionToTerraform(struct?: CalculatedServiceMetricDimensionDefinitionOutputReference | CalculatedServiceMetricDimensionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.stringToTerraform(struct!.dimension),
    name: cdktf.stringToTerraform(struct!.name),
    top_x: cdktf.numberToTerraform(struct!.topX),
    top_x_aggregation: cdktf.stringToTerraform(struct!.topXAggregation),
    top_x_direction: cdktf.stringToTerraform(struct!.topXDirection),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    placeholders: calculatedServiceMetricDimensionDefinitionPlaceholdersToTerraform(struct!.placeholders),
  }
}


export function calculatedServiceMetricDimensionDefinitionToHclTerraform(struct?: CalculatedServiceMetricDimensionDefinitionOutputReference | CalculatedServiceMetricDimensionDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.stringToHclTerraform(struct!.dimension),
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
    top_x: {
      value: cdktf.numberToHclTerraform(struct!.topX),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    top_x_aggregation: {
      value: cdktf.stringToHclTerraform(struct!.topXAggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top_x_direction: {
      value: cdktf.stringToHclTerraform(struct!.topXDirection),
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
    placeholders: {
      value: calculatedServiceMetricDimensionDefinitionPlaceholdersToHclTerraform(struct!.placeholders),
      isBlock: true,
      type: "list",
      storageClassType: "CalculatedServiceMetricDimensionDefinitionPlaceholdersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricDimensionDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricDimensionDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._topX !== undefined) {
      hasAnyValues = true;
      internalValueResult.topX = this._topX;
    }
    if (this._topXAggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.topXAggregation = this._topXAggregation;
    }
    if (this._topXDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.topXDirection = this._topXDirection;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._placeholders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholders = this._placeholders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedServiceMetricDimensionDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension = undefined;
      this._name = undefined;
      this._topX = undefined;
      this._topXAggregation = undefined;
      this._topXDirection = undefined;
      this._unknowns = undefined;
      this._placeholders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension = value.dimension;
      this._name = value.name;
      this._topX = value.topX;
      this._topXAggregation = value.topXAggregation;
      this._topXDirection = value.topXDirection;
      this._unknowns = value.unknowns;
      this._placeholders.internalValue = value.placeholders;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
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

  // top_x - computed: false, optional: false, required: true
  private _topX?: number; 
  public get topX() {
    return this.getNumberAttribute('top_x');
  }
  public set topX(value: number) {
    this._topX = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topXInput() {
    return this._topX;
  }

  // top_x_aggregation - computed: false, optional: false, required: true
  private _topXAggregation?: string; 
  public get topXAggregation() {
    return this.getStringAttribute('top_x_aggregation');
  }
  public set topXAggregation(value: string) {
    this._topXAggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topXAggregationInput() {
    return this._topXAggregation;
  }

  // top_x_direction - computed: false, optional: false, required: true
  private _topXDirection?: string; 
  public get topXDirection() {
    return this.getStringAttribute('top_x_direction');
  }
  public set topXDirection(value: string) {
    this._topXDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topXDirectionInput() {
    return this._topXDirection;
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

  // placeholders - computed: false, optional: true, required: false
  private _placeholders = new CalculatedServiceMetricDimensionDefinitionPlaceholdersOutputReference(this, "placeholders");
  public get placeholders() {
    return this._placeholders;
  }
  public putPlaceholders(value: CalculatedServiceMetricDimensionDefinitionPlaceholders) {
    this._placeholders.internalValue = value;
  }
  public resetPlaceholders() {
    this._placeholders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholdersInput() {
    return this._placeholders.internalValue;
  }
}
export interface CalculatedServiceMetricMetricDefinition {
  /**
  * The metric to be captured. Possible values are `CPU_TIME`, `DATABASE_CHILD_CALL_COUNT`, `DATABASE_CHILD_CALL_TIME`, `DISK_IO_TIME`, `EXCEPTION_COUNT`, `FAILED_REQUEST_COUNT`, `FAILED_REQUEST_COUNT_CLIENT`, `FAILURE_RATE`, `FAILURE_RATE_CLIENT`, `HTTP_4XX_ERROR_COUNT`, `HTTP_4XX_ERROR_COUNT_CLIENT`, `HTTP_5XX_ERROR_COUNT`, `HTTP_5XX_ERROR_COUNT_CLIENT`, `IO_TIME`, `LOCK_TIME`, `NETWORK_IO_TIME`, `NON_DATABASE_CHILD_CALL_COUNT`, `NON_DATABASE_CHILD_CALL_TIME`, `PROCESSING_TIME`, `REQUEST_ATTRIBUTE`, `REQUEST_COUNT`, `RESPONSE_TIME`, `RESPONSE_TIME_CLIENT`, `SUCCESSFUL_REQUEST_COUNT`, `SUCCESSFUL_REQUEST_COUNT_CLIENT` and `WAIT_TIME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#metric CalculatedServiceMetric#metric}
  */
  readonly metric: string;
  /**
  * The request attribute to be captured. Only applicable when the **metric** parameter is set to `REQUEST_ATTRIBUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#request_attribute CalculatedServiceMetric#request_attribute}
  */
  readonly requestAttribute?: string;
}

export function calculatedServiceMetricMetricDefinitionToTerraform(struct?: CalculatedServiceMetricMetricDefinitionOutputReference | CalculatedServiceMetricMetricDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.stringToTerraform(struct!.metric),
    request_attribute: cdktf.stringToTerraform(struct!.requestAttribute),
  }
}


export function calculatedServiceMetricMetricDefinitionToHclTerraform(struct?: CalculatedServiceMetricMetricDefinitionOutputReference | CalculatedServiceMetricMetricDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CalculatedServiceMetricMetricDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CalculatedServiceMetricMetricDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._requestAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAttribute = this._requestAttribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CalculatedServiceMetricMetricDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metric = undefined;
      this._requestAttribute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metric = value.metric;
      this._requestAttribute = value.requestAttribute;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric dynatrace_calculated_service_metric}
*/
export class CalculatedServiceMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_calculated_service_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CalculatedServiceMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CalculatedServiceMetric to import
  * @param importFromId The id of the existing CalculatedServiceMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CalculatedServiceMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_calculated_service_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/calculated_service_metric dynatrace_calculated_service_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CalculatedServiceMetricConfig
  */
  public constructor(scope: Construct, id: string, config: CalculatedServiceMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_calculated_service_metric',
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
    this._description = config.description;
    this._enabled = config.enabled;
    this._entityId = config.entityId;
    this._id = config.id;
    this._ignoreMutedRequests = config.ignoreMutedRequests;
    this._managementZones = config.managementZones;
    this._metricKey = config.metricKey;
    this._name = config.name;
    this._unit = config.unit;
    this._unitDisplayName = config.unitDisplayName;
    this._unknowns = config.unknowns;
    this._conditions.internalValue = config.conditions;
    this._dimensionDefinition.internalValue = config.dimensionDefinition;
    this._metricDefinition.internalValue = config.metricDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
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

  // ignore_muted_requests - computed: false, optional: true, required: false
  private _ignoreMutedRequests?: boolean | cdktf.IResolvable; 
  public get ignoreMutedRequests() {
    return this.getBooleanAttribute('ignore_muted_requests');
  }
  public set ignoreMutedRequests(value: boolean | cdktf.IResolvable) {
    this._ignoreMutedRequests = value;
  }
  public resetIgnoreMutedRequests() {
    this._ignoreMutedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMutedRequestsInput() {
    return this._ignoreMutedRequests;
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

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
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

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // unit_display_name - computed: false, optional: true, required: false
  private _unitDisplayName?: string; 
  public get unitDisplayName() {
    return this.getStringAttribute('unit_display_name');
  }
  public set unitDisplayName(value: string) {
    this._unitDisplayName = value;
  }
  public resetUnitDisplayName() {
    this._unitDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitDisplayNameInput() {
    return this._unitDisplayName;
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

  // conditions - computed: false, optional: true, required: false
  private _conditions = new CalculatedServiceMetricConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: CalculatedServiceMetricConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // dimension_definition - computed: false, optional: true, required: false
  private _dimensionDefinition = new CalculatedServiceMetricDimensionDefinitionOutputReference(this, "dimension_definition");
  public get dimensionDefinition() {
    return this._dimensionDefinition;
  }
  public putDimensionDefinition(value: CalculatedServiceMetricDimensionDefinition) {
    this._dimensionDefinition.internalValue = value;
  }
  public resetDimensionDefinition() {
    this._dimensionDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionDefinitionInput() {
    return this._dimensionDefinition.internalValue;
  }

  // metric_definition - computed: false, optional: true, required: false
  private _metricDefinition = new CalculatedServiceMetricMetricDefinitionOutputReference(this, "metric_definition");
  public get metricDefinition() {
    return this._metricDefinition;
  }
  public putMetricDefinition(value: CalculatedServiceMetricMetricDefinition) {
    this._metricDefinition.internalValue = value;
  }
  public resetMetricDefinition() {
    this._metricDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDefinitionInput() {
    return this._metricDefinition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      ignore_muted_requests: cdktf.booleanToTerraform(this._ignoreMutedRequests),
      management_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementZones),
      metric_key: cdktf.stringToTerraform(this._metricKey),
      name: cdktf.stringToTerraform(this._name),
      unit: cdktf.stringToTerraform(this._unit),
      unit_display_name: cdktf.stringToTerraform(this._unitDisplayName),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      conditions: cdktf.listMapper(calculatedServiceMetricConditionsToTerraform, true)(this._conditions.internalValue),
      dimension_definition: calculatedServiceMetricDimensionDefinitionToTerraform(this._dimensionDefinition.internalValue),
      metric_definition: calculatedServiceMetricMetricDefinitionToTerraform(this._metricDefinition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
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
      ignore_muted_requests: {
        value: cdktf.booleanToHclTerraform(this._ignoreMutedRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      management_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metric_key: {
        value: cdktf.stringToHclTerraform(this._metricKey),
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
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_display_name: {
        value: cdktf.stringToHclTerraform(this._unitDisplayName),
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
        value: cdktf.listMapperHcl(calculatedServiceMetricConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedServiceMetricConditionsList",
      },
      dimension_definition: {
        value: calculatedServiceMetricDimensionDefinitionToHclTerraform(this._dimensionDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedServiceMetricDimensionDefinitionList",
      },
      metric_definition: {
        value: calculatedServiceMetricMetricDefinitionToHclTerraform(this._metricDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CalculatedServiceMetricMetricDefinitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
