// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FinancialCommitmentReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The date bucket of the FinancialCommitmentReport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#date_bucket FinancialCommitmentReport#date_bucket}
  */
  readonly dateBucket?: string;
  /**
  * The date interval of the FinancialCommitmentReport. Unless 'custom' is used, this is incompatible with 'start_date' and 'end_date' parameters. Defaults to 'last_3_months'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#date_interval FinancialCommitmentReport#date_interval}
  */
  readonly dateInterval?: string;
  /**
  * The end date of the FinancialCommitmentReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#end_date FinancialCommitmentReport#end_date}
  */
  readonly endDate?: string;
  /**
  * The filter query language to apply to the FinancialCommitmentReport. Additional documentation available at https://docs.vantage.sh/vql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#filter FinancialCommitmentReport#filter}
  */
  readonly filter?: string;
  /**
  * Grouping values for aggregating costs on the FinancialCommitmentReport. Valid groupings: cost_type, commitment_type, service, resource_account_id, provider_account_id, region, cost_category, cost_sub_category, instance_type, tag, tag:<label_name>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#groupings FinancialCommitmentReport#groupings}
  */
  readonly groupings?: string[];
  /**
  * The scope for the costs. Possible values: discountable, all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#on_demand_costs_scope FinancialCommitmentReport#on_demand_costs_scope}
  */
  readonly onDemandCostsScope?: string;
  /**
  * The start date of the FinancialCommitmentReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#start_date FinancialCommitmentReport#start_date}
  */
  readonly startDate?: string;
  /**
  * The title of the FinancialCommitmentReport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#title FinancialCommitmentReport#title}
  */
  readonly title: string;
  /**
  * The Workspace in which the FinancialCommitmentReport will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#workspace_token FinancialCommitmentReport#workspace_token}
  */
  readonly workspaceToken: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report vantage_financial_commitment_report}
*/
export class FinancialCommitmentReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_financial_commitment_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FinancialCommitmentReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FinancialCommitmentReport to import
  * @param importFromId The id of the existing FinancialCommitmentReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FinancialCommitmentReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_financial_commitment_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/financial_commitment_report vantage_financial_commitment_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FinancialCommitmentReportConfig
  */
  public constructor(scope: Construct, id: string, config: FinancialCommitmentReportConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_financial_commitment_report',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dateBucket = config.dateBucket;
    this._dateInterval = config.dateInterval;
    this._endDate = config.endDate;
    this._filter = config.filter;
    this._groupings = config.groupings;
    this._onDemandCostsScope = config.onDemandCostsScope;
    this._startDate = config.startDate;
    this._title = config.title;
    this._workspaceToken = config.workspaceToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // date_bucket - computed: true, optional: true, required: false
  private _dateBucket?: string; 
  public get dateBucket() {
    return this.getStringAttribute('date_bucket');
  }
  public set dateBucket(value: string) {
    this._dateBucket = value;
  }
  public resetDateBucket() {
    this._dateBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateBucketInput() {
    return this._dateBucket;
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

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // groupings - computed: true, optional: true, required: false
  private _groupings?: string[]; 
  public get groupings() {
    return this.getListAttribute('groupings');
  }
  public set groupings(value: string[]) {
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

  // on_demand_costs_scope - computed: true, optional: true, required: false
  private _onDemandCostsScope?: string; 
  public get onDemandCostsScope() {
    return this.getStringAttribute('on_demand_costs_scope');
  }
  public set onDemandCostsScope(value: string) {
    this._onDemandCostsScope = value;
  }
  public resetOnDemandCostsScope() {
    this._onDemandCostsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandCostsScopeInput() {
    return this._onDemandCostsScope;
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

  // user_token - computed: true, optional: false, required: false
  public get userToken() {
    return this.getStringAttribute('user_token');
  }

  // workspace_token - computed: false, optional: false, required: true
  private _workspaceToken?: string; 
  public get workspaceToken() {
    return this.getStringAttribute('workspace_token');
  }
  public set workspaceToken(value: string) {
    this._workspaceToken = value;
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
      date_bucket: cdktf.stringToTerraform(this._dateBucket),
      date_interval: cdktf.stringToTerraform(this._dateInterval),
      end_date: cdktf.stringToTerraform(this._endDate),
      filter: cdktf.stringToTerraform(this._filter),
      groupings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupings),
      on_demand_costs_scope: cdktf.stringToTerraform(this._onDemandCostsScope),
      start_date: cdktf.stringToTerraform(this._startDate),
      title: cdktf.stringToTerraform(this._title),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      date_bucket: {
        value: cdktf.stringToHclTerraform(this._dateBucket),
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
      groupings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      on_demand_costs_scope: {
        value: cdktf.stringToHclTerraform(this._onDemandCostsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
