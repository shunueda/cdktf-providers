// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the chart (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#description TableChart#description}
  */
  readonly description?: string;
  /**
  * (false by default) If false, samples a subset of the output MTS, which improves UI performance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#disable_sampling TableChart#disable_sampling}
  */
  readonly disableSampling?: boolean | cdktf.IResolvable;
  /**
  * Properties to group by in the Table (in nesting order)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#group_by TableChart#group_by}
  */
  readonly groupBy?: string[];
  /**
  * (false by default) Whether to show the timestamp in the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#hide_timestamp TableChart#hide_timestamp}
  */
  readonly hideTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#id TableChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How long (in seconds) to wait for late datapoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#max_delay TableChart#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * The minimum resolution (in seconds) to use for computing the underlying program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#minimum_resolution TableChart#minimum_resolution}
  */
  readonly minimumResolution?: number;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#name TableChart#name}
  */
  readonly name: string;
  /**
  * Signalflow program text for the chart. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#program_text TableChart#program_text}
  */
  readonly programText: string;
  /**
  * How often (in seconds) to refresh the values of the Table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#refresh_interval TableChart#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * Tags associated with the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#tags TableChart#tags}
  */
  readonly tags?: string[];
  /**
  * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#timezone TableChart#timezone}
  */
  readonly timezone?: string;
  /**
  * (Metric by default) Must be "Metric" or "Binary"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#unit_prefix TableChart#unit_prefix}
  */
  readonly unitPrefix?: string;
  /**
  * viz_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#viz_options TableChart#viz_options}
  */
  readonly vizOptions?: TableChartVizOptions[] | cdktf.IResolvable;
}
export interface TableChartVizOptions {
  /**
  * The color to use. Must be one of gray, blue, azure, navy, brown, orange, yellow, magenta, red, pink, violet, purple, lilac, emerald, chartreuse, yellowgreen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#color TableChart#color}
  */
  readonly color?: string;
  /**
  * Specifies an alternate value for the Plot Name column of the Data Table associated with the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#display_name TableChart#display_name}
  */
  readonly displayName?: string;
  /**
  * The label used in the publish statement that displays the plot (metric time series data) you want to customize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#label TableChart#label}
  */
  readonly label: string;
  /**
  * An arbitrary prefix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#value_prefix TableChart#value_prefix}
  */
  readonly valuePrefix?: string;
  /**
  * An arbitrary suffix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#value_suffix TableChart#value_suffix}
  */
  readonly valueSuffix?: string;
  /**
  * A unit to attach to this plot. Units support automatic scaling (eg thousands of bytes will be displayed as kilobytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#value_unit TableChart#value_unit}
  */
  readonly valueUnit?: string;
}

export function tableChartVizOptionsToTerraform(struct?: TableChartVizOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.stringToTerraform(struct!.label),
    value_prefix: cdktf.stringToTerraform(struct!.valuePrefix),
    value_suffix: cdktf.stringToTerraform(struct!.valueSuffix),
    value_unit: cdktf.stringToTerraform(struct!.valueUnit),
  }
}


