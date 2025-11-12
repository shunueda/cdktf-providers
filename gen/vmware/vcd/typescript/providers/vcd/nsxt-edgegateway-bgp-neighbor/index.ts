// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayBgpNeighborConfig extends cdktf.TerraformMetaArguments {
  /**
  * A flag indicating whether BGP neighbors can receive routes with same Autonomous System (AS) (default 'false')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#allow_as_in NsxtEdgegatewayBgpNeighbor#allow_as_in}
  */
  readonly allowAsIn?: boolean | cdktf.IResolvable;
  /**
  * Number of times a heartbeat packet is missed before BFD declares that the neighbor is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#bfd_dead_multiple NsxtEdgegatewayBgpNeighbor#bfd_dead_multiple}
  */
  readonly bfdDeadMultiple?: number;
  /**
  * BFD configuration for failure detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#bfd_enabled NsxtEdgegatewayBgpNeighbor#bfd_enabled}
  */
  readonly bfdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Time interval (in milliseconds) between heartbeat packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#bfd_interval NsxtEdgegatewayBgpNeighbor#bfd_interval}
  */
  readonly bfdInterval?: number;
  /**
  * Edge gateway ID for BGP Neighbor Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#edge_gateway_id NsxtEdgegatewayBgpNeighbor#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * One of 'DISABLE', 'HELPER_ONLY', 'GRACEFUL_AND_HELPER'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#graceful_restart_mode NsxtEdgegatewayBgpNeighbor#graceful_restart_mode}
  */
  readonly gracefulRestartMode?: string;
  /**
  * Time interval (in seconds) before declaring a peer dead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#hold_down_timer NsxtEdgegatewayBgpNeighbor#hold_down_timer}
  */
  readonly holdDownTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#id NsxtEdgegatewayBgpNeighbor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional IP Prefix List ID for filtering 'IN' direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#in_filter_ip_prefix_list_id NsxtEdgegatewayBgpNeighbor#in_filter_ip_prefix_list_id}
  */
  readonly inFilterIpPrefixListId?: string;
  /**
  * BGP Neighbor IP address (IPv4 or IPv6)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#ip_address NsxtEdgegatewayBgpNeighbor#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Time interval (in seconds) between sending keep alive messages to a peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#keep_alive_timer NsxtEdgegatewayBgpNeighbor#keep_alive_timer}
  */
  readonly keepAliveTimer?: number;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#org NsxtEdgegatewayBgpNeighbor#org}
  */
  readonly org?: string;
  /**
  * An optional IP Prefix List ID for filtering 'OUT' direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#out_filter_ip_prefix_list_id NsxtEdgegatewayBgpNeighbor#out_filter_ip_prefix_list_id}
  */
  readonly outFilterIpPrefixListId?: string;
  /**
  * Neighbor password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#password NsxtEdgegatewayBgpNeighbor#password}
  */
  readonly password?: string;
  /**
  * Remote Autonomous System (AS) number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#remote_as_number NsxtEdgegatewayBgpNeighbor#remote_as_number}
  */
  readonly remoteAsNumber: string;
  /**
  * One of 'DISABLED', 'IPV4', 'IPV6'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#route_filtering NsxtEdgegatewayBgpNeighbor#route_filtering}
  */
  readonly routeFiltering?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor vcd_nsxt_edgegateway_bgp_neighbor}
