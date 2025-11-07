// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, denotes that this MetricProvider is the default MetricProvider of the Watchdog. This implies that they share the same service configuration, which the MetricProvider inherits from the Watchdog. This MetricProvider is created **automatically**, depending on the Watchdog, and cannot be deleted without also deleting the Watchdog.
  * 
  * ~> Default MetricProviders cannot be created directly, and must be imported to be managed by Terraform. Deleting a default MetricProvider from your Terraform configuration will only remove the resource from the state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#default MetricProvider#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * A Map of MetricInstances, which describe each Metric that the MetricProvider provides. The keys of this Map define the slugs of each provided metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#instances MetricProvider#instances}
  */
  readonly instances?: { [key: string]: MetricProviderInstances } | cdktf.IResolvable;
  /**
  * The service configuration for this MetricProvider, which describes how the given `instances` are provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#service MetricProvider#service}
  */
  readonly service?: MetricProviderService;
  /**
  * The Watchdog that owns this MetricProvider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#watchdog MetricProvider#watchdog}
  */
  readonly watchdog: string;
}
export interface MetricProviderInstances {
  /**
  * The kind of aggregation method to use in case multiple displayed data points share the same time-axis value (depending on the axis configured for time, by default x).
  * 
  * -> this field does not have any effect on the underlying data; it is purely cosmetic, and applied only when viewing the data on the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#aggregation MetricProvider#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Whether or not to show this metric on the Component that uses it (through the Watchdog).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#enabled MetricProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The kind of interpolation to use between points displayed in the graph (line plots only). One of `linear`, `step`, `basis`, `bundle`, or `cardinal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#interpolation MetricProvider#interpolation}
  */
  readonly interpolation?: string;
  /**
  * The kind of visualization to display the metric with. One of `line` or `bar`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#plot_type MetricProvider#plot_type}
  */
  readonly plotType?: string;
  /**
  * The title of the metric, displayed above its graph on the status page, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#title MetricProvider#title}
  */
  readonly title?: string;
  /**
  * The title of the metric, displayed above its graph on the status page, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#title_translations MetricProvider#title_translations}
  */
  readonly titleTranslations?: { [key: string]: string };
  /**
  * Whether or not to show this metric on the status page home.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#top_level_enabled MetricProvider#top_level_enabled}
  */
  readonly topLevelEnabled?: boolean | cdktf.IResolvable;
  /**
  * The title of the x-axis of this metric, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#x_title MetricProvider#x_title}
  */
  readonly xTitle?: string;
  /**
  * The title of the x-axis of this metric, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#x_title_translations MetricProvider#x_title_translations}
  */
  readonly xTitleTranslations?: { [key: string]: string };
  /**
  * The type of quantity represented by the x-axis. One of `time` or `measure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#x_type MetricProvider#x_type}
  */
  readonly xType?: string;
  /**
  * The least upper bound to display the y-axis on. The metric will always display up to at least this value on the y-axis regardless of the graphed data. If the graph exceeds this value, then the bound will be raised as much as necessary to accommodate the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#y_supremum MetricProvider#y_supremum}
  */
  readonly ySupremum?: number;
  /**
  * The title of the y-axis of this metric, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#y_title MetricProvider#y_title}
  */
  readonly yTitle?: string;
  /**
  * The title of the y-axis of this metric, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#y_title_translations MetricProvider#y_title_translations}
  */
  readonly yTitleTranslations?: { [key: string]: string };
  /**
  * The type of quantity represented by the y-axis. One of `time` or `measure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#y_type MetricProvider#y_type}
  */
  readonly yType?: string;
}

export function metricProviderInstancesToTerraform(struct?: MetricProviderInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interpolation: cdktf.stringToTerraform(struct!.interpolation),
    plot_type: cdktf.stringToTerraform(struct!.plotType),
    title: cdktf.stringToTerraform(struct!.title),
    title_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.titleTranslations),
    top_level_enabled: cdktf.booleanToTerraform(struct!.topLevelEnabled),
    x_title: cdktf.stringToTerraform(struct!.xTitle),
    x_title_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.xTitleTranslations),
    x_type: cdktf.stringToTerraform(struct!.xType),
    y_supremum: cdktf.numberToTerraform(struct!.ySupremum),
    y_title: cdktf.stringToTerraform(struct!.yTitle),
    y_title_translations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.yTitleTranslations),
    y_type: cdktf.stringToTerraform(struct!.yType),
  }
}


