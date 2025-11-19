// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#description MetricMetadata#description}
  */
  readonly description?: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#display_name MetricMetadata#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#id MetricMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (metric)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#metric_id MetricMetadata#metric_id}
  */
  readonly metricId: string;
  /**
  * Specifies which entity dimension should be used as the primary dimension. The property can only be configured for metrics ingested with the Metrics API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#source_entity_type MetricMetadata#source_entity_type}
  */
  readonly sourceEntityType?: string;
  /**
  * Tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#tags MetricMetadata#tags}
  */
  readonly tags?: string[];
  /**
  * Unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#unit MetricMetadata#unit}
  */
  readonly unit: string;
  /**
  * The raw value is stored in bits or bytes. The user interface can display it in these numeral systems:
  * 
  * Binary: 1 MiB = 1024 KiB = 1,048,576 bytes
  * 
  * Decimal: 1 MB = 1000 kB = 1,000,000 bytes
  * 
  * If not set, the decimal system is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#unit_display_format MetricMetadata#unit_display_format}
  */
  readonly unitDisplayFormat?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#dimensions MetricMetadata#dimensions}
  */
  readonly dimensions?: MetricMetadataDimensions;
  /**
  * metric_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#metric_properties MetricMetadata#metric_properties}
  */
  readonly metricProperties?: MetricMetadataMetricProperties;
}
export interface MetricMetadataDimensionsDimension {
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#display_name MetricMetadata#display_name}
  */
  readonly displayName?: string;
  /**
  * Dimension key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#key MetricMetadata#key}
  */
  readonly key: string;
}

