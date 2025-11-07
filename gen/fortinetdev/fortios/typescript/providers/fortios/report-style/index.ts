// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportStyleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#align ReportStyle#align}
  */
  readonly align?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#bg_color ReportStyle#bg_color}
  */
  readonly bgColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#border_bottom ReportStyle#border_bottom}
  */
  readonly borderBottom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#border_left ReportStyle#border_left}
  */
  readonly borderLeft?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#border_right ReportStyle#border_right}
  */
  readonly borderRight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#border_top ReportStyle#border_top}
  */
  readonly borderTop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#column_gap ReportStyle#column_gap}
  */
  readonly columnGap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#column_span ReportStyle#column_span}
  */
  readonly columnSpan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#fg_color ReportStyle#fg_color}
  */
  readonly fgColor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#font_family ReportStyle#font_family}
  */
  readonly fontFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#font_size ReportStyle#font_size}
  */
  readonly fontSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#font_style ReportStyle#font_style}
  */
  readonly fontStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#font_weight ReportStyle#font_weight}
  */
  readonly fontWeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#height ReportStyle#height}
  */
  readonly height?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#id ReportStyle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#line_height ReportStyle#line_height}
  */
  readonly lineHeight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#margin_bottom ReportStyle#margin_bottom}
  */
  readonly marginBottom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#margin_left ReportStyle#margin_left}
  */
  readonly marginLeft?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#margin_right ReportStyle#margin_right}
  */
  readonly marginRight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#margin_top ReportStyle#margin_top}
  */
  readonly marginTop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#name ReportStyle#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#options ReportStyle#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#padding_bottom ReportStyle#padding_bottom}
  */
  readonly paddingBottom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#padding_left ReportStyle#padding_left}
  */
  readonly paddingLeft?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#padding_right ReportStyle#padding_right}
  */
  readonly paddingRight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#padding_top ReportStyle#padding_top}
  */
  readonly paddingTop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#vdomparam ReportStyle#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#width ReportStyle#width}
  */
  readonly width?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style fortios_report_style}
