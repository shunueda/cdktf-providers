// https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * How many decimal places to render on the graph
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#decimal_places Metric#decimal_places}
  */
  readonly decimalPlaces?: number;
  /**
  * Should the metric be displayed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#display Metric#display}
  */
  readonly display?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#id Metric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier used to look up the metric data from the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#metric_identifier Metric#metric_identifier}
  */
  readonly metricIdentifier?: string;
  /**
  * ID of the metric provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#metrics_provider_id Metric#metrics_provider_id}
  */
  readonly metricsProviderId: string;
  /**
  * Display name for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#name Metric#name}
  */
  readonly name?: string;
  /**
  * The ID of the page this metric belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#page_id Metric#page_id}
  */
  readonly pageId: string;
  /**
  * Suffix to describe the units on the graph
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#suffix Metric#suffix}
  */
  readonly suffix?: string;
  /**
  * Tooltip for the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#tooltip_description Metric#tooltip_description}
  */
  readonly tooltipDescription?: string;
  /**
  * The transform to apply to metric before pulling into Statuspage. One of: 'average', 'count', 'max', 'min', 'sum', 'response_time' or 'uptime'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#transform Metric#transform}
  */
  readonly transform?: string;
  /**
  * Should the values on the y axis be hidden on render
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#y_axis_hidden Metric#y_axis_hidden}
  */
  readonly yAxisHidden?: boolean | cdktf.IResolvable;
  /**
  * The upper bound of the y axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#y_axis_max Metric#y_axis_max}
  */
  readonly yAxisMax?: number;
  /**
  * The lower bound of the y axis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#y_axis_min Metric#y_axis_min}
  */
  readonly yAxisMin?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric statuspage_metric}
