// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricEventsConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#enabled MetricEvents#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Controls the preferred entity type used for triggered events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#event_entity_dimension_key MetricEvents#event_entity_dimension_key}
  */
  readonly eventEntityDimensionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#id MetricEvents#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Config id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#legacy_id MetricEvents#legacy_id}
  */
  readonly legacyId?: string;
  /**
  * The textual summary of the metric event entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#summary MetricEvents#summary}
  */
  readonly summary: string;
  /**
  * event_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#event_template MetricEvents#event_template}
  */
  readonly eventTemplate: MetricEventsEventTemplate;
  /**
  * model_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#model_properties MetricEvents#model_properties}
  */
  readonly modelProperties: MetricEventsModelProperties;
  /**
  * query_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#query_definition MetricEvents#query_definition}
  */
  readonly queryDefinition: MetricEventsQueryDefinition;
}
export interface MetricEventsEventTemplateMetadata {
  /**
  * Type 'dt.' for key hints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#metadata_key MetricEvents#metadata_key}
  */
  readonly metadataKey: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#metadata_value MetricEvents#metadata_value}
  */
  readonly metadataValue: string;
}

export function metricEventsEventTemplateMetadataToTerraform(struct?: MetricEventsEventTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata_key: cdktf.stringToTerraform(struct!.metadataKey),
    metadata_value: cdktf.stringToTerraform(struct!.metadataValue),
  }
}


