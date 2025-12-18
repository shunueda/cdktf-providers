// https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomDashboardConfig extends cdktf.TerraformMetaArguments {
  /**
  * A short description of the dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#description CustomDashboard#description}
  */
  readonly description?: string;
  /**
  * A human-readable name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#name CustomDashboard#name}
  */
  readonly name: string;
  /**
  * dashboard_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#dashboard_item CustomDashboard#dashboard_item}
  */
  readonly dashboardItem?: CustomDashboardDashboardItem[] | cdktf.IResolvable;
}
export interface CustomDashboardDashboardItemDataSourceConfig {
  /**
  * The metrics to visualize. Valid options are defined by the selected data source: [stats.edge](https://www.fastly.com/documentation/reference/api/observability/custom-dashboards/metrics/edge/), [stats.domain](https://www.fastly.com/documentation/reference/api/observability/custom-dashboards/metrics/domain/), [stats.origin](https://www.fastly.com/documentation/reference/api/observability/custom-dashboards/metrics/origin/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#metrics CustomDashboard#metrics}
  */
  readonly metrics: string[];
}

export function customDashboardDashboardItemDataSourceConfigToTerraform(struct?: CustomDashboardDashboardItemDataSourceConfigOutputReference | CustomDashboardDashboardItemDataSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
  }
}


export function customDashboardDashboardItemDataSourceConfigToHclTerraform(struct?: CustomDashboardDashboardItemDataSourceConfigOutputReference | CustomDashboardDashboardItemDataSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardDashboardItemDataSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDashboardDashboardItemDataSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardDashboardItemDataSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metrics = value.metrics;
    }
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }
}
export interface CustomDashboardDashboardItemDataSource {
  /**
  * The source of the data to display. One of: `stats.edge`, `stats.domain`, `stats.origin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#type CustomDashboard#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#config CustomDashboard#config}
  */
  readonly config: CustomDashboardDashboardItemDataSourceConfig;
}

export function customDashboardDashboardItemDataSourceToTerraform(struct?: CustomDashboardDashboardItemDataSourceOutputReference | CustomDashboardDashboardItemDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: customDashboardDashboardItemDataSourceConfigToTerraform(struct!.config),
  }
}


export function customDashboardDashboardItemDataSourceToHclTerraform(struct?: CustomDashboardDashboardItemDataSourceOutputReference | CustomDashboardDashboardItemDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: customDashboardDashboardItemDataSourceConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDashboardDashboardItemDataSourceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardDashboardItemDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDashboardDashboardItemDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardDashboardItemDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
    }
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

  // config - computed: false, optional: false, required: true
  private _config = new CustomDashboardDashboardItemDataSourceConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CustomDashboardDashboardItemDataSourceConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface CustomDashboardDashboardItemVisualizationConfig {
  /**
  * The aggregation function to apply to the dataset. One of: `avg`, `sum`, `min`, `max`, `latest`, `p95`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#calculation_method CustomDashboard#calculation_method}
  */
  readonly calculationMethod?: string;
  /**
  * The units to use to format the data. One of: `number`, `bytes`, `percent`, `requests`, `responses`, `seconds`, `milliseconds`, `ratio`, `bitrate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#format CustomDashboard#format}
  */
  readonly format?: string;
  /**
  * The type of chart to display. One of: `line`, `bar`, `single-metric`, `donut`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#plot_type CustomDashboard#plot_type}
  */
  readonly plotType: string;
}

export function customDashboardDashboardItemVisualizationConfigToTerraform(struct?: CustomDashboardDashboardItemVisualizationConfigOutputReference | CustomDashboardDashboardItemVisualizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calculation_method: cdktf.stringToTerraform(struct!.calculationMethod),
    format: cdktf.stringToTerraform(struct!.format),
    plot_type: cdktf.stringToTerraform(struct!.plotType),
  }
}


