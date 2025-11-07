// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviAlertconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig#id DataAviAlertconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig#name DataAviAlertconfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig#tenant_ref DataAviAlertconfig#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig#uuid DataAviAlertconfig#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviAlertconfigAlertRuleConnAppLogRule {
}

export function dataAviAlertconfigAlertRuleConnAppLogRuleToTerraform(struct?: DataAviAlertconfigAlertRuleConnAppLogRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAlertconfigAlertRuleConnAppLogRuleToHclTerraform(struct?: DataAviAlertconfigAlertRuleConnAppLogRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAlertconfigAlertRuleConnAppLogRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAlertconfigAlertRuleConnAppLogRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAlertconfigAlertRuleConnAppLogRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_action - computed: true, optional: false, required: false
  public get filterAction() {
    return this.getStringAttribute('filter_action');
  }

  // filter_string - computed: true, optional: false, required: false
  public get filterString() {
    return this.getStringAttribute('filter_string');
  }
}

export class DataAviAlertconfigAlertRuleConnAppLogRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataAviAlertconfigAlertRuleConnAppLogRuleOutputReference {
    return new DataAviAlertconfigAlertRuleConnAppLogRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAlertconfigAlertRuleMetricsRuleMetricThreshold {
}

export function dataAviAlertconfigAlertRuleMetricsRuleMetricThresholdToTerraform(struct?: DataAviAlertconfigAlertRuleMetricsRuleMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAlertconfigAlertRuleMetricsRuleMetricThresholdToHclTerraform(struct?: DataAviAlertconfigAlertRuleMetricsRuleMetricThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAlertconfigAlertRuleMetricsRuleMetricThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAlertconfigAlertRuleMetricsRuleMetricThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAlertconfigAlertRuleMetricsRuleMetricThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparator - computed: true, optional: false, required: false
  public get comparator() {
    return this.getStringAttribute('comparator');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
}

export class DataAviAlertconfigAlertRuleMetricsRuleMetricThresholdList extends cdktf.ComplexList {

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
  public get(index: number): DataAviAlertconfigAlertRuleMetricsRuleMetricThresholdOutputReference {
    return new DataAviAlertconfigAlertRuleMetricsRuleMetricThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAlertconfigAlertRuleMetricsRule {
}

export function dataAviAlertconfigAlertRuleMetricsRuleToTerraform(struct?: DataAviAlertconfigAlertRuleMetricsRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAlertconfigAlertRuleMetricsRuleToHclTerraform(struct?: DataAviAlertconfigAlertRuleMetricsRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAlertconfigAlertRuleMetricsRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAlertconfigAlertRuleMetricsRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAlertconfigAlertRuleMetricsRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // metric_id - computed: true, optional: false, required: false
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }

  // metric_threshold - computed: true, optional: false, required: false
  private _metricThreshold = new DataAviAlertconfigAlertRuleMetricsRuleMetricThresholdList(this, "metric_threshold", true);
  public get metricThreshold() {
    return this._metricThreshold;
  }
}

export class DataAviAlertconfigAlertRuleMetricsRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataAviAlertconfigAlertRuleMetricsRuleOutputReference {
    return new DataAviAlertconfigAlertRuleMetricsRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAlertconfigAlertRuleSysEventRuleEventDetails {
}

export function dataAviAlertconfigAlertRuleSysEventRuleEventDetailsToTerraform(struct?: DataAviAlertconfigAlertRuleSysEventRuleEventDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAlertconfigAlertRuleSysEventRuleEventDetailsToHclTerraform(struct?: DataAviAlertconfigAlertRuleSysEventRuleEventDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAlertconfigAlertRuleSysEventRuleEventDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAlertconfigAlertRuleSysEventRuleEventDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAlertconfigAlertRuleSysEventRuleEventDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comparator - computed: true, optional: false, required: false
  public get comparator() {
    return this.getStringAttribute('comparator');
  }

  // event_details_key - computed: true, optional: false, required: false
  public get eventDetailsKey() {
    return this.getStringAttribute('event_details_key');
  }

  // event_details_value - computed: true, optional: false, required: false
  public get eventDetailsValue() {
    return this.getStringAttribute('event_details_value');
  }
}

export class DataAviAlertconfigAlertRuleSysEventRuleEventDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviAlertconfigAlertRuleSysEventRuleEventDetailsOutputReference {
    return new DataAviAlertconfigAlertRuleSysEventRuleEventDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAlertconfigAlertRuleSysEventRule {
}

export function dataAviAlertconfigAlertRuleSysEventRuleToTerraform(struct?: DataAviAlertconfigAlertRuleSysEventRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAlertconfigAlertRuleSysEventRuleToHclTerraform(struct?: DataAviAlertconfigAlertRuleSysEventRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAlertconfigAlertRuleSysEventRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAlertconfigAlertRuleSysEventRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAlertconfigAlertRuleSysEventRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_details - computed: true, optional: false, required: false
  private _eventDetails = new DataAviAlertconfigAlertRuleSysEventRuleEventDetailsList(this, "event_details", false);
  public get eventDetails() {
    return this._eventDetails;
  }

  // event_id - computed: true, optional: false, required: false
  public get eventId() {
    return this.getStringAttribute('event_id');
  }

  // not_cond - computed: true, optional: false, required: false
  public get notCond() {
    return this.getStringAttribute('not_cond');
  }
}

export class DataAviAlertconfigAlertRuleSysEventRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataAviAlertconfigAlertRuleSysEventRuleOutputReference {
    return new DataAviAlertconfigAlertRuleSysEventRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAlertconfigAlertRule {
}

export function dataAviAlertconfigAlertRuleToTerraform(struct?: DataAviAlertconfigAlertRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAlertconfigAlertRuleToHclTerraform(struct?: DataAviAlertconfigAlertRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAlertconfigAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAlertconfigAlertRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAlertconfigAlertRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conn_app_log_rule - computed: true, optional: false, required: false
  private _connAppLogRule = new DataAviAlertconfigAlertRuleConnAppLogRuleList(this, "conn_app_log_rule", true);
  public get connAppLogRule() {
    return this._connAppLogRule;
  }

  // event_match_filter - computed: true, optional: false, required: false
  public get eventMatchFilter() {
    return this.getStringAttribute('event_match_filter');
  }

  // metrics_rule - computed: true, optional: false, required: false
  private _metricsRule = new DataAviAlertconfigAlertRuleMetricsRuleList(this, "metrics_rule", false);
  public get metricsRule() {
    return this._metricsRule;
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // sys_event_rule - computed: true, optional: false, required: false
  private _sysEventRule = new DataAviAlertconfigAlertRuleSysEventRuleList(this, "sys_event_rule", false);
  public get sysEventRule() {
    return this._sysEventRule;
  }
}

export class DataAviAlertconfigAlertRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataAviAlertconfigAlertRuleOutputReference {
    return new DataAviAlertconfigAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviAlertconfigConfigpbAttributes {
}

export function dataAviAlertconfigConfigpbAttributesToTerraform(struct?: DataAviAlertconfigConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviAlertconfigConfigpbAttributesToHclTerraform(struct?: DataAviAlertconfigConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviAlertconfigConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviAlertconfigConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviAlertconfigConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviAlertconfigConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviAlertconfigConfigpbAttributesOutputReference {
    return new DataAviAlertconfigConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig avi_alertconfig}
*/
export class DataAviAlertconfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_alertconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviAlertconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviAlertconfig to import
  * @param importFromId The id of the existing DataAviAlertconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviAlertconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_alertconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/data-sources/alertconfig avi_alertconfig} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviAlertconfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviAlertconfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_alertconfig',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_group_ref - computed: true, optional: false, required: false
  public get actionGroupRef() {
    return this.getStringAttribute('action_group_ref');
  }

  // alert_rule - computed: true, optional: false, required: false
  private _alertRule = new DataAviAlertconfigAlertRuleList(this, "alert_rule", true);
  public get alertRule() {
    return this._alertRule;
  }

  // autoscale_alert - computed: true, optional: false, required: false
  public get autoscaleAlert() {
    return this.getStringAttribute('autoscale_alert');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviAlertconfigConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getStringAttribute('enabled');
  }

  // expiry_time - computed: true, optional: false, required: false
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
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

  // obj_uuid - computed: true, optional: false, required: false
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // recommendation - computed: true, optional: false, required: false
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }

  // rolling_window - computed: true, optional: false, required: false
  public get rollingWindow() {
    return this.getStringAttribute('rolling_window');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // summary - computed: true, optional: false, required: false
  public get summary() {
    return this.getStringAttribute('summary');
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }

  // throttle - computed: true, optional: false, required: false
  public get throttle() {
    return this.getStringAttribute('throttle');
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
