// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JourneyViewsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the journey view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#description JourneyViews#description}
  */
  readonly description?: string;
  /**
  * A relative timeframe for the journey view, expressed as an ISO 8601 duration. Only one of interval or duration must be specified. Periods are represented as an ISO-8601 string. For example: P1D or P1DT12H.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#duration JourneyViews#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#id JourneyViews#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An absolute timeframe for the journey view, expressed as an ISO 8601 interval. Only one of interval or duration must be specified. Intervals are represented as an ISO-8601 string. For example: YYYY-MM-DDThh:mm:ss/YYYY-MM-DDThh:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#interval JourneyViews#interval}
  */
  readonly interval?: string;
  /**
  * JourneyView name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#name JourneyViews#name}
  */
  readonly name: string;
  /**
  * charts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#charts JourneyViews#charts}
  */
  readonly charts?: JourneyViewsCharts[] | cdktf.IResolvable;
  /**
  * elements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#elements JourneyViews#elements}
  */
  readonly elements?: JourneyViewsElements[] | cdktf.IResolvable;
}
export interface JourneyViewsChartsDisplayAttributes {
  /**
  * A title for the grouped by attributes (aka the x axis).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#group_by_title JourneyViews#group_by_title}
  */
  readonly groupByTitle?: string;
  /**
  * A title for the metrics (aka the y axis).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#metrics_title JourneyViews#metrics_title}
  */
  readonly metricsTitle?: string;
  /**
  * Whether to show a legend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#show_legend JourneyViews#show_legend}
  */
  readonly showLegend?: boolean | cdktf.IResolvable;
  /**
  * The type of chart to display. Valid values: Bar, Column, Line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#var_type JourneyViews#var_type}
  */
  readonly varType?: string;
}

export function journeyViewsChartsDisplayAttributesToTerraform(struct?: JourneyViewsChartsDisplayAttributesOutputReference | JourneyViewsChartsDisplayAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by_title: cdktf.stringToTerraform(struct!.groupByTitle),
    metrics_title: cdktf.stringToTerraform(struct!.metricsTitle),
    show_legend: cdktf.booleanToTerraform(struct!.showLegend),
    var_type: cdktf.stringToTerraform(struct!.varType),
  }
}


