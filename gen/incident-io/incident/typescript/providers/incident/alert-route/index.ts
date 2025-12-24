// https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Which alert sources should this alert route match?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#alert_sources AlertRoute#alert_sources}
  */
  readonly alertSources: AlertRouteAlertSources[] | cdktf.IResolvable;
  /**
  * The channel configuration for this alert route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#channel_config AlertRoute#channel_config}
  */
  readonly channelConfig?: AlertRouteChannelConfig[] | cdktf.IResolvable;
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#condition_groups AlertRoute#condition_groups}
  */
  readonly conditionGroups: AlertRouteConditionGroups[] | cdktf.IResolvable;
  /**
  * Whether this alert route is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#enabled AlertRoute#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#escalation_config AlertRoute#escalation_config}
  */
  readonly escalationConfig: AlertRouteEscalationConfig;
  /**
  * The expressions to be prepared for use by steps and conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#expressions AlertRoute#expressions}
  */
  readonly expressions: AlertRouteExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#incident_config AlertRoute#incident_config}
  */
  readonly incidentConfig: AlertRouteIncidentConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#incident_template AlertRoute#incident_template}
  */
  readonly incidentTemplate: AlertRouteIncidentTemplate;
  /**
  * Whether this alert route is private. Private alert routes will only create private incidents from alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#is_private AlertRoute#is_private}
  */
  readonly isPrivate: boolean | cdktf.IResolvable;
  /**
  * The name of this alert route config, for the user's reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#name AlertRoute#name}
  */
  readonly name: string;
}
export interface AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteAlertSourcesConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteAlertSourcesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteAlertSourcesConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue;
}

export function alertRouteAlertSourcesConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteAlertSourcesConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertRouteAlertSourcesConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertRouteAlertSourcesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteAlertSourcesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteAlertSourcesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsValue) {
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

export class AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteAlertSourcesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteAlertSourcesConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operation AlertRoute#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#param_bindings AlertRoute#param_bindings}
  */
  readonly paramBindings: AlertRouteAlertSourcesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#subject AlertRoute#subject}
  */
  readonly subject: string;
}

