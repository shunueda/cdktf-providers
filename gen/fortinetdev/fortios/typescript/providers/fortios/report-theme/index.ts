// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportThemeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#bullet_list_style ReportTheme#bullet_list_style}
  */
  readonly bulletListStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#column_count ReportTheme#column_count}
  */
  readonly columnCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#default_html_style ReportTheme#default_html_style}
  */
  readonly defaultHtmlStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#default_pdf_style ReportTheme#default_pdf_style}
  */
  readonly defaultPdfStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#graph_chart_style ReportTheme#graph_chart_style}
  */
  readonly graphChartStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#heading1_style ReportTheme#heading1_style}
  */
  readonly heading1Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#heading2_style ReportTheme#heading2_style}
  */
  readonly heading2Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#heading3_style ReportTheme#heading3_style}
  */
  readonly heading3Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#heading4_style ReportTheme#heading4_style}
  */
  readonly heading4Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#hline_style ReportTheme#hline_style}
  */
  readonly hlineStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#id ReportTheme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#image_style ReportTheme#image_style}
  */
  readonly imageStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#name ReportTheme#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#normal_text_style ReportTheme#normal_text_style}
  */
  readonly normalTextStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#numbered_list_style ReportTheme#numbered_list_style}
  */
  readonly numberedListStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#page_footer_style ReportTheme#page_footer_style}
  */
  readonly pageFooterStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#page_header_style ReportTheme#page_header_style}
  */
  readonly pageHeaderStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#page_orient ReportTheme#page_orient}
  */
  readonly pageOrient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#page_style ReportTheme#page_style}
  */
  readonly pageStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#report_subtitle_style ReportTheme#report_subtitle_style}
  */
  readonly reportSubtitleStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#report_title_style ReportTheme#report_title_style}
  */
  readonly reportTitleStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#table_chart_caption_style ReportTheme#table_chart_caption_style}
  */
  readonly tableChartCaptionStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#table_chart_even_row_style ReportTheme#table_chart_even_row_style}
  */
  readonly tableChartEvenRowStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#table_chart_head_style ReportTheme#table_chart_head_style}
  */
  readonly tableChartHeadStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#table_chart_odd_row_style ReportTheme#table_chart_odd_row_style}
  */
  readonly tableChartOddRowStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#table_chart_style ReportTheme#table_chart_style}
  */
  readonly tableChartStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#toc_heading1_style ReportTheme#toc_heading1_style}
  */
  readonly tocHeading1Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#toc_heading2_style ReportTheme#toc_heading2_style}
  */
  readonly tocHeading2Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#toc_heading3_style ReportTheme#toc_heading3_style}
  */
  readonly tocHeading3Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#toc_heading4_style ReportTheme#toc_heading4_style}
  */
  readonly tocHeading4Style?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#toc_title_style ReportTheme#toc_title_style}
  */
  readonly tocTitleStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#vdomparam ReportTheme#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme fortios_report_theme}
