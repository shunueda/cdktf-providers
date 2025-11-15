// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#alerts_source_ids AlertRoute#alerts_source_ids}
  */
  readonly alertsSourceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#enabled AlertRoute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#id AlertRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#name AlertRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#owning_team_ids AlertRoute#owning_team_ids}
  */
  readonly owningTeamIds?: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#rules AlertRoute#rules}
  */
  readonly rules?: AlertRouteRules[] | cdktf.IResolvable;
}
export interface AlertRouteRulesConditionGroupsConditions {
  /**
  * The Alert Urgency IDs to check in the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#alert_urgency_ids AlertRoute#alert_urgency_ids}
  */
  readonly alertUrgencyIds?: string[];
  /**
  * The ID of the conditionable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#conditionable_id AlertRoute#conditionable_id}
  */
  readonly conditionableId?: string;
  /**
  * The type of the conditionable. Value must be one of `AlertField`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#conditionable_type AlertRoute#conditionable_type}
  */
  readonly conditionableType?: string;
  /**
  * Value must be one of `is_one_of`, `is_not_one_of`, `contains`, `does_not_contain`, `starts_with`, `ends_with`, `matches_regex`, `is_empty`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#property_field_condition_type AlertRoute#property_field_condition_type}
  */
  readonly propertyFieldConditionType?: string;
  /**
  * The name of the property field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#property_field_name AlertRoute#property_field_name}
  */
  readonly propertyFieldName?: string;
  /**
  * Value must be one of `attribute`, `payload`, `alert_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#property_field_type AlertRoute#property_field_type}
  */
  readonly propertyFieldType?: string;
  /**
  * The value of the property field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#property_field_value AlertRoute#property_field_value}
  */
  readonly propertyFieldValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#property_field_values AlertRoute#property_field_values}
  */
  readonly propertyFieldValues?: string[];
}

export function alertRouteRulesConditionGroupsConditionsToTerraform(struct?: AlertRouteRulesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_urgency_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertUrgencyIds),
    conditionable_id: cdktf.stringToTerraform(struct!.conditionableId),
    conditionable_type: cdktf.stringToTerraform(struct!.conditionableType),
    property_field_condition_type: cdktf.stringToTerraform(struct!.propertyFieldConditionType),
    property_field_name: cdktf.stringToTerraform(struct!.propertyFieldName),
    property_field_type: cdktf.stringToTerraform(struct!.propertyFieldType),
    property_field_value: cdktf.stringToTerraform(struct!.propertyFieldValue),
    property_field_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propertyFieldValues),
  }
}


