// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFullWebRequestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#description ServiceFullWebRequest#description}
  */
  readonly description?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#enabled ServiceFullWebRequest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#id ServiceFullWebRequest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#insert_after ServiceFullWebRequest#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Define a management zone of the process group for which this service detection rule should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#management_zones ServiceFullWebRequest#management_zones}
  */
  readonly managementZones?: string[];
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#name ServiceFullWebRequest#name}
  */
  readonly name: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#conditions ServiceFullWebRequest#conditions}
  */
  readonly conditions?: ServiceFullWebRequestConditions;
  /**
  * id_contributors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#id_contributors ServiceFullWebRequest#id_contributors}
  */
  readonly idContributors: ServiceFullWebRequestIdContributors;
}
export interface ServiceFullWebRequestConditionsCondition {
  /**
  * Take the value of this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#attribute ServiceFullWebRequest#attribute}
  */
  readonly attribute: string;
  /**
  * Apply this operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#compare_operation_type ServiceFullWebRequest#compare_operation_type}
  */
  readonly compareOperationType: string;
  /**
  * Technology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#framework ServiceFullWebRequest#framework}
  */
  readonly framework?: string[];
  /**
  * Ignore case sensitivity for texts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#ignore_case ServiceFullWebRequest#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#int_value ServiceFullWebRequest#int_value}
  */
  readonly intValue?: number;
  /**
  * Values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#int_values ServiceFullWebRequest#int_values}
  */
  readonly intValues?: number[];
  /**
  * From
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#ip_range_from ServiceFullWebRequest#ip_range_from}
  */
  readonly ipRangeFrom?: string;
  /**
  * To
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#ip_range_to ServiceFullWebRequest#ip_range_to}
  */
  readonly ipRangeTo?: string;
  /**
  * If multiple values are specified, at least one of them must match for the condition to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#tag_values ServiceFullWebRequest#tag_values}
  */
  readonly tagValues?: string[];
  /**
  * If multiple values are specified, at least one of them must match for the condition to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#text_values ServiceFullWebRequest#text_values}
  */
  readonly textValues?: string[];
}

export function serviceFullWebRequestConditionsConditionToTerraform(struct?: ServiceFullWebRequestConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    compare_operation_type: cdktf.stringToTerraform(struct!.compareOperationType),
    framework: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.framework),
    ignore_case: cdktf.booleanToTerraform(struct!.ignoreCase),
    int_value: cdktf.numberToTerraform(struct!.intValue),
    int_values: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.intValues),
    ip_range_from: cdktf.stringToTerraform(struct!.ipRangeFrom),
    ip_range_to: cdktf.stringToTerraform(struct!.ipRangeTo),
    tag_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagValues),
    text_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.textValues),
  }
}


