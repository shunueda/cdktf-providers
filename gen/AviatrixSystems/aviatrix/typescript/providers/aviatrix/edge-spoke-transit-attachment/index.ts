// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeSpokeTransitAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable ActiveMesh, no crossing tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#disable_activemesh EdgeSpokeTransitAttachment#disable_activemesh}
  */
  readonly disableActivemesh?: boolean | cdktf.IResolvable;
  /**
  * Set of Edge WAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#edge_wan_interfaces EdgeSpokeTransitAttachment#edge_wan_interfaces}
  */
  readonly edgeWanInterfaces?: string[];
  /**
  * Enable firenet for edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#enable_firenet_for_edge EdgeSpokeTransitAttachment#enable_firenet_for_edge}
  */
  readonly enableFirenetForEdge?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#enable_insane_mode EdgeSpokeTransitAttachment#enable_insane_mode}
  */
  readonly enableInsaneMode?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#enable_jumbo_frame EdgeSpokeTransitAttachment#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Enable over private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#enable_over_private_network EdgeSpokeTransitAttachment#enable_over_private_network}
  */
  readonly enableOverPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#id EdgeSpokeTransitAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Insane mode tunnel number. Valid range for HPE over private network: 0-49. Valid range for HPE over internet: 2-20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#insane_mode_tunnel_number EdgeSpokeTransitAttachment#insane_mode_tunnel_number}
  */
  readonly insaneModeTunnelNumber?: number;
  /**
  * Number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#number_of_retries EdgeSpokeTransitAttachment#number_of_retries}
  */
  readonly numberOfRetries?: number;
  /**
  * Retry interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#retry_interval EdgeSpokeTransitAttachment#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Spoke gateway logical interface names for edge gateways, where the peering originates. Required for Megaport cloud type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#spoke_gateway_logical_ifnames EdgeSpokeTransitAttachment#spoke_gateway_logical_ifnames}
  */
  readonly spokeGatewayLogicalIfnames?: string[];
  /**
  * Name of the Edge as a Spoke to attach to the transit network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#spoke_gw_name EdgeSpokeTransitAttachment#spoke_gw_name}
  */
  readonly spokeGwName: string;
  /**
  * AS Path Prepend customized by specifying AS PATH for a BGP connection. Applies on Edge as a Spoke.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#spoke_prepend_as_path EdgeSpokeTransitAttachment#spoke_prepend_as_path}
  */
  readonly spokePrependAsPath?: string[];
  /**
  * Transit gateway logical interface names for edge gateways, where the peering terminates. Required for all edge gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#transit_gateway_logical_ifnames EdgeSpokeTransitAttachment#transit_gateway_logical_ifnames}
  */
  readonly transitGatewayLogicalIfnames?: string[];
  /**
  * Name of the transit gateway to attach the Edge as a Spoke to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#transit_gw_name EdgeSpokeTransitAttachment#transit_gw_name}
  */
  readonly transitGwName: string;
  /**
  * AS Path Prepend customized by specifying AS PATH for a BGP connection. Applies on transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#transit_prepend_as_path EdgeSpokeTransitAttachment#transit_prepend_as_path}
  */
  readonly transitPrependAsPath?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment aviatrix_edge_spoke_transit_attachment}