export function customDashboardDashboardItemVisualizationConfigToHclTerraform(struct?: CustomDashboardDashboardItemVisualizationConfigOutputReference | CustomDashboardDashboardItemVisualizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calculation_method: {
      value: cdktf.stringToHclTerraform(struct!.calculationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plot_type: {
      value: cdktf.stringToHclTerraform(struct!.plotType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardDashboardItemVisualizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDashboardDashboardItemVisualizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calculationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.calculationMethod = this._calculationMethod;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._plotType !== undefined) {
      hasAnyValues = true;
      internalValueResult.plotType = this._plotType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardDashboardItemVisualizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._calculationMethod = undefined;
      this._format = undefined;
      this._plotType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._calculationMethod = value.calculationMethod;
      this._format = value.format;
      this._plotType = value.plotType;
    }
  }

  // calculation_method - computed: false, optional: true, required: false
  private _calculationMethod?: string; 
  public get calculationMethod() {
    return this.getStringAttribute('calculation_method');
  }
  public set calculationMethod(value: string) {
    this._calculationMethod = value;
  }
  public resetCalculationMethod() {
    this._calculationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calculationMethodInput() {
    return this._calculationMethod;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // plot_type - computed: false, optional: false, required: true
  private _plotType?: string; 
  public get plotType() {
    return this.getStringAttribute('plot_type');
  }
  public set plotType(value: string) {
    this._plotType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get plotTypeInput() {
    return this._plotType;
  }
}
export interface CustomDashboardDashboardItemVisualization {
  /**
  * The type of visualization to display. One of: `chart`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#type CustomDashboard#type}
  */
  readonly type: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#config CustomDashboard#config}
  */
  readonly config: CustomDashboardDashboardItemVisualizationConfig;
}

export function customDashboardDashboardItemVisualizationToTerraform(struct?: CustomDashboardDashboardItemVisualizationOutputReference | CustomDashboardDashboardItemVisualization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    config: customDashboardDashboardItemVisualizationConfigToTerraform(struct!.config),
  }
}


export function customDashboardDashboardItemVisualizationToHclTerraform(struct?: CustomDashboardDashboardItemVisualizationOutputReference | CustomDashboardDashboardItemVisualization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: customDashboardDashboardItemVisualizationConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDashboardDashboardItemVisualizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardDashboardItemVisualizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomDashboardDashboardItemVisualization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardDashboardItemVisualization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._config.internalValue = value.config;
    }
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

  // config - computed: false, optional: false, required: true
  private _config = new CustomDashboardDashboardItemVisualizationConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: CustomDashboardDashboardItemVisualizationConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface CustomDashboardDashboardItem {
  /**
  * Dashboard item identifier (alphanumeric). Must be unique, relative to other items in the same dashboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#id CustomDashboard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The number of columns for the dashboard item to span. Dashboards are rendered on a 12-column grid on "desktop" screen sizes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#span CustomDashboard#span}
  */
  readonly span?: number;
  /**
  * A human-readable subtitle for the dashboard item. Often a description of the visualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#subtitle CustomDashboard#subtitle}
  */
  readonly subtitle: string;
  /**
  * A human-readable title for the dashboard item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#title CustomDashboard#title}
  */
  readonly title: string;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#data_source CustomDashboard#data_source}
  */
  readonly dataSource: CustomDashboardDashboardItemDataSource;
  /**
  * visualization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#visualization CustomDashboard#visualization}
  */
  readonly visualization: CustomDashboardDashboardItemVisualization;
}

export function customDashboardDashboardItemToTerraform(struct?: CustomDashboardDashboardItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    span: cdktf.numberToTerraform(struct!.span),
    subtitle: cdktf.stringToTerraform(struct!.subtitle),
    title: cdktf.stringToTerraform(struct!.title),
    data_source: customDashboardDashboardItemDataSourceToTerraform(struct!.dataSource),
    visualization: customDashboardDashboardItemVisualizationToTerraform(struct!.visualization),
  }
}


export function customDashboardDashboardItemToHclTerraform(struct?: CustomDashboardDashboardItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    span: {
      value: cdktf.numberToHclTerraform(struct!.span),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subtitle: {
      value: cdktf.stringToHclTerraform(struct!.subtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: customDashboardDashboardItemDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDashboardDashboardItemDataSourceList",
    },
    visualization: {
      value: customDashboardDashboardItemVisualizationToHclTerraform(struct!.visualization),
      isBlock: true,
      type: "list",
      storageClassType: "CustomDashboardDashboardItemVisualizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomDashboardDashboardItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CustomDashboardDashboardItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._span !== undefined) {
      hasAnyValues = true;
      internalValueResult.span = this._span;
    }
    if (this._subtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitle = this._subtitle;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._visualization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualization = this._visualization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDashboardDashboardItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._span = undefined;
      this._subtitle = undefined;
      this._title = undefined;
      this._dataSource.internalValue = undefined;
      this._visualization.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._span = value.span;
      this._subtitle = value.subtitle;
      this._title = value.title;
      this._dataSource.internalValue = value.dataSource;
      this._visualization.internalValue = value.visualization;
    }
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

  // span - computed: false, optional: true, required: false
  private _span?: number; 
  public get span() {
    return this.getNumberAttribute('span');
  }
  public set span(value: number) {
    this._span = value;
  }
  public resetSpan() {
    this._span = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span;
  }

  // subtitle - computed: false, optional: false, required: true
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
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

  // data_source - computed: false, optional: false, required: true
  private _dataSource = new CustomDashboardDashboardItemDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: CustomDashboardDashboardItemDataSource) {
    this._dataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // visualization - computed: false, optional: false, required: true
  private _visualization = new CustomDashboardDashboardItemVisualizationOutputReference(this, "visualization");
  public get visualization() {
    return this._visualization;
  }
  public putVisualization(value: CustomDashboardDashboardItemVisualization) {
    this._visualization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visualizationInput() {
    return this._visualization.internalValue;
  }
}

export class CustomDashboardDashboardItemList extends cdktf.ComplexList {
  public internalValue? : CustomDashboardDashboardItem[] | cdktf.IResolvable

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
  public get(index: number): CustomDashboardDashboardItemOutputReference {
    return new CustomDashboardDashboardItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard fastly_custom_dashboard}
*/
export class CustomDashboard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_custom_dashboard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomDashboard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomDashboard to import
  * @param importFromId The id of the existing CustomDashboard that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomDashboard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_custom_dashboard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.6.0/docs/resources/custom_dashboard fastly_custom_dashboard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomDashboardConfig
  */
  public constructor(scope: Construct, id: string, config: CustomDashboardConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_custom_dashboard',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.6.0',
        providerVersionConstraint: '8.6.0'
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
    this._name = config.name;
    this._dashboardItem.internalValue = config.dashboardItem;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // dashboard_item - computed: false, optional: true, required: false
  private _dashboardItem = new CustomDashboardDashboardItemList(this, "dashboard_item", false);
  public get dashboardItem() {
    return this._dashboardItem;
  }
  public putDashboardItem(value: CustomDashboardDashboardItem[] | cdktf.IResolvable) {
    this._dashboardItem.internalValue = value;
  }
  public resetDashboardItem() {
    this._dashboardItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardItemInput() {
    return this._dashboardItem.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      dashboard_item: cdktf.listMapper(customDashboardDashboardItemToTerraform, true)(this._dashboardItem.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dashboard_item: {
        value: cdktf.listMapperHcl(customDashboardDashboardItemToHclTerraform, true)(this._dashboardItem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomDashboardDashboardItemList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
