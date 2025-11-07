// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportLayoutBodyitemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#chart ReportLayoutBodyitem#chart}
  */
  readonly chart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#chart_options ReportLayoutBodyitem#chart_options}
  */
  readonly chartOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#column ReportLayoutBodyitem#column}
  */
  readonly column?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#content ReportLayoutBodyitem#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#description ReportLayoutBodyitem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#device_name ReportLayoutBodyitem#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#device_vdom ReportLayoutBodyitem#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#drill_down_items ReportLayoutBodyitem#drill_down_items}
  */
  readonly drillDownItems?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#drill_down_types ReportLayoutBodyitem#drill_down_types}
  */
  readonly drillDownTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#dynamic_sort_subtable ReportLayoutBodyitem#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#fosid ReportLayoutBodyitem#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#hide ReportLayoutBodyitem#hide}
  */
  readonly hide?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#id ReportLayoutBodyitem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#img_src ReportLayoutBodyitem#img_src}
  */
  readonly imgSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#layout ReportLayoutBodyitem#layout}
  */
  readonly layout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#list_component ReportLayoutBodyitem#list_component}
  */
  readonly listComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#misc_component ReportLayoutBodyitem#misc_component}
  */
  readonly miscComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#style ReportLayoutBodyitem#style}
  */
  readonly style?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#table_caption_style ReportLayoutBodyitem#table_caption_style}
  */
  readonly tableCaptionStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#table_column_widths ReportLayoutBodyitem#table_column_widths}
  */
  readonly tableColumnWidths?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#table_even_row_style ReportLayoutBodyitem#table_even_row_style}
  */
  readonly tableEvenRowStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#table_head_style ReportLayoutBodyitem#table_head_style}
  */
  readonly tableHeadStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#table_odd_row_style ReportLayoutBodyitem#table_odd_row_style}
  */
  readonly tableOddRowStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#text_component ReportLayoutBodyitem#text_component}
  */
  readonly textComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#title ReportLayoutBodyitem#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#top_n ReportLayoutBodyitem#top_n}
  */
  readonly topN?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#type ReportLayoutBodyitem#type}
  */
  readonly type?: string;
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#list ReportLayoutBodyitem#list}
  */
  readonly list?: ReportLayoutBodyitemListStruct[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#parameters ReportLayoutBodyitem#parameters}
  */
  readonly parameters?: ReportLayoutBodyitemParameters[] | cdktf.IResolvable;
}
export interface ReportLayoutBodyitemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#content ReportLayoutBodyitem#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#id ReportLayoutBodyitem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function reportLayoutBodyitemListStructToTerraform(struct?: ReportLayoutBodyitemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function reportLayoutBodyitemListStructToHclTerraform(struct?: ReportLayoutBodyitemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportLayoutBodyitemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutBodyitemListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutBodyitemListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._id = value.id;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ReportLayoutBodyitemListStructList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutBodyitemListStruct[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutBodyitemListStructOutputReference {
    return new ReportLayoutBodyitemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutBodyitemParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#id ReportLayoutBodyitem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#name ReportLayoutBodyitem#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#value ReportLayoutBodyitem#value}
  */
  readonly value?: string;
}

