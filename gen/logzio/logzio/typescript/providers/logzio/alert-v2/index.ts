// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#alert_notification_endpoints AlertV2#alert_notification_endpoints}
  */
  readonly alertNotificationEndpoints?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#correlation_operator AlertV2#correlation_operator}
  */
  readonly correlationOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#description AlertV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#id AlertV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#is_enabled AlertV2#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#joins AlertV2#joins}
  */
  readonly joins?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#notification_emails AlertV2#notification_emails}
  */
  readonly notificationEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#output_type AlertV2#output_type}
  */
  readonly outputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#schedule_cron_expression AlertV2#schedule_cron_expression}
  */
  readonly scheduleCronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#schedule_timezone AlertV2#schedule_timezone}
  */
  readonly scheduleTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#search_timeframe_minutes AlertV2#search_timeframe_minutes}
  */
  readonly searchTimeframeMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#suppress_notifications_minutes AlertV2#suppress_notifications_minutes}
  */
  readonly suppressNotificationsMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#tags AlertV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#title AlertV2#title}
  */
  readonly title: string;
  /**
  * sub_components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#sub_components AlertV2#sub_components}
  */
  readonly subComponents: AlertV2SubComponents[] | cdktf.IResolvable;
}
export interface AlertV2SubComponentsColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#field_name AlertV2#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#regex AlertV2#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#sort AlertV2#sort}
  */
  readonly sort?: string;
}

export function alertV2SubComponentsColumnsToTerraform(struct?: AlertV2SubComponentsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    regex: cdktf.stringToTerraform(struct!.regex),
    sort: cdktf.stringToTerraform(struct!.sort),
  }
}


export function alertV2SubComponentsColumnsToHclTerraform(struct?: AlertV2SubComponentsColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2SubComponentsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertV2SubComponentsColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2SubComponentsColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._regex = undefined;
      this._sort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._regex = value.regex;
      this._sort = value.sort;
    }
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }
}

export class AlertV2SubComponentsColumnsList extends cdktf.ComplexList {
  public internalValue? : AlertV2SubComponentsColumns[] | cdktf.IResolvable

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
  public get(index: number): AlertV2SubComponentsColumnsOutputReference {
    return new AlertV2SubComponentsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertV2SubComponentsSeverityThresholdTiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#severity AlertV2#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#threshold AlertV2#threshold}
  */
  readonly threshold: number;
}

export function alertV2SubComponentsSeverityThresholdTiersToTerraform(struct?: AlertV2SubComponentsSeverityThresholdTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity: cdktf.stringToTerraform(struct!.severity),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function alertV2SubComponentsSeverityThresholdTiersToHclTerraform(struct?: AlertV2SubComponentsSeverityThresholdTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2SubComponentsSeverityThresholdTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertV2SubComponentsSeverityThresholdTiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2SubComponentsSeverityThresholdTiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._severity = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._severity = value.severity;
      this._threshold = value.threshold;
    }
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class AlertV2SubComponentsSeverityThresholdTiersList extends cdktf.ComplexList {
  public internalValue? : AlertV2SubComponentsSeverityThresholdTiers[] | cdktf.IResolvable

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
  public get(index: number): AlertV2SubComponentsSeverityThresholdTiersOutputReference {
    return new AlertV2SubComponentsSeverityThresholdTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertV2SubComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#account_ids_to_query_on AlertV2#account_ids_to_query_on}
  */
  readonly accountIdsToQueryOn?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#filter_must AlertV2#filter_must}
  */
  readonly filterMust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#filter_must_not AlertV2#filter_must_not}
  */
  readonly filterMustNot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#group_by_aggregation_fields AlertV2#group_by_aggregation_fields}
  */
  readonly groupByAggregationFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#operation AlertV2#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#query_string AlertV2#query_string}
  */
  readonly queryString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#should_query_on_all_accounts AlertV2#should_query_on_all_accounts}
  */
  readonly shouldQueryOnAllAccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#value_aggregation_field AlertV2#value_aggregation_field}
  */
  readonly valueAggregationField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#value_aggregation_type AlertV2#value_aggregation_type}
  */
  readonly valueAggregationType: string;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#columns AlertV2#columns}
  */
  readonly columns?: AlertV2SubComponentsColumns[] | cdktf.IResolvable;
  /**
  * severity_threshold_tiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#severity_threshold_tiers AlertV2#severity_threshold_tiers}
  */
  readonly severityThresholdTiers: AlertV2SubComponentsSeverityThresholdTiers[] | cdktf.IResolvable;
}

export function alertV2SubComponentsToTerraform(struct?: AlertV2SubComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids_to_query_on: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.accountIdsToQueryOn),
    filter_must: cdktf.stringToTerraform(struct!.filterMust),
    filter_must_not: cdktf.stringToTerraform(struct!.filterMustNot),
    group_by_aggregation_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupByAggregationFields),
    operation: cdktf.stringToTerraform(struct!.operation),
    query_string: cdktf.stringToTerraform(struct!.queryString),
    should_query_on_all_accounts: cdktf.booleanToTerraform(struct!.shouldQueryOnAllAccounts),
    value_aggregation_field: cdktf.stringToTerraform(struct!.valueAggregationField),
    value_aggregation_type: cdktf.stringToTerraform(struct!.valueAggregationType),
    columns: cdktf.listMapper(alertV2SubComponentsColumnsToTerraform, true)(struct!.columns),
    severity_threshold_tiers: cdktf.listMapper(alertV2SubComponentsSeverityThresholdTiersToTerraform, true)(struct!.severityThresholdTiers),
  }
}


