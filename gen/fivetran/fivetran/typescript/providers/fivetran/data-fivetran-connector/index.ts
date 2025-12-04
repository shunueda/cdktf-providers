// https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the connector within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connector#id DataFivetranConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataFivetranConnectorConfigAccountsRedditAds {
}

export function dataFivetranConnectorConfigAccountsRedditAdsToTerraform(struct?: DataFivetranConnectorConfigAccountsRedditAds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigAccountsRedditAdsToHclTerraform(struct?: DataFivetranConnectorConfigAccountsRedditAds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigAccountsRedditAdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigAccountsRedditAds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigAccountsRedditAds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFivetranConnectorConfigAccountsRedditAdsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigAccountsRedditAdsOutputReference {
    return new DataFivetranConnectorConfigAccountsRedditAdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigAdobeAnalyticsConfigurations {
}

export function dataFivetranConnectorConfigAdobeAnalyticsConfigurationsToTerraform(struct?: DataFivetranConnectorConfigAdobeAnalyticsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigAdobeAnalyticsConfigurationsToHclTerraform(struct?: DataFivetranConnectorConfigAdobeAnalyticsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigAdobeAnalyticsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigAdobeAnalyticsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigAdobeAnalyticsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calculated_metrics - computed: true, optional: false, required: false
  public get calculatedMetrics() {
    return cdktf.Fn.tolist(this.getListAttribute('calculated_metrics'));
  }

  // elements - computed: true, optional: false, required: false
  public get elements() {
    return cdktf.Fn.tolist(this.getListAttribute('elements'));
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return cdktf.Fn.tolist(this.getListAttribute('metrics'));
  }

  // report_suites - computed: true, optional: false, required: false
  public get reportSuites() {
    return cdktf.Fn.tolist(this.getListAttribute('report_suites'));
  }

  // segments - computed: true, optional: false, required: false
  public get segments() {
    return cdktf.Fn.tolist(this.getListAttribute('segments'));
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataFivetranConnectorConfigAdobeAnalyticsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigAdobeAnalyticsConfigurationsOutputReference {
    return new DataFivetranConnectorConfigAdobeAnalyticsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigAppIdsAppsflyer {
}

export function dataFivetranConnectorConfigAppIdsAppsflyerToTerraform(struct?: DataFivetranConnectorConfigAppIdsAppsflyer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigAppIdsAppsflyerToHclTerraform(struct?: DataFivetranConnectorConfigAppIdsAppsflyer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigAppIdsAppsflyerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigAppIdsAppsflyer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigAppIdsAppsflyer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }
}

export class DataFivetranConnectorConfigAppIdsAppsflyerList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigAppIdsAppsflyerOutputReference {
    return new DataFivetranConnectorConfigAppIdsAppsflyerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigCustomPayloads {
}

export function dataFivetranConnectorConfigCustomPayloadsToTerraform(struct?: DataFivetranConnectorConfigCustomPayloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigCustomPayloadsToHclTerraform(struct?: DataFivetranConnectorConfigCustomPayloads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigCustomPayloadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigCustomPayloads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigCustomPayloads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataFivetranConnectorConfigCustomPayloadsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigCustomPayloadsOutputReference {
    return new DataFivetranConnectorConfigCustomPayloadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigCustomReports {
}

export function dataFivetranConnectorConfigCustomReportsToTerraform(struct?: DataFivetranConnectorConfigCustomReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigCustomReportsToHclTerraform(struct?: DataFivetranConnectorConfigCustomReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigCustomReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigCustomReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigCustomReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_report_time - computed: true, optional: false, required: false
  public get actionReportTime() {
    return this.getStringAttribute('action_report_time');
  }

  // add_metric_variants - computed: true, optional: false, required: false
  public get addMetricVariants() {
    return this.getBooleanAttribute('add_metric_variants');
  }

  // aggregate - computed: true, optional: false, required: false
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }

  // base_metrics_fields - computed: true, optional: false, required: false
  public get baseMetricsFields() {
    return cdktf.Fn.tolist(this.getListAttribute('base_metrics_fields'));
  }

  // breakdown - computed: true, optional: false, required: false
  public get breakdown() {
    return this.getStringAttribute('breakdown');
  }

  // breakout - computed: true, optional: false, required: false
  public get breakout() {
    return this.getStringAttribute('breakout');
  }

  // conversions_report_included - computed: true, optional: false, required: false
  public get conversionsReportIncluded() {
    return this.getBooleanAttribute('conversions_report_included');
  }

  // custom_events_included - computed: true, optional: false, required: false
  public get customEventsIncluded() {
    return this.getBooleanAttribute('custom_events_included');
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('dimensions'));
  }

  // event_names - computed: true, optional: false, required: false
  public get eventNames() {
    return cdktf.Fn.tolist(this.getListAttribute('event_names'));
  }

  // granularity - computed: true, optional: false, required: false
  public get granularity() {
    return this.getStringAttribute('granularity');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return cdktf.Fn.tolist(this.getListAttribute('metrics'));
  }

  // report_fields - computed: true, optional: false, required: false
  public get reportFields() {
    return cdktf.Fn.tolist(this.getListAttribute('report_fields'));
  }

  // report_name - computed: true, optional: false, required: false
  public get reportName() {
    return this.getStringAttribute('report_name');
  }

  // report_type - computed: true, optional: false, required: false
  public get reportType() {
    return this.getStringAttribute('report_type');
  }

  // segmentation - computed: true, optional: false, required: false
  public get segmentation() {
    return this.getStringAttribute('segmentation');
  }

  // sk_ad_metrics_fields - computed: true, optional: false, required: false
  public get skAdMetricsFields() {
    return cdktf.Fn.tolist(this.getListAttribute('sk_ad_metrics_fields'));
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // time_zone_mode - computed: true, optional: false, required: false
  public get timeZoneMode() {
    return this.getStringAttribute('time_zone_mode');
  }
}

export class DataFivetranConnectorConfigCustomReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigCustomReportsOutputReference {
    return new DataFivetranConnectorConfigCustomReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigCustomTables {
}

export function dataFivetranConnectorConfigCustomTablesToTerraform(struct?: DataFivetranConnectorConfigCustomTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigCustomTablesToHclTerraform(struct?: DataFivetranConnectorConfigCustomTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigCustomTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigCustomTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigCustomTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_breakdowns - computed: true, optional: false, required: false
  public get actionBreakdowns() {
    return cdktf.Fn.tolist(this.getListAttribute('action_breakdowns'));
  }

  // action_report_time - computed: true, optional: false, required: false
  public get actionReportTime() {
    return this.getStringAttribute('action_report_time');
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // breakdowns - computed: true, optional: false, required: false
  public get breakdowns() {
    return cdktf.Fn.tolist(this.getListAttribute('breakdowns'));
  }

  // click_attribution_window - computed: true, optional: false, required: false
  public get clickAttributionWindow() {
    return this.getStringAttribute('click_attribution_window');
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // engaged_view_attribution_window - computed: true, optional: false, required: false
  public get engagedViewAttributionWindow() {
    return this.getStringAttribute('engaged_view_attribution_window');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // prebuilt_report_name - computed: true, optional: false, required: false
  public get prebuiltReportName() {
    return this.getStringAttribute('prebuilt_report_name');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // use_unified_attribution_setting - computed: true, optional: false, required: false
  public get useUnifiedAttributionSetting() {
    return this.getBooleanAttribute('use_unified_attribution_setting');
  }

  // view_attribution_window - computed: true, optional: false, required: false
  public get viewAttributionWindow() {
    return this.getStringAttribute('view_attribution_window');
  }
}

export class DataFivetranConnectorConfigCustomTablesList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigCustomTablesOutputReference {
    return new DataFivetranConnectorConfigCustomTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigDataModelPathAliasListStruct {
}

export function dataFivetranConnectorConfigDataModelPathAliasListStructToTerraform(struct?: DataFivetranConnectorConfigDataModelPathAliasListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigDataModelPathAliasListStructToHclTerraform(struct?: DataFivetranConnectorConfigDataModelPathAliasListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigDataModelPathAliasListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigDataModelPathAliasListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigDataModelPathAliasListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataFivetranConnectorConfigDataModelPathAliasListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigDataModelPathAliasListStructOutputReference {
    return new DataFivetranConnectorConfigDataModelPathAliasListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigFiles {
}

export function dataFivetranConnectorConfigFilesToTerraform(struct?: DataFivetranConnectorConfigFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigFilesToHclTerraform(struct?: DataFivetranConnectorConfigFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // archive_pattern - computed: true, optional: false, required: false
  public get archivePattern() {
    return this.getStringAttribute('archive_pattern');
  }

  // email_subject - computed: true, optional: false, required: false
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }

  // file_pattern - computed: true, optional: false, required: false
  public get filePattern() {
    return this.getStringAttribute('file_pattern');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
}

export class DataFivetranConnectorConfigFilesList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigFilesOutputReference {
    return new DataFivetranConnectorConfigFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigProjectCredentials {
}

export function dataFivetranConnectorConfigProjectCredentialsToTerraform(struct?: DataFivetranConnectorConfigProjectCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigProjectCredentialsToHclTerraform(struct?: DataFivetranConnectorConfigProjectCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigProjectCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigProjectCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigProjectCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}

export class DataFivetranConnectorConfigProjectCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigProjectCredentialsOutputReference {
    return new DataFivetranConnectorConfigProjectCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigReportConfigs {
}

export function dataFivetranConnectorConfigReportConfigsToTerraform(struct?: DataFivetranConnectorConfigReportConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigReportConfigsToHclTerraform(struct?: DataFivetranConnectorConfigReportConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigReportConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigReportConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigReportConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('dimensions'));
  }

  // interval_type - computed: true, optional: false, required: false
  public get intervalType() {
    return this.getStringAttribute('interval_type');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return cdktf.Fn.tolist(this.getListAttribute('metrics'));
  }

  // prebuilt_report_type - computed: true, optional: false, required: false
  public get prebuiltReportType() {
    return this.getStringAttribute('prebuilt_report_type');
  }

  // report_name - computed: true, optional: false, required: false
  public get reportName() {
    return this.getStringAttribute('report_name');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // use_advertiser_timezone - computed: true, optional: false, required: false
  public get useAdvertiserTimezone() {
    return this.getBooleanAttribute('use_advertiser_timezone');
  }
}

export class DataFivetranConnectorConfigReportConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigReportConfigsOutputReference {
    return new DataFivetranConnectorConfigReportConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigReportListStruct {
}

export function dataFivetranConnectorConfigReportListStructToTerraform(struct?: DataFivetranConnectorConfigReportListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigReportListStructToHclTerraform(struct?: DataFivetranConnectorConfigReportListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigReportListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigReportListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigReportListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }

  // granularity - computed: true, optional: false, required: false
  public get granularity() {
    return this.getStringAttribute('granularity');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }
}

export class DataFivetranConnectorConfigReportListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigReportListStructOutputReference {
    return new DataFivetranConnectorConfigReportListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigReportsAccounts {
}

export function dataFivetranConnectorConfigReportsAccountsToTerraform(struct?: DataFivetranConnectorConfigReportsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigReportsAccountsToHclTerraform(struct?: DataFivetranConnectorConfigReportsAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigReportsAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigReportsAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigReportsAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flag - computed: true, optional: false, required: false
  public get flag() {
    return this.getBooleanAttribute('flag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_descendants - computed: true, optional: false, required: false
  public get includeDescendants() {
    return this.getBooleanAttribute('include_descendants');
  }
}

export class DataFivetranConnectorConfigReportsAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigReportsAccountsOutputReference {
    return new DataFivetranConnectorConfigReportsAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigReportsFilters {
}

export function dataFivetranConnectorConfigReportsFiltersToTerraform(struct?: DataFivetranConnectorConfigReportsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigReportsFiltersToHclTerraform(struct?: DataFivetranConnectorConfigReportsFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigReportsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigReportsFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigReportsFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimension - computed: true, optional: false, required: false
  public get dimension() {
    return this.getStringAttribute('dimension');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // filter_dimension - computed: true, optional: false, required: false
  public get filterDimension() {
    return this.getStringAttribute('filter_dimension');
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // filter_value - computed: true, optional: false, required: false
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }

  // filter_values - computed: true, optional: false, required: false
  public get filterValues() {
    return cdktf.Fn.tolist(this.getListAttribute('filter_values'));
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
}

export class DataFivetranConnectorConfigReportsFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigReportsFiltersOutputReference {
    return new DataFivetranConnectorConfigReportsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigReportsLevels {
}

export function dataFivetranConnectorConfigReportsLevelsToTerraform(struct?: DataFivetranConnectorConfigReportsLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigReportsLevelsToHclTerraform(struct?: DataFivetranConnectorConfigReportsLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigReportsLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigReportsLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigReportsLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flag - computed: true, optional: false, required: false
  public get flag() {
    return this.getBooleanAttribute('flag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_descendants - computed: true, optional: false, required: false
  public get includeDescendants() {
    return this.getBooleanAttribute('include_descendants');
  }
}

export class DataFivetranConnectorConfigReportsLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigReportsLevelsOutputReference {
    return new DataFivetranConnectorConfigReportsLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigReports {
}

export function dataFivetranConnectorConfigReportsToTerraform(struct?: DataFivetranConnectorConfigReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigReportsToHclTerraform(struct?: DataFivetranConnectorConfigReports): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigReportsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigReports | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigReports | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new DataFivetranConnectorConfigReportsAccountsList(this, "accounts", true);
  public get accounts() {
    return this._accounts;
  }

  // ad_unit_view - computed: true, optional: false, required: false
  public get adUnitView() {
    return this.getStringAttribute('ad_unit_view');
  }

  // advertisers - computed: true, optional: false, required: false
  public get advertisers() {
    return cdktf.Fn.tolist(this.getListAttribute('advertisers'));
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return cdktf.Fn.tolist(this.getListAttribute('attributes'));
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return cdktf.Fn.tolist(this.getListAttribute('columns'));
  }

  // config_method - computed: true, optional: false, required: false
  public get configMethod() {
    return this.getStringAttribute('config_method');
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // conversion_dimensions - computed: true, optional: false, required: false
  public get conversionDimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('conversion_dimensions'));
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // custom_column_ids - computed: true, optional: false, required: false
  public get customColumnIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_column_ids'));
  }

  // custom_dimension_key_ids - computed: true, optional: false, required: false
  public get customDimensionKeyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_dimension_key_ids'));
  }

  // custom_field_ids - computed: true, optional: false, required: false
  public get customFieldIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_field_ids'));
  }

  // custom_floodlight_variables - computed: true, optional: false, required: false
  public get customFloodlightVariables() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_floodlight_variables'));
  }

  // dimension_attributes - computed: true, optional: false, required: false
  public get dimensionAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('dimension_attributes'));
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('dimensions'));
  }

  // dynamic_parameter_field - computed: true, optional: false, required: false
  public get dynamicParameterField() {
    return this.getStringAttribute('dynamic_parameter_field');
  }

  // enable_all_dimension_combinations - computed: true, optional: false, required: false
  public get enableAllDimensionCombinations() {
    return this.getBooleanAttribute('enable_all_dimension_combinations');
  }

  // enable_dynamic_parameters - computed: true, optional: false, required: false
  public get enableDynamicParameters() {
    return this.getBooleanAttribute('enable_dynamic_parameters');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // filter_field_name - computed: true, optional: false, required: false
  public get filterFieldName() {
    return this.getStringAttribute('filter_field_name');
  }

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // filter_value - computed: true, optional: false, required: false
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }

  // filters - computed: true, optional: false, required: false
  private _filters = new DataFivetranConnectorConfigReportsFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }

  // generate_fivetran_pk - computed: true, optional: false, required: false
  public get generateFivetranPk() {
    return this.getBooleanAttribute('generate_fivetran_pk');
  }

  // include_zero_rows - computed: true, optional: false, required: false
  public get includeZeroRows() {
    return this.getBooleanAttribute('include_zero_rows');
  }

  // levels - computed: true, optional: false, required: false
  private _levels = new DataFivetranConnectorConfigReportsLevelsList(this, "levels", true);
  public get levels() {
    return this._levels;
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return cdktf.Fn.tolist(this.getListAttribute('metrics'));
  }

  // partners - computed: true, optional: false, required: false
  public get partners() {
    return cdktf.Fn.tolist(this.getListAttribute('partners'));
  }

  // per_interaction_dimensions - computed: true, optional: false, required: false
  public get perInteractionDimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('per_interaction_dimensions'));
  }

  // prebuilt_report - computed: true, optional: false, required: false
  public get prebuiltReport() {
    return this.getStringAttribute('prebuilt_report');
  }

  // primary_keys - computed: true, optional: false, required: false
  public get primaryKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_keys'));
  }

  // query_id - computed: true, optional: false, required: false
  public get queryId() {
    return this.getStringAttribute('query_id');
  }

  // report_configuration_ids - computed: true, optional: false, required: false
  public get reportConfigurationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('report_configuration_ids'));
  }

  // report_format_type - computed: true, optional: false, required: false
  public get reportFormatType() {
    return this.getStringAttribute('report_format_type');
  }

  // report_type - computed: true, optional: false, required: false
  public get reportType() {
    return this.getStringAttribute('report_type');
  }

  // report_url - computed: true, optional: false, required: false
  public get reportUrl() {
    return this.getStringAttribute('report_url');
  }

  // rollback_window - computed: true, optional: false, required: false
  public get rollbackWindow() {
    return this.getNumberAttribute('rollback_window');
  }

  // search_types - computed: true, optional: false, required: false
  public get searchTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_types'));
  }

  // segment_ids - computed: true, optional: false, required: false
  public get segmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('segment_ids'));
  }

  // segments - computed: true, optional: false, required: false
  public get segments() {
    return cdktf.Fn.tolist(this.getListAttribute('segments'));
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // start_date_parameter_field - computed: true, optional: false, required: false
  public get startDateParameterField() {
    return this.getStringAttribute('start_date_parameter_field');
  }

  // start_month - computed: true, optional: false, required: false
  public get startMonth() {
    return this.getStringAttribute('start_month');
  }

  // start_year - computed: true, optional: false, required: false
  public get startYear() {
    return this.getStringAttribute('start_year');
  }

  // support_nested_columns - computed: true, optional: false, required: false
  public get supportNestedColumns() {
    return this.getBooleanAttribute('support_nested_columns');
  }

  // sync_strategy - computed: true, optional: false, required: false
  public get syncStrategy() {
    return this.getStringAttribute('sync_strategy');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // time_aggregation_granularity - computed: true, optional: false, required: false
  public get timeAggregationGranularity() {
    return this.getStringAttribute('time_aggregation_granularity');
  }

  // update_config_on_each_sync - computed: true, optional: false, required: false
  public get updateConfigOnEachSync() {
    return this.getBooleanAttribute('update_config_on_each_sync');
  }

  // version_sync_strategy - computed: true, optional: false, required: false
  public get versionSyncStrategy() {
    return this.getStringAttribute('version_sync_strategy');
  }

  // versions - computed: true, optional: false, required: false
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
}

export class DataFivetranConnectorConfigReportsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigReportsOutputReference {
    return new DataFivetranConnectorConfigReportsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigSecretsListStruct {
}

export function dataFivetranConnectorConfigSecretsListStructToTerraform(struct?: DataFivetranConnectorConfigSecretsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigSecretsListStructToHclTerraform(struct?: DataFivetranConnectorConfigSecretsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigSecretsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigSecretsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigSecretsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataFivetranConnectorConfigSecretsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigSecretsListStructOutputReference {
    return new DataFivetranConnectorConfigSecretsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigTenantConfigs {
}

export function dataFivetranConnectorConfigTenantConfigsToTerraform(struct?: DataFivetranConnectorConfigTenantConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigTenantConfigsToHclTerraform(struct?: DataFivetranConnectorConfigTenantConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigTenantConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorConfigTenantConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigTenantConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataFivetranConnectorConfigTenantConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorConfigTenantConfigsOutputReference {
    return new DataFivetranConnectorConfigTenantConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorConfigA {
}

export function dataFivetranConnectorConfigAToTerraform(struct?: DataFivetranConnectorConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorConfigAToHclTerraform(struct?: DataFivetranConnectorConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranConnectorConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // abs_connection_method - computed: true, optional: false, required: false
  public get absConnectionMethod() {
    return this.getStringAttribute('abs_connection_method');
  }

  // abs_connection_string - computed: true, optional: false, required: false
  public get absConnectionString() {
    return this.getStringAttribute('abs_connection_string');
  }

  // abs_container_address - computed: true, optional: false, required: false
  public get absContainerAddress() {
    return this.getStringAttribute('abs_container_address');
  }

  // abs_container_name - computed: true, optional: false, required: false
  public get absContainerName() {
    return this.getStringAttribute('abs_container_name');
  }

  // abs_host_ip - computed: true, optional: false, required: false
  public get absHostIp() {
    return this.getStringAttribute('abs_host_ip');
  }

  // abs_host_user - computed: true, optional: false, required: false
  public get absHostUser() {
    return this.getStringAttribute('abs_host_user');
  }

  // abs_prefix - computed: true, optional: false, required: false
  public get absPrefix() {
    return this.getStringAttribute('abs_prefix');
  }

  // abs_public_key - computed: true, optional: false, required: false
  public get absPublicKey() {
    return this.getStringAttribute('abs_public_key');
  }

  // academy_id - computed: true, optional: false, required: false
  public get academyId() {
    return this.getStringAttribute('academy_id');
  }

  // access_confirmation - computed: true, optional: false, required: false
  public get accessConfirmation() {
    return this.getStringAttribute('access_confirmation');
  }

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // access_key_secret - computed: true, optional: false, required: false
  public get accessKeySecret() {
    return this.getStringAttribute('access_key_secret');
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // account_access_token - computed: true, optional: false, required: false
  public get accountAccessToken() {
    return this.getStringAttribute('account_access_token');
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_ids'));
  }

  // account_key - computed: true, optional: false, required: false
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_plan - computed: true, optional: false, required: false
  public get accountPlan() {
    return this.getStringAttribute('account_plan');
  }

  // account_region - computed: true, optional: false, required: false
  public get accountRegion() {
    return this.getStringAttribute('account_region');
  }

  // account_sid - computed: true, optional: false, required: false
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }

  // account_sync_mode - computed: true, optional: false, required: false
  public get accountSyncMode() {
    return this.getStringAttribute('account_sync_mode');
  }

  // account_token - computed: true, optional: false, required: false
  public get accountToken() {
    return this.getStringAttribute('account_token');
  }

  // account_type - computed: true, optional: false, required: false
  public get accountType() {
    return this.getStringAttribute('account_type');
  }

  // accounts - computed: true, optional: false, required: false
  public get accounts() {
    return cdktf.Fn.tolist(this.getListAttribute('accounts'));
  }

  // accounts_reddit_ads - computed: true, optional: false, required: false
  private _accountsRedditAds = new DataFivetranConnectorConfigAccountsRedditAdsList(this, "accounts_reddit_ads", true);
  public get accountsRedditAds() {
    return this._accountsRedditAds;
  }

  // accounts_sync_mode - computed: true, optional: false, required: false
  public get accountsSyncMode() {
    return this.getStringAttribute('accounts_sync_mode');
  }

  // action_breakdowns - computed: true, optional: false, required: false
  public get actionBreakdowns() {
    return cdktf.Fn.tolist(this.getListAttribute('action_breakdowns'));
  }

  // action_report_time - computed: true, optional: false, required: false
  public get actionReportTime() {
    return this.getStringAttribute('action_report_time');
  }

  // ad_analytics - computed: true, optional: false, required: false
  public get adAnalytics() {
    return this.getStringAttribute('ad_analytics');
  }

  // ad_unit_view - computed: true, optional: false, required: false
  public get adUnitView() {
    return this.getStringAttribute('ad_unit_view');
  }

  // admin_api_key - computed: true, optional: false, required: false
  public get adminApiKey() {
    return this.getStringAttribute('admin_api_key');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }

  // adobe_analytics_configurations - computed: true, optional: false, required: false
  private _adobeAnalyticsConfigurations = new DataFivetranConnectorConfigAdobeAnalyticsConfigurationsList(this, "adobe_analytics_configurations", true);
  public get adobeAnalyticsConfigurations() {
    return this._adobeAnalyticsConfigurations;
  }

  // advertisables - computed: true, optional: false, required: false
  public get advertisables() {
    return cdktf.Fn.tolist(this.getListAttribute('advertisables'));
  }

  // advertisers - computed: true, optional: false, required: false
  public get advertisers() {
    return cdktf.Fn.tolist(this.getListAttribute('advertisers'));
  }

  // advertisers_id - computed: true, optional: false, required: false
  public get advertisersId() {
    return cdktf.Fn.tolist(this.getListAttribute('advertisers_id'));
  }

  // advertisers_sync_mode - computed: true, optional: false, required: false
  public get advertisersSyncMode() {
    return this.getStringAttribute('advertisers_sync_mode');
  }

  // advertisers_with_seat - computed: true, optional: false, required: false
  public get advertisersWithSeat() {
    return cdktf.Fn.tolist(this.getListAttribute('advertisers_with_seat'));
  }

  // agent_config_method - computed: true, optional: false, required: false
  public get agentConfigMethod() {
    return this.getStringAttribute('agent_config_method');
  }

  // agent_host - computed: true, optional: false, required: false
  public get agentHost() {
    return this.getStringAttribute('agent_host');
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // agent_ora_home - computed: true, optional: false, required: false
  public get agentOraHome() {
    return this.getStringAttribute('agent_ora_home');
  }

  // agent_password - computed: true, optional: false, required: false
  public get agentPassword() {
    return this.getStringAttribute('agent_password');
  }

  // agent_port - computed: true, optional: false, required: false
  public get agentPort() {
    return this.getNumberAttribute('agent_port');
  }

  // agent_public_cert - computed: true, optional: false, required: false
  public get agentPublicCert() {
    return this.getStringAttribute('agent_public_cert');
  }

  // agent_user - computed: true, optional: false, required: false
  public get agentUser() {
    return this.getStringAttribute('agent_user');
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // agreement_grant_token - computed: true, optional: false, required: false
  public get agreementGrantToken() {
    return this.getStringAttribute('agreement_grant_token');
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // always_encrypted - computed: true, optional: false, required: false
  public get alwaysEncrypted() {
    return this.getBooleanAttribute('always_encrypted');
  }

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getStringAttribute('api');
  }

  // api_access_token - computed: true, optional: false, required: false
  public get apiAccessToken() {
    return this.getStringAttribute('api_access_token');
  }

  // api_environment - computed: true, optional: false, required: false
  public get apiEnvironment() {
    return this.getStringAttribute('api_environment');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // api_integration_type - computed: true, optional: false, required: false
  public get apiIntegrationType() {
    return this.getStringAttribute('api_integration_type');
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // api_key_api_secret - computed: true, optional: false, required: false
  public get apiKeyApiSecret() {
    return this.getStringAttribute('api_key_api_secret');
  }

  // api_keys - computed: true, optional: false, required: false
  public get apiKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('api_keys'));
  }

  // api_password - computed: true, optional: false, required: false
  public get apiPassword() {
    return this.getStringAttribute('api_password');
  }

  // api_quota - computed: true, optional: false, required: false
  public get apiQuota() {
    return this.getNumberAttribute('api_quota');
  }

  // api_read_access_token - computed: true, optional: false, required: false
  public get apiReadAccessToken() {
    return this.getStringAttribute('api_read_access_token');
  }

  // api_requests_per_minute - computed: true, optional: false, required: false
  public get apiRequestsPerMinute() {
    return this.getNumberAttribute('api_requests_per_minute');
  }

  // api_role - computed: true, optional: false, required: false
  public get apiRole() {
    return this.getStringAttribute('api_role');
  }

  // api_secret - computed: true, optional: false, required: false
  public get apiSecret() {
    return this.getStringAttribute('api_secret');
  }

  // api_secret_key - computed: true, optional: false, required: false
  public get apiSecretKey() {
    return this.getStringAttribute('api_secret_key');
  }

  // api_server - computed: true, optional: false, required: false
  public get apiServer() {
    return this.getStringAttribute('api_server');
  }

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }

  // api_type - computed: true, optional: false, required: false
  public get apiType() {
    return this.getStringAttribute('api_type');
  }

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // api_url_region - computed: true, optional: false, required: false
  public get apiUrlRegion() {
    return this.getStringAttribute('api_url_region');
  }

  // api_usage - computed: true, optional: false, required: false
  public get apiUsage() {
    return this.getStringAttribute('api_usage');
  }

  // api_user_identifier - computed: true, optional: false, required: false
  public get apiUserIdentifier() {
    return this.getStringAttribute('api_user_identifier');
  }

  // api_user_secret - computed: true, optional: false, required: false
  public get apiUserSecret() {
    return this.getStringAttribute('api_user_secret');
  }

  // api_username - computed: true, optional: false, required: false
  public get apiUsername() {
    return this.getStringAttribute('api_username');
  }

  // api_utilization_percentage - computed: true, optional: false, required: false
  public get apiUtilizationPercentage() {
    return this.getStringAttribute('api_utilization_percentage');
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_ids - computed: true, optional: false, required: false
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }

  // app_ids_appsflyer - computed: true, optional: false, required: false
  private _appIdsAppsflyer = new DataFivetranConnectorConfigAppIdsAppsflyerList(this, "app_ids_appsflyer", true);
  public get appIdsAppsflyer() {
    return this._appIdsAppsflyer;
  }

  // app_key - computed: true, optional: false, required: false
  public get appKey() {
    return this.getStringAttribute('app_key');
  }

  // app_reference - computed: true, optional: false, required: false
  public get appReference() {
    return this.getStringAttribute('app_reference');
  }

  // app_secret - computed: true, optional: false, required: false
  public get appSecret() {
    return this.getStringAttribute('app_secret');
  }

  // app_secret_token - computed: true, optional: false, required: false
  public get appSecretToken() {
    return this.getStringAttribute('app_secret_token');
  }

  // app_specific_password - computed: true, optional: false, required: false
  public get appSpecificPassword() {
    return this.getStringAttribute('app_specific_password');
  }

  // app_sync_mode - computed: true, optional: false, required: false
  public get appSyncMode() {
    return this.getStringAttribute('app_sync_mode');
  }

  // append_file_option - computed: true, optional: false, required: false
  public get appendFileOption() {
    return this.getStringAttribute('append_file_option');
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_key - computed: true, optional: false, required: false
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }

  // application_name - computed: true, optional: false, required: false
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }

  // apps - computed: true, optional: false, required: false
  public get apps() {
    return cdktf.Fn.tolist(this.getListAttribute('apps'));
  }

  // archive_log_format - computed: true, optional: false, required: false
  public get archiveLogFormat() {
    return this.getStringAttribute('archive_log_format');
  }

  // archive_log_path - computed: true, optional: false, required: false
  public get archiveLogPath() {
    return this.getStringAttribute('archive_log_path');
  }

  // archive_pattern - computed: true, optional: false, required: false
  public get archivePattern() {
    return this.getStringAttribute('archive_pattern');
  }

  // are_soap_credentials_provided - computed: true, optional: false, required: false
  public get areSoapCredentialsProvided() {
    return this.getBooleanAttribute('are_soap_credentials_provided');
  }

  // asb_ip - computed: true, optional: false, required: false
  public get asbIp() {
    return this.getStringAttribute('asb_ip');
  }

  // asm_option - computed: true, optional: false, required: false
  public get asmOption() {
    return this.getBooleanAttribute('asm_option');
  }

  // asm_oracle_home - computed: true, optional: false, required: false
  public get asmOracleHome() {
    return this.getStringAttribute('asm_oracle_home');
  }

  // asm_password - computed: true, optional: false, required: false
  public get asmPassword() {
    return this.getStringAttribute('asm_password');
  }

  // asm_tns - computed: true, optional: false, required: false
  public get asmTns() {
    return this.getStringAttribute('asm_tns');
  }

  // asm_user - computed: true, optional: false, required: false
  public get asmUser() {
    return this.getStringAttribute('asm_user');
  }

  // attribution_window - computed: true, optional: false, required: false
  public get attributionWindow() {
    return this.getStringAttribute('attribution_window');
  }

  // attribution_window_size - computed: true, optional: false, required: false
  public get attributionWindowSize() {
    return this.getStringAttribute('attribution_window_size');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.getStringAttribute('auth');
  }

  // auth_code - computed: true, optional: false, required: false
  public get authCode() {
    return this.getStringAttribute('auth_code');
  }

  // auth_environment - computed: true, optional: false, required: false
  public get authEnvironment() {
    return this.getStringAttribute('auth_environment');
  }

  // auth_header_key - computed: true, optional: false, required: false
  public get authHeaderKey() {
    return this.getStringAttribute('auth_header_key');
  }

  // auth_method - computed: true, optional: false, required: false
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }

  // auth_mode - computed: true, optional: false, required: false
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }

  // auth_secret - computed: true, optional: false, required: false
  public get authSecret() {
    return this.getStringAttribute('auth_secret');
  }

  // auth_token - computed: true, optional: false, required: false
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // auth_url_region - computed: true, optional: false, required: false
  public get authUrlRegion() {
    return this.getStringAttribute('auth_url_region');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

  // authorization_method - computed: true, optional: false, required: false
  public get authorizationMethod() {
    return this.getStringAttribute('authorization_method');
  }

  // authorization_url - computed: true, optional: false, required: false
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }

  // aws_region_code - computed: true, optional: false, required: false
  public get awsRegionCode() {
    return this.getStringAttribute('aws_region_code');
  }

  // backint_configuration_path - computed: true, optional: false, required: false
  public get backintConfigurationPath() {
    return this.getStringAttribute('backint_configuration_path');
  }

  // backint_executable_path - computed: true, optional: false, required: false
  public get backintExecutablePath() {
    return this.getStringAttribute('backint_executable_path');
  }

  // backup_log_format - computed: true, optional: false, required: false
  public get backupLogFormat() {
    return this.getStringAttribute('backup_log_format');
  }

  // backup_log_path - computed: true, optional: false, required: false
  public get backupLogPath() {
    return this.getStringAttribute('backup_log_path');
  }

  // backup_storage_type - computed: true, optional: false, required: false
  public get backupStorageType() {
    return this.getStringAttribute('backup_storage_type');
  }

  // backward_sync_limit - computed: true, optional: false, required: false
  public get backwardSyncLimit() {
    return this.getStringAttribute('backward_sync_limit');
  }

  // backward_sync_limit_date - computed: true, optional: false, required: false
  public get backwardSyncLimitDate() {
    return this.getStringAttribute('backward_sync_limit_date');
  }

  // base_currency - computed: true, optional: false, required: false
  public get baseCurrency() {
    return this.getStringAttribute('base_currency');
  }

  // base_domain - computed: true, optional: false, required: false
  public get baseDomain() {
    return this.getStringAttribute('base_domain');
  }

  // base_id - computed: true, optional: false, required: false
  public get baseId() {
    return this.getStringAttribute('base_id');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // bearer_token - computed: true, optional: false, required: false
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }

  // binary_log_truncater - computed: true, optional: false, required: false
  public get binaryLogTruncater() {
    return this.getStringAttribute('binary_log_truncater');
  }

  // binary_log_type - computed: true, optional: false, required: false
  public get binaryLogType() {
    return this.getStringAttribute('binary_log_type');
  }

  // binary_representation - computed: true, optional: false, required: false
  public get binaryRepresentation() {
    return this.getStringAttribute('binary_representation');
  }

  // blob_sas_url - computed: true, optional: false, required: false
  public get blobSasUrl() {
    return this.getStringAttribute('blob_sas_url');
  }

  // blockchain - computed: true, optional: false, required: false
  public get blockchain() {
    return this.getStringAttribute('blockchain');
  }

  // brand_id - computed: true, optional: false, required: false
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }

  // breakdowns - computed: true, optional: false, required: false
  public get breakdowns() {
    return cdktf.Fn.tolist(this.getListAttribute('breakdowns'));
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // bucket_service - computed: true, optional: false, required: false
  public get bucketService() {
    return this.getStringAttribute('bucket_service');
  }

  // business_accounts - computed: true, optional: false, required: false
  public get businessAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('business_accounts'));
  }

  // business_id - computed: true, optional: false, required: false
  public get businessId() {
    return this.getStringAttribute('business_id');
  }

  // business_unit - computed: true, optional: false, required: false
  public get businessUnit() {
    return this.getStringAttribute('business_unit');
  }

  // business_unit_id - computed: true, optional: false, required: false
  public get businessUnitId() {
    return this.getStringAttribute('business_unit_id');
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // click_attribution_window - computed: true, optional: false, required: false
  public get clickAttributionWindow() {
    return this.getStringAttribute('click_attribution_window');
  }

  // client - computed: true, optional: false, required: false
  public get client() {
    return this.getStringAttribute('client');
  }

  // client_cert - computed: true, optional: false, required: false
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }

  // client_cert_key - computed: true, optional: false, required: false
  public get clientCertKey() {
    return this.getStringAttribute('client_cert_key');
  }

  // client_host - computed: true, optional: false, required: false
  public get clientHost() {
    return this.getStringAttribute('client_host');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // client_namespace - computed: true, optional: false, required: false
  public get clientNamespace() {
    return this.getStringAttribute('client_namespace');
  }

  // client_private_key - computed: true, optional: false, required: false
  public get clientPrivateKey() {
    return this.getStringAttribute('client_private_key');
  }

  // client_public_certificate - computed: true, optional: false, required: false
  public get clientPublicCertificate() {
    return this.getStringAttribute('client_public_certificate');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // cloud_storage_type - computed: true, optional: false, required: false
  public get cloudStorageType() {
    return this.getStringAttribute('cloud_storage_type');
  }

  // collection_address - computed: true, optional: false, required: false
  public get collectionAddress() {
    return this.getStringAttribute('collection_address');
  }

  // columns - computed: true, optional: false, required: false
  public get columns() {
    return cdktf.Fn.tolist(this.getListAttribute('columns'));
  }

  // community_api_key_name - computed: true, optional: false, required: false
  public get communityApiKeyName() {
    return this.getStringAttribute('community_api_key_name');
  }

  // community_domain - computed: true, optional: false, required: false
  public get communityDomain() {
    return this.getStringAttribute('community_domain');
  }

  // community_id - computed: true, optional: false, required: false
  public get communityId() {
    return this.getStringAttribute('community_id');
  }

  // companies - computed: true, optional: false, required: false
  public get companies() {
    return cdktf.Fn.tolist(this.getListAttribute('companies'));
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // company_id - computed: true, optional: false, required: false
  public get companyId() {
    return this.getStringAttribute('company_id');
  }

  // company_ids - computed: true, optional: false, required: false
  public get companyIds() {
    return this.getStringAttribute('company_ids');
  }

  // company_key - computed: true, optional: false, required: false
  public get companyKey() {
    return this.getStringAttribute('company_key');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // company_request_token - computed: true, optional: false, required: false
  public get companyRequestToken() {
    return this.getStringAttribute('company_request_token');
  }

  // company_uuid - computed: true, optional: false, required: false
  public get companyUuid() {
    return this.getStringAttribute('company_uuid');
  }

  // compression - computed: true, optional: false, required: false
  public get compression() {
    return this.getStringAttribute('compression');
  }

  // config_method - computed: true, optional: false, required: false
  public get configMethod() {
    return this.getStringAttribute('config_method');
  }

  // config_repository_url - computed: true, optional: false, required: false
  public get configRepositoryUrl() {
    return this.getStringAttribute('config_repository_url');
  }

  // config_type - computed: true, optional: false, required: false
  public get configType() {
    return this.getStringAttribute('config_type');
  }

  // connect_password - computed: true, optional: false, required: false
  public get connectPassword() {
    return this.getStringAttribute('connect_password');
  }

  // connect_username - computed: true, optional: false, required: false
  public get connectUsername() {
    return this.getStringAttribute('connect_username');
  }

  // connecting_user - computed: true, optional: false, required: false
  public get connectingUser() {
    return this.getStringAttribute('connecting_user');
  }

  // connecting_user_email - computed: true, optional: false, required: false
  public get connectingUserEmail() {
    return this.getStringAttribute('connecting_user_email');
  }

  // connection_method - computed: true, optional: false, required: false
  public get connectionMethod() {
    return this.getStringAttribute('connection_method');
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // connection_string - computed: true, optional: false, required: false
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // console_url - computed: true, optional: false, required: false
  public get consoleUrl() {
    return this.getStringAttribute('console_url');
  }

  // consumer_group - computed: true, optional: false, required: false
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }

  // consumer_key - computed: true, optional: false, required: false
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }

  // consumer_name - computed: true, optional: false, required: false
  public get consumerName() {
    return this.getStringAttribute('consumer_name');
  }

  // consumer_secret - computed: true, optional: false, required: false
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }

  // container_address - computed: true, optional: false, required: false
  public get containerAddress() {
    return this.getStringAttribute('container_address');
  }

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // content_owner_id - computed: true, optional: false, required: false
  public get contentOwnerId() {
    return this.getStringAttribute('content_owner_id');
  }

  // contract_version - computed: true, optional: false, required: false
  public get contractVersion() {
    return this.getStringAttribute('contract_version');
  }

  // conversation_webhook_url - computed: true, optional: false, required: false
  public get conversationWebhookUrl() {
    return this.getStringAttribute('conversation_webhook_url');
  }

  // conversion_dimensions - computed: true, optional: false, required: false
  public get conversionDimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('conversion_dimensions'));
  }

  // conversion_report_time - computed: true, optional: false, required: false
  public get conversionReportTime() {
    return this.getStringAttribute('conversion_report_time');
  }

  // conversion_window_size - computed: true, optional: false, required: false
  public get conversionWindowSize() {
    return this.getNumberAttribute('conversion_window_size');
  }

  // convert_dats_type_to_date - computed: true, optional: false, required: false
  public get convertDatsTypeToDate() {
    return this.getBooleanAttribute('convert_dats_type_to_date');
  }

  // csv_definition - computed: true, optional: false, required: false
  public get csvDefinition() {
    return this.getStringAttribute('csv_definition');
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // custom_base_url - computed: true, optional: false, required: false
  public get customBaseUrl() {
    return this.getStringAttribute('custom_base_url');
  }

  // custom_dimension_key_ids - computed: true, optional: false, required: false
  public get customDimensionKeyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_dimension_key_ids'));
  }

  // custom_event_sync_mode - computed: true, optional: false, required: false
  public get customEventSyncMode() {
    return this.getStringAttribute('custom_event_sync_mode');
  }

  // custom_events - computed: true, optional: false, required: false
  public get customEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_events'));
  }

  // custom_field_ids - computed: true, optional: false, required: false
  public get customFieldIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_field_ids'));
  }

  // custom_floodlight_variables - computed: true, optional: false, required: false
  public get customFloodlightVariables() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_floodlight_variables'));
  }

  // custom_payloads - computed: true, optional: false, required: false
  private _customPayloads = new DataFivetranConnectorConfigCustomPayloadsList(this, "custom_payloads", true);
  public get customPayloads() {
    return this._customPayloads;
  }

  // custom_rate_limit - computed: true, optional: false, required: false
  public get customRateLimit() {
    return this.getStringAttribute('custom_rate_limit');
  }

  // custom_reports - computed: true, optional: false, required: false
  private _customReports = new DataFivetranConnectorConfigCustomReportsList(this, "custom_reports", true);
  public get customReports() {
    return this._customReports;
  }

  // custom_tables - computed: true, optional: false, required: false
  private _customTables = new DataFivetranConnectorConfigCustomTablesList(this, "custom_tables", true);
  public get customTables() {
    return this._customTables;
  }

  // custom_url - computed: true, optional: false, required: false
  public get customUrl() {
    return this.getStringAttribute('custom_url');
  }

  // customer_api_key - computed: true, optional: false, required: false
  public get customerApiKey() {
    return this.getStringAttribute('customer_api_key');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // customer_list_id - computed: true, optional: false, required: false
  public get customerListId() {
    return this.getStringAttribute('customer_list_id');
  }

  // daily_api_call_limit - computed: true, optional: false, required: false
  public get dailyApiCallLimit() {
    return this.getNumberAttribute('daily_api_call_limit');
  }

  // data_access_method - computed: true, optional: false, required: false
  public get dataAccessMethod() {
    return this.getStringAttribute('data_access_method');
  }

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }

  // data_center_id - computed: true, optional: false, required: false
  public get dataCenterId() {
    return this.getStringAttribute('data_center_id');
  }

  // data_model_path_alias_list - computed: true, optional: false, required: false
  private _dataModelPathAliasList = new DataFivetranConnectorConfigDataModelPathAliasListStructList(this, "data_model_path_alias_list", true);
  public get dataModelPathAliasList() {
    return this._dataModelPathAliasList;
  }

  // data_set_name - computed: true, optional: false, required: false
  public get dataSetName() {
    return this.getStringAttribute('data_set_name');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }

  // datasource - computed: true, optional: false, required: false
  public get datasource() {
    return this.getStringAttribute('datasource');
  }

  // date_granularity - computed: true, optional: false, required: false
  public get dateGranularity() {
    return this.getStringAttribute('date_granularity');
  }

  // db - computed: true, optional: false, required: false
  public get db() {
    return this.getStringAttribute('db');
  }

  // default_host - computed: true, optional: false, required: false
  public get defaultHost() {
    return this.getStringAttribute('default_host');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // developer_reference - computed: true, optional: false, required: false
  public get developerReference() {
    return this.getStringAttribute('developer_reference');
  }

  // dimension_attributes - computed: true, optional: false, required: false
  public get dimensionAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('dimension_attributes'));
  }

  // dimensions - computed: true, optional: false, required: false
  public get dimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('dimensions'));
  }

  // direct_capture_method - computed: true, optional: false, required: false
  public get directCaptureMethod() {
    return this.getStringAttribute('direct_capture_method');
  }

  // directories - computed: true, optional: false, required: false
  public get directories() {
    return cdktf.Fn.tolist(this.getListAttribute('directories'));
  }

  // directory_sync_mode - computed: true, optional: false, required: false
  public get directorySyncMode() {
    return this.getStringAttribute('directory_sync_mode');
  }

  // distributed_connector_cluster_size - computed: true, optional: false, required: false
  public get distributedConnectorClusterSize() {
    return this.getNumberAttribute('distributed_connector_cluster_size');
  }

  // distribution_incremental_fetch_window_days - computed: true, optional: false, required: false
  public get distributionIncrementalFetchWindowDays() {
    return this.getNumberAttribute('distribution_incremental_fetch_window_days');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // domain_host_name - computed: true, optional: false, required: false
  public get domainHostName() {
    return this.getStringAttribute('domain_host_name');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // domain_prefix - computed: true, optional: false, required: false
  public get domainPrefix() {
    return this.getStringAttribute('domain_prefix');
  }

  // domain_type - computed: true, optional: false, required: false
  public get domainType() {
    return this.getStringAttribute('domain_type');
  }

  // dsv_service_auth - computed: true, optional: false, required: false
  public get dsvServiceAuth() {
    return this.getStringAttribute('dsv_service_auth');
  }

  // dsv_subscription_key - computed: true, optional: false, required: false
  public get dsvSubscriptionKey() {
    return this.getStringAttribute('dsv_subscription_key');
  }

  // ecommerce_stores - computed: true, optional: false, required: false
  public get ecommerceStores() {
    return cdktf.Fn.tolist(this.getListAttribute('ecommerce_stores'));
  }

  // edition - computed: true, optional: false, required: false
  public get edition() {
    return this.getStringAttribute('edition');
  }

  // elements - computed: true, optional: false, required: false
  public get elements() {
    return cdktf.Fn.tolist(this.getListAttribute('elements'));
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // email_id - computed: true, optional: false, required: false
  public get emailId() {
    return this.getStringAttribute('email_id');
  }

  // empty_header - computed: true, optional: false, required: false
  public get emptyHeader() {
    return this.getBooleanAttribute('empty_header');
  }

  // enable_all_dimension_combinations - computed: true, optional: false, required: false
  public get enableAllDimensionCombinations() {
    return this.getBooleanAttribute('enable_all_dimension_combinations');
  }

  // enable_archive_log_only - computed: true, optional: false, required: false
  public get enableArchiveLogOnly() {
    return this.getBooleanAttribute('enable_archive_log_only');
  }

  // enable_data_extensions_syncing - computed: true, optional: false, required: false
  public get enableDataExtensionsSyncing() {
    return this.getBooleanAttribute('enable_data_extensions_syncing');
  }

  // enable_distributed_connector_mode - computed: true, optional: false, required: false
  public get enableDistributedConnectorMode() {
    return this.getBooleanAttribute('enable_distributed_connector_mode');
  }

  // enable_enrichments - computed: true, optional: false, required: false
  public get enableEnrichments() {
    return this.getBooleanAttribute('enable_enrichments');
  }

  // enable_exports - computed: true, optional: false, required: false
  public get enableExports() {
    return this.getBooleanAttribute('enable_exports');
  }

  // enable_tde - computed: true, optional: false, required: false
  public get enableTde() {
    return this.getBooleanAttribute('enable_tde');
  }

  // enable_tde_encryption - computed: true, optional: false, required: false
  public get enableTdeEncryption() {
    return this.getBooleanAttribute('enable_tde_encryption');
  }

  // encoded_public_key - computed: true, optional: false, required: false
  public get encodedPublicKey() {
    return this.getStringAttribute('encoded_public_key');
  }

  // encryption_key - computed: true, optional: false, required: false
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }

  // engagement_attribution_window - computed: true, optional: false, required: false
  public get engagementAttributionWindow() {
    return this.getStringAttribute('engagement_attribution_window');
  }

  // enriched_export - computed: true, optional: false, required: false
  public get enrichedExport() {
    return this.getStringAttribute('enriched_export');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entra_app_id - computed: true, optional: false, required: false
  public get entraAppId() {
    return this.getStringAttribute('entra_app_id');
  }

  // entra_tenant_id - computed: true, optional: false, required: false
  public get entraTenantId() {
    return this.getStringAttribute('entra_tenant_id');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // environment_host - computed: true, optional: false, required: false
  public get environmentHost() {
    return this.getStringAttribute('environment_host');
  }

  // environment_name - computed: true, optional: false, required: false
  public get environmentName() {
    return this.getStringAttribute('environment_name');
  }

  // escape_char - computed: true, optional: false, required: false
  public get escapeChar() {
    return this.getStringAttribute('escape_char');
  }

  // escape_char_options - computed: true, optional: false, required: false
  public get escapeCharOptions() {
    return this.getStringAttribute('escape_char_options');
  }

  // eu_region - computed: true, optional: false, required: false
  public get euRegion() {
    return this.getBooleanAttribute('eu_region');
  }

  // events - computed: true, optional: false, required: false
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }

  // export_native_types_as_pdf - computed: true, optional: false, required: false
  public get exportNativeTypesAsPdf() {
    return this.getBooleanAttribute('export_native_types_as_pdf');
  }

  // export_storage_type - computed: true, optional: false, required: false
  public get exportStorageType() {
    return this.getStringAttribute('export_storage_type');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // extraction_pattern - computed: true, optional: false, required: false
  public get extractionPattern() {
    return this.getStringAttribute('extraction_pattern');
  }

  // facility_codes - computed: true, optional: false, required: false
  public get facilityCodes() {
    return this.getStringAttribute('facility_codes');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }

  // file_handling - computed: true, optional: false, required: false
  public get fileHandling() {
    return this.getStringAttribute('file_handling');
  }

  // file_mapping_method - computed: true, optional: false, required: false
  public get fileMappingMethod() {
    return this.getStringAttribute('file_mapping_method');
  }

  // file_type - computed: true, optional: false, required: false
  public get fileType() {
    return this.getStringAttribute('file_type');
  }

  // files - computed: true, optional: false, required: false
  private _files = new DataFivetranConnectorConfigFilesList(this, "files", true);
  public get files() {
    return this._files;
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // finance_account_sync_mode - computed: true, optional: false, required: false
  public get financeAccountSyncMode() {
    return this.getStringAttribute('finance_account_sync_mode');
  }

  // finance_accounts - computed: true, optional: false, required: false
  public get financeAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('finance_accounts'));
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // folder_path - computed: true, optional: false, required: false
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }

  // forecast_id - computed: true, optional: false, required: false
  public get forecastId() {
    return this.getStringAttribute('forecast_id');
  }

  // ftp_host - computed: true, optional: false, required: false
  public get ftpHost() {
    return this.getStringAttribute('ftp_host');
  }

  // ftp_password - computed: true, optional: false, required: false
  public get ftpPassword() {
    return this.getStringAttribute('ftp_password');
  }

  // ftp_port - computed: true, optional: false, required: false
  public get ftpPort() {
    return this.getNumberAttribute('ftp_port');
  }

  // ftp_user - computed: true, optional: false, required: false
  public get ftpUser() {
    return this.getStringAttribute('ftp_user');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getStringAttribute('function');
  }

  // function_app - computed: true, optional: false, required: false
  public get functionApp() {
    return this.getStringAttribute('function_app');
  }

  // function_key - computed: true, optional: false, required: false
  public get functionKey() {
    return this.getStringAttribute('function_key');
  }

  // function_name - computed: true, optional: false, required: false
  public get functionName() {
    return this.getStringAttribute('function_name');
  }

  // function_trigger - computed: true, optional: false, required: false
  public get functionTrigger() {
    return this.getStringAttribute('function_trigger');
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }

  // gcs_export_bucket - computed: true, optional: false, required: false
  public get gcsExportBucket() {
    return this.getStringAttribute('gcs_export_bucket');
  }

  // gcs_export_folder - computed: true, optional: false, required: false
  public get gcsExportFolder() {
    return this.getStringAttribute('gcs_export_folder');
  }

  // gcs_folder - computed: true, optional: false, required: false
  public get gcsFolder() {
    return this.getStringAttribute('gcs_folder');
  }

  // generate_fivetran_pk - computed: true, optional: false, required: false
  public get generateFivetranPk() {
    return this.getBooleanAttribute('generate_fivetran_pk');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // hana_backup_password - computed: true, optional: false, required: false
  public get hanaBackupPassword() {
    return this.getStringAttribute('hana_backup_password');
  }

  // hana_mode - computed: true, optional: false, required: false
  public get hanaMode() {
    return this.getStringAttribute('hana_mode');
  }

  // has_manage_permissions - computed: true, optional: false, required: false
  public get hasManagePermissions() {
    return this.getBooleanAttribute('has_manage_permissions');
  }

  // historic_sync_time_frame - computed: true, optional: false, required: false
  public get historicSyncTimeFrame() {
    return this.getStringAttribute('historic_sync_time_frame');
  }

  // historical_sync_limit - computed: true, optional: false, required: false
  public get historicalSyncLimit() {
    return this.getStringAttribute('historical_sync_limit');
  }

  // historical_sync_limit_date - computed: true, optional: false, required: false
  public get historicalSyncLimitDate() {
    return this.getStringAttribute('historical_sync_limit_date');
  }

  // historical_sync_limit_time_frame - computed: true, optional: false, required: false
  public get historicalSyncLimitTimeFrame() {
    return this.getStringAttribute('historical_sync_limit_time_frame');
  }

  // historical_sync_time_frame - computed: true, optional: false, required: false
  public get historicalSyncTimeFrame() {
    return this.getStringAttribute('historical_sync_time_frame');
  }

  // home_folder - computed: true, optional: false, required: false
  public get homeFolder() {
    return this.getStringAttribute('home_folder');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_url - computed: true, optional: false, required: false
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }

  // host_user - computed: true, optional: false, required: false
  public get hostUser() {
    return this.getStringAttribute('host_user');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }

  // http_path - computed: true, optional: false, required: false
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // include_inherited_columns - computed: true, optional: false, required: false
  public get includeInheritedColumns() {
    return this.getBooleanAttribute('include_inherited_columns');
  }

  // include_ocapi_endpoints - computed: true, optional: false, required: false
  public get includeOcapiEndpoints() {
    return this.getBooleanAttribute('include_ocapi_endpoints');
  }

  // instance - computed: true, optional: false, required: false
  public get instance() {
    return this.getStringAttribute('instance');
  }

  // instance_code - computed: true, optional: false, required: false
  public get instanceCode() {
    return this.getStringAttribute('instance_code');
  }

  // instance_number - computed: true, optional: false, required: false
  public get instanceNumber() {
    return this.getStringAttribute('instance_number');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // integration_key - computed: true, optional: false, required: false
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_account_level_connector - computed: true, optional: false, required: false
  public get isAccountLevelConnector() {
    return this.getBooleanAttribute('is_account_level_connector');
  }

  // is_auth2_enabled - computed: true, optional: false, required: false
  public get isAuth2Enabled() {
    return this.getBooleanAttribute('is_auth2_enabled');
  }

  // is_custom_api_credentials - computed: true, optional: false, required: false
  public get isCustomApiCredentials() {
    return this.getBooleanAttribute('is_custom_api_credentials');
  }

  // is_external_activities_endpoint_selected - computed: true, optional: false, required: false
  public get isExternalActivitiesEndpointSelected() {
    return this.getBooleanAttribute('is_external_activities_endpoint_selected');
  }

  // is_ftps - computed: true, optional: false, required: false
  public get isFtps() {
    return this.getBooleanAttribute('is_ftps');
  }

  // is_keypair - computed: true, optional: false, required: false
  public get isKeypair() {
    return this.getBooleanAttribute('is_keypair');
  }

  // is_multi_entity_feature_enabled - computed: true, optional: false, required: false
  public get isMultiEntityFeatureEnabled() {
    return this.getBooleanAttribute('is_multi_entity_feature_enabled');
  }

  // is_new_package - computed: true, optional: false, required: false
  public get isNewPackage() {
    return this.getBooleanAttribute('is_new_package');
  }

  // is_private_key_encrypted - computed: true, optional: false, required: false
  public get isPrivateKeyEncrypted() {
    return this.getBooleanAttribute('is_private_key_encrypted');
  }

  // is_private_link_required - computed: true, optional: false, required: false
  public get isPrivateLinkRequired() {
    return this.getBooleanAttribute('is_private_link_required');
  }

  // is_public - computed: true, optional: false, required: false
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }

  // is_sailthru_connect_enabled - computed: true, optional: false, required: false
  public get isSailthruConnectEnabled() {
    return this.getBooleanAttribute('is_sailthru_connect_enabled');
  }

  // is_secure - computed: true, optional: false, required: false
  public get isSecure() {
    return this.getBooleanAttribute('is_secure');
  }

  // is_sftp_creds_available - computed: true, optional: false, required: false
  public get isSftpCredsAvailable() {
    return this.getBooleanAttribute('is_sftp_creds_available');
  }

  // is_single_table_mode - computed: true, optional: false, required: false
  public get isSingleTableMode() {
    return this.getBooleanAttribute('is_single_table_mode');
  }

  // is_test_account - computed: true, optional: false, required: false
  public get isTestAccount() {
    return this.getBooleanAttribute('is_test_account');
  }

  // is_vendor - computed: true, optional: false, required: false
  public get isVendor() {
    return this.getBooleanAttribute('is_vendor');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // issuer_id - computed: true, optional: false, required: false
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }

  // json_delivery_mode - computed: true, optional: false, required: false
  public get jsonDeliveryMode() {
    return this.getStringAttribute('json_delivery_mode');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_password - computed: true, optional: false, required: false
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }

  // key_store_type - computed: true, optional: false, required: false
  public get keyStoreType() {
    return this.getStringAttribute('key_store_type');
  }

  // keystore - computed: true, optional: false, required: false
  public get keystore() {
    return this.getStringAttribute('keystore');
  }

  // keystore_password - computed: true, optional: false, required: false
  public get keystorePassword() {
    return this.getStringAttribute('keystore_password');
  }

  // last_synced_changes__utc_ - computed: true, optional: false, required: false
  public get lastSyncedChangesUtc() {
    return this.getStringAttribute('last_synced_changes__utc_');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // legal_entity_id - computed: true, optional: false, required: false
  public get legalEntityId() {
    return this.getStringAttribute('legal_entity_id');
  }

  // limit_for_api_calls_to_external_activities_endpoint - computed: true, optional: false, required: false
  public get limitForApiCallsToExternalActivitiesEndpoint() {
    return this.getNumberAttribute('limit_for_api_calls_to_external_activities_endpoint');
  }

  // line_separator - computed: true, optional: false, required: false
  public get lineSeparator() {
    return this.getStringAttribute('line_separator');
  }

  // list_id - computed: true, optional: false, required: false
  public get listId() {
    return this.getStringAttribute('list_id');
  }

  // list_of_company_ids - computed: true, optional: false, required: false
  public get listOfCompanyIds() {
    return this.getStringAttribute('list_of_company_ids');
  }

  // list_strategy - computed: true, optional: false, required: false
  public get listStrategy() {
    return this.getStringAttribute('list_strategy');
  }

  // list_sync_mode - computed: true, optional: false, required: false
  public get listSyncMode() {
    return this.getStringAttribute('list_sync_mode');
  }

  // location_ids - computed: true, optional: false, required: false
  public get locationIds() {
    return this.getStringAttribute('location_ids');
  }

  // log_journal - computed: true, optional: false, required: false
  public get logJournal() {
    return this.getStringAttribute('log_journal');
  }

  // log_journal_schema - computed: true, optional: false, required: false
  public get logJournalSchema() {
    return this.getStringAttribute('log_journal_schema');
  }

  // log_on_group - computed: true, optional: false, required: false
  public get logOnGroup() {
    return this.getStringAttribute('log_on_group');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // login_password - computed: true, optional: false, required: false
  public get loginPassword() {
    return this.getStringAttribute('login_password');
  }

  // look_back_window_for_gl_batch_endpoint - computed: true, optional: false, required: false
  public get lookBackWindowForGlBatchEndpoint() {
    return this.getNumberAttribute('look_back_window_for_gl_batch_endpoint');
  }

  // manager_accounts - computed: true, optional: false, required: false
  public get managerAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('manager_accounts'));
  }

  // max_api_requests_per_day - computed: true, optional: false, required: false
  public get maxApiRequestsPerDay() {
    return this.getNumberAttribute('max_api_requests_per_day');
  }

  // merchant_id - computed: true, optional: false, required: false
  public get merchantId() {
    return this.getStringAttribute('merchant_id');
  }

  // message_type - computed: true, optional: false, required: false
  public get messageType() {
    return this.getStringAttribute('message_type');
  }

  // metric_id - computed: true, optional: false, required: false
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return cdktf.Fn.tolist(this.getListAttribute('metrics'));
  }

  // named_range - computed: true, optional: false, required: false
  public get namedRange() {
    return this.getStringAttribute('named_range');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // network_code - computed: true, optional: false, required: false
  public get networkCode() {
    return this.getNumberAttribute('network_code');
  }

  // non_standard_escape_char - computed: true, optional: false, required: false
  public get nonStandardEscapeChar() {
    return this.getBooleanAttribute('non_standard_escape_char');
  }

  // null_sequence - computed: true, optional: false, required: false
  public get nullSequence() {
    return this.getStringAttribute('null_sequence');
  }

  // oauth_token - computed: true, optional: false, required: false
  public get oauthToken() {
    return this.getStringAttribute('oauth_token');
  }

  // oauth_token_secret - computed: true, optional: false, required: false
  public get oauthTokenSecret() {
    return this.getStringAttribute('oauth_token_secret');
  }

  // ocapi_client_id - computed: true, optional: false, required: false
  public get ocapiClientId() {
    return this.getStringAttribute('ocapi_client_id');
  }

  // ocapi_client_secret - computed: true, optional: false, required: false
  public get ocapiClientSecret() {
    return this.getStringAttribute('ocapi_client_secret');
  }

  // ocapi_custom_object_types - computed: true, optional: false, required: false
  public get ocapiCustomObjectTypes() {
    return this.getStringAttribute('ocapi_custom_object_types');
  }

  // ocapi_hostname - computed: true, optional: false, required: false
  public get ocapiHostname() {
    return this.getStringAttribute('ocapi_hostname');
  }

  // odbc_driver_manager_library_path - computed: true, optional: false, required: false
  public get odbcDriverManagerLibraryPath() {
    return this.getStringAttribute('odbc_driver_manager_library_path');
  }

  // odbc_sys_ini_path - computed: true, optional: false, required: false
  public get odbcSysIniPath() {
    return this.getStringAttribute('odbc_sys_ini_path');
  }

  // on_error - computed: true, optional: false, required: false
  public get onError() {
    return this.getStringAttribute('on_error');
  }

  // on_premise - computed: true, optional: false, required: false
  public get onPremise() {
    return this.getBooleanAttribute('on_premise');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organization_domain - computed: true, optional: false, required: false
  public get organizationDomain() {
    return this.getStringAttribute('organization_domain');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // organization_name - computed: true, optional: false, required: false
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }

  // organizations - computed: true, optional: false, required: false
  public get organizations() {
    return cdktf.Fn.tolist(this.getListAttribute('organizations'));
  }

  // packed_mode_tables - computed: true, optional: false, required: false
  public get packedModeTables() {
    return cdktf.Fn.tolist(this.getListAttribute('packed_mode_tables'));
  }

  // packing_mode - computed: true, optional: false, required: false
  public get packingMode() {
    return this.getStringAttribute('packing_mode');
  }

  // pages - computed: true, optional: false, required: false
  public get pages() {
    return cdktf.Fn.tolist(this.getListAttribute('pages'));
  }

  // partner_code - computed: true, optional: false, required: false
  public get partnerCode() {
    return this.getStringAttribute('partner_code');
  }

  // partner_user_id - computed: true, optional: false, required: false
  public get partnerUserId() {
    return this.getStringAttribute('partner_user_id');
  }

  // partner_user_secret - computed: true, optional: false, required: false
  public get partnerUserSecret() {
    return this.getStringAttribute('partner_user_secret');
  }

  // partners - computed: true, optional: false, required: false
  public get partners() {
    return cdktf.Fn.tolist(this.getListAttribute('partners'));
  }

  // pass_phrase - computed: true, optional: false, required: false
  public get passPhrase() {
    return this.getStringAttribute('pass_phrase');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pat - computed: true, optional: false, required: false
  public get pat() {
    return this.getStringAttribute('pat');
  }

  // pat_name - computed: true, optional: false, required: false
  public get patName() {
    return this.getStringAttribute('pat_name');
  }

  // pat_secret - computed: true, optional: false, required: false
  public get patSecret() {
    return this.getStringAttribute('pat_secret');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // pats - computed: true, optional: false, required: false
  public get pats() {
    return cdktf.Fn.tolist(this.getListAttribute('pats'));
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }

  // pdb_name - computed: true, optional: false, required: false
  public get pdbName() {
    return this.getStringAttribute('pdb_name');
  }

  // pem_certificate - computed: true, optional: false, required: false
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }

  // pem_private_key - computed: true, optional: false, required: false
  public get pemPrivateKey() {
    return this.getStringAttribute('pem_private_key');
  }

  // per_interaction_dimensions - computed: true, optional: false, required: false
  public get perInteractionDimensions() {
    return cdktf.Fn.tolist(this.getListAttribute('per_interaction_dimensions'));
  }

  // personal_access_token - computed: true, optional: false, required: false
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }

  // personal_api_token - computed: true, optional: false, required: false
  public get personalApiToken() {
    return this.getStringAttribute('personal_api_token');
  }

  // pgp_pass_phrase - computed: true, optional: false, required: false
  public get pgpPassPhrase() {
    return this.getStringAttribute('pgp_pass_phrase');
  }

  // pgp_secret_key - computed: true, optional: false, required: false
  public get pgpSecretKey() {
    return this.getStringAttribute('pgp_secret_key');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // post_click_attribution_window_size - computed: true, optional: false, required: false
  public get postClickAttributionWindowSize() {
    return this.getStringAttribute('post_click_attribution_window_size');
  }

  // prebuilt_report - computed: true, optional: false, required: false
  public get prebuiltReport() {
    return this.getStringAttribute('prebuilt_report');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }

  // primary_keys - computed: true, optional: false, required: false
  public get primaryKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_keys'));
  }

  // prioritise_bulk_export_over_rest - computed: true, optional: false, required: false
  public get prioritiseBulkExportOverRest() {
    return this.getBooleanAttribute('prioritise_bulk_export_over_rest');
  }

  // private_access_token - computed: true, optional: false, required: false
  public get privateAccessToken() {
    return this.getStringAttribute('private_access_token');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_token - computed: true, optional: false, required: false
  public get privateToken() {
    return this.getStringAttribute('private_token');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // profiles - computed: true, optional: false, required: false
  public get profiles() {
    return cdktf.Fn.tolist(this.getListAttribute('profiles'));
  }

  // profiles_amazon_dsp - computed: true, optional: false, required: false
  public get profilesAmazonDsp() {
    return this.getStringAttribute('profiles_amazon_dsp');
  }

  // project_access_token - computed: true, optional: false, required: false
  public get projectAccessToken() {
    return this.getStringAttribute('project_access_token');
  }

  // project_credentials - computed: true, optional: false, required: false
  private _projectCredentials = new DataFivetranConnectorConfigProjectCredentialsList(this, "project_credentials", true);
  public get projectCredentials() {
    return this._projectCredentials;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_ids - computed: true, optional: false, required: false
  public get projectIds() {
    return this.getStringAttribute('project_ids');
  }

  // project_key - computed: true, optional: false, required: false
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }

  // project_website_url - computed: true, optional: false, required: false
  public get projectWebsiteUrl() {
    return this.getStringAttribute('project_website_url');
  }

  // projects - computed: true, optional: false, required: false
  public get projects() {
    return cdktf.Fn.tolist(this.getListAttribute('projects'));
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return cdktf.Fn.tolist(this.getListAttribute('properties'));
  }

  // property_id - computed: true, optional: false, required: false
  public get propertyId() {
    return this.getStringAttribute('property_id');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // publication_name - computed: true, optional: false, required: false
  public get publicationName() {
    return this.getStringAttribute('publication_name');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }

  // pull_archived_campaigns - computed: true, optional: false, required: false
  public get pullArchivedCampaigns() {
    return this.getBooleanAttribute('pull_archived_campaigns');
  }

  // python_version - computed: true, optional: false, required: false
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }

  // query_id - computed: true, optional: false, required: false
  public get queryId() {
    return this.getStringAttribute('query_id');
  }

  // query_param_value - computed: true, optional: false, required: false
  public get queryParamValue() {
    return this.getStringAttribute('query_param_value');
  }

  // quota_project_id - computed: true, optional: false, required: false
  public get quotaProjectId() {
    return this.getStringAttribute('quota_project_id');
  }

  // quote_char - computed: true, optional: false, required: false
  public get quoteChar() {
    return this.getStringAttribute('quote_char');
  }

  // quote_character_enabled - computed: true, optional: false, required: false
  public get quoteCharacterEnabled() {
    return this.getBooleanAttribute('quote_character_enabled');
  }

  // rate_limit_plan - computed: true, optional: false, required: false
  public get rateLimitPlan() {
    return this.getStringAttribute('rate_limit_plan');
  }

  // refresh_token - computed: true, optional: false, required: false
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }

  // refresh_token_expires_at - computed: true, optional: false, required: false
  public get refreshTokenExpiresAt() {
    return this.getStringAttribute('refresh_token_expires_at');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_api_url - computed: true, optional: false, required: false
  public get regionApiUrl() {
    return this.getStringAttribute('region_api_url');
  }

  // region_auth_url - computed: true, optional: false, required: false
  public get regionAuthUrl() {
    return this.getStringAttribute('region_auth_url');
  }

  // region_token_url - computed: true, optional: false, required: false
  public get regionTokenUrl() {
    return this.getStringAttribute('region_token_url');
  }

  // region_url - computed: true, optional: false, required: false
  public get regionUrl() {
    return this.getStringAttribute('region_url');
  }

  // replica_id - computed: true, optional: false, required: false
  public get replicaId() {
    return this.getNumberAttribute('replica_id');
  }

  // replication_slot - computed: true, optional: false, required: false
  public get replicationSlot() {
    return this.getStringAttribute('replication_slot');
  }

  // report_configs - computed: true, optional: false, required: false
  private _reportConfigs = new DataFivetranConnectorConfigReportConfigsList(this, "report_configs", true);
  public get reportConfigs() {
    return this._reportConfigs;
  }

  // report_configuration_ids - computed: true, optional: false, required: false
  public get reportConfigurationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('report_configuration_ids'));
  }

  // report_format_type - computed: true, optional: false, required: false
  public get reportFormatType() {
    return this.getStringAttribute('report_format_type');
  }

  // report_granularity - computed: true, optional: false, required: false
  public get reportGranularity() {
    return this.getStringAttribute('report_granularity');
  }

  // report_keys - computed: true, optional: false, required: false
  public get reportKeys() {
    return this.getStringAttribute('report_keys');
  }

  // report_list - computed: true, optional: false, required: false
  private _reportList = new DataFivetranConnectorConfigReportListStructList(this, "report_list", true);
  public get reportList() {
    return this._reportList;
  }

  // report_service_api_key - computed: true, optional: false, required: false
  public get reportServiceApiKey() {
    return this.getStringAttribute('report_service_api_key');
  }

  // report_suites - computed: true, optional: false, required: false
  public get reportSuites() {
    return cdktf.Fn.tolist(this.getListAttribute('report_suites'));
  }

  // report_timezone - computed: true, optional: false, required: false
  public get reportTimezone() {
    return this.getStringAttribute('report_timezone');
  }

  // report_type - computed: true, optional: false, required: false
  public get reportType() {
    return this.getStringAttribute('report_type');
  }

  // report_url - computed: true, optional: false, required: false
  public get reportUrl() {
    return this.getStringAttribute('report_url');
  }

  // reports - computed: true, optional: false, required: false
  private _reports = new DataFivetranConnectorConfigReportsList(this, "reports", true);
  public get reports() {
    return this._reports;
  }

  // reports_linkedin_ads - computed: true, optional: false, required: false
  public get reportsLinkedinAds() {
    return cdktf.Fn.tolist(this.getListAttribute('reports_linkedin_ads'));
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return cdktf.Fn.tolist(this.getListAttribute('repositories'));
  }

  // resource_token - computed: true, optional: false, required: false
  public get resourceToken() {
    return this.getStringAttribute('resource_token');
  }

  // resource_url - computed: true, optional: false, required: false
  public get resourceUrl() {
    return this.getStringAttribute('resource_url');
  }

  // rest_api_limit - computed: true, optional: false, required: false
  public get restApiLimit() {
    return this.getNumberAttribute('rest_api_limit');
  }

  // rfc_library_path - computed: true, optional: false, required: false
  public get rfcLibraryPath() {
    return this.getStringAttribute('rfc_library_path');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // rollback_window - computed: true, optional: false, required: false
  public get rollbackWindow() {
    return this.getNumberAttribute('rollback_window');
  }

  // rollback_window_size - computed: true, optional: false, required: false
  public get rollbackWindowSize() {
    return this.getNumberAttribute('rollback_window_size');
  }

  // root_resource_id - computed: true, optional: false, required: false
  public get rootResourceId() {
    return this.getStringAttribute('root_resource_id');
  }

  // s3_export_bucket - computed: true, optional: false, required: false
  public get s3ExportBucket() {
    return this.getStringAttribute('s3_export_bucket');
  }

  // s3_export_external_id - computed: true, optional: false, required: false
  public get s3ExportExternalId() {
    return this.getStringAttribute('s3_export_external_id');
  }

  // s3_export_folder - computed: true, optional: false, required: false
  public get s3ExportFolder() {
    return this.getStringAttribute('s3_export_folder');
  }

  // s3_export_role_arn - computed: true, optional: false, required: false
  public get s3ExportRoleArn() {
    return this.getStringAttribute('s3_export_role_arn');
  }

  // s3bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3bucket');
  }

  // s3external_id - computed: true, optional: false, required: false
  public get s3ExternalId() {
    return this.getStringAttribute('s3external_id');
  }

  // s3folder - computed: true, optional: false, required: false
  public get s3Folder() {
    return this.getStringAttribute('s3folder');
  }

  // s3path - computed: true, optional: false, required: false
  public get s3Path() {
    return this.getStringAttribute('s3path');
  }

  // s3role_arn - computed: true, optional: false, required: false
  public get s3RoleArn() {
    return this.getStringAttribute('s3role_arn');
  }

  // sales_account_sync_mode - computed: true, optional: false, required: false
  public get salesAccountSyncMode() {
    return this.getStringAttribute('sales_account_sync_mode');
  }

  // sales_accounts - computed: true, optional: false, required: false
  public get salesAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('sales_accounts'));
  }

  // salesforce_security_token - computed: true, optional: false, required: false
  public get salesforceSecurityToken() {
    return this.getStringAttribute('salesforce_security_token');
  }

  // sandbox_account - computed: true, optional: false, required: false
  public get sandboxAccount() {
    return this.getStringAttribute('sandbox_account');
  }

  // sap_schema - computed: true, optional: false, required: false
  public get sapSchema() {
    return this.getStringAttribute('sap_schema');
  }

  // sap_source_schema - computed: true, optional: false, required: false
  public get sapSourceSchema() {
    return this.getStringAttribute('sap_source_schema');
  }

  // sap_user - computed: true, optional: false, required: false
  public get sapUser() {
    return this.getStringAttribute('sap_user');
  }

  // sasl_mechanism - computed: true, optional: false, required: false
  public get saslMechanism() {
    return this.getStringAttribute('sasl_mechanism');
  }

  // sasl_plain_key - computed: true, optional: false, required: false
  public get saslPlainKey() {
    return this.getStringAttribute('sasl_plain_key');
  }

  // sasl_plain_secret - computed: true, optional: false, required: false
  public get saslPlainSecret() {
    return this.getStringAttribute('sasl_plain_secret');
  }

  // sasl_scram256_key - computed: true, optional: false, required: false
  public get saslScram256Key() {
    return this.getStringAttribute('sasl_scram256_key');
  }

  // sasl_scram256_secret - computed: true, optional: false, required: false
  public get saslScram256Secret() {
    return this.getStringAttribute('sasl_scram256_secret');
  }

  // sasl_scram512_key - computed: true, optional: false, required: false
  public get saslScram512Key() {
    return this.getStringAttribute('sasl_scram512_key');
  }

  // sasl_scram512_secret - computed: true, optional: false, required: false
  public get saslScram512Secret() {
    return this.getStringAttribute('sasl_scram512_secret');
  }

  // schema_registry_credentials_source - computed: true, optional: false, required: false
  public get schemaRegistryCredentialsSource() {
    return this.getStringAttribute('schema_registry_credentials_source');
  }

  // schema_registry_key - computed: true, optional: false, required: false
  public get schemaRegistryKey() {
    return this.getStringAttribute('schema_registry_key');
  }

  // schema_registry_secret - computed: true, optional: false, required: false
  public get schemaRegistrySecret() {
    return this.getStringAttribute('schema_registry_secret');
  }

  // schema_registry_urls - computed: true, optional: false, required: false
  public get schemaRegistryUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('schema_registry_urls'));
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getStringAttribute('scopes');
  }

  // seats - computed: true, optional: false, required: false
  public get seats() {
    return cdktf.Fn.tolist(this.getListAttribute('seats'));
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }

  // secrets - computed: true, optional: false, required: false
  public get secrets() {
    return this.getStringAttribute('secrets');
  }

  // secrets_list - computed: true, optional: false, required: false
  private _secretsList = new DataFivetranConnectorConfigSecretsListStructList(this, "secrets_list", true);
  public get secretsList() {
    return this._secretsList;
  }

  // secured_signon_key - computed: true, optional: false, required: false
  public get securedSignonKey() {
    return this.getStringAttribute('secured_signon_key');
  }

  // security_protocol - computed: true, optional: false, required: false
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }

  // segments - computed: true, optional: false, required: false
  public get segments() {
    return cdktf.Fn.tolist(this.getListAttribute('segments'));
  }

  // selected_event_types - computed: true, optional: false, required: false
  public get selectedEventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_event_types'));
  }

  // selected_exports - computed: true, optional: false, required: false
  public get selectedExports() {
    return cdktf.Fn.tolist(this.getListAttribute('selected_exports'));
  }

  // selected_range - computed: true, optional: false, required: false
  public get selectedRange() {
    return this.getStringAttribute('selected_range');
  }

  // sender_id - computed: true, optional: false, required: false
  public get senderId() {
    return this.getStringAttribute('sender_id');
  }

  // sender_password - computed: true, optional: false, required: false
  public get senderPassword() {
    return this.getStringAttribute('sender_password');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }

  // server_address - computed: true, optional: false, required: false
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }

  // server_region - computed: true, optional: false, required: false
  public get serverRegion() {
    return this.getStringAttribute('server_region');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }

  // server_variable - computed: true, optional: false, required: false
  public get serverVariable() {
    return this.getStringAttribute('server_variable');
  }

  // servers - computed: true, optional: false, required: false
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // service_account_key - computed: true, optional: false, required: false
  public get serviceAccountKey() {
    return this.getStringAttribute('service_account_key');
  }

  // service_account_secret - computed: true, optional: false, required: false
  public get serviceAccountSecret() {
    return this.getStringAttribute('service_account_secret');
  }

  // service_account_username - computed: true, optional: false, required: false
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }

  // service_authentication - computed: true, optional: false, required: false
  public get serviceAuthentication() {
    return this.getStringAttribute('service_authentication');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // sftp_host - computed: true, optional: false, required: false
  public get sftpHost() {
    return this.getStringAttribute('sftp_host');
  }

  // sftp_is_key_pair - computed: true, optional: false, required: false
  public get sftpIsKeyPair() {
    return this.getBooleanAttribute('sftp_is_key_pair');
  }

  // sftp_password - computed: true, optional: false, required: false
  public get sftpPassword() {
    return this.getStringAttribute('sftp_password');
  }

  // sftp_port - computed: true, optional: false, required: false
  public get sftpPort() {
    return this.getNumberAttribute('sftp_port');
  }

  // sftp_public_key - computed: true, optional: false, required: false
  public get sftpPublicKey() {
    return this.getStringAttribute('sftp_public_key');
  }

  // sftp_user - computed: true, optional: false, required: false
  public get sftpUser() {
    return this.getStringAttribute('sftp_user');
  }

  // share_url - computed: true, optional: false, required: false
  public get shareUrl() {
    return this.getStringAttribute('share_url');
  }

  // sheet_id - computed: true, optional: false, required: false
  public get sheetId() {
    return this.getStringAttribute('sheet_id');
  }

  // shop - computed: true, optional: false, required: false
  public get shop() {
    return this.getStringAttribute('shop');
  }

  // shop_domain - computed: true, optional: false, required: false
  public get shopDomain() {
    return this.getStringAttribute('shop_domain');
  }

  // short_code - computed: true, optional: false, required: false
  public get shortCode() {
    return this.getStringAttribute('short_code');
  }

  // should_sync_events_with_deleted_profiles - computed: true, optional: false, required: false
  public get shouldSyncEventsWithDeletedProfiles() {
    return this.getBooleanAttribute('should_sync_events_with_deleted_profiles');
  }

  // should_sync_reimport_tables - computed: true, optional: false, required: false
  public get shouldSyncReimportTables() {
    return this.getBooleanAttribute('should_sync_reimport_tables');
  }

  // show_records_with_no_metrics - computed: true, optional: false, required: false
  public get showRecordsWithNoMetrics() {
    return this.getBooleanAttribute('show_records_with_no_metrics');
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // signature_encoding - computed: true, optional: false, required: false
  public get signatureEncoding() {
    return this.getStringAttribute('signature_encoding');
  }

  // signer_public_key - computed: true, optional: false, required: false
  public get signerPublicKey() {
    return this.getStringAttribute('signer_public_key');
  }

  // site_address - computed: true, optional: false, required: false
  public get siteAddress() {
    return this.getStringAttribute('site_address');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // site_urls - computed: true, optional: false, required: false
  public get siteUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('site_urls'));
  }

  // skip_after - computed: true, optional: false, required: false
  public get skipAfter() {
    return this.getNumberAttribute('skip_after');
  }

  // skip_before - computed: true, optional: false, required: false
  public get skipBefore() {
    return this.getNumberAttribute('skip_before');
  }

  // skip_empty_reports - computed: true, optional: false, required: false
  public get skipEmptyReports() {
    return this.getBooleanAttribute('skip_empty_reports');
  }

  // snc_certificate - computed: true, optional: false, required: false
  public get sncCertificate() {
    return this.getStringAttribute('snc_certificate');
  }

  // snc_certificate_source - computed: true, optional: false, required: false
  public get sncCertificateSource() {
    return this.getStringAttribute('snc_certificate_source');
  }

  // snc_fivetran_name - computed: true, optional: false, required: false
  public get sncFivetranName() {
    return this.getStringAttribute('snc_fivetran_name');
  }

  // snc_library_path - computed: true, optional: false, required: false
  public get sncLibraryPath() {
    return this.getStringAttribute('snc_library_path');
  }

  // snc_mode - computed: true, optional: false, required: false
  public get sncMode() {
    return this.getStringAttribute('snc_mode');
  }

  // snc_my_name - computed: true, optional: false, required: false
  public get sncMyName() {
    return this.getStringAttribute('snc_my_name');
  }

  // snc_name - computed: true, optional: false, required: false
  public get sncName() {
    return this.getStringAttribute('snc_name');
  }

  // snc_partner_name - computed: true, optional: false, required: false
  public get sncPartnerName() {
    return this.getStringAttribute('snc_partner_name');
  }

  // snc_source_name - computed: true, optional: false, required: false
  public get sncSourceName() {
    return this.getStringAttribute('snc_source_name');
  }

  // soap_uri - computed: true, optional: false, required: false
  public get soapUri() {
    return this.getStringAttribute('soap_uri');
  }

  // social_data_sync_timeframe - computed: true, optional: false, required: false
  public get socialDataSyncTimeframe() {
    return this.getStringAttribute('social_data_sync_timeframe');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // storage_account_name - computed: true, optional: false, required: false
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }

  // store_hash - computed: true, optional: false, required: false
  public get storeHash() {
    return this.getStringAttribute('store_hash');
  }

  // store_id - computed: true, optional: false, required: false
  public get storeId() {
    return this.getStringAttribute('store_id');
  }

  // sub_collections - computed: true, optional: false, required: false
  public get subCollections() {
    return cdktf.Fn.tolist(this.getListAttribute('sub_collections'));
  }

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // subscriber_name - computed: true, optional: false, required: false
  public get subscriberName() {
    return this.getStringAttribute('subscriber_name');
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }

  // subscription_key - computed: true, optional: false, required: false
  public get subscriptionKey() {
    return this.getStringAttribute('subscription_key');
  }

  // support_connected_accounts_sync - computed: true, optional: false, required: false
  public get supportConnectedAccountsSync() {
    return this.getBooleanAttribute('support_connected_accounts_sync');
  }

  // support_nested_columns - computed: true, optional: false, required: false
  public get supportNestedColumns() {
    return this.getBooleanAttribute('support_nested_columns');
  }

  // survey_ids - computed: true, optional: false, required: false
  public get surveyIds() {
    return this.getStringAttribute('survey_ids');
  }

  // swipe_attribution_window - computed: true, optional: false, required: false
  public get swipeAttributionWindow() {
    return this.getStringAttribute('swipe_attribution_window');
  }

  // sync_data_locker - computed: true, optional: false, required: false
  public get syncDataLocker() {
    return this.getBooleanAttribute('sync_data_locker');
  }

  // sync_format - computed: true, optional: false, required: false
  public get syncFormat() {
    return this.getStringAttribute('sync_format');
  }

  // sync_formula_fields - computed: true, optional: false, required: false
  public get syncFormulaFields() {
    return this.getBooleanAttribute('sync_formula_fields');
  }

  // sync_metadata - computed: true, optional: false, required: false
  public get syncMetadata() {
    return this.getBooleanAttribute('sync_metadata');
  }

  // sync_method - computed: true, optional: false, required: false
  public get syncMethod() {
    return this.getStringAttribute('sync_method');
  }

  // sync_mode - computed: true, optional: false, required: false
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }

  // sync_mode_advertiser - computed: true, optional: false, required: false
  public get syncModeAdvertiser() {
    return this.getStringAttribute('sync_mode_advertiser');
  }

  // sync_mode_seat - computed: true, optional: false, required: false
  public get syncModeSeat() {
    return this.getStringAttribute('sync_mode_seat');
  }

  // sync_multiple_accounts - computed: true, optional: false, required: false
  public get syncMultipleAccounts() {
    return this.getBooleanAttribute('sync_multiple_accounts');
  }

  // sync_pack_mode - computed: true, optional: false, required: false
  public get syncPackMode() {
    return this.getStringAttribute('sync_pack_mode');
  }

  // sync_permissions - computed: true, optional: false, required: false
  public get syncPermissions() {
    return this.getBooleanAttribute('sync_permissions');
  }

  // sync_pull_api - computed: true, optional: false, required: false
  public get syncPullApi() {
    return this.getBooleanAttribute('sync_pull_api');
  }

  // sync_tables - computed: true, optional: false, required: false
  public get syncTables() {
    return this.getStringAttribute('sync_tables');
  }

  // sync_type - computed: true, optional: false, required: false
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }

  // sysnr - computed: true, optional: false, required: false
  public get sysnr() {
    return this.getStringAttribute('sysnr');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // table_id - computed: true, optional: false, required: false
  public get tableId() {
    return this.getStringAttribute('table_id');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // tables_without_access_updated_at - computed: true, optional: false, required: false
  public get tablesWithoutAccessUpdatedAt() {
    return this.getStringAttribute('tables_without_access_updated_at');
  }

  // target_entity_id - computed: true, optional: false, required: false
  public get targetEntityId() {
    return this.getStringAttribute('target_entity_id');
  }

  // target_host - computed: true, optional: false, required: false
  public get targetHost() {
    return this.getStringAttribute('target_host');
  }

  // tde_certificate - computed: true, optional: false, required: false
  public get tdeCertificate() {
    return this.getStringAttribute('tde_certificate');
  }

  // tde_certificate_backup - computed: true, optional: false, required: false
  public get tdeCertificateBackup() {
    return this.getStringAttribute('tde_certificate_backup');
  }

  // tde_certificate_name - computed: true, optional: false, required: false
  public get tdeCertificateName() {
    return this.getStringAttribute('tde_certificate_name');
  }

  // tde_certificate_path - computed: true, optional: false, required: false
  public get tdeCertificatePath() {
    return this.getStringAttribute('tde_certificate_path');
  }

  // tde_password - computed: true, optional: false, required: false
  public get tdePassword() {
    return this.getStringAttribute('tde_password');
  }

  // tde_private_key - computed: true, optional: false, required: false
  public get tdePrivateKey() {
    return this.getStringAttribute('tde_private_key');
  }

  // tde_private_key_backup - computed: true, optional: false, required: false
  public get tdePrivateKeyBackup() {
    return this.getStringAttribute('tde_private_key_backup');
  }

  // tde_private_key_path - computed: true, optional: false, required: false
  public get tdePrivateKeyPath() {
    return this.getStringAttribute('tde_private_key_path');
  }

  // tde_wallet_password - computed: true, optional: false, required: false
  public get tdeWalletPassword() {
    return this.getStringAttribute('tde_wallet_password');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // technical_account_id - computed: true, optional: false, required: false
  public get technicalAccountId() {
    return this.getStringAttribute('technical_account_id');
  }

  // template_labels - computed: true, optional: false, required: false
  public get templateLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('template_labels'));
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // tenant_app_url - computed: true, optional: false, required: false
  public get tenantAppUrl() {
    return this.getStringAttribute('tenant_app_url');
  }

  // tenant_code - computed: true, optional: false, required: false
  public get tenantCode() {
    return this.getStringAttribute('tenant_code');
  }

  // tenant_configs - computed: true, optional: false, required: false
  private _tenantConfigs = new DataFivetranConnectorConfigTenantConfigsList(this, "tenant_configs", true);
  public get tenantConfigs() {
    return this._tenantConfigs;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // tenant_url - computed: true, optional: false, required: false
  public get tenantUrl() {
    return this.getStringAttribute('tenant_url');
  }

  // test_table_name - computed: true, optional: false, required: false
  public get testTableName() {
    return this.getStringAttribute('test_table_name');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // timeframe_months - computed: true, optional: false, required: false
  public get timeframeMonths() {
    return this.getStringAttribute('timeframe_months');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // timezone_mode - computed: true, optional: false, required: false
  public get timezoneMode() {
    return this.getStringAttribute('timezone_mode');
  }

  // tns - computed: true, optional: false, required: false
  public get tns() {
    return this.getStringAttribute('tns');
  }

  // toast_id - computed: true, optional: false, required: false
  public get toastId() {
    return this.getStringAttribute('toast_id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_authenticated_container - computed: true, optional: false, required: false
  public get tokenAuthenticatedContainer() {
    return this.getStringAttribute('token_authenticated_container');
  }

  // token_authenticated_database - computed: true, optional: false, required: false
  public get tokenAuthenticatedDatabase() {
    return this.getStringAttribute('token_authenticated_database');
  }

  // token_id - computed: true, optional: false, required: false
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }

  // token_key - computed: true, optional: false, required: false
  public get tokenKey() {
    return this.getStringAttribute('token_key');
  }

  // token_secret - computed: true, optional: false, required: false
  public get tokenSecret() {
    return this.getStringAttribute('token_secret');
  }

  // token_secret_key - computed: true, optional: false, required: false
  public get tokenSecretKey() {
    return this.getStringAttribute('token_secret_key');
  }

  // token_url_region - computed: true, optional: false, required: false
  public get tokenUrlRegion() {
    return this.getStringAttribute('token_url_region');
  }

  // topics - computed: true, optional: false, required: false
  public get topics() {
    return cdktf.Fn.tolist(this.getListAttribute('topics'));
  }

  // trust_store_type - computed: true, optional: false, required: false
  public get trustStoreType() {
    return this.getStringAttribute('trust_store_type');
  }

  // trusted_cert - computed: true, optional: false, required: false
  public get trustedCert() {
    return this.getStringAttribute('trusted_cert');
  }

  // truststore - computed: true, optional: false, required: false
  public get truststore() {
    return this.getStringAttribute('truststore');
  }

  // tunnel_host - computed: true, optional: false, required: false
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }

  // tunnel_port - computed: true, optional: false, required: false
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }

  // tunnel_user - computed: true, optional: false, required: false
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // unique_id - computed: true, optional: false, required: false
  public get uniqueId() {
    return this.getStringAttribute('unique_id');
  }

  // update_config_on_each_sync - computed: true, optional: false, required: false
  public get updateConfigOnEachSync() {
    return this.getBooleanAttribute('update_config_on_each_sync');
  }

  // update_method - computed: true, optional: false, required: false
  public get updateMethod() {
    return this.getStringAttribute('update_method');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // url_format - computed: true, optional: false, required: false
  public get urlFormat() {
    return this.getStringAttribute('url_format');
  }

  // use_api_keys - computed: true, optional: false, required: false
  public get useApiKeys() {
    return this.getBooleanAttribute('use_api_keys');
  }

  // use_cloud_storage - computed: true, optional: false, required: false
  public get useCloudStorage() {
    return this.getBooleanAttribute('use_cloud_storage');
  }

  // use_customer_bucket - computed: true, optional: false, required: false
  public get useCustomerBucket() {
    return this.getBooleanAttribute('use_customer_bucket');
  }

  // use_oracle_rac - computed: true, optional: false, required: false
  public get useOracleRac() {
    return this.getBooleanAttribute('use_oracle_rac');
  }

  // use_pdb_only - computed: true, optional: false, required: false
  public get usePdbOnly() {
    return this.getBooleanAttribute('use_pdb_only');
  }

  // use_pgp_encryption_options - computed: true, optional: false, required: false
  public get usePgpEncryptionOptions() {
    return this.getBooleanAttribute('use_pgp_encryption_options');
  }

  // use_service_account - computed: true, optional: false, required: false
  public get useServiceAccount() {
    return this.getBooleanAttribute('use_service_account');
  }

  // use_template_labels - computed: true, optional: false, required: false
  public get useTemplateLabels() {
    return this.getBooleanAttribute('use_template_labels');
  }

  // use_webhooks - computed: true, optional: false, required: false
  public get useWebhooks() {
    return this.getBooleanAttribute('use_webhooks');
  }

  // use_workspace - computed: true, optional: false, required: false
  public get useWorkspace() {
    return this.getBooleanAttribute('use_workspace');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_key - computed: true, optional: false, required: false
  public get userKey() {
    return this.getStringAttribute('user_key');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_profiles - computed: true, optional: false, required: false
  public get userProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('user_profiles'));
  }

  // user_token - computed: true, optional: false, required: false
  public get userToken() {
    return this.getStringAttribute('user_token');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // vendors_id - computed: true, optional: false, required: false
  public get vendorsId() {
    return cdktf.Fn.tolist(this.getListAttribute('vendors_id'));
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // view_attribution_window - computed: true, optional: false, required: false
  public get viewAttributionWindow() {
    return this.getStringAttribute('view_attribution_window');
  }

  // view_id - computed: true, optional: false, required: false
  public get viewId() {
    return this.getStringAttribute('view_id');
  }

  // view_through_attribution_window_size - computed: true, optional: false, required: false
  public get viewThroughAttributionWindowSize() {
    return this.getStringAttribute('view_through_attribution_window_size');
  }

  // web_service_api_key - computed: true, optional: false, required: false
  public get webServiceApiKey() {
    return this.getStringAttribute('web_service_api_key');
  }

  // webhook_endpoint - computed: true, optional: false, required: false
  public get webhookEndpoint() {
    return this.getStringAttribute('webhook_endpoint');
  }

  // webhook_key - computed: true, optional: false, required: false
  public get webhookKey() {
    return this.getStringAttribute('webhook_key');
  }

  // webhook_name - computed: true, optional: false, required: false
  public get webhookName() {
    return this.getStringAttribute('webhook_name');
  }

  // webhook_url - computed: true, optional: false, required: false
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }

  // word_press_site_id_or_woocommerce_domain_name - computed: true, optional: false, required: false
  public get wordPressSiteIdOrWoocommerceDomainName() {
    return this.getStringAttribute('word_press_site_id_or_woocommerce_domain_name');
  }

  // workplace_id - computed: true, optional: false, required: false
  public get workplaceId() {
    return this.getStringAttribute('workplace_id');
  }

  // workspace - computed: true, optional: false, required: false
  public get workspace() {
    return this.getStringAttribute('workspace');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_name - computed: true, optional: false, required: false
  public get workspaceName() {
    return this.getStringAttribute('workspace_name');
  }

  // workspace_same_as_source - computed: true, optional: false, required: false
  public get workspaceSameAsSource() {
    return this.getBooleanAttribute('workspace_same_as_source');
  }

  // workspace_schema - computed: true, optional: false, required: false
  public get workspaceSchema() {
    return this.getStringAttribute('workspace_schema');
  }

  // workspace_token - computed: true, optional: false, required: false
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }

  // ws_certificate - computed: true, optional: false, required: false
  public get wsCertificate() {
    return this.getStringAttribute('ws_certificate');
  }

  // x_api_key - computed: true, optional: false, required: false
  public get xApiKey() {
    return this.getStringAttribute('x_api_key');
  }

  // x_key - computed: true, optional: false, required: false
  public get xKey() {
    return this.getStringAttribute('x_key');
  }

  // x_master_key - computed: true, optional: false, required: false
  public get xMasterKey() {
    return this.getStringAttribute('x_master_key');
  }

  // x_user_email - computed: true, optional: false, required: false
  public get xUserEmail() {
    return this.getStringAttribute('x_user_email');
  }

  // x_user_token - computed: true, optional: false, required: false
  public get xUserToken() {
    return this.getStringAttribute('x_user_token');
  }
}
export interface DataFivetranConnectorDestinationSchema {
}

export function dataFivetranConnectorDestinationSchemaToTerraform(struct?: DataFivetranConnectorDestinationSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorDestinationSchemaToHclTerraform(struct?: DataFivetranConnectorDestinationSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorDestinationSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranConnectorDestinationSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorDestinationSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // table_group_name - computed: true, optional: false, required: false
  public get tableGroupName() {
    return this.getStringAttribute('table_group_name');
  }
}
export interface DataFivetranConnectorStatusTasks {
}

export function dataFivetranConnectorStatusTasksToTerraform(struct?: DataFivetranConnectorStatusTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorStatusTasksToHclTerraform(struct?: DataFivetranConnectorStatusTasks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorStatusTasksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorStatusTasks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorStatusTasks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataFivetranConnectorStatusTasksList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorStatusTasksOutputReference {
    return new DataFivetranConnectorStatusTasksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorStatusWarnings {
}

export function dataFivetranConnectorStatusWarningsToTerraform(struct?: DataFivetranConnectorStatusWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorStatusWarningsToHclTerraform(struct?: DataFivetranConnectorStatusWarnings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorStatusWarningsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorStatusWarnings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorStatusWarnings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataFivetranConnectorStatusWarningsList extends cdktf.ComplexList {

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
  public get(index: number): DataFivetranConnectorStatusWarningsOutputReference {
    return new DataFivetranConnectorStatusWarningsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFivetranConnectorStatus {
}

export function dataFivetranConnectorStatusToTerraform(struct?: DataFivetranConnectorStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorStatusToHclTerraform(struct?: DataFivetranConnectorStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFivetranConnectorStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // is_historical_sync - computed: true, optional: false, required: false
  public get isHistoricalSync() {
    return this.getBooleanAttribute('is_historical_sync');
  }

  // setup_state - computed: true, optional: false, required: false
  public get setupState() {
    return this.getStringAttribute('setup_state');
  }

  // sync_state - computed: true, optional: false, required: false
  public get syncState() {
    return this.getStringAttribute('sync_state');
  }

  // tasks - computed: true, optional: false, required: false
  private _tasks = new DataFivetranConnectorStatusTasksList(this, "tasks", true);
  public get tasks() {
    return this._tasks;
  }

  // update_state - computed: true, optional: false, required: false
  public get updateState() {
    return this.getStringAttribute('update_state');
  }

  // warnings - computed: true, optional: false, required: false
  private _warnings = new DataFivetranConnectorStatusWarningsList(this, "warnings", true);
  public get warnings() {
    return this._warnings;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connector fivetran_connector}
*/
export class DataFivetranConnector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranConnector to import
  * @param importFromId The id of the existing DataFivetranConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.17/docs/data-sources/connector fivetran_connector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataFivetranConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connector',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.17',
        providerVersionConstraint: '1.9.17'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connected_by - computed: true, optional: false, required: false
  public get connectedBy() {
    return this.getStringAttribute('connected_by');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // daily_sync_time - computed: true, optional: false, required: false
  public get dailySyncTime() {
    return this.getStringAttribute('daily_sync_time');
  }

  // data_delay_sensitivity - computed: true, optional: false, required: false
  public get dataDelaySensitivity() {
    return this.getStringAttribute('data_delay_sensitivity');
  }

  // data_delay_threshold - computed: true, optional: false, required: false
  public get dataDelayThreshold() {
    return this.getNumberAttribute('data_delay_threshold');
  }

  // failed_at - computed: true, optional: false, required: false
  public get failedAt() {
    return this.getStringAttribute('failed_at');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // hybrid_deployment_agent_id - computed: true, optional: false, required: false
  public get hybridDeploymentAgentId() {
    return this.getStringAttribute('hybrid_deployment_agent_id');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networking_method - computed: true, optional: false, required: false
  public get networkingMethod() {
    return this.getStringAttribute('networking_method');
  }

  // pause_after_trial - computed: true, optional: false, required: false
  public get pauseAfterTrial() {
    return this.getBooleanAttribute('pause_after_trial');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // private_link_id - computed: true, optional: false, required: false
  public get privateLinkId() {
    return this.getStringAttribute('private_link_id');
  }

  // proxy_agent_id - computed: true, optional: false, required: false
  public get proxyAgentId() {
    return this.getStringAttribute('proxy_agent_id');
  }

  // schedule_type - computed: true, optional: false, required: false
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // succeeded_at - computed: true, optional: false, required: false
  public get succeededAt() {
    return this.getStringAttribute('succeeded_at');
  }

  // sync_frequency - computed: true, optional: false, required: false
  public get syncFrequency() {
    return this.getNumberAttribute('sync_frequency');
  }

  // config - computed: false, optional: false, required: false
  private _config = new DataFivetranConnectorConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // destination_schema - computed: false, optional: false, required: false
  private _destinationSchema = new DataFivetranConnectorDestinationSchemaOutputReference(this, "destination_schema");
  public get destinationSchema() {
    return this._destinationSchema;
  }

  // status - computed: false, optional: false, required: false
  private _status = new DataFivetranConnectorStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