export function reportLayoutBodyitemParametersToTerraform(struct?: ReportLayoutBodyitemParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function reportLayoutBodyitemParametersToHclTerraform(struct?: ReportLayoutBodyitemParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class ReportLayoutBodyitemParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutBodyitemParameters | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutBodyitemParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
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
      this._id = value.id;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // value - computed: false, optional: true, required: false
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

export class ReportLayoutBodyitemParametersList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutBodyitemParameters[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutBodyitemParametersOutputReference {
    return new ReportLayoutBodyitemParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem fmgdevice_report_layout_bodyitem}
*/
export class ReportLayoutBodyitem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_report_layout_bodyitem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportLayoutBodyitem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportLayoutBodyitem to import
  * @param importFromId The id of the existing ReportLayoutBodyitem that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportLayoutBodyitem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_report_layout_bodyitem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_bodyitem fmgdevice_report_layout_bodyitem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportLayoutBodyitemConfig
  */
  public constructor(scope: Construct, id: string, config: ReportLayoutBodyitemConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_report_layout_bodyitem',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chart = config.chart;
    this._chartOptions = config.chartOptions;
    this._column = config.column;
    this._content = config.content;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._drillDownItems = config.drillDownItems;
    this._drillDownTypes = config.drillDownTypes;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._hide = config.hide;
    this._id = config.id;
    this._imgSrc = config.imgSrc;
    this._layout = config.layout;
    this._listComponent = config.listComponent;
    this._miscComponent = config.miscComponent;
    this._style = config.style;
    this._tableCaptionStyle = config.tableCaptionStyle;
    this._tableColumnWidths = config.tableColumnWidths;
    this._tableEvenRowStyle = config.tableEvenRowStyle;
    this._tableHeadStyle = config.tableHeadStyle;
    this._tableOddRowStyle = config.tableOddRowStyle;
    this._textComponent = config.textComponent;
    this._title = config.title;
    this._topN = config.topN;
    this._type = config.type;
    this._list.internalValue = config.list;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chart - computed: true, optional: true, required: false
  private _chart?: string[]; 
  public get chart() {
    return cdktf.Fn.tolist(this.getListAttribute('chart'));
  }
  public set chart(value: string[]) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // chart_options - computed: true, optional: true, required: false
  private _chartOptions?: string[]; 
  public get chartOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('chart_options'));
  }
  public set chartOptions(value: string[]) {
    this._chartOptions = value;
  }
  public resetChartOptions() {
    this._chartOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartOptionsInput() {
    return this._chartOptions;
  }

  // column - computed: false, optional: true, required: false
  private _column?: number; 
  public get column() {
    return this.getNumberAttribute('column');
  }
  public set column(value: number) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // drill_down_items - computed: false, optional: true, required: false
  private _drillDownItems?: string; 
  public get drillDownItems() {
    return this.getStringAttribute('drill_down_items');
  }
  public set drillDownItems(value: string) {
    this._drillDownItems = value;
  }
  public resetDrillDownItems() {
    this._drillDownItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownItemsInput() {
    return this._drillDownItems;
  }

  // drill_down_types - computed: false, optional: true, required: false
  private _drillDownTypes?: string; 
  public get drillDownTypes() {
    return this.getStringAttribute('drill_down_types');
  }
  public set drillDownTypes(value: string) {
    this._drillDownTypes = value;
  }
  public resetDrillDownTypes() {
    this._drillDownTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownTypesInput() {
    return this._drillDownTypes;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // hide - computed: false, optional: true, required: false
  private _hide?: string; 
  public get hide() {
    return this.getStringAttribute('hide');
  }
  public set hide(value: string) {
    this._hide = value;
  }
  public resetHide() {
    this._hide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInput() {
    return this._hide;
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

  // img_src - computed: false, optional: true, required: false
  private _imgSrc?: string; 
  public get imgSrc() {
    return this.getStringAttribute('img_src');
  }
  public set imgSrc(value: string) {
    this._imgSrc = value;
  }
  public resetImgSrc() {
    this._imgSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgSrcInput() {
    return this._imgSrc;
  }

  // layout - computed: false, optional: false, required: true
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // list_component - computed: false, optional: true, required: false
  private _listComponent?: string; 
  public get listComponent() {
    return this.getStringAttribute('list_component');
  }
  public set listComponent(value: string) {
    this._listComponent = value;
  }
  public resetListComponent() {
    this._listComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listComponentInput() {
    return this._listComponent;
  }

  // misc_component - computed: true, optional: true, required: false
  private _miscComponent?: string; 
  public get miscComponent() {
    return this.getStringAttribute('misc_component');
  }
  public set miscComponent(value: string) {
    this._miscComponent = value;
  }
  public resetMiscComponent() {
    this._miscComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get miscComponentInput() {
    return this._miscComponent;
  }

  // style - computed: true, optional: true, required: false
  private _style?: string[]; 
  public get style() {
    return cdktf.Fn.tolist(this.getListAttribute('style'));
  }
  public set style(value: string[]) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // table_caption_style - computed: true, optional: true, required: false
  private _tableCaptionStyle?: string[]; 
  public get tableCaptionStyle() {
    return cdktf.Fn.tolist(this.getListAttribute('table_caption_style'));
  }
  public set tableCaptionStyle(value: string[]) {
    this._tableCaptionStyle = value;
  }
  public resetTableCaptionStyle() {
    this._tableCaptionStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableCaptionStyleInput() {
    return this._tableCaptionStyle;
  }

  // table_column_widths - computed: false, optional: true, required: false
  private _tableColumnWidths?: string; 
  public get tableColumnWidths() {
    return this.getStringAttribute('table_column_widths');
  }
  public set tableColumnWidths(value: string) {
    this._tableColumnWidths = value;
  }
  public resetTableColumnWidths() {
    this._tableColumnWidths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableColumnWidthsInput() {
    return this._tableColumnWidths;
  }

  // table_even_row_style - computed: true, optional: true, required: false
  private _tableEvenRowStyle?: string[]; 
  public get tableEvenRowStyle() {
    return cdktf.Fn.tolist(this.getListAttribute('table_even_row_style'));
  }
  public set tableEvenRowStyle(value: string[]) {
    this._tableEvenRowStyle = value;
  }
  public resetTableEvenRowStyle() {
    this._tableEvenRowStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEvenRowStyleInput() {
    return this._tableEvenRowStyle;
  }

  // table_head_style - computed: true, optional: true, required: false
  private _tableHeadStyle?: string[]; 
  public get tableHeadStyle() {
    return cdktf.Fn.tolist(this.getListAttribute('table_head_style'));
  }
  public set tableHeadStyle(value: string[]) {
    this._tableHeadStyle = value;
  }
  public resetTableHeadStyle() {
    this._tableHeadStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableHeadStyleInput() {
    return this._tableHeadStyle;
  }

  // table_odd_row_style - computed: true, optional: true, required: false
  private _tableOddRowStyle?: string[]; 
  public get tableOddRowStyle() {
    return cdktf.Fn.tolist(this.getListAttribute('table_odd_row_style'));
  }
  public set tableOddRowStyle(value: string[]) {
    this._tableOddRowStyle = value;
  }
  public resetTableOddRowStyle() {
    this._tableOddRowStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableOddRowStyleInput() {
    return this._tableOddRowStyle;
  }

  // text_component - computed: true, optional: true, required: false
  private _textComponent?: string; 
  public get textComponent() {
    return this.getStringAttribute('text_component');
  }
  public set textComponent(value: string) {
    this._textComponent = value;
  }
  public resetTextComponent() {
    this._textComponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textComponentInput() {
    return this._textComponent;
  }

  // title - computed: false, optional: true, required: false
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

  // top_n - computed: false, optional: true, required: false
  private _topN?: number; 
  public get topN() {
    return this.getNumberAttribute('top_n');
  }
  public set topN(value: number) {
    this._topN = value;
  }
  public resetTopN() {
    this._topN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNInput() {
    return this._topN;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // list - computed: false, optional: true, required: false
  private _list = new ReportLayoutBodyitemListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: ReportLayoutBodyitemListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ReportLayoutBodyitemParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ReportLayoutBodyitemParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chart: cdktf.listMapper(cdktf.stringToTerraform, false)(this._chart),
      chart_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._chartOptions),
      column: cdktf.numberToTerraform(this._column),
      content: cdktf.stringToTerraform(this._content),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      drill_down_items: cdktf.stringToTerraform(this._drillDownItems),
      drill_down_types: cdktf.stringToTerraform(this._drillDownTypes),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      hide: cdktf.stringToTerraform(this._hide),
      id: cdktf.stringToTerraform(this._id),
      img_src: cdktf.stringToTerraform(this._imgSrc),
      layout: cdktf.stringToTerraform(this._layout),
      list_component: cdktf.stringToTerraform(this._listComponent),
      misc_component: cdktf.stringToTerraform(this._miscComponent),
      style: cdktf.listMapper(cdktf.stringToTerraform, false)(this._style),
      table_caption_style: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tableCaptionStyle),
      table_column_widths: cdktf.stringToTerraform(this._tableColumnWidths),
      table_even_row_style: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tableEvenRowStyle),
      table_head_style: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tableHeadStyle),
      table_odd_row_style: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tableOddRowStyle),
      text_component: cdktf.stringToTerraform(this._textComponent),
      title: cdktf.stringToTerraform(this._title),
      top_n: cdktf.numberToTerraform(this._topN),
      type: cdktf.stringToTerraform(this._type),
      list: cdktf.listMapper(reportLayoutBodyitemListStructToTerraform, true)(this._list.internalValue),
      parameters: cdktf.listMapper(reportLayoutBodyitemParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chart: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._chart),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      chart_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._chartOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      column: {
        value: cdktf.numberToHclTerraform(this._column),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drill_down_items: {
        value: cdktf.stringToHclTerraform(this._drillDownItems),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drill_down_types: {
        value: cdktf.stringToHclTerraform(this._drillDownTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hide: {
        value: cdktf.stringToHclTerraform(this._hide),
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
      img_src: {
        value: cdktf.stringToHclTerraform(this._imgSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layout: {
        value: cdktf.stringToHclTerraform(this._layout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_component: {
        value: cdktf.stringToHclTerraform(this._listComponent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      misc_component: {
        value: cdktf.stringToHclTerraform(this._miscComponent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      style: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._style),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      table_caption_style: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tableCaptionStyle),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      table_column_widths: {
        value: cdktf.stringToHclTerraform(this._tableColumnWidths),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_even_row_style: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tableEvenRowStyle),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      table_head_style: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tableHeadStyle),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      table_odd_row_style: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tableOddRowStyle),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      text_component: {
        value: cdktf.stringToHclTerraform(this._textComponent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      top_n: {
        value: cdktf.numberToHclTerraform(this._topN),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list: {
        value: cdktf.listMapperHcl(reportLayoutBodyitemListStructToHclTerraform, true)(this._list.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportLayoutBodyitemListStructList",
      },
      parameters: {
        value: cdktf.listMapperHcl(reportLayoutBodyitemParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportLayoutBodyitemParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