export function alertV2SubComponentsToHclTerraform(struct?: AlertV2SubComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_ids_to_query_on: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.accountIdsToQueryOn),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    filter_must: {
      value: cdktf.stringToHclTerraform(struct!.filterMust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_must_not: {
      value: cdktf.stringToHclTerraform(struct!.filterMustNot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_aggregation_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupByAggregationFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdktf.stringToHclTerraform(struct!.queryString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_query_on_all_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.shouldQueryOnAllAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_aggregation_field: {
      value: cdktf.stringToHclTerraform(struct!.valueAggregationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.valueAggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktf.listMapperHcl(alertV2SubComponentsColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "AlertV2SubComponentsColumnsList",
    },
    severity_threshold_tiers: {
      value: cdktf.listMapperHcl(alertV2SubComponentsSeverityThresholdTiersToHclTerraform, true)(struct!.severityThresholdTiers),
      isBlock: true,
      type: "set",
      storageClassType: "AlertV2SubComponentsSeverityThresholdTiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertV2SubComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertV2SubComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdsToQueryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdsToQueryOn = this._accountIdsToQueryOn;
    }
    if (this._filterMust !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMust = this._filterMust;
    }
    if (this._filterMustNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMustNot = this._filterMustNot;
    }
    if (this._groupByAggregationFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByAggregationFields = this._groupByAggregationFields;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._queryString !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString;
    }
    if (this._shouldQueryOnAllAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldQueryOnAllAccounts = this._shouldQueryOnAllAccounts;
    }
    if (this._valueAggregationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueAggregationField = this._valueAggregationField;
    }
    if (this._valueAggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueAggregationType = this._valueAggregationType;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._severityThresholdTiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityThresholdTiers = this._severityThresholdTiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertV2SubComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdsToQueryOn = undefined;
      this._filterMust = undefined;
      this._filterMustNot = undefined;
      this._groupByAggregationFields = undefined;
      this._operation = undefined;
      this._queryString = undefined;
      this._shouldQueryOnAllAccounts = undefined;
      this._valueAggregationField = undefined;
      this._valueAggregationType = undefined;
      this._columns.internalValue = undefined;
      this._severityThresholdTiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdsToQueryOn = value.accountIdsToQueryOn;
      this._filterMust = value.filterMust;
      this._filterMustNot = value.filterMustNot;
      this._groupByAggregationFields = value.groupByAggregationFields;
      this._operation = value.operation;
      this._queryString = value.queryString;
      this._shouldQueryOnAllAccounts = value.shouldQueryOnAllAccounts;
      this._valueAggregationField = value.valueAggregationField;
      this._valueAggregationType = value.valueAggregationType;
      this._columns.internalValue = value.columns;
      this._severityThresholdTiers.internalValue = value.severityThresholdTiers;
    }
  }

  // account_ids_to_query_on - computed: false, optional: true, required: false
  private _accountIdsToQueryOn?: number[]; 
  public get accountIdsToQueryOn() {
    return this.getNumberListAttribute('account_ids_to_query_on');
  }
  public set accountIdsToQueryOn(value: number[]) {
    this._accountIdsToQueryOn = value;
  }
  public resetAccountIdsToQueryOn() {
    this._accountIdsToQueryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsToQueryOnInput() {
    return this._accountIdsToQueryOn;
  }

  // filter_must - computed: false, optional: true, required: false
  private _filterMust?: string; 
  public get filterMust() {
    return this.getStringAttribute('filter_must');
  }
  public set filterMust(value: string) {
    this._filterMust = value;
  }
  public resetFilterMust() {
    this._filterMust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMustInput() {
    return this._filterMust;
  }

  // filter_must_not - computed: false, optional: true, required: false
  private _filterMustNot?: string; 
  public get filterMustNot() {
    return this.getStringAttribute('filter_must_not');
  }
  public set filterMustNot(value: string) {
    this._filterMustNot = value;
  }
  public resetFilterMustNot() {
    this._filterMustNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMustNotInput() {
    return this._filterMustNot;
  }

  // group_by_aggregation_fields - computed: false, optional: true, required: false
  private _groupByAggregationFields?: string[]; 
  public get groupByAggregationFields() {
    return this.getListAttribute('group_by_aggregation_fields');
  }
  public set groupByAggregationFields(value: string[]) {
    this._groupByAggregationFields = value;
  }
  public resetGroupByAggregationFields() {
    this._groupByAggregationFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAggregationFieldsInput() {
    return this._groupByAggregationFields;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString?: string; 
  public get queryString() {
    return this.getStringAttribute('query_string');
  }
  public set queryString(value: string) {
    this._queryString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString;
  }

  // should_query_on_all_accounts - computed: false, optional: true, required: false
  private _shouldQueryOnAllAccounts?: boolean | cdktf.IResolvable; 
  public get shouldQueryOnAllAccounts() {
    return this.getBooleanAttribute('should_query_on_all_accounts');
  }
  public set shouldQueryOnAllAccounts(value: boolean | cdktf.IResolvable) {
    this._shouldQueryOnAllAccounts = value;
  }
  public resetShouldQueryOnAllAccounts() {
    this._shouldQueryOnAllAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldQueryOnAllAccountsInput() {
    return this._shouldQueryOnAllAccounts;
  }

  // value_aggregation_field - computed: false, optional: true, required: false
  private _valueAggregationField?: string; 
  public get valueAggregationField() {
    return this.getStringAttribute('value_aggregation_field');
  }
  public set valueAggregationField(value: string) {
    this._valueAggregationField = value;
  }
  public resetValueAggregationField() {
    this._valueAggregationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueAggregationFieldInput() {
    return this._valueAggregationField;
  }

  // value_aggregation_type - computed: false, optional: false, required: true
  private _valueAggregationType?: string; 
  public get valueAggregationType() {
    return this.getStringAttribute('value_aggregation_type');
  }
  public set valueAggregationType(value: string) {
    this._valueAggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueAggregationTypeInput() {
    return this._valueAggregationType;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new AlertV2SubComponentsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: AlertV2SubComponentsColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // severity_threshold_tiers - computed: false, optional: false, required: true
  private _severityThresholdTiers = new AlertV2SubComponentsSeverityThresholdTiersList(this, "severity_threshold_tiers", true);
  public get severityThresholdTiers() {
    return this._severityThresholdTiers;
  }
  public putSeverityThresholdTiers(value: AlertV2SubComponentsSeverityThresholdTiers[] | cdktf.IResolvable) {
    this._severityThresholdTiers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityThresholdTiersInput() {
    return this._severityThresholdTiers.internalValue;
  }
}

export class AlertV2SubComponentsList extends cdktf.ComplexList {
  public internalValue? : AlertV2SubComponents[] | cdktf.IResolvable

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
  public get(index: number): AlertV2SubComponentsOutputReference {
    return new AlertV2SubComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2 logzio_alert_v2}
*/
export class AlertV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_alert_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertV2 to import
  * @param importFromId The id of the existing AlertV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_alert_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/alert_v2 logzio_alert_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertV2Config
  */
  public constructor(scope: Construct, id: string, config: AlertV2Config) {
    super(scope, id, {
      terraformResourceType: 'logzio_alert_v2',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertNotificationEndpoints = config.alertNotificationEndpoints;
    this._correlationOperator = config.correlationOperator;
    this._description = config.description;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._joins = config.joins;
    this._notificationEmails = config.notificationEmails;
    this._outputType = config.outputType;
    this._scheduleCronExpression = config.scheduleCronExpression;
    this._scheduleTimezone = config.scheduleTimezone;
    this._searchTimeframeMinutes = config.searchTimeframeMinutes;
    this._suppressNotificationsMinutes = config.suppressNotificationsMinutes;
    this._tags = config.tags;
    this._title = config.title;
    this._subComponents.internalValue = config.subComponents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_notification_endpoints - computed: false, optional: true, required: false
  private _alertNotificationEndpoints?: number[]; 
  public get alertNotificationEndpoints() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('alert_notification_endpoints')));
  }
  public set alertNotificationEndpoints(value: number[]) {
    this._alertNotificationEndpoints = value;
  }
  public resetAlertNotificationEndpoints() {
    this._alertNotificationEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertNotificationEndpointsInput() {
    return this._alertNotificationEndpoints;
  }

  // correlation_operator - computed: false, optional: true, required: false
  private _correlationOperator?: string; 
  public get correlationOperator() {
    return this.getStringAttribute('correlation_operator');
  }
  public set correlationOperator(value: string) {
    this._correlationOperator = value;
  }
  public resetCorrelationOperator() {
    this._correlationOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationOperatorInput() {
    return this._correlationOperator;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // joins - computed: false, optional: true, required: false
  private _joins?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get joins() {
    return this.interpolationForAttribute('joins');
  }
  public set joins(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._joins = value;
  }
  public resetJoins() {
    this._joins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinsInput() {
    return this._joins;
  }

  // notification_emails - computed: false, optional: true, required: false
  private _notificationEmails?: string[]; 
  public get notificationEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_emails'));
  }
  public set notificationEmails(value: string[]) {
    this._notificationEmails = value;
  }
  public resetNotificationEmails() {
    this._notificationEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEmailsInput() {
    return this._notificationEmails;
  }

  // output_type - computed: false, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // schedule_cron_expression - computed: false, optional: true, required: false
  private _scheduleCronExpression?: string; 
  public get scheduleCronExpression() {
    return this.getStringAttribute('schedule_cron_expression');
  }
  public set scheduleCronExpression(value: string) {
    this._scheduleCronExpression = value;
  }
  public resetScheduleCronExpression() {
    this._scheduleCronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleCronExpressionInput() {
    return this._scheduleCronExpression;
  }

  // schedule_timezone - computed: false, optional: true, required: false
  private _scheduleTimezone?: string; 
  public get scheduleTimezone() {
    return this.getStringAttribute('schedule_timezone');
  }
  public set scheduleTimezone(value: string) {
    this._scheduleTimezone = value;
  }
  public resetScheduleTimezone() {
    this._scheduleTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimezoneInput() {
    return this._scheduleTimezone;
  }

  // search_timeframe_minutes - computed: false, optional: false, required: true
  private _searchTimeframeMinutes?: number; 
  public get searchTimeframeMinutes() {
    return this.getNumberAttribute('search_timeframe_minutes');
  }
  public set searchTimeframeMinutes(value: number) {
    this._searchTimeframeMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeframeMinutesInput() {
    return this._searchTimeframeMinutes;
  }

  // suppress_notifications_minutes - computed: false, optional: true, required: false
  private _suppressNotificationsMinutes?: number; 
  public get suppressNotificationsMinutes() {
    return this.getNumberAttribute('suppress_notifications_minutes');
  }
  public set suppressNotificationsMinutes(value: number) {
    this._suppressNotificationsMinutes = value;
  }
  public resetSuppressNotificationsMinutes() {
    this._suppressNotificationsMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNotificationsMinutesInput() {
    return this._suppressNotificationsMinutes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // sub_components - computed: false, optional: false, required: true
  private _subComponents = new AlertV2SubComponentsList(this, "sub_components", false);
  public get subComponents() {
    return this._subComponents;
  }
  public putSubComponents(value: AlertV2SubComponents[] | cdktf.IResolvable) {
    this._subComponents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentsInput() {
    return this._subComponents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_notification_endpoints: cdktf.listMapper(cdktf.numberToTerraform, false)(this._alertNotificationEndpoints),
      correlation_operator: cdktf.stringToTerraform(this._correlationOperator),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      joins: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._joins),
      notification_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationEmails),
      output_type: cdktf.stringToTerraform(this._outputType),
      schedule_cron_expression: cdktf.stringToTerraform(this._scheduleCronExpression),
      schedule_timezone: cdktf.stringToTerraform(this._scheduleTimezone),
      search_timeframe_minutes: cdktf.numberToTerraform(this._searchTimeframeMinutes),
      suppress_notifications_minutes: cdktf.numberToTerraform(this._suppressNotificationsMinutes),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      sub_components: cdktf.listMapper(alertV2SubComponentsToTerraform, true)(this._subComponents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_notification_endpoints: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._alertNotificationEndpoints),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      correlation_operator: {
        value: cdktf.stringToHclTerraform(this._correlationOperator),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      joins: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._joins),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      notification_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      output_type: {
        value: cdktf.stringToHclTerraform(this._outputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_cron_expression: {
        value: cdktf.stringToHclTerraform(this._scheduleCronExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule_timezone: {
        value: cdktf.stringToHclTerraform(this._scheduleTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_timeframe_minutes: {
        value: cdktf.numberToHclTerraform(this._searchTimeframeMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suppress_notifications_minutes: {
        value: cdktf.numberToHclTerraform(this._suppressNotificationsMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_components: {
        value: cdktf.listMapperHcl(alertV2SubComponentsToHclTerraform, true)(this._subComponents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertV2SubComponentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
