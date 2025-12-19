// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloudwatch configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#cloudwatch_fields BusinessMetric#cloudwatch_fields}
  */
  readonly cloudwatchFields?: BusinessMetricCloudwatchFields;
  /**
  * The tokens for any CostReports that use the BusinessMetric, the unit scale, and label filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#cost_report_tokens_with_metadata BusinessMetric#cost_report_tokens_with_metadata}
  */
  readonly costReportTokensWithMetadata?: BusinessMetricCostReportTokensWithMetadata[] | cdktf.IResolvable;
  /**
  * Datadog metric configuration fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#datadog_metric_fields BusinessMetric#datadog_metric_fields}
  */
  readonly datadogMetricFields?: BusinessMetricDatadogMetricFields;
  /**
  * The title of the BusinessMetrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#title BusinessMetric#title}
  */
  readonly title: string;
  /**
  * The dates, amounts, and (optional) labels for the BusinessMetric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#values BusinessMetric#values}
  */
  readonly values?: BusinessMetricValues[] | cdktf.IResolvable;
}
export interface BusinessMetricCloudwatchFieldsDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#name BusinessMetric#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#value BusinessMetric#value}
  */
  readonly value?: string;
}

export function businessMetricCloudwatchFieldsDimensionsToTerraform(struct?: BusinessMetricCloudwatchFieldsDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function businessMetricCloudwatchFieldsDimensionsToHclTerraform(struct?: BusinessMetricCloudwatchFieldsDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class BusinessMetricCloudwatchFieldsDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessMetricCloudwatchFieldsDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessMetricCloudwatchFieldsDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BusinessMetricCloudwatchFieldsDimensionsList extends cdktf.ComplexList {
  public internalValue? : BusinessMetricCloudwatchFieldsDimensions[] | cdktf.IResolvable

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
  public get(index: number): BusinessMetricCloudwatchFieldsDimensionsOutputReference {
    return new BusinessMetricCloudwatchFieldsDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessMetricCloudwatchFields {
  /**
  * The dimensions used to pull specific statistical data for Cloudwatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#dimensions BusinessMetric#dimensions}
  */
  readonly dimensions?: BusinessMetricCloudwatchFieldsDimensions[] | cdktf.IResolvable;
  /**
  * Integration token for the account from which you would like to fetch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#integration_token BusinessMetric#integration_token}
  */
  readonly integrationToken?: string;
  /**
  * The dimension used to aggregate the Cloudwatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#label_dimension BusinessMetric#label_dimension}
  */
  readonly labelDimension?: string;
  /**
  * The metric name used to import Cloudwatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#metric_name BusinessMetric#metric_name}
  */
  readonly metricName?: string;
  /**
  * The namespace used to import Cloudwatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#namespace BusinessMetric#namespace}
  */
  readonly namespace?: string;
  /**
  * The region used to import Cloudwatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#region BusinessMetric#region}
  */
  readonly region?: string;
  /**
  * The time aggregation function used to import Cloudwatch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#stat BusinessMetric#stat}
  */
  readonly stat?: string;
}

export function businessMetricCloudwatchFieldsToTerraform(struct?: BusinessMetricCloudwatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(businessMetricCloudwatchFieldsDimensionsToTerraform, false)(struct!.dimensions),
    integration_token: cdktf.stringToTerraform(struct!.integrationToken),
    label_dimension: cdktf.stringToTerraform(struct!.labelDimension),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    stat: cdktf.stringToTerraform(struct!.stat),
  }
}


export function businessMetricCloudwatchFieldsToHclTerraform(struct?: BusinessMetricCloudwatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(businessMetricCloudwatchFieldsDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "BusinessMetricCloudwatchFieldsDimensionsList",
    },
    integration_token: {
      value: cdktf.stringToHclTerraform(struct!.integrationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_dimension: {
      value: cdktf.stringToHclTerraform(struct!.labelDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessMetricCloudwatchFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BusinessMetricCloudwatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._integrationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationToken = this._integrationToken;
    }
    if (this._labelDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelDimension = this._labelDimension;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessMetricCloudwatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._integrationToken = undefined;
      this._labelDimension = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._stat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._integrationToken = value.integrationToken;
      this._labelDimension = value.labelDimension;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._region = value.region;
      this._stat = value.stat;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions = new BusinessMetricCloudwatchFieldsDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: BusinessMetricCloudwatchFieldsDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // integration_token - computed: true, optional: true, required: false
  private _integrationToken?: string; 
  public get integrationToken() {
    return this.getStringAttribute('integration_token');
  }
  public set integrationToken(value: string) {
    this._integrationToken = value;
  }
  public resetIntegrationToken() {
    this._integrationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTokenInput() {
    return this._integrationToken;
  }

  // label_dimension - computed: true, optional: true, required: false
  private _labelDimension?: string; 
  public get labelDimension() {
    return this.getStringAttribute('label_dimension');
  }
  public set labelDimension(value: string) {
    this._labelDimension = value;
  }
  public resetLabelDimension() {
    this._labelDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelDimensionInput() {
    return this._labelDimension;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // stat - computed: true, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }
}
export interface BusinessMetricCostReportTokensWithMetadata {
  /**
  * The token of the CostReport the BusinessMetric is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#cost_report_token BusinessMetric#cost_report_token}
  */
  readonly costReportToken: string;
  /**
  * Include only values with these labels in the CostReport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#label_filter BusinessMetric#label_filter}
  */
  readonly labelFilter?: string[];
  /**
  * Determines the scale of the BusinessMetric's values within the CostReport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#unit_scale BusinessMetric#unit_scale}
  */
  readonly unitScale?: string;
}

export function businessMetricCostReportTokensWithMetadataToTerraform(struct?: BusinessMetricCostReportTokensWithMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_report_token: cdktf.stringToTerraform(struct!.costReportToken),
    label_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelFilter),
    unit_scale: cdktf.stringToTerraform(struct!.unitScale),
  }
}


export function businessMetricCostReportTokensWithMetadataToHclTerraform(struct?: BusinessMetricCostReportTokensWithMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_report_token: {
      value: cdktf.stringToHclTerraform(struct!.costReportToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unit_scale: {
      value: cdktf.stringToHclTerraform(struct!.unitScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessMetricCostReportTokensWithMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessMetricCostReportTokensWithMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costReportToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.costReportToken = this._costReportToken;
    }
    if (this._labelFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelFilter = this._labelFilter;
    }
    if (this._unitScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.unitScale = this._unitScale;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessMetricCostReportTokensWithMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costReportToken = undefined;
      this._labelFilter = undefined;
      this._unitScale = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costReportToken = value.costReportToken;
      this._labelFilter = value.labelFilter;
      this._unitScale = value.unitScale;
    }
  }

  // cost_report_token - computed: true, optional: false, required: true
  private _costReportToken?: string; 
  public get costReportToken() {
    return this.getStringAttribute('cost_report_token');
  }
  public set costReportToken(value: string) {
    this._costReportToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costReportTokenInput() {
    return this._costReportToken;
  }

  // label_filter - computed: true, optional: true, required: false
  private _labelFilter?: string[]; 
  public get labelFilter() {
    return this.getListAttribute('label_filter');
  }
  public set labelFilter(value: string[]) {
    this._labelFilter = value;
  }
  public resetLabelFilter() {
    this._labelFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelFilterInput() {
    return this._labelFilter;
  }

  // unit_scale - computed: true, optional: true, required: false
  private _unitScale?: string; 
  public get unitScale() {
    return this.getStringAttribute('unit_scale');
  }
  public set unitScale(value: string) {
    this._unitScale = value;
  }
  public resetUnitScale() {
    this._unitScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitScaleInput() {
    return this._unitScale;
  }
}

export class BusinessMetricCostReportTokensWithMetadataList extends cdktf.ComplexList {
  public internalValue? : BusinessMetricCostReportTokensWithMetadata[] | cdktf.IResolvable

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
  public get(index: number): BusinessMetricCostReportTokensWithMetadataOutputReference {
    return new BusinessMetricCostReportTokensWithMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BusinessMetricDatadogMetricFields {
  /**
  * Integration token for the account from which you would like to fetch metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#integration_token BusinessMetric#integration_token}
  */
  readonly integrationToken?: string;
  /**
  * Datadog metrics query string. e.g. sum:aws.applicationelb.request_count{region:us-east-1}.rollup(avg,daily)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#query BusinessMetric#query}
  */
  readonly query?: string;
}

export function businessMetricDatadogMetricFieldsToTerraform(struct?: BusinessMetricDatadogMetricFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_token: cdktf.stringToTerraform(struct!.integrationToken),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function businessMetricDatadogMetricFieldsToHclTerraform(struct?: BusinessMetricDatadogMetricFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_token: {
      value: cdktf.stringToHclTerraform(struct!.integrationToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessMetricDatadogMetricFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BusinessMetricDatadogMetricFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationToken = this._integrationToken;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessMetricDatadogMetricFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationToken = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationToken = value.integrationToken;
      this._query = value.query;
    }
  }

  // integration_token - computed: true, optional: true, required: false
  private _integrationToken?: string; 
  public get integrationToken() {
    return this.getStringAttribute('integration_token');
  }
  public set integrationToken(value: string) {
    this._integrationToken = value;
  }
  public resetIntegrationToken() {
    this._integrationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTokenInput() {
    return this._integrationToken;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface BusinessMetricValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#amount BusinessMetric#amount}
  */
  readonly amount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#date BusinessMetric#date}
  */
  readonly date: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#label BusinessMetric#label}
  */
  readonly label?: string;
}

export function businessMetricValuesToTerraform(struct?: BusinessMetricValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    date: cdktf.stringToTerraform(struct!.date),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function businessMetricValuesToHclTerraform(struct?: BusinessMetricValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BusinessMetricValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BusinessMetricValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BusinessMetricValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._date = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._date = value.date;
      this._label = value.label;
    }
  }

  // amount - computed: true, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // date - computed: true, optional: false, required: true
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class BusinessMetricValuesList extends cdktf.ComplexList {
  public internalValue? : BusinessMetricValues[] | cdktf.IResolvable

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
  public get(index: number): BusinessMetricValuesOutputReference {
    return new BusinessMetricValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric vantage_business_metric}
*/
export class BusinessMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_business_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessMetric to import
  * @param importFromId The id of the existing BusinessMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_business_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/resources/business_metric vantage_business_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessMetricConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_business_metric',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.71',
        providerVersionConstraint: '0.1.71'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudwatchFields.internalValue = config.cloudwatchFields;
    this._costReportTokensWithMetadata.internalValue = config.costReportTokensWithMetadata;
    this._datadogMetricFields.internalValue = config.datadogMetricFields;
    this._title = config.title;
    this._values.internalValue = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloudwatch_fields - computed: true, optional: true, required: false
  private _cloudwatchFields = new BusinessMetricCloudwatchFieldsOutputReference(this, "cloudwatch_fields");
  public get cloudwatchFields() {
    return this._cloudwatchFields;
  }
  public putCloudwatchFields(value: BusinessMetricCloudwatchFields) {
    this._cloudwatchFields.internalValue = value;
  }
  public resetCloudwatchFields() {
    this._cloudwatchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchFieldsInput() {
    return this._cloudwatchFields.internalValue;
  }

  // cost_report_tokens_with_metadata - computed: true, optional: true, required: false
  private _costReportTokensWithMetadata = new BusinessMetricCostReportTokensWithMetadataList(this, "cost_report_tokens_with_metadata", false);
  public get costReportTokensWithMetadata() {
    return this._costReportTokensWithMetadata;
  }
  public putCostReportTokensWithMetadata(value: BusinessMetricCostReportTokensWithMetadata[] | cdktf.IResolvable) {
    this._costReportTokensWithMetadata.internalValue = value;
  }
  public resetCostReportTokensWithMetadata() {
    this._costReportTokensWithMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costReportTokensWithMetadataInput() {
    return this._costReportTokensWithMetadata.internalValue;
  }

  // created_by_token - computed: true, optional: false, required: false
  public get createdByToken() {
    return this.getStringAttribute('created_by_token');
  }

  // datadog_metric_fields - computed: true, optional: true, required: false
  private _datadogMetricFields = new BusinessMetricDatadogMetricFieldsOutputReference(this, "datadog_metric_fields");
  public get datadogMetricFields() {
    return this._datadogMetricFields;
  }
  public putDatadogMetricFields(value: BusinessMetricDatadogMetricFields) {
    this._datadogMetricFields.internalValue = value;
  }
  public resetDatadogMetricFields() {
    this._datadogMetricFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogMetricFieldsInput() {
    return this._datadogMetricFields.internalValue;
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

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // values - computed: true, optional: true, required: false
  private _values = new BusinessMetricValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: BusinessMetricValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloudwatch_fields: businessMetricCloudwatchFieldsToTerraform(this._cloudwatchFields.internalValue),
      cost_report_tokens_with_metadata: cdktf.listMapper(businessMetricCostReportTokensWithMetadataToTerraform, false)(this._costReportTokensWithMetadata.internalValue),
      datadog_metric_fields: businessMetricDatadogMetricFieldsToTerraform(this._datadogMetricFields.internalValue),
      title: cdktf.stringToTerraform(this._title),
      values: cdktf.listMapper(businessMetricValuesToTerraform, false)(this._values.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloudwatch_fields: {
        value: businessMetricCloudwatchFieldsToHclTerraform(this._cloudwatchFields.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BusinessMetricCloudwatchFields",
      },
      cost_report_tokens_with_metadata: {
        value: cdktf.listMapperHcl(businessMetricCostReportTokensWithMetadataToHclTerraform, false)(this._costReportTokensWithMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessMetricCostReportTokensWithMetadataList",
      },
      datadog_metric_fields: {
        value: businessMetricDatadogMetricFieldsToHclTerraform(this._datadogMetricFields.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BusinessMetricDatadogMetricFields",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      values: {
        value: cdktf.listMapperHcl(businessMetricValuesToHclTerraform, false)(this._values.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BusinessMetricValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
