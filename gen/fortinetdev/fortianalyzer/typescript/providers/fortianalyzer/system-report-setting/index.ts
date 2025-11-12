// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemReportSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#aggregate_report SystemReportSetting#aggregate_report}
  */
  readonly aggregateReport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#capwap_port SystemReportSetting#capwap_port}
  */
  readonly capwapPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#capwap_service SystemReportSetting#capwap_service}
  */
  readonly capwapService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#exclude_capwap SystemReportSetting#exclude_capwap}
  */
  readonly excludeCapwap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#hcache_lossless SystemReportSetting#hcache_lossless}
  */
  readonly hcacheLossless?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#id SystemReportSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#ldap_cache_timeout SystemReportSetting#ldap_cache_timeout}
  */
  readonly ldapCacheTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#max_rpt_pdf_rows SystemReportSetting#max_rpt_pdf_rows}
  */
  readonly maxRptPdfRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#max_table_rows SystemReportSetting#max_table_rows}
  */
  readonly maxTableRows?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#report_priority SystemReportSetting#report_priority}
  */
  readonly reportPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#template_auto_install SystemReportSetting#template_auto_install}
  */
  readonly templateAutoInstall?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#week_start SystemReportSetting#week_start}
  */
  readonly weekStart?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting fortianalyzer_system_report_setting}
