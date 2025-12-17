// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Grouping condition for the alert group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#condition_type AlertGroup#condition_type}
  */
  readonly conditionType?: string;
  /**
  * Date or deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#deleted_at AlertGroup#deleted_at}
  */
  readonly deletedAt?: string;
  /**
  * The description of the alert group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#description AlertGroup#description}
  */
  readonly description?: string;
  /**
  * Whether the alerts are grouped by title or not. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#group_by_alert_title AlertGroup#group_by_alert_title}
  */
  readonly groupByAlertTitle?: boolean | cdktf.IResolvable;
  /**
  * Whether the alerts are grouped by urgency or not. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#group_by_alert_urgency AlertGroup#group_by_alert_urgency}
  */
  readonly groupByAlertUrgency?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#id AlertGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the alert group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#name AlertGroup#name}
  */
  readonly name: string;
  /**
  * The slug of the alert group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#slug AlertGroup#slug}
  */
  readonly slug?: string;
  /**
  * Time window for the alert grouping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#time_window AlertGroup#time_window}
  */
  readonly timeWindow?: number;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#attributes AlertGroup#attributes}
  */
  readonly attributes?: AlertGroupAttributes[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#conditions AlertGroup#conditions}
  */
  readonly conditions?: AlertGroupConditions[] | cdktf.IResolvable;
  /**
  * targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#targets AlertGroup#targets}
  */
  readonly targets?: AlertGroupTargets[] | cdktf.IResolvable;
}
export interface AlertGroupAttributes {
  /**
  * The JSON path to the value to group by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#json_path AlertGroup#json_path}
  */
  readonly jsonPath?: string;
}

export function alertGroupAttributesToTerraform(struct?: AlertGroupAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}


export function alertGroupAttributesToHclTerraform(struct?: AlertGroupAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertGroupAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertGroupAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertGroupAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPath = value.jsonPath;
    }
  }

  // json_path - computed: true, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }
}

export class AlertGroupAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertGroupAttributes[] | cdktf.IResolvable

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
  public get(index: number): AlertGroupAttributesOutputReference {
    return new AlertGroupAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertGroupConditionsValues {
  /**
  * ID of the Alert Urgency to set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#record_id AlertGroup#record_id}
  */
  readonly recordId?: string;
  /**
  * Should be "AlertUrgency".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#record_type AlertGroup#record_type}
  */
  readonly recordType?: string;
}

export function alertGroupConditionsValuesToTerraform(struct?: AlertGroupConditionsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_id: cdktf.stringToTerraform(struct!.recordId),
    record_type: cdktf.stringToTerraform(struct!.recordType),
  }
}


