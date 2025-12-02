// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMonitoringDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dashboard ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard#dashboard_id DataYandexMonitoringDashboard#dashboard_id}
  */
  readonly dashboardId?: string;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard#description DataYandexMonitoringDashboard#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard#folder_id DataYandexMonitoringDashboard#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard#id DataYandexMonitoringDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard#name DataYandexMonitoringDashboard#name}
  */
  readonly name?: string;
}
export interface DataYandexMonitoringDashboardParametrizationParametersCustom {
}

export function dataYandexMonitoringDashboardParametrizationParametersCustomToTerraform(struct?: DataYandexMonitoringDashboardParametrizationParametersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardParametrizationParametersCustomToHclTerraform(struct?: DataYandexMonitoringDashboardParametrizationParametersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardParametrizationParametersCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardParametrizationParametersCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardParametrizationParametersCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_values - computed: true, optional: false, required: false
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }

  // multiselectable - computed: true, optional: false, required: false
  public get multiselectable() {
    return this.getBooleanAttribute('multiselectable');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataYandexMonitoringDashboardParametrizationParametersCustomList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardParametrizationParametersCustomOutputReference {
    return new DataYandexMonitoringDashboardParametrizationParametersCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardParametrizationParametersLabelValues {
}

export function dataYandexMonitoringDashboardParametrizationParametersLabelValuesToTerraform(struct?: DataYandexMonitoringDashboardParametrizationParametersLabelValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardParametrizationParametersLabelValuesToHclTerraform(struct?: DataYandexMonitoringDashboardParametrizationParametersLabelValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardParametrizationParametersLabelValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardParametrizationParametersLabelValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardParametrizationParametersLabelValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_values - computed: true, optional: false, required: false
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // label_key - computed: true, optional: false, required: false
  public get labelKey() {
    return this.getStringAttribute('label_key');
  }

  // multiselectable - computed: true, optional: false, required: false
  public get multiselectable() {
    return this.getBooleanAttribute('multiselectable');
  }

  // selectors - computed: true, optional: false, required: false
  public get selectors() {
    return this.getStringAttribute('selectors');
  }
}

export class DataYandexMonitoringDashboardParametrizationParametersLabelValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardParametrizationParametersLabelValuesOutputReference {
    return new DataYandexMonitoringDashboardParametrizationParametersLabelValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardParametrizationParametersText {
}

export function dataYandexMonitoringDashboardParametrizationParametersTextToTerraform(struct?: DataYandexMonitoringDashboardParametrizationParametersText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardParametrizationParametersTextToHclTerraform(struct?: DataYandexMonitoringDashboardParametrizationParametersText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardParametrizationParametersTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardParametrizationParametersText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardParametrizationParametersText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
}

export class DataYandexMonitoringDashboardParametrizationParametersTextList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardParametrizationParametersTextOutputReference {
    return new DataYandexMonitoringDashboardParametrizationParametersTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardParametrizationParameters {
}

export function dataYandexMonitoringDashboardParametrizationParametersToTerraform(struct?: DataYandexMonitoringDashboardParametrizationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardParametrizationParametersToHclTerraform(struct?: DataYandexMonitoringDashboardParametrizationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardParametrizationParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardParametrizationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardParametrizationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom - computed: true, optional: false, required: false
  private _custom = new DataYandexMonitoringDashboardParametrizationParametersCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_values - computed: true, optional: false, required: false
  private _labelValues = new DataYandexMonitoringDashboardParametrizationParametersLabelValuesList(this, "label_values", false);
  public get labelValues() {
    return this._labelValues;
  }

  // text - computed: true, optional: false, required: false
  private _text = new DataYandexMonitoringDashboardParametrizationParametersTextList(this, "text", false);
  public get text() {
    return this._text;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }
}

export class DataYandexMonitoringDashboardParametrizationParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardParametrizationParametersOutputReference {
    return new DataYandexMonitoringDashboardParametrizationParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardParametrization {
}

export function dataYandexMonitoringDashboardParametrizationToTerraform(struct?: DataYandexMonitoringDashboardParametrization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardParametrizationToHclTerraform(struct?: DataYandexMonitoringDashboardParametrization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardParametrizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardParametrization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardParametrization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataYandexMonitoringDashboardParametrizationParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // selectors - computed: true, optional: false, required: false
  public get selectors() {
    return this.getStringAttribute('selectors');
  }
}

export class DataYandexMonitoringDashboardParametrizationList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardParametrizationOutputReference {
    return new DataYandexMonitoringDashboardParametrizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartNameHidingSettings {
}

export function dataYandexMonitoringDashboardWidgetsChartNameHidingSettingsToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartNameHidingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartNameHidingSettingsToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartNameHidingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartNameHidingSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartNameHidingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartNameHidingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // positive - computed: true, optional: false, required: false
  public get positive() {
    return this.getBooleanAttribute('positive');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartNameHidingSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartNameHidingSettingsOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartNameHidingSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartQueriesDownsampling {
}

export function dataYandexMonitoringDashboardWidgetsChartQueriesDownsamplingToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartQueriesDownsampling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartQueriesDownsamplingToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartQueriesDownsampling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartQueriesDownsamplingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartQueriesDownsampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartQueriesDownsampling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // gap_filling - computed: true, optional: false, required: false
  public get gapFilling() {
    return this.getStringAttribute('gap_filling');
  }

  // grid_aggregation - computed: true, optional: false, required: false
  public get gridAggregation() {
    return this.getStringAttribute('grid_aggregation');
  }

  // grid_interval - computed: true, optional: false, required: false
  public get gridInterval() {
    return this.getNumberAttribute('grid_interval');
  }

  // max_points - computed: true, optional: false, required: false
  public get maxPoints() {
    return this.getNumberAttribute('max_points');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartQueriesDownsamplingList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartQueriesDownsamplingOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartQueriesDownsamplingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartQueriesTarget {
}

export function dataYandexMonitoringDashboardWidgetsChartQueriesTargetToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartQueriesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartQueriesTargetToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartQueriesTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartQueriesTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartQueriesTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartQueriesTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // text_mode - computed: true, optional: false, required: false
  public get textMode() {
    return this.getBooleanAttribute('text_mode');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartQueriesTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartQueriesTargetOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartQueriesTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartQueries {
}

export function dataYandexMonitoringDashboardWidgetsChartQueriesToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartQueriesToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // downsampling - computed: true, optional: false, required: false
  private _downsampling = new DataYandexMonitoringDashboardWidgetsChartQueriesDownsamplingList(this, "downsampling", false);
  public get downsampling() {
    return this._downsampling;
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataYandexMonitoringDashboardWidgetsChartQueriesTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
}

export class DataYandexMonitoringDashboardWidgetsChartQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartQueriesOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettings {
}

export function dataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettingsToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettingsToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // grow_down - computed: true, optional: false, required: false
  public get growDown() {
    return this.getBooleanAttribute('grow_down');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // stack_name - computed: true, optional: false, required: false
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // yaxis_position - computed: true, optional: false, required: false
  public get yaxisPosition() {
    return this.getStringAttribute('yaxis_position');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettingsOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartSeriesOverrides {
}

export function dataYandexMonitoringDashboardWidgetsChartSeriesOverridesToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartSeriesOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartSeriesOverridesToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartSeriesOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartSeriesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartSeriesOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartSeriesOverrides | undefined) {
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

  // settings - computed: true, optional: false, required: false
  private _settings = new DataYandexMonitoringDashboardWidgetsChartSeriesOverridesSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }

  // target_index - computed: true, optional: false, required: false
  public get targetIndex() {
    return this.getStringAttribute('target_index');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartSeriesOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartSeriesOverridesOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartSeriesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // green_value - computed: true, optional: false, required: false
  public get greenValue() {
    return this.getStringAttribute('green_value');
  }

  // red_value - computed: true, optional: false, required: false
  public get redValue() {
    return this.getStringAttribute('red_value');
  }

  // violet_value - computed: true, optional: false, required: false
  public get violetValue() {
    return this.getStringAttribute('violet_value');
  }

  // yellow_value - computed: true, optional: false, required: false
  public get yellowValue() {
    return this.getStringAttribute('yellow_value');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automatic - computed: true, optional: false, required: false
  private _automatic = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsAutomaticList(this, "automatic", false);
  public get automatic() {
    return this._automatic;
  }

  // gradient - computed: true, optional: false, required: false
  private _gradient = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsGradientList(this, "gradient", false);
  public get gradient() {
    return this._gradient;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsStandardList(this, "standard", false);
  public get standard() {
    return this._standard;
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // green_value - computed: true, optional: false, required: false
  public get greenValue() {
    return this.getStringAttribute('green_value');
  }

  // red_value - computed: true, optional: false, required: false
  public get redValue() {
    return this.getStringAttribute('red_value');
  }

  // violet_value - computed: true, optional: false, required: false
  public get violetValue() {
    return this.getStringAttribute('violet_value');
  }

  // yellow_value - computed: true, optional: false, required: false
  public get yellowValue() {
    return this.getStringAttribute('yellow_value');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeft | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit_format - computed: true, optional: false, required: false
  public get unitFormat() {
    return this.getStringAttribute('unit_format');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max - computed: true, optional: false, required: false
  public get max() {
    return this.getStringAttribute('max');
  }

  // min - computed: true, optional: false, required: false
  public get min() {
    return this.getStringAttribute('min');
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit_format - computed: true, optional: false, required: false
  public get unitFormat() {
    return this.getStringAttribute('unit_format');
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // left - computed: true, optional: false, required: false
  private _left = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsLeftList(this, "left", false);
  public get left() {
    return this._left;
  }

  // right - computed: true, optional: false, required: false
  private _right = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsRightList(this, "right", false);
  public get right() {
    return this._right;
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChartVisualizationSettings {
}

export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartVisualizationSettingsToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChartVisualizationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChartVisualizationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChartVisualizationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregation - computed: true, optional: false, required: false
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }

  // color_scheme_settings - computed: true, optional: false, required: false
  private _colorSchemeSettings = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsColorSchemeSettingsList(this, "color_scheme_settings", false);
  public get colorSchemeSettings() {
    return this._colorSchemeSettings;
  }

  // heatmap_settings - computed: true, optional: false, required: false
  private _heatmapSettings = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsHeatmapSettingsList(this, "heatmap_settings", false);
  public get heatmapSettings() {
    return this._heatmapSettings;
  }

  // interpolate - computed: true, optional: false, required: false
  public get interpolate() {
    return this.getStringAttribute('interpolate');
  }

  // normalize - computed: true, optional: false, required: false
  public get normalize() {
    return this.getBooleanAttribute('normalize');
  }

  // show_labels - computed: true, optional: false, required: false
  public get showLabels() {
    return this.getBooleanAttribute('show_labels');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // yaxis_settings - computed: true, optional: false, required: false
  private _yaxisSettings = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsYaxisSettingsList(this, "yaxis_settings", false);
  public get yaxisSettings() {
    return this._yaxisSettings;
  }
}

export class DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsChart {
}

export function dataYandexMonitoringDashboardWidgetsChartToTerraform(struct?: DataYandexMonitoringDashboardWidgetsChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsChartToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsChart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsChartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chart_id - computed: true, optional: false, required: false
  public get chartId() {
    return this.getStringAttribute('chart_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_legend - computed: true, optional: false, required: false
  public get displayLegend() {
    return this.getBooleanAttribute('display_legend');
  }

  // freeze - computed: true, optional: false, required: false
  public get freeze() {
    return this.getStringAttribute('freeze');
  }

  // name_hiding_settings - computed: true, optional: false, required: false
  private _nameHidingSettings = new DataYandexMonitoringDashboardWidgetsChartNameHidingSettingsList(this, "name_hiding_settings", false);
  public get nameHidingSettings() {
    return this._nameHidingSettings;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexMonitoringDashboardWidgetsChartQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }

  // series_overrides - computed: true, optional: false, required: false
  private _seriesOverrides = new DataYandexMonitoringDashboardWidgetsChartSeriesOverridesList(this, "series_overrides", false);
  public get seriesOverrides() {
    return this._seriesOverrides;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // visualization_settings - computed: true, optional: false, required: false
  private _visualizationSettings = new DataYandexMonitoringDashboardWidgetsChartVisualizationSettingsList(this, "visualization_settings", false);
  public get visualizationSettings() {
    return this._visualizationSettings;
  }
}

export class DataYandexMonitoringDashboardWidgetsChartList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsChartOutputReference {
    return new DataYandexMonitoringDashboardWidgetsChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsPosition {
}

export function dataYandexMonitoringDashboardWidgetsPositionToTerraform(struct?: DataYandexMonitoringDashboardWidgetsPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsPositionToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsPosition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsPositionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsPosition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsPosition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // h - computed: true, optional: false, required: false
  public get h() {
    return this.getNumberAttribute('h');
  }

  // w - computed: true, optional: false, required: false
  public get w() {
    return this.getNumberAttribute('w');
  }

  // x - computed: true, optional: false, required: false
  public get x() {
    return this.getNumberAttribute('x');
  }

  // y - computed: true, optional: false, required: false
  public get y() {
    return this.getNumberAttribute('y');
  }
}

export class DataYandexMonitoringDashboardWidgetsPositionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsPositionOutputReference {
    return new DataYandexMonitoringDashboardWidgetsPositionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsText {
}

export function dataYandexMonitoringDashboardWidgetsTextToTerraform(struct?: DataYandexMonitoringDashboardWidgetsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsTextToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsTextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataYandexMonitoringDashboardWidgetsTextList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsTextOutputReference {
    return new DataYandexMonitoringDashboardWidgetsTextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgetsTitle {
}

export function dataYandexMonitoringDashboardWidgetsTitleToTerraform(struct?: DataYandexMonitoringDashboardWidgetsTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsTitleToHclTerraform(struct?: DataYandexMonitoringDashboardWidgetsTitle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsTitleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgetsTitle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgetsTitle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataYandexMonitoringDashboardWidgetsTitleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsTitleOutputReference {
    return new DataYandexMonitoringDashboardWidgetsTitleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexMonitoringDashboardWidgets {
}

export function dataYandexMonitoringDashboardWidgetsToTerraform(struct?: DataYandexMonitoringDashboardWidgets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexMonitoringDashboardWidgetsToHclTerraform(struct?: DataYandexMonitoringDashboardWidgets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexMonitoringDashboardWidgetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMonitoringDashboardWidgets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMonitoringDashboardWidgets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chart - computed: true, optional: false, required: false
  private _chart = new DataYandexMonitoringDashboardWidgetsChartList(this, "chart", false);
  public get chart() {
    return this._chart;
  }

  // position - computed: true, optional: false, required: false
  private _position = new DataYandexMonitoringDashboardWidgetsPositionList(this, "position", false);
  public get position() {
    return this._position;
  }

  // text - computed: true, optional: false, required: false
  private _text = new DataYandexMonitoringDashboardWidgetsTextList(this, "text", false);
  public get text() {
    return this._text;
  }

  // title - computed: true, optional: false, required: false
  private _title = new DataYandexMonitoringDashboardWidgetsTitleList(this, "title", false);
  public get title() {
    return this._title;
  }
}

export class DataYandexMonitoringDashboardWidgetsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexMonitoringDashboardWidgetsOutputReference {
    return new DataYandexMonitoringDashboardWidgetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard yandex_monitoring_dashboard}
*/
export class DataYandexMonitoringDashboard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_monitoring_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMonitoringDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMonitoringDashboard to import
  * @param importFromId The id of the existing DataYandexMonitoringDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMonitoringDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_monitoring_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/data-sources/monitoring_dashboard yandex_monitoring_dashboard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMonitoringDashboardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexMonitoringDashboardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_monitoring_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardId = config.dashboardId;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: false, optional: true, required: false
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  public resetDashboardId() {
    this._dashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: false, optional: true, required: false
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

  // parametrization - computed: true, optional: false, required: false
  private _parametrization = new DataYandexMonitoringDashboardParametrizationList(this, "parametrization", false);
  public get parametrization() {
    return this._parametrization;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // widgets - computed: true, optional: false, required: false
  private _widgets = new DataYandexMonitoringDashboardWidgetsList(this, "widgets", false);
  public get widgets() {
    return this._widgets;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