export function metricProviderInstancesToHclTerraform(struct?: MetricProviderInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interpolation: {
      value: cdktf.stringToHclTerraform(struct!.interpolation),
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
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.titleTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    top_level_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.topLevelEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_title: {
      value: cdktf.stringToHclTerraform(struct!.xTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_title_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.xTitleTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    x_type: {
      value: cdktf.stringToHclTerraform(struct!.xType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_supremum: {
      value: cdktf.numberToHclTerraform(struct!.ySupremum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y_title: {
      value: cdktf.stringToHclTerraform(struct!.yTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_title_translations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.yTitleTranslations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    y_type: {
      value: cdktf.stringToHclTerraform(struct!.yType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderInstancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): MetricProviderInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interpolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpolation = this._interpolation;
    }
    if (this._plotType !== undefined) {
      hasAnyValues = true;
      internalValueResult.plotType = this._plotType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleTranslations = this._titleTranslations;
    }
    if (this._topLevelEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.topLevelEnabled = this._topLevelEnabled;
    }
    if (this._xTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.xTitle = this._xTitle;
    }
    if (this._xTitleTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.xTitleTranslations = this._xTitleTranslations;
    }
    if (this._xType !== undefined) {
      hasAnyValues = true;
      internalValueResult.xType = this._xType;
    }
    if (this._ySupremum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ySupremum = this._ySupremum;
    }
    if (this._yTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.yTitle = this._yTitle;
    }
    if (this._yTitleTranslations !== undefined) {
      hasAnyValues = true;
      internalValueResult.yTitleTranslations = this._yTitleTranslations;
    }
    if (this._yType !== undefined) {
      hasAnyValues = true;
      internalValueResult.yType = this._yType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._enabled = undefined;
      this._interpolation = undefined;
      this._plotType = undefined;
      this._title = undefined;
      this._titleTranslations = undefined;
      this._topLevelEnabled = undefined;
      this._xTitle = undefined;
      this._xTitleTranslations = undefined;
      this._xType = undefined;
      this._ySupremum = undefined;
      this._yTitle = undefined;
      this._yTitleTranslations = undefined;
      this._yType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._enabled = value.enabled;
      this._interpolation = value.interpolation;
      this._plotType = value.plotType;
      this._title = value.title;
      this._titleTranslations = value.titleTranslations;
      this._topLevelEnabled = value.topLevelEnabled;
      this._xTitle = value.xTitle;
      this._xTitleTranslations = value.xTitleTranslations;
      this._xType = value.xType;
      this._ySupremum = value.ySupremum;
      this._yTitle = value.yTitle;
      this._yTitleTranslations = value.yTitleTranslations;
      this._yType = value.yType;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // definition_slug - computed: true, optional: false, required: false
  public get definitionSlug() {
    return this.getStringAttribute('definition_slug');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interpolation - computed: true, optional: true, required: false
  private _interpolation?: string; 
  public get interpolation() {
    return this.getStringAttribute('interpolation');
  }
  public set interpolation(value: string) {
    this._interpolation = value;
  }
  public resetInterpolation() {
    this._interpolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpolationInput() {
    return this._interpolation;
  }

  // plot_type - computed: true, optional: true, required: false
  private _plotType?: string; 
  public get plotType() {
    return this.getStringAttribute('plot_type');
  }
  public set plotType(value: string) {
    this._plotType = value;
  }
  public resetPlotType() {
    this._plotType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plotTypeInput() {
    return this._plotType;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // title - computed: true, optional: true, required: false
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

  // title_translations - computed: true, optional: true, required: false
  private _titleTranslations?: { [key: string]: string }; 
  public get titleTranslations() {
    return this.getStringMapAttribute('title_translations');
  }
  public set titleTranslations(value: { [key: string]: string }) {
    this._titleTranslations = value;
  }
  public resetTitleTranslations() {
    this._titleTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTranslationsInput() {
    return this._titleTranslations;
  }

  // top_level_enabled - computed: true, optional: true, required: false
  private _topLevelEnabled?: boolean | cdktf.IResolvable; 
  public get topLevelEnabled() {
    return this.getBooleanAttribute('top_level_enabled');
  }
  public set topLevelEnabled(value: boolean | cdktf.IResolvable) {
    this._topLevelEnabled = value;
  }
  public resetTopLevelEnabled() {
    this._topLevelEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topLevelEnabledInput() {
    return this._topLevelEnabled;
  }

  // x_title - computed: true, optional: true, required: false
  private _xTitle?: string; 
  public get xTitle() {
    return this.getStringAttribute('x_title');
  }
  public set xTitle(value: string) {
    this._xTitle = value;
  }
  public resetXTitle() {
    this._xTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xTitleInput() {
    return this._xTitle;
  }

  // x_title_translations - computed: true, optional: true, required: false
  private _xTitleTranslations?: { [key: string]: string }; 
  public get xTitleTranslations() {
    return this.getStringMapAttribute('x_title_translations');
  }
  public set xTitleTranslations(value: { [key: string]: string }) {
    this._xTitleTranslations = value;
  }
  public resetXTitleTranslations() {
    this._xTitleTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xTitleTranslationsInput() {
    return this._xTitleTranslations;
  }

  // x_type - computed: true, optional: true, required: false
  private _xType?: string; 
  public get xType() {
    return this.getStringAttribute('x_type');
  }
  public set xType(value: string) {
    this._xType = value;
  }
  public resetXType() {
    this._xType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xTypeInput() {
    return this._xType;
  }

  // y_supremum - computed: true, optional: true, required: false
  private _ySupremum?: number; 
  public get ySupremum() {
    return this.getNumberAttribute('y_supremum');
  }
  public set ySupremum(value: number) {
    this._ySupremum = value;
  }
  public resetYSupremum() {
    this._ySupremum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ySupremumInput() {
    return this._ySupremum;
  }

  // y_title - computed: true, optional: true, required: false
  private _yTitle?: string; 
  public get yTitle() {
    return this.getStringAttribute('y_title');
  }
  public set yTitle(value: string) {
    this._yTitle = value;
  }
  public resetYTitle() {
    this._yTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yTitleInput() {
    return this._yTitle;
  }

  // y_title_translations - computed: true, optional: true, required: false
  private _yTitleTranslations?: { [key: string]: string }; 
  public get yTitleTranslations() {
    return this.getStringMapAttribute('y_title_translations');
  }
  public set yTitleTranslations(value: { [key: string]: string }) {
    this._yTitleTranslations = value;
  }
  public resetYTitleTranslations() {
    this._yTitleTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yTitleTranslationsInput() {
    return this._yTitleTranslations;
  }

  // y_type - computed: true, optional: true, required: false
  private _yType?: string; 
  public get yType() {
    return this.getStringAttribute('y_type');
  }
  public set yType(value: string) {
    this._yType = value;
  }
  public resetYType() {
    this._yType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yTypeInput() {
    return this._yType;
  }
}

export class MetricProviderInstancesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: MetricProviderInstances } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): MetricProviderInstancesOutputReference {
    return new MetricProviderInstancesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface MetricProviderServiceBuiltin {
}

export function metricProviderServiceBuiltinToTerraform(struct?: MetricProviderServiceBuiltin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function metricProviderServiceBuiltinToHclTerraform(struct?: MetricProviderServiceBuiltin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MetricProviderServiceBuiltinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceBuiltin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceBuiltin | cdktf.IResolvable | undefined) {
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
}
export interface MetricProviderServiceDns {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_degraded_threshold MetricProvider#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_outage_threshold MetricProvider#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#frequency MetricProvider#frequency}
  */
  readonly frequency?: number;
  /**
  * An optional list of nameservers to make DNS queries with. This field is
  * ignored by SOA queries since they use the nameservers yielded by querying NS
  * on the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#nameservers MetricProvider#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#percentage_regions_failed_threshold MetricProvider#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The type of DNS record to query for on the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#record_type MetricProvider#record_type}
  */
  readonly recordType: string;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#regions MetricProvider#regions}
  */
  readonly regions: string[];
  /**
  * Whether `all` of the assertions in `responses_must_contain` must match the DNS response,
  * or rather just `any` of them (i.e. at least one).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_containment MetricProvider#response_containment}
  */
  readonly responseContainment?: string;
  /**
  * A set of assertions to make against the records yielded by the query. The
  * format of these assertions is *similar* to DNS record syntax, but is
  * slightly simplified and allows for only asserting parts of a record's RDATA,
  * rather than the entire thing. The check will fail depending on the value of
  * `response_containment`.
  * 
  *   This field is ignored by the SOA check, as it does not use assertions to
  * determine the validity of SOA records. Instead, we ensure that every
  * nameserver reported by querying NS on the target reports the same SOA serial.
  * If your target's nameservers report conflicting SOA serials, we consider the
  * check failed.
  * 
  *   **Example Assertions (for MX record type):**
  * ```json
  * [
  *   "10 mail.example.com",
  *   "spool.example.com",
  *   "mail2.example.com"
  * ]
  * ```
  * 
  *   Note above how we can assert both the priority and domain (*without* the
  * terminating period required by canonical DNS) of an MX record, or instead
  * simply the domain.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#responses_must_contain MetricProvider#responses_must_contain}
  */
  readonly responsesMustContain?: string[];
  /**
  * The domain/IP address that will be queried. IP addresses do not need to be
  * converted to the `z.y.x.w.in-addr.arpa` format, as this will be done
  * automatically; however, both formats are accepted.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#target MetricProvider#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#timeout MetricProvider#timeout}
  */
  readonly timeout?: number;
}

export function metricProviderServiceDnsToTerraform(struct?: MetricProviderServiceDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    record_type: cdktf.stringToTerraform(struct!.recordType),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_containment: cdktf.stringToTerraform(struct!.responseContainment),
    responses_must_contain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responsesMustContain),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function metricProviderServiceDnsToHclTerraform(struct?: MetricProviderServiceDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    record_type: {
      value: cdktf.stringToHclTerraform(struct!.recordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_containment: {
      value: cdktf.stringToHclTerraform(struct!.responseContainment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responses_must_contain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responsesMustContain),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._recordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordType = this._recordType;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseContainment !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseContainment = this._responseContainment;
    }
    if (this._responsesMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsesMustContain = this._responsesMustContain;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._nameservers = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._recordType = undefined;
      this._regions = undefined;
      this._responseContainment = undefined;
      this._responsesMustContain = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._nameservers = value.nameservers;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._recordType = value.recordType;
      this._regions = value.regions;
      this._responseContainment = value.responseContainment;
      this._responsesMustContain = value.responsesMustContain;
      this._target = value.target;
      this._timeout = value.timeout;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // nameservers - computed: true, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // record_type - computed: true, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // regions - computed: true, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_containment - computed: true, optional: true, required: false
  private _responseContainment?: string; 
  public get responseContainment() {
    return this.getStringAttribute('response_containment');
  }
  public set responseContainment(value: string) {
    this._responseContainment = value;
  }
  public resetResponseContainment() {
    this._responseContainment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseContainmentInput() {
    return this._responseContainment;
  }

  // responses_must_contain - computed: true, optional: true, required: false
  private _responsesMustContain?: string[]; 
  public get responsesMustContain() {
    return cdktf.Fn.tolist(this.getListAttribute('responses_must_contain'));
  }
  public set responsesMustContain(value: string[]) {
    this._responsesMustContain = value;
  }
  public resetResponsesMustContain() {
    this._responsesMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesMustContainInput() {
    return this._responsesMustContain;
  }

  // target - computed: true, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface MetricProviderServiceHttp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_degraded_threshold MetricProvider#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_outage_threshold MetricProvider#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * Follow any HTTP redirects given by the requested target. Please note that this check will only follow up to 9 redirects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#follow_redirects MetricProvider#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#frequency MetricProvider#frequency}
  */
  readonly frequency?: number;
  /**
  * A list of additional HTTP headers to send to the target. The following list of
  * header names are reserved and cannot be set by a check:
  * 
  * ```
  * Accept-Charset
  * Accept-Encoding
  * Authentication
  * Connection
  * Content-Length
  * Date
  * Host
  * Keep-Alive
  * Origin
  * Proxy-.*
  * Sec-.*
  * Referer
  * TE
  * Trailer
  * Transfer-Encoding
  * User-Agent
  * Via
  * ```
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#headers MetricProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * An optional HTTP Basic Authentication password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#password MetricProvider#password}
  */
  readonly password?: string;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#percentage_regions_failed_threshold MetricProvider#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#regions MetricProvider#regions}
  */
  readonly regions: string[];
  /**
  * This field supports two different matching modes (given by
  * `response_body_must_contain_mode`):
  * 
  *   `exact`: If the requested page does not contain this exact (case-sensitive)
  * string, then the check will fail.
  * 
  *   `regex`: If the requested page does not match against the given regex, then
  * the check will fail. [Click here](https://hund.io/help/documentation/regular-expressions) for
  * more information on the use and supported syntax of Hund regexes.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_body_must_contain MetricProvider#response_body_must_contain}
  */
  readonly responseBodyMustContain?: string;
  /**
  * The response containment mode; either `exact` or `regex`. The modes are discussed
  * under `response_body_must_contain`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_body_must_contain_mode MetricProvider#response_body_must_contain_mode}
  */
  readonly responseBodyMustContainMode?: string;
  /**
  * If the requested page does not return this response code, then the check will
  * fail.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_code_must_be MetricProvider#response_code_must_be}
  */
  readonly responseCodeMustBe?: number;
  /**
  * Require the target's TLS certificate to be valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#ssl_verify_peer MetricProvider#ssl_verify_peer}
  */
  readonly sslVerifyPeer?: boolean | cdktf.IResolvable;
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#target MetricProvider#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#timeout MetricProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * An optional HTTP Basic Authentication username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#username MetricProvider#username}
  */
  readonly username?: string;
}

export function metricProviderServiceHttpToTerraform(struct?: MetricProviderServiceHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    password: cdktf.stringToTerraform(struct!.password),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_body_must_contain: cdktf.stringToTerraform(struct!.responseBodyMustContain),
    response_body_must_contain_mode: cdktf.stringToTerraform(struct!.responseBodyMustContainMode),
    response_code_must_be: cdktf.numberToTerraform(struct!.responseCodeMustBe),
    ssl_verify_peer: cdktf.booleanToTerraform(struct!.sslVerifyPeer),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function metricProviderServiceHttpToHclTerraform(struct?: MetricProviderServiceHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_body_must_contain: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyMustContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_must_contain_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyMustContainMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code_must_be: {
      value: cdktf.numberToHclTerraform(struct!.responseCodeMustBe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_verify_peer: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerifyPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseBodyMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyMustContain = this._responseBodyMustContain;
    }
    if (this._responseBodyMustContainMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyMustContainMode = this._responseBodyMustContainMode;
    }
    if (this._responseCodeMustBe !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodeMustBe = this._responseCodeMustBe;
    }
    if (this._sslVerifyPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerifyPeer = this._sslVerifyPeer;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._followRedirects = undefined;
      this._frequency = undefined;
      this._headers = undefined;
      this._password = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._regions = undefined;
      this._responseBodyMustContain = undefined;
      this._responseBodyMustContainMode = undefined;
      this._responseCodeMustBe = undefined;
      this._sslVerifyPeer = undefined;
      this._target = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._followRedirects = value.followRedirects;
      this._frequency = value.frequency;
      this._headers = value.headers;
      this._password = value.password;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._regions = value.regions;
      this._responseBodyMustContain = value.responseBodyMustContain;
      this._responseBodyMustContainMode = value.responseBodyMustContainMode;
      this._responseCodeMustBe = value.responseCodeMustBe;
      this._sslVerifyPeer = value.sslVerifyPeer;
      this._target = value.target;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
  }

  // follow_redirects - computed: true, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // regions - computed: true, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_body_must_contain - computed: true, optional: true, required: false
  private _responseBodyMustContain?: string; 
  public get responseBodyMustContain() {
    return this.getStringAttribute('response_body_must_contain');
  }
  public set responseBodyMustContain(value: string) {
    this._responseBodyMustContain = value;
  }
  public resetResponseBodyMustContain() {
    this._responseBodyMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyMustContainInput() {
    return this._responseBodyMustContain;
  }

  // response_body_must_contain_mode - computed: true, optional: true, required: false
  private _responseBodyMustContainMode?: string; 
  public get responseBodyMustContainMode() {
    return this.getStringAttribute('response_body_must_contain_mode');
  }
  public set responseBodyMustContainMode(value: string) {
    this._responseBodyMustContainMode = value;
  }
  public resetResponseBodyMustContainMode() {
    this._responseBodyMustContainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyMustContainModeInput() {
    return this._responseBodyMustContainMode;
  }

  // response_code_must_be - computed: true, optional: true, required: false
  private _responseCodeMustBe?: number; 
  public get responseCodeMustBe() {
    return this.getNumberAttribute('response_code_must_be');
  }
  public set responseCodeMustBe(value: number) {
    this._responseCodeMustBe = value;
  }
  public resetResponseCodeMustBe() {
    this._responseCodeMustBe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeMustBeInput() {
    return this._responseCodeMustBe;
  }

  // ssl_verify_peer - computed: true, optional: true, required: false
  private _sslVerifyPeer?: boolean | cdktf.IResolvable; 
  public get sslVerifyPeer() {
    return this.getBooleanAttribute('ssl_verify_peer');
  }
  public set sslVerifyPeer(value: boolean | cdktf.IResolvable) {
    this._sslVerifyPeer = value;
  }
  public resetSslVerifyPeer() {
    this._sslVerifyPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyPeerInput() {
    return this._sslVerifyPeer;
  }

  // target - computed: true, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface MetricProviderServiceIcmp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_degraded_threshold MetricProvider#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_outage_threshold MetricProvider#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#frequency MetricProvider#frequency}
  */
  readonly frequency?: number;
  /**
  * The IP version to use when pinging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#ip_version MetricProvider#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The percentage of addresses at the given target that must fail for a region to be counted as failed. This option only matters when there are multiple IP addresses behind the target when the target is a domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#percentage_failed_threshold MetricProvider#percentage_failed_threshold}
  */
  readonly percentageFailedThreshold?: number;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#percentage_regions_failed_threshold MetricProvider#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#regions MetricProvider#regions}
  */
  readonly regions: string[];
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#target MetricProvider#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#timeout MetricProvider#timeout}
  */
  readonly timeout?: number;
}

export function metricProviderServiceIcmpToTerraform(struct?: MetricProviderServiceIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    percentage_failed_threshold: cdktf.numberToTerraform(struct!.percentageFailedThreshold),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function metricProviderServiceIcmpToHclTerraform(struct?: MetricProviderServiceIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._percentageFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageFailedThreshold = this._percentageFailedThreshold;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._ipVersion = undefined;
      this._percentageFailedThreshold = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._regions = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._ipVersion = value.ipVersion;
      this._percentageFailedThreshold = value.percentageFailedThreshold;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._regions = value.regions;
      this._target = value.target;
      this._timeout = value.timeout;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // percentage_failed_threshold - computed: true, optional: true, required: false
  private _percentageFailedThreshold?: number; 
  public get percentageFailedThreshold() {
    return this.getNumberAttribute('percentage_failed_threshold');
  }
  public set percentageFailedThreshold(value: number) {
    this._percentageFailedThreshold = value;
  }
  public resetPercentageFailedThreshold() {
    this._percentageFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageFailedThresholdInput() {
    return this._percentageFailedThreshold;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // regions - computed: true, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // target - computed: true, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface MetricProviderServicePingdom {
  /**
  * The Pingdom API v3 key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#api_token MetricProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * The ID of the check to pull status from on Pingdom.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#check_id MetricProvider#check_id}
  */
  readonly checkId: string;
  /**
  * The type of the Pingdom check. `check` denotes a normal Pingdom uptime check, and `transactional` denotes a Pingdom TMS check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#check_type MetricProvider#check_type}
  */
  readonly checkType?: string;
}

export function metricProviderServicePingdomToTerraform(struct?: MetricProviderServicePingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    check_id: cdktf.stringToTerraform(struct!.checkId),
    check_type: cdktf.stringToTerraform(struct!.checkType),
  }
}


export function metricProviderServicePingdomToHclTerraform(struct?: MetricProviderServicePingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_type: {
      value: cdktf.stringToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServicePingdomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServicePingdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServicePingdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._checkId = undefined;
      this._checkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._checkId = value.checkId;
      this._checkType = value.checkType;
    }
  }

  // api_token - computed: true, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // check_id - computed: true, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // check_type - computed: true, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }
}
export interface MetricProviderServiceTcp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_degraded_threshold MetricProvider#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_outage_threshold MetricProvider#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#frequency MetricProvider#frequency}
  */
  readonly frequency?: number;
  /**
  * The IP version to use when calling the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#ip_version MetricProvider#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#percentage_regions_failed_threshold MetricProvider#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The port at the target to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#port MetricProvider#port}
  */
  readonly port: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#regions MetricProvider#regions}
  */
  readonly regions: string[];
  /**
  * This field supports two different matching modes (given by `response_must_contain_mode`):
  * 
  *   `exact`: Text that the response from the target must contain exactly
  * (case-sensitive). In exact match mode, this field supports
  * [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *   `regex`: A regex that the response from the target must match against.
  * [Click here](https://hund.io/help/documentation/regular-expressions) for more information on
  * the use and supported syntax of Hund regexes.
  * 
  *   If you send data and expect the target to reply, you must populate this field.
  * Leaving this field blank will prevent the check from receiving data from the
  * target unless forced to wait for an initial response.
  * 
  *   The "response" from the target that this text is asserted against will be the
  * response from the target *after* sending data. If data is not sent to the
  * target, this text is asserted against the *initial* response.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_must_contain MetricProvider#response_must_contain}
  */
  readonly responseMustContain?: string;
  /**
  * The response containment mode; either `exact` or `regex`. The modes are discussed
  * under `response_must_contain`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_must_contain_mode MetricProvider#response_must_contain_mode}
  */
  readonly responseMustContainMode?: string;
  /**
  * Optional data to send to the target after connecting. If this field is left
  * blank, nothing is sent to the target after connecting. This field supports [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#send_data MetricProvider#send_data}
  */
  readonly sendData?: string;
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#target MetricProvider#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#timeout MetricProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * Whether or not to wait for an initial response from the target before sending
  * data or closing the connection.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#wait_for_initial_response MetricProvider#wait_for_initial_response}
  */
  readonly waitForInitialResponse?: boolean | cdktf.IResolvable;
}

export function metricProviderServiceTcpToTerraform(struct?: MetricProviderServiceTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    port: cdktf.numberToTerraform(struct!.port),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_must_contain: cdktf.stringToTerraform(struct!.responseMustContain),
    response_must_contain_mode: cdktf.stringToTerraform(struct!.responseMustContainMode),
    send_data: cdktf.stringToTerraform(struct!.sendData),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    wait_for_initial_response: cdktf.booleanToTerraform(struct!.waitForInitialResponse),
  }
}


export function metricProviderServiceTcpToHclTerraform(struct?: MetricProviderServiceTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_must_contain: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_must_contain_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContainMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_data: {
      value: cdktf.stringToHclTerraform(struct!.sendData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_initial_response: {
      value: cdktf.booleanToHclTerraform(struct!.waitForInitialResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContain = this._responseMustContain;
    }
    if (this._responseMustContainMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContainMode = this._responseMustContainMode;
    }
    if (this._sendData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendData = this._sendData;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._waitForInitialResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForInitialResponse = this._waitForInitialResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._ipVersion = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._port = undefined;
      this._regions = undefined;
      this._responseMustContain = undefined;
      this._responseMustContainMode = undefined;
      this._sendData = undefined;
      this._target = undefined;
      this._timeout = undefined;
      this._waitForInitialResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._ipVersion = value.ipVersion;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._port = value.port;
      this._regions = value.regions;
      this._responseMustContain = value.responseMustContain;
      this._responseMustContainMode = value.responseMustContainMode;
      this._sendData = value.sendData;
      this._target = value.target;
      this._timeout = value.timeout;
      this._waitForInitialResponse = value.waitForInitialResponse;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // port - computed: true, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // regions - computed: true, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_must_contain - computed: true, optional: true, required: false
  private _responseMustContain?: string; 
  public get responseMustContain() {
    return this.getStringAttribute('response_must_contain');
  }
  public set responseMustContain(value: string) {
    this._responseMustContain = value;
  }
  public resetResponseMustContain() {
    this._responseMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainInput() {
    return this._responseMustContain;
  }

  // response_must_contain_mode - computed: true, optional: true, required: false
  private _responseMustContainMode?: string; 
  public get responseMustContainMode() {
    return this.getStringAttribute('response_must_contain_mode');
  }
  public set responseMustContainMode(value: string) {
    this._responseMustContainMode = value;
  }
  public resetResponseMustContainMode() {
    this._responseMustContainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainModeInput() {
    return this._responseMustContainMode;
  }

  // send_data - computed: true, optional: true, required: false
  private _sendData?: string; 
  public get sendData() {
    return this.getStringAttribute('send_data');
  }
  public set sendData(value: string) {
    this._sendData = value;
  }
  public resetSendData() {
    this._sendData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDataInput() {
    return this._sendData;
  }

  // target - computed: true, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for_initial_response - computed: true, optional: true, required: false
  private _waitForInitialResponse?: boolean | cdktf.IResolvable; 
  public get waitForInitialResponse() {
    return this.getBooleanAttribute('wait_for_initial_response');
  }
  public set waitForInitialResponse(value: boolean | cdktf.IResolvable) {
    this._waitForInitialResponse = value;
  }
  public resetWaitForInitialResponse() {
    this._waitForInitialResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInitialResponseInput() {
    return this._waitForInitialResponse;
  }
}
export interface MetricProviderServiceUdp {
  /**
  * The number of consecutive failed checks required before posting a "degraded"
  * status.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When `null`, denotes that this check will not use a "degraded" stage
  * when encountering check failures.
  * 
  *   When 0, denotes that this check will post "degraded" upon the first check failure.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_degraded_threshold MetricProvider#consecutive_check_degraded_threshold}
  */
  readonly consecutiveCheckDegradedThreshold?: number;
  /**
  * The number of consecutive failed checks required before posting an "outage"
  * status. If `consecutive_check_degraded_threshold` is non-null, then the outage
  * will only be posted after degraded has posted according to its own threshold.
  * 
  *   Note that regardless of threshold settings, a component will post "operational"
  * whenever a check succeeds, thus resetting the consecutive check failure count.
  * 
  *   When 0, denotes that this check will post "outage" upon the first check failure
  * (or the first check failure after "degraded" has been posted in case
  * `consecutive_check_degraded_threshold` is set).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#consecutive_check_outage_threshold MetricProvider#consecutive_check_outage_threshold}
  */
  readonly consecutiveCheckOutageThreshold?: number;
  /**
  * The frequency of the check in milliseconds. The maximum frequency is every 30
  * seconds.
  * 
  * -> Any frequency greater than every 60 seconds will force the component
  * to become High-Frequency, at an additional cost. For specific pricing
  * information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#frequency MetricProvider#frequency}
  */
  readonly frequency?: number;
  /**
  * The IP version to use when calling the target.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#ip_version MetricProvider#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The percentage of regions that must report a failed check before the entire
  * check can be considered failed. Requiring at least two regions for this
  * threshold is recommended in order to confirm failures across regions.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#percentage_regions_failed_threshold MetricProvider#percentage_regions_failed_threshold}
  */
  readonly percentageRegionsFailedThreshold?: number;
  /**
  * The port at the target to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#port MetricProvider#port}
  */
  readonly port: number;
  /**
  * The regions you would like the target to be checked from. All regions are
  * weighted equally when calculating the outcome of a check. Currently, a single
  * check can use up to 8 regions simultaneously. Using at least two regions for a
  * single check is recommended in order to confirm failures across regions.
  * 
  * -> Each check may use up to **three** regions at no extra cost. Each region added to this check beyond the base three will incur an additional cost. For specific pricing information, please visit the [pricing](https://hund.io/pricing) page.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#regions MetricProvider#regions}
  */
  readonly regions: string[];
  /**
  * This field supports two different matching modes (given by `response_must_contain_mode`):
  * 
  *   `exact`: Text that the response from the target must contain exactly
  * (case-sensitive). In exact match mode, this field supports
  * [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *   `regex`: A regex that the response from the target must match against.
  * [Click here](https://hund.io/help/documentation/regular-expressions) for more information on
  * the use and supported syntax of Hund regexes.
  * 
  *   Leaving this field blank will still cause the check to wait for a response
  * from the target after sending data, though no assertions will be made about
  * the payload of the response.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_must_contain MetricProvider#response_must_contain}
  */
  readonly responseMustContain?: string;
  /**
  * The response containment mode; either `exact` or `regex`. The modes are discussed
  * under `response_must_contain`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#response_must_contain_mode MetricProvider#response_must_contain_mode}
  */
  readonly responseMustContainMode?: string;
  /**
  * Data to send to the target after connecting. Unlike in `tcp`, this
  * field is required. This field supports [escape codes](https://hund.io/help/documentation/text-field-escape-codes).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#send_data MetricProvider#send_data}
  */
  readonly sendData: string;
  /**
  * The host the check will make calls to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#target MetricProvider#target}
  */
  readonly target: string;
  /**
  * The maximum number of milliseconds the check should wait on the host before
  * failing.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#timeout MetricProvider#timeout}
  */
  readonly timeout?: number;
}

export function metricProviderServiceUdpToTerraform(struct?: MetricProviderServiceUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consecutive_check_degraded_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckDegradedThreshold),
    consecutive_check_outage_threshold: cdktf.numberToTerraform(struct!.consecutiveCheckOutageThreshold),
    frequency: cdktf.numberToTerraform(struct!.frequency),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    percentage_regions_failed_threshold: cdktf.numberToTerraform(struct!.percentageRegionsFailedThreshold),
    port: cdktf.numberToTerraform(struct!.port),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    response_must_contain: cdktf.stringToTerraform(struct!.responseMustContain),
    response_must_contain_mode: cdktf.stringToTerraform(struct!.responseMustContainMode),
    send_data: cdktf.stringToTerraform(struct!.sendData),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function metricProviderServiceUdpToHclTerraform(struct?: MetricProviderServiceUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consecutive_check_degraded_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckDegradedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_check_outage_threshold: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveCheckOutageThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.numberToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percentage_regions_failed_threshold: {
      value: cdktf.numberToHclTerraform(struct!.percentageRegionsFailedThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    response_must_contain: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_must_contain_mode: {
      value: cdktf.stringToHclTerraform(struct!.responseMustContainMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_data: {
      value: cdktf.stringToHclTerraform(struct!.sendData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consecutiveCheckDegradedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckDegradedThreshold = this._consecutiveCheckDegradedThreshold;
    }
    if (this._consecutiveCheckOutageThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveCheckOutageThreshold = this._consecutiveCheckOutageThreshold;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._percentageRegionsFailedThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentageRegionsFailedThreshold = this._percentageRegionsFailedThreshold;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._responseMustContain !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContain = this._responseMustContain;
    }
    if (this._responseMustContainMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMustContainMode = this._responseMustContainMode;
    }
    if (this._sendData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendData = this._sendData;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = undefined;
      this._consecutiveCheckOutageThreshold = undefined;
      this._frequency = undefined;
      this._ipVersion = undefined;
      this._percentageRegionsFailedThreshold = undefined;
      this._port = undefined;
      this._regions = undefined;
      this._responseMustContain = undefined;
      this._responseMustContainMode = undefined;
      this._sendData = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consecutiveCheckDegradedThreshold = value.consecutiveCheckDegradedThreshold;
      this._consecutiveCheckOutageThreshold = value.consecutiveCheckOutageThreshold;
      this._frequency = value.frequency;
      this._ipVersion = value.ipVersion;
      this._percentageRegionsFailedThreshold = value.percentageRegionsFailedThreshold;
      this._port = value.port;
      this._regions = value.regions;
      this._responseMustContain = value.responseMustContain;
      this._responseMustContainMode = value.responseMustContainMode;
      this._sendData = value.sendData;
      this._target = value.target;
      this._timeout = value.timeout;
    }
  }

  // consecutive_check_degraded_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckDegradedThreshold?: number; 
  public get consecutiveCheckDegradedThreshold() {
    return this.getNumberAttribute('consecutive_check_degraded_threshold');
  }
  public set consecutiveCheckDegradedThreshold(value: number) {
    this._consecutiveCheckDegradedThreshold = value;
  }
  public resetConsecutiveCheckDegradedThreshold() {
    this._consecutiveCheckDegradedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckDegradedThresholdInput() {
    return this._consecutiveCheckDegradedThreshold;
  }

  // consecutive_check_outage_threshold - computed: true, optional: true, required: false
  private _consecutiveCheckOutageThreshold?: number; 
  public get consecutiveCheckOutageThreshold() {
    return this.getNumberAttribute('consecutive_check_outage_threshold');
  }
  public set consecutiveCheckOutageThreshold(value: number) {
    this._consecutiveCheckOutageThreshold = value;
  }
  public resetConsecutiveCheckOutageThreshold() {
    this._consecutiveCheckOutageThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveCheckOutageThresholdInput() {
    return this._consecutiveCheckOutageThreshold;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // percentage_regions_failed_threshold - computed: true, optional: true, required: false
  private _percentageRegionsFailedThreshold?: number; 
  public get percentageRegionsFailedThreshold() {
    return this.getNumberAttribute('percentage_regions_failed_threshold');
  }
  public set percentageRegionsFailedThreshold(value: number) {
    this._percentageRegionsFailedThreshold = value;
  }
  public resetPercentageRegionsFailedThreshold() {
    this._percentageRegionsFailedThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageRegionsFailedThresholdInput() {
    return this._percentageRegionsFailedThreshold;
  }

  // port - computed: true, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // regions - computed: true, optional: false, required: true
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // response_must_contain - computed: true, optional: true, required: false
  private _responseMustContain?: string; 
  public get responseMustContain() {
    return this.getStringAttribute('response_must_contain');
  }
  public set responseMustContain(value: string) {
    this._responseMustContain = value;
  }
  public resetResponseMustContain() {
    this._responseMustContain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainInput() {
    return this._responseMustContain;
  }

  // response_must_contain_mode - computed: true, optional: true, required: false
  private _responseMustContainMode?: string; 
  public get responseMustContainMode() {
    return this.getStringAttribute('response_must_contain_mode');
  }
  public set responseMustContainMode(value: string) {
    this._responseMustContainMode = value;
  }
  public resetResponseMustContainMode() {
    this._responseMustContainMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMustContainModeInput() {
    return this._responseMustContainMode;
  }

  // send_data - computed: true, optional: false, required: true
  private _sendData?: string; 
  public get sendData() {
    return this.getStringAttribute('send_data');
  }
  public set sendData(value: string) {
    this._sendData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDataInput() {
    return this._sendData;
  }

  // target - computed: true, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface MetricProviderServiceUpdown {
  /**
  * An Updown.io monitor API key. This API key can be read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#monitor_api_key MetricProvider#monitor_api_key}
  */
  readonly monitorApiKey: string;
  /**
  * An Updown.io monitor token to retrieve status from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#monitor_token MetricProvider#monitor_token}
  */
  readonly monitorToken: string;
}

export function metricProviderServiceUpdownToTerraform(struct?: MetricProviderServiceUpdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_api_key: cdktf.stringToTerraform(struct!.monitorApiKey),
    monitor_token: cdktf.stringToTerraform(struct!.monitorToken),
  }
}


export function metricProviderServiceUpdownToHclTerraform(struct?: MetricProviderServiceUpdown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_api_key: {
      value: cdktf.stringToHclTerraform(struct!.monitorApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_token: {
      value: cdktf.stringToHclTerraform(struct!.monitorToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceUpdownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceUpdown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorApiKey = this._monitorApiKey;
    }
    if (this._monitorToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorToken = this._monitorToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceUpdown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorApiKey = undefined;
      this._monitorToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorApiKey = value.monitorApiKey;
      this._monitorToken = value.monitorToken;
    }
  }

  // monitor_api_key - computed: true, optional: false, required: true
  private _monitorApiKey?: string; 
  public get monitorApiKey() {
    return this.getStringAttribute('monitor_api_key');
  }
  public set monitorApiKey(value: string) {
    this._monitorApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorApiKeyInput() {
    return this._monitorApiKey;
  }

  // monitor_token - computed: true, optional: false, required: true
  private _monitorToken?: string; 
  public get monitorToken() {
    return this.getStringAttribute('monitor_token');
  }
  public set monitorToken(value: string) {
    this._monitorToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTokenInput() {
    return this._monitorToken;
  }
}
export interface MetricProviderServiceUptimerobot {
  /**
  * An Uptime Robot monitor API key to retrieve status from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#monitor_api_key MetricProvider#monitor_api_key}
  */
  readonly monitorApiKey: string;
}

export function metricProviderServiceUptimerobotToTerraform(struct?: MetricProviderServiceUptimerobot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_api_key: cdktf.stringToTerraform(struct!.monitorApiKey),
  }
}


export function metricProviderServiceUptimerobotToHclTerraform(struct?: MetricProviderServiceUptimerobot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_api_key: {
      value: cdktf.stringToHclTerraform(struct!.monitorApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceUptimerobotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceUptimerobot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorApiKey = this._monitorApiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceUptimerobot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorApiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorApiKey = value.monitorApiKey;
    }
  }

  // monitor_api_key - computed: true, optional: false, required: true
  private _monitorApiKey?: string; 
  public get monitorApiKey() {
    return this.getStringAttribute('monitor_api_key');
  }
  public set monitorApiKey(value: string) {
    this._monitorApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorApiKeyInput() {
    return this._monitorApiKey;
  }
}
export interface MetricProviderServiceWebhook {
  /**
  * The key to use for this webhook, expected in request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#webhook_key MetricProvider#webhook_key}
  */
  readonly webhookKey?: string;
}

export function metricProviderServiceWebhookToTerraform(struct?: MetricProviderServiceWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    webhook_key: cdktf.stringToTerraform(struct!.webhookKey),
  }
}


export function metricProviderServiceWebhookToHclTerraform(struct?: MetricProviderServiceWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    webhook_key: {
      value: cdktf.stringToHclTerraform(struct!.webhookKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderServiceWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webhookKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookKey = this._webhookKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderServiceWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._webhookKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._webhookKey = value.webhookKey;
    }
  }

  // webhook_key - computed: true, optional: true, required: false
  private _webhookKey?: string; 
  public get webhookKey() {
    return this.getStringAttribute('webhook_key');
  }
  public set webhookKey(value: string) {
    this._webhookKey = value;
  }
  public resetWebhookKey() {
    this._webhookKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookKeyInput() {
    return this._webhookKey;
  }
}
export interface MetricProviderService {
  /**
  * The builtin Hund metric provider, which provides metrics based on recorded uptime and incidents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#builtin MetricProvider#builtin}
  */
  readonly builtin?: MetricProviderServiceBuiltin;
  /**
  * A Hund Native Monitoring DNS Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#dns MetricProvider#dns}
  */
  readonly dns?: MetricProviderServiceDns;
  /**
  * A Hund Native Monitoring HTTP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#http MetricProvider#http}
  */
  readonly http?: MetricProviderServiceHttp;
  /**
  * A Hund Native Monitoring ICMP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#icmp MetricProvider#icmp}
  */
  readonly icmp?: MetricProviderServiceIcmp;
  /**
  * A [pingdom](https://www.pingdom.com) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#pingdom MetricProvider#pingdom}
  */
  readonly pingdom?: MetricProviderServicePingdom;
  /**
  * A Hund Native Monitoring TCP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#tcp MetricProvider#tcp}
  */
  readonly tcp?: MetricProviderServiceTcp;
  /**
  * A Hund Native Monitoring UDP Check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#udp MetricProvider#udp}
  */
  readonly udp?: MetricProviderServiceUdp;
  /**
  * An [Updown.io](https://updown.io) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#updown MetricProvider#updown}
  */
  readonly updown?: MetricProviderServiceUpdown;
  /**
  * An [Uptime Robot](https://uptimerobot.com) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#uptimerobot MetricProvider#uptimerobot}
  */
  readonly uptimerobot?: MetricProviderServiceUptimerobot;
  /**
  * A [webhook](https://hund.io/help/documentation/incoming-webhook-metrics) service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#webhook MetricProvider#webhook}
  */
  readonly webhook?: MetricProviderServiceWebhook;
}

export function metricProviderServiceToTerraform(struct?: MetricProviderService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    builtin: metricProviderServiceBuiltinToTerraform(struct!.builtin),
    dns: metricProviderServiceDnsToTerraform(struct!.dns),
    http: metricProviderServiceHttpToTerraform(struct!.http),
    icmp: metricProviderServiceIcmpToTerraform(struct!.icmp),
    pingdom: metricProviderServicePingdomToTerraform(struct!.pingdom),
    tcp: metricProviderServiceTcpToTerraform(struct!.tcp),
    udp: metricProviderServiceUdpToTerraform(struct!.udp),
    updown: metricProviderServiceUpdownToTerraform(struct!.updown),
    uptimerobot: metricProviderServiceUptimerobotToTerraform(struct!.uptimerobot),
    webhook: metricProviderServiceWebhookToTerraform(struct!.webhook),
  }
}


export function metricProviderServiceToHclTerraform(struct?: MetricProviderService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    builtin: {
      value: metricProviderServiceBuiltinToHclTerraform(struct!.builtin),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceBuiltin",
    },
    dns: {
      value: metricProviderServiceDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceDns",
    },
    http: {
      value: metricProviderServiceHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceHttp",
    },
    icmp: {
      value: metricProviderServiceIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceIcmp",
    },
    pingdom: {
      value: metricProviderServicePingdomToHclTerraform(struct!.pingdom),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServicePingdom",
    },
    tcp: {
      value: metricProviderServiceTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceTcp",
    },
    udp: {
      value: metricProviderServiceUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceUdp",
    },
    updown: {
      value: metricProviderServiceUpdownToHclTerraform(struct!.updown),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceUpdown",
    },
    uptimerobot: {
      value: metricProviderServiceUptimerobotToHclTerraform(struct!.uptimerobot),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceUptimerobot",
    },
    webhook: {
      value: metricProviderServiceWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "MetricProviderServiceWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricProviderServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricProviderService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._builtin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.builtin = this._builtin?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._pingdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingdom = this._pingdom?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    if (this._updown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updown = this._updown?.internalValue;
    }
    if (this._uptimerobot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uptimerobot = this._uptimerobot?.internalValue;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricProviderService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._builtin.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._http.internalValue = undefined;
      this._icmp.internalValue = undefined;
      this._pingdom.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
      this._updown.internalValue = undefined;
      this._uptimerobot.internalValue = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._builtin.internalValue = value.builtin;
      this._dns.internalValue = value.dns;
      this._http.internalValue = value.http;
      this._icmp.internalValue = value.icmp;
      this._pingdom.internalValue = value.pingdom;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
      this._updown.internalValue = value.updown;
      this._uptimerobot.internalValue = value.uptimerobot;
      this._webhook.internalValue = value.webhook;
    }
  }

  // builtin - computed: true, optional: true, required: false
  private _builtin = new MetricProviderServiceBuiltinOutputReference(this, "builtin");
  public get builtin() {
    return this._builtin;
  }
  public putBuiltin(value: MetricProviderServiceBuiltin) {
    this._builtin.internalValue = value;
  }
  public resetBuiltin() {
    this._builtin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinInput() {
    return this._builtin.internalValue;
  }

  // dns - computed: true, optional: true, required: false
  private _dns = new MetricProviderServiceDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: MetricProviderServiceDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // http - computed: true, optional: true, required: false
  private _http = new MetricProviderServiceHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: MetricProviderServiceHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // icmp - computed: true, optional: true, required: false
  private _icmp = new MetricProviderServiceIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: MetricProviderServiceIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // pingdom - computed: true, optional: true, required: false
  private _pingdom = new MetricProviderServicePingdomOutputReference(this, "pingdom");
  public get pingdom() {
    return this._pingdom;
  }
  public putPingdom(value: MetricProviderServicePingdom) {
    this._pingdom.internalValue = value;
  }
  public resetPingdom() {
    this._pingdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomInput() {
    return this._pingdom.internalValue;
  }

  // tcp - computed: true, optional: true, required: false
  private _tcp = new MetricProviderServiceTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: MetricProviderServiceTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: true, optional: true, required: false
  private _udp = new MetricProviderServiceUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: MetricProviderServiceUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }

  // updown - computed: true, optional: true, required: false
  private _updown = new MetricProviderServiceUpdownOutputReference(this, "updown");
  public get updown() {
    return this._updown;
  }
  public putUpdown(value: MetricProviderServiceUpdown) {
    this._updown.internalValue = value;
  }
  public resetUpdown() {
    this._updown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updownInput() {
    return this._updown.internalValue;
  }

  // uptimerobot - computed: true, optional: true, required: false
  private _uptimerobot = new MetricProviderServiceUptimerobotOutputReference(this, "uptimerobot");
  public get uptimerobot() {
    return this._uptimerobot;
  }
  public putUptimerobot(value: MetricProviderServiceUptimerobot) {
    this._uptimerobot.internalValue = value;
  }
  public resetUptimerobot() {
    this._uptimerobot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimerobotInput() {
    return this._uptimerobot.internalValue;
  }

  // webhook - computed: true, optional: true, required: false
  private _webhook = new MetricProviderServiceWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: MetricProviderServiceWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider hund_metric_provider}
*/
export class MetricProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_metric_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricProvider to import
  * @param importFromId The id of the existing MetricProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_metric_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/metric_provider hund_metric_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MetricProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'hund_metric_provider',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._instances.internalValue = config.instances;
    this._service.internalValue = config.service;
    this._watchdog = config.watchdog;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: true, required: false
  private _instances = new MetricProviderInstancesMap(this, "instances");
  public get instances() {
    return this._instances;
  }
  public putInstances(value: { [key: string]: MetricProviderInstances } | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  public resetInstances() {
    this._instances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new MetricProviderServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: MetricProviderService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // watchdog - computed: false, optional: false, required: true
  private _watchdog?: string; 
  public get watchdog() {
    return this.getStringAttribute('watchdog');
  }
  public set watchdog(value: string) {
    this._watchdog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get watchdogInput() {
    return this._watchdog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      instances: cdktf.hashMapper(metricProviderInstancesToTerraform)(this._instances.internalValue),
      service: metricProviderServiceToTerraform(this._service.internalValue),
      watchdog: cdktf.stringToTerraform(this._watchdog),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instances: {
        value: cdktf.hashMapperHcl(metricProviderInstancesToHclTerraform)(this._instances.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "MetricProviderInstancesMap",
      },
      service: {
        value: metricProviderServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetricProviderService",
      },
      watchdog: {
        value: cdktf.stringToHclTerraform(this._watchdog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