*/
export class ReportTheme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_report_theme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportTheme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportTheme to import
  * @param importFromId The id of the existing ReportTheme that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportTheme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_report_theme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/report_theme fortios_report_theme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportThemeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReportThemeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_report_theme',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bulletListStyle = config.bulletListStyle;
    this._columnCount = config.columnCount;
    this._defaultHtmlStyle = config.defaultHtmlStyle;
    this._defaultPdfStyle = config.defaultPdfStyle;
    this._graphChartStyle = config.graphChartStyle;
    this._heading1Style = config.heading1Style;
    this._heading2Style = config.heading2Style;
    this._heading3Style = config.heading3Style;
    this._heading4Style = config.heading4Style;
    this._hlineStyle = config.hlineStyle;
    this._id = config.id;
    this._imageStyle = config.imageStyle;
    this._name = config.name;
    this._normalTextStyle = config.normalTextStyle;
    this._numberedListStyle = config.numberedListStyle;
    this._pageFooterStyle = config.pageFooterStyle;
    this._pageHeaderStyle = config.pageHeaderStyle;
    this._pageOrient = config.pageOrient;
    this._pageStyle = config.pageStyle;
    this._reportSubtitleStyle = config.reportSubtitleStyle;
    this._reportTitleStyle = config.reportTitleStyle;
    this._tableChartCaptionStyle = config.tableChartCaptionStyle;
    this._tableChartEvenRowStyle = config.tableChartEvenRowStyle;
    this._tableChartHeadStyle = config.tableChartHeadStyle;
    this._tableChartOddRowStyle = config.tableChartOddRowStyle;
    this._tableChartStyle = config.tableChartStyle;
    this._tocHeading1Style = config.tocHeading1Style;
    this._tocHeading2Style = config.tocHeading2Style;
    this._tocHeading3Style = config.tocHeading3Style;
    this._tocHeading4Style = config.tocHeading4Style;
    this._tocTitleStyle = config.tocTitleStyle;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bullet_list_style - computed: false, optional: true, required: false
  private _bulletListStyle?: string; 
  public get bulletListStyle() {
    return this.getStringAttribute('bullet_list_style');
  }
  public set bulletListStyle(value: string) {
    this._bulletListStyle = value;
  }
  public resetBulletListStyle() {
    this._bulletListStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulletListStyleInput() {
    return this._bulletListStyle;
  }

  // column_count - computed: true, optional: true, required: false
  private _columnCount?: string; 
  public get columnCount() {
    return this.getStringAttribute('column_count');
  }
  public set columnCount(value: string) {
    this._columnCount = value;
  }
  public resetColumnCount() {
    this._columnCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnCountInput() {
    return this._columnCount;
  }

  // default_html_style - computed: false, optional: true, required: false
  private _defaultHtmlStyle?: string; 
  public get defaultHtmlStyle() {
    return this.getStringAttribute('default_html_style');
  }
  public set defaultHtmlStyle(value: string) {
    this._defaultHtmlStyle = value;
  }
  public resetDefaultHtmlStyle() {
    this._defaultHtmlStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHtmlStyleInput() {
    return this._defaultHtmlStyle;
  }

  // default_pdf_style - computed: false, optional: true, required: false
  private _defaultPdfStyle?: string; 
  public get defaultPdfStyle() {
    return this.getStringAttribute('default_pdf_style');
  }
  public set defaultPdfStyle(value: string) {
    this._defaultPdfStyle = value;
  }
  public resetDefaultPdfStyle() {
    this._defaultPdfStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPdfStyleInput() {
    return this._defaultPdfStyle;
  }

  // graph_chart_style - computed: false, optional: true, required: false
  private _graphChartStyle?: string; 
  public get graphChartStyle() {
    return this.getStringAttribute('graph_chart_style');
  }
  public set graphChartStyle(value: string) {
    this._graphChartStyle = value;
  }
  public resetGraphChartStyle() {
    this._graphChartStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphChartStyleInput() {
    return this._graphChartStyle;
  }

  // heading1_style - computed: false, optional: true, required: false
  private _heading1Style?: string; 
  public get heading1Style() {
    return this.getStringAttribute('heading1_style');
  }
  public set heading1Style(value: string) {
    this._heading1Style = value;
  }
  public resetHeading1Style() {
    this._heading1Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heading1StyleInput() {
    return this._heading1Style;
  }

  // heading2_style - computed: false, optional: true, required: false
  private _heading2Style?: string; 
  public get heading2Style() {
    return this.getStringAttribute('heading2_style');
  }
  public set heading2Style(value: string) {
    this._heading2Style = value;
  }
  public resetHeading2Style() {
    this._heading2Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heading2StyleInput() {
    return this._heading2Style;
  }

  // heading3_style - computed: false, optional: true, required: false
  private _heading3Style?: string; 
  public get heading3Style() {
    return this.getStringAttribute('heading3_style');
  }
  public set heading3Style(value: string) {
    this._heading3Style = value;
  }
  public resetHeading3Style() {
    this._heading3Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heading3StyleInput() {
    return this._heading3Style;
  }

  // heading4_style - computed: false, optional: true, required: false
  private _heading4Style?: string; 
  public get heading4Style() {
    return this.getStringAttribute('heading4_style');
  }
  public set heading4Style(value: string) {
    this._heading4Style = value;
  }
  public resetHeading4Style() {
    this._heading4Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heading4StyleInput() {
    return this._heading4Style;
  }

  // hline_style - computed: false, optional: true, required: false
  private _hlineStyle?: string; 
  public get hlineStyle() {
    return this.getStringAttribute('hline_style');
  }
  public set hlineStyle(value: string) {
    this._hlineStyle = value;
  }
  public resetHlineStyle() {
    this._hlineStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlineStyleInput() {
    return this._hlineStyle;
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

  // image_style - computed: false, optional: true, required: false
  private _imageStyle?: string; 
  public get imageStyle() {
    return this.getStringAttribute('image_style');
  }
  public set imageStyle(value: string) {
    this._imageStyle = value;
  }
  public resetImageStyle() {
    this._imageStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageStyleInput() {
    return this._imageStyle;
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

  // normal_text_style - computed: false, optional: true, required: false
  private _normalTextStyle?: string; 
  public get normalTextStyle() {
    return this.getStringAttribute('normal_text_style');
  }
  public set normalTextStyle(value: string) {
    this._normalTextStyle = value;
  }
  public resetNormalTextStyle() {
    this._normalTextStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalTextStyleInput() {
    return this._normalTextStyle;
  }

  // numbered_list_style - computed: false, optional: true, required: false
  private _numberedListStyle?: string; 
  public get numberedListStyle() {
    return this.getStringAttribute('numbered_list_style');
  }
  public set numberedListStyle(value: string) {
    this._numberedListStyle = value;
  }
  public resetNumberedListStyle() {
    this._numberedListStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberedListStyleInput() {
    return this._numberedListStyle;
  }

  // page_footer_style - computed: false, optional: true, required: false
  private _pageFooterStyle?: string; 
  public get pageFooterStyle() {
    return this.getStringAttribute('page_footer_style');
  }
  public set pageFooterStyle(value: string) {
    this._pageFooterStyle = value;
  }
  public resetPageFooterStyle() {
    this._pageFooterStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageFooterStyleInput() {
    return this._pageFooterStyle;
  }

  // page_header_style - computed: false, optional: true, required: false
  private _pageHeaderStyle?: string; 
  public get pageHeaderStyle() {
    return this.getStringAttribute('page_header_style');
  }
  public set pageHeaderStyle(value: string) {
    this._pageHeaderStyle = value;
  }
  public resetPageHeaderStyle() {
    this._pageHeaderStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageHeaderStyleInput() {
    return this._pageHeaderStyle;
  }

  // page_orient - computed: true, optional: true, required: false
  private _pageOrient?: string; 
  public get pageOrient() {
    return this.getStringAttribute('page_orient');
  }
  public set pageOrient(value: string) {
    this._pageOrient = value;
  }
  public resetPageOrient() {
    this._pageOrient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageOrientInput() {
    return this._pageOrient;
  }

  // page_style - computed: false, optional: true, required: false
  private _pageStyle?: string; 
  public get pageStyle() {
    return this.getStringAttribute('page_style');
  }
  public set pageStyle(value: string) {
    this._pageStyle = value;
  }
  public resetPageStyle() {
    this._pageStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageStyleInput() {
    return this._pageStyle;
  }

  // report_subtitle_style - computed: false, optional: true, required: false
  private _reportSubtitleStyle?: string; 
  public get reportSubtitleStyle() {
    return this.getStringAttribute('report_subtitle_style');
  }
  public set reportSubtitleStyle(value: string) {
    this._reportSubtitleStyle = value;
  }
  public resetReportSubtitleStyle() {
    this._reportSubtitleStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportSubtitleStyleInput() {
    return this._reportSubtitleStyle;
  }

  // report_title_style - computed: false, optional: true, required: false
  private _reportTitleStyle?: string; 
  public get reportTitleStyle() {
    return this.getStringAttribute('report_title_style');
  }
  public set reportTitleStyle(value: string) {
    this._reportTitleStyle = value;
  }
  public resetReportTitleStyle() {
    this._reportTitleStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTitleStyleInput() {
    return this._reportTitleStyle;
  }

  // table_chart_caption_style - computed: false, optional: true, required: false
  private _tableChartCaptionStyle?: string; 
  public get tableChartCaptionStyle() {
    return this.getStringAttribute('table_chart_caption_style');
  }
  public set tableChartCaptionStyle(value: string) {
    this._tableChartCaptionStyle = value;
  }
  public resetTableChartCaptionStyle() {
    this._tableChartCaptionStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableChartCaptionStyleInput() {
    return this._tableChartCaptionStyle;
  }

  // table_chart_even_row_style - computed: false, optional: true, required: false
  private _tableChartEvenRowStyle?: string; 
  public get tableChartEvenRowStyle() {
    return this.getStringAttribute('table_chart_even_row_style');
  }
  public set tableChartEvenRowStyle(value: string) {
    this._tableChartEvenRowStyle = value;
  }
  public resetTableChartEvenRowStyle() {
    this._tableChartEvenRowStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableChartEvenRowStyleInput() {
    return this._tableChartEvenRowStyle;
  }

  // table_chart_head_style - computed: false, optional: true, required: false
  private _tableChartHeadStyle?: string; 
  public get tableChartHeadStyle() {
    return this.getStringAttribute('table_chart_head_style');
  }
  public set tableChartHeadStyle(value: string) {
    this._tableChartHeadStyle = value;
  }
  public resetTableChartHeadStyle() {
    this._tableChartHeadStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableChartHeadStyleInput() {
    return this._tableChartHeadStyle;
  }

  // table_chart_odd_row_style - computed: false, optional: true, required: false
  private _tableChartOddRowStyle?: string; 
  public get tableChartOddRowStyle() {
    return this.getStringAttribute('table_chart_odd_row_style');
  }
  public set tableChartOddRowStyle(value: string) {
    this._tableChartOddRowStyle = value;
  }
  public resetTableChartOddRowStyle() {
    this._tableChartOddRowStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableChartOddRowStyleInput() {
    return this._tableChartOddRowStyle;
  }

  // table_chart_style - computed: false, optional: true, required: false
  private _tableChartStyle?: string; 
  public get tableChartStyle() {
    return this.getStringAttribute('table_chart_style');
  }
  public set tableChartStyle(value: string) {
    this._tableChartStyle = value;
  }
  public resetTableChartStyle() {
    this._tableChartStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableChartStyleInput() {
    return this._tableChartStyle;
  }

  // toc_heading1_style - computed: false, optional: true, required: false
  private _tocHeading1Style?: string; 
  public get tocHeading1Style() {
    return this.getStringAttribute('toc_heading1_style');
  }
  public set tocHeading1Style(value: string) {
    this._tocHeading1Style = value;
  }
  public resetTocHeading1Style() {
    this._tocHeading1Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tocHeading1StyleInput() {
    return this._tocHeading1Style;
  }

  // toc_heading2_style - computed: false, optional: true, required: false
  private _tocHeading2Style?: string; 
  public get tocHeading2Style() {
    return this.getStringAttribute('toc_heading2_style');
  }
  public set tocHeading2Style(value: string) {
    this._tocHeading2Style = value;
  }
  public resetTocHeading2Style() {
    this._tocHeading2Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tocHeading2StyleInput() {
    return this._tocHeading2Style;
  }

  // toc_heading3_style - computed: false, optional: true, required: false
  private _tocHeading3Style?: string; 
  public get tocHeading3Style() {
    return this.getStringAttribute('toc_heading3_style');
  }
  public set tocHeading3Style(value: string) {
    this._tocHeading3Style = value;
  }
  public resetTocHeading3Style() {
    this._tocHeading3Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tocHeading3StyleInput() {
    return this._tocHeading3Style;
  }

  // toc_heading4_style - computed: false, optional: true, required: false
  private _tocHeading4Style?: string; 
  public get tocHeading4Style() {
    return this.getStringAttribute('toc_heading4_style');
  }
  public set tocHeading4Style(value: string) {
    this._tocHeading4Style = value;
  }
  public resetTocHeading4Style() {
    this._tocHeading4Style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tocHeading4StyleInput() {
    return this._tocHeading4Style;
  }

  // toc_title_style - computed: false, optional: true, required: false
  private _tocTitleStyle?: string; 
  public get tocTitleStyle() {
    return this.getStringAttribute('toc_title_style');
  }
  public set tocTitleStyle(value: string) {
    this._tocTitleStyle = value;
  }
  public resetTocTitleStyle() {
    this._tocTitleStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tocTitleStyleInput() {
    return this._tocTitleStyle;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bullet_list_style: cdktf.stringToTerraform(this._bulletListStyle),
      column_count: cdktf.stringToTerraform(this._columnCount),
      default_html_style: cdktf.stringToTerraform(this._defaultHtmlStyle),
      default_pdf_style: cdktf.stringToTerraform(this._defaultPdfStyle),
      graph_chart_style: cdktf.stringToTerraform(this._graphChartStyle),
      heading1_style: cdktf.stringToTerraform(this._heading1Style),
      heading2_style: cdktf.stringToTerraform(this._heading2Style),
      heading3_style: cdktf.stringToTerraform(this._heading3Style),
      heading4_style: cdktf.stringToTerraform(this._heading4Style),
      hline_style: cdktf.stringToTerraform(this._hlineStyle),
      id: cdktf.stringToTerraform(this._id),
      image_style: cdktf.stringToTerraform(this._imageStyle),
      name: cdktf.stringToTerraform(this._name),
      normal_text_style: cdktf.stringToTerraform(this._normalTextStyle),
      numbered_list_style: cdktf.stringToTerraform(this._numberedListStyle),
      page_footer_style: cdktf.stringToTerraform(this._pageFooterStyle),
      page_header_style: cdktf.stringToTerraform(this._pageHeaderStyle),
      page_orient: cdktf.stringToTerraform(this._pageOrient),
      page_style: cdktf.stringToTerraform(this._pageStyle),
      report_subtitle_style: cdktf.stringToTerraform(this._reportSubtitleStyle),
      report_title_style: cdktf.stringToTerraform(this._reportTitleStyle),
      table_chart_caption_style: cdktf.stringToTerraform(this._tableChartCaptionStyle),
      table_chart_even_row_style: cdktf.stringToTerraform(this._tableChartEvenRowStyle),
      table_chart_head_style: cdktf.stringToTerraform(this._tableChartHeadStyle),
      table_chart_odd_row_style: cdktf.stringToTerraform(this._tableChartOddRowStyle),
      table_chart_style: cdktf.stringToTerraform(this._tableChartStyle),
      toc_heading1_style: cdktf.stringToTerraform(this._tocHeading1Style),
      toc_heading2_style: cdktf.stringToTerraform(this._tocHeading2Style),
      toc_heading3_style: cdktf.stringToTerraform(this._tocHeading3Style),
      toc_heading4_style: cdktf.stringToTerraform(this._tocHeading4Style),
      toc_title_style: cdktf.stringToTerraform(this._tocTitleStyle),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bullet_list_style: {
        value: cdktf.stringToHclTerraform(this._bulletListStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_count: {
        value: cdktf.stringToHclTerraform(this._columnCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_html_style: {
        value: cdktf.stringToHclTerraform(this._defaultHtmlStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pdf_style: {
        value: cdktf.stringToHclTerraform(this._defaultPdfStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph_chart_style: {
        value: cdktf.stringToHclTerraform(this._graphChartStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heading1_style: {
        value: cdktf.stringToHclTerraform(this._heading1Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heading2_style: {
        value: cdktf.stringToHclTerraform(this._heading2Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heading3_style: {
        value: cdktf.stringToHclTerraform(this._heading3Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heading4_style: {
        value: cdktf.stringToHclTerraform(this._heading4Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hline_style: {
        value: cdktf.stringToHclTerraform(this._hlineStyle),
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
      image_style: {
        value: cdktf.stringToHclTerraform(this._imageStyle),
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
      normal_text_style: {
        value: cdktf.stringToHclTerraform(this._normalTextStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numbered_list_style: {
        value: cdktf.stringToHclTerraform(this._numberedListStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_footer_style: {
        value: cdktf.stringToHclTerraform(this._pageFooterStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_header_style: {
        value: cdktf.stringToHclTerraform(this._pageHeaderStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_orient: {
        value: cdktf.stringToHclTerraform(this._pageOrient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_style: {
        value: cdktf.stringToHclTerraform(this._pageStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_subtitle_style: {
        value: cdktf.stringToHclTerraform(this._reportSubtitleStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_title_style: {
        value: cdktf.stringToHclTerraform(this._reportTitleStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_chart_caption_style: {
        value: cdktf.stringToHclTerraform(this._tableChartCaptionStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_chart_even_row_style: {
        value: cdktf.stringToHclTerraform(this._tableChartEvenRowStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_chart_head_style: {
        value: cdktf.stringToHclTerraform(this._tableChartHeadStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_chart_odd_row_style: {
        value: cdktf.stringToHclTerraform(this._tableChartOddRowStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_chart_style: {
        value: cdktf.stringToHclTerraform(this._tableChartStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toc_heading1_style: {
        value: cdktf.stringToHclTerraform(this._tocHeading1Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toc_heading2_style: {
        value: cdktf.stringToHclTerraform(this._tocHeading2Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toc_heading3_style: {
        value: cdktf.stringToHclTerraform(this._tocHeading3Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toc_heading4_style: {
        value: cdktf.stringToHclTerraform(this._tocHeading4Style),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      toc_title_style: {
        value: cdktf.stringToHclTerraform(this._tocTitleStyle),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
