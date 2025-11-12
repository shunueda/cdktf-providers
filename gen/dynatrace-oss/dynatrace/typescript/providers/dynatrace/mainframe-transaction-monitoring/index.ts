// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MainframeTransactionMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * If enabled, CICS regions belonging to the same CICSPlex will be grouped into a single process group. If disabled, a process group will be created for each CICS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#group_cics_regions MainframeTransactionMonitoring#group_cics_regions}
  */
  readonly groupCicsRegions: boolean | cdktf.IResolvable;
  /**
  * If enabled, IMS regions belonging to the same subsystem will be grouped into a single process group. If disabled, a process group will be created for each IMS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#group_ims_regions MainframeTransactionMonitoring#group_ims_regions}
  */
  readonly groupImsRegions: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#id MainframeTransactionMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If enabled, the CICS Transaction Gateway sensor will trace all EXCI requests including those that are using the TCP/IP or SNA protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#monitor_all_ctg_protocols MainframeTransactionMonitoring#monitor_all_ctg_protocols}
  */
  readonly monitorAllCtgProtocols: boolean | cdktf.IResolvable;
  /**
  * Dynatrace automatically traces incoming web requests when they are called by already-monitored services. Enable this setting to monitor all incoming web requests. We recommend enabling it only over a short period of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#monitor_all_incoming_web_requests MainframeTransactionMonitoring#monitor_all_incoming_web_requests}
  */
  readonly monitorAllIncomingWebRequests: boolean | cdktf.IResolvable;
  /**
  * We recommend the default limit of 500 nodes. The value 0 means unlimited number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#node_limit MainframeTransactionMonitoring#node_limit}
  */
  readonly nodeLimit: number;
  /**
  * If enabled, a CICS service will be created for each monitored transaction ID within a process group. If disabled, a CICS service will be created for each monitored CICS region within a process group. We recommend enabling it only when the CICS regions are grouped by their CICSPlex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#zos_cics_service_detection_uses_transaction_id MainframeTransactionMonitoring#zos_cics_service_detection_uses_transaction_id}
  */
  readonly zosCicsServiceDetectionUsesTransactionId: boolean | cdktf.IResolvable;
  /**
  * If enabled, an IMS service will be created for each monitored transaction ID within a process group. If disabled, an IMS service will be created for each monitored IMS region within a process group. We recommend enabling it only when the IMS regions are grouped by their subsystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#zos_ims_service_detection_uses_transaction_id MainframeTransactionMonitoring#zos_ims_service_detection_uses_transaction_id}
  */
  readonly zosImsServiceDetectionUsesTransactionId: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring dynatrace_mainframe_transaction_monitoring}
