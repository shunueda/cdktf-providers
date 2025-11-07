// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#background ReportChart#background}
  */
  readonly background?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#category ReportChart#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#color_palette ReportChart#color_palette}
  */
  readonly colorPalette?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#comments ReportChart#comments}
  */
  readonly comments: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#dataset ReportChart#dataset}
  */
  readonly dataset: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#dimension ReportChart#dimension}
  */
  readonly dimension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#dynamic_sort_subtable ReportChart#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#favorite ReportChart#favorite}
  */
  readonly favorite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#get_all_tables ReportChart#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#graph_type ReportChart#graph_type}
  */
  readonly graphType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#id ReportChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#legend ReportChart#legend}
  */
  readonly legend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#legend_font_size ReportChart#legend_font_size}
  */
  readonly legendFontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#name ReportChart#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#period ReportChart#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#policy ReportChart#policy}
  */
  readonly policy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#style ReportChart#style}
  */
  readonly style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#title ReportChart#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#title_font_size ReportChart#title_font_size}
  */
  readonly titleFontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#type ReportChart#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#vdomparam ReportChart#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * category_series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#category_series ReportChart#category_series}
  */
  readonly categorySeries?: ReportChartCategorySeries;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#column ReportChart#column}
  */
  readonly column?: ReportChartColumn[] | cdktf.IResolvable;
  /**
  * drill_down_charts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#drill_down_charts ReportChart#drill_down_charts}
  */
  readonly drillDownCharts?: ReportChartDrillDownCharts[] | cdktf.IResolvable;
  /**
  * value_series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#value_series ReportChart#value_series}
  */
  readonly valueSeries?: ReportChartValueSeries;
  /**
  * x_series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#x_series ReportChart#x_series}
  */
  readonly xSeries?: ReportChartXSeries;
  /**
  * y_series block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#y_series ReportChart#y_series}
  */
  readonly ySeries?: ReportChartYSeries;
}
export interface ReportChartCategorySeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#databind ReportChart#databind}
  */
  readonly databind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#font_size ReportChart#font_size}
  */
  readonly fontSize?: number;
}

export function reportChartCategorySeriesToTerraform(struct?: ReportChartCategorySeriesOutputReference | ReportChartCategorySeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databind: cdktf.stringToTerraform(struct!.databind),
    font_size: cdktf.numberToTerraform(struct!.fontSize),
  }
}


export function reportChartCategorySeriesToHclTerraform(struct?: ReportChartCategorySeriesOutputReference | ReportChartCategorySeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databind: {
      value: cdktf.stringToHclTerraform(struct!.databind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportChartCategorySeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportChartCategorySeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databind !== undefined) {
      hasAnyValues = true;
      internalValueResult.databind = this._databind;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportChartCategorySeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databind = undefined;
      this._fontSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databind = value.databind;
      this._fontSize = value.fontSize;
    }
  }

  // databind - computed: false, optional: true, required: false
  private _databind?: string; 
  public get databind() {
    return this.getStringAttribute('databind');
  }
  public set databind(value: string) {
    this._databind = value;
  }
  public resetDatabind() {
    this._databind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databindInput() {
    return this._databind;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }
}
export interface ReportChartColumnMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#displayname ReportChart#displayname}
  */
  readonly displayname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#id ReportChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#op ReportChart#op}
  */
  readonly op?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#value1 ReportChart#value1}
  */
  readonly value1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#value2 ReportChart#value2}
  */
  readonly value2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#value_type ReportChart#value_type}
  */
  readonly valueType?: string;
}