export function alertRouteRulesConditionGroupsConditionsToHclTerraform(struct?: AlertRouteRulesConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_urgency_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertUrgencyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conditionable_id: {
      value: cdktf.stringToHclTerraform(struct!.conditionableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditionable_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_field_condition_type: {
      value: cdktf.stringToHclTerraform(struct!.propertyFieldConditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_field_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_field_type: {
      value: cdktf.stringToHclTerraform(struct!.propertyFieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_field_value: {
      value: cdktf.stringToHclTerraform(struct!.propertyFieldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_field_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propertyFieldValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteRulesConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteRulesConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertUrgencyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertUrgencyIds = this._alertUrgencyIds;
    }
    if (this._conditionableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableId = this._conditionableId;
    }
    if (this._conditionableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableType = this._conditionableType;
    }
    if (this._propertyFieldConditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyFieldConditionType = this._propertyFieldConditionType;
    }
    if (this._propertyFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyFieldName = this._propertyFieldName;
    }
    if (this._propertyFieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyFieldType = this._propertyFieldType;
    }
    if (this._propertyFieldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyFieldValue = this._propertyFieldValue;
    }
    if (this._propertyFieldValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyFieldValues = this._propertyFieldValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteRulesConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertUrgencyIds = undefined;
      this._conditionableId = undefined;
      this._conditionableType = undefined;
      this._propertyFieldConditionType = undefined;
      this._propertyFieldName = undefined;
      this._propertyFieldType = undefined;
      this._propertyFieldValue = undefined;
      this._propertyFieldValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertUrgencyIds = value.alertUrgencyIds;
      this._conditionableId = value.conditionableId;
      this._conditionableType = value.conditionableType;
      this._propertyFieldConditionType = value.propertyFieldConditionType;
      this._propertyFieldName = value.propertyFieldName;
      this._propertyFieldType = value.propertyFieldType;
      this._propertyFieldValue = value.propertyFieldValue;
      this._propertyFieldValues = value.propertyFieldValues;
    }
  }

  // alert_urgency_ids - computed: false, optional: true, required: false
  private _alertUrgencyIds?: string[]; 
  public get alertUrgencyIds() {
    return this.getListAttribute('alert_urgency_ids');
  }
  public set alertUrgencyIds(value: string[]) {
    this._alertUrgencyIds = value;
  }
  public resetAlertUrgencyIds() {
    this._alertUrgencyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertUrgencyIdsInput() {
    return this._alertUrgencyIds;
  }

  // conditionable_id - computed: true, optional: true, required: false
  private _conditionableId?: string; 
  public get conditionableId() {
    return this.getStringAttribute('conditionable_id');
  }
  public set conditionableId(value: string) {
    this._conditionableId = value;
  }
  public resetConditionableId() {
    this._conditionableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionableIdInput() {
    return this._conditionableId;
  }

  // conditionable_type - computed: false, optional: true, required: false
  private _conditionableType?: string; 
  public get conditionableType() {
    return this.getStringAttribute('conditionable_type');
  }
  public set conditionableType(value: string) {
    this._conditionableType = value;
  }
  public resetConditionableType() {
    this._conditionableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionableTypeInput() {
    return this._conditionableType;
  }

  // property_field_condition_type - computed: false, optional: true, required: false
  private _propertyFieldConditionType?: string; 
  public get propertyFieldConditionType() {
    return this.getStringAttribute('property_field_condition_type');
  }
  public set propertyFieldConditionType(value: string) {
    this._propertyFieldConditionType = value;
  }
  public resetPropertyFieldConditionType() {
    this._propertyFieldConditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyFieldConditionTypeInput() {
    return this._propertyFieldConditionType;
  }

  // property_field_name - computed: true, optional: true, required: false
  private _propertyFieldName?: string; 
  public get propertyFieldName() {
    return this.getStringAttribute('property_field_name');
  }
  public set propertyFieldName(value: string) {
    this._propertyFieldName = value;
  }
  public resetPropertyFieldName() {
    this._propertyFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyFieldNameInput() {
    return this._propertyFieldName;
  }

  // property_field_type - computed: false, optional: true, required: false
  private _propertyFieldType?: string; 
  public get propertyFieldType() {
    return this.getStringAttribute('property_field_type');
  }
  public set propertyFieldType(value: string) {
    this._propertyFieldType = value;
  }
  public resetPropertyFieldType() {
    this._propertyFieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyFieldTypeInput() {
    return this._propertyFieldType;
  }

  // property_field_value - computed: true, optional: true, required: false
  private _propertyFieldValue?: string; 
  public get propertyFieldValue() {
    return this.getStringAttribute('property_field_value');
  }
  public set propertyFieldValue(value: string) {
    this._propertyFieldValue = value;
  }
  public resetPropertyFieldValue() {
    this._propertyFieldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyFieldValueInput() {
    return this._propertyFieldValue;
  }

  // property_field_values - computed: false, optional: true, required: false
  private _propertyFieldValues?: string[]; 
  public get propertyFieldValues() {
    return this.getListAttribute('property_field_values');
  }
  public set propertyFieldValues(value: string[]) {
    this._propertyFieldValues = value;
  }
  public resetPropertyFieldValues() {
    this._propertyFieldValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyFieldValuesInput() {
    return this._propertyFieldValues;
  }
}

export class AlertRouteRulesConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteRulesConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteRulesConditionGroupsConditionsOutputReference {
    return new AlertRouteRulesConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteRulesConditionGroups {
  /**
  * The position of the condition group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#position AlertRoute#position}
  */
  readonly position?: number;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#conditions AlertRoute#conditions}
  */
  readonly conditions?: AlertRouteRulesConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRouteRulesConditionGroupsToTerraform(struct?: AlertRouteRulesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    position: cdktf.numberToTerraform(struct!.position),
    conditions: cdktf.listMapper(alertRouteRulesConditionGroupsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function alertRouteRulesConditionGroupsToHclTerraform(struct?: AlertRouteRulesConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conditions: {
      value: cdktf.listMapperHcl(alertRouteRulesConditionGroupsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteRulesConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteRulesConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteRulesConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteRulesConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._position = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._position = value.position;
      this._conditions.internalValue = value.conditions;
    }
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new AlertRouteRulesConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRouteRulesConditionGroupsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AlertRouteRulesConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteRulesConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteRulesConditionGroupsOutputReference {
    return new AlertRouteRulesConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteRulesDestinations {
  /**
  * The ID of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#target_id AlertRoute#target_id}
  */
  readonly targetId?: string;
  /**
  * The type of the target. Value must be one of `Service`, `Group`, `EscalationPolicy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#target_type AlertRoute#target_type}
  */
  readonly targetType?: string;
}

export function alertRouteRulesDestinationsToTerraform(struct?: AlertRouteRulesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function alertRouteRulesDestinationsToHclTerraform(struct?: AlertRouteRulesDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteRulesDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteRulesDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteRulesDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetId = undefined;
      this._targetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetId = value.targetId;
      this._targetType = value.targetType;
    }
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}

export class AlertRouteRulesDestinationsList extends cdktf.ComplexList {
  public internalValue? : AlertRouteRulesDestinations[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteRulesDestinationsOutputReference {
    return new AlertRouteRulesDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRouteRules {
  /**
  * Whether this is a fallback rule. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#fallback_rule AlertRoute#fallback_rule}
  */
  readonly fallbackRule?: boolean | cdktf.IResolvable;
  /**
  * The name of the alert routing rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#name AlertRoute#name}
  */
  readonly name?: string;
  /**
  * The position of the alert routing rule for ordering evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#position AlertRoute#position}
  */
  readonly position?: number;
  /**
  * condition_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#condition_groups AlertRoute#condition_groups}
  */
  readonly conditionGroups?: AlertRouteRulesConditionGroups[] | cdktf.IResolvable;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#destinations AlertRoute#destinations}
  */
  readonly destinations?: AlertRouteRulesDestinations[] | cdktf.IResolvable;
}

export function alertRouteRulesToTerraform(struct?: AlertRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_rule: cdktf.booleanToTerraform(struct!.fallbackRule),
    name: cdktf.stringToTerraform(struct!.name),
    position: cdktf.numberToTerraform(struct!.position),
    condition_groups: cdktf.listMapper(alertRouteRulesConditionGroupsToTerraform, true)(struct!.conditionGroups),
    destinations: cdktf.listMapper(alertRouteRulesDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function alertRouteRulesToHclTerraform(struct?: AlertRouteRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_rule: {
      value: cdktf.booleanToHclTerraform(struct!.fallbackRule),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.numberToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    condition_groups: {
      value: cdktf.listMapperHcl(alertRouteRulesConditionGroupsToHclTerraform, true)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteRulesConditionGroupsList",
    },
    destinations: {
      value: cdktf.listMapperHcl(alertRouteRulesDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRouteRulesDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRouteRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRouteRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackRule = this._fallbackRule;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRouteRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackRule = undefined;
      this._name = undefined;
      this._position = undefined;
      this._conditionGroups.internalValue = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackRule = value.fallbackRule;
      this._name = value.name;
      this._position = value.position;
      this._conditionGroups.internalValue = value.conditionGroups;
      this._destinations.internalValue = value.destinations;
    }
  }

  // fallback_rule - computed: true, optional: true, required: false
  private _fallbackRule?: boolean | cdktf.IResolvable; 
  public get fallbackRule() {
    return this.getBooleanAttribute('fallback_rule');
  }
  public set fallbackRule(value: boolean | cdktf.IResolvable) {
    this._fallbackRule = value;
  }
  public resetFallbackRule() {
    this._fallbackRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRuleInput() {
    return this._fallbackRule;
  }

  // name - computed: true, optional: true, required: false
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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // condition_groups - computed: false, optional: true, required: false
  private _conditionGroups = new AlertRouteRulesConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRouteRulesConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  public resetConditionGroups() {
    this._conditionGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new AlertRouteRulesDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: AlertRouteRulesDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}

export class AlertRouteRulesList extends cdktf.ComplexList {
  public internalValue? : AlertRouteRules[] | cdktf.IResolvable

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
  public get(index: number): AlertRouteRulesOutputReference {
    return new AlertRouteRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route rootly_alert_route}
*/
export class AlertRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_alert_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertRoute to import
  * @param importFromId The id of the existing AlertRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_alert_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/alert_route rootly_alert_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AlertRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_alert_route',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsSourceIds = config.alertsSourceIds;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._owningTeamIds = config.owningTeamIds;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_source_ids - computed: false, optional: false, required: true
  private _alertsSourceIds?: string[]; 
  public get alertsSourceIds() {
    return this.getListAttribute('alerts_source_ids');
  }
  public set alertsSourceIds(value: string[]) {
    this._alertsSourceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsSourceIdsInput() {
    return this._alertsSourceIds;
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

  // owning_team_ids - computed: false, optional: true, required: false
  private _owningTeamIds?: string[]; 
  public get owningTeamIds() {
    return this.getListAttribute('owning_team_ids');
  }
  public set owningTeamIds(value: string[]) {
    this._owningTeamIds = value;
  }
  public resetOwningTeamIds() {
    this._owningTeamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get owningTeamIdsInput() {
    return this._owningTeamIds;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new AlertRouteRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AlertRouteRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
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
      alerts_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertsSourceIds),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owning_team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owningTeamIds),
      rules: cdktf.listMapper(alertRouteRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertsSourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      owning_team_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owningTeamIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rules: {
        value: cdktf.listMapperHcl(alertRouteRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertRouteRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
