// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportLayoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#cutoff_option ReportLayout#cutoff_option}
  */
  readonly cutoffOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#cutoff_time ReportLayout#cutoff_time}
  */
  readonly cutoffTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#day ReportLayout#day}
  */
  readonly day?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#description ReportLayout#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#device_name ReportLayout#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#device_vdom ReportLayout#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#dynamic_sort_subtable ReportLayout#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#email_recipients ReportLayout#email_recipients}
  */
  readonly emailRecipients?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#email_send ReportLayout#email_send}
  */
  readonly emailSend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#format ReportLayout#format}
  */
  readonly format?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#id ReportLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#max_pdf_report ReportLayout#max_pdf_report}
  */
  readonly maxPdfReport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#name ReportLayout#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#options ReportLayout#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#schedule_type ReportLayout#schedule_type}
  */
  readonly scheduleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#style_theme ReportLayout#style_theme}
  */
  readonly styleTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#subtitle ReportLayout#subtitle}
  */
  readonly subtitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#time ReportLayout#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#title ReportLayout#title}
  */
  readonly title?: string;
  /**
  * body_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#body_item ReportLayout#body_item}
  */
  readonly bodyItem?: ReportLayoutBodyItem[] | cdktf.IResolvable;
  /**
  * page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#page ReportLayout#page}
  */
  readonly page?: ReportLayoutPage;
}
export interface ReportLayoutBodyItemListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#content ReportLayout#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#id ReportLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function reportLayoutBodyItemListStructToTerraform(struct?: ReportLayoutBodyItemListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function reportLayoutBodyItemListStructToHclTerraform(struct?: ReportLayoutBodyItemListStruct | cdktf.IResolvable): any {
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

export class ReportLayoutBodyItemListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutBodyItemListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ReportLayoutBodyItemListStruct | cdktf.IResolvable | undefined) {
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

export class ReportLayoutBodyItemListStructList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutBodyItemListStruct[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutBodyItemListStructOutputReference {
    return new ReportLayoutBodyItemListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutBodyItemParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#id ReportLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#name ReportLayout#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#value ReportLayout#value}
  */
  readonly value?: string;
}

export function reportLayoutBodyItemParametersToTerraform(struct?: ReportLayoutBodyItemParameters | cdktf.IResolvable): any {
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


export function reportLayoutBodyItemParametersToHclTerraform(struct?: ReportLayoutBodyItemParameters | cdktf.IResolvable): any {
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

export class ReportLayoutBodyItemParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutBodyItemParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ReportLayoutBodyItemParameters | cdktf.IResolvable | undefined) {
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

export class ReportLayoutBodyItemParametersList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutBodyItemParameters[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutBodyItemParametersOutputReference {
    return new ReportLayoutBodyItemParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutBodyItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#chart ReportLayout#chart}
  */
  readonly chart?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#chart_options ReportLayout#chart_options}
  */
  readonly chartOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#column ReportLayout#column}
  */
  readonly column?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#content ReportLayout#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#description ReportLayout#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#drill_down_items ReportLayout#drill_down_items}
  */
  readonly drillDownItems?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#drill_down_types ReportLayout#drill_down_types}
  */
  readonly drillDownTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#hide ReportLayout#hide}
  */
  readonly hide?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#id ReportLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#img_src ReportLayout#img_src}
  */
  readonly imgSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#list_component ReportLayout#list_component}
  */
  readonly listComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#misc_component ReportLayout#misc_component}
  */
  readonly miscComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#style ReportLayout#style}
  */
  readonly style?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#table_caption_style ReportLayout#table_caption_style}
  */
  readonly tableCaptionStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#table_column_widths ReportLayout#table_column_widths}
  */
  readonly tableColumnWidths?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#table_even_row_style ReportLayout#table_even_row_style}
  */
  readonly tableEvenRowStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#table_head_style ReportLayout#table_head_style}
  */
  readonly tableHeadStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#table_odd_row_style ReportLayout#table_odd_row_style}
  */
  readonly tableOddRowStyle?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#text_component ReportLayout#text_component}
  */
  readonly textComponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#title ReportLayout#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#top_n ReportLayout#top_n}
  */
  readonly topN?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#type ReportLayout#type}
  */
  readonly type?: string;
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#list ReportLayout#list}
  */
  readonly list?: ReportLayoutBodyItemListStruct[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#parameters ReportLayout#parameters}
  */
  readonly parameters?: ReportLayoutBodyItemParameters[] | cdktf.IResolvable;
}

export function reportLayoutBodyItemToTerraform(struct?: ReportLayoutBodyItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.chart),
    chart_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.chartOptions),
    column: cdktf.numberToTerraform(struct!.column),
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    drill_down_items: cdktf.stringToTerraform(struct!.drillDownItems),
    drill_down_types: cdktf.stringToTerraform(struct!.drillDownTypes),
    hide: cdktf.stringToTerraform(struct!.hide),
    id: cdktf.numberToTerraform(struct!.id),
    img_src: cdktf.stringToTerraform(struct!.imgSrc),
    list_component: cdktf.stringToTerraform(struct!.listComponent),
    misc_component: cdktf.stringToTerraform(struct!.miscComponent),
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    table_caption_style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableCaptionStyle),
    table_column_widths: cdktf.stringToTerraform(struct!.tableColumnWidths),
    table_even_row_style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableEvenRowStyle),
    table_head_style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableHeadStyle),
    table_odd_row_style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tableOddRowStyle),
    text_component: cdktf.stringToTerraform(struct!.textComponent),
    title: cdktf.stringToTerraform(struct!.title),
    top_n: cdktf.numberToTerraform(struct!.topN),
    type: cdktf.stringToTerraform(struct!.type),
    list: cdktf.listMapper(reportLayoutBodyItemListStructToTerraform, true)(struct!.list),
    parameters: cdktf.listMapper(reportLayoutBodyItemParametersToTerraform, true)(struct!.parameters),
  }
}


