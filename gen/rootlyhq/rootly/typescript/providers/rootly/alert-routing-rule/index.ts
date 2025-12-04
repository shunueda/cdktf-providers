// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertRoutingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the alerts source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#alerts_source_id AlertRoutingRule#alerts_source_id}
  */
  readonly alertsSourceId: string;
  /**
  * The type of condition for the alert routing rule. Value must be one of `all`, `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#condition_type AlertRoutingRule#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#enabled AlertRoutingRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#id AlertRoutingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert routing rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#name AlertRoutingRule#name}
  */
  readonly name: string;
  /**
  * The position of the alert routing rule for ordering evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#position AlertRoutingRule#position}
  */
  readonly position?: number;
  /**
  * condition_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#condition_groups AlertRoutingRule#condition_groups}
  */
  readonly conditionGroups?: AlertRoutingRuleConditionGroups[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#conditions AlertRoutingRule#conditions}
  */
  readonly conditions?: AlertRoutingRuleConditions[] | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#destination AlertRoutingRule#destination}
  */
  readonly destination: AlertRoutingRuleDestination;
}
export interface AlertRoutingRuleConditionGroupsConditions {
  /**
  * The ID of the conditionable object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#conditionable_id AlertRoutingRule#conditionable_id}
  */
  readonly conditionableId?: string;
  /**
  * The type of the conditionable object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#conditionable_type AlertRoutingRule#conditionable_type}
  */
  readonly conditionableType?: string;
  /**
  * Date of creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#created_at AlertRoutingRule#created_at}
  */
  readonly createdAt?: string;
  /**
  * Unique ID of the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#id AlertRoutingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The condition type of the property field. Value must be one of `is_one_of`, `is_not_one_of`, `contains`, `does_not_contain`, `starts_with`, `ends_with`, `matches_regex`, `is_empty`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_condition_type AlertRoutingRule#property_field_condition_type}
  */
  readonly propertyFieldConditionType?: string;
  /**
  * The name of the property field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_name AlertRoutingRule#property_field_name}
  */
  readonly propertyFieldName?: string;
  /**
  * The type of the property field. Value must be one of `attribute`, `payload`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_type AlertRoutingRule#property_field_type}
  */
  readonly propertyFieldType?: string;
  /**
  * The value of the property field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_value AlertRoutingRule#property_field_value}
  */
  readonly propertyFieldValue?: string;
  /**
  * The values of the property field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_values AlertRoutingRule#property_field_values}
  */
  readonly propertyFieldValues?: string[];
  /**
  * Date of last update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#updated_at AlertRoutingRule#updated_at}
  */
  readonly updatedAt?: string;
}