export function metricMetadataDimensionsDimensionToTerraform(struct?: MetricMetadataDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function metricMetadataDimensionsDimensionToHclTerraform(struct?: MetricMetadataDimensionsDimension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricMetadataDimensionsDimensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricMetadataDimensionsDimension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricMetadataDimensionsDimension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._key = value.key;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

export class MetricMetadataDimensionsDimensionList extends cdktf.ComplexList {
  public internalValue? : MetricMetadataDimensionsDimension[] | cdktf.IResolvable

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
  public get(index: number): MetricMetadataDimensionsDimensionOutputReference {
    return new MetricMetadataDimensionsDimensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricMetadataDimensions {
  /**
  * dimension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#dimension MetricMetadata#dimension}
  */
  readonly dimension: MetricMetadataDimensionsDimension[] | cdktf.IResolvable;
}

export function metricMetadataDimensionsToTerraform(struct?: MetricMetadataDimensionsOutputReference | MetricMetadataDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.listMapper(metricMetadataDimensionsDimensionToTerraform, true)(struct!.dimension),
  }
}


export function metricMetadataDimensionsToHclTerraform(struct?: MetricMetadataDimensionsOutputReference | MetricMetadataDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.listMapperHcl(metricMetadataDimensionsDimensionToHclTerraform, true)(struct!.dimension),
      isBlock: true,
      type: "list",
      storageClassType: "MetricMetadataDimensionsDimensionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricMetadataDimensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricMetadataDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricMetadataDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension.internalValue = value.dimension;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension = new MetricMetadataDimensionsDimensionList(this, "dimension", false);
  public get dimension() {
    return this._dimension;
  }
  public putDimension(value: MetricMetadataDimensionsDimension[] | cdktf.IResolvable) {
    this._dimension.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension.internalValue;
  }
}
export interface MetricMetadataMetricProperties {
  /**
  * Whether (true or false) the metric is relevant to a problem's impact.
  * 
  * An impact-relevant metric is highly dependent on other metrics and changes because an underlying root-cause metric has changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#impact_relevant MetricMetadata#impact_relevant}
  */
  readonly impactRelevant?: boolean | cdktf.IResolvable;
  /**
  * The latency of the metric, in minutes. 
  * 
  *  The latency is the expected reporting delay (for example, caused by constraints of cloud vendors or other third-party data sources) between the observation of a metric data point and its availability in Dynatrace. 
  * 
  * The allowed value range is from 1 to 60 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#latency MetricMetadata#latency}
  */
  readonly latency?: number;
  /**
  * The maximum allowed value of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#max_value MetricMetadata#max_value}
  */
  readonly maxValue?: number;
  /**
  * The minimum allowed value of the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#min_value MetricMetadata#min_value}
  */
  readonly minValue?: number;
  /**
  * Whether (true or false) the metric is related to a root cause of a problem.
  * 
  * A root-cause relevant metric represents a strong indicator for a faulty component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#root_cause_relevant MetricMetadata#root_cause_relevant}
  */
  readonly rootCauseRelevant?: boolean | cdktf.IResolvable;
  /**
  * Possible Values: `Error`, `Score`, `Unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#value_type MetricMetadata#value_type}
  */
  readonly valueType: string;
}

export function metricMetadataMetricPropertiesToTerraform(struct?: MetricMetadataMetricPropertiesOutputReference | MetricMetadataMetricProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    impact_relevant: cdktf.booleanToTerraform(struct!.impactRelevant),
    latency: cdktf.numberToTerraform(struct!.latency),
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
    root_cause_relevant: cdktf.booleanToTerraform(struct!.rootCauseRelevant),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function metricMetadataMetricPropertiesToHclTerraform(struct?: MetricMetadataMetricPropertiesOutputReference | MetricMetadataMetricProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    impact_relevant: {
      value: cdktf.booleanToHclTerraform(struct!.impactRelevant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    latency: {
      value: cdktf.numberToHclTerraform(struct!.latency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_cause_relevant: {
      value: cdktf.booleanToHclTerraform(struct!.rootCauseRelevant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricMetadataMetricPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricMetadataMetricProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._impactRelevant !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactRelevant = this._impactRelevant;
    }
    if (this._latency !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency;
    }
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    if (this._rootCauseRelevant !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCauseRelevant = this._rootCauseRelevant;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricMetadataMetricProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._impactRelevant = undefined;
      this._latency = undefined;
      this._maxValue = undefined;
      this._minValue = undefined;
      this._rootCauseRelevant = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._impactRelevant = value.impactRelevant;
      this._latency = value.latency;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
      this._rootCauseRelevant = value.rootCauseRelevant;
      this._valueType = value.valueType;
    }
  }

  // impact_relevant - computed: false, optional: true, required: false
  private _impactRelevant?: boolean | cdktf.IResolvable; 
  public get impactRelevant() {
    return this.getBooleanAttribute('impact_relevant');
  }
  public set impactRelevant(value: boolean | cdktf.IResolvable) {
    this._impactRelevant = value;
  }
  public resetImpactRelevant() {
    this._impactRelevant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactRelevantInput() {
    return this._impactRelevant;
  }

  // latency - computed: false, optional: true, required: false
  private _latency?: number; 
  public get latency() {
    return this.getNumberAttribute('latency');
  }
  public set latency(value: number) {
    this._latency = value;
  }
  public resetLatency() {
    this._latency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency;
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }

  // root_cause_relevant - computed: false, optional: true, required: false
  private _rootCauseRelevant?: boolean | cdktf.IResolvable; 
  public get rootCauseRelevant() {
    return this.getBooleanAttribute('root_cause_relevant');
  }
  public set rootCauseRelevant(value: boolean | cdktf.IResolvable) {
    this._rootCauseRelevant = value;
  }
  public resetRootCauseRelevant() {
    this._rootCauseRelevant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCauseRelevantInput() {
    return this._rootCauseRelevant;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata dynatrace_metric_metadata}
*/
export class MetricMetadata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_metric_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricMetadata to import
  * @param importFromId The id of the existing MetricMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_metric_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/metric_metadata dynatrace_metric_metadata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: MetricMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_metric_metadata',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._metricId = config.metricId;
    this._sourceEntityType = config.sourceEntityType;
    this._tags = config.tags;
    this._unit = config.unit;
    this._unitDisplayFormat = config.unitDisplayFormat;
    this._dimensions.internalValue = config.dimensions;
    this._metricProperties.internalValue = config.metricProperties;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // source_entity_type - computed: false, optional: true, required: false
  private _sourceEntityType?: string; 
  public get sourceEntityType() {
    return this.getStringAttribute('source_entity_type');
  }
  public set sourceEntityType(value: string) {
    this._sourceEntityType = value;
  }
  public resetSourceEntityType() {
    this._sourceEntityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityTypeInput() {
    return this._sourceEntityType;
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

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // unit_display_format - computed: false, optional: true, required: false
  private _unitDisplayFormat?: string; 
  public get unitDisplayFormat() {
    return this.getStringAttribute('unit_display_format');
  }
  public set unitDisplayFormat(value: string) {
    this._unitDisplayFormat = value;
  }
  public resetUnitDisplayFormat() {
    this._unitDisplayFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitDisplayFormatInput() {
    return this._unitDisplayFormat;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new MetricMetadataDimensionsOutputReference(this, "dimensions");
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: MetricMetadataDimensions) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_properties - computed: false, optional: true, required: false
  private _metricProperties = new MetricMetadataMetricPropertiesOutputReference(this, "metric_properties");
  public get metricProperties() {
    return this._metricProperties;
  }
  public putMetricProperties(value: MetricMetadataMetricProperties) {
    this._metricProperties.internalValue = value;
  }
  public resetMetricProperties() {
    this._metricProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPropertiesInput() {
    return this._metricProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      metric_id: cdktf.stringToTerraform(this._metricId),
      source_entity_type: cdktf.stringToTerraform(this._sourceEntityType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      unit: cdktf.stringToTerraform(this._unit),
      unit_display_format: cdktf.stringToTerraform(this._unitDisplayFormat),
      dimensions: metricMetadataDimensionsToTerraform(this._dimensions.internalValue),
      metric_properties: metricMetadataMetricPropertiesToTerraform(this._metricProperties.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      metric_id: {
        value: cdktf.stringToHclTerraform(this._metricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_entity_type: {
        value: cdktf.stringToHclTerraform(this._sourceEntityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_display_format: {
        value: cdktf.stringToHclTerraform(this._unitDisplayFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimensions: {
        value: metricMetadataDimensionsToHclTerraform(this._dimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricMetadataDimensionsList",
      },
      metric_properties: {
        value: metricMetadataMetricPropertiesToHclTerraform(this._metricProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricMetadataMetricPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