export function reportLayoutBodyItemToHclTerraform(struct?: ReportLayoutBodyItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.chart),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    chart_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.chartOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    column: {
      value: cdktf.numberToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drill_down_items: {
      value: cdktf.stringToHclTerraform(struct!.drillDownItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drill_down_types: {
      value: cdktf.stringToHclTerraform(struct!.drillDownTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide: {
      value: cdktf.stringToHclTerraform(struct!.hide),
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
    img_src: {
      value: cdktf.stringToHclTerraform(struct!.imgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list_component: {
      value: cdktf.stringToHclTerraform(struct!.listComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    misc_component: {
      value: cdktf.stringToHclTerraform(struct!.miscComponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_caption_style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableCaptionStyle),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_column_widths: {
      value: cdktf.stringToHclTerraform(struct!.tableColumnWidths),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_even_row_style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableEvenRowStyle),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_head_style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableHeadStyle),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    table_odd_row_style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tableOddRowStyle),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    text_component: {
      value: cdktf.stringToHclTerraform(struct!.textComponent),
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
    top_n: {
      value: cdktf.numberToHclTerraform(struct!.topN),
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
    list: {
      value: cdktf.listMapperHcl(reportLayoutBodyItemListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutBodyItemListStructList",
    },
    parameters: {
      value: cdktf.listMapperHcl(reportLayoutBodyItemParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutBodyItemParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportLayoutBodyItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutBodyItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._chartOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartOptions = this._chartOptions;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._drillDownItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownItems = this._drillDownItems;
    }
    if (this._drillDownTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.drillDownTypes = this._drillDownTypes;
    }
    if (this._hide !== undefined) {
      hasAnyValues = true;
      internalValueResult.hide = this._hide;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgSrc = this._imgSrc;
    }
    if (this._listComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.listComponent = this._listComponent;
    }
    if (this._miscComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.miscComponent = this._miscComponent;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._tableCaptionStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableCaptionStyle = this._tableCaptionStyle;
    }
    if (this._tableColumnWidths !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableColumnWidths = this._tableColumnWidths;
    }
    if (this._tableEvenRowStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableEvenRowStyle = this._tableEvenRowStyle;
    }
    if (this._tableHeadStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableHeadStyle = this._tableHeadStyle;
    }
    if (this._tableOddRowStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableOddRowStyle = this._tableOddRowStyle;
    }
    if (this._textComponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.textComponent = this._textComponent;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._topN !== undefined) {
      hasAnyValues = true;
      internalValueResult.topN = this._topN;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutBodyItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._chartOptions = undefined;
      this._column = undefined;
      this._content = undefined;
      this._description = undefined;
      this._drillDownItems = undefined;
      this._drillDownTypes = undefined;
      this._hide = undefined;
      this._id = undefined;
      this._imgSrc = undefined;
      this._listComponent = undefined;
      this._miscComponent = undefined;
      this._style = undefined;
      this._tableCaptionStyle = undefined;
      this._tableColumnWidths = undefined;
      this._tableEvenRowStyle = undefined;
      this._tableHeadStyle = undefined;
      this._tableOddRowStyle = undefined;
      this._textComponent = undefined;
      this._title = undefined;
      this._topN = undefined;
      this._type = undefined;
      this._list.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._chartOptions = value.chartOptions;
      this._column = value.column;
      this._content = value.content;
      this._description = value.description;
      this._drillDownItems = value.drillDownItems;
      this._drillDownTypes = value.drillDownTypes;
      this._hide = value.hide;
      this._id = value.id;
      this._imgSrc = value.imgSrc;
      this._listComponent = value.listComponent;
      this._miscComponent = value.miscComponent;
      this._style = value.style;
      this._tableCaptionStyle = value.tableCaptionStyle;
      this._tableColumnWidths = value.tableColumnWidths;
      this._tableEvenRowStyle = value.tableEvenRowStyle;
      this._tableHeadStyle = value.tableHeadStyle;
      this._tableOddRowStyle = value.tableOddRowStyle;
      this._textComponent = value.textComponent;
      this._title = value.title;
      this._topN = value.topN;
      this._type = value.type;
      this._list.internalValue = value.list;
      this._parameters.internalValue = value.parameters;
    }
  }

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
  private _list = new ReportLayoutBodyItemListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: ReportLayoutBodyItemListStruct[] | cdktf.IResolvable) {
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
  private _parameters = new ReportLayoutBodyItemParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ReportLayoutBodyItemParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class ReportLayoutBodyItemList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutBodyItem[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutBodyItemOutputReference {
    return new ReportLayoutBodyItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutPageFooterFooterItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#content ReportLayout#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#description ReportLayout#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#id ReportLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#img_src ReportLayout#img_src}
  */
  readonly imgSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#style ReportLayout#style}
  */
  readonly style?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#type ReportLayout#type}
  */
  readonly type?: string;
}

export function reportLayoutPageFooterFooterItemToTerraform(struct?: ReportLayoutPageFooterFooterItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    img_src: cdktf.stringToTerraform(struct!.imgSrc),
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportLayoutPageFooterFooterItemToHclTerraform(struct?: ReportLayoutPageFooterFooterItem | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    img_src: {
      value: cdktf.stringToHclTerraform(struct!.imgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ReportLayoutPageFooterFooterItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutPageFooterFooterItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgSrc = this._imgSrc;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageFooterFooterItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._description = undefined;
      this._id = undefined;
      this._imgSrc = undefined;
      this._style = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._description = value.description;
      this._id = value.id;
      this._imgSrc = value.imgSrc;
      this._style = value.style;
      this._type = value.type;
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
}

export class ReportLayoutPageFooterFooterItemList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutPageFooterFooterItem[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutPageFooterFooterItemOutputReference {
    return new ReportLayoutPageFooterFooterItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutPageFooter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#style ReportLayout#style}
  */
  readonly style?: string[];
  /**
  * footer_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#footer_item ReportLayout#footer_item}
  */
  readonly footerItem?: ReportLayoutPageFooterFooterItem[] | cdktf.IResolvable;
}

export function reportLayoutPageFooterToTerraform(struct?: ReportLayoutPageFooterOutputReference | ReportLayoutPageFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    footer_item: cdktf.listMapper(reportLayoutPageFooterFooterItemToTerraform, true)(struct!.footerItem),
  }
}


export function reportLayoutPageFooterToHclTerraform(struct?: ReportLayoutPageFooterOutputReference | ReportLayoutPageFooter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    footer_item: {
      value: cdktf.listMapperHcl(reportLayoutPageFooterFooterItemToHclTerraform, true)(struct!.footerItem),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutPageFooterFooterItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportLayoutPageFooterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportLayoutPageFooter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._footerItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerItem = this._footerItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageFooter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._style = undefined;
      this._footerItem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._style = value.style;
      this._footerItem.internalValue = value.footerItem;
    }
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

  // footer_item - computed: false, optional: true, required: false
  private _footerItem = new ReportLayoutPageFooterFooterItemList(this, "footer_item", false);
  public get footerItem() {
    return this._footerItem;
  }
  public putFooterItem(value: ReportLayoutPageFooterFooterItem[] | cdktf.IResolvable) {
    this._footerItem.internalValue = value;
  }
  public resetFooterItem() {
    this._footerItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerItemInput() {
    return this._footerItem.internalValue;
  }
}
export interface ReportLayoutPageHeaderHeaderItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#content ReportLayout#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#description ReportLayout#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#id ReportLayout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#img_src ReportLayout#img_src}
  */
  readonly imgSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#style ReportLayout#style}
  */
  readonly style?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#type ReportLayout#type}
  */
  readonly type?: string;
}

export function reportLayoutPageHeaderHeaderItemToTerraform(struct?: ReportLayoutPageHeaderHeaderItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    img_src: cdktf.stringToTerraform(struct!.imgSrc),
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportLayoutPageHeaderHeaderItemToHclTerraform(struct?: ReportLayoutPageHeaderHeaderItem | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    img_src: {
      value: cdktf.stringToHclTerraform(struct!.imgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class ReportLayoutPageHeaderHeaderItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutPageHeaderHeaderItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgSrc = this._imgSrc;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageHeaderHeaderItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._description = undefined;
      this._id = undefined;
      this._imgSrc = undefined;
      this._style = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._description = value.description;
      this._id = value.id;
      this._imgSrc = value.imgSrc;
      this._style = value.style;
      this._type = value.type;
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
}

export class ReportLayoutPageHeaderHeaderItemList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutPageHeaderHeaderItem[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutPageHeaderHeaderItemOutputReference {
    return new ReportLayoutPageHeaderHeaderItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutPageHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#style ReportLayout#style}
  */
  readonly style?: string[];
  /**
  * header_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#header_item ReportLayout#header_item}
  */
  readonly headerItem?: ReportLayoutPageHeaderHeaderItem[] | cdktf.IResolvable;
}

export function reportLayoutPageHeaderToTerraform(struct?: ReportLayoutPageHeaderOutputReference | ReportLayoutPageHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    header_item: cdktf.listMapper(reportLayoutPageHeaderHeaderItemToTerraform, true)(struct!.headerItem),
  }
}


export function reportLayoutPageHeaderToHclTerraform(struct?: ReportLayoutPageHeaderOutputReference | ReportLayoutPageHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    header_item: {
      value: cdktf.listMapperHcl(reportLayoutPageHeaderHeaderItemToHclTerraform, true)(struct!.headerItem),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutPageHeaderHeaderItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportLayoutPageHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportLayoutPageHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._headerItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerItem = this._headerItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._style = undefined;
      this._headerItem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._style = value.style;
      this._headerItem.internalValue = value.headerItem;
    }
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

  // header_item - computed: false, optional: true, required: false
  private _headerItem = new ReportLayoutPageHeaderHeaderItemList(this, "header_item", false);
  public get headerItem() {
    return this._headerItem;
  }
  public putHeaderItem(value: ReportLayoutPageHeaderHeaderItem[] | cdktf.IResolvable) {
    this._headerItem.internalValue = value;
  }
  public resetHeaderItem() {
    this._headerItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerItemInput() {
    return this._headerItem.internalValue;
  }
}
export interface ReportLayoutPage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#column_break_before ReportLayout#column_break_before}
  */
  readonly columnBreakBefore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#options ReportLayout#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#page_break_before ReportLayout#page_break_before}
  */
  readonly pageBreakBefore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#paper ReportLayout#paper}
  */
  readonly paper?: string;
  /**
  * footer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#footer ReportLayout#footer}
  */
  readonly footer?: ReportLayoutPageFooter;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#header ReportLayout#header}
  */
  readonly header?: ReportLayoutPageHeader;
}

export function reportLayoutPageToTerraform(struct?: ReportLayoutPageOutputReference | ReportLayoutPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_break_before: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnBreakBefore),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    page_break_before: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pageBreakBefore),
    paper: cdktf.stringToTerraform(struct!.paper),
    footer: reportLayoutPageFooterToTerraform(struct!.footer),
    header: reportLayoutPageHeaderToTerraform(struct!.header),
  }
}


export function reportLayoutPageToHclTerraform(struct?: ReportLayoutPageOutputReference | ReportLayoutPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_break_before: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnBreakBefore),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    page_break_before: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pageBreakBefore),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    paper: {
      value: cdktf.stringToHclTerraform(struct!.paper),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    footer: {
      value: reportLayoutPageFooterToHclTerraform(struct!.footer),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutPageFooterList",
    },
    header: {
      value: reportLayoutPageHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutPageHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportLayoutPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportLayoutPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnBreakBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnBreakBefore = this._columnBreakBefore;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._pageBreakBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageBreakBefore = this._pageBreakBefore;
    }
    if (this._paper !== undefined) {
      hasAnyValues = true;
      internalValueResult.paper = this._paper;
    }
    if (this._footer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footer = this._footer?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnBreakBefore = undefined;
      this._options = undefined;
      this._pageBreakBefore = undefined;
      this._paper = undefined;
      this._footer.internalValue = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnBreakBefore = value.columnBreakBefore;
      this._options = value.options;
      this._pageBreakBefore = value.pageBreakBefore;
      this._paper = value.paper;
      this._footer.internalValue = value.footer;
      this._header.internalValue = value.header;
    }
  }

  // column_break_before - computed: true, optional: true, required: false
  private _columnBreakBefore?: string[]; 
  public get columnBreakBefore() {
    return cdktf.Fn.tolist(this.getListAttribute('column_break_before'));
  }
  public set columnBreakBefore(value: string[]) {
    this._columnBreakBefore = value;
  }
  public resetColumnBreakBefore() {
    this._columnBreakBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnBreakBeforeInput() {
    return this._columnBreakBefore;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // page_break_before - computed: true, optional: true, required: false
  private _pageBreakBefore?: string[]; 
  public get pageBreakBefore() {
    return cdktf.Fn.tolist(this.getListAttribute('page_break_before'));
  }
  public set pageBreakBefore(value: string[]) {
    this._pageBreakBefore = value;
  }
  public resetPageBreakBefore() {
    this._pageBreakBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBreakBeforeInput() {
    return this._pageBreakBefore;
  }

  // paper - computed: true, optional: true, required: false
  private _paper?: string; 
  public get paper() {
    return this.getStringAttribute('paper');
  }
  public set paper(value: string) {
    this._paper = value;
  }
  public resetPaper() {
    this._paper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperInput() {
    return this._paper;
  }

  // footer - computed: false, optional: true, required: false
  private _footer = new ReportLayoutPageFooterOutputReference(this, "footer");
  public get footer() {
    return this._footer;
  }
  public putFooter(value: ReportLayoutPageFooter) {
    this._footer.internalValue = value;
  }
  public resetFooter() {
    this._footer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ReportLayoutPageHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: ReportLayoutPageHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout fmgdevice_report_layout}
*/
export class ReportLayout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_report_layout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportLayout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportLayout to import
  * @param importFromId The id of the existing ReportLayout that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportLayout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_report_layout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout fmgdevice_report_layout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportLayoutConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReportLayoutConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_report_layout',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cutoffOption = config.cutoffOption;
    this._cutoffTime = config.cutoffTime;
    this._day = config.day;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailRecipients = config.emailRecipients;
    this._emailSend = config.emailSend;
    this._format = config.format;
    this._id = config.id;
    this._maxPdfReport = config.maxPdfReport;
    this._name = config.name;
    this._options = config.options;
    this._scheduleType = config.scheduleType;
    this._styleTheme = config.styleTheme;
    this._subtitle = config.subtitle;
    this._time = config.time;
    this._title = config.title;
    this._bodyItem.internalValue = config.bodyItem;
    this._page.internalValue = config.page;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cutoff_option - computed: true, optional: true, required: false
  private _cutoffOption?: string; 
  public get cutoffOption() {
    return this.getStringAttribute('cutoff_option');
  }
  public set cutoffOption(value: string) {
    this._cutoffOption = value;
  }
  public resetCutoffOption() {
    this._cutoffOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffOptionInput() {
    return this._cutoffOption;
  }

  // cutoff_time - computed: true, optional: true, required: false
  private _cutoffTime?: string; 
  public get cutoffTime() {
    return this.getStringAttribute('cutoff_time');
  }
  public set cutoffTime(value: string) {
    this._cutoffTime = value;
  }
  public resetCutoffTime() {
    this._cutoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffTimeInput() {
    return this._cutoffTime;
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
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

  // email_recipients - computed: false, optional: true, required: false
  private _emailRecipients?: string; 
  public get emailRecipients() {
    return this.getStringAttribute('email_recipients');
  }
  public set emailRecipients(value: string) {
    this._emailRecipients = value;
  }
  public resetEmailRecipients() {
    this._emailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRecipientsInput() {
    return this._emailRecipients;
  }

  // email_send - computed: true, optional: true, required: false
  private _emailSend?: string; 
  public get emailSend() {
    return this.getStringAttribute('email_send');
  }
  public set emailSend(value: string) {
    this._emailSend = value;
  }
  public resetEmailSend() {
    this._emailSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendInput() {
    return this._emailSend;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string[]; 
  public get format() {
    return cdktf.Fn.tolist(this.getListAttribute('format'));
  }
  public set format(value: string[]) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // max_pdf_report - computed: true, optional: true, required: false
  private _maxPdfReport?: number; 
  public get maxPdfReport() {
    return this.getNumberAttribute('max_pdf_report');
  }
  public set maxPdfReport(value: number) {
    this._maxPdfReport = value;
  }
  public resetMaxPdfReport() {
    this._maxPdfReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPdfReportInput() {
    return this._maxPdfReport;
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

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // schedule_type - computed: true, optional: true, required: false
  private _scheduleType?: string; 
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }
  public set scheduleType(value: string) {
    this._scheduleType = value;
  }
  public resetScheduleType() {
    this._scheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTypeInput() {
    return this._scheduleType;
  }

  // style_theme - computed: false, optional: true, required: false
  private _styleTheme?: string; 
  public get styleTheme() {
    return this.getStringAttribute('style_theme');
  }
  public set styleTheme(value: string) {
    this._styleTheme = value;
  }
  public resetStyleTheme() {
    this._styleTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleThemeInput() {
    return this._styleTheme;
  }

  // subtitle - computed: false, optional: true, required: false
  private _subtitle?: string; 
  public get subtitle() {
    return this.getStringAttribute('subtitle');
  }
  public set subtitle(value: string) {
    this._subtitle = value;
  }
  public resetSubtitle() {
    this._subtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleInput() {
    return this._subtitle;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
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

  // body_item - computed: false, optional: true, required: false
  private _bodyItem = new ReportLayoutBodyItemList(this, "body_item", false);
  public get bodyItem() {
    return this._bodyItem;
  }
  public putBodyItem(value: ReportLayoutBodyItem[] | cdktf.IResolvable) {
    this._bodyItem.internalValue = value;
  }
  public resetBodyItem() {
    this._bodyItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyItemInput() {
    return this._bodyItem.internalValue;
  }

  // page - computed: false, optional: true, required: false
  private _page = new ReportLayoutPageOutputReference(this, "page");
  public get page() {
    return this._page;
  }
  public putPage(value: ReportLayoutPage) {
    this._page.internalValue = value;
  }
  public resetPage() {
    this._page.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cutoff_option: cdktf.stringToTerraform(this._cutoffOption),
      cutoff_time: cdktf.stringToTerraform(this._cutoffTime),
      day: cdktf.stringToTerraform(this._day),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      email_recipients: cdktf.stringToTerraform(this._emailRecipients),
      email_send: cdktf.stringToTerraform(this._emailSend),
      format: cdktf.listMapper(cdktf.stringToTerraform, false)(this._format),
      id: cdktf.stringToTerraform(this._id),
      max_pdf_report: cdktf.numberToTerraform(this._maxPdfReport),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      schedule_type: cdktf.stringToTerraform(this._scheduleType),
      style_theme: cdktf.stringToTerraform(this._styleTheme),
      subtitle: cdktf.stringToTerraform(this._subtitle),
      time: cdktf.stringToTerraform(this._time),
      title: cdktf.stringToTerraform(this._title),
      body_item: cdktf.listMapper(reportLayoutBodyItemToTerraform, true)(this._bodyItem.internalValue),
      page: reportLayoutPageToTerraform(this._page.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cutoff_option: {
        value: cdktf.stringToHclTerraform(this._cutoffOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cutoff_time: {
        value: cdktf.stringToHclTerraform(this._cutoffTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      day: {
        value: cdktf.stringToHclTerraform(this._day),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_recipients: {
        value: cdktf.stringToHclTerraform(this._emailRecipients),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_send: {
        value: cdktf.stringToHclTerraform(this._emailSend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._format),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_pdf_report: {
        value: cdktf.numberToHclTerraform(this._maxPdfReport),
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
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      schedule_type: {
        value: cdktf.stringToHclTerraform(this._scheduleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      style_theme: {
        value: cdktf.stringToHclTerraform(this._styleTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subtitle: {
        value: cdktf.stringToHclTerraform(this._subtitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
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
      body_item: {
        value: cdktf.listMapperHcl(reportLayoutBodyItemToHclTerraform, true)(this._bodyItem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportLayoutBodyItemList",
      },
      page: {
        value: reportLayoutPageToHclTerraform(this._page.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportLayoutPageList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