export function reportChartColumnMappingToTerraform(struct?: ReportChartColumnMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    displayname: cdktf.stringToTerraform(struct!.displayname),
    id: cdktf.numberToTerraform(struct!.id),
    op: cdktf.stringToTerraform(struct!.op),
    value1: cdktf.stringToTerraform(struct!.value1),
    value2: cdktf.stringToTerraform(struct!.value2),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function reportChartColumnMappingToHclTerraform(struct?: ReportChartColumnMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    displayname: {
      value: cdktf.stringToHclTerraform(struct!.displayname),
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
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value1: {
      value: cdktf.stringToHclTerraform(struct!.value1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value2: {
      value: cdktf.stringToHclTerraform(struct!.value2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ReportChartColumnMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportChartColumnMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayname !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayname = this._displayname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.value1 = this._value1;
    }
    if (this._value2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.value2 = this._value2;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportChartColumnMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayname = undefined;
      this._id = undefined;
      this._op = undefined;
      this._value1 = undefined;
      this._value2 = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayname = value.displayname;
      this._id = value.id;
      this._op = value.op;
      this._value1 = value.value1;
      this._value2 = value.value2;
      this._valueType = value.valueType;
    }
  }

  // displayname - computed: false, optional: true, required: false
  private _displayname?: string; 
  public get displayname() {
    return this.getStringAttribute('displayname');
  }
  public set displayname(value: string) {
    this._displayname = value;
  }
  public resetDisplayname() {
    this._displayname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaynameInput() {
    return this._displayname;
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

  // op - computed: true, optional: true, required: false
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  public resetOp() {
    this._op = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value1 - computed: false, optional: true, required: false
  private _value1?: string; 
  public get value1() {
    return this.getStringAttribute('value1');
  }
  public set value1(value: string) {
    this._value1 = value;
  }
  public resetValue1() {
    this._value1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value1Input() {
    return this._value1;
  }

  // value2 - computed: false, optional: true, required: false
  private _value2?: string; 
  public get value2() {
    return this.getStringAttribute('value2');
  }
  public set value2(value: string) {
    this._value2 = value;
  }
  public resetValue2() {
    this._value2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get value2Input() {
    return this._value2;
  }

  // value_type - computed: true, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class ReportChartColumnMappingList extends cdktf.ComplexList {
  public internalValue? : ReportChartColumnMapping[] | cdktf.IResolvable

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
  public get(index: number): ReportChartColumnMappingOutputReference {
    return new ReportChartColumnMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportChartColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#detail_unit ReportChart#detail_unit}
  */
  readonly detailUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#detail_value ReportChart#detail_value}
  */
  readonly detailValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#footer_unit ReportChart#footer_unit}
  */
  readonly footerUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#footer_value ReportChart#footer_value}
  */
  readonly footerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#header_value ReportChart#header_value}
  */
  readonly headerValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#id ReportChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#mapping ReportChart#mapping}
  */
  readonly mapping?: ReportChartColumnMapping[] | cdktf.IResolvable;
}

export function reportChartColumnToTerraform(struct?: ReportChartColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_unit: cdktf.stringToTerraform(struct!.detailUnit),
    detail_value: cdktf.stringToTerraform(struct!.detailValue),
    footer_unit: cdktf.stringToTerraform(struct!.footerUnit),
    footer_value: cdktf.stringToTerraform(struct!.footerValue),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    id: cdktf.numberToTerraform(struct!.id),
    mapping: cdktf.listMapper(reportChartColumnMappingToTerraform, true)(struct!.mapping),
  }
}


export function reportChartColumnToHclTerraform(struct?: ReportChartColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detail_unit: {
      value: cdktf.stringToHclTerraform(struct!.detailUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detail_value: {
      value: cdktf.stringToHclTerraform(struct!.detailValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    footer_unit: {
      value: cdktf.stringToHclTerraform(struct!.footerUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    footer_value: {
      value: cdktf.stringToHclTerraform(struct!.footerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
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
    mapping: {
      value: cdktf.listMapperHcl(reportChartColumnMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "ReportChartColumnMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportChartColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportChartColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailUnit = this._detailUnit;
    }
    if (this._detailValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailValue = this._detailValue;
    }
    if (this._footerUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerUnit = this._footerUnit;
    }
    if (this._footerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerValue = this._footerValue;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportChartColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detailUnit = undefined;
      this._detailValue = undefined;
      this._footerUnit = undefined;
      this._footerValue = undefined;
      this._headerValue = undefined;
      this._id = undefined;
      this._mapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detailUnit = value.detailUnit;
      this._detailValue = value.detailValue;
      this._footerUnit = value.footerUnit;
      this._footerValue = value.footerValue;
      this._headerValue = value.headerValue;
      this._id = value.id;
      this._mapping.internalValue = value.mapping;
    }
  }

  // detail_unit - computed: false, optional: true, required: false
  private _detailUnit?: string; 
  public get detailUnit() {
    return this.getStringAttribute('detail_unit');
  }
  public set detailUnit(value: string) {
    this._detailUnit = value;
  }
  public resetDetailUnit() {
    this._detailUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailUnitInput() {
    return this._detailUnit;
  }

  // detail_value - computed: false, optional: true, required: false
  private _detailValue?: string; 
  public get detailValue() {
    return this.getStringAttribute('detail_value');
  }
  public set detailValue(value: string) {
    this._detailValue = value;
  }
  public resetDetailValue() {
    this._detailValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailValueInput() {
    return this._detailValue;
  }

  // footer_unit - computed: false, optional: true, required: false
  private _footerUnit?: string; 
  public get footerUnit() {
    return this.getStringAttribute('footer_unit');
  }
  public set footerUnit(value: string) {
    this._footerUnit = value;
  }
  public resetFooterUnit() {
    this._footerUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerUnitInput() {
    return this._footerUnit;
  }

  // footer_value - computed: false, optional: true, required: false
  private _footerValue?: string; 
  public get footerValue() {
    return this.getStringAttribute('footer_value');
  }
  public set footerValue(value: string) {
    this._footerValue = value;
  }
  public resetFooterValue() {
    this._footerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerValueInput() {
    return this._footerValue;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
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

  // mapping - computed: false, optional: true, required: false
  private _mapping = new ReportChartColumnMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: ReportChartColumnMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}

export class ReportChartColumnList extends cdktf.ComplexList {
  public internalValue? : ReportChartColumn[] | cdktf.IResolvable

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
  public get(index: number): ReportChartColumnOutputReference {
    return new ReportChartColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportChartDrillDownCharts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#chart_name ReportChart#chart_name}
  */
  readonly chartName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#id ReportChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#status ReportChart#status}
  */
  readonly status?: string;
}

export function reportChartDrillDownChartsToTerraform(struct?: ReportChartDrillDownCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_name: cdktf.stringToTerraform(struct!.chartName),
    id: cdktf.numberToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function reportChartDrillDownChartsToHclTerraform(struct?: ReportChartDrillDownCharts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_name: {
      value: cdktf.stringToHclTerraform(struct!.chartName),
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportChartDrillDownChartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportChartDrillDownCharts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartName = this._chartName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportChartDrillDownCharts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartName = undefined;
      this._id = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartName = value.chartName;
      this._id = value.id;
      this._status = value.status;
    }
  }

  // chart_name - computed: false, optional: true, required: false
  private _chartName?: string; 
  public get chartName() {
    return this.getStringAttribute('chart_name');
  }
  public set chartName(value: string) {
    this._chartName = value;
  }
  public resetChartName() {
    this._chartName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartNameInput() {
    return this._chartName;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ReportChartDrillDownChartsList extends cdktf.ComplexList {
  public internalValue? : ReportChartDrillDownCharts[] | cdktf.IResolvable

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
  public get(index: number): ReportChartDrillDownChartsOutputReference {
    return new ReportChartDrillDownChartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportChartValueSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#databind ReportChart#databind}
  */
  readonly databind?: string;
}

export function reportChartValueSeriesToTerraform(struct?: ReportChartValueSeriesOutputReference | ReportChartValueSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databind: cdktf.stringToTerraform(struct!.databind),
  }
}


export function reportChartValueSeriesToHclTerraform(struct?: ReportChartValueSeriesOutputReference | ReportChartValueSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databind: {
      value: cdktf.stringToHclTerraform(struct!.databind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportChartValueSeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportChartValueSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databind !== undefined) {
      hasAnyValues = true;
      internalValueResult.databind = this._databind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportChartValueSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databind = value.databind;
    }
  }

  // databind - computed: false, optional: true, required: false
  private _databind?: string; 
  public get databind() {
    return this.getStringAttribute('databind');
  }
  public set databind(value: string) {
    this._databind = value;
  }
  public resetDatabind() {
    this._databind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databindInput() {
    return this._databind;
  }
}
export interface ReportChartXSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#caption ReportChart#caption}
  */
  readonly caption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#caption_font_size ReportChart#caption_font_size}
  */
  readonly captionFontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#databind ReportChart#databind}
  */
  readonly databind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#font_size ReportChart#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#is_category ReportChart#is_category}
  */
  readonly isCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#label_angle ReportChart#label_angle}
  */
  readonly labelAngle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#scale_direction ReportChart#scale_direction}
  */
  readonly scaleDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#scale_format ReportChart#scale_format}
  */
  readonly scaleFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#scale_step ReportChart#scale_step}
  */
  readonly scaleStep?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#scale_unit ReportChart#scale_unit}
  */
  readonly scaleUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#unit ReportChart#unit}
  */
  readonly unit?: string;
}

export function reportChartXSeriesToTerraform(struct?: ReportChartXSeriesOutputReference | ReportChartXSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caption: cdktf.stringToTerraform(struct!.caption),
    caption_font_size: cdktf.numberToTerraform(struct!.captionFontSize),
    databind: cdktf.stringToTerraform(struct!.databind),
    font_size: cdktf.numberToTerraform(struct!.fontSize),
    is_category: cdktf.stringToTerraform(struct!.isCategory),
    label_angle: cdktf.stringToTerraform(struct!.labelAngle),
    scale_direction: cdktf.stringToTerraform(struct!.scaleDirection),
    scale_format: cdktf.stringToTerraform(struct!.scaleFormat),
    scale_step: cdktf.numberToTerraform(struct!.scaleStep),
    scale_unit: cdktf.stringToTerraform(struct!.scaleUnit),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function reportChartXSeriesToHclTerraform(struct?: ReportChartXSeriesOutputReference | ReportChartXSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caption: {
      value: cdktf.stringToHclTerraform(struct!.caption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caption_font_size: {
      value: cdktf.numberToHclTerraform(struct!.captionFontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    databind: {
      value: cdktf.stringToHclTerraform(struct!.databind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_category: {
      value: cdktf.stringToHclTerraform(struct!.isCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_angle: {
      value: cdktf.stringToHclTerraform(struct!.labelAngle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_direction: {
      value: cdktf.stringToHclTerraform(struct!.scaleDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_format: {
      value: cdktf.stringToHclTerraform(struct!.scaleFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_step: {
      value: cdktf.numberToHclTerraform(struct!.scaleStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_unit: {
      value: cdktf.stringToHclTerraform(struct!.scaleUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportChartXSeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportChartXSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caption !== undefined) {
      hasAnyValues = true;
      internalValueResult.caption = this._caption;
    }
    if (this._captionFontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionFontSize = this._captionFontSize;
    }
    if (this._databind !== undefined) {
      hasAnyValues = true;
      internalValueResult.databind = this._databind;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._isCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCategory = this._isCategory;
    }
    if (this._labelAngle !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelAngle = this._labelAngle;
    }
    if (this._scaleDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDirection = this._scaleDirection;
    }
    if (this._scaleFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleFormat = this._scaleFormat;
    }
    if (this._scaleStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleStep = this._scaleStep;
    }
    if (this._scaleUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUnit = this._scaleUnit;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportChartXSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caption = undefined;
      this._captionFontSize = undefined;
      this._databind = undefined;
      this._fontSize = undefined;
      this._isCategory = undefined;
      this._labelAngle = undefined;
      this._scaleDirection = undefined;
      this._scaleFormat = undefined;
      this._scaleStep = undefined;
      this._scaleUnit = undefined;
      this._unit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caption = value.caption;
      this._captionFontSize = value.captionFontSize;
      this._databind = value.databind;
      this._fontSize = value.fontSize;
      this._isCategory = value.isCategory;
      this._labelAngle = value.labelAngle;
      this._scaleDirection = value.scaleDirection;
      this._scaleFormat = value.scaleFormat;
      this._scaleStep = value.scaleStep;
      this._scaleUnit = value.scaleUnit;
      this._unit = value.unit;
    }
  }

  // caption - computed: false, optional: true, required: false
  private _caption?: string; 
  public get caption() {
    return this.getStringAttribute('caption');
  }
  public set caption(value: string) {
    this._caption = value;
  }
  public resetCaption() {
    this._caption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionInput() {
    return this._caption;
  }

  // caption_font_size - computed: false, optional: true, required: false
  private _captionFontSize?: number; 
  public get captionFontSize() {
    return this.getNumberAttribute('caption_font_size');
  }
  public set captionFontSize(value: number) {
    this._captionFontSize = value;
  }
  public resetCaptionFontSize() {
    this._captionFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionFontSizeInput() {
    return this._captionFontSize;
  }

  // databind - computed: false, optional: true, required: false
  private _databind?: string; 
  public get databind() {
    return this.getStringAttribute('databind');
  }
  public set databind(value: string) {
    this._databind = value;
  }
  public resetDatabind() {
    this._databind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databindInput() {
    return this._databind;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // is_category - computed: true, optional: true, required: false
  private _isCategory?: string; 
  public get isCategory() {
    return this.getStringAttribute('is_category');
  }
  public set isCategory(value: string) {
    this._isCategory = value;
  }
  public resetIsCategory() {
    this._isCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCategoryInput() {
    return this._isCategory;
  }

  // label_angle - computed: true, optional: true, required: false
  private _labelAngle?: string; 
  public get labelAngle() {
    return this.getStringAttribute('label_angle');
  }
  public set labelAngle(value: string) {
    this._labelAngle = value;
  }
  public resetLabelAngle() {
    this._labelAngle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelAngleInput() {
    return this._labelAngle;
  }

  // scale_direction - computed: true, optional: true, required: false
  private _scaleDirection?: string; 
  public get scaleDirection() {
    return this.getStringAttribute('scale_direction');
  }
  public set scaleDirection(value: string) {
    this._scaleDirection = value;
  }
  public resetScaleDirection() {
    this._scaleDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDirectionInput() {
    return this._scaleDirection;
  }

  // scale_format - computed: true, optional: true, required: false
  private _scaleFormat?: string; 
  public get scaleFormat() {
    return this.getStringAttribute('scale_format');
  }
  public set scaleFormat(value: string) {
    this._scaleFormat = value;
  }
  public resetScaleFormat() {
    this._scaleFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleFormatInput() {
    return this._scaleFormat;
  }

  // scale_step - computed: true, optional: true, required: false
  private _scaleStep?: number; 
  public get scaleStep() {
    return this.getNumberAttribute('scale_step');
  }
  public set scaleStep(value: number) {
    this._scaleStep = value;
  }
  public resetScaleStep() {
    this._scaleStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleStepInput() {
    return this._scaleStep;
  }

  // scale_unit - computed: true, optional: true, required: false
  private _scaleUnit?: string; 
  public get scaleUnit() {
    return this.getStringAttribute('scale_unit');
  }
  public set scaleUnit(value: string) {
    this._scaleUnit = value;
  }
  public resetScaleUnit() {
    this._scaleUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUnitInput() {
    return this._scaleUnit;
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
}
export interface ReportChartYSeries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#caption ReportChart#caption}
  */
  readonly caption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#caption_font_size ReportChart#caption_font_size}
  */
  readonly captionFontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#databind ReportChart#databind}
  */
  readonly databind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#extra_databind ReportChart#extra_databind}
  */
  readonly extraDatabind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#extra_y ReportChart#extra_y}
  */
  readonly extraY?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#extra_y_legend ReportChart#extra_y_legend}
  */
  readonly extraYLegend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#font_size ReportChart#font_size}
  */
  readonly fontSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#group ReportChart#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#label_angle ReportChart#label_angle}
  */
  readonly labelAngle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#unit ReportChart#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#y_legend ReportChart#y_legend}
  */
  readonly yLegend?: string;
}

export function reportChartYSeriesToTerraform(struct?: ReportChartYSeriesOutputReference | ReportChartYSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caption: cdktf.stringToTerraform(struct!.caption),
    caption_font_size: cdktf.numberToTerraform(struct!.captionFontSize),
    databind: cdktf.stringToTerraform(struct!.databind),
    extra_databind: cdktf.stringToTerraform(struct!.extraDatabind),
    extra_y: cdktf.stringToTerraform(struct!.extraY),
    extra_y_legend: cdktf.stringToTerraform(struct!.extraYLegend),
    font_size: cdktf.numberToTerraform(struct!.fontSize),
    group: cdktf.stringToTerraform(struct!.group),
    label_angle: cdktf.stringToTerraform(struct!.labelAngle),
    unit: cdktf.stringToTerraform(struct!.unit),
    y_legend: cdktf.stringToTerraform(struct!.yLegend),
  }
}


export function reportChartYSeriesToHclTerraform(struct?: ReportChartYSeriesOutputReference | ReportChartYSeries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caption: {
      value: cdktf.stringToHclTerraform(struct!.caption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    caption_font_size: {
      value: cdktf.numberToHclTerraform(struct!.captionFontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    databind: {
      value: cdktf.stringToHclTerraform(struct!.databind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_databind: {
      value: cdktf.stringToHclTerraform(struct!.extraDatabind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_y: {
      value: cdktf.stringToHclTerraform(struct!.extraY),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_y_legend: {
      value: cdktf.stringToHclTerraform(struct!.extraYLegend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.numberToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_angle: {
      value: cdktf.stringToHclTerraform(struct!.labelAngle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    y_legend: {
      value: cdktf.stringToHclTerraform(struct!.yLegend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportChartYSeriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportChartYSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caption !== undefined) {
      hasAnyValues = true;
      internalValueResult.caption = this._caption;
    }
    if (this._captionFontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.captionFontSize = this._captionFontSize;
    }
    if (this._databind !== undefined) {
      hasAnyValues = true;
      internalValueResult.databind = this._databind;
    }
    if (this._extraDatabind !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraDatabind = this._extraDatabind;
    }
    if (this._extraY !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraY = this._extraY;
    }
    if (this._extraYLegend !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraYLegend = this._extraYLegend;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._labelAngle !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelAngle = this._labelAngle;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._yLegend !== undefined) {
      hasAnyValues = true;
      internalValueResult.yLegend = this._yLegend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportChartYSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caption = undefined;
      this._captionFontSize = undefined;
      this._databind = undefined;
      this._extraDatabind = undefined;
      this._extraY = undefined;
      this._extraYLegend = undefined;
      this._fontSize = undefined;
      this._group = undefined;
      this._labelAngle = undefined;
      this._unit = undefined;
      this._yLegend = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caption = value.caption;
      this._captionFontSize = value.captionFontSize;
      this._databind = value.databind;
      this._extraDatabind = value.extraDatabind;
      this._extraY = value.extraY;
      this._extraYLegend = value.extraYLegend;
      this._fontSize = value.fontSize;
      this._group = value.group;
      this._labelAngle = value.labelAngle;
      this._unit = value.unit;
      this._yLegend = value.yLegend;
    }
  }

  // caption - computed: false, optional: true, required: false
  private _caption?: string; 
  public get caption() {
    return this.getStringAttribute('caption');
  }
  public set caption(value: string) {
    this._caption = value;
  }
  public resetCaption() {
    this._caption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionInput() {
    return this._caption;
  }

  // caption_font_size - computed: false, optional: true, required: false
  private _captionFontSize?: number; 
  public get captionFontSize() {
    return this.getNumberAttribute('caption_font_size');
  }
  public set captionFontSize(value: number) {
    this._captionFontSize = value;
  }
  public resetCaptionFontSize() {
    this._captionFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captionFontSizeInput() {
    return this._captionFontSize;
  }

  // databind - computed: false, optional: true, required: false
  private _databind?: string; 
  public get databind() {
    return this.getStringAttribute('databind');
  }
  public set databind(value: string) {
    this._databind = value;
  }
  public resetDatabind() {
    this._databind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databindInput() {
    return this._databind;
  }

  // extra_databind - computed: false, optional: true, required: false
  private _extraDatabind?: string; 
  public get extraDatabind() {
    return this.getStringAttribute('extra_databind');
  }
  public set extraDatabind(value: string) {
    this._extraDatabind = value;
  }
  public resetExtraDatabind() {
    this._extraDatabind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDatabindInput() {
    return this._extraDatabind;
  }

  // extra_y - computed: true, optional: true, required: false
  private _extraY?: string; 
  public get extraY() {
    return this.getStringAttribute('extra_y');
  }
  public set extraY(value: string) {
    this._extraY = value;
  }
  public resetExtraY() {
    this._extraY = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraYInput() {
    return this._extraY;
  }

  // extra_y_legend - computed: false, optional: true, required: false
  private _extraYLegend?: string; 
  public get extraYLegend() {
    return this.getStringAttribute('extra_y_legend');
  }
  public set extraYLegend(value: string) {
    this._extraYLegend = value;
  }
  public resetExtraYLegend() {
    this._extraYLegend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraYLegendInput() {
    return this._extraYLegend;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: number; 
  public get fontSize() {
    return this.getNumberAttribute('font_size');
  }
  public set fontSize(value: number) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // label_angle - computed: true, optional: true, required: false
  private _labelAngle?: string; 
  public get labelAngle() {
    return this.getStringAttribute('label_angle');
  }
  public set labelAngle(value: string) {
    this._labelAngle = value;
  }
  public resetLabelAngle() {
    this._labelAngle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelAngleInput() {
    return this._labelAngle;
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

  // y_legend - computed: false, optional: true, required: false
  private _yLegend?: string; 
  public get yLegend() {
    return this.getStringAttribute('y_legend');
  }
  public set yLegend(value: string) {
    this._yLegend = value;
  }
  public resetYLegend() {
    this._yLegend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yLegendInput() {
    return this._yLegend;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart fortios_report_chart}
*/
export class ReportChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_report_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportChart to import
  * @param importFromId The id of the existing ReportChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_report_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_chart fortios_report_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportChartConfig
  */
  public constructor(scope: Construct, id: string, config: ReportChartConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_report_chart',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._background = config.background;
    this._category = config.category;
    this._colorPalette = config.colorPalette;
    this._comments = config.comments;
    this._dataset = config.dataset;
    this._dimension = config.dimension;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._favorite = config.favorite;
    this._getAllTables = config.fetchAllTables;
    this._graphType = config.graphType;
    this._id = config.id;
    this._legend = config.legend;
    this._legendFontSize = config.legendFontSize;
    this._name = config.name;
    this._period = config.period;
    this._policy = config.policy;
    this._style = config.style;
    this._title = config.title;
    this._titleFontSize = config.titleFontSize;
    this._type = config.type;
    this._vdomparam = config.vdomparam;
    this._categorySeries.internalValue = config.categorySeries;
    this._column.internalValue = config.column;
    this._drillDownCharts.internalValue = config.drillDownCharts;
    this._valueSeries.internalValue = config.valueSeries;
    this._xSeries.internalValue = config.xSeries;
    this._ySeries.internalValue = config.ySeries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // background - computed: false, optional: true, required: false
  private _background?: string; 
  public get background() {
    return this.getStringAttribute('background');
  }
  public set background(value: string) {
    this._background = value;
  }
  public resetBackground() {
    this._background = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background;
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // color_palette - computed: false, optional: true, required: false
  private _colorPalette?: string; 
  public get colorPalette() {
    return this.getStringAttribute('color_palette');
  }
  public set colorPalette(value: string) {
    this._colorPalette = value;
  }
  public resetColorPalette() {
    this._colorPalette = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorPaletteInput() {
    return this._colorPalette;
  }

  // comments - computed: false, optional: false, required: true
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // dimension - computed: true, optional: true, required: false
  private _dimension?: string; 
  public get dimension() {
    return this.getStringAttribute('dimension');
  }
  public set dimension(value: string) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
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

  // favorite - computed: true, optional: true, required: false
  private _favorite?: string; 
  public get favorite() {
    return this.getStringAttribute('favorite');
  }
  public set favorite(value: string) {
    this._favorite = value;
  }
  public resetFavorite() {
    this._favorite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get favoriteInput() {
    return this._favorite;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // graph_type - computed: true, optional: true, required: false
  private _graphType?: string; 
  public get graphType() {
    return this.getStringAttribute('graph_type');
  }
  public set graphType(value: string) {
    this._graphType = value;
  }
  public resetGraphType() {
    this._graphType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphTypeInput() {
    return this._graphType;
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

  // legend - computed: true, optional: true, required: false
  private _legend?: string; 
  public get legend() {
    return this.getStringAttribute('legend');
  }
  public set legend(value: string) {
    this._legend = value;
  }
  public resetLegend() {
    this._legend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend;
  }

  // legend_font_size - computed: false, optional: true, required: false
  private _legendFontSize?: number; 
  public get legendFontSize() {
    return this.getNumberAttribute('legend_font_size');
  }
  public set legendFontSize(value: number) {
    this._legendFontSize = value;
  }
  public resetLegendFontSize() {
    this._legendFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendFontSizeInput() {
    return this._legendFontSize;
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

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: number; 
  public get policy() {
    return this.getNumberAttribute('policy');
  }
  public set policy(value: number) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // style - computed: true, optional: true, required: false
  private _style?: string; 
  public get style() {
    return this.getStringAttribute('style');
  }
  public set style(value: string) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
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

  // title_font_size - computed: false, optional: true, required: false
  private _titleFontSize?: number; 
  public get titleFontSize() {
    return this.getNumberAttribute('title_font_size');
  }
  public set titleFontSize(value: number) {
    this._titleFontSize = value;
  }
  public resetTitleFontSize() {
    this._titleFontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFontSizeInput() {
    return this._titleFontSize;
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // category_series - computed: false, optional: true, required: false
  private _categorySeries = new ReportChartCategorySeriesOutputReference(this, "category_series");
  public get categorySeries() {
    return this._categorySeries;
  }
  public putCategorySeries(value: ReportChartCategorySeries) {
    this._categorySeries.internalValue = value;
  }
  public resetCategorySeries() {
    this._categorySeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorySeriesInput() {
    return this._categorySeries.internalValue;
  }

  // column - computed: false, optional: true, required: false
  private _column = new ReportChartColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: ReportChartColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // drill_down_charts - computed: false, optional: true, required: false
  private _drillDownCharts = new ReportChartDrillDownChartsList(this, "drill_down_charts", false);
  public get drillDownCharts() {
    return this._drillDownCharts;
  }
  public putDrillDownCharts(value: ReportChartDrillDownCharts[] | cdktf.IResolvable) {
    this._drillDownCharts.internalValue = value;
  }
  public resetDrillDownCharts() {
    this._drillDownCharts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drillDownChartsInput() {
    return this._drillDownCharts.internalValue;
  }

  // value_series - computed: false, optional: true, required: false
  private _valueSeries = new ReportChartValueSeriesOutputReference(this, "value_series");
  public get valueSeries() {
    return this._valueSeries;
  }
  public putValueSeries(value: ReportChartValueSeries) {
    this._valueSeries.internalValue = value;
  }
  public resetValueSeries() {
    this._valueSeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSeriesInput() {
    return this._valueSeries.internalValue;
  }

  // x_series - computed: false, optional: true, required: false
  private _xSeries = new ReportChartXSeriesOutputReference(this, "x_series");
  public get xSeries() {
    return this._xSeries;
  }
  public putXSeries(value: ReportChartXSeries) {
    this._xSeries.internalValue = value;
  }
  public resetXSeries() {
    this._xSeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xSeriesInput() {
    return this._xSeries.internalValue;
  }

  // y_series - computed: false, optional: true, required: false
  private _ySeries = new ReportChartYSeriesOutputReference(this, "y_series");
  public get ySeries() {
    return this._ySeries;
  }
  public putYSeries(value: ReportChartYSeries) {
    this._ySeries.internalValue = value;
  }
  public resetYSeries() {
    this._ySeries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ySeriesInput() {
    return this._ySeries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      background: cdktf.stringToTerraform(this._background),
      category: cdktf.stringToTerraform(this._category),
      color_palette: cdktf.stringToTerraform(this._colorPalette),
      comments: cdktf.stringToTerraform(this._comments),
      dataset: cdktf.stringToTerraform(this._dataset),
      dimension: cdktf.stringToTerraform(this._dimension),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      favorite: cdktf.stringToTerraform(this._favorite),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      graph_type: cdktf.stringToTerraform(this._graphType),
      id: cdktf.stringToTerraform(this._id),
      legend: cdktf.stringToTerraform(this._legend),
      legend_font_size: cdktf.numberToTerraform(this._legendFontSize),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.stringToTerraform(this._period),
      policy: cdktf.numberToTerraform(this._policy),
      style: cdktf.stringToTerraform(this._style),
      title: cdktf.stringToTerraform(this._title),
      title_font_size: cdktf.numberToTerraform(this._titleFontSize),
      type: cdktf.stringToTerraform(this._type),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      category_series: reportChartCategorySeriesToTerraform(this._categorySeries.internalValue),
      column: cdktf.listMapper(reportChartColumnToTerraform, true)(this._column.internalValue),
      drill_down_charts: cdktf.listMapper(reportChartDrillDownChartsToTerraform, true)(this._drillDownCharts.internalValue),
      value_series: reportChartValueSeriesToTerraform(this._valueSeries.internalValue),
      x_series: reportChartXSeriesToTerraform(this._xSeries.internalValue),
      y_series: reportChartYSeriesToTerraform(this._ySeries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      background: {
        value: cdktf.stringToHclTerraform(this._background),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color_palette: {
        value: cdktf.stringToHclTerraform(this._colorPalette),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset: {
        value: cdktf.stringToHclTerraform(this._dataset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dimension: {
        value: cdktf.stringToHclTerraform(this._dimension),
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
      favorite: {
        value: cdktf.stringToHclTerraform(this._favorite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_type: {
        value: cdktf.stringToHclTerraform(this._graphType),
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
      legend: {
        value: cdktf.stringToHclTerraform(this._legend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legend_font_size: {
        value: cdktf.numberToHclTerraform(this._legendFontSize),
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
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.numberToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      style: {
        value: cdktf.stringToHclTerraform(this._style),
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
      title_font_size: {
        value: cdktf.numberToHclTerraform(this._titleFontSize),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category_series: {
        value: reportChartCategorySeriesToHclTerraform(this._categorySeries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportChartCategorySeriesList",
      },
      column: {
        value: cdktf.listMapperHcl(reportChartColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportChartColumnList",
      },
      drill_down_charts: {
        value: cdktf.listMapperHcl(reportChartDrillDownChartsToHclTerraform, true)(this._drillDownCharts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportChartDrillDownChartsList",
      },
      value_series: {
        value: reportChartValueSeriesToHclTerraform(this._valueSeries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportChartValueSeriesList",
      },
      x_series: {
        value: reportChartXSeriesToHclTerraform(this._xSeries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportChartXSeriesList",
      },
      y_series: {
        value: reportChartYSeriesToHclTerraform(this._ySeries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportChartYSeriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