*/
export class Metric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "statuspage_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Metric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Metric to import
  * @param importFromId The id of the existing Metric that should be imported. Refer to the {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Metric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "statuspage_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yannh/statuspage/0.1.12/docs/resources/metric statuspage_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricConfig
  */
  public constructor(scope: Construct, id: string, config: MetricConfig) {
    super(scope, id, {
      terraformResourceType: 'statuspage_metric',
      terraformGeneratorMetadata: {
        providerName: 'statuspage',
        providerVersion: '0.1.12',
        providerVersionConstraint: '0.1.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._decimalPlaces = config.decimalPlaces;
    this._display = config.display;
    this._id = config.id;
    this._metricIdentifier = config.metricIdentifier;
    this._metricsProviderId = config.metricsProviderId;
    this._name = config.name;
    this._pageId = config.pageId;
    this._suffix = config.suffix;
    this._tooltipDescription = config.tooltipDescription;
    this._transform = config.transform;
    this._yAxisHidden = config.yAxisHidden;
    this._yAxisMax = config.yAxisMax;
    this._yAxisMin = config.yAxisMin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // decimal_places - computed: false, optional: true, required: false
  private _decimalPlaces?: number; 
  public get decimalPlaces() {
    return this.getNumberAttribute('decimal_places');
  }
  public set decimalPlaces(value: number) {
    this._decimalPlaces = value;
  }
  public resetDecimalPlaces() {
    this._decimalPlaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decimalPlacesInput() {
    return this._decimalPlaces;
  }

  // display - computed: false, optional: true, required: false
  private _display?: boolean | cdktf.IResolvable; 
  public get display() {
    return this.getBooleanAttribute('display');
  }
  public set display(value: boolean | cdktf.IResolvable) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
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

  // metric_identifier - computed: false, optional: true, required: false
  private _metricIdentifier?: string; 
  public get metricIdentifier() {
    return this.getStringAttribute('metric_identifier');
  }
  public set metricIdentifier(value: string) {
    this._metricIdentifier = value;
  }
  public resetMetricIdentifier() {
    this._metricIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdentifierInput() {
    return this._metricIdentifier;
  }

  // metrics_provider_id - computed: false, optional: false, required: true
  private _metricsProviderId?: string; 
  public get metricsProviderId() {
    return this.getStringAttribute('metrics_provider_id');
  }
  public set metricsProviderId(value: string) {
    this._metricsProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsProviderIdInput() {
    return this._metricsProviderId;
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

  // page_id - computed: false, optional: false, required: true
  private _pageId?: string; 
  public get pageId() {
    return this.getStringAttribute('page_id');
  }
  public set pageId(value: string) {
    this._pageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageIdInput() {
    return this._pageId;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }

  // tooltip_description - computed: false, optional: true, required: false
  private _tooltipDescription?: string; 
  public get tooltipDescription() {
    return this.getStringAttribute('tooltip_description');
  }
  public set tooltipDescription(value: string) {
    this._tooltipDescription = value;
  }
  public resetTooltipDescription() {
    this._tooltipDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipDescriptionInput() {
    return this._tooltipDescription;
  }

  // transform - computed: false, optional: true, required: false
  private _transform?: string; 
  public get transform() {
    return this.getStringAttribute('transform');
  }
  public set transform(value: string) {
    this._transform = value;
  }
  public resetTransform() {
    this._transform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformInput() {
    return this._transform;
  }

  // y_axis_hidden - computed: false, optional: true, required: false
  private _yAxisHidden?: boolean | cdktf.IResolvable; 
  public get yAxisHidden() {
    return this.getBooleanAttribute('y_axis_hidden');
  }
  public set yAxisHidden(value: boolean | cdktf.IResolvable) {
    this._yAxisHidden = value;
  }
  public resetYAxisHidden() {
    this._yAxisHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisHiddenInput() {
    return this._yAxisHidden;
  }

  // y_axis_max - computed: false, optional: true, required: false
  private _yAxisMax?: number; 
  public get yAxisMax() {
    return this.getNumberAttribute('y_axis_max');
  }
  public set yAxisMax(value: number) {
    this._yAxisMax = value;
  }
  public resetYAxisMax() {
    this._yAxisMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMaxInput() {
    return this._yAxisMax;
  }

  // y_axis_min - computed: false, optional: true, required: false
  private _yAxisMin?: number; 
  public get yAxisMin() {
    return this.getNumberAttribute('y_axis_min');
  }
  public set yAxisMin(value: number) {
    this._yAxisMin = value;
  }
  public resetYAxisMin() {
    this._yAxisMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yAxisMinInput() {
    return this._yAxisMin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      decimal_places: cdktf.numberToTerraform(this._decimalPlaces),
      display: cdktf.booleanToTerraform(this._display),
      id: cdktf.stringToTerraform(this._id),
      metric_identifier: cdktf.stringToTerraform(this._metricIdentifier),
      metrics_provider_id: cdktf.stringToTerraform(this._metricsProviderId),
      name: cdktf.stringToTerraform(this._name),
      page_id: cdktf.stringToTerraform(this._pageId),
      suffix: cdktf.stringToTerraform(this._suffix),
      tooltip_description: cdktf.stringToTerraform(this._tooltipDescription),
      transform: cdktf.stringToTerraform(this._transform),
      y_axis_hidden: cdktf.booleanToTerraform(this._yAxisHidden),
      y_axis_max: cdktf.numberToTerraform(this._yAxisMax),
      y_axis_min: cdktf.numberToTerraform(this._yAxisMin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      decimal_places: {
        value: cdktf.numberToHclTerraform(this._decimalPlaces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display: {
        value: cdktf.booleanToHclTerraform(this._display),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_identifier: {
        value: cdktf.stringToHclTerraform(this._metricIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metrics_provider_id: {
        value: cdktf.stringToHclTerraform(this._metricsProviderId),
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
      page_id: {
        value: cdktf.stringToHclTerraform(this._pageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suffix: {
        value: cdktf.stringToHclTerraform(this._suffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tooltip_description: {
        value: cdktf.stringToHclTerraform(this._tooltipDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transform: {
        value: cdktf.stringToHclTerraform(this._transform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      y_axis_hidden: {
        value: cdktf.booleanToHclTerraform(this._yAxisHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      y_axis_max: {
        value: cdktf.numberToHclTerraform(this._yAxisMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      y_axis_min: {
        value: cdktf.numberToHclTerraform(this._yAxisMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