*/
export class EdgeSpokeTransitAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_spoke_transit_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeSpokeTransitAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeSpokeTransitAttachment to import
  * @param importFromId The id of the existing EdgeSpokeTransitAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeSpokeTransitAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_spoke_transit_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/edge_spoke_transit_attachment aviatrix_edge_spoke_transit_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeSpokeTransitAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeSpokeTransitAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_spoke_transit_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableActivemesh = config.disableActivemesh;
    this._edgeWanInterfaces = config.edgeWanInterfaces;
    this._enableFirenetForEdge = config.enableFirenetForEdge;
    this._enableInsaneMode = config.enableInsaneMode;
    this._enableJumboFrame = config.enableJumboFrame;
    this._enableOverPrivateNetwork = config.enableOverPrivateNetwork;
    this._id = config.id;
    this._insaneModeTunnelNumber = config.insaneModeTunnelNumber;
    this._numberOfRetries = config.numberOfRetries;
    this._retryInterval = config.retryInterval;
    this._spokeGatewayLogicalIfnames = config.spokeGatewayLogicalIfnames;
    this._spokeGwName = config.spokeGwName;
    this._spokePrependAsPath = config.spokePrependAsPath;
    this._transitGatewayLogicalIfnames = config.transitGatewayLogicalIfnames;
    this._transitGwName = config.transitGwName;
    this._transitPrependAsPath = config.transitPrependAsPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_edge_wan_interfaces - computed: true, optional: false, required: false
  public get defaultEdgeWanInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('default_edge_wan_interfaces'));
  }

  // disable_activemesh - computed: false, optional: true, required: false
  private _disableActivemesh?: boolean | cdktf.IResolvable; 
  public get disableActivemesh() {
    return this.getBooleanAttribute('disable_activemesh');
  }
  public set disableActivemesh(value: boolean | cdktf.IResolvable) {
    this._disableActivemesh = value;
  }
  public resetDisableActivemesh() {
    this._disableActivemesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableActivemeshInput() {
    return this._disableActivemesh;
  }

  // edge_wan_interfaces - computed: false, optional: true, required: false
  private _edgeWanInterfaces?: string[]; 
  public get edgeWanInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('edge_wan_interfaces'));
  }
  public set edgeWanInterfaces(value: string[]) {
    this._edgeWanInterfaces = value;
  }
  public resetEdgeWanInterfaces() {
    this._edgeWanInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeWanInterfacesInput() {
    return this._edgeWanInterfaces;
  }

  // enable_firenet_for_edge - computed: false, optional: true, required: false
  private _enableFirenetForEdge?: boolean | cdktf.IResolvable; 
  public get enableFirenetForEdge() {
    return this.getBooleanAttribute('enable_firenet_for_edge');
  }
  public set enableFirenetForEdge(value: boolean | cdktf.IResolvable) {
    this._enableFirenetForEdge = value;
  }
  public resetEnableFirenetForEdge() {
    this._enableFirenetForEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFirenetForEdgeInput() {
    return this._enableFirenetForEdge;
  }

  // enable_insane_mode - computed: false, optional: true, required: false
  private _enableInsaneMode?: boolean | cdktf.IResolvable; 
  public get enableInsaneMode() {
    return this.getBooleanAttribute('enable_insane_mode');
  }
  public set enableInsaneMode(value: boolean | cdktf.IResolvable) {
    this._enableInsaneMode = value;
  }
  public resetEnableInsaneMode() {
    this._enableInsaneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInsaneModeInput() {
    return this._enableInsaneMode;
  }

  // enable_jumbo_frame - computed: false, optional: true, required: false
  private _enableJumboFrame?: boolean | cdktf.IResolvable; 
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }
  public set enableJumboFrame(value: boolean | cdktf.IResolvable) {
    this._enableJumboFrame = value;
  }
  public resetEnableJumboFrame() {
    this._enableJumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJumboFrameInput() {
    return this._enableJumboFrame;
  }

  // enable_over_private_network - computed: false, optional: true, required: false
  private _enableOverPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get enableOverPrivateNetwork() {
    return this.getBooleanAttribute('enable_over_private_network');
  }
  public set enableOverPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._enableOverPrivateNetwork = value;
  }
  public resetEnableOverPrivateNetwork() {
    this._enableOverPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOverPrivateNetworkInput() {
    return this._enableOverPrivateNetwork;
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

  // insane_mode_tunnel_number - computed: false, optional: true, required: false
  private _insaneModeTunnelNumber?: number; 
  public get insaneModeTunnelNumber() {
    return this.getNumberAttribute('insane_mode_tunnel_number');
  }
  public set insaneModeTunnelNumber(value: number) {
    this._insaneModeTunnelNumber = value;
  }
  public resetInsaneModeTunnelNumber() {
    this._insaneModeTunnelNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insaneModeTunnelNumberInput() {
    return this._insaneModeTunnelNumber;
  }

  // number_of_retries - computed: false, optional: true, required: false
  private _numberOfRetries?: number; 
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }
  public set numberOfRetries(value: number) {
    this._numberOfRetries = value;
  }
  public resetNumberOfRetries() {
    this._numberOfRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRetriesInput() {
    return this._numberOfRetries;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // spoke_gateway_logical_ifnames - computed: false, optional: true, required: false
  private _spokeGatewayLogicalIfnames?: string[]; 
  public get spokeGatewayLogicalIfnames() {
    return this.getListAttribute('spoke_gateway_logical_ifnames');
  }
  public set spokeGatewayLogicalIfnames(value: string[]) {
    this._spokeGatewayLogicalIfnames = value;
  }
  public resetSpokeGatewayLogicalIfnames() {
    this._spokeGatewayLogicalIfnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeGatewayLogicalIfnamesInput() {
    return this._spokeGatewayLogicalIfnames;
  }

  // spoke_gw_name - computed: false, optional: false, required: true
  private _spokeGwName?: string; 
  public get spokeGwName() {
    return this.getStringAttribute('spoke_gw_name');
  }
  public set spokeGwName(value: string) {
    this._spokeGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeGwNameInput() {
    return this._spokeGwName;
  }

  // spoke_prepend_as_path - computed: false, optional: true, required: false
  private _spokePrependAsPath?: string[]; 
  public get spokePrependAsPath() {
    return this.getListAttribute('spoke_prepend_as_path');
  }
  public set spokePrependAsPath(value: string[]) {
    this._spokePrependAsPath = value;
  }
  public resetSpokePrependAsPath() {
    this._spokePrependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokePrependAsPathInput() {
    return this._spokePrependAsPath;
  }

  // transit_gateway_logical_ifnames - computed: false, optional: true, required: false
  private _transitGatewayLogicalIfnames?: string[]; 
  public get transitGatewayLogicalIfnames() {
    return this.getListAttribute('transit_gateway_logical_ifnames');
  }
  public set transitGatewayLogicalIfnames(value: string[]) {
    this._transitGatewayLogicalIfnames = value;
  }
  public resetTransitGatewayLogicalIfnames() {
    this._transitGatewayLogicalIfnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayLogicalIfnamesInput() {
    return this._transitGatewayLogicalIfnames;
  }

  // transit_gw_name - computed: false, optional: false, required: true
  private _transitGwName?: string; 
  public get transitGwName() {
    return this.getStringAttribute('transit_gw_name');
  }
  public set transitGwName(value: string) {
    this._transitGwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGwNameInput() {
    return this._transitGwName;
  }

  // transit_prepend_as_path - computed: false, optional: true, required: false
  private _transitPrependAsPath?: string[]; 
  public get transitPrependAsPath() {
    return this.getListAttribute('transit_prepend_as_path');
  }
  public set transitPrependAsPath(value: string[]) {
    this._transitPrependAsPath = value;
  }
  public resetTransitPrependAsPath() {
    this._transitPrependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitPrependAsPathInput() {
    return this._transitPrependAsPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_activemesh: cdktf.booleanToTerraform(this._disableActivemesh),
      edge_wan_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._edgeWanInterfaces),
      enable_firenet_for_edge: cdktf.booleanToTerraform(this._enableFirenetForEdge),
      enable_insane_mode: cdktf.booleanToTerraform(this._enableInsaneMode),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      enable_over_private_network: cdktf.booleanToTerraform(this._enableOverPrivateNetwork),
      id: cdktf.stringToTerraform(this._id),
      insane_mode_tunnel_number: cdktf.numberToTerraform(this._insaneModeTunnelNumber),
      number_of_retries: cdktf.numberToTerraform(this._numberOfRetries),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      spoke_gateway_logical_ifnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spokeGatewayLogicalIfnames),
      spoke_gw_name: cdktf.stringToTerraform(this._spokeGwName),
      spoke_prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spokePrependAsPath),
      transit_gateway_logical_ifnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitGatewayLogicalIfnames),
      transit_gw_name: cdktf.stringToTerraform(this._transitGwName),
      transit_prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transitPrependAsPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_activemesh: {
        value: cdktf.booleanToHclTerraform(this._disableActivemesh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edge_wan_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._edgeWanInterfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_firenet_for_edge: {
        value: cdktf.booleanToHclTerraform(this._enableFirenetForEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_insane_mode: {
        value: cdktf.booleanToHclTerraform(this._enableInsaneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._enableJumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_over_private_network: {
        value: cdktf.booleanToHclTerraform(this._enableOverPrivateNetwork),
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
      insane_mode_tunnel_number: {
        value: cdktf.numberToHclTerraform(this._insaneModeTunnelNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_of_retries: {
        value: cdktf.numberToHclTerraform(this._numberOfRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spoke_gateway_logical_ifnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spokeGatewayLogicalIfnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      spoke_gw_name: {
        value: cdktf.stringToHclTerraform(this._spokeGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spoke_prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spokePrependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_gateway_logical_ifnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitGatewayLogicalIfnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_gw_name: {
        value: cdktf.stringToHclTerraform(this._transitGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transitPrependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
