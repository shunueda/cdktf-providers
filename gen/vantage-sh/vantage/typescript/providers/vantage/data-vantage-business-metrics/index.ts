// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/business_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageBusinessMetricsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensions {
}

export function dataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensionsToTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensionsToHclTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensions | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensionsOutputReference {
    return new DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageBusinessMetricsBusinessMetricsCloudwatchFields {
}

export function dataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsToTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsCloudwatchFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsToHclTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsCloudwatchFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageBusinessMetricsBusinessMetricsCloudwatchFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBusinessMetricsBusinessMetricsCloudwatchFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dimensions - computed: true, optional: false, required: false
  private _dimensions = new DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }

  // label_dimension - computed: true, optional: false, required: false
  public get labelDimension() {
    return this.getStringAttribute('label_dimension');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // stat - computed: true, optional: false, required: false
  public get stat() {
    return this.getStringAttribute('stat');
  }
}
export interface DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadata {
}

export function dataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadataToTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadataToHclTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cost_report_token - computed: true, optional: false, required: false
  public get costReportToken() {
    return this.getStringAttribute('cost_report_token');
  }

  // label_filter - computed: true, optional: false, required: false
  public get labelFilter() {
    return this.getListAttribute('label_filter');
  }

  // unit_scale - computed: true, optional: false, required: false
  public get unitScale() {
    return this.getStringAttribute('unit_scale');
  }
}

export class DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadataOutputReference {
    return new DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageBusinessMetricsBusinessMetricsDatadogMetricFields {
}

export function dataVantageBusinessMetricsBusinessMetricsDatadogMetricFieldsToTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsDatadogMetricFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBusinessMetricsBusinessMetricsDatadogMetricFieldsToHclTerraform(struct?: DataVantageBusinessMetricsBusinessMetricsDatadogMetricFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBusinessMetricsBusinessMetricsDatadogMetricFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageBusinessMetricsBusinessMetricsDatadogMetricFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBusinessMetricsBusinessMetricsDatadogMetricFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }
}
export interface DataVantageBusinessMetricsBusinessMetrics {
}

export function dataVantageBusinessMetricsBusinessMetricsToTerraform(struct?: DataVantageBusinessMetricsBusinessMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBusinessMetricsBusinessMetricsToHclTerraform(struct?: DataVantageBusinessMetricsBusinessMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBusinessMetricsBusinessMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageBusinessMetricsBusinessMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBusinessMetricsBusinessMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloudwatch_fields - computed: true, optional: false, required: false
  private _cloudwatchFields = new DataVantageBusinessMetricsBusinessMetricsCloudwatchFieldsOutputReference(this, "cloudwatch_fields");
  public get cloudwatchFields() {
    return this._cloudwatchFields;
  }

  // cost_report_tokens_with_metadata - computed: true, optional: false, required: false
  private _costReportTokensWithMetadata = new DataVantageBusinessMetricsBusinessMetricsCostReportTokensWithMetadataList(this, "cost_report_tokens_with_metadata", false);
  public get costReportTokensWithMetadata() {
    return this._costReportTokensWithMetadata;
  }

  // created_by_token - computed: true, optional: false, required: false
  public get createdByToken() {
    return this.getStringAttribute('created_by_token');
  }

  // datadog_metric_fields - computed: true, optional: false, required: false
  private _datadogMetricFields = new DataVantageBusinessMetricsBusinessMetricsDatadogMetricFieldsOutputReference(this, "datadog_metric_fields");
  public get datadogMetricFields() {
    return this._datadogMetricFields;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_type - computed: true, optional: false, required: false
  public get importType() {
    return this.getStringAttribute('import_type');
  }

  // integration_token - computed: true, optional: false, required: false
  public get integrationToken() {
    return this.getStringAttribute('integration_token');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class DataVantageBusinessMetricsBusinessMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBusinessMetricsBusinessMetricsOutputReference {
    return new DataVantageBusinessMetricsBusinessMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/business_metrics vantage_business_metrics}
*/
export class DataVantageBusinessMetrics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_business_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageBusinessMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageBusinessMetrics to import
  * @param importFromId The id of the existing DataVantageBusinessMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/business_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageBusinessMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_business_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/business_metrics vantage_business_metrics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageBusinessMetricsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageBusinessMetricsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_business_metrics',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_metrics - computed: true, optional: false, required: false
  private _businessMetrics = new DataVantageBusinessMetricsBusinessMetricsList(this, "business_metrics", false);
  public get businessMetrics() {
    return this._businessMetrics;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