*/
export class ReportStyle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_report_style";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportStyle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportStyle to import
  * @param importFromId The id of the existing ReportStyle that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportStyle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_report_style", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_style fortios_report_style} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportStyleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReportStyleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_report_style',
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
    this._align = config.align;
    this._bgColor = config.bgColor;
    this._borderBottom = config.borderBottom;
    this._borderLeft = config.borderLeft;
    this._borderRight = config.borderRight;
    this._borderTop = config.borderTop;
    this._columnGap = config.columnGap;
    this._columnSpan = config.columnSpan;
    this._fgColor = config.fgColor;
    this._fontFamily = config.fontFamily;
    this._fontSize = config.fontSize;
    this._fontStyle = config.fontStyle;
    this._fontWeight = config.fontWeight;
    this._height = config.height;
    this._id = config.id;
    this._lineHeight = config.lineHeight;
    this._marginBottom = config.marginBottom;
    this._marginLeft = config.marginLeft;
    this._marginRight = config.marginRight;
    this._marginTop = config.marginTop;
    this._name = config.name;
    this._options = config.options;
    this._paddingBottom = config.paddingBottom;
    this._paddingLeft = config.paddingLeft;
    this._paddingRight = config.paddingRight;
    this._paddingTop = config.paddingTop;
    this._vdomparam = config.vdomparam;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // bg_color - computed: false, optional: true, required: false
  private _bgColor?: string; 
  public get bgColor() {
    return this.getStringAttribute('bg_color');
  }
  public set bgColor(value: string) {
    this._bgColor = value;
  }
  public resetBgColor() {
    this._bgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgColorInput() {
    return this._bgColor;
  }

  // border_bottom - computed: false, optional: true, required: false
  private _borderBottom?: string; 
  public get borderBottom() {
    return this.getStringAttribute('border_bottom');
  }
  public set borderBottom(value: string) {
    this._borderBottom = value;
  }
  public resetBorderBottom() {
    this._borderBottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderBottomInput() {
    return this._borderBottom;
  }

  // border_left - computed: false, optional: true, required: false
  private _borderLeft?: string; 
  public get borderLeft() {
    return this.getStringAttribute('border_left');
  }
  public set borderLeft(value: string) {
    this._borderLeft = value;
  }
  public resetBorderLeft() {
    this._borderLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderLeftInput() {
    return this._borderLeft;
  }

  // border_right - computed: false, optional: true, required: false
  private _borderRight?: string; 
  public get borderRight() {
    return this.getStringAttribute('border_right');
  }
  public set borderRight(value: string) {
    this._borderRight = value;
  }
  public resetBorderRight() {
    this._borderRight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderRightInput() {
    return this._borderRight;
  }

  // border_top - computed: false, optional: true, required: false
  private _borderTop?: string; 
  public get borderTop() {
    return this.getStringAttribute('border_top');
  }
  public set borderTop(value: string) {
    this._borderTop = value;
  }
  public resetBorderTop() {
    this._borderTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderTopInput() {
    return this._borderTop;
  }

  // column_gap - computed: false, optional: true, required: false
  private _columnGap?: string; 
  public get columnGap() {
    return this.getStringAttribute('column_gap');
  }
  public set columnGap(value: string) {
    this._columnGap = value;
  }
  public resetColumnGap() {
    this._columnGap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnGapInput() {
    return this._columnGap;
  }

  // column_span - computed: true, optional: true, required: false
  private _columnSpan?: string; 
  public get columnSpan() {
    return this.getStringAttribute('column_span');
  }
  public set columnSpan(value: string) {
    this._columnSpan = value;
  }
  public resetColumnSpan() {
    this._columnSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSpanInput() {
    return this._columnSpan;
  }

  // fg_color - computed: false, optional: true, required: false
  private _fgColor?: string; 
  public get fgColor() {
    return this.getStringAttribute('fg_color');
  }
  public set fgColor(value: string) {
    this._fgColor = value;
  }
  public resetFgColor() {
    this._fgColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fgColorInput() {
    return this._fgColor;
  }

  // font_family - computed: false, optional: true, required: false
  private _fontFamily?: string; 
  public get fontFamily() {
    return this.getStringAttribute('font_family');
  }
  public set fontFamily(value: string) {
    this._fontFamily = value;
  }
  public resetFontFamily() {
    this._fontFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontFamilyInput() {
    return this._fontFamily;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_style - computed: true, optional: true, required: false
  private _fontStyle?: string; 
  public get fontStyle() {
    return this.getStringAttribute('font_style');
  }
  public set fontStyle(value: string) {
    this._fontStyle = value;
  }
  public resetFontStyle() {
    this._fontStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontStyleInput() {
    return this._fontStyle;
  }

  // font_weight - computed: true, optional: true, required: false
  private _fontWeight?: string; 
  public get fontWeight() {
    return this.getStringAttribute('font_weight');
  }
  public set fontWeight(value: string) {
    this._fontWeight = value;
  }
  public resetFontWeight() {
    this._fontWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontWeightInput() {
    return this._fontWeight;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // line_height - computed: false, optional: true, required: false
  private _lineHeight?: string; 
  public get lineHeight() {
    return this.getStringAttribute('line_height');
  }
  public set lineHeight(value: string) {
    this._lineHeight = value;
  }
  public resetLineHeight() {
    this._lineHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineHeightInput() {
    return this._lineHeight;
  }

  // margin_bottom - computed: false, optional: true, required: false
  private _marginBottom?: string; 
  public get marginBottom() {
    return this.getStringAttribute('margin_bottom');
  }
  public set marginBottom(value: string) {
    this._marginBottom = value;
  }
  public resetMarginBottom() {
    this._marginBottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginBottomInput() {
    return this._marginBottom;
  }

  // margin_left - computed: false, optional: true, required: false
  private _marginLeft?: string; 
  public get marginLeft() {
    return this.getStringAttribute('margin_left');
  }
  public set marginLeft(value: string) {
    this._marginLeft = value;
  }
  public resetMarginLeft() {
    this._marginLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginLeftInput() {
    return this._marginLeft;
  }

  // margin_right - computed: false, optional: true, required: false
  private _marginRight?: string; 
  public get marginRight() {
    return this.getStringAttribute('margin_right');
  }
  public set marginRight(value: string) {
    this._marginRight = value;
  }
  public resetMarginRight() {
    this._marginRight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginRightInput() {
    return this._marginRight;
  }

  // margin_top - computed: false, optional: true, required: false
  private _marginTop?: string; 
  public get marginTop() {
    return this.getStringAttribute('margin_top');
  }
  public set marginTop(value: string) {
    this._marginTop = value;
  }
  public resetMarginTop() {
    this._marginTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginTopInput() {
    return this._marginTop;
  }

  // name - computed: true, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // padding_bottom - computed: false, optional: true, required: false
  private _paddingBottom?: string; 
  public get paddingBottom() {
    return this.getStringAttribute('padding_bottom');
  }
  public set paddingBottom(value: string) {
    this._paddingBottom = value;
  }
  public resetPaddingBottom() {
    this._paddingBottom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingBottomInput() {
    return this._paddingBottom;
  }

  // padding_left - computed: false, optional: true, required: false
  private _paddingLeft?: string; 
  public get paddingLeft() {
    return this.getStringAttribute('padding_left');
  }
  public set paddingLeft(value: string) {
    this._paddingLeft = value;
  }
  public resetPaddingLeft() {
    this._paddingLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingLeftInput() {
    return this._paddingLeft;
  }

  // padding_right - computed: false, optional: true, required: false
  private _paddingRight?: string; 
  public get paddingRight() {
    return this.getStringAttribute('padding_right');
  }
  public set paddingRight(value: string) {
    this._paddingRight = value;
  }
  public resetPaddingRight() {
    this._paddingRight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingRightInput() {
    return this._paddingRight;
  }

  // padding_top - computed: false, optional: true, required: false
  private _paddingTop?: string; 
  public get paddingTop() {
    return this.getStringAttribute('padding_top');
  }
  public set paddingTop(value: string) {
    this._paddingTop = value;
  }
  public resetPaddingTop() {
    this._paddingTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingTopInput() {
    return this._paddingTop;
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

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      align: cdktf.stringToTerraform(this._align),
      bg_color: cdktf.stringToTerraform(this._bgColor),
      border_bottom: cdktf.stringToTerraform(this._borderBottom),
      border_left: cdktf.stringToTerraform(this._borderLeft),
      border_right: cdktf.stringToTerraform(this._borderRight),
      border_top: cdktf.stringToTerraform(this._borderTop),
      column_gap: cdktf.stringToTerraform(this._columnGap),
      column_span: cdktf.stringToTerraform(this._columnSpan),
      fg_color: cdktf.stringToTerraform(this._fgColor),
      font_family: cdktf.stringToTerraform(this._fontFamily),
      font_size: cdktf.stringToTerraform(this._fontSize),
      font_style: cdktf.stringToTerraform(this._fontStyle),
      font_weight: cdktf.stringToTerraform(this._fontWeight),
      height: cdktf.stringToTerraform(this._height),
      id: cdktf.stringToTerraform(this._id),
      line_height: cdktf.stringToTerraform(this._lineHeight),
      margin_bottom: cdktf.stringToTerraform(this._marginBottom),
      margin_left: cdktf.stringToTerraform(this._marginLeft),
      margin_right: cdktf.stringToTerraform(this._marginRight),
      margin_top: cdktf.stringToTerraform(this._marginTop),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.stringToTerraform(this._options),
      padding_bottom: cdktf.stringToTerraform(this._paddingBottom),
      padding_left: cdktf.stringToTerraform(this._paddingLeft),
      padding_right: cdktf.stringToTerraform(this._paddingRight),
      padding_top: cdktf.stringToTerraform(this._paddingTop),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      width: cdktf.stringToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      align: {
        value: cdktf.stringToHclTerraform(this._align),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bg_color: {
        value: cdktf.stringToHclTerraform(this._bgColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      border_bottom: {
        value: cdktf.stringToHclTerraform(this._borderBottom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      border_left: {
        value: cdktf.stringToHclTerraform(this._borderLeft),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      border_right: {
        value: cdktf.stringToHclTerraform(this._borderRight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      border_top: {
        value: cdktf.stringToHclTerraform(this._borderTop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_gap: {
        value: cdktf.stringToHclTerraform(this._columnGap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_span: {
        value: cdktf.stringToHclTerraform(this._columnSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fg_color: {
        value: cdktf.stringToHclTerraform(this._fgColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      font_family: {
        value: cdktf.stringToHclTerraform(this._fontFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      font_size: {
        value: cdktf.stringToHclTerraform(this._fontSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      font_style: {
        value: cdktf.stringToHclTerraform(this._fontStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      font_weight: {
        value: cdktf.stringToHclTerraform(this._fontWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      height: {
        value: cdktf.stringToHclTerraform(this._height),
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
      line_height: {
        value: cdktf.stringToHclTerraform(this._lineHeight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      margin_bottom: {
        value: cdktf.stringToHclTerraform(this._marginBottom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      margin_left: {
        value: cdktf.stringToHclTerraform(this._marginLeft),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      margin_right: {
        value: cdktf.stringToHclTerraform(this._marginRight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      margin_top: {
        value: cdktf.stringToHclTerraform(this._marginTop),
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
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      padding_bottom: {
        value: cdktf.stringToHclTerraform(this._paddingBottom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      padding_left: {
        value: cdktf.stringToHclTerraform(this._paddingLeft),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      padding_right: {
        value: cdktf.stringToHclTerraform(this._paddingRight),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      padding_top: {
        value: cdktf.stringToHclTerraform(this._paddingTop),
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
      width: {
        value: cdktf.stringToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
