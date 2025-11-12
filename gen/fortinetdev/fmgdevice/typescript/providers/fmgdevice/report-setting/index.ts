// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#device_name ReportSetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#device_vdom ReportSetting#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#fortiview ReportSetting#fortiview}
  */
  readonly fortiview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#id ReportSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#pdf_report ReportSetting#pdf_report}
  */
  readonly pdfReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#report_source ReportSetting#report_source}
  */
  readonly reportSource?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#top_n ReportSetting#top_n}
  */
  readonly topN?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#web_browsing_threshold ReportSetting#web_browsing_threshold}
  */
  readonly webBrowsingThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting fmgdevice_report_setting}
*/
export class ReportSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_report_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportSetting to import
  * @param importFromId The id of the existing ReportSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_report_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_setting fmgdevice_report_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReportSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_report_setting',
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
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._fortiview = config.fortiview;
    this._id = config.id;
    this._pdfReport = config.pdfReport;
    this._reportSource = config.reportSource;
    this._topN = config.topN;
    this._webBrowsingThreshold = config.webBrowsingThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fortiview - computed: true, optional: true, required: false
  private _fortiview?: string; 
  public get fortiview() {
    return this.getStringAttribute('fortiview');
  }
  public set fortiview(value: string) {
    this._fortiview = value;
  }
  public resetFortiview() {
    this._fortiview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiviewInput() {
    return this._fortiview;
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

  // pdf_report - computed: true, optional: true, required: false
  private _pdfReport?: string; 
  public get pdfReport() {
    return this.getStringAttribute('pdf_report');
  }
  public set pdfReport(value: string) {
    this._pdfReport = value;
  }
  public resetPdfReport() {
    this._pdfReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfReportInput() {
    return this._pdfReport;
  }

  // report_source - computed: true, optional: true, required: false
  private _reportSource?: string[]; 
  public get reportSource() {
    return cdktf.Fn.tolist(this.getListAttribute('report_source'));
  }
  public set reportSource(value: string[]) {
    this._reportSource = value;
  }
  public resetReportSource() {
    this._reportSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportSourceInput() {
    return this._reportSource;
  }

  // top_n - computed: true, optional: true, required: false
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

  // web_browsing_threshold - computed: true, optional: true, required: false
  private _webBrowsingThreshold?: number; 
  public get webBrowsingThreshold() {
    return this.getNumberAttribute('web_browsing_threshold');
  }
  public set webBrowsingThreshold(value: number) {
    this._webBrowsingThreshold = value;
  }
  public resetWebBrowsingThreshold() {
    this._webBrowsingThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webBrowsingThresholdInput() {
    return this._webBrowsingThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      fortiview: cdktf.stringToTerraform(this._fortiview),
      id: cdktf.stringToTerraform(this._id),
      pdf_report: cdktf.stringToTerraform(this._pdfReport),
      report_source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reportSource),
      top_n: cdktf.numberToTerraform(this._topN),
      web_browsing_threshold: cdktf.numberToTerraform(this._webBrowsingThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      fortiview: {
        value: cdktf.stringToHclTerraform(this._fortiview),
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
      pdf_report: {
        value: cdktf.stringToHclTerraform(this._pdfReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reportSource),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      top_n: {
        value: cdktf.numberToHclTerraform(this._topN),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      web_browsing_threshold: {
        value: cdktf.numberToHclTerraform(this._webBrowsingThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