export function alertGroupConditionsValuesToHclTerraform(struct?: AlertGroupConditionsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record_id: {
      value: cdktf.stringToHclTerraform(struct!.recordId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertGroupConditionsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertGroupConditionsValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordId = this._recordId;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertGroupConditionsValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recordId = undefined;
      this._recordType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recordId = value.recordId;
      this._recordType = value.recordType;
    }
  }

  // record_id - computed: true, optional: true, required: false
  private _recordId?: string; 
  public get recordId() {
    return this.getStringAttribute('record_id');
  }
  public set recordId(value: string) {
    this._recordId = value;
  }
  public resetRecordId() {
    this._recordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdInput() {
    return this._recordId;
  }

  // record_type - computed: true, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }
}

export class AlertGroupConditionsValuesList extends cdktf.ComplexList {
  public internalValue? : AlertGroupConditionsValues[] | cdktf.IResolvable

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
  public get(index: number): AlertGroupConditionsValuesOutputReference {
    return new AlertGroupConditionsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertGroupConditions {
  /**
  * The Alert Urgency ID's to check in the condition. Only need to be set when the property field type is 'attribute', the property field name is 'alert_urgency' and the property field condition type is 'is_one_of' or 'is_not_one_of'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#alert_urgency_ids AlertGroup#alert_urgency_ids}
  */
  readonly alertUrgencyIds?: string[];
  /**
  * The ID of the conditionable. If conditionable_type is AlertField, this is the ID of the alert field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#conditionable_id AlertGroup#conditionable_id}
  */
  readonly conditionableId?: string;
  /**
  * The type of the conditionable. Value must be one of `AlertField`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#conditionable_type AlertGroup#conditionable_type}
  */
  readonly conditionableType?: string;
  /**
  * The condition type of the property field. Value must be one of `is_one_of`, `is_not_one_of`, `contains`, `does_not_contain`, `starts_with`, `ends_with`, `matches_regex`, `is_empty`, `matches_existing_alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#property_field_condition_type AlertGroup#property_field_condition_type}
  */
  readonly propertyFieldConditionType?: string;
  /**
  * The name of the property field. If the property field type is selected as 'attribute', then the allowed property field names are 'summary' (for Title), 'description', 'alert_urgency' and 'external_url' (for Alert Source URL). If the property field type is selected as 'payload', then the property field name should be supplied in JSON Path syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#property_field_name AlertGroup#property_field_name}
  */
  readonly propertyFieldName?: string;
  /**
  * The type of the property field. Value must be one of `attribute`, `payload`, `alert_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#property_field_type AlertGroup#property_field_type}
  */
  readonly propertyFieldType?: string;
  /**
  * The value of the property field. Can be null if the property field condition type is 'is_one_of' or 'is_not_one_of'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#property_field_value AlertGroup#property_field_value}
  */
  readonly propertyFieldValue?: string;
  /**
  * The values of the property field. Used if the property field condition type is 'is_one_of' or 'is_not_one_of' except for when property field name is 'alert_urgency'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#property_field_values AlertGroup#property_field_values}
  */
  readonly propertyFieldValues?: string[];
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#values AlertGroup#values}
  */
  readonly values?: AlertGroupConditionsValues[] | cdktf.IResolvable;
}

export function alertGroupConditionsToTerraform(struct?: AlertGroupConditions | cdktf.IResolvable): any {
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
    values: cdktf.listMapper(alertGroupConditionsValuesToTerraform, true)(struct!.values),
  }
}


export function alertGroupConditionsToHclTerraform(struct?: AlertGroupConditions | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(alertGroupConditionsValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "AlertGroupConditionsValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertGroupConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertGroupConditions | cdktf.IResolvable | undefined {
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
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertGroupConditions | cdktf.IResolvable | undefined) {
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
      this._values.internalValue = undefined;
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
      this._values.internalValue = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values = new AlertGroupConditionsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: AlertGroupConditionsValues[] | cdktf.IResolvable) {
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

export class AlertGroupConditionsList extends cdktf.ComplexList {
  public internalValue? : AlertGroupConditions[] | cdktf.IResolvable

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
  public get(index: number): AlertGroupConditionsOutputReference {
    return new AlertGroupConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertGroupTargets {
  /**
  * id for the Group, Service or EscalationPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#target_id AlertGroup#target_id}
  */
  readonly targetId?: string;
  /**
  * The type of the target.. Value must be one of `Group`, `Service`, `EscalationPolicy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#target_type AlertGroup#target_type}
  */
  readonly targetType?: string;
}

export function alertGroupTargetsToTerraform(struct?: AlertGroupTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function alertGroupTargetsToHclTerraform(struct?: AlertGroupTargets | cdktf.IResolvable): any {
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

export class AlertGroupTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertGroupTargets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AlertGroupTargets | cdktf.IResolvable | undefined) {
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

export class AlertGroupTargetsList extends cdktf.ComplexList {
  public internalValue? : AlertGroupTargets[] | cdktf.IResolvable

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
  public get(index: number): AlertGroupTargetsOutputReference {
    return new AlertGroupTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group rootly_alert_group}
*/
export class AlertGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_alert_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertGroup to import
  * @param importFromId The id of the existing AlertGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_alert_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/alert_group rootly_alert_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AlertGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_alert_group',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._conditionType = config.conditionType;
    this._deletedAt = config.deletedAt;
    this._description = config.description;
    this._groupByAlertTitle = config.groupByAlertTitle;
    this._groupByAlertUrgency = config.groupByAlertUrgency;
    this._id = config.id;
    this._name = config.name;
    this._slug = config.slug;
    this._timeWindow = config.timeWindow;
    this._attributes.internalValue = config.attributes;
    this._conditions.internalValue = config.conditions;
    this._targets.internalValue = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // condition_type - computed: true, optional: true, required: false
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

  // deleted_at - computed: true, optional: true, required: false
  private _deletedAt?: string; 
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }
  public set deletedAt(value: string) {
    this._deletedAt = value;
  }
  public resetDeletedAt() {
    this._deletedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedAtInput() {
    return this._deletedAt;
  }

  // description - computed: true, optional: true, required: false
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

  // group_by_alert_title - computed: true, optional: true, required: false
  private _groupByAlertTitle?: boolean | cdktf.IResolvable; 
  public get groupByAlertTitle() {
    return this.getBooleanAttribute('group_by_alert_title');
  }
  public set groupByAlertTitle(value: boolean | cdktf.IResolvable) {
    this._groupByAlertTitle = value;
  }
  public resetGroupByAlertTitle() {
    this._groupByAlertTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAlertTitleInput() {
    return this._groupByAlertTitle;
  }

  // group_by_alert_urgency - computed: true, optional: true, required: false
  private _groupByAlertUrgency?: boolean | cdktf.IResolvable; 
  public get groupByAlertUrgency() {
    return this.getBooleanAttribute('group_by_alert_urgency');
  }
  public set groupByAlertUrgency(value: boolean | cdktf.IResolvable) {
    this._groupByAlertUrgency = value;
  }
  public resetGroupByAlertUrgency() {
    this._groupByAlertUrgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAlertUrgencyInput() {
    return this._groupByAlertUrgency;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // time_window - computed: true, optional: true, required: false
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  public resetTimeWindow() {
    this._timeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new AlertGroupAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: AlertGroupAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new AlertGroupConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AlertGroupConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new AlertGroupTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: AlertGroupTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      condition_type: cdktf.stringToTerraform(this._conditionType),
      deleted_at: cdktf.stringToTerraform(this._deletedAt),
      description: cdktf.stringToTerraform(this._description),
      group_by_alert_title: cdktf.booleanToTerraform(this._groupByAlertTitle),
      group_by_alert_urgency: cdktf.booleanToTerraform(this._groupByAlertUrgency),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      time_window: cdktf.numberToTerraform(this._timeWindow),
      attributes: cdktf.listMapper(alertGroupAttributesToTerraform, true)(this._attributes.internalValue),
      conditions: cdktf.listMapper(alertGroupConditionsToTerraform, true)(this._conditions.internalValue),
      targets: cdktf.listMapper(alertGroupTargetsToTerraform, true)(this._targets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      condition_type: {
        value: cdktf.stringToHclTerraform(this._conditionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deleted_at: {
        value: cdktf.stringToHclTerraform(this._deletedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by_alert_title: {
        value: cdktf.booleanToHclTerraform(this._groupByAlertTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_by_alert_urgency: {
        value: cdktf.booleanToHclTerraform(this._groupByAlertUrgency),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_window: {
        value: cdktf.numberToHclTerraform(this._timeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attributes: {
        value: cdktf.listMapperHcl(alertGroupAttributesToHclTerraform, true)(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertGroupAttributesList",
      },
      conditions: {
        value: cdktf.listMapperHcl(alertGroupConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertGroupConditionsList",
      },
      targets: {
        value: cdktf.listMapperHcl(alertGroupTargetsToHclTerraform, true)(this._targets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertGroupTargetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
