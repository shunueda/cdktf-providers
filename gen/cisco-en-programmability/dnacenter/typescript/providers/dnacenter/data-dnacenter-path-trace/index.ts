// generated from terraform resource schema

import { DataDnacenterPathTraceItemList, 
DataDnacenterPathTraceItemsList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataDnacenterPathTraceConfig extends cdktf.TerraformMetaArguments {
  /**
  * destIP query parameter. Destination IP adress
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#dest_ip DataDnacenterPathTrace#dest_ip}
  */
  readonly destIp?: string;
  /**
  * destPort query parameter. Destination port
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#dest_port DataDnacenterPathTrace#dest_port}
  */
  readonly destPort?: string;
  /**
  * flowAnalysisId path parameter. Flow analysis request id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#flow_analysis_id DataDnacenterPathTrace#flow_analysis_id}
  */
  readonly flowAnalysisId?: string;
  /**
  * gtCreateTime query parameter. Analyses requested after this time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#gt_create_time DataDnacenterPathTrace#gt_create_time}
  */
  readonly gtCreateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#id DataDnacenterPathTrace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lastUpdateTime query parameter. Last update time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#last_update_time DataDnacenterPathTrace#last_update_time}
  */
  readonly lastUpdateTime?: string;
  /**
  * limit query parameter. Number of resources returned
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#limit DataDnacenterPathTrace#limit}
  */
  readonly limit?: number;
  /**
  * ltCreateTime query parameter. Analyses requested before this time
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#lt_create_time DataDnacenterPathTrace#lt_create_time}
  */
  readonly ltCreateTime?: string;
  /**
  * offset query parameter. Start index of resources returned (1-based)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#offset DataDnacenterPathTrace#offset}
  */
  readonly offset?: number;
  /**
  * order query parameter. Order by this field
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#order DataDnacenterPathTrace#order}
  */
  readonly order?: string;
  /**
  * periodicRefresh query parameter. Is analysis periodically refreshed?
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#periodic_refresh DataDnacenterPathTrace#periodic_refresh}
  */
  readonly periodicRefresh?: boolean | cdktf.IResolvable;
  /**
  * protocol query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#protocol DataDnacenterPathTrace#protocol}
  */
  readonly protocol?: string;
  /**
  * sortBy query parameter. Sort by this field
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#sort_by DataDnacenterPathTrace#sort_by}
  */
  readonly sortBy?: string;
  /**
  * sourceIP query parameter. Source IP address
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#source_ip DataDnacenterPathTrace#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * sourcePort query parameter. Source port
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#source_port DataDnacenterPathTrace#source_port}
  */
  readonly sourcePort?: string;
  /**
  * status query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#status DataDnacenterPathTrace#status}
  */
  readonly status?: string;
  /**
  * taskId query parameter. Task ID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#task_id DataDnacenterPathTrace#task_id}
  */
  readonly taskId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace dnacenter_path_trace}
*/
export class DataDnacenterPathTrace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_path_trace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterPathTrace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterPathTrace to import
  * @param importFromId The id of the existing DataDnacenterPathTrace that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterPathTrace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_path_trace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/path_trace dnacenter_path_trace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterPathTraceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterPathTraceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_path_trace',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destIp = config.destIp;
    this._destPort = config.destPort;
    this._flowAnalysisId = config.flowAnalysisId;
    this._gtCreateTime = config.gtCreateTime;
    this._id = config.id;
    this._lastUpdateTime = config.lastUpdateTime;
    this._limit = config.limit;
    this._ltCreateTime = config.ltCreateTime;
    this._offset = config.offset;
    this._order = config.order;
    this._periodicRefresh = config.periodicRefresh;
    this._protocol = config.protocol;
    this._sortBy = config.sortBy;
    this._sourceIp = config.sourceIp;
    this._sourcePort = config.sourcePort;
    this._status = config.status;
    this._taskId = config.taskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_ip - computed: false, optional: true, required: false
  private _destIp?: string; 
  public get destIp() {
    return this.getStringAttribute('dest_ip');
  }
  public set destIp(value: string) {
    this._destIp = value;
  }
  public resetDestIp() {
    this._destIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destIpInput() {
    return this._destIp;
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // flow_analysis_id - computed: false, optional: true, required: false
  private _flowAnalysisId?: string; 
  public get flowAnalysisId() {
    return this.getStringAttribute('flow_analysis_id');
  }
  public set flowAnalysisId(value: string) {
    this._flowAnalysisId = value;
  }
  public resetFlowAnalysisId() {
    this._flowAnalysisId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowAnalysisIdInput() {
    return this._flowAnalysisId;
  }

  // gt_create_time - computed: false, optional: true, required: false
  private _gtCreateTime?: string; 
  public get gtCreateTime() {
    return this.getStringAttribute('gt_create_time');
  }
  public set gtCreateTime(value: string) {
    this._gtCreateTime = value;
  }
  public resetGtCreateTime() {
    this._gtCreateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtCreateTimeInput() {
    return this._gtCreateTime;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterPathTraceItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterPathTraceItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // last_update_time - computed: false, optional: true, required: false
  private _lastUpdateTime?: string; 
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }
  public set lastUpdateTime(value: string) {
    this._lastUpdateTime = value;
  }
  public resetLastUpdateTime() {
    this._lastUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateTimeInput() {
    return this._lastUpdateTime;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // lt_create_time - computed: false, optional: true, required: false
  private _ltCreateTime?: string; 
  public get ltCreateTime() {
    return this.getStringAttribute('lt_create_time');
  }
  public set ltCreateTime(value: string) {
    this._ltCreateTime = value;
  }
  public resetLtCreateTime() {
    this._ltCreateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltCreateTimeInput() {
    return this._ltCreateTime;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // periodic_refresh - computed: false, optional: true, required: false
  private _periodicRefresh?: boolean | cdktf.IResolvable; 
  public get periodicRefresh() {
    return this.getBooleanAttribute('periodic_refresh');
  }
  public set periodicRefresh(value: boolean | cdktf.IResolvable) {
    this._periodicRefresh = value;
  }
  public resetPeriodicRefresh() {
    this._periodicRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicRefreshInput() {
    return this._periodicRefresh;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // status - computed: false, optional: true, required: false
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

  // task_id - computed: false, optional: true, required: false
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  public resetTaskId() {
    this._taskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_ip: cdktf.stringToTerraform(this._destIp),
      dest_port: cdktf.stringToTerraform(this._destPort),
      flow_analysis_id: cdktf.stringToTerraform(this._flowAnalysisId),
      gt_create_time: cdktf.stringToTerraform(this._gtCreateTime),
      id: cdktf.stringToTerraform(this._id),
      last_update_time: cdktf.stringToTerraform(this._lastUpdateTime),
      limit: cdktf.numberToTerraform(this._limit),
      lt_create_time: cdktf.stringToTerraform(this._ltCreateTime),
      offset: cdktf.numberToTerraform(this._offset),
      order: cdktf.stringToTerraform(this._order),
      periodic_refresh: cdktf.booleanToTerraform(this._periodicRefresh),
      protocol: cdktf.stringToTerraform(this._protocol),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      status: cdktf.stringToTerraform(this._status),
      task_id: cdktf.stringToTerraform(this._taskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_ip: {
        value: cdktf.stringToHclTerraform(this._destIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port: {
        value: cdktf.stringToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_analysis_id: {
        value: cdktf.stringToHclTerraform(this._flowAnalysisId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gt_create_time: {
        value: cdktf.stringToHclTerraform(this._gtCreateTime),
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
      last_update_time: {
        value: cdktf.stringToHclTerraform(this._lastUpdateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lt_create_time: {
        value: cdktf.stringToHclTerraform(this._ltCreateTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      periodic_refresh: {
        value: cdktf.booleanToHclTerraform(this._periodicRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