*/
export class NsxtEdgegatewayBgpNeighbor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_bgp_neighbor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayBgpNeighbor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayBgpNeighbor to import
  * @param importFromId The id of the existing NsxtEdgegatewayBgpNeighbor that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayBgpNeighbor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_bgp_neighbor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_neighbor vcd_nsxt_edgegateway_bgp_neighbor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayBgpNeighborConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayBgpNeighborConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_bgp_neighbor',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAsIn = config.allowAsIn;
    this._bfdDeadMultiple = config.bfdDeadMultiple;
    this._bfdEnabled = config.bfdEnabled;
    this._bfdInterval = config.bfdInterval;
    this._edgeGatewayId = config.edgeGatewayId;
    this._gracefulRestartMode = config.gracefulRestartMode;
    this._holdDownTimer = config.holdDownTimer;
    this._id = config.id;
    this._inFilterIpPrefixListId = config.inFilterIpPrefixListId;
    this._ipAddress = config.ipAddress;
    this._keepAliveTimer = config.keepAliveTimer;
    this._org = config.org;
    this._outFilterIpPrefixListId = config.outFilterIpPrefixListId;
    this._password = config.password;
    this._remoteAsNumber = config.remoteAsNumber;
    this._routeFiltering = config.routeFiltering;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_as_in - computed: true, optional: true, required: false
  private _allowAsIn?: boolean | cdktf.IResolvable; 
  public get allowAsIn() {
    return this.getBooleanAttribute('allow_as_in');
  }
  public set allowAsIn(value: boolean | cdktf.IResolvable) {
    this._allowAsIn = value;
  }
  public resetAllowAsIn() {
    this._allowAsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAsInInput() {
    return this._allowAsIn;
  }

  // bfd_dead_multiple - computed: true, optional: true, required: false
  private _bfdDeadMultiple?: number; 
  public get bfdDeadMultiple() {
    return this.getNumberAttribute('bfd_dead_multiple');
  }
  public set bfdDeadMultiple(value: number) {
    this._bfdDeadMultiple = value;
  }
  public resetBfdDeadMultiple() {
    this._bfdDeadMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDeadMultipleInput() {
    return this._bfdDeadMultiple;
  }

  // bfd_enabled - computed: true, optional: true, required: false
  private _bfdEnabled?: boolean | cdktf.IResolvable; 
  public get bfdEnabled() {
    return this.getBooleanAttribute('bfd_enabled');
  }
  public set bfdEnabled(value: boolean | cdktf.IResolvable) {
    this._bfdEnabled = value;
  }
  public resetBfdEnabled() {
    this._bfdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdEnabledInput() {
    return this._bfdEnabled;
  }

  // bfd_interval - computed: true, optional: true, required: false
  private _bfdInterval?: number; 
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }
  public set bfdInterval(value: number) {
    this._bfdInterval = value;
  }
  public resetBfdInterval() {
    this._bfdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdIntervalInput() {
    return this._bfdInterval;
  }

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
  }

  // graceful_restart_mode - computed: true, optional: true, required: false
  private _gracefulRestartMode?: string; 
  public get gracefulRestartMode() {
    return this.getStringAttribute('graceful_restart_mode');
  }
  public set gracefulRestartMode(value: string) {
    this._gracefulRestartMode = value;
  }
  public resetGracefulRestartMode() {
    this._gracefulRestartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartModeInput() {
    return this._gracefulRestartMode;
  }

  // hold_down_timer - computed: true, optional: true, required: false
  private _holdDownTimer?: number; 
  public get holdDownTimer() {
    return this.getNumberAttribute('hold_down_timer');
  }
  public set holdDownTimer(value: number) {
    this._holdDownTimer = value;
  }
  public resetHoldDownTimer() {
    this._holdDownTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownTimerInput() {
    return this._holdDownTimer;
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

  // in_filter_ip_prefix_list_id - computed: true, optional: true, required: false
  private _inFilterIpPrefixListId?: string; 
  public get inFilterIpPrefixListId() {
    return this.getStringAttribute('in_filter_ip_prefix_list_id');
  }
  public set inFilterIpPrefixListId(value: string) {
    this._inFilterIpPrefixListId = value;
  }
  public resetInFilterIpPrefixListId() {
    this._inFilterIpPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inFilterIpPrefixListIdInput() {
    return this._inFilterIpPrefixListId;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // keep_alive_timer - computed: true, optional: true, required: false
  private _keepAliveTimer?: number; 
  public get keepAliveTimer() {
    return this.getNumberAttribute('keep_alive_timer');
  }
  public set keepAliveTimer(value: number) {
    this._keepAliveTimer = value;
  }
  public resetKeepAliveTimer() {
    this._keepAliveTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimerInput() {
    return this._keepAliveTimer;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // out_filter_ip_prefix_list_id - computed: true, optional: true, required: false
  private _outFilterIpPrefixListId?: string; 
  public get outFilterIpPrefixListId() {
    return this.getStringAttribute('out_filter_ip_prefix_list_id');
  }
  public set outFilterIpPrefixListId(value: string) {
    this._outFilterIpPrefixListId = value;
  }
  public resetOutFilterIpPrefixListId() {
    this._outFilterIpPrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outFilterIpPrefixListIdInput() {
    return this._outFilterIpPrefixListId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // remote_as_number - computed: false, optional: false, required: true
  private _remoteAsNumber?: string; 
  public get remoteAsNumber() {
    return this.getStringAttribute('remote_as_number');
  }
  public set remoteAsNumber(value: string) {
    this._remoteAsNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsNumberInput() {
    return this._remoteAsNumber;
  }

  // route_filtering - computed: true, optional: true, required: false
  private _routeFiltering?: string; 
  public get routeFiltering() {
    return this.getStringAttribute('route_filtering');
  }
  public set routeFiltering(value: string) {
    this._routeFiltering = value;
  }
  public resetRouteFiltering() {
    this._routeFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilteringInput() {
    return this._routeFiltering;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_as_in: cdktf.booleanToTerraform(this._allowAsIn),
      bfd_dead_multiple: cdktf.numberToTerraform(this._bfdDeadMultiple),
      bfd_enabled: cdktf.booleanToTerraform(this._bfdEnabled),
      bfd_interval: cdktf.numberToTerraform(this._bfdInterval),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      graceful_restart_mode: cdktf.stringToTerraform(this._gracefulRestartMode),
      hold_down_timer: cdktf.numberToTerraform(this._holdDownTimer),
      id: cdktf.stringToTerraform(this._id),
      in_filter_ip_prefix_list_id: cdktf.stringToTerraform(this._inFilterIpPrefixListId),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      keep_alive_timer: cdktf.numberToTerraform(this._keepAliveTimer),
      org: cdktf.stringToTerraform(this._org),
      out_filter_ip_prefix_list_id: cdktf.stringToTerraform(this._outFilterIpPrefixListId),
      password: cdktf.stringToTerraform(this._password),
      remote_as_number: cdktf.stringToTerraform(this._remoteAsNumber),
      route_filtering: cdktf.stringToTerraform(this._routeFiltering),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_as_in: {
        value: cdktf.booleanToHclTerraform(this._allowAsIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_dead_multiple: {
        value: cdktf.numberToHclTerraform(this._bfdDeadMultiple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_enabled: {
        value: cdktf.booleanToHclTerraform(this._bfdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_interval: {
        value: cdktf.numberToHclTerraform(this._bfdInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_mode: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_down_timer: {
        value: cdktf.numberToHclTerraform(this._holdDownTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      in_filter_ip_prefix_list_id: {
        value: cdktf.stringToHclTerraform(this._inFilterIpPrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keep_alive_timer: {
        value: cdktf.numberToHclTerraform(this._keepAliveTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_filter_ip_prefix_list_id: {
        value: cdktf.stringToHclTerraform(this._outFilterIpPrefixListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_as_number: {
        value: cdktf.stringToHclTerraform(this._remoteAsNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_filtering: {
        value: cdktf.stringToHclTerraform(this._routeFiltering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
