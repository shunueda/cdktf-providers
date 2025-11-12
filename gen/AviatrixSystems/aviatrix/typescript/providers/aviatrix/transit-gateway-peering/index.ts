// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitGatewayPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable ActiveMesh, no crossing tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#disable_activemesh TransitGatewayPeering#disable_activemesh}
  */
  readonly disableActivemesh?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Advanced option. Enable Insane Mode Encryption over Internet. Transit gateways must be in Insane Mode. Currently, only inter-cloud connections between AWS and Azure are supported. Required with valid `tunnel_count`. Conflicts with `enable_peering_over_private_network` and `enable_single_tunnel_mode`. Type: Boolean. Default: false. Available as of provider version R2.19+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#enable_insane_mode_encryption_over_internet TransitGatewayPeering#enable_insane_mode_encryption_over_internet}
  */
  readonly enableInsaneModeEncryptionOverInternet?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the maximum amount of HPE tunnels will be created. Only valid when the two transit gateways are each launched in Insane Mode and in the same cloud type. Available as of provider version R2.22.2+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#enable_max_performance TransitGatewayPeering#enable_max_performance}
  */
  readonly enableMaxPerformance?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Advanced option. Enable peering over private network. Only appears and applies to when the two Multi-cloud Transit Gateways are each launched in Insane Mode and in a different cloud type. Conflicts with `enable_insane_mode_encryption_over_internet` and `tunnel_count`. Type: Boolean. Default: false. Available in provider version R2.17.1+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#enable_peering_over_private_network TransitGatewayPeering#enable_peering_over_private_network}
  */
  readonly enablePeeringOverPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * (Optional) Advanced option. Enable peering with Single-Tunnel mode. Only appears and applies to when the two Multi-cloud Transit Gateways are each launched in Insane Mode and in a different cloud type. Required with `enable_peering_over_private_network`. Conflicts with `enable_insane_mode_encryption_over_internet` and `tunnel_count`. Type: Boolean. Default: false. Available as of provider version R2.18+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#enable_single_tunnel_mode TransitGatewayPeering#enable_single_tunnel_mode}
  */
  readonly enableSingleTunnelMode?: boolean | cdktf.IResolvable;
  /**
  * List of excluded network CIDRs for the first transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#gateway1_excluded_network_cidrs TransitGatewayPeering#gateway1_excluded_network_cidrs}
  */
  readonly gateway1ExcludedNetworkCidrs?: string[];
  /**
  * List of excluded TGW connections for the first transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#gateway1_excluded_tgw_connections TransitGatewayPeering#gateway1_excluded_tgw_connections}
  */
  readonly gateway1ExcludedTgwConnections?: string[];
  /**
  * Gateway 1 logical interface names for edge gateways where the peering originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#gateway1_logical_ifnames TransitGatewayPeering#gateway1_logical_ifnames}
  */
  readonly gateway1LogicalIfnames?: string[];
  /**
  * List of excluded network CIDRs for the second transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#gateway2_excluded_network_cidrs TransitGatewayPeering#gateway2_excluded_network_cidrs}
  */
  readonly gateway2ExcludedNetworkCidrs?: string[];
  /**
  * List of excluded TGW connections for the second transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#gateway2_excluded_tgw_connections TransitGatewayPeering#gateway2_excluded_tgw_connections}
  */
  readonly gateway2ExcludedTgwConnections?: string[];
  /**
  * Gateway 2 logical interface names for edge gateways where the peering terminates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#gateway2_logical_ifnames TransitGatewayPeering#gateway2_logical_ifnames}
  */
  readonly gateway2LogicalIfnames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#id TransitGatewayPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable HPE mode for peering with Edge Transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#insane_mode TransitGatewayPeering#insane_mode}
  */
  readonly insaneMode?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo frame for over private peering with Edge Transit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#jumbo_frame TransitGatewayPeering#jumbo_frame}
  */
  readonly jumboFrame?: boolean | cdktf.IResolvable;
  /**
  * AS Path Prepend customized by specifying AS PATH for a BGP connection. Applies on transit_gateway_name1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#prepend_as_path1 TransitGatewayPeering#prepend_as_path1}
  */
  readonly prependAsPath1?: string[];
  /**
  * AS Path Prepend customized by specifying AS PATH for a BGP connection. Applies on transit_gateway_name2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#prepend_as_path2 TransitGatewayPeering#prepend_as_path2}
  */
  readonly prependAsPath2?: string[];
  /**
  * The first transit gateway name to make a peer pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#transit_gateway_name1 TransitGatewayPeering#transit_gateway_name1}
  */
  readonly transitGatewayName1: string;
  /**
  * The second transit gateway name to make a peer pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#transit_gateway_name2 TransitGatewayPeering#transit_gateway_name2}
  */
  readonly transitGatewayName2: string;
  /**
  * (Optional) Advanced option. Number of public tunnels. Required with `enable_insane_mode_encryption_over_internet`. Conflicts with `enable_peering_over_private_network` and `enable_single_tunnel_mode`. Type: Integer. Valid Range: 2-20. Available as of provider version R2.19+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#tunnel_count TransitGatewayPeering#tunnel_count}
  */
  readonly tunnelCount?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering aviatrix_transit_gateway_peering}
