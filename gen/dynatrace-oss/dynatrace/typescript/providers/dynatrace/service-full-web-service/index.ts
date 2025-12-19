// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceFullWebServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#description ServiceFullWebService#description}
  */
  readonly description?: string;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#enabled ServiceFullWebService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#id ServiceFullWebService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#insert_after ServiceFullWebService#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Define a management zone of the process group for which this service detection rule should be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#management_zones ServiceFullWebService#management_zones}
  */
  readonly managementZones?: string[];
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#name ServiceFullWebService#name}
  */
  readonly name: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#conditions ServiceFullWebService#conditions}
  */
  readonly conditions?: ServiceFullWebServiceConditions;
  /**
  * id_contributors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#id_contributors ServiceFullWebService#id_contributors}
  */
  readonly idContributors: ServiceFullWebServiceIdContributors;
}
export interface ServiceFullWebServiceConditionsCondition {
  /**
  * Take the value of this attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#attribute ServiceFullWebService#attribute}
  */
  readonly attribute: string;
  /**
  * Apply this operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#compare_operation_type ServiceFullWebService#compare_operation_type}
  */
  readonly compareOperationType: string;
  /**
  * Technology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#framework ServiceFullWebService#framework}
  */
  readonly framework?: string[];
  /**
  * Ignore case sensitivity for texts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#ignore_case ServiceFullWebService#ignore_case}
  */
  readonly ignoreCase?: boolean | cdktf.IResolvable;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#int_value ServiceFullWebService#int_value}
  */
  readonly intValue?: number;
  /**
  * Values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#int_values ServiceFullWebService#int_values}
  */
  readonly intValues?: number[];
  /**
  * From
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#ip_range_from ServiceFullWebService#ip_range_from}
  */
  readonly ipRangeFrom?: string;
  /**
  * To
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#ip_range_to ServiceFullWebService#ip_range_to}
  */
  readonly ipRangeTo?: string;
  /**
  * If multiple values are specified, at least one of them must match for the condition to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#tag_values ServiceFullWebService#tag_values}
  */
  readonly tagValues?: string[];
  /**
  * If multiple values are specified, at least one of them must match for the condition to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#text_values ServiceFullWebService#text_values}
  */
  readonly textValues?: string[];
}