export function tableChartVizOptionsToHclTerraform(struct?: TableChartVizOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
    value_prefix: {
      value: cdktf.stringToHclTerraform(struct!.valuePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_suffix: {
      value: cdktf.stringToHclTerraform(struct!.valueSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_unit: {
      value: cdktf.stringToHclTerraform(struct!.valueUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableChartVizOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TableChartVizOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._valuePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePrefix = this._valuePrefix;
    }
    if (this._valueSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSuffix = this._valueSuffix;
    }
    if (this._valueUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueUnit = this._valueUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableChartVizOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._displayName = undefined;
      this._label = undefined;
      this._valuePrefix = undefined;
      this._valueSuffix = undefined;
      this._valueUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._displayName = value.displayName;
      this._label = value.label;
      this._valuePrefix = value.valuePrefix;
      this._valueSuffix = value.valueSuffix;
      this._valueUnit = value.valueUnit;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value_prefix - computed: false, optional: true, required: false
  private _valuePrefix?: string; 
  public get valuePrefix() {
    return this.getStringAttribute('value_prefix');
  }
  public set valuePrefix(value: string) {
    this._valuePrefix = value;
  }
  public resetValuePrefix() {
    this._valuePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePrefixInput() {
    return this._valuePrefix;
  }

  // value_suffix - computed: false, optional: true, required: false
  private _valueSuffix?: string; 
  public get valueSuffix() {
    return this.getStringAttribute('value_suffix');
  }
  public set valueSuffix(value: string) {
    this._valueSuffix = value;
  }
  public resetValueSuffix() {
    this._valueSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSuffixInput() {
    return this._valueSuffix;
  }

  // value_unit - computed: false, optional: true, required: false
  private _valueUnit?: string; 
  public get valueUnit() {
    return this.getStringAttribute('value_unit');
  }
  public set valueUnit(value: string) {
    this._valueUnit = value;
  }
  public resetValueUnit() {
    this._valueUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueUnitInput() {
    return this._valueUnit;
  }
}

export class TableChartVizOptionsList extends cdktf.ComplexList {
  public internalValue? : TableChartVizOptions[] | cdktf.IResolvable

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
  public get(index: number): TableChartVizOptionsOutputReference {
    return new TableChartVizOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart signalfx_table_chart}
*/
export class TableChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_table_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TableChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TableChart to import
  * @param importFromId The id of the existing TableChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TableChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_table_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.22.3/docs/resources/table_chart signalfx_table_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableChartConfig
  */
  public constructor(scope: Construct, id: string, config: TableChartConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_table_chart',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.22.3'
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
    this._disableSampling = config.disableSampling;
    this._groupBy = config.groupBy;
    this._hideTimestamp = config.hideTimestamp;
    this._id = config.id;
    this._maxDelay = config.maxDelay;
    this._minimumResolution = config.minimumResolution;
    this._name = config.name;
    this._programText = config.programText;
    this._refreshInterval = config.refreshInterval;
    this._tags = config.tags;
    this._timezone = config.timezone;
    this._unitPrefix = config.unitPrefix;
    this._vizOptions.internalValue = config.vizOptions;
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

  // disable_sampling - computed: false, optional: true, required: false
  private _disableSampling?: boolean | cdktf.IResolvable; 
  public get disableSampling() {
    return this.getBooleanAttribute('disable_sampling');
  }
  public set disableSampling(value: boolean | cdktf.IResolvable) {
    this._disableSampling = value;
  }
  public resetDisableSampling() {
    this._disableSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSamplingInput() {
    return this._disableSampling;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // hide_timestamp - computed: false, optional: true, required: false
  private _hideTimestamp?: boolean | cdktf.IResolvable; 
  public get hideTimestamp() {
    return this.getBooleanAttribute('hide_timestamp');
  }
  public set hideTimestamp(value: boolean | cdktf.IResolvable) {
    this._hideTimestamp = value;
  }
  public resetHideTimestamp() {
    this._hideTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideTimestampInput() {
    return this._hideTimestamp;
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

  // max_delay - computed: false, optional: true, required: false
  private _maxDelay?: number; 
  public get maxDelay() {
    return this.getNumberAttribute('max_delay');
  }
  public set maxDelay(value: number) {
    this._maxDelay = value;
  }
  public resetMaxDelay() {
    this._maxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayInput() {
    return this._maxDelay;
  }

  // minimum_resolution - computed: false, optional: true, required: false
  private _minimumResolution?: number; 
  public get minimumResolution() {
    return this.getNumberAttribute('minimum_resolution');
  }
  public set minimumResolution(value: number) {
    this._minimumResolution = value;
  }
  public resetMinimumResolution() {
    this._minimumResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumResolutionInput() {
    return this._minimumResolution;
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

  // program_text - computed: false, optional: false, required: true
  private _programText?: string; 
  public get programText() {
    return this.getStringAttribute('program_text');
  }
  public set programText(value: string) {
    this._programText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programTextInput() {
    return this._programText;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // unit_prefix - computed: false, optional: true, required: false
  private _unitPrefix?: string; 
  public get unitPrefix() {
    return this.getStringAttribute('unit_prefix');
  }
  public set unitPrefix(value: string) {
    this._unitPrefix = value;
  }
  public resetUnitPrefix() {
    this._unitPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitPrefixInput() {
    return this._unitPrefix;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // viz_options - computed: false, optional: true, required: false
  private _vizOptions = new TableChartVizOptionsList(this, "viz_options", true);
  public get vizOptions() {
    return this._vizOptions;
  }
  public putVizOptions(value: TableChartVizOptions[] | cdktf.IResolvable) {
    this._vizOptions.internalValue = value;
  }
  public resetVizOptions() {
    this._vizOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vizOptionsInput() {
    return this._vizOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable_sampling: cdktf.booleanToTerraform(this._disableSampling),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      hide_timestamp: cdktf.booleanToTerraform(this._hideTimestamp),
      id: cdktf.stringToTerraform(this._id),
      max_delay: cdktf.numberToTerraform(this._maxDelay),
      minimum_resolution: cdktf.numberToTerraform(this._minimumResolution),
      name: cdktf.stringToTerraform(this._name),
      program_text: cdktf.stringToTerraform(this._programText),
      refresh_interval: cdktf.numberToTerraform(this._refreshInterval),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      timezone: cdktf.stringToTerraform(this._timezone),
      unit_prefix: cdktf.stringToTerraform(this._unitPrefix),
      viz_options: cdktf.listMapper(tableChartVizOptionsToTerraform, true)(this._vizOptions.internalValue),
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
      disable_sampling: {
        value: cdktf.booleanToHclTerraform(this._disableSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hide_timestamp: {
        value: cdktf.booleanToHclTerraform(this._hideTimestamp),
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
      max_delay: {
        value: cdktf.numberToHclTerraform(this._maxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum_resolution: {
        value: cdktf.numberToHclTerraform(this._minimumResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_text: {
        value: cdktf.stringToHclTerraform(this._programText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval: {
        value: cdktf.numberToHclTerraform(this._refreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit_prefix: {
        value: cdktf.stringToHclTerraform(this._unitPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      viz_options: {
        value: cdktf.listMapperHcl(tableChartVizOptionsToHclTerraform, true)(this._vizOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TableChartVizOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