export function alertRoutingRuleConditionGroupsConditionsToTerraform(struct?: AlertRoutingRuleConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditionable_id: cdktf.stringToTerraform(struct!.conditionableId),
    conditionable_type: cdktf.stringToTerraform(struct!.conditionableType),
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    id: cdktf.stringToTerraform(struct!.id),
    property_field_condition_type: cdktf.stringToTerraform(struct!.propertyFieldConditionType),
    property_field_name: cdktf.stringToTerraform(struct!.propertyFieldName),
    property_field_type: cdktf.stringToTerraform(struct!.propertyFieldType),
    property_field_value: cdktf.stringToTerraform(struct!.propertyFieldValue),
    property_field_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propertyFieldValues),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function alertRoutingRuleConditionGroupsConditionsToHclTerraform(struct?: AlertRoutingRuleConditionGroupsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRoutingRuleConditionGroupsConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRoutingRuleConditionGroupsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableId = this._conditionableId;
    }
    if (this._conditionableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionableType = this._conditionableType;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
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
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRoutingRuleConditionGroupsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionableId = undefined;
      this._conditionableType = undefined;
      this._createdAt = undefined;
      this._id = undefined;
      this._propertyFieldConditionType = undefined;
      this._propertyFieldName = undefined;
      this._propertyFieldType = undefined;
      this._propertyFieldValue = undefined;
      this._propertyFieldValues = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionableId = value.conditionableId;
      this._conditionableType = value.conditionableType;
      this._createdAt = value.createdAt;
      this._id = value.id;
      this._propertyFieldConditionType = value.propertyFieldConditionType;
      this._propertyFieldName = value.propertyFieldName;
      this._propertyFieldType = value.propertyFieldType;
      this._propertyFieldValue = value.propertyFieldValue;
      this._propertyFieldValues = value.propertyFieldValues;
      this._updatedAt = value.updatedAt;
    }
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

  // conditionable_type - computed: true, optional: true, required: false
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

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class AlertRoutingRuleConditionGroupsConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRoutingRuleConditionGroupsConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRoutingRuleConditionGroupsConditionsOutputReference {
    return new AlertRoutingRuleConditionGroupsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRoutingRuleConditionGroups {
  /**
  * Date of creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#created_at AlertRoutingRule#created_at}
  */
  readonly createdAt?: string;
  /**
  * Unique ID of the condition group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#id AlertRoutingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The position of the condition group for ordering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#position AlertRoutingRule#position}
  */
  readonly position?: number;
  /**
  * Date of last update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#updated_at AlertRoutingRule#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#conditions AlertRoutingRule#conditions}
  */
  readonly conditions?: AlertRoutingRuleConditionGroupsConditions[] | cdktf.IResolvable;
}

export function alertRoutingRuleConditionGroupsToTerraform(struct?: AlertRoutingRuleConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_at: cdktf.stringToTerraform(struct!.createdAt),
    id: cdktf.stringToTerraform(struct!.id),
    position: cdktf.numberToTerraform(struct!.position),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
    conditions: cdktf.listMapper(alertRoutingRuleConditionGroupsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function alertRoutingRuleConditionGroupsToHclTerraform(struct?: AlertRoutingRuleConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_at: {
      value: cdktf.stringToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: cdktf.listMapperHcl(alertRoutingRuleConditionGroupsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRoutingRuleConditionGroupsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRoutingRuleConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRoutingRuleConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRoutingRuleConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdAt = undefined;
      this._id = undefined;
      this._position = undefined;
      this._updatedAt = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdAt = value.createdAt;
      this._id = value.id;
      this._position = value.position;
      this._updatedAt = value.updatedAt;
      this._conditions.internalValue = value.conditions;
    }
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new AlertRoutingRuleConditionGroupsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRoutingRuleConditionGroupsConditions[] | cdktf.IResolvable) {
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

export class AlertRoutingRuleConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : AlertRoutingRuleConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): AlertRoutingRuleConditionGroupsOutputReference {
    return new AlertRoutingRuleConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRoutingRuleConditions {
  /**
  * The condition type of the property field. Value must be one of `is_one_of`, `is_not_one_of`, `contains`, `does_not_contain`, `starts_with`, `ends_with`, `matches_regex`, `is_empty`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_condition_type AlertRoutingRule#property_field_condition_type}
  */
  readonly propertyFieldConditionType?: string;
  /**
  * The name of the property field. If the property field type is selected as 'attribute', then the allowed property field names are 'summary' (for Title), 'description', 'alert_urgency' and 'external_url' (for Alert Source URL). If the property field type is selected as 'payload', then the property field name should be supplied in JSON Path syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_name AlertRoutingRule#property_field_name}
  */
  readonly propertyFieldName?: string;
  /**
  * The type of the property field. Value must be one of `attribute`, `payload`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_type AlertRoutingRule#property_field_type}
  */
  readonly propertyFieldType?: string;
  /**
  * The value of the property field. Can be null if the property field condition type is 'is_one_of' or 'is_not_one_of'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_value AlertRoutingRule#property_field_value}
  */
  readonly propertyFieldValue?: string;
  /**
  * The values of the property field. Used if the property field condition type is 'is_one_of' or 'is_not_one_of' except for when property field name is 'alert_urgency'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#property_field_values AlertRoutingRule#property_field_values}
  */
  readonly propertyFieldValues?: string[];
}

export function alertRoutingRuleConditionsToTerraform(struct?: AlertRoutingRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property_field_condition_type: cdktf.stringToTerraform(struct!.propertyFieldConditionType),
    property_field_name: cdktf.stringToTerraform(struct!.propertyFieldName),
    property_field_type: cdktf.stringToTerraform(struct!.propertyFieldType),
    property_field_value: cdktf.stringToTerraform(struct!.propertyFieldValue),
    property_field_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propertyFieldValues),
  }
}


export function alertRoutingRuleConditionsToHclTerraform(struct?: AlertRoutingRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AlertRoutingRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRoutingRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AlertRoutingRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._propertyFieldConditionType = value.propertyFieldConditionType;
      this._propertyFieldName = value.propertyFieldName;
      this._propertyFieldType = value.propertyFieldType;
      this._propertyFieldValue = value.propertyFieldValue;
      this._propertyFieldValues = value.propertyFieldValues;
    }
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

export class AlertRoutingRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertRoutingRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertRoutingRuleConditionsOutputReference {
    return new AlertRoutingRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRoutingRuleDestination {
  /**
  * The ID of the target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#target_id AlertRoutingRule#target_id}
  */
  readonly targetId: string;
  /**
  * The type of the target. Value must be one of `Service`, `Group`, `EscalationPolicy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#target_type AlertRoutingRule#target_type}
  */
  readonly targetType?: string;
}

export function alertRoutingRuleDestinationToTerraform(struct?: AlertRoutingRuleDestinationOutputReference | AlertRoutingRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function alertRoutingRuleDestinationToHclTerraform(struct?: AlertRoutingRuleDestinationOutputReference | AlertRoutingRuleDestination): any {
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

export class AlertRoutingRuleDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertRoutingRuleDestination | undefined {
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

  public set internalValue(value: AlertRoutingRuleDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetId = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetId = value.targetId;
      this._targetType = value.targetType;
    }
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
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

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule rootly_alert_routing_rule}
*/
export class AlertRoutingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_alert_routing_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertRoutingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertRoutingRule to import
  * @param importFromId The id of the existing AlertRoutingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertRoutingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_alert_routing_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.11/docs/resources/alert_routing_rule rootly_alert_routing_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertRoutingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertRoutingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_alert_routing_rule',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.11',
        providerVersionConstraint: '4.3.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsSourceId = config.alertsSourceId;
    this._conditionType = config.conditionType;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._conditionGroups.internalValue = config.conditionGroups;
    this._conditions.internalValue = config.conditions;
    this._destination.internalValue = config.destination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_source_id - computed: false, optional: false, required: true
  private _alertsSourceId?: string; 
  public get alertsSourceId() {
    return this.getStringAttribute('alerts_source_id');
  }
  public set alertsSourceId(value: string) {
    this._alertsSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsSourceIdInput() {
    return this._alertsSourceId;
  }

  // condition_type - computed: false, optional: true, required: false
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  public resetConditionType() {
    this._conditionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
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
  private _conditionGroups = new AlertRoutingRuleConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: AlertRoutingRuleConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  public resetConditionGroups() {
    this._conditionGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new AlertRoutingRuleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertRoutingRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new AlertRoutingRuleDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: AlertRoutingRuleDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_source_id: cdktf.stringToTerraform(this._alertsSourceId),
      condition_type: cdktf.stringToTerraform(this._conditionType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      condition_groups: cdktf.listMapper(alertRoutingRuleConditionGroupsToTerraform, true)(this._conditionGroups.internalValue),
      conditions: cdktf.listMapper(alertRoutingRuleConditionsToTerraform, true)(this._conditions.internalValue),
      destination: alertRoutingRuleDestinationToTerraform(this._destination.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_source_id: {
        value: cdktf.stringToHclTerraform(this._alertsSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
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
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      condition_groups: {
        value: cdktf.listMapperHcl(alertRoutingRuleConditionGroupsToHclTerraform, true)(this._conditionGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertRoutingRuleConditionGroupsList",
      },
      conditions: {
        value: cdktf.listMapperHcl(alertRoutingRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertRoutingRuleConditionsList",
      },
      destination: {
        value: alertRoutingRuleDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertRoutingRuleDestinationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