export function metricEventsEventTemplateMetadataToHclTerraform(struct?: MetricEventsEventTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata_key: {
      value: cdktf.stringToHclTerraform(struct!.metadataKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_value: {
      value: cdktf.stringToHclTerraform(struct!.metadataValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsEventTemplateMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricEventsEventTemplateMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadataKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataKey = this._metadataKey;
    }
    if (this._metadataValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataValue = this._metadataValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsEventTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadataKey = undefined;
      this._metadataValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadataKey = value.metadataKey;
      this._metadataValue = value.metadataValue;
    }
  }

  // metadata_key - computed: false, optional: false, required: true
  private _metadataKey?: string; 
  public get metadataKey() {
    return this.getStringAttribute('metadata_key');
  }
  public set metadataKey(value: string) {
    this._metadataKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKeyInput() {
    return this._metadataKey;
  }

  // metadata_value - computed: false, optional: false, required: true
  private _metadataValue?: string; 
  public get metadataValue() {
    return this.getStringAttribute('metadata_value');
  }
  public set metadataValue(value: string) {
    this._metadataValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataValueInput() {
    return this._metadataValue;
  }
}

export class MetricEventsEventTemplateMetadataList extends cdktf.ComplexList {
  public internalValue? : MetricEventsEventTemplateMetadata[] | cdktf.IResolvable

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
  public get(index: number): MetricEventsEventTemplateMetadataOutputReference {
    return new MetricEventsEventTemplateMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricEventsEventTemplate {
  /**
  * Davis® AI will try to merge this event into existing problems, otherwise a new problem will always be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#davis_merge MetricEvents#davis_merge}
  */
  readonly davisMerge?: boolean | cdktf.IResolvable;
  /**
  * The description of the event to trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#description MetricEvents#description}
  */
  readonly description: string;
  /**
  * Possible Values: `AVAILABILITY`, `CUSTOM_ALERT`, `CUSTOM_ANNOTATION`, `CUSTOM_CONFIGURATION`, `CUSTOM_DEPLOYMENT`, `ERROR`, `INFO`, `MARKED_FOR_TERMINATION`, `RESOURCE`, `SLOWDOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#event_type MetricEvents#event_type}
  */
  readonly eventType: string;
  /**
  * The title of the event to trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#title MetricEvents#title}
  */
  readonly title: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#metadata MetricEvents#metadata}
  */
  readonly metadata?: MetricEventsEventTemplateMetadata[] | cdktf.IResolvable;
}

export function metricEventsEventTemplateToTerraform(struct?: MetricEventsEventTemplateOutputReference | MetricEventsEventTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    davis_merge: cdktf.booleanToTerraform(struct!.davisMerge),
    description: cdktf.stringToTerraform(struct!.description),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    title: cdktf.stringToTerraform(struct!.title),
    metadata: cdktf.listMapper(metricEventsEventTemplateMetadataToTerraform, true)(struct!.metadata),
  }
}


export function metricEventsEventTemplateToHclTerraform(struct?: MetricEventsEventTemplateOutputReference | MetricEventsEventTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    davis_merge: {
      value: cdktf.booleanToHclTerraform(struct!.davisMerge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
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
    metadata: {
      value: cdktf.listMapperHcl(metricEventsEventTemplateMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "MetricEventsEventTemplateMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsEventTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricEventsEventTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._davisMerge !== undefined) {
      hasAnyValues = true;
      internalValueResult.davisMerge = this._davisMerge;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsEventTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._davisMerge = undefined;
      this._description = undefined;
      this._eventType = undefined;
      this._title = undefined;
      this._metadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._davisMerge = value.davisMerge;
      this._description = value.description;
      this._eventType = value.eventType;
      this._title = value.title;
      this._metadata.internalValue = value.metadata;
    }
  }

  // davis_merge - computed: false, optional: true, required: false
  private _davisMerge?: boolean | cdktf.IResolvable; 
  public get davisMerge() {
    return this.getBooleanAttribute('davis_merge');
  }
  public set davisMerge(value: boolean | cdktf.IResolvable) {
    this._davisMerge = value;
  }
  public resetDavisMerge() {
    this._davisMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get davisMergeInput() {
    return this._davisMerge;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new MetricEventsEventTemplateMetadataList(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MetricEventsEventTemplateMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface MetricEventsModelProperties {
  /**
  * Possible Values: `ABOVE`, `BELOW`, `OUTSIDE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#alert_condition MetricEvents#alert_condition}
  */
  readonly alertCondition: string;
  /**
  * The ability to set an alert on missing data in a metric. When enabled, missing data samples will be treated as violating samples defined in the advanced model properties. When disabled, missing data is not treated as a violation but will still contribute to dealerting. We recommend disabling alerting on missing data for sparse timeseries to avoid false alerts. To learn more, visit [anomaly detection configuration](https://dt-url.net/lz02mwi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#alert_on_no_data MetricEvents#alert_on_no_data}
  */
  readonly alertOnNoData: boolean | cdktf.IResolvable;
  /**
  * The number of one-minute samples within the evaluation window that must go back to normal to close the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#dealerting_samples MetricEvents#dealerting_samples}
  */
  readonly dealertingSamples: number;
  /**
  * The number of one-minute samples that form the sliding evaluation window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#samples MetricEvents#samples}
  */
  readonly samples: number;
  /**
  * Controls how many times the signal fluctuation is added to the baseline to produce the actual threshold for alerting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#signal_fluctuation MetricEvents#signal_fluctuation}
  */
  readonly signalFluctuation?: number;
  /**
  * Raise an event if this value is violated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#threshold MetricEvents#threshold}
  */
  readonly threshold?: number;
  /**
  * Controls the width of the confidence band and larger values lead to a less sensitive model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#tolerance MetricEvents#tolerance}
  */
  readonly tolerance?: number;
  /**
  * Possible Values: `AUTO_ADAPTIVE_THRESHOLD`, `SEASONAL_BASELINE`, `STATIC_THRESHOLD`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#type MetricEvents#type}
  */
  readonly type: string;
  /**
  * The number of one-minute samples within the evaluation window that must violate to trigger an event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#violating_samples MetricEvents#violating_samples}
  */
  readonly violatingSamples: number;
}

export function metricEventsModelPropertiesToTerraform(struct?: MetricEventsModelPropertiesOutputReference | MetricEventsModelProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_condition: cdktf.stringToTerraform(struct!.alertCondition),
    alert_on_no_data: cdktf.booleanToTerraform(struct!.alertOnNoData),
    dealerting_samples: cdktf.numberToTerraform(struct!.dealertingSamples),
    samples: cdktf.numberToTerraform(struct!.samples),
    signal_fluctuation: cdktf.numberToTerraform(struct!.signalFluctuation),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    tolerance: cdktf.numberToTerraform(struct!.tolerance),
    type: cdktf.stringToTerraform(struct!.type),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function metricEventsModelPropertiesToHclTerraform(struct?: MetricEventsModelPropertiesOutputReference | MetricEventsModelProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_condition: {
      value: cdktf.stringToHclTerraform(struct!.alertCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_on_no_data: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnNoData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dealerting_samples: {
      value: cdktf.numberToHclTerraform(struct!.dealertingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    signal_fluctuation: {
      value: cdktf.numberToHclTerraform(struct!.signalFluctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerance: {
      value: cdktf.numberToHclTerraform(struct!.tolerance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    violating_samples: {
      value: cdktf.numberToHclTerraform(struct!.violatingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsModelPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricEventsModelProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertCondition = this._alertCondition;
    }
    if (this._alertOnNoData !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnNoData = this._alertOnNoData;
    }
    if (this._dealertingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.dealertingSamples = this._dealertingSamples;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._signalFluctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.signalFluctuation = this._signalFluctuation;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._tolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerance = this._tolerance;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsModelProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertCondition = undefined;
      this._alertOnNoData = undefined;
      this._dealertingSamples = undefined;
      this._samples = undefined;
      this._signalFluctuation = undefined;
      this._threshold = undefined;
      this._tolerance = undefined;
      this._type = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertCondition = value.alertCondition;
      this._alertOnNoData = value.alertOnNoData;
      this._dealertingSamples = value.dealertingSamples;
      this._samples = value.samples;
      this._signalFluctuation = value.signalFluctuation;
      this._threshold = value.threshold;
      this._tolerance = value.tolerance;
      this._type = value.type;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // alert_condition - computed: false, optional: false, required: true
  private _alertCondition?: string; 
  public get alertCondition() {
    return this.getStringAttribute('alert_condition');
  }
  public set alertCondition(value: string) {
    this._alertCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionInput() {
    return this._alertCondition;
  }

  // alert_on_no_data - computed: false, optional: false, required: true
  private _alertOnNoData?: boolean | cdktf.IResolvable; 
  public get alertOnNoData() {
    return this.getBooleanAttribute('alert_on_no_data');
  }
  public set alertOnNoData(value: boolean | cdktf.IResolvable) {
    this._alertOnNoData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnNoDataInput() {
    return this._alertOnNoData;
  }

  // dealerting_samples - computed: false, optional: false, required: true
  private _dealertingSamples?: number; 
  public get dealertingSamples() {
    return this.getNumberAttribute('dealerting_samples');
  }
  public set dealertingSamples(value: number) {
    this._dealertingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dealertingSamplesInput() {
    return this._dealertingSamples;
  }

  // samples - computed: false, optional: false, required: true
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // signal_fluctuation - computed: false, optional: true, required: false
  private _signalFluctuation?: number; 
  public get signalFluctuation() {
    return this.getNumberAttribute('signal_fluctuation');
  }
  public set signalFluctuation(value: number) {
    this._signalFluctuation = value;
  }
  public resetSignalFluctuation() {
    this._signalFluctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalFluctuationInput() {
    return this._signalFluctuation;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
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

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}
export interface MetricEventsQueryDefinitionDimensionFilterFilter {
  /**
  * Dimension key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#dimension_key MetricEvents#dimension_key}
  */
  readonly dimensionKey: string;
  /**
  * Dimension value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#dimension_value MetricEvents#dimension_value}
  */
  readonly dimensionValue: string;
  /**
  * Possible Values: `CONTAINS_CASE_SENSITIVE`, `DOES_NOT_CONTAIN_CASE_SENSITIVE`, `DOES_NOT_EQUAL`, `DOES_NOT_START_WITH`, `EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#operator MetricEvents#operator}
  */
  readonly operator?: string;
}

export function metricEventsQueryDefinitionDimensionFilterFilterToTerraform(struct?: MetricEventsQueryDefinitionDimensionFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension_key: cdktf.stringToTerraform(struct!.dimensionKey),
    dimension_value: cdktf.stringToTerraform(struct!.dimensionValue),
    operator: cdktf.stringToTerraform(struct!.operator),
  }
}


export function metricEventsQueryDefinitionDimensionFilterFilterToHclTerraform(struct?: MetricEventsQueryDefinitionDimensionFilterFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension_key: {
      value: cdktf.stringToHclTerraform(struct!.dimensionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_value: {
      value: cdktf.stringToHclTerraform(struct!.dimensionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsQueryDefinitionDimensionFilterFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricEventsQueryDefinitionDimensionFilterFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionKey = this._dimensionKey;
    }
    if (this._dimensionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValue = this._dimensionValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsQueryDefinitionDimensionFilterFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensionKey = undefined;
      this._dimensionValue = undefined;
      this._operator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensionKey = value.dimensionKey;
      this._dimensionValue = value.dimensionValue;
      this._operator = value.operator;
    }
  }

  // dimension_key - computed: false, optional: false, required: true
  private _dimensionKey?: string; 
  public get dimensionKey() {
    return this.getStringAttribute('dimension_key');
  }
  public set dimensionKey(value: string) {
    this._dimensionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionKeyInput() {
    return this._dimensionKey;
  }

  // dimension_value - computed: false, optional: false, required: true
  private _dimensionValue?: string; 
  public get dimensionValue() {
    return this.getStringAttribute('dimension_value');
  }
  public set dimensionValue(value: string) {
    this._dimensionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueInput() {
    return this._dimensionValue;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }
}

export class MetricEventsQueryDefinitionDimensionFilterFilterList extends cdktf.ComplexList {
  public internalValue? : MetricEventsQueryDefinitionDimensionFilterFilter[] | cdktf.IResolvable

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
  public get(index: number): MetricEventsQueryDefinitionDimensionFilterFilterOutputReference {
    return new MetricEventsQueryDefinitionDimensionFilterFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricEventsQueryDefinitionDimensionFilter {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#filter MetricEvents#filter}
  */
  readonly filter: MetricEventsQueryDefinitionDimensionFilterFilter[] | cdktf.IResolvable;
}

export function metricEventsQueryDefinitionDimensionFilterToTerraform(struct?: MetricEventsQueryDefinitionDimensionFilterOutputReference | MetricEventsQueryDefinitionDimensionFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.listMapper(metricEventsQueryDefinitionDimensionFilterFilterToTerraform, true)(struct!.filter),
  }
}


export function metricEventsQueryDefinitionDimensionFilterToHclTerraform(struct?: MetricEventsQueryDefinitionDimensionFilterOutputReference | MetricEventsQueryDefinitionDimensionFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.listMapperHcl(metricEventsQueryDefinitionDimensionFilterFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "set",
      storageClassType: "MetricEventsQueryDefinitionDimensionFilterFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsQueryDefinitionDimensionFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricEventsQueryDefinitionDimensionFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsQueryDefinitionDimensionFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filter.internalValue = value.filter;
    }
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new MetricEventsQueryDefinitionDimensionFilterFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: MetricEventsQueryDefinitionDimensionFilterFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface MetricEventsQueryDefinitionEntityFilterConditionsCondition {
  /**
  * Possible Values: `CONTAINS_CASE_INSENSITIVE`, `CONTAINS_CASE_SENSITIVE`, `DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `DOES_NOT_CONTAIN_CASE_SENSITIVE`, `DOES_NOT_EQUAL`, `DOES_NOT_START_WITH`, `EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#operator MetricEvents#operator}
  */
  readonly operator: string;
  /**
  * Possible Values: `CUSTOM_DEVICE_GROUP_NAME`, `ENTITY_ID`, `HOST_GROUP_NAME`, `HOST_NAME`, `MANAGEMENT_ZONE`, `NAME`, `PROCESS_GROUP_ID`, `PROCESS_GROUP_NAME`, `TAG`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#type MetricEvents#type}
  */
  readonly type: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#value MetricEvents#value}
  */
  readonly value: string;
}

export function metricEventsQueryDefinitionEntityFilterConditionsConditionToTerraform(struct?: MetricEventsQueryDefinitionEntityFilterConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function metricEventsQueryDefinitionEntityFilterConditionsConditionToHclTerraform(struct?: MetricEventsQueryDefinitionEntityFilterConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class MetricEventsQueryDefinitionEntityFilterConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricEventsQueryDefinitionEntityFilterConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsQueryDefinitionEntityFilterConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MetricEventsQueryDefinitionEntityFilterConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : MetricEventsQueryDefinitionEntityFilterConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): MetricEventsQueryDefinitionEntityFilterConditionsConditionOutputReference {
    return new MetricEventsQueryDefinitionEntityFilterConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricEventsQueryDefinitionEntityFilterConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#condition MetricEvents#condition}
  */
  readonly condition: MetricEventsQueryDefinitionEntityFilterConditionsCondition[] | cdktf.IResolvable;
}

export function metricEventsQueryDefinitionEntityFilterConditionsToTerraform(struct?: MetricEventsQueryDefinitionEntityFilterConditionsOutputReference | MetricEventsQueryDefinitionEntityFilterConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(metricEventsQueryDefinitionEntityFilterConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function metricEventsQueryDefinitionEntityFilterConditionsToHclTerraform(struct?: MetricEventsQueryDefinitionEntityFilterConditionsOutputReference | MetricEventsQueryDefinitionEntityFilterConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(metricEventsQueryDefinitionEntityFilterConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "set",
      storageClassType: "MetricEventsQueryDefinitionEntityFilterConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsQueryDefinitionEntityFilterConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricEventsQueryDefinitionEntityFilterConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsQueryDefinitionEntityFilterConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new MetricEventsQueryDefinitionEntityFilterConditionsConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: MetricEventsQueryDefinitionEntityFilterConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}
export interface MetricEventsQueryDefinitionEntityFilter {
  /**
  * Dimension key of entity type to filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#dimension_key MetricEvents#dimension_key}
  */
  readonly dimensionKey?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#conditions MetricEvents#conditions}
  */
  readonly conditions?: MetricEventsQueryDefinitionEntityFilterConditions;
}

export function metricEventsQueryDefinitionEntityFilterToTerraform(struct?: MetricEventsQueryDefinitionEntityFilterOutputReference | MetricEventsQueryDefinitionEntityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension_key: cdktf.stringToTerraform(struct!.dimensionKey),
    conditions: metricEventsQueryDefinitionEntityFilterConditionsToTerraform(struct!.conditions),
  }
}


export function metricEventsQueryDefinitionEntityFilterToHclTerraform(struct?: MetricEventsQueryDefinitionEntityFilterOutputReference | MetricEventsQueryDefinitionEntityFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension_key: {
      value: cdktf.stringToHclTerraform(struct!.dimensionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: metricEventsQueryDefinitionEntityFilterConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "MetricEventsQueryDefinitionEntityFilterConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsQueryDefinitionEntityFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricEventsQueryDefinitionEntityFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionKey = this._dimensionKey;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsQueryDefinitionEntityFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensionKey = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensionKey = value.dimensionKey;
      this._conditions.internalValue = value.conditions;
    }
  }

  // dimension_key - computed: false, optional: true, required: false
  private _dimensionKey?: string; 
  public get dimensionKey() {
    return this.getStringAttribute('dimension_key');
  }
  public set dimensionKey(value: string) {
    this._dimensionKey = value;
  }
  public resetDimensionKey() {
    this._dimensionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionKeyInput() {
    return this._dimensionKey;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new MetricEventsQueryDefinitionEntityFilterConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: MetricEventsQueryDefinitionEntityFilterConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface MetricEventsQueryDefinition {
  /**
  * Possible Values: `AVG`, `COUNT`, `MAX`, `MEDIAN`, `MIN`, `PERCENTILE90`, `SUM`, `VALUE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#aggregation MetricEvents#aggregation}
  */
  readonly aggregation?: string;
  /**
  * The `legacy_id` of a Management Zone (as provided by the resource `dynatrace_management_zone_v2` or the data source `dynatrace_management_zone`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#management_zone MetricEvents#management_zone}
  */
  readonly managementZone?: string;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#metric_key MetricEvents#metric_key}
  */
  readonly metricKey?: string;
  /**
  * To learn more, visit [Metric Selector](https://dt-url.net/metselad)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#metric_selector MetricEvents#metric_selector}
  */
  readonly metricSelector?: string;
  /**
  * Minute offset of sliding evaluation window for metrics with latency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#query_offset MetricEvents#query_offset}
  */
  readonly queryOffset?: number;
  /**
  * Possible Values: `METRIC_KEY`, `METRIC_SELECTOR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#type MetricEvents#type}
  */
  readonly type: string;
  /**
  * dimension_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#dimension_filter MetricEvents#dimension_filter}
  */
  readonly dimensionFilter?: MetricEventsQueryDefinitionDimensionFilter;
  /**
  * entity_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#entity_filter MetricEvents#entity_filter}
  */
  readonly entityFilter?: MetricEventsQueryDefinitionEntityFilter;
}

export function metricEventsQueryDefinitionToTerraform(struct?: MetricEventsQueryDefinitionOutputReference | MetricEventsQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    management_zone: cdktf.stringToTerraform(struct!.managementZone),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    metric_selector: cdktf.stringToTerraform(struct!.metricSelector),
    query_offset: cdktf.numberToTerraform(struct!.queryOffset),
    type: cdktf.stringToTerraform(struct!.type),
    dimension_filter: metricEventsQueryDefinitionDimensionFilterToTerraform(struct!.dimensionFilter),
    entity_filter: metricEventsQueryDefinitionEntityFilterToTerraform(struct!.entityFilter),
  }
}


export function metricEventsQueryDefinitionToHclTerraform(struct?: MetricEventsQueryDefinitionOutputReference | MetricEventsQueryDefinition): any {
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
    management_zone: {
      value: cdktf.stringToHclTerraform(struct!.managementZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_selector: {
      value: cdktf.stringToHclTerraform(struct!.metricSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_offset: {
      value: cdktf.numberToHclTerraform(struct!.queryOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimension_filter: {
      value: metricEventsQueryDefinitionDimensionFilterToHclTerraform(struct!.dimensionFilter),
      isBlock: true,
      type: "list",
      storageClassType: "MetricEventsQueryDefinitionDimensionFilterList",
    },
    entity_filter: {
      value: metricEventsQueryDefinitionEntityFilterToHclTerraform(struct!.entityFilter),
      isBlock: true,
      type: "list",
      storageClassType: "MetricEventsQueryDefinitionEntityFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetricEventsQueryDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricEventsQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._managementZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZone = this._managementZone;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._metricSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelector = this._metricSelector;
    }
    if (this._queryOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryOffset = this._queryOffset;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dimensionFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionFilter = this._dimensionFilter?.internalValue;
    }
    if (this._entityFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityFilter = this._entityFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricEventsQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregation = undefined;
      this._managementZone = undefined;
      this._metricKey = undefined;
      this._metricSelector = undefined;
      this._queryOffset = undefined;
      this._type = undefined;
      this._dimensionFilter.internalValue = undefined;
      this._entityFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregation = value.aggregation;
      this._managementZone = value.managementZone;
      this._metricKey = value.metricKey;
      this._metricSelector = value.metricSelector;
      this._queryOffset = value.queryOffset;
      this._type = value.type;
      this._dimensionFilter.internalValue = value.dimensionFilter;
      this._entityFilter.internalValue = value.entityFilter;
    }
  }

  // aggregation - computed: false, optional: true, required: false
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

  // management_zone - computed: false, optional: true, required: false
  private _managementZone?: string; 
  public get managementZone() {
    return this.getStringAttribute('management_zone');
  }
  public set managementZone(value: string) {
    this._managementZone = value;
  }
  public resetManagementZone() {
    this._managementZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZoneInput() {
    return this._managementZone;
  }

  // metric_key - computed: false, optional: true, required: false
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  public resetMetricKey() {
    this._metricKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // metric_selector - computed: false, optional: true, required: false
  private _metricSelector?: string; 
  public get metricSelector() {
    return this.getStringAttribute('metric_selector');
  }
  public set metricSelector(value: string) {
    this._metricSelector = value;
  }
  public resetMetricSelector() {
    this._metricSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector;
  }

  // query_offset - computed: false, optional: true, required: false
  private _queryOffset?: number; 
  public get queryOffset() {
    return this.getNumberAttribute('query_offset');
  }
  public set queryOffset(value: number) {
    this._queryOffset = value;
  }
  public resetQueryOffset() {
    this._queryOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryOffsetInput() {
    return this._queryOffset;
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

  // dimension_filter - computed: false, optional: true, required: false
  private _dimensionFilter = new MetricEventsQueryDefinitionDimensionFilterOutputReference(this, "dimension_filter");
  public get dimensionFilter() {
    return this._dimensionFilter;
  }
  public putDimensionFilter(value: MetricEventsQueryDefinitionDimensionFilter) {
    this._dimensionFilter.internalValue = value;
  }
  public resetDimensionFilter() {
    this._dimensionFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionFilterInput() {
    return this._dimensionFilter.internalValue;
  }

  // entity_filter - computed: false, optional: true, required: false
  private _entityFilter = new MetricEventsQueryDefinitionEntityFilterOutputReference(this, "entity_filter");
  public get entityFilter() {
    return this._entityFilter;
  }
  public putEntityFilter(value: MetricEventsQueryDefinitionEntityFilter) {
    this._entityFilter.internalValue = value;
  }
  public resetEntityFilter() {
    this._entityFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityFilterInput() {
    return this._entityFilter.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events dynatrace_metric_events}
*/
export class MetricEvents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_metric_events";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricEvents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricEvents to import
  * @param importFromId The id of the existing MetricEvents that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricEvents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_metric_events", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/metric_events dynatrace_metric_events} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricEventsConfig
  */
  public constructor(scope: Construct, id: string, config: MetricEventsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_metric_events',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._eventEntityDimensionKey = config.eventEntityDimensionKey;
    this._id = config.id;
    this._legacyId = config.legacyId;
    this._summary = config.summary;
    this._eventTemplate.internalValue = config.eventTemplate;
    this._modelProperties.internalValue = config.modelProperties;
    this._queryDefinition.internalValue = config.queryDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event_entity_dimension_key - computed: false, optional: true, required: false
  private _eventEntityDimensionKey?: string; 
  public get eventEntityDimensionKey() {
    return this.getStringAttribute('event_entity_dimension_key');
  }
  public set eventEntityDimensionKey(value: string) {
    this._eventEntityDimensionKey = value;
  }
  public resetEventEntityDimensionKey() {
    this._eventEntityDimensionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventEntityDimensionKeyInput() {
    return this._eventEntityDimensionKey;
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

  // legacy_id - computed: true, optional: true, required: false
  private _legacyId?: string; 
  public get legacyId() {
    return this.getStringAttribute('legacy_id');
  }
  public set legacyId(value: string) {
    this._legacyId = value;
  }
  public resetLegacyId() {
    this._legacyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyIdInput() {
    return this._legacyId;
  }

  // summary - computed: false, optional: false, required: true
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // event_template - computed: false, optional: false, required: true
  private _eventTemplate = new MetricEventsEventTemplateOutputReference(this, "event_template");
  public get eventTemplate() {
    return this._eventTemplate;
  }
  public putEventTemplate(value: MetricEventsEventTemplate) {
    this._eventTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTemplateInput() {
    return this._eventTemplate.internalValue;
  }

  // model_properties - computed: false, optional: false, required: true
  private _modelProperties = new MetricEventsModelPropertiesOutputReference(this, "model_properties");
  public get modelProperties() {
    return this._modelProperties;
  }
  public putModelProperties(value: MetricEventsModelProperties) {
    this._modelProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPropertiesInput() {
    return this._modelProperties.internalValue;
  }

  // query_definition - computed: false, optional: false, required: true
  private _queryDefinition = new MetricEventsQueryDefinitionOutputReference(this, "query_definition");
  public get queryDefinition() {
    return this._queryDefinition;
  }
  public putQueryDefinition(value: MetricEventsQueryDefinition) {
    this._queryDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDefinitionInput() {
    return this._queryDefinition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_entity_dimension_key: cdktf.stringToTerraform(this._eventEntityDimensionKey),
      id: cdktf.stringToTerraform(this._id),
      legacy_id: cdktf.stringToTerraform(this._legacyId),
      summary: cdktf.stringToTerraform(this._summary),
      event_template: metricEventsEventTemplateToTerraform(this._eventTemplate.internalValue),
      model_properties: metricEventsModelPropertiesToTerraform(this._modelProperties.internalValue),
      query_definition: metricEventsQueryDefinitionToTerraform(this._queryDefinition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      event_entity_dimension_key: {
        value: cdktf.stringToHclTerraform(this._eventEntityDimensionKey),
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
      legacy_id: {
        value: cdktf.stringToHclTerraform(this._legacyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary: {
        value: cdktf.stringToHclTerraform(this._summary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_template: {
        value: metricEventsEventTemplateToHclTerraform(this._eventTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricEventsEventTemplateList",
      },
      model_properties: {
        value: metricEventsModelPropertiesToHclTerraform(this._modelProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricEventsModelPropertiesList",
      },
      query_definition: {
        value: metricEventsQueryDefinitionToHclTerraform(this._queryDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricEventsQueryDefinitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