export function serviceFullWebRequestConditionsConditionToHclTerraform(struct?: ServiceFullWebRequestConditionsCondition | cdktf.IResolvable): any {
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
    compare_operation_type: {
      value: cdktf.stringToHclTerraform(struct!.compareOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    framework: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.framework),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ignore_case: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    int_values: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.intValues),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    ip_range_from: {
      value: cdktf.stringToHclTerraform(struct!.ipRangeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_range_to: {
      value: cdktf.stringToHclTerraform(struct!.ipRangeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tagValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    text_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.textValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebRequestConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._compareOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareOperationType = this._compareOperationType;
    }
    if (this._framework !== undefined) {
      hasAnyValues = true;
      internalValueResult.framework = this._framework;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._intValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValues = this._intValues;
    }
    if (this._ipRangeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangeFrom = this._ipRangeFrom;
    }
    if (this._ipRangeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRangeTo = this._ipRangeTo;
    }
    if (this._tagValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValues = this._tagValues;
    }
    if (this._textValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.textValues = this._textValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._compareOperationType = undefined;
      this._framework = undefined;
      this._ignoreCase = undefined;
      this._intValue = undefined;
      this._intValues = undefined;
      this._ipRangeFrom = undefined;
      this._ipRangeTo = undefined;
      this._tagValues = undefined;
      this._textValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._compareOperationType = value.compareOperationType;
      this._framework = value.framework;
      this._ignoreCase = value.ignoreCase;
      this._intValue = value.intValue;
      this._intValues = value.intValues;
      this._ipRangeFrom = value.ipRangeFrom;
      this._ipRangeTo = value.ipRangeTo;
      this._tagValues = value.tagValues;
      this._textValues = value.textValues;
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

  // compare_operation_type - computed: false, optional: false, required: true
  private _compareOperationType?: string; 
  public get compareOperationType() {
    return this.getStringAttribute('compare_operation_type');
  }
  public set compareOperationType(value: string) {
    this._compareOperationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareOperationTypeInput() {
    return this._compareOperationType;
  }

  // framework - computed: false, optional: true, required: false
  private _framework?: string[]; 
  public get framework() {
    return cdktf.Fn.tolist(this.getListAttribute('framework'));
  }
  public set framework(value: string[]) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: boolean | cdktf.IResolvable; 
  public get ignoreCase() {
    return this.getBooleanAttribute('ignore_case');
  }
  public set ignoreCase(value: boolean | cdktf.IResolvable) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // int_value - computed: false, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // int_values - computed: false, optional: true, required: false
  private _intValues?: number[]; 
  public get intValues() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('int_values')));
  }
  public set intValues(value: number[]) {
    this._intValues = value;
  }
  public resetIntValues() {
    this._intValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValuesInput() {
    return this._intValues;
  }

  // ip_range_from - computed: false, optional: true, required: false
  private _ipRangeFrom?: string; 
  public get ipRangeFrom() {
    return this.getStringAttribute('ip_range_from');
  }
  public set ipRangeFrom(value: string) {
    this._ipRangeFrom = value;
  }
  public resetIpRangeFrom() {
    this._ipRangeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeFromInput() {
    return this._ipRangeFrom;
  }

  // ip_range_to - computed: false, optional: true, required: false
  private _ipRangeTo?: string; 
  public get ipRangeTo() {
    return this.getStringAttribute('ip_range_to');
  }
  public set ipRangeTo(value: string) {
    this._ipRangeTo = value;
  }
  public resetIpRangeTo() {
    this._ipRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeToInput() {
    return this._ipRangeTo;
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues?: string[]; 
  public get tagValues() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_values'));
  }
  public set tagValues(value: string[]) {
    this._tagValues = value;
  }
  public resetTagValues() {
    this._tagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues;
  }

  // text_values - computed: false, optional: true, required: false
  private _textValues?: string[]; 
  public get textValues() {
    return cdktf.Fn.tolist(this.getListAttribute('text_values'));
  }
  public set textValues(value: string[]) {
    this._textValues = value;
  }
  public resetTextValues() {
    this._textValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textValuesInput() {
    return this._textValues;
  }
}

export class ServiceFullWebRequestConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebRequestConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebRequestConditionsConditionOutputReference {
    return new ServiceFullWebRequestConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebRequestConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#condition ServiceFullWebRequest#condition}
  */
  readonly condition: ServiceFullWebRequestConditionsCondition[] | cdktf.IResolvable;
}

export function serviceFullWebRequestConditionsToTerraform(struct?: ServiceFullWebRequestConditionsOutputReference | ServiceFullWebRequestConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(serviceFullWebRequestConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function serviceFullWebRequestConditionsToHclTerraform(struct?: ServiceFullWebRequestConditionsOutputReference | ServiceFullWebRequestConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(serviceFullWebRequestConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new ServiceFullWebRequestConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ServiceFullWebRequestConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#include_hex_numbers ServiceFullWebRequest#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#min_digit_count ServiceFullWebRequest#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#prefix ServiceFullWebRequest#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#replacement_value ServiceFullWebRequest#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * How many segments should be taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#segment_count ServiceFullWebRequest#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * select index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#select_index ServiceFullWebRequest#select_index}
  */
  readonly selectIndex?: number;
  /**
  * split by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#split_delimiter ServiceFullWebRequest#split_delimiter}
  */
  readonly splitDelimiter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#suffix ServiceFullWebRequest#suffix}
  */
  readonly suffix?: string;
  /**
  * take from end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#take_from_end ServiceFullWebRequest#take_from_end}
  */
  readonly takeFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `AFTER`, `BEFORE`, `BETWEEN`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`, `SPLIT_SELECT`, `TAKE_SEGMENTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformation_type ServiceFullWebRequest#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_hex_numbers: cdktf.booleanToTerraform(struct!.includeHexNumbers),
    min_digit_count: cdktf.numberToTerraform(struct!.minDigitCount),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    replacement_value: cdktf.stringToTerraform(struct!.replacementValue),
    segment_count: cdktf.numberToTerraform(struct!.segmentCount),
    select_index: cdktf.numberToTerraform(struct!.selectIndex),
    split_delimiter: cdktf.stringToTerraform(struct!.splitDelimiter),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    take_from_end: cdktf.booleanToTerraform(struct!.takeFromEnd),
    transformation_type: cdktf.stringToTerraform(struct!.transformationType),
  }
}


export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_hex_numbers: {
      value: cdktf.booleanToHclTerraform(struct!.includeHexNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_digit_count: {
      value: cdktf.numberToHclTerraform(struct!.minDigitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_value: {
      value: cdktf.stringToHclTerraform(struct!.replacementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_count: {
      value: cdktf.numberToHclTerraform(struct!.segmentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_index: {
      value: cdktf.numberToHclTerraform(struct!.selectIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    take_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.takeFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation_type: {
      value: cdktf.stringToHclTerraform(struct!.transformationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHexNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHexNumbers = this._includeHexNumbers;
    }
    if (this._minDigitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDigitCount = this._minDigitCount;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._replacementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementValue = this._replacementValue;
    }
    if (this._segmentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentCount = this._segmentCount;
    }
    if (this._selectIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectIndex = this._selectIndex;
    }
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._takeFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.takeFromEnd = this._takeFromEnd;
    }
    if (this._transformationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationType = this._transformationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeHexNumbers = undefined;
      this._minDigitCount = undefined;
      this._prefix = undefined;
      this._replacementValue = undefined;
      this._segmentCount = undefined;
      this._selectIndex = undefined;
      this._splitDelimiter = undefined;
      this._suffix = undefined;
      this._takeFromEnd = undefined;
      this._transformationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeHexNumbers = value.includeHexNumbers;
      this._minDigitCount = value.minDigitCount;
      this._prefix = value.prefix;
      this._replacementValue = value.replacementValue;
      this._segmentCount = value.segmentCount;
      this._selectIndex = value.selectIndex;
      this._splitDelimiter = value.splitDelimiter;
      this._suffix = value.suffix;
      this._takeFromEnd = value.takeFromEnd;
      this._transformationType = value.transformationType;
    }
  }

  // include_hex_numbers - computed: false, optional: true, required: false
  private _includeHexNumbers?: boolean | cdktf.IResolvable; 
  public get includeHexNumbers() {
    return this.getBooleanAttribute('include_hex_numbers');
  }
  public set includeHexNumbers(value: boolean | cdktf.IResolvable) {
    this._includeHexNumbers = value;
  }
  public resetIncludeHexNumbers() {
    this._includeHexNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHexNumbersInput() {
    return this._includeHexNumbers;
  }

  // min_digit_count - computed: false, optional: true, required: false
  private _minDigitCount?: number; 
  public get minDigitCount() {
    return this.getNumberAttribute('min_digit_count');
  }
  public set minDigitCount(value: number) {
    this._minDigitCount = value;
  }
  public resetMinDigitCount() {
    this._minDigitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDigitCountInput() {
    return this._minDigitCount;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // replacement_value - computed: false, optional: true, required: false
  private _replacementValue?: string; 
  public get replacementValue() {
    return this.getStringAttribute('replacement_value');
  }
  public set replacementValue(value: string) {
    this._replacementValue = value;
  }
  public resetReplacementValue() {
    this._replacementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementValueInput() {
    return this._replacementValue;
  }

  // segment_count - computed: false, optional: true, required: false
  private _segmentCount?: number; 
  public get segmentCount() {
    return this.getNumberAttribute('segment_count');
  }
  public set segmentCount(value: number) {
    this._segmentCount = value;
  }
  public resetSegmentCount() {
    this._segmentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentCountInput() {
    return this._segmentCount;
  }

  // select_index - computed: false, optional: true, required: false
  private _selectIndex?: number; 
  public get selectIndex() {
    return this.getNumberAttribute('select_index');
  }
  public set selectIndex(value: number) {
    this._selectIndex = value;
  }
  public resetSelectIndex() {
    this._selectIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectIndexInput() {
    return this._selectIndex;
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // take_from_end - computed: false, optional: true, required: false
  private _takeFromEnd?: boolean | cdktf.IResolvable; 
  public get takeFromEnd() {
    return this.getBooleanAttribute('take_from_end');
  }
  public set takeFromEnd(value: boolean | cdktf.IResolvable) {
    this._takeFromEnd = value;
  }
  public resetTakeFromEnd() {
    this._takeFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeFromEndInput() {
    return this._takeFromEnd;
  }

  // transformation_type - computed: false, optional: false, required: true
  private _transformationType?: string; 
  public get transformationType() {
    return this.getStringAttribute('transformation_type');
  }
  public set transformationType(value: string) {
    this._transformationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTypeInput() {
    return this._transformationType;
  }
}

export class ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformation ServiceFullWebRequest#transformation}
  */
  readonly transformation: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference | ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference | ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformation.internalValue = value.transformation;
    }
  }

  // transformation - computed: false, optional: false, required: true
  private _transformation = new ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#value ServiceFullWebRequest#value}
  */
  readonly value: string;
}

export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference | ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference | ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
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
export interface ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#contribution_type ServiceFullWebRequest#contribution_type}
  */
  readonly contributionType: string;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformations ServiceFullWebRequest#transformations}
  */
  readonly transformations?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#value_override ServiceFullWebRequest#value_override}
  */
  readonly valueOverride?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverride;
}

export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorToTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorOutputReference | ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    transformations: serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorToHclTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorOutputReference | ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contribution_type: {
      value: cdktf.stringToHclTerraform(struct!.contributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformations: {
      value: serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributionType = this._contributionType;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    if (this._valueOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueOverride = this._valueOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contributionType = undefined;
      this._transformations.internalValue = undefined;
      this._valueOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contributionType = value.contributionType;
      this._transformations.internalValue = value.transformations;
      this._valueOverride.internalValue = value.valueOverride;
    }
  }

  // contribution_type - computed: false, optional: false, required: true
  private _contributionType?: string; 
  public get contributionType() {
    return this.getStringAttribute('contribution_type');
  }
  public set contributionType(value: string) {
    this._contributionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contributionTypeInput() {
    return this._contributionType;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorTransformations) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }

  // value_override - computed: false, optional: true, required: false
  private _valueOverride = new ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorValueOverride) {
    this._valueOverride.internalValue = value;
  }
  public resetValueOverride() {
    this._valueOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOverrideInput() {
    return this._valueOverride.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsApplicationId {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#enable_id_contributor ServiceFullWebRequest#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#service_id_contributor ServiceFullWebRequest#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributor;
}

export function serviceFullWebRequestIdContributorsApplicationIdToTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdOutputReference | ServiceFullWebRequestIdContributorsApplicationId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebRequestIdContributorsApplicationIdToHclTerraform(struct?: ServiceFullWebRequestIdContributorsApplicationIdOutputReference | ServiceFullWebRequestIdContributorsApplicationId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_id_contributor: {
      value: cdktf.booleanToHclTerraform(struct!.enableIdContributor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_id_contributor: {
      value: serviceFullWebRequestIdContributorsApplicationIdServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsApplicationIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsApplicationId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdContributor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdContributor = this._enableIdContributor;
    }
    if (this._serviceIdContributor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIdContributor = this._serviceIdContributor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsApplicationId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIdContributor = undefined;
      this._serviceIdContributor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIdContributor = value.enableIdContributor;
      this._serviceIdContributor.internalValue = value.serviceIdContributor;
    }
  }

  // enable_id_contributor - computed: false, optional: false, required: true
  private _enableIdContributor?: boolean | cdktf.IResolvable; 
  public get enableIdContributor() {
    return this.getBooleanAttribute('enable_id_contributor');
  }
  public set enableIdContributor(value: boolean | cdktf.IResolvable) {
    this._enableIdContributor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdContributorInput() {
    return this._enableIdContributor;
  }

  // service_id_contributor - computed: false, optional: true, required: false
  private _serviceIdContributor = new ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebRequestIdContributorsApplicationIdServiceIdContributor) {
    this._serviceIdContributor.internalValue = value;
  }
  public resetServiceIdContributor() {
    this._serviceIdContributor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdContributorInput() {
    return this._serviceIdContributor.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#include_hex_numbers ServiceFullWebRequest#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#min_digit_count ServiceFullWebRequest#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#prefix ServiceFullWebRequest#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#replacement_value ServiceFullWebRequest#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#suffix ServiceFullWebRequest#suffix}
  */
  readonly suffix?: string;
  /**
  * Possible Values: `BEFORE`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformation_type ServiceFullWebRequest#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_hex_numbers: cdktf.booleanToTerraform(struct!.includeHexNumbers),
    min_digit_count: cdktf.numberToTerraform(struct!.minDigitCount),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    replacement_value: cdktf.stringToTerraform(struct!.replacementValue),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    transformation_type: cdktf.stringToTerraform(struct!.transformationType),
  }
}


export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_hex_numbers: {
      value: cdktf.booleanToHclTerraform(struct!.includeHexNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_digit_count: {
      value: cdktf.numberToHclTerraform(struct!.minDigitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_value: {
      value: cdktf.stringToHclTerraform(struct!.replacementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_type: {
      value: cdktf.stringToHclTerraform(struct!.transformationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHexNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHexNumbers = this._includeHexNumbers;
    }
    if (this._minDigitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDigitCount = this._minDigitCount;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._replacementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementValue = this._replacementValue;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._transformationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationType = this._transformationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeHexNumbers = undefined;
      this._minDigitCount = undefined;
      this._prefix = undefined;
      this._replacementValue = undefined;
      this._suffix = undefined;
      this._transformationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeHexNumbers = value.includeHexNumbers;
      this._minDigitCount = value.minDigitCount;
      this._prefix = value.prefix;
      this._replacementValue = value.replacementValue;
      this._suffix = value.suffix;
      this._transformationType = value.transformationType;
    }
  }

  // include_hex_numbers - computed: false, optional: true, required: false
  private _includeHexNumbers?: boolean | cdktf.IResolvable; 
  public get includeHexNumbers() {
    return this.getBooleanAttribute('include_hex_numbers');
  }
  public set includeHexNumbers(value: boolean | cdktf.IResolvable) {
    this._includeHexNumbers = value;
  }
  public resetIncludeHexNumbers() {
    this._includeHexNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHexNumbersInput() {
    return this._includeHexNumbers;
  }

  // min_digit_count - computed: false, optional: true, required: false
  private _minDigitCount?: number; 
  public get minDigitCount() {
    return this.getNumberAttribute('min_digit_count');
  }
  public set minDigitCount(value: number) {
    this._minDigitCount = value;
  }
  public resetMinDigitCount() {
    this._minDigitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDigitCountInput() {
    return this._minDigitCount;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // replacement_value - computed: false, optional: true, required: false
  private _replacementValue?: string; 
  public get replacementValue() {
    return this.getStringAttribute('replacement_value');
  }
  public set replacementValue(value: string) {
    this._replacementValue = value;
  }
  public resetReplacementValue() {
    this._replacementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementValueInput() {
    return this._replacementValue;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // transformation_type - computed: false, optional: false, required: true
  private _transformationType?: string; 
  public get transformationType() {
    return this.getStringAttribute('transformation_type');
  }
  public set transformationType(value: string) {
    this._transformationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTypeInput() {
    return this._transformationType;
  }
}

export class ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformation ServiceFullWebRequest#transformation}
  */
  readonly transformation: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsOutputReference | ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsOutputReference | ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformation.internalValue = value.transformation;
    }
  }

  // transformation - computed: false, optional: false, required: true
  private _transformation = new ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#value ServiceFullWebRequest#value}
  */
  readonly value: string;
}

export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideOutputReference | ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideOutputReference | ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
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
export interface ServiceFullWebRequestIdContributorsContextRootServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformURL`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#contribution_type ServiceFullWebRequest#contribution_type}
  */
  readonly contributionType: string;
  /**
  * The number of segments of the URL to be kept. The URL is divided by slashes (/), the indexing starts with 1 at context root. For example, if you specify 2 for the `www.dynatrace.com/support/help/dynatrace-api/` URL, the value of `support/help` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#segment_count ServiceFullWebRequest#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformations ServiceFullWebRequest#transformations}
  */
  readonly transformations?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#value_override ServiceFullWebRequest#value_override}
  */
  readonly valueOverride?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverride;
}

export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorToTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorOutputReference | ServiceFullWebRequestIdContributorsContextRootServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    segment_count: cdktf.numberToTerraform(struct!.segmentCount),
    transformations: serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebRequestIdContributorsContextRootServiceIdContributorToHclTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorOutputReference | ServiceFullWebRequestIdContributorsContextRootServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contribution_type: {
      value: cdktf.stringToHclTerraform(struct!.contributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_count: {
      value: cdktf.numberToHclTerraform(struct!.segmentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transformations: {
      value: serviceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsContextRootServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsContextRootServiceIdContributor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributionType = this._contributionType;
    }
    if (this._segmentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentCount = this._segmentCount;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    if (this._valueOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueOverride = this._valueOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contributionType = undefined;
      this._segmentCount = undefined;
      this._transformations.internalValue = undefined;
      this._valueOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contributionType = value.contributionType;
      this._segmentCount = value.segmentCount;
      this._transformations.internalValue = value.transformations;
      this._valueOverride.internalValue = value.valueOverride;
    }
  }

  // contribution_type - computed: false, optional: false, required: true
  private _contributionType?: string; 
  public get contributionType() {
    return this.getStringAttribute('contribution_type');
  }
  public set contributionType(value: string) {
    this._contributionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contributionTypeInput() {
    return this._contributionType;
  }

  // segment_count - computed: false, optional: true, required: false
  private _segmentCount?: number; 
  public get segmentCount() {
    return this.getNumberAttribute('segment_count');
  }
  public set segmentCount(value: number) {
    this._segmentCount = value;
  }
  public resetSegmentCount() {
    this._segmentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentCountInput() {
    return this._segmentCount;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorTransformations) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }

  // value_override - computed: false, optional: true, required: false
  private _valueOverride = new ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributorValueOverride) {
    this._valueOverride.internalValue = value;
  }
  public resetValueOverride() {
    this._valueOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOverrideInput() {
    return this._valueOverride.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsContextRoot {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#enable_id_contributor ServiceFullWebRequest#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#service_id_contributor ServiceFullWebRequest#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebRequestIdContributorsContextRootServiceIdContributor;
}

export function serviceFullWebRequestIdContributorsContextRootToTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootOutputReference | ServiceFullWebRequestIdContributorsContextRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebRequestIdContributorsContextRootServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebRequestIdContributorsContextRootToHclTerraform(struct?: ServiceFullWebRequestIdContributorsContextRootOutputReference | ServiceFullWebRequestIdContributorsContextRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_id_contributor: {
      value: cdktf.booleanToHclTerraform(struct!.enableIdContributor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_id_contributor: {
      value: serviceFullWebRequestIdContributorsContextRootServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsContextRootServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsContextRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsContextRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdContributor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdContributor = this._enableIdContributor;
    }
    if (this._serviceIdContributor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIdContributor = this._serviceIdContributor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsContextRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIdContributor = undefined;
      this._serviceIdContributor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIdContributor = value.enableIdContributor;
      this._serviceIdContributor.internalValue = value.serviceIdContributor;
    }
  }

  // enable_id_contributor - computed: false, optional: false, required: true
  private _enableIdContributor?: boolean | cdktf.IResolvable; 
  public get enableIdContributor() {
    return this.getBooleanAttribute('enable_id_contributor');
  }
  public set enableIdContributor(value: boolean | cdktf.IResolvable) {
    this._enableIdContributor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdContributorInput() {
    return this._enableIdContributor;
  }

  // service_id_contributor - computed: false, optional: true, required: false
  private _serviceIdContributor = new ServiceFullWebRequestIdContributorsContextRootServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebRequestIdContributorsContextRootServiceIdContributor) {
    this._serviceIdContributor.internalValue = value;
  }
  public resetServiceIdContributor() {
    this._serviceIdContributor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdContributorInput() {
    return this._serviceIdContributor.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#include_hex_numbers ServiceFullWebRequest#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#min_digit_count ServiceFullWebRequest#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#prefix ServiceFullWebRequest#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#replacement_value ServiceFullWebRequest#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * How many segments should be taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#segment_count ServiceFullWebRequest#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * select index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#select_index ServiceFullWebRequest#select_index}
  */
  readonly selectIndex?: number;
  /**
  * split by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#split_delimiter ServiceFullWebRequest#split_delimiter}
  */
  readonly splitDelimiter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#suffix ServiceFullWebRequest#suffix}
  */
  readonly suffix?: string;
  /**
  * take from end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#take_from_end ServiceFullWebRequest#take_from_end}
  */
  readonly takeFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `AFTER`, `BEFORE`, `BETWEEN`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`, `SPLIT_SELECT`, `TAKE_SEGMENTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformation_type ServiceFullWebRequest#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_hex_numbers: cdktf.booleanToTerraform(struct!.includeHexNumbers),
    min_digit_count: cdktf.numberToTerraform(struct!.minDigitCount),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    replacement_value: cdktf.stringToTerraform(struct!.replacementValue),
    segment_count: cdktf.numberToTerraform(struct!.segmentCount),
    select_index: cdktf.numberToTerraform(struct!.selectIndex),
    split_delimiter: cdktf.stringToTerraform(struct!.splitDelimiter),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    take_from_end: cdktf.booleanToTerraform(struct!.takeFromEnd),
    transformation_type: cdktf.stringToTerraform(struct!.transformationType),
  }
}


export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_hex_numbers: {
      value: cdktf.booleanToHclTerraform(struct!.includeHexNumbers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_digit_count: {
      value: cdktf.numberToHclTerraform(struct!.minDigitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacement_value: {
      value: cdktf.stringToHclTerraform(struct!.replacementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_count: {
      value: cdktf.numberToHclTerraform(struct!.segmentCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_index: {
      value: cdktf.numberToHclTerraform(struct!.selectIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.splitDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    take_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.takeFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transformation_type: {
      value: cdktf.stringToHclTerraform(struct!.transformationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeHexNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeHexNumbers = this._includeHexNumbers;
    }
    if (this._minDigitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDigitCount = this._minDigitCount;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._replacementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementValue = this._replacementValue;
    }
    if (this._segmentCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentCount = this._segmentCount;
    }
    if (this._selectIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectIndex = this._selectIndex;
    }
    if (this._splitDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitDelimiter = this._splitDelimiter;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    if (this._takeFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.takeFromEnd = this._takeFromEnd;
    }
    if (this._transformationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationType = this._transformationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeHexNumbers = undefined;
      this._minDigitCount = undefined;
      this._prefix = undefined;
      this._replacementValue = undefined;
      this._segmentCount = undefined;
      this._selectIndex = undefined;
      this._splitDelimiter = undefined;
      this._suffix = undefined;
      this._takeFromEnd = undefined;
      this._transformationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeHexNumbers = value.includeHexNumbers;
      this._minDigitCount = value.minDigitCount;
      this._prefix = value.prefix;
      this._replacementValue = value.replacementValue;
      this._segmentCount = value.segmentCount;
      this._selectIndex = value.selectIndex;
      this._splitDelimiter = value.splitDelimiter;
      this._suffix = value.suffix;
      this._takeFromEnd = value.takeFromEnd;
      this._transformationType = value.transformationType;
    }
  }

  // include_hex_numbers - computed: false, optional: true, required: false
  private _includeHexNumbers?: boolean | cdktf.IResolvable; 
  public get includeHexNumbers() {
    return this.getBooleanAttribute('include_hex_numbers');
  }
  public set includeHexNumbers(value: boolean | cdktf.IResolvable) {
    this._includeHexNumbers = value;
  }
  public resetIncludeHexNumbers() {
    this._includeHexNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHexNumbersInput() {
    return this._includeHexNumbers;
  }

  // min_digit_count - computed: false, optional: true, required: false
  private _minDigitCount?: number; 
  public get minDigitCount() {
    return this.getNumberAttribute('min_digit_count');
  }
  public set minDigitCount(value: number) {
    this._minDigitCount = value;
  }
  public resetMinDigitCount() {
    this._minDigitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDigitCountInput() {
    return this._minDigitCount;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // replacement_value - computed: false, optional: true, required: false
  private _replacementValue?: string; 
  public get replacementValue() {
    return this.getStringAttribute('replacement_value');
  }
  public set replacementValue(value: string) {
    this._replacementValue = value;
  }
  public resetReplacementValue() {
    this._replacementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementValueInput() {
    return this._replacementValue;
  }

  // segment_count - computed: false, optional: true, required: false
  private _segmentCount?: number; 
  public get segmentCount() {
    return this.getNumberAttribute('segment_count');
  }
  public set segmentCount(value: number) {
    this._segmentCount = value;
  }
  public resetSegmentCount() {
    this._segmentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentCountInput() {
    return this._segmentCount;
  }

  // select_index - computed: false, optional: true, required: false
  private _selectIndex?: number; 
  public get selectIndex() {
    return this.getNumberAttribute('select_index');
  }
  public set selectIndex(value: number) {
    this._selectIndex = value;
  }
  public resetSelectIndex() {
    this._selectIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectIndexInput() {
    return this._selectIndex;
  }

  // split_delimiter - computed: false, optional: true, required: false
  private _splitDelimiter?: string; 
  public get splitDelimiter() {
    return this.getStringAttribute('split_delimiter');
  }
  public set splitDelimiter(value: string) {
    this._splitDelimiter = value;
  }
  public resetSplitDelimiter() {
    this._splitDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDelimiterInput() {
    return this._splitDelimiter;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // take_from_end - computed: false, optional: true, required: false
  private _takeFromEnd?: boolean | cdktf.IResolvable; 
  public get takeFromEnd() {
    return this.getBooleanAttribute('take_from_end');
  }
  public set takeFromEnd(value: boolean | cdktf.IResolvable) {
    this._takeFromEnd = value;
  }
  public resetTakeFromEnd() {
    this._takeFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeFromEndInput() {
    return this._takeFromEnd;
  }

  // transformation_type - computed: false, optional: false, required: true
  private _transformationType?: string; 
  public get transformationType() {
    return this.getStringAttribute('transformation_type');
  }
  public set transformationType(value: string) {
    this._transformationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTypeInput() {
    return this._transformationType;
  }
}

export class ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformation ServiceFullWebRequest#transformation}
  */
  readonly transformation: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsOutputReference | ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsOutputReference | ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformation.internalValue = value.transformation;
    }
  }

  // transformation - computed: false, optional: false, required: true
  private _transformation = new ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#value ServiceFullWebRequest#value}
  */
  readonly value: string;
}

export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideOutputReference | ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideOutputReference | ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
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
export interface ServiceFullWebRequestIdContributorsServerNameServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#contribution_type ServiceFullWebRequest#contribution_type}
  */
  readonly contributionType: string;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#transformations ServiceFullWebRequest#transformations}
  */
  readonly transformations?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#value_override ServiceFullWebRequest#value_override}
  */
  readonly valueOverride?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverride;
}

export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorToTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorOutputReference | ServiceFullWebRequestIdContributorsServerNameServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    transformations: serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebRequestIdContributorsServerNameServiceIdContributorToHclTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorOutputReference | ServiceFullWebRequestIdContributorsServerNameServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contribution_type: {
      value: cdktf.stringToHclTerraform(struct!.contributionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformations: {
      value: serviceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsServerNameServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsServerNameServiceIdContributor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contributionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contributionType = this._contributionType;
    }
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    if (this._valueOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueOverride = this._valueOverride?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contributionType = undefined;
      this._transformations.internalValue = undefined;
      this._valueOverride.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contributionType = value.contributionType;
      this._transformations.internalValue = value.transformations;
      this._valueOverride.internalValue = value.valueOverride;
    }
  }

  // contribution_type - computed: false, optional: false, required: true
  private _contributionType?: string; 
  public get contributionType() {
    return this.getStringAttribute('contribution_type');
  }
  public set contributionType(value: string) {
    this._contributionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contributionTypeInput() {
    return this._contributionType;
  }

  // transformations - computed: false, optional: true, required: false
  private _transformations = new ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorTransformations) {
    this._transformations.internalValue = value;
  }
  public resetTransformations() {
    this._transformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }

  // value_override - computed: false, optional: true, required: false
  private _valueOverride = new ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributorValueOverride) {
    this._valueOverride.internalValue = value;
  }
  public resetValueOverride() {
    this._valueOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOverrideInput() {
    return this._valueOverride.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributorsServerName {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#enable_id_contributor ServiceFullWebRequest#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#service_id_contributor ServiceFullWebRequest#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebRequestIdContributorsServerNameServiceIdContributor;
}

export function serviceFullWebRequestIdContributorsServerNameToTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameOutputReference | ServiceFullWebRequestIdContributorsServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebRequestIdContributorsServerNameServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebRequestIdContributorsServerNameToHclTerraform(struct?: ServiceFullWebRequestIdContributorsServerNameOutputReference | ServiceFullWebRequestIdContributorsServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_id_contributor: {
      value: cdktf.booleanToHclTerraform(struct!.enableIdContributor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_id_contributor: {
      value: serviceFullWebRequestIdContributorsServerNameServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsServerNameServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributorsServerName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIdContributor !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdContributor = this._enableIdContributor;
    }
    if (this._serviceIdContributor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIdContributor = this._serviceIdContributor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributorsServerName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIdContributor = undefined;
      this._serviceIdContributor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIdContributor = value.enableIdContributor;
      this._serviceIdContributor.internalValue = value.serviceIdContributor;
    }
  }

  // enable_id_contributor - computed: false, optional: false, required: true
  private _enableIdContributor?: boolean | cdktf.IResolvable; 
  public get enableIdContributor() {
    return this.getBooleanAttribute('enable_id_contributor');
  }
  public set enableIdContributor(value: boolean | cdktf.IResolvable) {
    this._enableIdContributor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdContributorInput() {
    return this._enableIdContributor;
  }

  // service_id_contributor - computed: false, optional: true, required: false
  private _serviceIdContributor = new ServiceFullWebRequestIdContributorsServerNameServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebRequestIdContributorsServerNameServiceIdContributor) {
    this._serviceIdContributor.internalValue = value;
  }
  public resetServiceIdContributor() {
    this._serviceIdContributor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdContributorInput() {
    return this._serviceIdContributor.internalValue;
  }
}
export interface ServiceFullWebRequestIdContributors {
  /**
  * application_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#application_id ServiceFullWebRequest#application_id}
  */
  readonly applicationId: ServiceFullWebRequestIdContributorsApplicationId;
  /**
  * context_root block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#context_root ServiceFullWebRequest#context_root}
  */
  readonly contextRoot: ServiceFullWebRequestIdContributorsContextRoot;
  /**
  * server_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#server_name ServiceFullWebRequest#server_name}
  */
  readonly serverName: ServiceFullWebRequestIdContributorsServerName;
}

export function serviceFullWebRequestIdContributorsToTerraform(struct?: ServiceFullWebRequestIdContributorsOutputReference | ServiceFullWebRequestIdContributors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: serviceFullWebRequestIdContributorsApplicationIdToTerraform(struct!.applicationId),
    context_root: serviceFullWebRequestIdContributorsContextRootToTerraform(struct!.contextRoot),
    server_name: serviceFullWebRequestIdContributorsServerNameToTerraform(struct!.serverName),
  }
}


export function serviceFullWebRequestIdContributorsToHclTerraform(struct?: ServiceFullWebRequestIdContributorsOutputReference | ServiceFullWebRequestIdContributors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: serviceFullWebRequestIdContributorsApplicationIdToHclTerraform(struct!.applicationId),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsApplicationIdList",
    },
    context_root: {
      value: serviceFullWebRequestIdContributorsContextRootToHclTerraform(struct!.contextRoot),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsContextRootList",
    },
    server_name: {
      value: serviceFullWebRequestIdContributorsServerNameToHclTerraform(struct!.serverName),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebRequestIdContributorsServerNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebRequestIdContributorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebRequestIdContributors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId?.internalValue;
    }
    if (this._contextRoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextRoot = this._contextRoot?.internalValue;
    }
    if (this._serverName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebRequestIdContributors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId.internalValue = undefined;
      this._contextRoot.internalValue = undefined;
      this._serverName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId.internalValue = value.applicationId;
      this._contextRoot.internalValue = value.contextRoot;
      this._serverName.internalValue = value.serverName;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId = new ServiceFullWebRequestIdContributorsApplicationIdOutputReference(this, "application_id");
  public get applicationId() {
    return this._applicationId;
  }
  public putApplicationId(value: ServiceFullWebRequestIdContributorsApplicationId) {
    this._applicationId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId.internalValue;
  }

  // context_root - computed: false, optional: false, required: true
  private _contextRoot = new ServiceFullWebRequestIdContributorsContextRootOutputReference(this, "context_root");
  public get contextRoot() {
    return this._contextRoot;
  }
  public putContextRoot(value: ServiceFullWebRequestIdContributorsContextRoot) {
    this._contextRoot.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextRootInput() {
    return this._contextRoot.internalValue;
  }

  // server_name - computed: false, optional: false, required: true
  private _serverName = new ServiceFullWebRequestIdContributorsServerNameOutputReference(this, "server_name");
  public get serverName() {
    return this._serverName;
  }
  public putServerName(value: ServiceFullWebRequestIdContributorsServerName) {
    this._serverName.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request dynatrace_service_full_web_request}
*/
export class ServiceFullWebRequest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_full_web_request";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceFullWebRequest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceFullWebRequest to import
  * @param importFromId The id of the existing ServiceFullWebRequest that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceFullWebRequest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_full_web_request", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_request dynatrace_service_full_web_request} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFullWebRequestConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFullWebRequestConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_full_web_request',
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
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._managementZones = config.managementZones;
    this._name = config.name;
    this._conditions.internalValue = config.conditions;
    this._idContributors.internalValue = config.idContributors;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
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

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ServiceFullWebRequestConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ServiceFullWebRequestConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // id_contributors - computed: false, optional: false, required: true
  private _idContributors = new ServiceFullWebRequestIdContributorsOutputReference(this, "id_contributors");
  public get idContributors() {
    return this._idContributors;
  }
  public putIdContributors(value: ServiceFullWebRequestIdContributors) {
    this._idContributors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idContributorsInput() {
    return this._idContributors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      management_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementZones),
      name: cdktf.stringToTerraform(this._name),
      conditions: serviceFullWebRequestConditionsToTerraform(this._conditions.internalValue),
      id_contributors: serviceFullWebRequestIdContributorsToTerraform(this._idContributors.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: serviceFullWebRequestConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFullWebRequestConditionsList",
      },
      id_contributors: {
        value: serviceFullWebRequestIdContributorsToHclTerraform(this._idContributors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFullWebRequestIdContributorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