*/
export class TransitGatewayPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_transit_gateway_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitGatewayPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitGatewayPeering to import
  * @param importFromId The id of the existing TransitGatewayPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitGatewayPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_transit_gateway_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_gateway_peering aviatrix_transit_gateway_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitGatewayPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: TransitGatewayPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_transit_gateway_peering',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
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
    this._enableInsaneModeEncryptionOverInternet = config.enableInsaneModeEncryptionOverInternet;
    this._enableMaxPerformance = config.enableMaxPerformance;
    this._enablePeeringOverPrivateNetwork = config.enablePeeringOverPrivateNetwork;
    this._enableSingleTunnelMode = config.enableSingleTunnelMode;
    this._gateway1ExcludedNetworkCidrs = config.gateway1ExcludedNetworkCidrs;
    this._gateway1ExcludedTgwConnections = config.gateway1ExcludedTgwConnections;
    this._gateway1LogicalIfnames = config.gateway1LogicalIfnames;
    this._gateway2ExcludedNetworkCidrs = config.gateway2ExcludedNetworkCidrs;
    this._gateway2ExcludedTgwConnections = config.gateway2ExcludedTgwConnections;
    this._gateway2LogicalIfnames = config.gateway2LogicalIfnames;
    this._id = config.id;
    this._insaneMode = config.insaneMode;
    this._jumboFrame = config.jumboFrame;
    this._prependAsPath1 = config.prependAsPath1;
    this._prependAsPath2 = config.prependAsPath2;
    this._transitGatewayName1 = config.transitGatewayName1;
    this._transitGatewayName2 = config.transitGatewayName2;
    this._tunnelCount = config.tunnelCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enable_insane_mode_encryption_over_internet - computed: false, optional: true, required: false
  private _enableInsaneModeEncryptionOverInternet?: boolean | cdktf.IResolvable; 
  public get enableInsaneModeEncryptionOverInternet() {
    return this.getBooleanAttribute('enable_insane_mode_encryption_over_internet');
  }
  public set enableInsaneModeEncryptionOverInternet(value: boolean | cdktf.IResolvable) {
    this._enableInsaneModeEncryptionOverInternet = value;
  }
  public resetEnableInsaneModeEncryptionOverInternet() {
    this._enableInsaneModeEncryptionOverInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInsaneModeEncryptionOverInternetInput() {
    return this._enableInsaneModeEncryptionOverInternet;
  }

  // enable_max_performance - computed: false, optional: true, required: false
  private _enableMaxPerformance?: boolean | cdktf.IResolvable; 
  public get enableMaxPerformance() {
    return this.getBooleanAttribute('enable_max_performance');
  }
  public set enableMaxPerformance(value: boolean | cdktf.IResolvable) {
    this._enableMaxPerformance = value;
  }
  public resetEnableMaxPerformance() {
    this._enableMaxPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMaxPerformanceInput() {
    return this._enableMaxPerformance;
  }

  // enable_peering_over_private_network - computed: false, optional: true, required: false
  private _enablePeeringOverPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get enablePeeringOverPrivateNetwork() {
    return this.getBooleanAttribute('enable_peering_over_private_network');
  }
  public set enablePeeringOverPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._enablePeeringOverPrivateNetwork = value;
  }
  public resetEnablePeeringOverPrivateNetwork() {
    this._enablePeeringOverPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePeeringOverPrivateNetworkInput() {
    return this._enablePeeringOverPrivateNetwork;
  }

  // enable_single_tunnel_mode - computed: false, optional: true, required: false
  private _enableSingleTunnelMode?: boolean | cdktf.IResolvable; 
  public get enableSingleTunnelMode() {
    return this.getBooleanAttribute('enable_single_tunnel_mode');
  }
  public set enableSingleTunnelMode(value: boolean | cdktf.IResolvable) {
    this._enableSingleTunnelMode = value;
  }
  public resetEnableSingleTunnelMode() {
    this._enableSingleTunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleTunnelModeInput() {
    return this._enableSingleTunnelMode;
  }

  // gateway1_excluded_network_cidrs - computed: false, optional: true, required: false
  private _gateway1ExcludedNetworkCidrs?: string[]; 
  public get gateway1ExcludedNetworkCidrs() {
    return this.getListAttribute('gateway1_excluded_network_cidrs');
  }
  public set gateway1ExcludedNetworkCidrs(value: string[]) {
    this._gateway1ExcludedNetworkCidrs = value;
  }
  public resetGateway1ExcludedNetworkCidrs() {
    this._gateway1ExcludedNetworkCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway1ExcludedNetworkCidrsInput() {
    return this._gateway1ExcludedNetworkCidrs;
  }

  // gateway1_excluded_tgw_connections - computed: false, optional: true, required: false
  private _gateway1ExcludedTgwConnections?: string[]; 
  public get gateway1ExcludedTgwConnections() {
    return this.getListAttribute('gateway1_excluded_tgw_connections');
  }
  public set gateway1ExcludedTgwConnections(value: string[]) {
    this._gateway1ExcludedTgwConnections = value;
  }
  public resetGateway1ExcludedTgwConnections() {
    this._gateway1ExcludedTgwConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway1ExcludedTgwConnectionsInput() {
    return this._gateway1ExcludedTgwConnections;
  }

  // gateway1_logical_ifnames - computed: false, optional: true, required: false
  private _gateway1LogicalIfnames?: string[]; 
  public get gateway1LogicalIfnames() {
    return this.getListAttribute('gateway1_logical_ifnames');
  }
  public set gateway1LogicalIfnames(value: string[]) {
    this._gateway1LogicalIfnames = value;
  }
  public resetGateway1LogicalIfnames() {
    this._gateway1LogicalIfnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway1LogicalIfnamesInput() {
    return this._gateway1LogicalIfnames;
  }

  // gateway2_excluded_network_cidrs - computed: false, optional: true, required: false
  private _gateway2ExcludedNetworkCidrs?: string[]; 
  public get gateway2ExcludedNetworkCidrs() {
    return this.getListAttribute('gateway2_excluded_network_cidrs');
  }
  public set gateway2ExcludedNetworkCidrs(value: string[]) {
    this._gateway2ExcludedNetworkCidrs = value;
  }
  public resetGateway2ExcludedNetworkCidrs() {
    this._gateway2ExcludedNetworkCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway2ExcludedNetworkCidrsInput() {
    return this._gateway2ExcludedNetworkCidrs;
  }

  // gateway2_excluded_tgw_connections - computed: false, optional: true, required: false
  private _gateway2ExcludedTgwConnections?: string[]; 
  public get gateway2ExcludedTgwConnections() {
    return this.getListAttribute('gateway2_excluded_tgw_connections');
  }
  public set gateway2ExcludedTgwConnections(value: string[]) {
    this._gateway2ExcludedTgwConnections = value;
  }
  public resetGateway2ExcludedTgwConnections() {
    this._gateway2ExcludedTgwConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway2ExcludedTgwConnectionsInput() {
    return this._gateway2ExcludedTgwConnections;
  }

  // gateway2_logical_ifnames - computed: false, optional: true, required: false
  private _gateway2LogicalIfnames?: string[]; 
  public get gateway2LogicalIfnames() {
    return this.getListAttribute('gateway2_logical_ifnames');
  }
  public set gateway2LogicalIfnames(value: string[]) {
    this._gateway2LogicalIfnames = value;
  }
  public resetGateway2LogicalIfnames() {
    this._gateway2LogicalIfnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway2LogicalIfnamesInput() {
    return this._gateway2LogicalIfnames;
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

  // insane_mode - computed: false, optional: true, required: false
  private _insaneMode?: boolean | cdktf.IResolvable; 
  public get insaneMode() {
    return this.getBooleanAttribute('insane_mode');
  }
  public set insaneMode(value: boolean | cdktf.IResolvable) {
    this._insaneMode = value;
  }
  public resetInsaneMode() {
    this._insaneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insaneModeInput() {
    return this._insaneMode;
  }

  // jumbo_frame - computed: false, optional: true, required: false
  private _jumboFrame?: boolean | cdktf.IResolvable; 
  public get jumboFrame() {
    return this.getBooleanAttribute('jumbo_frame');
  }
  public set jumboFrame(value: boolean | cdktf.IResolvable) {
    this._jumboFrame = value;
  }
  public resetJumboFrame() {
    this._jumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFrameInput() {
    return this._jumboFrame;
  }

  // prepend_as_path1 - computed: false, optional: true, required: false
  private _prependAsPath1?: string[]; 
  public get prependAsPath1() {
    return this.getListAttribute('prepend_as_path1');
  }
  public set prependAsPath1(value: string[]) {
    this._prependAsPath1 = value;
  }
  public resetPrependAsPath1() {
    this._prependAsPath1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPath1Input() {
    return this._prependAsPath1;
  }

  // prepend_as_path2 - computed: false, optional: true, required: false
  private _prependAsPath2?: string[]; 
  public get prependAsPath2() {
    return this.getListAttribute('prepend_as_path2');
  }
  public set prependAsPath2(value: string[]) {
    this._prependAsPath2 = value;
  }
  public resetPrependAsPath2() {
    this._prependAsPath2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPath2Input() {
    return this._prependAsPath2;
  }

  // transit_gateway_name1 - computed: false, optional: false, required: true
  private _transitGatewayName1?: string; 
  public get transitGatewayName1() {
    return this.getStringAttribute('transit_gateway_name1');
  }
  public set transitGatewayName1(value: string) {
    this._transitGatewayName1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayName1Input() {
    return this._transitGatewayName1;
  }

  // transit_gateway_name2 - computed: false, optional: false, required: true
  private _transitGatewayName2?: string; 
  public get transitGatewayName2() {
    return this.getStringAttribute('transit_gateway_name2');
  }
  public set transitGatewayName2(value: string) {
    this._transitGatewayName2 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayName2Input() {
    return this._transitGatewayName2;
  }

  // tunnel_count - computed: false, optional: true, required: false
  private _tunnelCount?: number; 
  public get tunnelCount() {
    return this.getNumberAttribute('tunnel_count');
  }
  public set tunnelCount(value: number) {
    this._tunnelCount = value;
  }
  public resetTunnelCount() {
    this._tunnelCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCountInput() {
    return this._tunnelCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_activemesh: cdktf.booleanToTerraform(this._disableActivemesh),
      enable_insane_mode_encryption_over_internet: cdktf.booleanToTerraform(this._enableInsaneModeEncryptionOverInternet),
      enable_max_performance: cdktf.booleanToTerraform(this._enableMaxPerformance),
      enable_peering_over_private_network: cdktf.booleanToTerraform(this._enablePeeringOverPrivateNetwork),
      enable_single_tunnel_mode: cdktf.booleanToTerraform(this._enableSingleTunnelMode),
      gateway1_excluded_network_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateway1ExcludedNetworkCidrs),
      gateway1_excluded_tgw_connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateway1ExcludedTgwConnections),
      gateway1_logical_ifnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateway1LogicalIfnames),
      gateway2_excluded_network_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateway2ExcludedNetworkCidrs),
      gateway2_excluded_tgw_connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateway2ExcludedTgwConnections),
      gateway2_logical_ifnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateway2LogicalIfnames),
      id: cdktf.stringToTerraform(this._id),
      insane_mode: cdktf.booleanToTerraform(this._insaneMode),
      jumbo_frame: cdktf.booleanToTerraform(this._jumboFrame),
      prepend_as_path1: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath1),
      prepend_as_path2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath2),
      transit_gateway_name1: cdktf.stringToTerraform(this._transitGatewayName1),
      transit_gateway_name2: cdktf.stringToTerraform(this._transitGatewayName2),
      tunnel_count: cdktf.numberToTerraform(this._tunnelCount),
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
      enable_insane_mode_encryption_over_internet: {
        value: cdktf.booleanToHclTerraform(this._enableInsaneModeEncryptionOverInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_max_performance: {
        value: cdktf.booleanToHclTerraform(this._enableMaxPerformance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_peering_over_private_network: {
        value: cdktf.booleanToHclTerraform(this._enablePeeringOverPrivateNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_single_tunnel_mode: {
        value: cdktf.booleanToHclTerraform(this._enableSingleTunnelMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway1_excluded_network_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateway1ExcludedNetworkCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gateway1_excluded_tgw_connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateway1ExcludedTgwConnections),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gateway1_logical_ifnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateway1LogicalIfnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gateway2_excluded_network_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateway2ExcludedNetworkCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gateway2_excluded_tgw_connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateway2ExcludedTgwConnections),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      gateway2_logical_ifnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateway2LogicalIfnames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insane_mode: {
        value: cdktf.booleanToHclTerraform(this._insaneMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._jumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prepend_as_path1: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath1),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prepend_as_path2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath2),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transit_gateway_name1: {
        value: cdktf.stringToHclTerraform(this._transitGatewayName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_gateway_name2: {
        value: cdktf.stringToHclTerraform(this._transitGatewayName2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_count: {
        value: cdktf.numberToHclTerraform(this._tunnelCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
