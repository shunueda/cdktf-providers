// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogzioUnifiedAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert#alert_id DataLogzioUnifiedAlert#alert_id}
  */
  readonly alertId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert#id DataLogzioUnifiedAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert#title DataLogzioUnifiedAlert#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert#type DataLogzioUnifiedAlert#type}
  */
  readonly type: string;
}
export interface DataLogzioUnifiedAlertLogAlertCorrelations {
}

export function dataLogzioUnifiedAlertLogAlertCorrelationsToTerraform(struct?: DataLogzioUnifiedAlertLogAlertCorrelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertCorrelationsToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertCorrelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertCorrelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertCorrelations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertCorrelations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // correlation_operators - computed: true, optional: false, required: false
  public get correlationOperators() {
    return this.getListAttribute('correlation_operators');
  }

  // joins - computed: true, optional: false, required: false
  private _joins = new cdktf.StringMapList(this, "joins", false);
  public get joins() {
    return this._joins;
  }
}

export class DataLogzioUnifiedAlertLogAlertCorrelationsList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertCorrelationsOutputReference {
    return new DataLogzioUnifiedAlertLogAlertCorrelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertOutputRecipients {
}

export function dataLogzioUnifiedAlertLogAlertOutputRecipientsToTerraform(struct?: DataLogzioUnifiedAlertLogAlertOutputRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertOutputRecipientsToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertOutputRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertOutputRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertOutputRecipients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertOutputRecipients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // notification_endpoint_ids - computed: true, optional: false, required: false
  public get notificationEndpointIds() {
    return this.getNumberListAttribute('notification_endpoint_ids');
  }
}

export class DataLogzioUnifiedAlertLogAlertOutputRecipientsList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertOutputRecipientsOutputReference {
    return new DataLogzioUnifiedAlertLogAlertOutputRecipientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertOutput {
}

export function dataLogzioUnifiedAlertLogAlertOutputToTerraform(struct?: DataLogzioUnifiedAlertLogAlertOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertOutputToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // recipients - computed: true, optional: false, required: false
  private _recipients = new DataLogzioUnifiedAlertLogAlertOutputRecipientsList(this, "recipients", false);
  public get recipients() {
    return this._recipients;
  }

  // suppress_notifications_minutes - computed: true, optional: false, required: false
  public get suppressNotificationsMinutes() {
    return this.getNumberAttribute('suppress_notifications_minutes');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLogzioUnifiedAlertLogAlertOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertOutputOutputReference {
    return new DataLogzioUnifiedAlertLogAlertOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSchedule {
}

export function dataLogzioUnifiedAlertLogAlertScheduleToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertScheduleToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cron_expression - computed: true, optional: false, required: false
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
}

export class DataLogzioUnifiedAlertLogAlertScheduleList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertScheduleOutputReference {
    return new DataLogzioUnifiedAlertLogAlertScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumns {
}

export function dataLogzioUnifiedAlertLogAlertSubComponentsOutputColumnsToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertSubComponentsOutputColumnsToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field_name - computed: true, optional: false, required: false
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }

  // sort - computed: true, optional: false, required: false
  public get sort() {
    return this.getStringAttribute('sort');
  }
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumnsOutputReference {
    return new DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSubComponentsOutput {
}

export function dataLogzioUnifiedAlertLogAlertSubComponentsOutputToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertSubComponentsOutputToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSubComponentsOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSubComponentsOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataLogzioUnifiedAlertLogAlertSubComponentsOutputColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // should_use_all_fields - computed: true, optional: false, required: false
  public get shouldUseAllFields() {
    return this.getBooleanAttribute('should_use_all_fields');
  }
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsOutputList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertSubComponentsOutputOutputReference {
    return new DataLogzioUnifiedAlertLogAlertSubComponentsOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation {
}

export function dataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation_type - computed: true, optional: false, required: false
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }

  // field_to_aggregate_on - computed: true, optional: false, required: false
  public get fieldToAggregateOn() {
    return this.getStringAttribute('field_to_aggregate_on');
  }

  // value_to_aggregate_on - computed: true, optional: false, required: false
  public get valueToAggregateOn() {
    return this.getStringAttribute('value_to_aggregate_on');
  }
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationOutputReference {
    return new DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinition {
}

export function dataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_ids_to_query_on - computed: true, optional: false, required: false
  public get accountIdsToQueryOn() {
    return this.getNumberListAttribute('account_ids_to_query_on');
  }

  // aggregation - computed: true, optional: false, required: false
  private _aggregation = new DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationList(this, "aggregation", false);
  public get aggregation() {
    return this._aggregation;
  }

  // filters - computed: true, optional: false, required: false
  public get filters() {
    return this.getStringAttribute('filters');
  }

  // group_by - computed: true, optional: false, required: false
  public get groupBy() {
    return this.getListAttribute('group_by');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // should_query_on_all_accounts - computed: true, optional: false, required: false
  public get shouldQueryOnAllAccounts() {
    return this.getBooleanAttribute('should_query_on_all_accounts');
  }
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionOutputReference {
    return new DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers {
}

export function dataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersOutputReference {
    return new DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSubComponentsTrigger {
}

export function dataLogzioUnifiedAlertLogAlertSubComponentsTriggerToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertSubComponentsTriggerToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponentsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSubComponentsTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSubComponentsTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // severity_threshold_tiers - computed: true, optional: false, required: false
  private _severityThresholdTiers = new DataLogzioUnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersList(this, "severity_threshold_tiers", false);
  public get severityThresholdTiers() {
    return this._severityThresholdTiers;
  }
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertSubComponentsTriggerOutputReference {
    return new DataLogzioUnifiedAlertLogAlertSubComponentsTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlertSubComponents {
}

export function dataLogzioUnifiedAlertLogAlertSubComponentsToTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertSubComponentsToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlertSubComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlertSubComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlertSubComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // output - computed: true, optional: false, required: false
  private _output = new DataLogzioUnifiedAlertLogAlertSubComponentsOutputList(this, "output", false);
  public get output() {
    return this._output;
  }

  // query_definition - computed: true, optional: false, required: false
  private _queryDefinition = new DataLogzioUnifiedAlertLogAlertSubComponentsQueryDefinitionList(this, "query_definition", false);
  public get queryDefinition() {
    return this._queryDefinition;
  }

  // trigger - computed: true, optional: false, required: false
  private _trigger = new DataLogzioUnifiedAlertLogAlertSubComponentsTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
}

export class DataLogzioUnifiedAlertLogAlertSubComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertSubComponentsOutputReference {
    return new DataLogzioUnifiedAlertLogAlertSubComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertLogAlert {
}

export function dataLogzioUnifiedAlertLogAlertToTerraform(struct?: DataLogzioUnifiedAlertLogAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertLogAlertToHclTerraform(struct?: DataLogzioUnifiedAlertLogAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertLogAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertLogAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertLogAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // correlations - computed: true, optional: false, required: false
  private _correlations = new DataLogzioUnifiedAlertLogAlertCorrelationsList(this, "correlations", false);
  public get correlations() {
    return this._correlations;
  }

  // output - computed: true, optional: false, required: false
  private _output = new DataLogzioUnifiedAlertLogAlertOutputList(this, "output", false);
  public get output() {
    return this._output;
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataLogzioUnifiedAlertLogAlertScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // search_timeframe_minutes - computed: true, optional: false, required: false
  public get searchTimeframeMinutes() {
    return this.getNumberAttribute('search_timeframe_minutes');
  }

  // sub_components - computed: true, optional: false, required: false
  private _subComponents = new DataLogzioUnifiedAlertLogAlertSubComponentsList(this, "sub_components", false);
  public get subComponents() {
    return this._subComponents;
  }
}

export class DataLogzioUnifiedAlertLogAlertList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertLogAlertOutputReference {
    return new DataLogzioUnifiedAlertLogAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinition {
}

export function dataLogzioUnifiedAlertMetricAlertQueriesQueryDefinitionToTerraform(struct?: DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertMetricAlertQueriesQueryDefinitionToHclTerraform(struct?: DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datasource_uid - computed: true, optional: false, required: false
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }

  // promql_query - computed: true, optional: false, required: false
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }
}

export class DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinitionOutputReference {
    return new DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertMetricAlertQueries {
}

export function dataLogzioUnifiedAlertMetricAlertQueriesToTerraform(struct?: DataLogzioUnifiedAlertMetricAlertQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertMetricAlertQueriesToHclTerraform(struct?: DataLogzioUnifiedAlertMetricAlertQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertMetricAlertQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertMetricAlertQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertMetricAlertQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_definition - computed: true, optional: false, required: false
  private _queryDefinition = new DataLogzioUnifiedAlertMetricAlertQueriesQueryDefinitionList(this, "query_definition", false);
  public get queryDefinition() {
    return this._queryDefinition;
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
}

export class DataLogzioUnifiedAlertMetricAlertQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertMetricAlertQueriesOutputReference {
    return new DataLogzioUnifiedAlertMetricAlertQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertMetricAlertRecipients {
}

export function dataLogzioUnifiedAlertMetricAlertRecipientsToTerraform(struct?: DataLogzioUnifiedAlertMetricAlertRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertMetricAlertRecipientsToHclTerraform(struct?: DataLogzioUnifiedAlertMetricAlertRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertMetricAlertRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertMetricAlertRecipients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertMetricAlertRecipients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return this.getListAttribute('emails');
  }

  // notification_endpoint_ids - computed: true, optional: false, required: false
  public get notificationEndpointIds() {
    return this.getNumberListAttribute('notification_endpoint_ids');
  }
}

export class DataLogzioUnifiedAlertMetricAlertRecipientsList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertMetricAlertRecipientsOutputReference {
    return new DataLogzioUnifiedAlertMetricAlertRecipientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertMetricAlertTrigger {
}

export function dataLogzioUnifiedAlertMetricAlertTriggerToTerraform(struct?: DataLogzioUnifiedAlertMetricAlertTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertMetricAlertTriggerToHclTerraform(struct?: DataLogzioUnifiedAlertMetricAlertTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertMetricAlertTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertMetricAlertTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertMetricAlertTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // math_expression - computed: true, optional: false, required: false
  public get mathExpression() {
    return this.getStringAttribute('math_expression');
  }

  // max_threshold - computed: true, optional: false, required: false
  public get maxThreshold() {
    return this.getNumberAttribute('max_threshold');
  }

  // metric_operator - computed: true, optional: false, required: false
  public get metricOperator() {
    return this.getStringAttribute('metric_operator');
  }

  // min_threshold - computed: true, optional: false, required: false
  public get minThreshold() {
    return this.getNumberAttribute('min_threshold');
  }

  // search_timeframe_minutes - computed: true, optional: false, required: false
  public get searchTimeframeMinutes() {
    return this.getNumberAttribute('search_timeframe_minutes');
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
}

export class DataLogzioUnifiedAlertMetricAlertTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertMetricAlertTriggerOutputReference {
    return new DataLogzioUnifiedAlertMetricAlertTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogzioUnifiedAlertMetricAlert {
}

export function dataLogzioUnifiedAlertMetricAlertToTerraform(struct?: DataLogzioUnifiedAlertMetricAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogzioUnifiedAlertMetricAlertToHclTerraform(struct?: DataLogzioUnifiedAlertMetricAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogzioUnifiedAlertMetricAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogzioUnifiedAlertMetricAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogzioUnifiedAlertMetricAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataLogzioUnifiedAlertMetricAlertQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }

  // recipients - computed: true, optional: false, required: false
  private _recipients = new DataLogzioUnifiedAlertMetricAlertRecipientsList(this, "recipients", false);
  public get recipients() {
    return this._recipients;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // trigger - computed: true, optional: false, required: false
  private _trigger = new DataLogzioUnifiedAlertMetricAlertTriggerList(this, "trigger", false);
  public get trigger() {
    return this._trigger;
  }
}

export class DataLogzioUnifiedAlertMetricAlertList extends cdktf.ComplexList {

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
  public get(index: number): DataLogzioUnifiedAlertMetricAlertOutputReference {
    return new DataLogzioUnifiedAlertMetricAlertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert logzio_unified_alert}
*/
export class DataLogzioUnifiedAlert extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_unified_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogzioUnifiedAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogzioUnifiedAlert to import
  * @param importFromId The id of the existing DataLogzioUnifiedAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogzioUnifiedAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_unified_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/unified_alert logzio_unified_alert} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogzioUnifiedAlertConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogzioUnifiedAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_unified_alert',
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
    this._alertId = config.alertId;
    this._id = config.id;
    this._title = config.title;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_id - computed: false, optional: true, required: false
  private _alertId?: string; 
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }
  public set alertId(value: string) {
    this._alertId = value;
  }
  public resetAlertId() {
    this._alertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertIdInput() {
    return this._alertId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // dashboard_id - computed: true, optional: false, required: false
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
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

  // log_alert - computed: true, optional: false, required: false
  private _logAlert = new DataLogzioUnifiedAlertLogAlertList(this, "log_alert", false);
  public get logAlert() {
    return this._logAlert;
  }

  // metric_alert - computed: true, optional: false, required: false
  private _metricAlert = new DataLogzioUnifiedAlertMetricAlertList(this, "metric_alert", false);
  public get metricAlert() {
    return this._metricAlert;
  }

  // panel_id - computed: true, optional: false, required: false
  public get panelId() {
    return this.getStringAttribute('panel_id');
  }

  // rca - computed: true, optional: false, required: false
  public get rca() {
    return this.getBooleanAttribute('rca');
  }

  // rca_notification_endpoint_ids - computed: true, optional: false, required: false
  public get rcaNotificationEndpointIds() {
    return this.getNumberListAttribute('rca_notification_endpoint_ids');
  }

  // runbook - computed: true, optional: false, required: false
  public get runbook() {
    return this.getStringAttribute('runbook');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // use_alert_notification_endpoints_for_rca - computed: true, optional: false, required: false
  public get useAlertNotificationEndpointsForRca() {
    return this.getBooleanAttribute('use_alert_notification_endpoints_for_rca');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_id: cdktf.stringToTerraform(this._alertId),
      id: cdktf.stringToTerraform(this._id),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_id: {
        value: cdktf.stringToHclTerraform(this._alertId),
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
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