*/
export class SystemReportSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_report_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemReportSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemReportSetting to import
  * @param importFromId The id of the existing SystemReportSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemReportSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_report_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_report_setting fortianalyzer_system_report_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemReportSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemReportSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_report_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateReport = config.aggregateReport;
    this._capwapPort = config.capwapPort;
    this._capwapService = config.capwapService;
    this._excludeCapwap = config.excludeCapwap;
    this._hcacheLossless = config.hcacheLossless;
    this._id = config.id;
    this._ldapCacheTimeout = config.ldapCacheTimeout;
    this._maxRptPdfRows = config.maxRptPdfRows;
    this._maxTableRows = config.maxTableRows;
    this._reportPriority = config.reportPriority;
    this._templateAutoInstall = config.templateAutoInstall;
    this._weekStart = config.weekStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_report - computed: true, optional: true, required: false
  private _aggregateReport?: string; 
  public get aggregateReport() {
    return this.getStringAttribute('aggregate_report');
  }
  public set aggregateReport(value: string) {
    this._aggregateReport = value;
  }
  public resetAggregateReport() {
    this._aggregateReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateReportInput() {
    return this._aggregateReport;
  }

  // capwap_port - computed: true, optional: true, required: false
  private _capwapPort?: number; 
  public get capwapPort() {
    return this.getNumberAttribute('capwap_port');
  }
  public set capwapPort(value: number) {
    this._capwapPort = value;
  }
  public resetCapwapPort() {
    this._capwapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capwapPortInput() {
    return this._capwapPort;
  }

  // capwap_service - computed: false, optional: true, required: false
  private _capwapService?: string; 
  public get capwapService() {
    return this.getStringAttribute('capwap_service');
  }
  public set capwapService(value: string) {
    this._capwapService = value;
  }
  public resetCapwapService() {
    this._capwapService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capwapServiceInput() {
    return this._capwapService;
  }

  // exclude_capwap - computed: true, optional: true, required: false
  private _excludeCapwap?: string; 
  public get excludeCapwap() {
    return this.getStringAttribute('exclude_capwap');
  }
  public set excludeCapwap(value: string) {
    this._excludeCapwap = value;
  }
  public resetExcludeCapwap() {
    this._excludeCapwap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCapwapInput() {
    return this._excludeCapwap;
  }

  // hcache_lossless - computed: true, optional: true, required: false
  private _hcacheLossless?: string; 
  public get hcacheLossless() {
    return this.getStringAttribute('hcache_lossless');
  }
  public set hcacheLossless(value: string) {
    this._hcacheLossless = value;
  }
  public resetHcacheLossless() {
    this._hcacheLossless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcacheLosslessInput() {
    return this._hcacheLossless;
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

  // ldap_cache_timeout - computed: true, optional: true, required: false
  private _ldapCacheTimeout?: number; 
  public get ldapCacheTimeout() {
    return this.getNumberAttribute('ldap_cache_timeout');
  }
  public set ldapCacheTimeout(value: number) {
    this._ldapCacheTimeout = value;
  }
  public resetLdapCacheTimeout() {
    this._ldapCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapCacheTimeoutInput() {
    return this._ldapCacheTimeout;
  }

  // max_rpt_pdf_rows - computed: true, optional: true, required: false
  private _maxRptPdfRows?: number; 
  public get maxRptPdfRows() {
    return this.getNumberAttribute('max_rpt_pdf_rows');
  }
  public set maxRptPdfRows(value: number) {
    this._maxRptPdfRows = value;
  }
  public resetMaxRptPdfRows() {
    this._maxRptPdfRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRptPdfRowsInput() {
    return this._maxRptPdfRows;
  }

  // max_table_rows - computed: true, optional: true, required: false
  private _maxTableRows?: number; 
  public get maxTableRows() {
    return this.getNumberAttribute('max_table_rows');
  }
  public set maxTableRows(value: number) {
    this._maxTableRows = value;
  }
  public resetMaxTableRows() {
    this._maxTableRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTableRowsInput() {
    return this._maxTableRows;
  }

  // report_priority - computed: true, optional: true, required: false
  private _reportPriority?: string; 
  public get reportPriority() {
    return this.getStringAttribute('report_priority');
  }
  public set reportPriority(value: string) {
    this._reportPriority = value;
  }
  public resetReportPriority() {
    this._reportPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportPriorityInput() {
    return this._reportPriority;
  }

  // template_auto_install - computed: true, optional: true, required: false
  private _templateAutoInstall?: string; 
  public get templateAutoInstall() {
    return this.getStringAttribute('template_auto_install');
  }
  public set templateAutoInstall(value: string) {
    this._templateAutoInstall = value;
  }
  public resetTemplateAutoInstall() {
    this._templateAutoInstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateAutoInstallInput() {
    return this._templateAutoInstall;
  }

  // week_start - computed: true, optional: true, required: false
  private _weekStart?: string; 
  public get weekStart() {
    return this.getStringAttribute('week_start');
  }
  public set weekStart(value: string) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate_report: cdktf.stringToTerraform(this._aggregateReport),
      capwap_port: cdktf.numberToTerraform(this._capwapPort),
      capwap_service: cdktf.stringToTerraform(this._capwapService),
      exclude_capwap: cdktf.stringToTerraform(this._excludeCapwap),
      hcache_lossless: cdktf.stringToTerraform(this._hcacheLossless),
      id: cdktf.stringToTerraform(this._id),
      ldap_cache_timeout: cdktf.numberToTerraform(this._ldapCacheTimeout),
      max_rpt_pdf_rows: cdktf.numberToTerraform(this._maxRptPdfRows),
      max_table_rows: cdktf.numberToTerraform(this._maxTableRows),
      report_priority: cdktf.stringToTerraform(this._reportPriority),
      template_auto_install: cdktf.stringToTerraform(this._templateAutoInstall),
      week_start: cdktf.stringToTerraform(this._weekStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_report: {
        value: cdktf.stringToHclTerraform(this._aggregateReport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capwap_port: {
        value: cdktf.numberToHclTerraform(this._capwapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capwap_service: {
        value: cdktf.stringToHclTerraform(this._capwapService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_capwap: {
        value: cdktf.stringToHclTerraform(this._excludeCapwap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hcache_lossless: {
        value: cdktf.stringToHclTerraform(this._hcacheLossless),
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
      ldap_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._ldapCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_rpt_pdf_rows: {
        value: cdktf.numberToHclTerraform(this._maxRptPdfRows),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_table_rows: {
        value: cdktf.numberToHclTerraform(this._maxTableRows),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      report_priority: {
        value: cdktf.stringToHclTerraform(this._reportPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_auto_install: {
        value: cdktf.stringToHclTerraform(this._templateAutoInstall),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_start: {
        value: cdktf.stringToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