export function alertRouteAlertSourcesConditionGroupsConditionsToTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertRouteAlertSourcesConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertRouteAlertSourcesConditionGroupsConditionsToHclTerraform(struct?: AlertRouteAlertSourcesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertRouteAlertSourcesConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteAlertSourcesConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteAlertSourcesConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteAlertSourcesConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertRouteAlertSourcesConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertRouteAlertSourcesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertRouteAlertSourcesConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteAlertSourcesConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteAlertSourcesConditionGroupsConditionsOutputReference {
    return new AlertRouteAlertSourcesConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteAlertSourcesConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#conditions AlertRoute#conditions}
  */
  readonly conditions: AlertRouteAlertSourcesConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRouteAlertSourcesConditionGroupsToTerraform(struct?: AlertRouteAlertSourcesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertRouteAlertSourcesConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertRouteAlertSourcesConditionGroupsToHclTerraform(struct?: AlertRouteAlertSourcesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertRouteAlertSourcesConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteAlertSourcesConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteAlertSourcesConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteAlertSourcesConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteAlertSourcesConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertRouteAlertSourcesConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRouteAlertSourcesConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertRouteAlertSourcesConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteAlertSourcesConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteAlertSourcesConditionGroupsOutputReference {
    return new AlertRouteAlertSourcesConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteAlertSources {
  /**
  * The alert source ID that will match for the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#alert_source_id AlertRoute#alert_source_id}
  */
  readonly alertSourceId: string;
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#condition_groups AlertRoute#condition_groups}
  */
  readonly conditionGroups: AlertRouteAlertSourcesConditionGroups[] | cdktf.IResolvable;
}

export function alertRouteAlertSourcesToTerraform(struct?: AlertRouteAlertSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_source_id: cdktf.stringToTerraform(struct!.alertSourceId),
    condition_groups: cdktf.listMapper(alertRouteAlertSourcesConditionGroupsToTerraform, false)(struct!.conditionGroups),
  }
}


export function alertRouteAlertSourcesToHclTerraform(struct?: AlertRouteAlertSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_source_id: {
      value: cdktf.stringToHclTerraform(struct!.alertSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition_groups: {
      value: cdktf.listMapperHcl(alertRouteAlertSourcesConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteAlertSourcesConditionGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteAlertSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteAlertSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSourceId = this._alertSourceId;
    }
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteAlertSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertSourceId = undefined;
      this._conditionGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertSourceId = value.alertSourceId;
      this._conditionGroups.internalValue = value.conditionGroups;
    }
  }

  // alert_source_id - computed: false, optional: false, required: true
  private _alertSourceId?: string; 
  public get alertSourceId() {
    return this.getStringAttribute('alert_source_id');
  }
  public set alertSourceId(value: string) {
    this._alertSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourceIdInput() {
    return this._alertSourceId;
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertRouteAlertSourcesConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRouteAlertSourcesConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }
}

export class AlertRouteAlertSourcesList extends cdktf.ComplexList {
  public internalValue? : AlertRouteAlertSources[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteAlertSourcesOutputReference {
    return new AlertRouteAlertSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteChannelConfigConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteChannelConfigConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteChannelConfigConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue;
}

export function alertRouteChannelConfigConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteChannelConfigConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertRouteChannelConfigConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertRouteChannelConfigConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteChannelConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteChannelConfigConditionGroupsConditionsParamBindingsValue) {
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

export class AlertRouteChannelConfigConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteChannelConfigConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteChannelConfigConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertRouteChannelConfigConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteChannelConfigConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operation AlertRoute#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#param_bindings AlertRoute#param_bindings}
  */
  readonly paramBindings: AlertRouteChannelConfigConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#subject AlertRoute#subject}
  */
  readonly subject: string;
}

export function alertRouteChannelConfigConditionGroupsConditionsToTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertRouteChannelConfigConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertRouteChannelConfigConditionGroupsConditionsToHclTerraform(struct?: AlertRouteChannelConfigConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertRouteChannelConfigConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteChannelConfigConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteChannelConfigConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertRouteChannelConfigConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertRouteChannelConfigConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertRouteChannelConfigConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteChannelConfigConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteChannelConfigConditionGroupsConditionsOutputReference {
    return new AlertRouteChannelConfigConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteChannelConfigConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#conditions AlertRoute#conditions}
  */
  readonly conditions: AlertRouteChannelConfigConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRouteChannelConfigConditionGroupsToTerraform(struct?: AlertRouteChannelConfigConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertRouteChannelConfigConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertRouteChannelConfigConditionGroupsToHclTerraform(struct?: AlertRouteChannelConfigConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertRouteChannelConfigConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteChannelConfigConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteChannelConfigConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertRouteChannelConfigConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRouteChannelConfigConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertRouteChannelConfigConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteChannelConfigConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteChannelConfigConditionGroupsOutputReference {
    return new AlertRouteChannelConfigConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteChannelConfigMsTeamsTargetsBindingArrayValueToTerraform(struct?: AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteChannelConfigMsTeamsTargetsBindingArrayValueToHclTerraform(struct?: AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigMsTeamsTargetsBindingArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteChannelConfigMsTeamsTargetsBindingArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteChannelConfigMsTeamsTargetsBindingArrayValueOutputReference {
    return new AlertRouteChannelConfigMsTeamsTargetsBindingArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteChannelConfigMsTeamsTargetsBindingValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteChannelConfigMsTeamsTargetsBindingValueToTerraform(struct?: AlertRouteChannelConfigMsTeamsTargetsBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteChannelConfigMsTeamsTargetsBindingValueToHclTerraform(struct?: AlertRouteChannelConfigMsTeamsTargetsBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigMsTeamsTargetsBindingValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteChannelConfigMsTeamsTargetsBindingValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigMsTeamsTargetsBindingValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteChannelConfigMsTeamsTargetsBinding {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteChannelConfigMsTeamsTargetsBindingValue;
}

export function alertRouteChannelConfigMsTeamsTargetsBindingToTerraform(struct?: AlertRouteChannelConfigMsTeamsTargetsBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteChannelConfigMsTeamsTargetsBindingArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteChannelConfigMsTeamsTargetsBindingValueToTerraform(struct!.value),
  }
}


export function alertRouteChannelConfigMsTeamsTargetsBindingToHclTerraform(struct?: AlertRouteChannelConfigMsTeamsTargetsBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteChannelConfigMsTeamsTargetsBindingArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteChannelConfigMsTeamsTargetsBindingArrayValueList",
    },
    value: {
      value: alertRouteChannelConfigMsTeamsTargetsBindingValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteChannelConfigMsTeamsTargetsBindingValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigMsTeamsTargetsBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteChannelConfigMsTeamsTargetsBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigMsTeamsTargetsBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteChannelConfigMsTeamsTargetsBindingArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteChannelConfigMsTeamsTargetsBindingArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteChannelConfigMsTeamsTargetsBindingValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteChannelConfigMsTeamsTargetsBindingValue) {
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
export interface AlertRouteChannelConfigMsTeamsTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#binding AlertRoute#binding}
  */
  readonly binding: AlertRouteChannelConfigMsTeamsTargetsBinding;
  /**
  * The visibility of the channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#channel_visibility AlertRoute#channel_visibility}
  */
  readonly channelVisibility: string;
}

export function alertRouteChannelConfigMsTeamsTargetsToTerraform(struct?: AlertRouteChannelConfigMsTeamsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: alertRouteChannelConfigMsTeamsTargetsBindingToTerraform(struct!.binding),
    channel_visibility: cdktf.stringToTerraform(struct!.channelVisibility),
  }
}


export function alertRouteChannelConfigMsTeamsTargetsToHclTerraform(struct?: AlertRouteChannelConfigMsTeamsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: alertRouteChannelConfigMsTeamsTargetsBindingToHclTerraform(struct!.binding),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteChannelConfigMsTeamsTargetsBinding",
    },
    channel_visibility: {
      value: cdktf.stringToHclTerraform(struct!.channelVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigMsTeamsTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteChannelConfigMsTeamsTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding?.internalValue;
    }
    if (this._channelVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelVisibility = this._channelVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigMsTeamsTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding.internalValue = undefined;
      this._channelVisibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding.internalValue = value.binding;
      this._channelVisibility = value.channelVisibility;
    }
  }

  // binding - computed: false, optional: false, required: true
  private _binding = new AlertRouteChannelConfigMsTeamsTargetsBindingOutputReference(this, "binding");
  public get binding() {
    return this._binding;
  }
  public putBinding(value: AlertRouteChannelConfigMsTeamsTargetsBinding) {
    this._binding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // channel_visibility - computed: false, optional: false, required: true
  private _channelVisibility?: string; 
  public get channelVisibility() {
    return this.getStringAttribute('channel_visibility');
  }
  public set channelVisibility(value: string) {
    this._channelVisibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelVisibilityInput() {
    return this._channelVisibility;
  }
}
export interface AlertRouteChannelConfigSlackTargetsBindingArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteChannelConfigSlackTargetsBindingArrayValueToTerraform(struct?: AlertRouteChannelConfigSlackTargetsBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteChannelConfigSlackTargetsBindingArrayValueToHclTerraform(struct?: AlertRouteChannelConfigSlackTargetsBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigSlackTargetsBindingArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteChannelConfigSlackTargetsBindingArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigSlackTargetsBindingArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteChannelConfigSlackTargetsBindingArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteChannelConfigSlackTargetsBindingArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteChannelConfigSlackTargetsBindingArrayValueOutputReference {
    return new AlertRouteChannelConfigSlackTargetsBindingArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteChannelConfigSlackTargetsBindingValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteChannelConfigSlackTargetsBindingValueToTerraform(struct?: AlertRouteChannelConfigSlackTargetsBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteChannelConfigSlackTargetsBindingValueToHclTerraform(struct?: AlertRouteChannelConfigSlackTargetsBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigSlackTargetsBindingValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteChannelConfigSlackTargetsBindingValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigSlackTargetsBindingValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteChannelConfigSlackTargetsBinding {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteChannelConfigSlackTargetsBindingArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteChannelConfigSlackTargetsBindingValue;
}

export function alertRouteChannelConfigSlackTargetsBindingToTerraform(struct?: AlertRouteChannelConfigSlackTargetsBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteChannelConfigSlackTargetsBindingArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteChannelConfigSlackTargetsBindingValueToTerraform(struct!.value),
  }
}


export function alertRouteChannelConfigSlackTargetsBindingToHclTerraform(struct?: AlertRouteChannelConfigSlackTargetsBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteChannelConfigSlackTargetsBindingArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteChannelConfigSlackTargetsBindingArrayValueList",
    },
    value: {
      value: alertRouteChannelConfigSlackTargetsBindingValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteChannelConfigSlackTargetsBindingValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigSlackTargetsBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteChannelConfigSlackTargetsBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigSlackTargetsBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteChannelConfigSlackTargetsBindingArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteChannelConfigSlackTargetsBindingArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteChannelConfigSlackTargetsBindingValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteChannelConfigSlackTargetsBindingValue) {
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
export interface AlertRouteChannelConfigSlackTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#binding AlertRoute#binding}
  */
  readonly binding: AlertRouteChannelConfigSlackTargetsBinding;
  /**
  * The visibility of the channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#channel_visibility AlertRoute#channel_visibility}
  */
  readonly channelVisibility: string;
}

export function alertRouteChannelConfigSlackTargetsToTerraform(struct?: AlertRouteChannelConfigSlackTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: alertRouteChannelConfigSlackTargetsBindingToTerraform(struct!.binding),
    channel_visibility: cdktf.stringToTerraform(struct!.channelVisibility),
  }
}


export function alertRouteChannelConfigSlackTargetsToHclTerraform(struct?: AlertRouteChannelConfigSlackTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: alertRouteChannelConfigSlackTargetsBindingToHclTerraform(struct!.binding),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteChannelConfigSlackTargetsBinding",
    },
    channel_visibility: {
      value: cdktf.stringToHclTerraform(struct!.channelVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigSlackTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteChannelConfigSlackTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding?.internalValue;
    }
    if (this._channelVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelVisibility = this._channelVisibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfigSlackTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding.internalValue = undefined;
      this._channelVisibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding.internalValue = value.binding;
      this._channelVisibility = value.channelVisibility;
    }
  }

  // binding - computed: false, optional: false, required: true
  private _binding = new AlertRouteChannelConfigSlackTargetsBindingOutputReference(this, "binding");
  public get binding() {
    return this._binding;
  }
  public putBinding(value: AlertRouteChannelConfigSlackTargetsBinding) {
    this._binding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // channel_visibility - computed: false, optional: false, required: true
  private _channelVisibility?: string; 
  public get channelVisibility() {
    return this.getStringAttribute('channel_visibility');
  }
  public set channelVisibility(value: string) {
    this._channelVisibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelVisibilityInput() {
    return this._channelVisibility;
  }
}
export interface AlertRouteChannelConfig {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#condition_groups AlertRoute#condition_groups}
  */
  readonly conditionGroups: AlertRouteChannelConfigConditionGroups[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#ms_teams_targets AlertRoute#ms_teams_targets}
  */
  readonly msTeamsTargets?: AlertRouteChannelConfigMsTeamsTargets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#slack_targets AlertRoute#slack_targets}
  */
  readonly slackTargets?: AlertRouteChannelConfigSlackTargets;
}

export function alertRouteChannelConfigToTerraform(struct?: AlertRouteChannelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(alertRouteChannelConfigConditionGroupsToTerraform, false)(struct!.conditionGroups),
    ms_teams_targets: alertRouteChannelConfigMsTeamsTargetsToTerraform(struct!.msTeamsTargets),
    slack_targets: alertRouteChannelConfigSlackTargetsToTerraform(struct!.slackTargets),
  }
}


export function alertRouteChannelConfigToHclTerraform(struct?: AlertRouteChannelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(alertRouteChannelConfigConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteChannelConfigConditionGroupsList",
    },
    ms_teams_targets: {
      value: alertRouteChannelConfigMsTeamsTargetsToHclTerraform(struct!.msTeamsTargets),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteChannelConfigMsTeamsTargets",
    },
    slack_targets: {
      value: alertRouteChannelConfigSlackTargetsToHclTerraform(struct!.slackTargets),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteChannelConfigSlackTargets",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteChannelConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteChannelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    if (this._msTeamsTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msTeamsTargets = this._msTeamsTargets?.internalValue;
    }
    if (this._slackTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slackTargets = this._slackTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteChannelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = undefined;
      this._msTeamsTargets.internalValue = undefined;
      this._slackTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = value.conditionGroups;
      this._msTeamsTargets.internalValue = value.msTeamsTargets;
      this._slackTargets.internalValue = value.slackTargets;
    }
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertRouteChannelConfigConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRouteChannelConfigConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // ms_teams_targets - computed: false, optional: true, required: false
  private _msTeamsTargets = new AlertRouteChannelConfigMsTeamsTargetsOutputReference(this, "ms_teams_targets");
  public get msTeamsTargets() {
    return this._msTeamsTargets;
  }
  public putMsTeamsTargets(value: AlertRouteChannelConfigMsTeamsTargets) {
    this._msTeamsTargets.internalValue = value;
  }
  public resetMsTeamsTargets() {
    this._msTeamsTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msTeamsTargetsInput() {
    return this._msTeamsTargets.internalValue;
  }

  // slack_targets - computed: false, optional: true, required: false
  private _slackTargets = new AlertRouteChannelConfigSlackTargetsOutputReference(this, "slack_targets");
  public get slackTargets() {
    return this._slackTargets;
  }
  public putSlackTargets(value: AlertRouteChannelConfigSlackTargets) {
    this._slackTargets.internalValue = value;
  }
  public resetSlackTargets() {
    this._slackTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackTargetsInput() {
    return this._slackTargets.internalValue;
  }
}

export class AlertRouteChannelConfigList extends cdktf.ComplexList {
  public internalValue? : AlertRouteChannelConfig[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteChannelConfigOutputReference {
    return new AlertRouteChannelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertRouteConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertRouteConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertRouteConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertRouteConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertRouteConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteConditionGroupsConditionsParamBindingsValue;
}

export function alertRouteConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertRouteConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertRouteConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertRouteConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertRouteConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteConditionGroupsConditionsParamBindingsValue) {
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

export class AlertRouteConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertRouteConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operation AlertRoute#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#param_bindings AlertRoute#param_bindings}
  */
  readonly paramBindings: AlertRouteConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#subject AlertRoute#subject}
  */
  readonly subject: string;
}

export function alertRouteConditionGroupsConditionsToTerraform(struct?: AlertRouteConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertRouteConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertRouteConditionGroupsConditionsToHclTerraform(struct?: AlertRouteConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertRouteConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertRouteConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertRouteConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertRouteConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteConditionGroupsConditionsOutputReference {
    return new AlertRouteConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#conditions AlertRoute#conditions}
  */
  readonly conditions: AlertRouteConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRouteConditionGroupsToTerraform(struct?: AlertRouteConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertRouteConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertRouteConditionGroupsToHclTerraform(struct?: AlertRouteConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertRouteConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertRouteConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRouteConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertRouteConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteConditionGroupsOutputReference {
    return new AlertRouteConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueToTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueToHclTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueOutputReference {
    return new AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteEscalationConfigEscalationTargetsEscalationPathsValueToTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteEscalationConfigEscalationTargetsEscalationPathsValueToHclTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigEscalationTargetsEscalationPathsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteEscalationConfigEscalationTargetsEscalationPaths {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue;
}

export function alertRouteEscalationConfigEscalationTargetsEscalationPathsToTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsEscalationPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteEscalationConfigEscalationTargetsEscalationPathsValueToTerraform(struct!.value),
  }
}


export function alertRouteEscalationConfigEscalationTargetsEscalationPathsToHclTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsEscalationPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueList",
    },
    value: {
      value: alertRouteEscalationConfigEscalationTargetsEscalationPathsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigEscalationTargetsEscalationPathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteEscalationConfigEscalationTargetsEscalationPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfigEscalationTargetsEscalationPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteEscalationConfigEscalationTargetsEscalationPathsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteEscalationConfigEscalationTargetsEscalationPathsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteEscalationConfigEscalationTargetsEscalationPathsValue) {
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
export interface AlertRouteEscalationConfigEscalationTargetsUsersArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteEscalationConfigEscalationTargetsUsersArrayValueToTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsUsersArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteEscalationConfigEscalationTargetsUsersArrayValueToHclTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsUsersArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigEscalationTargetsUsersArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteEscalationConfigEscalationTargetsUsersArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfigEscalationTargetsUsersArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteEscalationConfigEscalationTargetsUsersArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteEscalationConfigEscalationTargetsUsersArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteEscalationConfigEscalationTargetsUsersArrayValueOutputReference {
    return new AlertRouteEscalationConfigEscalationTargetsUsersArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteEscalationConfigEscalationTargetsUsersValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteEscalationConfigEscalationTargetsUsersValueToTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsUsersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteEscalationConfigEscalationTargetsUsersValueToHclTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsUsersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigEscalationTargetsUsersValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteEscalationConfigEscalationTargetsUsersValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfigEscalationTargetsUsersValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteEscalationConfigEscalationTargetsUsers {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteEscalationConfigEscalationTargetsUsersArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteEscalationConfigEscalationTargetsUsersValue;
}

export function alertRouteEscalationConfigEscalationTargetsUsersToTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteEscalationConfigEscalationTargetsUsersArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteEscalationConfigEscalationTargetsUsersValueToTerraform(struct!.value),
  }
}


export function alertRouteEscalationConfigEscalationTargetsUsersToHclTerraform(struct?: AlertRouteEscalationConfigEscalationTargetsUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteEscalationConfigEscalationTargetsUsersArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteEscalationConfigEscalationTargetsUsersArrayValueList",
    },
    value: {
      value: alertRouteEscalationConfigEscalationTargetsUsersValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteEscalationConfigEscalationTargetsUsersValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigEscalationTargetsUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteEscalationConfigEscalationTargetsUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfigEscalationTargetsUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteEscalationConfigEscalationTargetsUsersArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteEscalationConfigEscalationTargetsUsersArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteEscalationConfigEscalationTargetsUsersValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteEscalationConfigEscalationTargetsUsersValue) {
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
export interface AlertRouteEscalationConfigEscalationTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#escalation_paths AlertRoute#escalation_paths}
  */
  readonly escalationPaths?: AlertRouteEscalationConfigEscalationTargetsEscalationPaths;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#users AlertRoute#users}
  */
  readonly users?: AlertRouteEscalationConfigEscalationTargetsUsers;
}

export function alertRouteEscalationConfigEscalationTargetsToTerraform(struct?: AlertRouteEscalationConfigEscalationTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_paths: alertRouteEscalationConfigEscalationTargetsEscalationPathsToTerraform(struct!.escalationPaths),
    users: alertRouteEscalationConfigEscalationTargetsUsersToTerraform(struct!.users),
  }
}


export function alertRouteEscalationConfigEscalationTargetsToHclTerraform(struct?: AlertRouteEscalationConfigEscalationTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_paths: {
      value: alertRouteEscalationConfigEscalationTargetsEscalationPathsToHclTerraform(struct!.escalationPaths),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteEscalationConfigEscalationTargetsEscalationPaths",
    },
    users: {
      value: alertRouteEscalationConfigEscalationTargetsUsersToHclTerraform(struct!.users),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteEscalationConfigEscalationTargetsUsers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigEscalationTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteEscalationConfigEscalationTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationPaths = this._escalationPaths?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfigEscalationTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escalationPaths.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escalationPaths.internalValue = value.escalationPaths;
      this._users.internalValue = value.users;
    }
  }

  // escalation_paths - computed: false, optional: true, required: false
  private _escalationPaths = new AlertRouteEscalationConfigEscalationTargetsEscalationPathsOutputReference(this, "escalation_paths");
  public get escalationPaths() {
    return this._escalationPaths;
  }
  public putEscalationPaths(value: AlertRouteEscalationConfigEscalationTargetsEscalationPaths) {
    this._escalationPaths.internalValue = value;
  }
  public resetEscalationPaths() {
    this._escalationPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPathsInput() {
    return this._escalationPaths.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new AlertRouteEscalationConfigEscalationTargetsUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: AlertRouteEscalationConfigEscalationTargetsUsers) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}

export class AlertRouteEscalationConfigEscalationTargetsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteEscalationConfigEscalationTargets[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteEscalationConfigEscalationTargetsOutputReference {
    return new AlertRouteEscalationConfigEscalationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteEscalationConfig {
  /**
  * Should we auto cancel escalations when all alerts are resolved?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#auto_cancel_escalations AlertRoute#auto_cancel_escalations}
  */
  readonly autoCancelEscalations: boolean | cdktf.IResolvable;
  /**
  * Targets for escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#escalation_targets AlertRoute#escalation_targets}
  */
  readonly escalationTargets: AlertRouteEscalationConfigEscalationTargets[] | cdktf.IResolvable;
}

export function alertRouteEscalationConfigToTerraform(struct?: AlertRouteEscalationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_cancel_escalations: cdktf.booleanToTerraform(struct!.autoCancelEscalations),
    escalation_targets: cdktf.listMapper(alertRouteEscalationConfigEscalationTargetsToTerraform, false)(struct!.escalationTargets),
  }
}


export function alertRouteEscalationConfigToHclTerraform(struct?: AlertRouteEscalationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_cancel_escalations: {
      value: cdktf.booleanToHclTerraform(struct!.autoCancelEscalations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    escalation_targets: {
      value: cdktf.listMapperHcl(alertRouteEscalationConfigEscalationTargetsToHclTerraform, false)(struct!.escalationTargets),
      isBlock: true,
      type: "set",
      storageClassType: "AlertRouteEscalationConfigEscalationTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteEscalationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteEscalationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCancelEscalations !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCancelEscalations = this._autoCancelEscalations;
    }
    if (this._escalationTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationTargets = this._escalationTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteEscalationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCancelEscalations = undefined;
      this._escalationTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCancelEscalations = value.autoCancelEscalations;
      this._escalationTargets.internalValue = value.escalationTargets;
    }
  }

  // auto_cancel_escalations - computed: false, optional: false, required: true
  private _autoCancelEscalations?: boolean | cdktf.IResolvable; 
  public get autoCancelEscalations() {
    return this.getBooleanAttribute('auto_cancel_escalations');
  }
  public set autoCancelEscalations(value: boolean | cdktf.IResolvable) {
    this._autoCancelEscalations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCancelEscalationsInput() {
    return this._autoCancelEscalations;
  }

  // escalation_targets - computed: false, optional: false, required: true
  private _escalationTargets = new AlertRouteEscalationConfigEscalationTargetsList(this, "escalation_targets", true);
  public get escalationTargets() {
    return this._escalationTargets;
  }
  public putEscalationTargets(value: AlertRouteEscalationConfigEscalationTargets[] | cdktf.IResolvable) {
    this._escalationTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationTargetsInput() {
    return this._escalationTargets.internalValue;
  }
}
export interface AlertRouteExpressionsElseBranchResultArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsElseBranchResultArrayValueToTerraform(struct?: AlertRouteExpressionsElseBranchResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsElseBranchResultArrayValueToHclTerraform(struct?: AlertRouteExpressionsElseBranchResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsElseBranchResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsElseBranchResultArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsElseBranchResultArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteExpressionsElseBranchResultArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsElseBranchResultArrayValueOutputReference {
    return new AlertRouteExpressionsElseBranchResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsElseBranchResultValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsElseBranchResultValueToTerraform(struct?: AlertRouteExpressionsElseBranchResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsElseBranchResultValueToHclTerraform(struct?: AlertRouteExpressionsElseBranchResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsElseBranchResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsElseBranchResultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsElseBranchResultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteExpressionsElseBranchResult {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteExpressionsElseBranchResultValue;
}

export function alertRouteExpressionsElseBranchResultToTerraform(struct?: AlertRouteExpressionsElseBranchResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteExpressionsElseBranchResultArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteExpressionsElseBranchResultValueToTerraform(struct!.value),
  }
}


export function alertRouteExpressionsElseBranchResultToHclTerraform(struct?: AlertRouteExpressionsElseBranchResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteExpressionsElseBranchResultArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsElseBranchResultArrayValueList",
    },
    value: {
      value: alertRouteExpressionsElseBranchResultValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsElseBranchResultValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsElseBranchResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsElseBranchResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsElseBranchResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteExpressionsElseBranchResultArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteExpressionsElseBranchResultArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteExpressionsElseBranchResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteExpressionsElseBranchResultValue) {
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
export interface AlertRouteExpressionsElseBranch {
  /**
  * The result assumed if the else branch is reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#result AlertRoute#result}
  */
  readonly result: AlertRouteExpressionsElseBranchResult;
}

export function alertRouteExpressionsElseBranchToTerraform(struct?: AlertRouteExpressionsElseBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    result: alertRouteExpressionsElseBranchResultToTerraform(struct!.result),
  }
}


export function alertRouteExpressionsElseBranchToHclTerraform(struct?: AlertRouteExpressionsElseBranch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    result: {
      value: alertRouteExpressionsElseBranchResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsElseBranchResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsElseBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsElseBranch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsElseBranch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._result.internalValue = value.result;
    }
  }

  // result - computed: false, optional: false, required: true
  private _result = new AlertRouteExpressionsElseBranchResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: AlertRouteExpressionsElseBranchResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue;
}

export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsValue) {
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

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operation AlertRoute#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#param_bindings AlertRoute#param_bindings}
  */
  readonly paramBindings: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#subject AlertRoute#subject}
  */
  readonly subject: string;
}

export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference {
    return new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#conditions AlertRoute#conditions}
  */
  readonly conditions: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesConditionGroupsToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsOutputReference {
    return new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsOperationsBranchesBranchesResultArrayValueToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesResultArrayValueToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesResultArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteExpressionsOperationsBranchesBranchesResultArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsBranchesBranchesResultArrayValueOutputReference {
    return new AlertRouteExpressionsOperationsBranchesBranchesResultArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesResultValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsOperationsBranchesBranchesResultValueToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesResultValueToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesResultValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesResultValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteExpressionsOperationsBranchesBranchesResult {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteExpressionsOperationsBranchesBranchesResultValue;
}

export function alertRouteExpressionsOperationsBranchesBranchesResultToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteExpressionsOperationsBranchesBranchesResultArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteExpressionsOperationsBranchesBranchesResultValueToTerraform(struct!.value),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesResultToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsBranchesBranchesResultArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesResultArrayValueList",
    },
    value: {
      value: alertRouteExpressionsOperationsBranchesBranchesResultValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesResultValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranchesResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteExpressionsOperationsBranchesBranchesResultArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteExpressionsOperationsBranchesBranchesResultArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteExpressionsOperationsBranchesBranchesResultValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteExpressionsOperationsBranchesBranchesResultValue) {
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
export interface AlertRouteExpressionsOperationsBranchesBranches {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#condition_groups AlertRoute#condition_groups}
  */
  readonly conditionGroups: AlertRouteExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable;
  /**
  * The result assumed if the condition groups are satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#result AlertRoute#result}
  */
  readonly result: AlertRouteExpressionsOperationsBranchesBranchesResult;
}

export function alertRouteExpressionsOperationsBranchesBranchesToTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsToTerraform, false)(struct!.conditionGroups),
    result: alertRouteExpressionsOperationsBranchesBranchesResultToTerraform(struct!.result),
  }
}


export function alertRouteExpressionsOperationsBranchesBranchesToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsBranchesBranchesConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsList",
    },
    result: {
      value: alertRouteExpressionsOperationsBranchesBranchesResultToHclTerraform(struct!.result),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesResult",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesBranchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsBranchesBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    if (this._result?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = undefined;
      this._result.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = value.conditionGroups;
      this._result.internalValue = value.result;
    }
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertRouteExpressionsOperationsBranchesBranchesConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRouteExpressionsOperationsBranchesBranchesConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // result - computed: false, optional: false, required: true
  private _result = new AlertRouteExpressionsOperationsBranchesBranchesResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }
  public putResult(value: AlertRouteExpressionsOperationsBranchesBranchesResult) {
    this._result.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result.internalValue;
  }
}

export class AlertRouteExpressionsOperationsBranchesBranchesList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsBranchesBranches[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsBranchesBranchesOutputReference {
    return new AlertRouteExpressionsOperationsBranchesBranchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsBranchesReturns {
  /**
  * Whether the return value should be single or multi-value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array AlertRoute#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * Expected return type of this expression (what to try casting the result to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#type AlertRoute#type}
  */
  readonly type: string;
}

export function alertRouteExpressionsOperationsBranchesReturnsToTerraform(struct?: AlertRouteExpressionsOperationsBranchesReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.booleanToTerraform(struct!.array),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function alertRouteExpressionsOperationsBranchesReturnsToHclTerraform(struct?: AlertRouteExpressionsOperationsBranchesReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsBranchesReturns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranchesReturns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._type = value.type;
    }
  }

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
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
}
export interface AlertRouteExpressionsOperationsBranches {
  /**
  * The branches to apply for this operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#branches AlertRoute#branches}
  */
  readonly branches: AlertRouteExpressionsOperationsBranchesBranches[] | cdktf.IResolvable;
  /**
  * The return type of an operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#returns AlertRoute#returns}
  */
  readonly returns: AlertRouteExpressionsOperationsBranchesReturns;
}

export function alertRouteExpressionsOperationsBranchesToTerraform(struct?: AlertRouteExpressionsOperationsBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: cdktf.listMapper(alertRouteExpressionsOperationsBranchesBranchesToTerraform, false)(struct!.branches),
    returns: alertRouteExpressionsOperationsBranchesReturnsToTerraform(struct!.returns),
  }
}


export function alertRouteExpressionsOperationsBranchesToHclTerraform(struct?: AlertRouteExpressionsOperationsBranches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsBranchesBranchesToHclTerraform, false)(struct!.branches),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsBranchesBranchesList",
    },
    returns: {
      value: alertRouteExpressionsOperationsBranchesReturnsToHclTerraform(struct!.returns),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsBranchesReturns",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsBranchesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsBranches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._returns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returns = this._returns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsBranches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._returns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._returns.internalValue = value.returns;
    }
  }

  // branches - computed: false, optional: false, required: true
  private _branches = new AlertRouteExpressionsOperationsBranchesBranchesList(this, "branches", false);
  public get branches() {
    return this._branches;
  }
  public putBranches(value: AlertRouteExpressionsOperationsBranchesBranches[] | cdktf.IResolvable) {
    this._branches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // returns - computed: false, optional: false, required: true
  private _returns = new AlertRouteExpressionsOperationsBranchesReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }
  public putReturns(value: AlertRouteExpressionsOperationsBranchesReturns) {
    this._returns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns.internalValue;
  }
}
export interface AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue;
}

export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsValue) {
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

export class AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsFilterConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operation AlertRoute#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#param_bindings AlertRoute#param_bindings}
  */
  readonly paramBindings: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#subject AlertRoute#subject}
  */
  readonly subject: string;
}

export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsToTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertRouteExpressionsOperationsFilterConditionGroupsConditionsToHclTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsFilterConditionGroupsConditionsOutputReference {
    return new AlertRouteExpressionsOperationsFilterConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsFilterConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#conditions AlertRoute#conditions}
  */
  readonly conditions: AlertRouteExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRouteExpressionsOperationsFilterConditionGroupsToTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertRouteExpressionsOperationsFilterConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertRouteExpressionsOperationsFilterConditionGroupsToHclTerraform(struct?: AlertRouteExpressionsOperationsFilterConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsFilterConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsFilterConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperationsFilterConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsFilterConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertRouteExpressionsOperationsFilterConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRouteExpressionsOperationsFilterConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertRouteExpressionsOperationsFilterConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsFilterConditionGroupsOutputReference {
    return new AlertRouteExpressionsOperationsFilterConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressionsOperationsFilter {
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#condition_groups AlertRoute#condition_groups}
  */
  readonly conditionGroups: AlertRouteExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable;
}

export function alertRouteExpressionsOperationsFilterToTerraform(struct?: AlertRouteExpressionsOperationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(alertRouteExpressionsOperationsFilterConditionGroupsToTerraform, false)(struct!.conditionGroups),
  }
}


export function alertRouteExpressionsOperationsFilterToHclTerraform(struct?: AlertRouteExpressionsOperationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsFilterConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsFilterConditionGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionGroups.internalValue = value.conditionGroups;
    }
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertRouteExpressionsOperationsFilterConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRouteExpressionsOperationsFilterConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }
}
export interface AlertRouteExpressionsOperationsNavigate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference: string;
}

export function alertRouteExpressionsOperationsNavigateToTerraform(struct?: AlertRouteExpressionsOperationsNavigate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteExpressionsOperationsNavigateToHclTerraform(struct?: AlertRouteExpressionsOperationsNavigate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsNavigateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsNavigate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsNavigate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference = value.reference;
    }
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteExpressionsOperationsParseReturns {
  /**
  * Whether the return value should be single or multi-value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array AlertRoute#array}
  */
  readonly array: boolean | cdktf.IResolvable;
  /**
  * Expected return type of this expression (what to try casting the result to)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#type AlertRoute#type}
  */
  readonly type: string;
}

export function alertRouteExpressionsOperationsParseReturnsToTerraform(struct?: AlertRouteExpressionsOperationsParseReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.booleanToTerraform(struct!.array),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function alertRouteExpressionsOperationsParseReturnsToHclTerraform(struct?: AlertRouteExpressionsOperationsParseReturns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.booleanToHclTerraform(struct!.array),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsParseReturnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsParseReturns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsParseReturns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._type = value.type;
    }
  }

  // array - computed: false, optional: false, required: true
  private _array?: boolean | cdktf.IResolvable; 
  public get array() {
    return this.getBooleanAttribute('array');
  }
  public set array(value: boolean | cdktf.IResolvable) {
    this._array = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
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
}
export interface AlertRouteExpressionsOperationsParse {
  /**
  * The return type of an operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#returns AlertRoute#returns}
  */
  readonly returns: AlertRouteExpressionsOperationsParseReturns;
  /**
  * The ES5 Javascript expression to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#source AlertRoute#source}
  */
  readonly source: string;
}

export function alertRouteExpressionsOperationsParseToTerraform(struct?: AlertRouteExpressionsOperationsParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    returns: alertRouteExpressionsOperationsParseReturnsToTerraform(struct!.returns),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function alertRouteExpressionsOperationsParseToHclTerraform(struct?: AlertRouteExpressionsOperationsParse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    returns: {
      value: alertRouteExpressionsOperationsParseReturnsToHclTerraform(struct!.returns),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsParseReturns",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsParseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteExpressionsOperationsParse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returns = this._returns?.internalValue;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperationsParse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._returns.internalValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._returns.internalValue = value.returns;
      this._source = value.source;
    }
  }

  // returns - computed: false, optional: false, required: true
  private _returns = new AlertRouteExpressionsOperationsParseReturnsOutputReference(this, "returns");
  public get returns() {
    return this._returns;
  }
  public putReturns(value: AlertRouteExpressionsOperationsParseReturns) {
    this._returns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnsInput() {
    return this._returns.internalValue;
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
}
export interface AlertRouteExpressionsOperations {
  /**
  * An operation type that allows for a value to be set conditionally by a series of logical branches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#branches AlertRoute#branches}
  */
  readonly branches?: AlertRouteExpressionsOperationsBranches;
  /**
  * An operation type that allows values to be filtered out by conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#filter AlertRoute#filter}
  */
  readonly filter?: AlertRouteExpressionsOperationsFilter;
  /**
  * An operation type that allows attributes of a type to be accessed by reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#navigate AlertRoute#navigate}
  */
  readonly navigate?: AlertRouteExpressionsOperationsNavigate;
  /**
  * Indicates which operation type to execute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operation_type AlertRoute#operation_type}
  */
  readonly operationType: string;
  /**
  * An operation type that allows a value to parsed from within a JSON object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#parse AlertRoute#parse}
  */
  readonly parse?: AlertRouteExpressionsOperationsParse;
}

export function alertRouteExpressionsOperationsToTerraform(struct?: AlertRouteExpressionsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branches: alertRouteExpressionsOperationsBranchesToTerraform(struct!.branches),
    filter: alertRouteExpressionsOperationsFilterToTerraform(struct!.filter),
    navigate: alertRouteExpressionsOperationsNavigateToTerraform(struct!.navigate),
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    parse: alertRouteExpressionsOperationsParseToTerraform(struct!.parse),
  }
}


export function alertRouteExpressionsOperationsToHclTerraform(struct?: AlertRouteExpressionsOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branches: {
      value: alertRouteExpressionsOperationsBranchesToHclTerraform(struct!.branches),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsBranches",
    },
    filter: {
      value: alertRouteExpressionsOperationsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsFilter",
    },
    navigate: {
      value: alertRouteExpressionsOperationsNavigateToHclTerraform(struct!.navigate),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsNavigate",
    },
    operation_type: {
      value: cdktf.stringToHclTerraform(struct!.operationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse: {
      value: alertRouteExpressionsOperationsParseToHclTerraform(struct!.parse),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsOperationsParse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressionsOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._navigate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.navigate = this._navigate?.internalValue;
    }
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._parse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parse = this._parse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressionsOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branches.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._navigate.internalValue = undefined;
      this._operationType = undefined;
      this._parse.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branches.internalValue = value.branches;
      this._filter.internalValue = value.filter;
      this._navigate.internalValue = value.navigate;
      this._operationType = value.operationType;
      this._parse.internalValue = value.parse;
    }
  }

  // branches - computed: false, optional: true, required: false
  private _branches = new AlertRouteExpressionsOperationsBranchesOutputReference(this, "branches");
  public get branches() {
    return this._branches;
  }
  public putBranches(value: AlertRouteExpressionsOperationsBranches) {
    this._branches.internalValue = value;
  }
  public resetBranches() {
    this._branches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new AlertRouteExpressionsOperationsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: AlertRouteExpressionsOperationsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // navigate - computed: false, optional: true, required: false
  private _navigate = new AlertRouteExpressionsOperationsNavigateOutputReference(this, "navigate");
  public get navigate() {
    return this._navigate;
  }
  public putNavigate(value: AlertRouteExpressionsOperationsNavigate) {
    this._navigate.internalValue = value;
  }
  public resetNavigate() {
    this._navigate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get navigateInput() {
    return this._navigate.internalValue;
  }

  // operation_type - computed: false, optional: false, required: true
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // parse - computed: false, optional: true, required: false
  private _parse = new AlertRouteExpressionsOperationsParseOutputReference(this, "parse");
  public get parse() {
    return this._parse;
  }
  public putParse(value: AlertRouteExpressionsOperationsParse) {
    this._parse.internalValue = value;
  }
  public resetParse() {
    this._parse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseInput() {
    return this._parse.internalValue;
  }
}

export class AlertRouteExpressionsOperationsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressionsOperations[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOperationsOutputReference {
    return new AlertRouteExpressionsOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteExpressions {
  /**
  * The else branch to resort to if all operations fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#else_branch AlertRoute#else_branch}
  */
  readonly elseBranch?: AlertRouteExpressionsElseBranch;
  /**
  * The human readable label of the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#label AlertRoute#label}
  */
  readonly label: string;
  /**
  * The operations to execute in sequence for this expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operations AlertRoute#operations}
  */
  readonly operations: AlertRouteExpressionsOperations[] | cdktf.IResolvable;
  /**
  * A short ID that can be used to reference the expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference: string;
  /**
  * The root reference for this expression (i.e. where the expression starts)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#root_reference AlertRoute#root_reference}
  */
  readonly rootReference: string;
}

export function alertRouteExpressionsToTerraform(struct?: AlertRouteExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    else_branch: alertRouteExpressionsElseBranchToTerraform(struct!.elseBranch),
    label: cdktf.stringToTerraform(struct!.label),
    operations: cdktf.listMapper(alertRouteExpressionsOperationsToTerraform, false)(struct!.operations),
    reference: cdktf.stringToTerraform(struct!.reference),
    root_reference: cdktf.stringToTerraform(struct!.rootReference),
  }
}


export function alertRouteExpressionsToHclTerraform(struct?: AlertRouteExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    else_branch: {
      value: alertRouteExpressionsElseBranchToHclTerraform(struct!.elseBranch),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteExpressionsElseBranch",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations: {
      value: cdktf.listMapperHcl(alertRouteExpressionsOperationsToHclTerraform, false)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteExpressionsOperationsList",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_reference: {
      value: cdktf.stringToHclTerraform(struct!.rootReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elseBranch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elseBranch = this._elseBranch?.internalValue;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    if (this._rootReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootReference = this._rootReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elseBranch.internalValue = undefined;
      this._label = undefined;
      this._operations.internalValue = undefined;
      this._reference = undefined;
      this._rootReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elseBranch.internalValue = value.elseBranch;
      this._label = value.label;
      this._operations.internalValue = value.operations;
      this._reference = value.reference;
      this._rootReference = value.rootReference;
    }
  }

  // else_branch - computed: false, optional: true, required: false
  private _elseBranch = new AlertRouteExpressionsElseBranchOutputReference(this, "else_branch");
  public get elseBranch() {
    return this._elseBranch;
  }
  public putElseBranch(value: AlertRouteExpressionsElseBranch) {
    this._elseBranch.internalValue = value;
  }
  public resetElseBranch() {
    this._elseBranch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseBranchInput() {
    return this._elseBranch.internalValue;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // operations - computed: false, optional: false, required: true
  private _operations = new AlertRouteExpressionsOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: AlertRouteExpressionsOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // root_reference - computed: false, optional: false, required: true
  private _rootReference?: string; 
  public get rootReference() {
    return this.getStringAttribute('root_reference');
  }
  public set rootReference(value: string) {
    this._rootReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootReferenceInput() {
    return this._rootReference;
  }
}

export class AlertRouteExpressionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteExpressions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteExpressionsOutputReference {
    return new AlertRouteExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueToTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueToHclTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueOutputReference {
    return new AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentConfigConditionGroupsConditionsParamBindingsValueToTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentConfigConditionGroupsConditionsParamBindingsValueToHclTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentConfigConditionGroupsConditionsParamBindings {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue;
}

export function alertRouteIncidentConfigConditionGroupsConditionsParamBindingsToTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteIncidentConfigConditionGroupsConditionsParamBindingsValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentConfigConditionGroupsConditionsParamBindingsToHclTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueList",
    },
    value: {
      value: alertRouteIncidentConfigConditionGroupsConditionsParamBindingsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentConfigConditionGroupsConditionsParamBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsValue) {
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

export class AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentConfigConditionGroupsConditionsParamBindings[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsOutputReference {
    return new AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentConfigConditionGroupsConditions {
  /**
  * The logical operation to be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#operation AlertRoute#operation}
  */
  readonly operation: string;
  /**
  * Bindings for the operation parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#param_bindings AlertRoute#param_bindings}
  */
  readonly paramBindings: AlertRouteIncidentConfigConditionGroupsConditionsParamBindings[] | cdktf.IResolvable;
  /**
  * The subject of the condition, on which the operation is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#subject AlertRoute#subject}
  */
  readonly subject: string;
}

export function alertRouteIncidentConfigConditionGroupsConditionsToTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    param_bindings: cdktf.listMapper(alertRouteIncidentConfigConditionGroupsConditionsParamBindingsToTerraform, false)(struct!.paramBindings),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function alertRouteIncidentConfigConditionGroupsConditionsToHclTerraform(struct?: AlertRouteIncidentConfigConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_bindings: {
      value: cdktf.listMapperHcl(alertRouteIncidentConfigConditionGroupsConditionsParamBindingsToHclTerraform, false)(struct!.paramBindings),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentConfigConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentConfigConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._paramBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramBindings = this._paramBindings?.internalValue;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentConfigConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._paramBindings.internalValue = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._paramBindings.internalValue = value.paramBindings;
      this._subject = value.subject;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // param_bindings - computed: false, optional: false, required: true
  private _paramBindings = new AlertRouteIncidentConfigConditionGroupsConditionsParamBindingsList(this, "param_bindings", false);
  public get paramBindings() {
    return this._paramBindings;
  }
  public putParamBindings(value: AlertRouteIncidentConfigConditionGroupsConditionsParamBindings[] | cdktf.IResolvable) {
    this._paramBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramBindingsInput() {
    return this._paramBindings.internalValue;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class AlertRouteIncidentConfigConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentConfigConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentConfigConditionGroupsConditionsOutputReference {
    return new AlertRouteIncidentConfigConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentConfigConditionGroups {
  /**
  * The prerequisite conditions that must all be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#conditions AlertRoute#conditions}
  */
  readonly conditions: AlertRouteIncidentConfigConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRouteIncidentConfigConditionGroupsToTerraform(struct?: AlertRouteIncidentConfigConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(alertRouteIncidentConfigConditionGroupsConditionsToTerraform, false)(struct!.conditions),
  }
}


export function alertRouteIncidentConfigConditionGroupsToHclTerraform(struct?: AlertRouteIncidentConfigConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(alertRouteIncidentConfigConditionGroupsConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentConfigConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentConfigConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentConfigConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentConfigConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AlertRouteIncidentConfigConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRouteIncidentConfigConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertRouteIncidentConfigConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentConfigConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentConfigConditionGroupsOutputReference {
    return new AlertRouteIncidentConfigConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentConfigGroupingKeys {
  /**
  * The alert attribute ID to use as a grouping key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference: string;
}

export function alertRouteIncidentConfigGroupingKeysToTerraform(struct?: AlertRouteIncidentConfigGroupingKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentConfigGroupingKeysToHclTerraform(struct?: AlertRouteIncidentConfigGroupingKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentConfigGroupingKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentConfigGroupingKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentConfigGroupingKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference = value.reference;
    }
  }

  // reference - computed: false, optional: false, required: true
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentConfigGroupingKeysList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentConfigGroupingKeys[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentConfigGroupingKeysOutputReference {
    return new AlertRouteIncidentConfigGroupingKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentConfig {
  /**
  * Should triage incidents be declined when alerts are resolved?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#auto_decline_enabled AlertRoute#auto_decline_enabled}
  */
  readonly autoDeclineEnabled: boolean | cdktf.IResolvable;
  /**
  * Should grouped alerts automatically be related to active incidents without confirmation?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#auto_relate_grouped_alerts AlertRoute#auto_relate_grouped_alerts}
  */
  readonly autoRelateGroupedAlerts?: boolean | cdktf.IResolvable;
  /**
  * Groups of prerequisite conditions. All conditions in at least one group must be satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#condition_groups AlertRoute#condition_groups}
  */
  readonly conditionGroups: AlertRouteIncidentConfigConditionGroups[] | cdktf.IResolvable;
  /**
  * How long should the escalation defer time be?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#defer_time_seconds AlertRoute#defer_time_seconds}
  */
  readonly deferTimeSeconds: number;
  /**
  * Whether incident creation is enabled for this alert route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#enabled AlertRoute#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Which attributes should this alert route use to group alerts?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#grouping_keys AlertRoute#grouping_keys}
  */
  readonly groupingKeys: AlertRouteIncidentConfigGroupingKeys[] | cdktf.IResolvable;
  /**
  * How large should the grouping window be?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#grouping_window_seconds AlertRoute#grouping_window_seconds}
  */
  readonly groupingWindowSeconds: number;
}

export function alertRouteIncidentConfigToTerraform(struct?: AlertRouteIncidentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_decline_enabled: cdktf.booleanToTerraform(struct!.autoDeclineEnabled),
    auto_relate_grouped_alerts: cdktf.booleanToTerraform(struct!.autoRelateGroupedAlerts),
    condition_groups: cdktf.listMapper(alertRouteIncidentConfigConditionGroupsToTerraform, false)(struct!.conditionGroups),
    defer_time_seconds: cdktf.numberToTerraform(struct!.deferTimeSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    grouping_keys: cdktf.listMapper(alertRouteIncidentConfigGroupingKeysToTerraform, false)(struct!.groupingKeys),
    grouping_window_seconds: cdktf.numberToTerraform(struct!.groupingWindowSeconds),
  }
}


export function alertRouteIncidentConfigToHclTerraform(struct?: AlertRouteIncidentConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_decline_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoDeclineEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_relate_grouped_alerts: {
      value: cdktf.booleanToHclTerraform(struct!.autoRelateGroupedAlerts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition_groups: {
      value: cdktf.listMapperHcl(alertRouteIncidentConfigConditionGroupsToHclTerraform, false)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentConfigConditionGroupsList",
    },
    defer_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.deferTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grouping_keys: {
      value: cdktf.listMapperHcl(alertRouteIncidentConfigGroupingKeysToHclTerraform, false)(struct!.groupingKeys),
      isBlock: true,
      type: "set",
      storageClassType: "AlertRouteIncidentConfigGroupingKeysList",
    },
    grouping_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.groupingWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeclineEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeclineEnabled = this._autoDeclineEnabled;
    }
    if (this._autoRelateGroupedAlerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRelateGroupedAlerts = this._autoRelateGroupedAlerts;
    }
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    if (this._deferTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deferTimeSeconds = this._deferTimeSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupingKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingKeys = this._groupingKeys?.internalValue;
    }
    if (this._groupingWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingWindowSeconds = this._groupingWindowSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoDeclineEnabled = undefined;
      this._autoRelateGroupedAlerts = undefined;
      this._conditionGroups.internalValue = undefined;
      this._deferTimeSeconds = undefined;
      this._enabled = undefined;
      this._groupingKeys.internalValue = undefined;
      this._groupingWindowSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoDeclineEnabled = value.autoDeclineEnabled;
      this._autoRelateGroupedAlerts = value.autoRelateGroupedAlerts;
      this._conditionGroups.internalValue = value.conditionGroups;
      this._deferTimeSeconds = value.deferTimeSeconds;
      this._enabled = value.enabled;
      this._groupingKeys.internalValue = value.groupingKeys;
      this._groupingWindowSeconds = value.groupingWindowSeconds;
    }
  }

  // auto_decline_enabled - computed: false, optional: false, required: true
  private _autoDeclineEnabled?: boolean | cdktf.IResolvable; 
  public get autoDeclineEnabled() {
    return this.getBooleanAttribute('auto_decline_enabled');
  }
  public set autoDeclineEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDeclineEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeclineEnabledInput() {
    return this._autoDeclineEnabled;
  }

  // auto_relate_grouped_alerts - computed: true, optional: true, required: false
  private _autoRelateGroupedAlerts?: boolean | cdktf.IResolvable; 
  public get autoRelateGroupedAlerts() {
    return this.getBooleanAttribute('auto_relate_grouped_alerts');
  }
  public set autoRelateGroupedAlerts(value: boolean | cdktf.IResolvable) {
    this._autoRelateGroupedAlerts = value;
  }
  public resetAutoRelateGroupedAlerts() {
    this._autoRelateGroupedAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRelateGroupedAlertsInput() {
    return this._autoRelateGroupedAlerts;
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertRouteIncidentConfigConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRouteIncidentConfigConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // defer_time_seconds - computed: false, optional: false, required: true
  private _deferTimeSeconds?: number; 
  public get deferTimeSeconds() {
    return this.getNumberAttribute('defer_time_seconds');
  }
  public set deferTimeSeconds(value: number) {
    this._deferTimeSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deferTimeSecondsInput() {
    return this._deferTimeSeconds;
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

  // grouping_keys - computed: false, optional: false, required: true
  private _groupingKeys = new AlertRouteIncidentConfigGroupingKeysList(this, "grouping_keys", true);
  public get groupingKeys() {
    return this._groupingKeys;
  }
  public putGroupingKeys(value: AlertRouteIncidentConfigGroupingKeys[] | cdktf.IResolvable) {
    this._groupingKeys.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingKeysInput() {
    return this._groupingKeys.internalValue;
  }

  // grouping_window_seconds - computed: false, optional: false, required: true
  private _groupingWindowSeconds?: number; 
  public get groupingWindowSeconds() {
    return this.getNumberAttribute('grouping_window_seconds');
  }
  public set groupingWindowSeconds(value: number) {
    this._groupingWindowSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingWindowSecondsInput() {
    return this._groupingWindowSeconds;
  }
}
export interface AlertRouteIncidentTemplateCustomFieldsBindingArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateCustomFieldsBindingArrayValueToTerraform(struct?: AlertRouteIncidentTemplateCustomFieldsBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateCustomFieldsBindingArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateCustomFieldsBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateCustomFieldsBindingArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateCustomFieldsBindingArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateCustomFieldsBindingArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateCustomFieldsBindingArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateCustomFieldsBindingArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateCustomFieldsBindingArrayValueOutputReference {
    return new AlertRouteIncidentTemplateCustomFieldsBindingArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateCustomFieldsBindingValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateCustomFieldsBindingValueToTerraform(struct?: AlertRouteIncidentTemplateCustomFieldsBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateCustomFieldsBindingValueToHclTerraform(struct?: AlertRouteIncidentTemplateCustomFieldsBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateCustomFieldsBindingValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateCustomFieldsBindingValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateCustomFieldsBindingValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateCustomFieldsBinding {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateCustomFieldsBindingArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateCustomFieldsBindingValue;
}

export function alertRouteIncidentTemplateCustomFieldsBindingToTerraform(struct?: AlertRouteIncidentTemplateCustomFieldsBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateCustomFieldsBindingArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteIncidentTemplateCustomFieldsBindingValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateCustomFieldsBindingToHclTerraform(struct?: AlertRouteIncidentTemplateCustomFieldsBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateCustomFieldsBindingArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateCustomFieldsBindingArrayValueList",
    },
    value: {
      value: alertRouteIncidentTemplateCustomFieldsBindingValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateCustomFieldsBindingValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateCustomFieldsBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateCustomFieldsBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateCustomFieldsBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateCustomFieldsBindingArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateCustomFieldsBindingArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateCustomFieldsBindingValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateCustomFieldsBindingValue) {
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
export interface AlertRouteIncidentTemplateCustomFields {
  /**
  * Binding for the custom field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#binding AlertRoute#binding}
  */
  readonly binding: AlertRouteIncidentTemplateCustomFieldsBinding;
  /**
  * ID of the custom field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#custom_field_id AlertRoute#custom_field_id}
  */
  readonly customFieldId: string;
  /**
  * The strategy to use when multiple alerts match this route. Possible values are: `first-wins`, `last-wins`, `append`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#merge_strategy AlertRoute#merge_strategy}
  */
  readonly mergeStrategy: string;
}

export function alertRouteIncidentTemplateCustomFieldsToTerraform(struct?: AlertRouteIncidentTemplateCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: alertRouteIncidentTemplateCustomFieldsBindingToTerraform(struct!.binding),
    custom_field_id: cdktf.stringToTerraform(struct!.customFieldId),
    merge_strategy: cdktf.stringToTerraform(struct!.mergeStrategy),
  }
}


export function alertRouteIncidentTemplateCustomFieldsToHclTerraform(struct?: AlertRouteIncidentTemplateCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: alertRouteIncidentTemplateCustomFieldsBindingToHclTerraform(struct!.binding),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateCustomFieldsBinding",
    },
    custom_field_id: {
      value: cdktf.stringToHclTerraform(struct!.customFieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_strategy: {
      value: cdktf.stringToHclTerraform(struct!.mergeStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateCustomFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding?.internalValue;
    }
    if (this._customFieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldId = this._customFieldId;
    }
    if (this._mergeStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeStrategy = this._mergeStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateCustomFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding.internalValue = undefined;
      this._customFieldId = undefined;
      this._mergeStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding.internalValue = value.binding;
      this._customFieldId = value.customFieldId;
      this._mergeStrategy = value.mergeStrategy;
    }
  }

  // binding - computed: false, optional: false, required: true
  private _binding = new AlertRouteIncidentTemplateCustomFieldsBindingOutputReference(this, "binding");
  public get binding() {
    return this._binding;
  }
  public putBinding(value: AlertRouteIncidentTemplateCustomFieldsBinding) {
    this._binding.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // custom_field_id - computed: false, optional: false, required: true
  private _customFieldId?: string; 
  public get customFieldId() {
    return this.getStringAttribute('custom_field_id');
  }
  public set customFieldId(value: string) {
    this._customFieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldIdInput() {
    return this._customFieldId;
  }

  // merge_strategy - computed: false, optional: false, required: true
  private _mergeStrategy?: string; 
  public get mergeStrategy() {
    return this.getStringAttribute('merge_strategy');
  }
  public set mergeStrategy(value: string) {
    this._mergeStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeStrategyInput() {
    return this._mergeStrategy;
  }
}

export class AlertRouteIncidentTemplateCustomFieldsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateCustomFields[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateCustomFieldsOutputReference {
    return new AlertRouteIncidentTemplateCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateIncidentModeArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateIncidentModeArrayValueToTerraform(struct?: AlertRouteIncidentTemplateIncidentModeArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateIncidentModeArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateIncidentModeArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateIncidentModeArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateIncidentModeArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateIncidentModeArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateIncidentModeArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateIncidentModeArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateIncidentModeArrayValueOutputReference {
    return new AlertRouteIncidentTemplateIncidentModeArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateIncidentModeValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateIncidentModeValueToTerraform(struct?: AlertRouteIncidentTemplateIncidentModeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateIncidentModeValueToHclTerraform(struct?: AlertRouteIncidentTemplateIncidentModeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateIncidentModeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateIncidentModeValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateIncidentModeValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateIncidentMode {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateIncidentModeArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateIncidentModeValue;
}

export function alertRouteIncidentTemplateIncidentModeToTerraform(struct?: AlertRouteIncidentTemplateIncidentMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateIncidentModeArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteIncidentTemplateIncidentModeValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateIncidentModeToHclTerraform(struct?: AlertRouteIncidentTemplateIncidentMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateIncidentModeArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateIncidentModeArrayValueList",
    },
    value: {
      value: alertRouteIncidentTemplateIncidentModeValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateIncidentModeValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateIncidentModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateIncidentMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateIncidentMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateIncidentModeArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateIncidentModeArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateIncidentModeValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateIncidentModeValue) {
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
export interface AlertRouteIncidentTemplateIncidentTypeArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateIncidentTypeArrayValueToTerraform(struct?: AlertRouteIncidentTemplateIncidentTypeArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateIncidentTypeArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateIncidentTypeArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateIncidentTypeArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateIncidentTypeArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateIncidentTypeArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateIncidentTypeArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateIncidentTypeArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateIncidentTypeArrayValueOutputReference {
    return new AlertRouteIncidentTemplateIncidentTypeArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateIncidentTypeValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateIncidentTypeValueToTerraform(struct?: AlertRouteIncidentTemplateIncidentTypeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateIncidentTypeValueToHclTerraform(struct?: AlertRouteIncidentTemplateIncidentTypeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateIncidentTypeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateIncidentTypeValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateIncidentTypeValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateIncidentType {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateIncidentTypeArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateIncidentTypeValue;
}

export function alertRouteIncidentTemplateIncidentTypeToTerraform(struct?: AlertRouteIncidentTemplateIncidentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateIncidentTypeArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteIncidentTemplateIncidentTypeValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateIncidentTypeToHclTerraform(struct?: AlertRouteIncidentTemplateIncidentType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateIncidentTypeArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateIncidentTypeArrayValueList",
    },
    value: {
      value: alertRouteIncidentTemplateIncidentTypeValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateIncidentTypeValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateIncidentTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateIncidentType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateIncidentType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateIncidentTypeArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateIncidentTypeArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateIncidentTypeValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateIncidentTypeValue) {
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
export interface AlertRouteIncidentTemplateNameArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateNameArrayValueToTerraform(struct?: AlertRouteIncidentTemplateNameArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateNameArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateNameArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateNameArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateNameArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateNameArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateNameArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateNameArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateNameArrayValueOutputReference {
    return new AlertRouteIncidentTemplateNameArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateNameValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateNameValueToTerraform(struct?: AlertRouteIncidentTemplateNameValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateNameValueToHclTerraform(struct?: AlertRouteIncidentTemplateNameValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateNameValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateNameValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateNameValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateName {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateNameArrayValue[] | cdktf.IResolvable;
  /**
  * Whether this attribute should be autogenerated using AI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#autogenerated AlertRoute#autogenerated}
  */
  readonly autogenerated?: boolean | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateNameValue;
}

export function alertRouteIncidentTemplateNameToTerraform(struct?: AlertRouteIncidentTemplateName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateNameArrayValueToTerraform, false)(struct!.arrayValue),
    autogenerated: cdktf.booleanToTerraform(struct!.autogenerated),
    value: alertRouteIncidentTemplateNameValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateNameToHclTerraform(struct?: AlertRouteIncidentTemplateName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateNameArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateNameArrayValueList",
    },
    autogenerated: {
      value: cdktf.booleanToHclTerraform(struct!.autogenerated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: alertRouteIncidentTemplateNameValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateNameValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._autogenerated !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerated = this._autogenerated;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._autogenerated = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._autogenerated = value.autogenerated;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateNameArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateNameArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // autogenerated - computed: true, optional: true, required: false
  private _autogenerated?: boolean | cdktf.IResolvable; 
  public get autogenerated() {
    return this.getBooleanAttribute('autogenerated');
  }
  public set autogenerated(value: boolean | cdktf.IResolvable) {
    this._autogenerated = value;
  }
  public resetAutogenerated() {
    this._autogenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogeneratedInput() {
    return this._autogenerated;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateNameValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateNameValue) {
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
export interface AlertRouteIncidentTemplateSeverityBindingArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateSeverityBindingArrayValueToTerraform(struct?: AlertRouteIncidentTemplateSeverityBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateSeverityBindingArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateSeverityBindingArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateSeverityBindingArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateSeverityBindingArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateSeverityBindingArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: true, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: true, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateSeverityBindingArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateSeverityBindingArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateSeverityBindingArrayValueOutputReference {
    return new AlertRouteIncidentTemplateSeverityBindingArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateSeverityBindingValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateSeverityBindingValueToTerraform(struct?: AlertRouteIncidentTemplateSeverityBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateSeverityBindingValueToHclTerraform(struct?: AlertRouteIncidentTemplateSeverityBindingValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateSeverityBindingValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateSeverityBindingValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateSeverityBindingValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: true, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: true, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateSeverityBinding {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateSeverityBindingArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateSeverityBindingValue;
}

export function alertRouteIncidentTemplateSeverityBindingToTerraform(struct?: AlertRouteIncidentTemplateSeverityBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateSeverityBindingArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteIncidentTemplateSeverityBindingValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateSeverityBindingToHclTerraform(struct?: AlertRouteIncidentTemplateSeverityBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateSeverityBindingArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateSeverityBindingArrayValueList",
    },
    value: {
      value: alertRouteIncidentTemplateSeverityBindingValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateSeverityBindingValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateSeverityBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateSeverityBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateSeverityBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: true, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateSeverityBindingArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateSeverityBindingArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateSeverityBindingValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateSeverityBindingValue) {
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
export interface AlertRouteIncidentTemplateSeverity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#binding AlertRoute#binding}
  */
  readonly binding?: AlertRouteIncidentTemplateSeverityBinding;
  /**
  * Strategy for merging severity when multiple alerts create/update the same incident. Possible values are: `first-wins`, `max`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#merge_strategy AlertRoute#merge_strategy}
  */
  readonly mergeStrategy: string;
}

export function alertRouteIncidentTemplateSeverityToTerraform(struct?: AlertRouteIncidentTemplateSeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding: alertRouteIncidentTemplateSeverityBindingToTerraform(struct!.binding),
    merge_strategy: cdktf.stringToTerraform(struct!.mergeStrategy),
  }
}


export function alertRouteIncidentTemplateSeverityToHclTerraform(struct?: AlertRouteIncidentTemplateSeverity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding: {
      value: alertRouteIncidentTemplateSeverityBindingToHclTerraform(struct!.binding),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateSeverityBinding",
    },
    merge_strategy: {
      value: cdktf.stringToHclTerraform(struct!.mergeStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateSeverity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding?.internalValue;
    }
    if (this._mergeStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeStrategy = this._mergeStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateSeverity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binding.internalValue = undefined;
      this._mergeStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binding.internalValue = value.binding;
      this._mergeStrategy = value.mergeStrategy;
    }
  }

  // binding - computed: true, optional: true, required: false
  private _binding = new AlertRouteIncidentTemplateSeverityBindingOutputReference(this, "binding");
  public get binding() {
    return this._binding;
  }
  public putBinding(value: AlertRouteIncidentTemplateSeverityBinding) {
    this._binding.internalValue = value;
  }
  public resetBinding() {
    this._binding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // merge_strategy - computed: true, optional: false, required: true
  private _mergeStrategy?: string; 
  public get mergeStrategy() {
    return this.getStringAttribute('merge_strategy');
  }
  public set mergeStrategy(value: string) {
    this._mergeStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeStrategyInput() {
    return this._mergeStrategy;
  }
}
export interface AlertRouteIncidentTemplateStartInTriageArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateStartInTriageArrayValueToTerraform(struct?: AlertRouteIncidentTemplateStartInTriageArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateStartInTriageArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateStartInTriageArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateStartInTriageArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateStartInTriageArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateStartInTriageArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateStartInTriageArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateStartInTriageArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateStartInTriageArrayValueOutputReference {
    return new AlertRouteIncidentTemplateStartInTriageArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateStartInTriageValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateStartInTriageValueToTerraform(struct?: AlertRouteIncidentTemplateStartInTriageValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateStartInTriageValueToHclTerraform(struct?: AlertRouteIncidentTemplateStartInTriageValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateStartInTriageValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateStartInTriageValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateStartInTriageValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateStartInTriage {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateStartInTriageArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateStartInTriageValue;
}

export function alertRouteIncidentTemplateStartInTriageToTerraform(struct?: AlertRouteIncidentTemplateStartInTriage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateStartInTriageArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteIncidentTemplateStartInTriageValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateStartInTriageToHclTerraform(struct?: AlertRouteIncidentTemplateStartInTriage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateStartInTriageArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateStartInTriageArrayValueList",
    },
    value: {
      value: alertRouteIncidentTemplateStartInTriageValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateStartInTriageValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateStartInTriageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateStartInTriage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateStartInTriage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateStartInTriageArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateStartInTriageArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateStartInTriageValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateStartInTriageValue) {
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
export interface AlertRouteIncidentTemplateSummaryArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateSummaryArrayValueToTerraform(struct?: AlertRouteIncidentTemplateSummaryArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateSummaryArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateSummaryArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateSummaryArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateSummaryArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateSummaryArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateSummaryArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateSummaryArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateSummaryArrayValueOutputReference {
    return new AlertRouteIncidentTemplateSummaryArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateSummaryValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateSummaryValueToTerraform(struct?: AlertRouteIncidentTemplateSummaryValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateSummaryValueToHclTerraform(struct?: AlertRouteIncidentTemplateSummaryValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateSummaryValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateSummaryValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateSummaryValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateSummary {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateSummaryArrayValue[] | cdktf.IResolvable;
  /**
  * Whether this attribute should be autogenerated using AI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#autogenerated AlertRoute#autogenerated}
  */
  readonly autogenerated?: boolean | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateSummaryValue;
}

export function alertRouteIncidentTemplateSummaryToTerraform(struct?: AlertRouteIncidentTemplateSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateSummaryArrayValueToTerraform, false)(struct!.arrayValue),
    autogenerated: cdktf.booleanToTerraform(struct!.autogenerated),
    value: alertRouteIncidentTemplateSummaryValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateSummaryToHclTerraform(struct?: AlertRouteIncidentTemplateSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateSummaryArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateSummaryArrayValueList",
    },
    autogenerated: {
      value: cdktf.booleanToHclTerraform(struct!.autogenerated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: alertRouteIncidentTemplateSummaryValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateSummaryValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._autogenerated !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerated = this._autogenerated;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._autogenerated = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._autogenerated = value.autogenerated;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateSummaryArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateSummaryArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // autogenerated - computed: true, optional: true, required: false
  private _autogenerated?: boolean | cdktf.IResolvable; 
  public get autogenerated() {
    return this.getBooleanAttribute('autogenerated');
  }
  public set autogenerated(value: boolean | cdktf.IResolvable) {
    this._autogenerated = value;
  }
  public resetAutogenerated() {
    this._autogenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogeneratedInput() {
    return this._autogenerated;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateSummaryValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateSummaryValue) {
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
export interface AlertRouteIncidentTemplateWorkspaceArrayValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateWorkspaceArrayValueToTerraform(struct?: AlertRouteIncidentTemplateWorkspaceArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateWorkspaceArrayValueToHclTerraform(struct?: AlertRouteIncidentTemplateWorkspaceArrayValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateWorkspaceArrayValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteIncidentTemplateWorkspaceArrayValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateWorkspaceArrayValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}

export class AlertRouteIncidentTemplateWorkspaceArrayValueList extends cdktf.ComplexList {
  public internalValue? : AlertRouteIncidentTemplateWorkspaceArrayValue[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteIncidentTemplateWorkspaceArrayValueOutputReference {
    return new AlertRouteIncidentTemplateWorkspaceArrayValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteIncidentTemplateWorkspaceValue {
  /**
  * If set, this is the literal value of the step parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#literal AlertRoute#literal}
  */
  readonly literal?: string;
  /**
  * If set, this is the reference into the trigger scope that is the value of this parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#reference AlertRoute#reference}
  */
  readonly reference?: string;
}

export function alertRouteIncidentTemplateWorkspaceValueToTerraform(struct?: AlertRouteIncidentTemplateWorkspaceValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    literal: cdktf.stringToTerraform(struct!.literal),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function alertRouteIncidentTemplateWorkspaceValueToHclTerraform(struct?: AlertRouteIncidentTemplateWorkspaceValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    literal: {
      value: cdktf.stringToHclTerraform(struct!.literal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateWorkspaceValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateWorkspaceValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._literal !== undefined) {
      hasAnyValues = true;
      internalValueResult.literal = this._literal;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateWorkspaceValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._literal = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._literal = value.literal;
      this._reference = value.reference;
    }
  }

  // literal - computed: false, optional: true, required: false
  private _literal?: string; 
  public get literal() {
    return this.getStringAttribute('literal');
  }
  public set literal(value: string) {
    this._literal = value;
  }
  public resetLiteral() {
    this._literal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get literalInput() {
    return this._literal;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface AlertRouteIncidentTemplateWorkspace {
  /**
  * The array of literal or reference parameter values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#array_value AlertRoute#array_value}
  */
  readonly arrayValue?: AlertRouteIncidentTemplateWorkspaceArrayValue[] | cdktf.IResolvable;
  /**
  * The literal or reference parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#value AlertRoute#value}
  */
  readonly value?: AlertRouteIncidentTemplateWorkspaceValue;
}

export function alertRouteIncidentTemplateWorkspaceToTerraform(struct?: AlertRouteIncidentTemplateWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_value: cdktf.listMapper(alertRouteIncidentTemplateWorkspaceArrayValueToTerraform, false)(struct!.arrayValue),
    value: alertRouteIncidentTemplateWorkspaceValueToTerraform(struct!.value),
  }
}


export function alertRouteIncidentTemplateWorkspaceToHclTerraform(struct?: AlertRouteIncidentTemplateWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_value: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateWorkspaceArrayValueToHclTerraform, false)(struct!.arrayValue),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteIncidentTemplateWorkspaceArrayValueList",
    },
    value: {
      value: alertRouteIncidentTemplateWorkspaceValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateWorkspaceValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplateWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayValue = this._arrayValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplateWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayValue.internalValue = value.arrayValue;
      this._value.internalValue = value.value;
    }
  }

  // array_value - computed: false, optional: true, required: false
  private _arrayValue = new AlertRouteIncidentTemplateWorkspaceArrayValueList(this, "array_value", false);
  public get arrayValue() {
    return this._arrayValue;
  }
  public putArrayValue(value: AlertRouteIncidentTemplateWorkspaceArrayValue[] | cdktf.IResolvable) {
    this._arrayValue.internalValue = value;
  }
  public resetArrayValue() {
    this._arrayValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayValueInput() {
    return this._arrayValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new AlertRouteIncidentTemplateWorkspaceValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: AlertRouteIncidentTemplateWorkspaceValue) {
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
export interface AlertRouteIncidentTemplate {
  /**
  * Custom fields configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#custom_fields AlertRoute#custom_fields}
  */
  readonly customFields?: AlertRouteIncidentTemplateCustomFields[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#incident_mode AlertRoute#incident_mode}
  */
  readonly incidentMode?: AlertRouteIncidentTemplateIncidentMode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#incident_type AlertRoute#incident_type}
  */
  readonly incidentType?: AlertRouteIncidentTemplateIncidentType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#name AlertRoute#name}
  */
  readonly name: AlertRouteIncidentTemplateName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#severity AlertRoute#severity}
  */
  readonly severity?: AlertRouteIncidentTemplateSeverity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#start_in_triage AlertRoute#start_in_triage}
  */
  readonly startInTriage?: AlertRouteIncidentTemplateStartInTriage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#summary AlertRoute#summary}
  */
  readonly summary: AlertRouteIncidentTemplateSummary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#workspace AlertRoute#workspace}
  */
  readonly workspace?: AlertRouteIncidentTemplateWorkspace;
}

export function alertRouteIncidentTemplateToTerraform(struct?: AlertRouteIncidentTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_fields: cdktf.listMapper(alertRouteIncidentTemplateCustomFieldsToTerraform, false)(struct!.customFields),
    incident_mode: alertRouteIncidentTemplateIncidentModeToTerraform(struct!.incidentMode),
    incident_type: alertRouteIncidentTemplateIncidentTypeToTerraform(struct!.incidentType),
    name: alertRouteIncidentTemplateNameToTerraform(struct!.name),
    severity: alertRouteIncidentTemplateSeverityToTerraform(struct!.severity),
    start_in_triage: alertRouteIncidentTemplateStartInTriageToTerraform(struct!.startInTriage),
    summary: alertRouteIncidentTemplateSummaryToTerraform(struct!.summary),
    workspace: alertRouteIncidentTemplateWorkspaceToTerraform(struct!.workspace),
  }
}


export function alertRouteIncidentTemplateToHclTerraform(struct?: AlertRouteIncidentTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_fields: {
      value: cdktf.listMapperHcl(alertRouteIncidentTemplateCustomFieldsToHclTerraform, false)(struct!.customFields),
      isBlock: true,
      type: "set",
      storageClassType: "AlertRouteIncidentTemplateCustomFieldsList",
    },
    incident_mode: {
      value: alertRouteIncidentTemplateIncidentModeToHclTerraform(struct!.incidentMode),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateIncidentMode",
    },
    incident_type: {
      value: alertRouteIncidentTemplateIncidentTypeToHclTerraform(struct!.incidentType),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateIncidentType",
    },
    name: {
      value: alertRouteIncidentTemplateNameToHclTerraform(struct!.name),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateName",
    },
    severity: {
      value: alertRouteIncidentTemplateSeverityToHclTerraform(struct!.severity),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateSeverity",
    },
    start_in_triage: {
      value: alertRouteIncidentTemplateStartInTriageToHclTerraform(struct!.startInTriage),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateStartInTriage",
    },
    summary: {
      value: alertRouteIncidentTemplateSummaryToHclTerraform(struct!.summary),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateSummary",
    },
    workspace: {
      value: alertRouteIncidentTemplateWorkspaceToHclTerraform(struct!.workspace),
      isBlock: true,
      type: "struct",
      storageClassType: "AlertRouteIncidentTemplateWorkspace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteIncidentTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlertRouteIncidentTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFields = this._customFields?.internalValue;
    }
    if (this._incidentMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentMode = this._incidentMode?.internalValue;
    }
    if (this._incidentType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentType = this._incidentType?.internalValue;
    }
    if (this._name?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name?.internalValue;
    }
    if (this._severity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity?.internalValue;
    }
    if (this._startInTriage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startInTriage = this._startInTriage?.internalValue;
    }
    if (this._summary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteIncidentTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customFields.internalValue = undefined;
      this._incidentMode.internalValue = undefined;
      this._incidentType.internalValue = undefined;
      this._name.internalValue = undefined;
      this._severity.internalValue = undefined;
      this._startInTriage.internalValue = undefined;
      this._summary.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customFields.internalValue = value.customFields;
      this._incidentMode.internalValue = value.incidentMode;
      this._incidentType.internalValue = value.incidentType;
      this._name.internalValue = value.name;
      this._severity.internalValue = value.severity;
      this._startInTriage.internalValue = value.startInTriage;
      this._summary.internalValue = value.summary;
      this._workspace.internalValue = value.workspace;
    }
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields = new AlertRouteIncidentTemplateCustomFieldsList(this, "custom_fields", true);
  public get customFields() {
    return this._customFields;
  }
  public putCustomFields(value: AlertRouteIncidentTemplateCustomFields[] | cdktf.IResolvable) {
    this._customFields.internalValue = value;
  }
  public resetCustomFields() {
    this._customFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields.internalValue;
  }

  // incident_mode - computed: false, optional: true, required: false
  private _incidentMode = new AlertRouteIncidentTemplateIncidentModeOutputReference(this, "incident_mode");
  public get incidentMode() {
    return this._incidentMode;
  }
  public putIncidentMode(value: AlertRouteIncidentTemplateIncidentMode) {
    this._incidentMode.internalValue = value;
  }
  public resetIncidentMode() {
    this._incidentMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentModeInput() {
    return this._incidentMode.internalValue;
  }

  // incident_type - computed: false, optional: true, required: false
  private _incidentType = new AlertRouteIncidentTemplateIncidentTypeOutputReference(this, "incident_type");
  public get incidentType() {
    return this._incidentType;
  }
  public putIncidentType(value: AlertRouteIncidentTemplateIncidentType) {
    this._incidentType.internalValue = value;
  }
  public resetIncidentType() {
    this._incidentType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeInput() {
    return this._incidentType.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name = new AlertRouteIncidentTemplateNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: AlertRouteIncidentTemplateName) {
    this._name.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // severity - computed: true, optional: true, required: false
  private _severity = new AlertRouteIncidentTemplateSeverityOutputReference(this, "severity");
  public get severity() {
    return this._severity;
  }
  public putSeverity(value: AlertRouteIncidentTemplateSeverity) {
    this._severity.internalValue = value;
  }
  public resetSeverity() {
    this._severity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity.internalValue;
  }

  // start_in_triage - computed: false, optional: true, required: false
  private _startInTriage = new AlertRouteIncidentTemplateStartInTriageOutputReference(this, "start_in_triage");
  public get startInTriage() {
    return this._startInTriage;
  }
  public putStartInTriage(value: AlertRouteIncidentTemplateStartInTriage) {
    this._startInTriage.internalValue = value;
  }
  public resetStartInTriage() {
    this._startInTriage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInTriageInput() {
    return this._startInTriage.internalValue;
  }

  // summary - computed: false, optional: false, required: true
  private _summary = new AlertRouteIncidentTemplateSummaryOutputReference(this, "summary");
  public get summary() {
    return this._summary;
  }
  public putSummary(value: AlertRouteIncidentTemplateSummary) {
    this._summary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new AlertRouteIncidentTemplateWorkspaceOutputReference(this, "workspace");
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: AlertRouteIncidentTemplateWorkspace) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route incident_alert_route}
*/
export class AlertRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_alert_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertRoute to import
  * @param importFromId The id of the existing AlertRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_alert_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/resources/alert_route incident_alert_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AlertRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'incident_alert_route',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.24.1',
        providerVersionConstraint: '5.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertSources.internalValue = config.alertSources;
    this._channelConfig.internalValue = config.channelConfig;
    this._conditionGroups.internalValue = config.conditionGroups;
    this._enabled = config.enabled;
    this._escalationConfig.internalValue = config.escalationConfig;
    this._expressions.internalValue = config.expressions;
    this._incidentConfig.internalValue = config.incidentConfig;
    this._incidentTemplate.internalValue = config.incidentTemplate;
    this._isPrivate = config.isPrivate;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_sources - computed: false, optional: false, required: true
  private _alertSources = new AlertRouteAlertSourcesList(this, "alert_sources", true);
  public get alertSources() {
    return this._alertSources;
  }
  public putAlertSources(value: AlertRouteAlertSources[] | cdktf.IResolvable) {
    this._alertSources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourcesInput() {
    return this._alertSources.internalValue;
  }

  // channel_config - computed: false, optional: true, required: false
  private _channelConfig = new AlertRouteChannelConfigList(this, "channel_config", true);
  public get channelConfig() {
    return this._channelConfig;
  }
  public putChannelConfig(value: AlertRouteChannelConfig[] | cdktf.IResolvable) {
    this._channelConfig.internalValue = value;
  }
  public resetChannelConfig() {
    this._channelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelConfigInput() {
    return this._channelConfig.internalValue;
  }

  // condition_groups - computed: false, optional: false, required: true
  private _conditionGroups = new AlertRouteConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRouteConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
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

  // escalation_config - computed: false, optional: false, required: true
  private _escalationConfig = new AlertRouteEscalationConfigOutputReference(this, "escalation_config");
  public get escalationConfig() {
    return this._escalationConfig;
  }
  public putEscalationConfig(value: AlertRouteEscalationConfig) {
    this._escalationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationConfigInput() {
    return this._escalationConfig.internalValue;
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions = new AlertRouteExpressionsList(this, "expressions", true);
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: AlertRouteExpressions[] | cdktf.IResolvable) {
    this._expressions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // incident_config - computed: false, optional: false, required: true
  private _incidentConfig = new AlertRouteIncidentConfigOutputReference(this, "incident_config");
  public get incidentConfig() {
    return this._incidentConfig;
  }
  public putIncidentConfig(value: AlertRouteIncidentConfig) {
    this._incidentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConfigInput() {
    return this._incidentConfig.internalValue;
  }

  // incident_template - computed: false, optional: false, required: true
  private _incidentTemplate = new AlertRouteIncidentTemplateOutputReference(this, "incident_template");
  public get incidentTemplate() {
    return this._incidentTemplate;
  }
  public putIncidentTemplate(value: AlertRouteIncidentTemplate) {
    this._incidentTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTemplateInput() {
    return this._incidentTemplate.internalValue;
  }

  // is_private - computed: false, optional: false, required: true
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_sources: cdktf.listMapper(alertRouteAlertSourcesToTerraform, false)(this._alertSources.internalValue),
      channel_config: cdktf.listMapper(alertRouteChannelConfigToTerraform, false)(this._channelConfig.internalValue),
      condition_groups: cdktf.listMapper(alertRouteConditionGroupsToTerraform, false)(this._conditionGroups.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      escalation_config: alertRouteEscalationConfigToTerraform(this._escalationConfig.internalValue),
      expressions: cdktf.listMapper(alertRouteExpressionsToTerraform, false)(this._expressions.internalValue),
      incident_config: alertRouteIncidentConfigToTerraform(this._incidentConfig.internalValue),
      incident_template: alertRouteIncidentTemplateToTerraform(this._incidentTemplate.internalValue),
      is_private: cdktf.booleanToTerraform(this._isPrivate),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_sources: {
        value: cdktf.listMapperHcl(alertRouteAlertSourcesToHclTerraform, false)(this._alertSources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertRouteAlertSourcesList",
      },
      channel_config: {
        value: cdktf.listMapperHcl(alertRouteChannelConfigToHclTerraform, false)(this._channelConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertRouteChannelConfigList",
      },
      condition_groups: {
        value: cdktf.listMapperHcl(alertRouteConditionGroupsToHclTerraform, false)(this._conditionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertRouteConditionGroupsList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escalation_config: {
        value: alertRouteEscalationConfigToHclTerraform(this._escalationConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertRouteEscalationConfig",
      },
      expressions: {
        value: cdktf.listMapperHcl(alertRouteExpressionsToHclTerraform, false)(this._expressions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertRouteExpressionsList",
      },
      incident_config: {
        value: alertRouteIncidentConfigToHclTerraform(this._incidentConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertRouteIncidentConfig",
      },
      incident_template: {
        value: alertRouteIncidentTemplateToHclTerraform(this._incidentTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlertRouteIncidentTemplate",
      },
      is_private: {
        value: cdktf.booleanToHclTerraform(this._isPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
