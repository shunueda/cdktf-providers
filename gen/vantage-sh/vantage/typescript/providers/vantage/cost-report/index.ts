// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Chart type to apply to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#chart_type CostReport#chart_type}
  */
  readonly chartType?: string;
  /**
  * Date bin to apply to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#date_bin CostReport#date_bin}
  */
  readonly dateBin?: string;
  /**
  * Date interval to apply to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#date_interval CostReport#date_interval}
  */
  readonly dateInterval?: string;
  /**
  * End date to apply to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#end_date CostReport#end_date}
  */
  readonly endDate?: string;
  /**
  * Filter query to apply to the Cost Report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#filter CostReport#filter}
  */
  readonly filter?: string;
  /**
  * Token of the folder this Cost Report resides in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#folder_token CostReport#folder_token}
  */
  readonly folderToken?: string;
  /**
  * Grouping aggregations applied to the filtered data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#groupings CostReport#groupings}
  */
  readonly groupings?: string;
  /**
  * End date to apply to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#previous_period_end_date CostReport#previous_period_end_date}
  */
  readonly previousPeriodEndDate?: string;
  /**
  * Start date to apply to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#previous_period_start_date CostReport#previous_period_start_date}
  */
  readonly previousPeriodStartDate?: string;
  /**
  * Saved filter tokens to be applied to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#saved_filter_tokens CostReport#saved_filter_tokens}
  */
  readonly savedFilterTokens?: string[];
  /**
  * Start date to apply to the Cost Report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#start_date CostReport#start_date}
  */
  readonly startDate?: string;
  /**
  * Title of the Cost Report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#title CostReport#title}
  */
  readonly title: string;
  /**
  * Workspace token to add the Cost Report to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#workspace_token CostReport#workspace_token}
  */
  readonly workspaceToken?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report vantage_cost_report}
*/
export class CostReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_cost_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CostReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CostReport to import
  * @param importFromId The id of the existing CostReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CostReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_cost_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/cost_report vantage_cost_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostReportConfig
  */
  public constructor(scope: Construct, id: string, config: CostReportConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_cost_report',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.70',
        providerVersionConstraint: '0.1.70'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chartType = config.chartType;
    this._dateBin = config.dateBin;
    this._dateInterval = config.dateInterval;
    this._endDate = config.endDate;
    this._filter = config.filter;
    this._folderToken = config.folderToken;
    this._groupings = config.groupings;
    this._previousPeriodEndDate = config.previousPeriodEndDate;
    this._previousPeriodStartDate = config.previousPeriodStartDate;
    this._savedFilterTokens = config.savedFilterTokens;
    this._startDate = config.startDate;
    this._title = config.title;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chart_type - computed: true, optional: true, required: false
  private _chartType?: string; 
  public get chartType() {
    return this.getStringAttribute('chart_type');
  }
  public set chartType(value: string) {
    this._chartType = value;
  }
  public resetChartType() {
    this._chartType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartTypeInput() {
    return this._chartType;
  }

  // date_bin - computed: true, optional: true, required: false
  private _dateBin?: string; 
  public get dateBin() {
    return this.getStringAttribute('date_bin');
  }
  public set dateBin(value: string) {
    this._dateBin = value;
  }
  public resetDateBin() {
    this._dateBin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateBinInput() {
    return this._dateBin;
  }

  // date_interval - computed: true, optional: true, required: false
  private _dateInterval?: string; 
  public get dateInterval() {
    return this.getStringAttribute('date_interval');
  }
  public set dateInterval(value: string) {
    this._dateInterval = value;
  }
  public resetDateInterval() {
    this._dateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateIntervalInput() {
    return this._dateInterval;
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // folder_token - computed: true, optional: true, required: false
  private _folderToken?: string; 
  public get folderToken() {
    return this.getStringAttribute('folder_token');
  }
  public set folderToken(value: string) {
    this._folderToken = value;
  }
  public resetFolderToken() {
    this._folderToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderTokenInput() {
    return this._folderToken;
  }

  // groupings - computed: true, optional: true, required: false
  private _groupings?: string; 
  public get groupings() {
    return this.getStringAttribute('groupings');
  }
  public set groupings(value: string) {
    this._groupings = value;
  }
  public resetGroupings() {
    this._groupings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingsInput() {
    return this._groupings;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // previous_period_end_date - computed: true, optional: true, required: false
  private _previousPeriodEndDate?: string; 
  public get previousPeriodEndDate() {
    return this.getStringAttribute('previous_period_end_date');
  }
  public set previousPeriodEndDate(value: string) {
    this._previousPeriodEndDate = value;
  }
  public resetPreviousPeriodEndDate() {
    this._previousPeriodEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousPeriodEndDateInput() {
    return this._previousPeriodEndDate;
  }

  // previous_period_start_date - computed: true, optional: true, required: false
  private _previousPeriodStartDate?: string; 
  public get previousPeriodStartDate() {
    return this.getStringAttribute('previous_period_start_date');
  }
  public set previousPeriodStartDate(value: string) {
    this._previousPeriodStartDate = value;
  }
  public resetPreviousPeriodStartDate() {
    this._previousPeriodStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousPeriodStartDateInput() {
    return this._previousPeriodStartDate;
  }

  // saved_filter_tokens - computed: true, optional: true, required: false
  private _savedFilterTokens?: string[]; 
  public get savedFilterTokens() {
    return this.getListAttribute('saved_filter_tokens');
  }
  public set savedFilterTokens(value: string[]) {
    this._savedFilterTokens = value;
  }
  public resetSavedFilterTokens() {
    this._savedFilterTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savedFilterTokensInput() {
    return this._savedFilterTokens;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // workspace_token - computed: true, optional: true, required: false
  private _workspaceToken?: string; 
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
  public set workspaceToken(value: string) {
    this._workspaceToken = value;
  }
  public resetWorkspaceToken() {
    this._workspaceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceTokenInput() {
    return this._workspaceToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chart_type: cdktf.stringToTerraform(this._chartType),
      date_bin: cdktf.stringToTerraform(this._dateBin),
      date_interval: cdktf.stringToTerraform(this._dateInterval),
      end_date: cdktf.stringToTerraform(this._endDate),
      filter: cdktf.stringToTerraform(this._filter),
      folder_token: cdktf.stringToTerraform(this._folderToken),
      groupings: cdktf.stringToTerraform(this._groupings),
      previous_period_end_date: cdktf.stringToTerraform(this._previousPeriodEndDate),
      previous_period_start_date: cdktf.stringToTerraform(this._previousPeriodStartDate),
      saved_filter_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._savedFilterTokens),
      start_date: cdktf.stringToTerraform(this._startDate),
      title: cdktf.stringToTerraform(this._title),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chart_type: {
        value: cdktf.stringToHclTerraform(this._chartType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_bin: {
        value: cdktf.stringToHclTerraform(this._dateBin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_interval: {
        value: cdktf.stringToHclTerraform(this._dateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_token: {
        value: cdktf.stringToHclTerraform(this._folderToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupings: {
        value: cdktf.stringToHclTerraform(this._groupings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_period_end_date: {
        value: cdktf.stringToHclTerraform(this._previousPeriodEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      previous_period_start_date: {
        value: cdktf.stringToHclTerraform(this._previousPeriodStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saved_filter_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._savedFilterTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
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
      workspace_token: {
        value: cdktf.stringToHclTerraform(this._workspaceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
