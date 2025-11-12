// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkFlowReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * The date interval of the NetworkFlowReport. Unless 'custom' is used, this is incompatible with 'start_date' and 'end_date' parameters. Defaults to 'last_7_days'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#date_interval NetworkFlowReport#date_interval}
  */
  readonly dateInterval?: string;
  /**
  * The end date of the NetworkFlowReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#end_date NetworkFlowReport#end_date}
  */
  readonly endDate?: string;
  /**
  * The filter query language to apply to the NetworkFlowReport. Additional documentation available at https://docs.vantage.sh/vql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#filter NetworkFlowReport#filter}
  */
  readonly filter?: string;
  /**
  * The flow direction of the NetworkFlowReport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#flow_direction NetworkFlowReport#flow_direction}
  */
  readonly flowDirection?: string;
  /**
  * The dimension by which the logs in the report are sorted. Defaults to costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#flow_weight NetworkFlowReport#flow_weight}
  */
  readonly flowWeight?: string;
  /**
  * Grouping values for aggregating data on the NetworkFlowReport. Valid groupings: account_id, az_id, dstaddr, dsthostname, flow_direction, interface_id, instance_id, peer_resource_uuid, peer_account_id, peer_vpc_id, peer_region, peer_az_id, peer_subnet_id, peer_interface_id, peer_instance_id, region, resource_uuid, srcaddr, srchostname, subnet_id, traffic_category, traffic_path, vpc_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#groupings NetworkFlowReport#groupings}
  */
  readonly groupings?: string[];
  /**
  * The start date of the NetworkFlowReport. YYYY-MM-DD formatted. Incompatible with 'date_interval' parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#start_date NetworkFlowReport#start_date}
  */
  readonly startDate?: string;
  /**
  * The title of the NetworkFlowReport.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#title NetworkFlowReport#title}
  */
  readonly title: string;
  /**
  * The Workspace in which the NetworkFlowReport will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#workspace_token NetworkFlowReport#workspace_token}
  */
  readonly workspaceToken: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report vantage_network_flow_report}
*/
export class NetworkFlowReport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_network_flow_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkFlowReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkFlowReport to import
  * @param importFromId The id of the existing NetworkFlowReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkFlowReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_network_flow_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/network_flow_report vantage_network_flow_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkFlowReportConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkFlowReportConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_network_flow_report',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dateInterval = config.dateInterval;
    this._endDate = config.endDate;
    this._filter = config.filter;
    this._flowDirection = config.flowDirection;
    this._flowWeight = config.flowWeight;
    this._groupings = config.groupings;
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

  // created_by_token - computed: true, optional: false, required: false
  public get createdByToken() {
    return this.getStringAttribute('created_by_token');
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

  // flow_direction - computed: true, optional: true, required: false
  private _flowDirection?: string; 
  public get flowDirection() {
    return this.getStringAttribute('flow_direction');
  }
  public set flowDirection(value: string) {
    this._flowDirection = value;
  }
  public resetFlowDirection() {
    this._flowDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDirectionInput() {
    return this._flowDirection;
  }

  // flow_weight - computed: true, optional: true, required: false
  private _flowWeight?: string; 
  public get flowWeight() {
    return this.getStringAttribute('flow_weight');
  }
  public set flowWeight(value: string) {
    this._flowWeight = value;
  }
  public resetFlowWeight() {
    this._flowWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowWeightInput() {
    return this._flowWeight;
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
      date_interval: cdktf.stringToTerraform(this._dateInterval),
      end_date: cdktf.stringToTerraform(this._endDate),
      filter: cdktf.stringToTerraform(this._filter),
      flow_direction: cdktf.stringToTerraform(this._flowDirection),
      flow_weight: cdktf.stringToTerraform(this._flowWeight),
      groupings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupings),
      start_date: cdktf.stringToTerraform(this._startDate),
      title: cdktf.stringToTerraform(this._title),
      workspace_token: cdktf.stringToTerraform(this._workspaceToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      flow_direction: {
        value: cdktf.stringToHclTerraform(this._flowDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_weight: {
        value: cdktf.stringToHclTerraform(this._flowWeight),
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