export function serviceFullWebServiceConditionsConditionToTerraform(struct?: ServiceFullWebServiceConditionsCondition | cdktf.IResolvable): any {
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


export function serviceFullWebServiceConditionsConditionToHclTerraform(struct?: ServiceFullWebServiceConditionsCondition | cdktf.IResolvable): any {
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

export class ServiceFullWebServiceConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebServiceConditionsCondition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFullWebServiceConditionsCondition | cdktf.IResolvable | undefined) {
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

export class ServiceFullWebServiceConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebServiceConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebServiceConditionsConditionOutputReference {
    return new ServiceFullWebServiceConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebServiceConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#condition ServiceFullWebService#condition}
  */
  readonly condition: ServiceFullWebServiceConditionsCondition[] | cdktf.IResolvable;
}

export function serviceFullWebServiceConditionsToTerraform(struct?: ServiceFullWebServiceConditionsOutputReference | ServiceFullWebServiceConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(serviceFullWebServiceConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function serviceFullWebServiceConditionsToHclTerraform(struct?: ServiceFullWebServiceConditionsOutputReference | ServiceFullWebServiceConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(serviceFullWebServiceConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceConditions | undefined) {
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
  private _condition = new ServiceFullWebServiceConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ServiceFullWebServiceConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#include_hex_numbers ServiceFullWebService#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#min_digit_count ServiceFullWebService#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#prefix ServiceFullWebService#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#replacement_value ServiceFullWebService#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * How many segments should be taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#segment_count ServiceFullWebService#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * select index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#select_index ServiceFullWebService#select_index}
  */
  readonly selectIndex?: number;
  /**
  * split by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#split_delimiter ServiceFullWebService#split_delimiter}
  */
  readonly splitDelimiter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#suffix ServiceFullWebService#suffix}
  */
  readonly suffix?: string;
  /**
  * take from end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#take_from_end ServiceFullWebService#take_from_end}
  */
  readonly takeFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `AFTER`, `BEFORE`, `BETWEEN`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`, `SPLIT_SELECT`, `TAKE_SEGMENTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation_type ServiceFullWebService#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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


export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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

export class ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
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

export class ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation ServiceFullWebService#transformation}
  */
  readonly transformation: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformations | undefined) {
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
  private _transformation = new ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value ServiceFullWebService#value}
  */
  readonly value: string;
}

export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverride): any {
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

export class ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverride | undefined) {
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
export interface ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#contribution_type ServiceFullWebService#contribution_type}
  */
  readonly contributionType: string;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformations ServiceFullWebService#transformations}
  */
  readonly transformations?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value_override ServiceFullWebService#value_override}
  */
  readonly valueOverride?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverride;
}

export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorToTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    transformations: serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorToHclTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributor): any {
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
      value: serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributor | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributor | undefined) {
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
  private _transformations = new ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorTransformations) {
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
  private _valueOverride = new ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorValueOverride) {
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
export interface ServiceFullWebServiceIdContributorsApplicationId {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#enable_id_contributor ServiceFullWebService#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#service_id_contributor ServiceFullWebService#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributor;
}

export function serviceFullWebServiceIdContributorsApplicationIdToTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdOutputReference | ServiceFullWebServiceIdContributorsApplicationId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebServiceIdContributorsApplicationIdToHclTerraform(struct?: ServiceFullWebServiceIdContributorsApplicationIdOutputReference | ServiceFullWebServiceIdContributorsApplicationId): any {
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
      value: serviceFullWebServiceIdContributorsApplicationIdServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsApplicationIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsApplicationId | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsApplicationId | undefined) {
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
  private _serviceIdContributor = new ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebServiceIdContributorsApplicationIdServiceIdContributor) {
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
export interface ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#include_hex_numbers ServiceFullWebService#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#min_digit_count ServiceFullWebService#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#prefix ServiceFullWebService#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#replacement_value ServiceFullWebService#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#suffix ServiceFullWebService#suffix}
  */
  readonly suffix?: string;
  /**
  * Possible Values: `BEFORE`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation_type ServiceFullWebService#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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


export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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

export class ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
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

export class ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation ServiceFullWebService#transformation}
  */
  readonly transformation: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformations | undefined) {
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
  private _transformation = new ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value ServiceFullWebService#value}
  */
  readonly value: string;
}

export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverride): any {
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

export class ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverride | undefined) {
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
export interface ServiceFullWebServiceIdContributorsContextRootServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformURL`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#contribution_type ServiceFullWebService#contribution_type}
  */
  readonly contributionType: string;
  /**
  * The number of segments of the URL to be kept. The URL is divided by slashes (/), the indexing starts with 1 at context root. For example, if you specify 2 for the `www.dynatrace.com/support/help/dynatrace-api/` URL, the value of `support/help` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#segment_count ServiceFullWebService#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformations ServiceFullWebService#transformations}
  */
  readonly transformations?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value_override ServiceFullWebService#value_override}
  */
  readonly valueOverride?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverride;
}

export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorToTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsContextRootServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    segment_count: cdktf.numberToTerraform(struct!.segmentCount),
    transformations: serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebServiceIdContributorsContextRootServiceIdContributorToHclTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsContextRootServiceIdContributor): any {
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
      value: serviceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsContextRootServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsContextRootServiceIdContributor | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributor | undefined) {
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
  private _transformations = new ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorTransformations) {
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
  private _valueOverride = new ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributorValueOverride) {
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
export interface ServiceFullWebServiceIdContributorsContextRoot {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#enable_id_contributor ServiceFullWebService#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#service_id_contributor ServiceFullWebService#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebServiceIdContributorsContextRootServiceIdContributor;
}

export function serviceFullWebServiceIdContributorsContextRootToTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootOutputReference | ServiceFullWebServiceIdContributorsContextRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebServiceIdContributorsContextRootServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebServiceIdContributorsContextRootToHclTerraform(struct?: ServiceFullWebServiceIdContributorsContextRootOutputReference | ServiceFullWebServiceIdContributorsContextRoot): any {
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
      value: serviceFullWebServiceIdContributorsContextRootServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsContextRootServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsContextRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsContextRoot | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsContextRoot | undefined) {
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
  private _serviceIdContributor = new ServiceFullWebServiceIdContributorsContextRootServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebServiceIdContributorsContextRootServiceIdContributor) {
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
export interface ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#include_hex_numbers ServiceFullWebService#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#min_digit_count ServiceFullWebService#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#prefix ServiceFullWebService#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#replacement_value ServiceFullWebService#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * How many segments should be taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#segment_count ServiceFullWebService#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * select index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#select_index ServiceFullWebService#select_index}
  */
  readonly selectIndex?: number;
  /**
  * split by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#split_delimiter ServiceFullWebService#split_delimiter}
  */
  readonly splitDelimiter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#suffix ServiceFullWebService#suffix}
  */
  readonly suffix?: string;
  /**
  * take from end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#take_from_end ServiceFullWebService#take_from_end}
  */
  readonly takeFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `AFTER`, `BEFORE`, `BETWEEN`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`, `SPLIT_SELECT`, `TAKE_SEGMENTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation_type ServiceFullWebService#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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


export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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

export class ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
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

export class ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation ServiceFullWebService#transformation}
  */
  readonly transformation: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformations | undefined) {
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
  private _transformation = new ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value ServiceFullWebService#value}
  */
  readonly value: string;
}

export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverride): any {
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

export class ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverride | undefined) {
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
export interface ServiceFullWebServiceIdContributorsServerNameServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#contribution_type ServiceFullWebService#contribution_type}
  */
  readonly contributionType: string;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformations ServiceFullWebService#transformations}
  */
  readonly transformations?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value_override ServiceFullWebService#value_override}
  */
  readonly valueOverride?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverride;
}

export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorToTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsServerNameServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    transformations: serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebServiceIdContributorsServerNameServiceIdContributorToHclTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsServerNameServiceIdContributor): any {
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
      value: serviceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsServerNameServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsServerNameServiceIdContributor | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributor | undefined) {
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
  private _transformations = new ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorTransformations) {
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
  private _valueOverride = new ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributorValueOverride) {
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
export interface ServiceFullWebServiceIdContributorsServerName {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#enable_id_contributor ServiceFullWebService#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#service_id_contributor ServiceFullWebService#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebServiceIdContributorsServerNameServiceIdContributor;
}

export function serviceFullWebServiceIdContributorsServerNameToTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameOutputReference | ServiceFullWebServiceIdContributorsServerName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebServiceIdContributorsServerNameServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebServiceIdContributorsServerNameToHclTerraform(struct?: ServiceFullWebServiceIdContributorsServerNameOutputReference | ServiceFullWebServiceIdContributorsServerName): any {
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
      value: serviceFullWebServiceIdContributorsServerNameServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsServerNameServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsServerNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsServerName | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsServerName | undefined) {
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
  private _serviceIdContributor = new ServiceFullWebServiceIdContributorsServerNameServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebServiceIdContributorsServerNameServiceIdContributor) {
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
export interface ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#include_hex_numbers ServiceFullWebService#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#min_digit_count ServiceFullWebService#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#prefix ServiceFullWebService#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#replacement_value ServiceFullWebService#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * How many segments should be taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#segment_count ServiceFullWebService#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * select index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#select_index ServiceFullWebService#select_index}
  */
  readonly selectIndex?: number;
  /**
  * split by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#split_delimiter ServiceFullWebService#split_delimiter}
  */
  readonly splitDelimiter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#suffix ServiceFullWebService#suffix}
  */
  readonly suffix?: string;
  /**
  * take from end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#take_from_end ServiceFullWebService#take_from_end}
  */
  readonly takeFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `AFTER`, `BEFORE`, `BETWEEN`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`, `SPLIT_SELECT`, `TAKE_SEGMENTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation_type ServiceFullWebService#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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


export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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

export class ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
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

export class ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation ServiceFullWebService#transformation}
  */
  readonly transformation: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformations | undefined) {
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
  private _transformation = new ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value ServiceFullWebService#value}
  */
  readonly value: string;
}

export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverride): any {
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

export class ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverride | undefined) {
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
export interface ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#contribution_type ServiceFullWebService#contribution_type}
  */
  readonly contributionType: string;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformations ServiceFullWebService#transformations}
  */
  readonly transformations?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value_override ServiceFullWebService#value_override}
  */
  readonly valueOverride?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverride;
}

export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    transformations: serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributor): any {
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
      value: serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributor | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributor | undefined) {
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
  private _transformations = new ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorTransformations) {
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
  private _valueOverride = new ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorValueOverride) {
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
export interface ServiceFullWebServiceIdContributorsWebServiceName {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#enable_id_contributor ServiceFullWebService#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#service_id_contributor ServiceFullWebService#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributor;
}

export function serviceFullWebServiceIdContributorsWebServiceNameToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameOutputReference | ServiceFullWebServiceIdContributorsWebServiceName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNameToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNameOutputReference | ServiceFullWebServiceIdContributorsWebServiceName): any {
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
      value: serviceFullWebServiceIdContributorsWebServiceNameServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsWebServiceNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceName | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceName | undefined) {
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
  private _serviceIdContributor = new ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebServiceIdContributorsWebServiceNameServiceIdContributor) {
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
export interface ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation {
  /**
  * include hexadecimal numbers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#include_hex_numbers ServiceFullWebService#include_hex_numbers}
  */
  readonly includeHexNumbers?: boolean | cdktf.IResolvable;
  /**
  * min digit count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#min_digit_count ServiceFullWebService#min_digit_count}
  */
  readonly minDigitCount?: number;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#prefix ServiceFullWebService#prefix}
  */
  readonly prefix?: string;
  /**
  * replacement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#replacement_value ServiceFullWebService#replacement_value}
  */
  readonly replacementValue?: string;
  /**
  * How many segments should be taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#segment_count ServiceFullWebService#segment_count}
  */
  readonly segmentCount?: number;
  /**
  * select index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#select_index ServiceFullWebService#select_index}
  */
  readonly selectIndex?: number;
  /**
  * split by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#split_delimiter ServiceFullWebService#split_delimiter}
  */
  readonly splitDelimiter?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#suffix ServiceFullWebService#suffix}
  */
  readonly suffix?: string;
  /**
  * take from end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#take_from_end ServiceFullWebService#take_from_end}
  */
  readonly takeFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `AFTER`, `BEFORE`, `BETWEEN`, `REMOVE_CREDIT_CARDS`, `REMOVE_IBANS`, `REMOVE_IPS`, `REMOVE_NUMBERS`, `REPLACE_BETWEEN`, `SPLIT_SELECT`, `TAKE_SEGMENTS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation_type ServiceFullWebService#transformation_type}
  */
  readonly transformationType: string;
}

export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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


export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation | cdktf.IResolvable): any {
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

export class ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation | cdktf.IResolvable | undefined) {
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

export class ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationList extends cdktf.ComplexList {
  public internalValue? : ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable

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
  public get(index: number): ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationOutputReference {
    return new ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformation ServiceFullWebService#transformation}
  */
  readonly transformation: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable;
}

export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: cdktf.listMapper(serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationToTerraform, true)(struct!.transformation),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: cdktf.listMapperHcl(serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformations | undefined) {
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
  private _transformation = new ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}
export interface ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverride {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value ServiceFullWebService#value}
  */
  readonly value: string;
}

export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverride): any {
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

export class ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverride | undefined) {
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
export interface ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributor {
  /**
  * Possible Values: `OriginalValue`, `OverrideValue`, `TransformValue`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#contribution_type ServiceFullWebService#contribution_type}
  */
  readonly contributionType: string;
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#transformations ServiceFullWebService#transformations}
  */
  readonly transformations?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformations;
  /**
  * value_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#value_override ServiceFullWebService#value_override}
  */
  readonly valueOverride?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverride;
}

export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contribution_type: cdktf.stringToTerraform(struct!.contributionType),
    transformations: serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsToTerraform(struct!.transformations),
    value_override: serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideToTerraform(struct!.valueOverride),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributor): any {
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
      value: serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsToHclTerraform(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsList",
    },
    value_override: {
      value: serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideToHclTerraform(struct!.valueOverride),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributor | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributor | undefined) {
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
  private _transformations = new ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformationsOutputReference(this, "transformations");
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorTransformations) {
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
  private _valueOverride = new ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverrideOutputReference(this, "value_override");
  public get valueOverride() {
    return this._valueOverride;
  }
  public putValueOverride(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorValueOverride) {
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
export interface ServiceFullWebServiceIdContributorsWebServiceNamespace {
  /**
  * Transform this value before letting it contribute to the Service Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#enable_id_contributor ServiceFullWebService#enable_id_contributor}
  */
  readonly enableIdContributor: boolean | cdktf.IResolvable;
  /**
  * service_id_contributor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#service_id_contributor ServiceFullWebService#service_id_contributor}
  */
  readonly serviceIdContributor?: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributor;
}

export function serviceFullWebServiceIdContributorsWebServiceNamespaceToTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_id_contributor: cdktf.booleanToTerraform(struct!.enableIdContributor),
    service_id_contributor: serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorToTerraform(struct!.serviceIdContributor),
  }
}


export function serviceFullWebServiceIdContributorsWebServiceNamespaceToHclTerraform(struct?: ServiceFullWebServiceIdContributorsWebServiceNamespaceOutputReference | ServiceFullWebServiceIdContributorsWebServiceNamespace): any {
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
      value: serviceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorToHclTerraform(struct!.serviceIdContributor),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsWebServiceNamespaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributorsWebServiceNamespace | undefined {
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

  public set internalValue(value: ServiceFullWebServiceIdContributorsWebServiceNamespace | undefined) {
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
  private _serviceIdContributor = new ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributorOutputReference(this, "service_id_contributor");
  public get serviceIdContributor() {
    return this._serviceIdContributor;
  }
  public putServiceIdContributor(value: ServiceFullWebServiceIdContributorsWebServiceNamespaceServiceIdContributor) {
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
export interface ServiceFullWebServiceIdContributors {
  /**
  * Detect the matching requests as full web services (false) or web request services (true).
  * 
  * Setting this field to true prevents detecting of matching requests as full web services. A web request service is created instead. If you need to further modify the resulting web request service, you need to create a separate [Full web request rule](builtin:service-detection.full-web-request).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#detect_as_web_request_service ServiceFullWebService#detect_as_web_request_service}
  */
  readonly detectAsWebRequestService: boolean | cdktf.IResolvable;
  /**
  * application_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#application_id ServiceFullWebService#application_id}
  */
  readonly applicationId?: ServiceFullWebServiceIdContributorsApplicationId;
  /**
  * context_root block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#context_root ServiceFullWebService#context_root}
  */
  readonly contextRoot?: ServiceFullWebServiceIdContributorsContextRoot;
  /**
  * server_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#server_name ServiceFullWebService#server_name}
  */
  readonly serverName?: ServiceFullWebServiceIdContributorsServerName;
  /**
  * web_service_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#web_service_name ServiceFullWebService#web_service_name}
  */
  readonly webServiceName?: ServiceFullWebServiceIdContributorsWebServiceName;
  /**
  * web_service_namespace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#web_service_namespace ServiceFullWebService#web_service_namespace}
  */
  readonly webServiceNamespace?: ServiceFullWebServiceIdContributorsWebServiceNamespace;
}

export function serviceFullWebServiceIdContributorsToTerraform(struct?: ServiceFullWebServiceIdContributorsOutputReference | ServiceFullWebServiceIdContributors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detect_as_web_request_service: cdktf.booleanToTerraform(struct!.detectAsWebRequestService),
    application_id: serviceFullWebServiceIdContributorsApplicationIdToTerraform(struct!.applicationId),
    context_root: serviceFullWebServiceIdContributorsContextRootToTerraform(struct!.contextRoot),
    server_name: serviceFullWebServiceIdContributorsServerNameToTerraform(struct!.serverName),
    web_service_name: serviceFullWebServiceIdContributorsWebServiceNameToTerraform(struct!.webServiceName),
    web_service_namespace: serviceFullWebServiceIdContributorsWebServiceNamespaceToTerraform(struct!.webServiceNamespace),
  }
}


export function serviceFullWebServiceIdContributorsToHclTerraform(struct?: ServiceFullWebServiceIdContributorsOutputReference | ServiceFullWebServiceIdContributors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detect_as_web_request_service: {
      value: cdktf.booleanToHclTerraform(struct!.detectAsWebRequestService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_id: {
      value: serviceFullWebServiceIdContributorsApplicationIdToHclTerraform(struct!.applicationId),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsApplicationIdList",
    },
    context_root: {
      value: serviceFullWebServiceIdContributorsContextRootToHclTerraform(struct!.contextRoot),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsContextRootList",
    },
    server_name: {
      value: serviceFullWebServiceIdContributorsServerNameToHclTerraform(struct!.serverName),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsServerNameList",
    },
    web_service_name: {
      value: serviceFullWebServiceIdContributorsWebServiceNameToHclTerraform(struct!.webServiceName),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNameList",
    },
    web_service_namespace: {
      value: serviceFullWebServiceIdContributorsWebServiceNamespaceToHclTerraform(struct!.webServiceNamespace),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceFullWebServiceIdContributorsWebServiceNamespaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceFullWebServiceIdContributorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceFullWebServiceIdContributors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectAsWebRequestService !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectAsWebRequestService = this._detectAsWebRequestService;
    }
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
    if (this._webServiceName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServiceName = this._webServiceName?.internalValue;
    }
    if (this._webServiceNamespace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServiceNamespace = this._webServiceNamespace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceFullWebServiceIdContributors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectAsWebRequestService = undefined;
      this._applicationId.internalValue = undefined;
      this._contextRoot.internalValue = undefined;
      this._serverName.internalValue = undefined;
      this._webServiceName.internalValue = undefined;
      this._webServiceNamespace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectAsWebRequestService = value.detectAsWebRequestService;
      this._applicationId.internalValue = value.applicationId;
      this._contextRoot.internalValue = value.contextRoot;
      this._serverName.internalValue = value.serverName;
      this._webServiceName.internalValue = value.webServiceName;
      this._webServiceNamespace.internalValue = value.webServiceNamespace;
    }
  }

  // detect_as_web_request_service - computed: false, optional: false, required: true
  private _detectAsWebRequestService?: boolean | cdktf.IResolvable; 
  public get detectAsWebRequestService() {
    return this.getBooleanAttribute('detect_as_web_request_service');
  }
  public set detectAsWebRequestService(value: boolean | cdktf.IResolvable) {
    this._detectAsWebRequestService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectAsWebRequestServiceInput() {
    return this._detectAsWebRequestService;
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId = new ServiceFullWebServiceIdContributorsApplicationIdOutputReference(this, "application_id");
  public get applicationId() {
    return this._applicationId;
  }
  public putApplicationId(value: ServiceFullWebServiceIdContributorsApplicationId) {
    this._applicationId.internalValue = value;
  }
  public resetApplicationId() {
    this._applicationId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId.internalValue;
  }

  // context_root - computed: false, optional: true, required: false
  private _contextRoot = new ServiceFullWebServiceIdContributorsContextRootOutputReference(this, "context_root");
  public get contextRoot() {
    return this._contextRoot;
  }
  public putContextRoot(value: ServiceFullWebServiceIdContributorsContextRoot) {
    this._contextRoot.internalValue = value;
  }
  public resetContextRoot() {
    this._contextRoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextRootInput() {
    return this._contextRoot.internalValue;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName = new ServiceFullWebServiceIdContributorsServerNameOutputReference(this, "server_name");
  public get serverName() {
    return this._serverName;
  }
  public putServerName(value: ServiceFullWebServiceIdContributorsServerName) {
    this._serverName.internalValue = value;
  }
  public resetServerName() {
    this._serverName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName.internalValue;
  }

  // web_service_name - computed: false, optional: true, required: false
  private _webServiceName = new ServiceFullWebServiceIdContributorsWebServiceNameOutputReference(this, "web_service_name");
  public get webServiceName() {
    return this._webServiceName;
  }
  public putWebServiceName(value: ServiceFullWebServiceIdContributorsWebServiceName) {
    this._webServiceName.internalValue = value;
  }
  public resetWebServiceName() {
    this._webServiceName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServiceNameInput() {
    return this._webServiceName.internalValue;
  }

  // web_service_namespace - computed: false, optional: true, required: false
  private _webServiceNamespace = new ServiceFullWebServiceIdContributorsWebServiceNamespaceOutputReference(this, "web_service_namespace");
  public get webServiceNamespace() {
    return this._webServiceNamespace;
  }
  public putWebServiceNamespace(value: ServiceFullWebServiceIdContributorsWebServiceNamespace) {
    this._webServiceNamespace.internalValue = value;
  }
  public resetWebServiceNamespace() {
    this._webServiceNamespace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServiceNamespaceInput() {
    return this._webServiceNamespace.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service dynatrace_service_full_web_service}
*/
export class ServiceFullWebService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_full_web_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceFullWebService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceFullWebService to import
  * @param importFromId The id of the existing ServiceFullWebService that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceFullWebService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_full_web_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/service_full_web_service dynatrace_service_full_web_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceFullWebServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceFullWebServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_full_web_service',
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
  private _conditions = new ServiceFullWebServiceConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ServiceFullWebServiceConditions) {
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
  private _idContributors = new ServiceFullWebServiceIdContributorsOutputReference(this, "id_contributors");
  public get idContributors() {
    return this._idContributors;
  }
  public putIdContributors(value: ServiceFullWebServiceIdContributors) {
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
      conditions: serviceFullWebServiceConditionsToTerraform(this._conditions.internalValue),
      id_contributors: serviceFullWebServiceIdContributorsToTerraform(this._idContributors.internalValue),
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
        value: serviceFullWebServiceConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFullWebServiceConditionsList",
      },
      id_contributors: {
        value: serviceFullWebServiceIdContributorsToHclTerraform(this._idContributors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceFullWebServiceIdContributorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