export function journeyViewsChartsDisplayAttributesToHclTerraform(struct?: JourneyViewsChartsDisplayAttributesOutputReference | JourneyViewsChartsDisplayAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by_title: {
      value: cdktf.stringToHclTerraform(struct!.groupByTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_title: {
      value: cdktf.stringToHclTerraform(struct!.metricsTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_legend: {
      value: cdktf.booleanToHclTerraform(struct!.showLegend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    var_type: {
      value: cdktf.stringToHclTerraform(struct!.varType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsChartsDisplayAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsChartsDisplayAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTitle = this._groupByTitle;
    }
    if (this._metricsTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsTitle = this._metricsTitle;
    }
    if (this._showLegend !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLegend = this._showLegend;
    }
    if (this._varType !== undefined) {
      hasAnyValues = true;
      internalValueResult.varType = this._varType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsChartsDisplayAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupByTitle = undefined;
      this._metricsTitle = undefined;
      this._showLegend = undefined;
      this._varType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupByTitle = value.groupByTitle;
      this._metricsTitle = value.metricsTitle;
      this._showLegend = value.showLegend;
      this._varType = value.varType;
    }
  }

  // group_by_title - computed: false, optional: true, required: false
  private _groupByTitle?: string; 
  public get groupByTitle() {
    return this.getStringAttribute('group_by_title');
  }
  public set groupByTitle(value: string) {
    this._groupByTitle = value;
  }
  public resetGroupByTitle() {
    this._groupByTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTitleInput() {
    return this._groupByTitle;
  }

  // metrics_title - computed: false, optional: true, required: false
  private _metricsTitle?: string; 
  public get metricsTitle() {
    return this.getStringAttribute('metrics_title');
  }
  public set metricsTitle(value: string) {
    this._metricsTitle = value;
  }
  public resetMetricsTitle() {
    this._metricsTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsTitleInput() {
    return this._metricsTitle;
  }

  // show_legend - computed: false, optional: true, required: false
  private _showLegend?: boolean | cdktf.IResolvable; 
  public get showLegend() {
    return this.getBooleanAttribute('show_legend');
  }
  public set showLegend(value: boolean | cdktf.IResolvable) {
    this._showLegend = value;
  }
  public resetShowLegend() {
    this._showLegend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLegendInput() {
    return this._showLegend;
  }

  // var_type - computed: false, optional: true, required: false
  private _varType?: string; 
  public get varType() {
    return this.getStringAttribute('var_type');
  }
  public set varType(value: string) {
    this._varType = value;
  }
  public resetVarType() {
    this._varType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varTypeInput() {
    return this._varType;
  }
}
export interface JourneyViewsChartsGroupByAttributes {
  /**
  * The attribute of the element being grouped by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#attribute JourneyViews#attribute}
  */
  readonly attribute: string;
  /**
  * The element in the list of elements which is being grouped by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#element_id JourneyViews#element_id}
  */
  readonly elementId: string;
}

export function journeyViewsChartsGroupByAttributesToTerraform(struct?: JourneyViewsChartsGroupByAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    element_id: cdktf.stringToTerraform(struct!.elementId),
  }
}


export function journeyViewsChartsGroupByAttributesToHclTerraform(struct?: JourneyViewsChartsGroupByAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsChartsGroupByAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyViewsChartsGroupByAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsChartsGroupByAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._elementId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._elementId = value.elementId;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
  }
}

export class JourneyViewsChartsGroupByAttributesList extends cdktf.ComplexList {
  public internalValue? : JourneyViewsChartsGroupByAttributes[] | cdktf.IResolvable

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
  public get(index: number): JourneyViewsChartsGroupByAttributesOutputReference {
    return new JourneyViewsChartsGroupByAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyViewsChartsMetrics {
  /**
  * How to aggregate the given element. Valid values: EventCount, CustomerCount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#aggregate JourneyViews#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Display label of metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#display_label JourneyViews#display_label}
  */
  readonly displayLabel?: string;
  /**
  * The reference of element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#element_id JourneyViews#element_id}
  */
  readonly elementId: string;
  /**
  * The unique identifier of the metric within the metrics list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#id JourneyViews#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function journeyViewsChartsMetricsToTerraform(struct?: JourneyViewsChartsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate: cdktf.stringToTerraform(struct!.aggregate),
    display_label: cdktf.stringToTerraform(struct!.displayLabel),
    element_id: cdktf.stringToTerraform(struct!.elementId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function journeyViewsChartsMetricsToHclTerraform(struct?: JourneyViewsChartsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate: {
      value: cdktf.stringToHclTerraform(struct!.aggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_label: {
      value: cdktf.stringToHclTerraform(struct!.displayLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element_id: {
      value: cdktf.stringToHclTerraform(struct!.elementId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsChartsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyViewsChartsMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate;
    }
    if (this._displayLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayLabel = this._displayLabel;
    }
    if (this._elementId !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementId = this._elementId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsChartsMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregate = undefined;
      this._displayLabel = undefined;
      this._elementId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregate = value.aggregate;
      this._displayLabel = value.displayLabel;
      this._elementId = value.elementId;
      this._id = value.id;
    }
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
  }

  // display_label - computed: false, optional: true, required: false
  private _displayLabel?: string; 
  public get displayLabel() {
    return this.getStringAttribute('display_label');
  }
  public set displayLabel(value: string) {
    this._displayLabel = value;
  }
  public resetDisplayLabel() {
    this._displayLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayLabelInput() {
    return this._displayLabel;
  }

  // element_id - computed: false, optional: false, required: true
  private _elementId?: string; 
  public get elementId() {
    return this.getStringAttribute('element_id');
  }
  public set elementId(value: string) {
    this._elementId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementIdInput() {
    return this._elementId;
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
}

export class JourneyViewsChartsMetricsList extends cdktf.ComplexList {
  public internalValue? : JourneyViewsChartsMetrics[] | cdktf.IResolvable

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
  public get(index: number): JourneyViewsChartsMetricsOutputReference {
    return new JourneyViewsChartsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyViewsCharts {
  /**
  * A maximum on the number of values being grouped by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#group_by_max JourneyViews#group_by_max}
  */
  readonly groupByMax?: number;
  /**
  * A time unit to group the metrics by. Valid values: Day, Week, Month, Year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#group_by_time JourneyViews#group_by_time}
  */
  readonly groupByTime?: string;
  /**
  * The unique name of the chart within the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#name JourneyViews#name}
  */
  readonly name: string;
  /**
  * The version of chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#version JourneyViews#version}
  */
  readonly version: number;
  /**
  * display_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#display_attributes JourneyViews#display_attributes}
  */
  readonly displayAttributes?: JourneyViewsChartsDisplayAttributes;
  /**
  * group_by_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#group_by_attributes JourneyViews#group_by_attributes}
  */
  readonly groupByAttributes?: JourneyViewsChartsGroupByAttributes[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#metrics JourneyViews#metrics}
  */
  readonly metrics: JourneyViewsChartsMetrics[] | cdktf.IResolvable;
}

export function journeyViewsChartsToTerraform(struct?: JourneyViewsCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_by_max: cdktf.numberToTerraform(struct!.groupByMax),
    group_by_time: cdktf.stringToTerraform(struct!.groupByTime),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.numberToTerraform(struct!.version),
    display_attributes: journeyViewsChartsDisplayAttributesToTerraform(struct!.displayAttributes),
    group_by_attributes: cdktf.listMapper(journeyViewsChartsGroupByAttributesToTerraform, true)(struct!.groupByAttributes),
    metrics: cdktf.listMapper(journeyViewsChartsMetricsToTerraform, true)(struct!.metrics),
  }
}


export function journeyViewsChartsToHclTerraform(struct?: JourneyViewsCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_by_max: {
      value: cdktf.numberToHclTerraform(struct!.groupByMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_by_time: {
      value: cdktf.stringToHclTerraform(struct!.groupByTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_attributes: {
      value: journeyViewsChartsDisplayAttributesToHclTerraform(struct!.displayAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsChartsDisplayAttributesList",
    },
    group_by_attributes: {
      value: cdktf.listMapperHcl(journeyViewsChartsGroupByAttributesToHclTerraform, true)(struct!.groupByAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsChartsGroupByAttributesList",
    },
    metrics: {
      value: cdktf.listMapperHcl(journeyViewsChartsMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsChartsMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsChartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyViewsCharts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupByMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByMax = this._groupByMax;
    }
    if (this._groupByTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByTime = this._groupByTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._displayAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayAttributes = this._displayAttributes?.internalValue;
    }
    if (this._groupByAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByAttributes = this._groupByAttributes?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsCharts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupByMax = undefined;
      this._groupByTime = undefined;
      this._name = undefined;
      this._version = undefined;
      this._displayAttributes.internalValue = undefined;
      this._groupByAttributes.internalValue = undefined;
      this._metrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupByMax = value.groupByMax;
      this._groupByTime = value.groupByTime;
      this._name = value.name;
      this._version = value.version;
      this._displayAttributes.internalValue = value.displayAttributes;
      this._groupByAttributes.internalValue = value.groupByAttributes;
      this._metrics.internalValue = value.metrics;
    }
  }

  // group_by_max - computed: false, optional: true, required: false
  private _groupByMax?: number; 
  public get groupByMax() {
    return this.getNumberAttribute('group_by_max');
  }
  public set groupByMax(value: number) {
    this._groupByMax = value;
  }
  public resetGroupByMax() {
    this._groupByMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByMaxInput() {
    return this._groupByMax;
  }

  // group_by_time - computed: false, optional: true, required: false
  private _groupByTime?: string; 
  public get groupByTime() {
    return this.getStringAttribute('group_by_time');
  }
  public set groupByTime(value: string) {
    this._groupByTime = value;
  }
  public resetGroupByTime() {
    this._groupByTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByTimeInput() {
    return this._groupByTime;
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

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // display_attributes - computed: false, optional: true, required: false
  private _displayAttributes = new JourneyViewsChartsDisplayAttributesOutputReference(this, "display_attributes");
  public get displayAttributes() {
    return this._displayAttributes;
  }
  public putDisplayAttributes(value: JourneyViewsChartsDisplayAttributes) {
    this._displayAttributes.internalValue = value;
  }
  public resetDisplayAttributes() {
    this._displayAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayAttributesInput() {
    return this._displayAttributes.internalValue;
  }

  // group_by_attributes - computed: false, optional: true, required: false
  private _groupByAttributes = new JourneyViewsChartsGroupByAttributesList(this, "group_by_attributes", false);
  public get groupByAttributes() {
    return this._groupByAttributes;
  }
  public putGroupByAttributes(value: JourneyViewsChartsGroupByAttributes[] | cdktf.IResolvable) {
    this._groupByAttributes.internalValue = value;
  }
  public resetGroupByAttributes() {
    this._groupByAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAttributesInput() {
    return this._groupByAttributes.internalValue;
  }

  // metrics - computed: false, optional: false, required: true
  private _metrics = new JourneyViewsChartsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: JourneyViewsChartsMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }
}

export class JourneyViewsChartsList extends cdktf.ComplexList {
  public internalValue? : JourneyViewsCharts[] | cdktf.IResolvable

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
  public get(index: number): JourneyViewsChartsOutputReference {
    return new JourneyViewsChartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyViewsElementsAttributes {
  /**
  * The identifier for the element based on its type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#id JourneyViews#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source for the element (e.g. IVR, Voice, Chat). Used for informational purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#source JourneyViews#source}
  */
  readonly source?: string;
  /**
  * The type of the element (e.g. Event).Valid values: Event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#type JourneyViews#type}
  */
  readonly type: string;
}

export function journeyViewsElementsAttributesToTerraform(struct?: JourneyViewsElementsAttributesOutputReference | JourneyViewsElementsAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function journeyViewsElementsAttributesToHclTerraform(struct?: JourneyViewsElementsAttributesOutputReference | JourneyViewsElementsAttributes): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._source = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._source = value.source;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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
}
export interface JourneyViewsElementsDisplayAttributes {
  /**
  * The column position for the element in the journey view canvas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#col JourneyViews#col}
  */
  readonly col: number;
  /**
  * The horizontal position (x-coordinate) of the element on the journey view canvas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#x JourneyViews#x}
  */
  readonly x: number;
  /**
  * The vertical position (y-coordinate) of the element on the journey view canvas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#y JourneyViews#y}
  */
  readonly y: number;
}

export function journeyViewsElementsDisplayAttributesToTerraform(struct?: JourneyViewsElementsDisplayAttributesOutputReference | JourneyViewsElementsDisplayAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    col: cdktf.numberToTerraform(struct!.col),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function journeyViewsElementsDisplayAttributesToHclTerraform(struct?: JourneyViewsElementsDisplayAttributesOutputReference | JourneyViewsElementsDisplayAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    col: {
      value: cdktf.numberToHclTerraform(struct!.col),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsDisplayAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsDisplayAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._col !== undefined) {
      hasAnyValues = true;
      internalValueResult.col = this._col;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsDisplayAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._col = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._col = value.col;
      this._x = value.x;
      this._y = value.y;
    }
  }

  // col - computed: false, optional: false, required: true
  private _col?: number; 
  public get col() {
    return this.getNumberAttribute('col');
  }
  public set col(value: number) {
    this._col = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colInput() {
    return this._col;
  }

  // x - computed: false, optional: false, required: true
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: false, optional: false, required: true
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }
}
export interface JourneyViewsElementsFilterNumberPredicatesRangeEq {
  /**
  * An ISO 8601 time duration. Only one of number or duration must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#duration JourneyViews#duration}
  */
  readonly duration?: string;
  /**
  * Number value. Only one of number or duration must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#number JourneyViews#number}
  */
  readonly number?: number;
}

export function journeyViewsElementsFilterNumberPredicatesRangeEqToTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeEqOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeEq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function journeyViewsElementsFilterNumberPredicatesRangeEqToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeEqOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeEq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesRangeEqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilterNumberPredicatesRangeEq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicatesRangeEq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._number = value.number;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface JourneyViewsElementsFilterNumberPredicatesRangeGt {
  /**
  * An ISO 8601 time duration. Only one of number or duration must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#duration JourneyViews#duration}
  */
  readonly duration?: string;
  /**
  * Number value. Only one of number or duration must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#number JourneyViews#number}
  */
  readonly number?: number;
}

export function journeyViewsElementsFilterNumberPredicatesRangeGtToTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeGtOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeGt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function journeyViewsElementsFilterNumberPredicatesRangeGtToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeGtOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeGt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesRangeGtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilterNumberPredicatesRangeGt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicatesRangeGt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._number = value.number;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface JourneyViewsElementsFilterNumberPredicatesRangeGte {
  /**
  * An ISO 8601 time duration. Only one of number or duration must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#duration JourneyViews#duration}
  */
  readonly duration?: string;
  /**
  * Number value. Only one of number or duration must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#number JourneyViews#number}
  */
  readonly number?: number;
}

export function journeyViewsElementsFilterNumberPredicatesRangeGteToTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeGteOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeGte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function journeyViewsElementsFilterNumberPredicatesRangeGteToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeGteOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeGte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesRangeGteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilterNumberPredicatesRangeGte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicatesRangeGte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._number = value.number;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface JourneyViewsElementsFilterNumberPredicatesRangeLt {
  /**
  * An ISO 8601 time duration. Only one of number or duration must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#duration JourneyViews#duration}
  */
  readonly duration?: string;
  /**
  * Number value. Only one of number or duration must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#number JourneyViews#number}
  */
  readonly number?: number;
}

export function journeyViewsElementsFilterNumberPredicatesRangeLtToTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeLtOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeLt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function journeyViewsElementsFilterNumberPredicatesRangeLtToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeLtOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeLt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesRangeLtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilterNumberPredicatesRangeLt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicatesRangeLt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._number = value.number;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface JourneyViewsElementsFilterNumberPredicatesRangeLte {
  /**
  * An ISO 8601 time duration. Only one of number or duration must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#duration JourneyViews#duration}
  */
  readonly duration?: string;
  /**
  * Number value. Only one of number or duration must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#number JourneyViews#number}
  */
  readonly number?: number;
}

export function journeyViewsElementsFilterNumberPredicatesRangeLteToTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeLteOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeLte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function journeyViewsElementsFilterNumberPredicatesRangeLteToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeLteOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeLte): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesRangeLteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilterNumberPredicatesRangeLte | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicatesRangeLte | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._number = value.number;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface JourneyViewsElementsFilterNumberPredicatesRangeNeq {
  /**
  * An ISO 8601 time duration. Only one of number or duration must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#duration JourneyViews#duration}
  */
  readonly duration?: string;
  /**
  * Number value. Only one of number or duration must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#number JourneyViews#number}
  */
  readonly number?: number;
}

export function journeyViewsElementsFilterNumberPredicatesRangeNeqToTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeNeqOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeNeq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function journeyViewsElementsFilterNumberPredicatesRangeNeqToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeNeqOutputReference | JourneyViewsElementsFilterNumberPredicatesRangeNeq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesRangeNeqOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilterNumberPredicatesRangeNeq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicatesRangeNeq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._number = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._number = value.number;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // number - computed: false, optional: true, required: false
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}
export interface JourneyViewsElementsFilterNumberPredicatesRange {
  /**
  * eq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#eq JourneyViews#eq}
  */
  readonly eq?: JourneyViewsElementsFilterNumberPredicatesRangeEq;
  /**
  * gt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#gt JourneyViews#gt}
  */
  readonly gt?: JourneyViewsElementsFilterNumberPredicatesRangeGt;
  /**
  * gte block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#gte JourneyViews#gte}
  */
  readonly gte?: JourneyViewsElementsFilterNumberPredicatesRangeGte;
  /**
  * lt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#lt JourneyViews#lt}
  */
  readonly lt?: JourneyViewsElementsFilterNumberPredicatesRangeLt;
  /**
  * lte block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#lte JourneyViews#lte}
  */
  readonly lte?: JourneyViewsElementsFilterNumberPredicatesRangeLte;
  /**
  * neq block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#neq JourneyViews#neq}
  */
  readonly neq?: JourneyViewsElementsFilterNumberPredicatesRangeNeq;
}

export function journeyViewsElementsFilterNumberPredicatesRangeToTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeOutputReference | JourneyViewsElementsFilterNumberPredicatesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eq: journeyViewsElementsFilterNumberPredicatesRangeEqToTerraform(struct!.eq),
    gt: journeyViewsElementsFilterNumberPredicatesRangeGtToTerraform(struct!.gt),
    gte: journeyViewsElementsFilterNumberPredicatesRangeGteToTerraform(struct!.gte),
    lt: journeyViewsElementsFilterNumberPredicatesRangeLtToTerraform(struct!.lt),
    lte: journeyViewsElementsFilterNumberPredicatesRangeLteToTerraform(struct!.lte),
    neq: journeyViewsElementsFilterNumberPredicatesRangeNeqToTerraform(struct!.neq),
  }
}


export function journeyViewsElementsFilterNumberPredicatesRangeToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicatesRangeOutputReference | JourneyViewsElementsFilterNumberPredicatesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eq: {
      value: journeyViewsElementsFilterNumberPredicatesRangeEqToHclTerraform(struct!.eq),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesRangeEqList",
    },
    gt: {
      value: journeyViewsElementsFilterNumberPredicatesRangeGtToHclTerraform(struct!.gt),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesRangeGtList",
    },
    gte: {
      value: journeyViewsElementsFilterNumberPredicatesRangeGteToHclTerraform(struct!.gte),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesRangeGteList",
    },
    lt: {
      value: journeyViewsElementsFilterNumberPredicatesRangeLtToHclTerraform(struct!.lt),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesRangeLtList",
    },
    lte: {
      value: journeyViewsElementsFilterNumberPredicatesRangeLteToHclTerraform(struct!.lte),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesRangeLteList",
    },
    neq: {
      value: journeyViewsElementsFilterNumberPredicatesRangeNeqToHclTerraform(struct!.neq),
      isBlock: true,
      type: "set",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesRangeNeqList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilterNumberPredicatesRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eq = this._eq?.internalValue;
    }
    if (this._gt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gt = this._gt?.internalValue;
    }
    if (this._gte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gte = this._gte?.internalValue;
    }
    if (this._lt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lt = this._lt?.internalValue;
    }
    if (this._lte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lte = this._lte?.internalValue;
    }
    if (this._neq?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neq = this._neq?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicatesRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eq.internalValue = undefined;
      this._gt.internalValue = undefined;
      this._gte.internalValue = undefined;
      this._lt.internalValue = undefined;
      this._lte.internalValue = undefined;
      this._neq.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eq.internalValue = value.eq;
      this._gt.internalValue = value.gt;
      this._gte.internalValue = value.gte;
      this._lt.internalValue = value.lt;
      this._lte.internalValue = value.lte;
      this._neq.internalValue = value.neq;
    }
  }

  // eq - computed: false, optional: true, required: false
  private _eq = new JourneyViewsElementsFilterNumberPredicatesRangeEqOutputReference(this, "eq");
  public get eq() {
    return this._eq;
  }
  public putEq(value: JourneyViewsElementsFilterNumberPredicatesRangeEq) {
    this._eq.internalValue = value;
  }
  public resetEq() {
    this._eq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eqInput() {
    return this._eq.internalValue;
  }

  // gt - computed: false, optional: true, required: false
  private _gt = new JourneyViewsElementsFilterNumberPredicatesRangeGtOutputReference(this, "gt");
  public get gt() {
    return this._gt;
  }
  public putGt(value: JourneyViewsElementsFilterNumberPredicatesRangeGt) {
    this._gt.internalValue = value;
  }
  public resetGt() {
    this._gt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtInput() {
    return this._gt.internalValue;
  }

  // gte - computed: false, optional: true, required: false
  private _gte = new JourneyViewsElementsFilterNumberPredicatesRangeGteOutputReference(this, "gte");
  public get gte() {
    return this._gte;
  }
  public putGte(value: JourneyViewsElementsFilterNumberPredicatesRangeGte) {
    this._gte.internalValue = value;
  }
  public resetGte() {
    this._gte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gteInput() {
    return this._gte.internalValue;
  }

  // lt - computed: false, optional: true, required: false
  private _lt = new JourneyViewsElementsFilterNumberPredicatesRangeLtOutputReference(this, "lt");
  public get lt() {
    return this._lt;
  }
  public putLt(value: JourneyViewsElementsFilterNumberPredicatesRangeLt) {
    this._lt.internalValue = value;
  }
  public resetLt() {
    this._lt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltInput() {
    return this._lt.internalValue;
  }

  // lte - computed: false, optional: true, required: false
  private _lte = new JourneyViewsElementsFilterNumberPredicatesRangeLteOutputReference(this, "lte");
  public get lte() {
    return this._lte;
  }
  public putLte(value: JourneyViewsElementsFilterNumberPredicatesRangeLte) {
    this._lte.internalValue = value;
  }
  public resetLte() {
    this._lte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lteInput() {
    return this._lte.internalValue;
  }

  // neq - computed: false, optional: true, required: false
  private _neq = new JourneyViewsElementsFilterNumberPredicatesRangeNeqOutputReference(this, "neq");
  public get neq() {
    return this._neq;
  }
  public putNeq(value: JourneyViewsElementsFilterNumberPredicatesRangeNeq) {
    this._neq.internalValue = value;
  }
  public resetNeq() {
    this._neq.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neqInput() {
    return this._neq.internalValue;
  }
}
export interface JourneyViewsElementsFilterNumberPredicates {
  /**
  * The element's attribute being filtered on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#dimension JourneyViews#dimension}
  */
  readonly dimension: string;
  /**
  * set this to true if no specific value to be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#no_value JourneyViews#no_value}
  */
  readonly noValue?: boolean | cdktf.IResolvable;
  /**
  * Optional operator, default is Matches. Valid values: Matches.Valid values: Matches, NotMatches. Defaults to `Matches`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#operator JourneyViews#operator}
  */
  readonly operator?: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#range JourneyViews#range}
  */
  readonly range: JourneyViewsElementsFilterNumberPredicatesRange;
}

export function journeyViewsElementsFilterNumberPredicatesToTerraform(struct?: JourneyViewsElementsFilterNumberPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.stringToTerraform(struct!.dimension),
    no_value: cdktf.booleanToTerraform(struct!.noValue),
    operator: cdktf.stringToTerraform(struct!.operator),
    range: journeyViewsElementsFilterNumberPredicatesRangeToTerraform(struct!.range),
  }
}


export function journeyViewsElementsFilterNumberPredicatesToHclTerraform(struct?: JourneyViewsElementsFilterNumberPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_value: {
      value: cdktf.booleanToHclTerraform(struct!.noValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: journeyViewsElementsFilterNumberPredicatesRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterNumberPredicatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyViewsElementsFilterNumberPredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._noValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noValue = this._noValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterNumberPredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension = undefined;
      this._noValue = undefined;
      this._operator = undefined;
      this._range.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimension = value.dimension;
      this._noValue = value.noValue;
      this._operator = value.operator;
      this._range.internalValue = value.range;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // no_value - computed: false, optional: true, required: false
  private _noValue?: boolean | cdktf.IResolvable; 
  public get noValue() {
    return this.getBooleanAttribute('no_value');
  }
  public set noValue(value: boolean | cdktf.IResolvable) {
    this._noValue = value;
  }
  public resetNoValue() {
    this._noValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noValueInput() {
    return this._noValue;
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

  // range - computed: false, optional: false, required: true
  private _range = new JourneyViewsElementsFilterNumberPredicatesRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: JourneyViewsElementsFilterNumberPredicatesRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}

export class JourneyViewsElementsFilterNumberPredicatesList extends cdktf.ComplexList {
  public internalValue? : JourneyViewsElementsFilterNumberPredicates[] | cdktf.IResolvable

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
  public get(index: number): JourneyViewsElementsFilterNumberPredicatesOutputReference {
    return new JourneyViewsElementsFilterNumberPredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyViewsElementsFilterPredicates {
  /**
  * The element's attribute being filtered on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#dimension JourneyViews#dimension}
  */
  readonly dimension: string;
  /**
  * set this to true if no specific value to be considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#no_value JourneyViews#no_value}
  */
  readonly noValue?: boolean | cdktf.IResolvable;
  /**
  * Optional operator, default is Matches. Valid values: Matches.Valid values: Matches, NotMatches. Defaults to `Matches`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#operator JourneyViews#operator}
  */
  readonly operator?: string;
  /**
  * The identifier for the element based on its type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#values JourneyViews#values}
  */
  readonly values: string[];
}

export function journeyViewsElementsFilterPredicatesToTerraform(struct?: JourneyViewsElementsFilterPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.stringToTerraform(struct!.dimension),
    no_value: cdktf.booleanToTerraform(struct!.noValue),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function journeyViewsElementsFilterPredicatesToHclTerraform(struct?: JourneyViewsElementsFilterPredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.stringToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_value: {
      value: cdktf.booleanToHclTerraform(struct!.noValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterPredicatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyViewsElementsFilterPredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._noValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noValue = this._noValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilterPredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimension = undefined;
      this._noValue = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimension = value.dimension;
      this._noValue = value.noValue;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // dimension - computed: false, optional: false, required: true
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // no_value - computed: false, optional: true, required: false
  private _noValue?: boolean | cdktf.IResolvable; 
  public get noValue() {
    return this.getBooleanAttribute('no_value');
  }
  public set noValue(value: boolean | cdktf.IResolvable) {
    this._noValue = value;
  }
  public resetNoValue() {
    this._noValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noValueInput() {
    return this._noValue;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class JourneyViewsElementsFilterPredicatesList extends cdktf.ComplexList {
  public internalValue? : JourneyViewsElementsFilterPredicates[] | cdktf.IResolvable

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
  public get(index: number): JourneyViewsElementsFilterPredicatesOutputReference {
    return new JourneyViewsElementsFilterPredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyViewsElementsFilter {
  /**
  * Boolean operation to apply to the provided predicates, numberPredicates and clauses. Valid values: And.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#type JourneyViews#type}
  */
  readonly type: string;
  /**
  * number_predicates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#number_predicates JourneyViews#number_predicates}
  */
  readonly numberPredicates?: JourneyViewsElementsFilterNumberPredicates[] | cdktf.IResolvable;
  /**
  * predicates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#predicates JourneyViews#predicates}
  */
  readonly predicates?: JourneyViewsElementsFilterPredicates[] | cdktf.IResolvable;
}

export function journeyViewsElementsFilterToTerraform(struct?: JourneyViewsElementsFilterOutputReference | JourneyViewsElementsFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    number_predicates: cdktf.listMapper(journeyViewsElementsFilterNumberPredicatesToTerraform, true)(struct!.numberPredicates),
    predicates: cdktf.listMapper(journeyViewsElementsFilterPredicatesToTerraform, true)(struct!.predicates),
  }
}


export function journeyViewsElementsFilterToHclTerraform(struct?: JourneyViewsElementsFilterOutputReference | JourneyViewsElementsFilter): any {
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
    number_predicates: {
      value: cdktf.listMapperHcl(journeyViewsElementsFilterNumberPredicatesToHclTerraform, true)(struct!.numberPredicates),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsFilterNumberPredicatesList",
    },
    predicates: {
      value: cdktf.listMapperHcl(journeyViewsElementsFilterPredicatesToHclTerraform, true)(struct!.predicates),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsFilterPredicatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._numberPredicates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberPredicates = this._numberPredicates?.internalValue;
    }
    if (this._predicates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicates = this._predicates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._numberPredicates.internalValue = undefined;
      this._predicates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._numberPredicates.internalValue = value.numberPredicates;
      this._predicates.internalValue = value.predicates;
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

  // number_predicates - computed: false, optional: true, required: false
  private _numberPredicates = new JourneyViewsElementsFilterNumberPredicatesList(this, "number_predicates", false);
  public get numberPredicates() {
    return this._numberPredicates;
  }
  public putNumberPredicates(value: JourneyViewsElementsFilterNumberPredicates[] | cdktf.IResolvable) {
    this._numberPredicates.internalValue = value;
  }
  public resetNumberPredicates() {
    this._numberPredicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberPredicatesInput() {
    return this._numberPredicates.internalValue;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates = new JourneyViewsElementsFilterPredicatesList(this, "predicates", false);
  public get predicates() {
    return this._predicates;
  }
  public putPredicates(value: JourneyViewsElementsFilterPredicates[] | cdktf.IResolvable) {
    this._predicates.internalValue = value;
  }
  public resetPredicates() {
    this._predicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates.internalValue;
  }
}
export interface JourneyViewsElementsFollowedByConstraintAfter {
  /**
  * The unit for the link's time constraint.Valid values: Seconds, Minutes, Hours, Days, Weeks, Months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#unit JourneyViews#unit}
  */
  readonly unit?: string;
  /**
  * The value for the link's time constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#value JourneyViews#value}
  */
  readonly value?: number;
}

export function journeyViewsElementsFollowedByConstraintAfterToTerraform(struct?: JourneyViewsElementsFollowedByConstraintAfterOutputReference | JourneyViewsElementsFollowedByConstraintAfter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function journeyViewsElementsFollowedByConstraintAfterToHclTerraform(struct?: JourneyViewsElementsFollowedByConstraintAfterOutputReference | JourneyViewsElementsFollowedByConstraintAfter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFollowedByConstraintAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFollowedByConstraintAfter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFollowedByConstraintAfter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface JourneyViewsElementsFollowedByConstraintWithin {
  /**
  * The unit for the link's time constraint.Valid values: Seconds, Minutes, Hours, Days, Weeks, Months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#unit JourneyViews#unit}
  */
  readonly unit?: string;
  /**
  * The value for the link's time constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#value JourneyViews#value}
  */
  readonly value?: number;
}

export function journeyViewsElementsFollowedByConstraintWithinToTerraform(struct?: JourneyViewsElementsFollowedByConstraintWithinOutputReference | JourneyViewsElementsFollowedByConstraintWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function journeyViewsElementsFollowedByConstraintWithinToHclTerraform(struct?: JourneyViewsElementsFollowedByConstraintWithinOutputReference | JourneyViewsElementsFollowedByConstraintWithin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFollowedByConstraintWithinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): JourneyViewsElementsFollowedByConstraintWithin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFollowedByConstraintWithin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface JourneyViewsElementsFollowedBy {
  /**
  * The type of events that will be counted. Note: Concurrent will override any JourneyViewLinkTimeConstraint. Default is Sequential.Valid values: All, Concurrent, Sequential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#event_count_type JourneyViews#event_count_type}
  */
  readonly eventCountType?: string;
  /**
  * The identifier of the element downstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#id JourneyViews#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Other (secondary) attributes on which this link should join the customers being counted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#join_attributes JourneyViews#join_attributes}
  */
  readonly joinAttributes?: string[];
  /**
  * constraint_after block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#constraint_after JourneyViews#constraint_after}
  */
  readonly constraintAfter?: JourneyViewsElementsFollowedByConstraintAfter;
  /**
  * constraint_within block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#constraint_within JourneyViews#constraint_within}
  */
  readonly constraintWithin?: JourneyViewsElementsFollowedByConstraintWithin;
}

export function journeyViewsElementsFollowedByToTerraform(struct?: JourneyViewsElementsFollowedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_count_type: cdktf.stringToTerraform(struct!.eventCountType),
    id: cdktf.stringToTerraform(struct!.id),
    join_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.joinAttributes),
    constraint_after: journeyViewsElementsFollowedByConstraintAfterToTerraform(struct!.constraintAfter),
    constraint_within: journeyViewsElementsFollowedByConstraintWithinToTerraform(struct!.constraintWithin),
  }
}


export function journeyViewsElementsFollowedByToHclTerraform(struct?: JourneyViewsElementsFollowedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_count_type: {
      value: cdktf.stringToHclTerraform(struct!.eventCountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.joinAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    constraint_after: {
      value: journeyViewsElementsFollowedByConstraintAfterToHclTerraform(struct!.constraintAfter),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsFollowedByConstraintAfterList",
    },
    constraint_within: {
      value: journeyViewsElementsFollowedByConstraintWithinToHclTerraform(struct!.constraintWithin),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsFollowedByConstraintWithinList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsFollowedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyViewsElementsFollowedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventCountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCountType = this._eventCountType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._joinAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinAttributes = this._joinAttributes;
    }
    if (this._constraintAfter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintAfter = this._constraintAfter?.internalValue;
    }
    if (this._constraintWithin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintWithin = this._constraintWithin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElementsFollowedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventCountType = undefined;
      this._id = undefined;
      this._joinAttributes = undefined;
      this._constraintAfter.internalValue = undefined;
      this._constraintWithin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventCountType = value.eventCountType;
      this._id = value.id;
      this._joinAttributes = value.joinAttributes;
      this._constraintAfter.internalValue = value.constraintAfter;
      this._constraintWithin.internalValue = value.constraintWithin;
    }
  }

  // event_count_type - computed: false, optional: true, required: false
  private _eventCountType?: string; 
  public get eventCountType() {
    return this.getStringAttribute('event_count_type');
  }
  public set eventCountType(value: string) {
    this._eventCountType = value;
  }
  public resetEventCountType() {
    this._eventCountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCountTypeInput() {
    return this._eventCountType;
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

  // join_attributes - computed: false, optional: true, required: false
  private _joinAttributes?: string[]; 
  public get joinAttributes() {
    return this.getListAttribute('join_attributes');
  }
  public set joinAttributes(value: string[]) {
    this._joinAttributes = value;
  }
  public resetJoinAttributes() {
    this._joinAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinAttributesInput() {
    return this._joinAttributes;
  }

  // constraint_after - computed: false, optional: true, required: false
  private _constraintAfter = new JourneyViewsElementsFollowedByConstraintAfterOutputReference(this, "constraint_after");
  public get constraintAfter() {
    return this._constraintAfter;
  }
  public putConstraintAfter(value: JourneyViewsElementsFollowedByConstraintAfter) {
    this._constraintAfter.internalValue = value;
  }
  public resetConstraintAfter() {
    this._constraintAfter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintAfterInput() {
    return this._constraintAfter.internalValue;
  }

  // constraint_within - computed: false, optional: true, required: false
  private _constraintWithin = new JourneyViewsElementsFollowedByConstraintWithinOutputReference(this, "constraint_within");
  public get constraintWithin() {
    return this._constraintWithin;
  }
  public putConstraintWithin(value: JourneyViewsElementsFollowedByConstraintWithin) {
    this._constraintWithin.internalValue = value;
  }
  public resetConstraintWithin() {
    this._constraintWithin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintWithinInput() {
    return this._constraintWithin.internalValue;
  }
}

export class JourneyViewsElementsFollowedByList extends cdktf.ComplexList {
  public internalValue? : JourneyViewsElementsFollowedBy[] | cdktf.IResolvable

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
  public get(index: number): JourneyViewsElementsFollowedByOutputReference {
    return new JourneyViewsElementsFollowedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface JourneyViewsElements {
  /**
  * The unique identifier of the element within the elements list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#id JourneyViews#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The unique name of the element within the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#name JourneyViews#name}
  */
  readonly name: string;
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#attributes JourneyViews#attributes}
  */
  readonly attributes: JourneyViewsElementsAttributes;
  /**
  * display_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#display_attributes JourneyViews#display_attributes}
  */
  readonly displayAttributes?: JourneyViewsElementsDisplayAttributes;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#filter JourneyViews#filter}
  */
  readonly filter?: JourneyViewsElementsFilter;
  /**
  * followed_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#followed_by JourneyViews#followed_by}
  */
  readonly followedBy?: JourneyViewsElementsFollowedBy[] | cdktf.IResolvable;
}

export function journeyViewsElementsToTerraform(struct?: JourneyViewsElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    attributes: journeyViewsElementsAttributesToTerraform(struct!.attributes),
    display_attributes: journeyViewsElementsDisplayAttributesToTerraform(struct!.displayAttributes),
    filter: journeyViewsElementsFilterToTerraform(struct!.filter),
    followed_by: cdktf.listMapper(journeyViewsElementsFollowedByToTerraform, true)(struct!.followedBy),
  }
}


export function journeyViewsElementsToHclTerraform(struct?: JourneyViewsElements | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attributes: {
      value: journeyViewsElementsAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsAttributesList",
    },
    display_attributes: {
      value: journeyViewsElementsDisplayAttributesToHclTerraform(struct!.displayAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsDisplayAttributesList",
    },
    filter: {
      value: journeyViewsElementsFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsFilterList",
    },
    followed_by: {
      value: cdktf.listMapperHcl(journeyViewsElementsFollowedByToHclTerraform, true)(struct!.followedBy),
      isBlock: true,
      type: "list",
      storageClassType: "JourneyViewsElementsFollowedByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class JourneyViewsElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): JourneyViewsElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._displayAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayAttributes = this._displayAttributes?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._followedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.followedBy = this._followedBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: JourneyViewsElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._attributes.internalValue = undefined;
      this._displayAttributes.internalValue = undefined;
      this._filter.internalValue = undefined;
      this._followedBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._attributes.internalValue = value.attributes;
      this._displayAttributes.internalValue = value.displayAttributes;
      this._filter.internalValue = value.filter;
      this._followedBy.internalValue = value.followedBy;
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

  // attributes - computed: false, optional: false, required: true
  private _attributes = new JourneyViewsElementsAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: JourneyViewsElementsAttributes) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // display_attributes - computed: false, optional: true, required: false
  private _displayAttributes = new JourneyViewsElementsDisplayAttributesOutputReference(this, "display_attributes");
  public get displayAttributes() {
    return this._displayAttributes;
  }
  public putDisplayAttributes(value: JourneyViewsElementsDisplayAttributes) {
    this._displayAttributes.internalValue = value;
  }
  public resetDisplayAttributes() {
    this._displayAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayAttributesInput() {
    return this._displayAttributes.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new JourneyViewsElementsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: JourneyViewsElementsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // followed_by - computed: false, optional: true, required: false
  private _followedBy = new JourneyViewsElementsFollowedByList(this, "followed_by", false);
  public get followedBy() {
    return this._followedBy;
  }
  public putFollowedBy(value: JourneyViewsElementsFollowedBy[] | cdktf.IResolvable) {
    this._followedBy.internalValue = value;
  }
  public resetFollowedBy() {
    this._followedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followedByInput() {
    return this._followedBy.internalValue;
  }
}

export class JourneyViewsElementsList extends cdktf.ComplexList {
  public internalValue? : JourneyViewsElements[] | cdktf.IResolvable

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
  public get(index: number): JourneyViewsElementsOutputReference {
    return new JourneyViewsElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views genesyscloud_journey_views}
*/
export class JourneyViews extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_journey_views";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JourneyViews resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JourneyViews to import
  * @param importFromId The id of the existing JourneyViews that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JourneyViews to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_journey_views", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/journey_views genesyscloud_journey_views} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JourneyViewsConfig
  */
  public constructor(scope: Construct, id: string, config: JourneyViewsConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_journey_views',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
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
    this._duration = config.duration;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._charts.internalValue = config.charts;
    this._elements.internalValue = config.elements;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // charts - computed: false, optional: true, required: false
  private _charts = new JourneyViewsChartsList(this, "charts", false);
  public get charts() {
    return this._charts;
  }
  public putCharts(value: JourneyViewsCharts[] | cdktf.IResolvable) {
    this._charts.internalValue = value;
  }
  public resetCharts() {
    this._charts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartsInput() {
    return this._charts.internalValue;
  }

  // elements - computed: false, optional: true, required: false
  private _elements = new JourneyViewsElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: JourneyViewsElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  public resetElements() {
    this._elements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.stringToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      charts: cdktf.listMapper(journeyViewsChartsToTerraform, true)(this._charts.internalValue),
      elements: cdktf.listMapper(journeyViewsElementsToTerraform, true)(this._elements.internalValue),
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
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
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
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
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
      charts: {
        value: cdktf.listMapperHcl(journeyViewsChartsToHclTerraform, true)(this._charts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JourneyViewsChartsList",
      },
      elements: {
        value: cdktf.listMapperHcl(journeyViewsElementsToHclTerraform, true)(this._elements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "JourneyViewsElementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