*/
export class MainframeTransactionMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_mainframe_transaction_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MainframeTransactionMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MainframeTransactionMonitoring to import
  * @param importFromId The id of the existing MainframeTransactionMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MainframeTransactionMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_mainframe_transaction_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mainframe_transaction_monitoring dynatrace_mainframe_transaction_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MainframeTransactionMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: MainframeTransactionMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_mainframe_transaction_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupCicsRegions = config.groupCicsRegions;
    this._groupImsRegions = config.groupImsRegions;
    this._id = config.id;
    this._monitorAllCtgProtocols = config.monitorAllCtgProtocols;
    this._monitorAllIncomingWebRequests = config.monitorAllIncomingWebRequests;
    this._nodeLimit = config.nodeLimit;
    this._zosCicsServiceDetectionUsesTransactionId = config.zosCicsServiceDetectionUsesTransactionId;
    this._zosImsServiceDetectionUsesTransactionId = config.zosImsServiceDetectionUsesTransactionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_cics_regions - computed: false, optional: false, required: true
  private _groupCicsRegions?: boolean | cdktf.IResolvable; 
  public get groupCicsRegions() {
    return this.getBooleanAttribute('group_cics_regions');
  }
  public set groupCicsRegions(value: boolean | cdktf.IResolvable) {
    this._groupCicsRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupCicsRegionsInput() {
    return this._groupCicsRegions;
  }

  // group_ims_regions - computed: false, optional: false, required: true
  private _groupImsRegions?: boolean | cdktf.IResolvable; 
  public get groupImsRegions() {
    return this.getBooleanAttribute('group_ims_regions');
  }
  public set groupImsRegions(value: boolean | cdktf.IResolvable) {
    this._groupImsRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupImsRegionsInput() {
    return this._groupImsRegions;
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

  // monitor_all_ctg_protocols - computed: false, optional: false, required: true
  private _monitorAllCtgProtocols?: boolean | cdktf.IResolvable; 
  public get monitorAllCtgProtocols() {
    return this.getBooleanAttribute('monitor_all_ctg_protocols');
  }
  public set monitorAllCtgProtocols(value: boolean | cdktf.IResolvable) {
    this._monitorAllCtgProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAllCtgProtocolsInput() {
    return this._monitorAllCtgProtocols;
  }

  // monitor_all_incoming_web_requests - computed: false, optional: false, required: true
  private _monitorAllIncomingWebRequests?: boolean | cdktf.IResolvable; 
  public get monitorAllIncomingWebRequests() {
    return this.getBooleanAttribute('monitor_all_incoming_web_requests');
  }
  public set monitorAllIncomingWebRequests(value: boolean | cdktf.IResolvable) {
    this._monitorAllIncomingWebRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAllIncomingWebRequestsInput() {
    return this._monitorAllIncomingWebRequests;
  }

  // node_limit - computed: false, optional: false, required: true
  private _nodeLimit?: number; 
  public get nodeLimit() {
    return this.getNumberAttribute('node_limit');
  }
  public set nodeLimit(value: number) {
    this._nodeLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLimitInput() {
    return this._nodeLimit;
  }

  // zos_cics_service_detection_uses_transaction_id - computed: false, optional: false, required: true
  private _zosCicsServiceDetectionUsesTransactionId?: boolean | cdktf.IResolvable; 
  public get zosCicsServiceDetectionUsesTransactionId() {
    return this.getBooleanAttribute('zos_cics_service_detection_uses_transaction_id');
  }
  public set zosCicsServiceDetectionUsesTransactionId(value: boolean | cdktf.IResolvable) {
    this._zosCicsServiceDetectionUsesTransactionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zosCicsServiceDetectionUsesTransactionIdInput() {
    return this._zosCicsServiceDetectionUsesTransactionId;
  }

  // zos_ims_service_detection_uses_transaction_id - computed: false, optional: false, required: true
  private _zosImsServiceDetectionUsesTransactionId?: boolean | cdktf.IResolvable; 
  public get zosImsServiceDetectionUsesTransactionId() {
    return this.getBooleanAttribute('zos_ims_service_detection_uses_transaction_id');
  }
  public set zosImsServiceDetectionUsesTransactionId(value: boolean | cdktf.IResolvable) {
    this._zosImsServiceDetectionUsesTransactionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zosImsServiceDetectionUsesTransactionIdInput() {
    return this._zosImsServiceDetectionUsesTransactionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_cics_regions: cdktf.booleanToTerraform(this._groupCicsRegions),
      group_ims_regions: cdktf.booleanToTerraform(this._groupImsRegions),
      id: cdktf.stringToTerraform(this._id),
      monitor_all_ctg_protocols: cdktf.booleanToTerraform(this._monitorAllCtgProtocols),
      monitor_all_incoming_web_requests: cdktf.booleanToTerraform(this._monitorAllIncomingWebRequests),
      node_limit: cdktf.numberToTerraform(this._nodeLimit),
      zos_cics_service_detection_uses_transaction_id: cdktf.booleanToTerraform(this._zosCicsServiceDetectionUsesTransactionId),
      zos_ims_service_detection_uses_transaction_id: cdktf.booleanToTerraform(this._zosImsServiceDetectionUsesTransactionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_cics_regions: {
        value: cdktf.booleanToHclTerraform(this._groupCicsRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_ims_regions: {
        value: cdktf.booleanToHclTerraform(this._groupImsRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_all_ctg_protocols: {
        value: cdktf.booleanToHclTerraform(this._monitorAllCtgProtocols),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor_all_incoming_web_requests: {
        value: cdktf.booleanToHclTerraform(this._monitorAllIncomingWebRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_limit: {
        value: cdktf.numberToHclTerraform(this._nodeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zos_cics_service_detection_uses_transaction_id: {
        value: cdktf.booleanToHclTerraform(this._zosCicsServiceDetectionUsesTransactionId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zos_ims_service_detection_uses_transaction_id: {
        value: cdktf.booleanToHclTerraform(this._zosImsServiceDetectionUsesTransactionId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
