// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnBridgeRemoteMsgVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn#bridge_name DataSolacebrokerMsgVpnBridgeRemoteMsgVpn#bridge_name}
  */
  readonly bridgeName: string;
  /**
  * The virtual router of the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "primary" - The Bridge is used for the primary virtual router.
  * "backup" - The Bridge is used for the backup virtual router.
  * "auto" - The Bridge is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn#bridge_virtual_router DataSolacebrokerMsgVpnBridgeRemoteMsgVpn#bridge_virtual_router}
  */
  readonly bridgeVirtualRouter: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn#msg_vpn_name DataSolacebrokerMsgVpnBridgeRemoteMsgVpn#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The physical interface on the local Message VPN host for connecting to the remote Message VPN. By default, an interface is chosen automatically (recommended), but if specified, `remote_msg_vpn_location` must not be a virtual router name.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn#remote_msg_vpn_interface DataSolacebrokerMsgVpnBridgeRemoteMsgVpn#remote_msg_vpn_interface}
  */
  readonly remoteMsgVpnInterface: string;
  /**
  * The location of the remote Message VPN as either an FQDN with port, IP address with port, or virtual router name (starting with "v:").
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn#remote_msg_vpn_location DataSolacebrokerMsgVpnBridgeRemoteMsgVpn#remote_msg_vpn_location}
  */
  readonly remoteMsgVpnLocation: string;
  /**
  * The name of the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn#remote_msg_vpn_name DataSolacebrokerMsgVpnBridgeRemoteMsgVpn#remote_msg_vpn_name}
  */
  readonly remoteMsgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn solacebroker_msg_vpn_bridge_remote_msg_vpn}
*/
export class DataSolacebrokerMsgVpnBridgeRemoteMsgVpn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_bridge_remote_msg_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnBridgeRemoteMsgVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnBridgeRemoteMsgVpn to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnBridgeRemoteMsgVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnBridgeRemoteMsgVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_bridge_remote_msg_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_bridge_remote_msg_vpn solacebroker_msg_vpn_bridge_remote_msg_vpn} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnBridgeRemoteMsgVpnConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnBridgeRemoteMsgVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_bridge_remote_msg_vpn',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bridgeName = config.bridgeName;
    this._bridgeVirtualRouter = config.bridgeVirtualRouter;
    this._msgVpnName = config.msgVpnName;
    this._remoteMsgVpnInterface = config.remoteMsgVpnInterface;
    this._remoteMsgVpnLocation = config.remoteMsgVpnLocation;
    this._remoteMsgVpnName = config.remoteMsgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge_name - computed: false, optional: false, required: true
  private _bridgeName?: string; 
  public get bridgeName() {
    return this.getStringAttribute('bridge_name');
  }
  public set bridgeName(value: string) {
    this._bridgeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeNameInput() {
    return this._bridgeName;
  }

  // bridge_virtual_router - computed: false, optional: false, required: true
  private _bridgeVirtualRouter?: string; 
  public get bridgeVirtualRouter() {
    return this.getStringAttribute('bridge_virtual_router');
  }
  public set bridgeVirtualRouter(value: string) {
    this._bridgeVirtualRouter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeVirtualRouterInput() {
    return this._bridgeVirtualRouter;
  }

  // client_username - computed: true, optional: false, required: false
  public get clientUsername() {
    return this.getStringAttribute('client_username');
  }

  // compressed_data_enabled - computed: true, optional: false, required: false
  public get compressedDataEnabled() {
    return this.getBooleanAttribute('compressed_data_enabled');
  }

  // connect_order - computed: true, optional: false, required: false
  public get connectOrder() {
    return this.getNumberAttribute('connect_order');
  }

  // egress_flow_window_size - computed: true, optional: false, required: false
  public get egressFlowWindowSize() {
    return this.getNumberAttribute('egress_flow_window_size');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // queue_binding - computed: true, optional: false, required: false
  public get queueBinding() {
    return this.getStringAttribute('queue_binding');
  }

  // remote_msg_vpn_interface - computed: false, optional: false, required: true
  private _remoteMsgVpnInterface?: string; 
  public get remoteMsgVpnInterface() {
    return this.getStringAttribute('remote_msg_vpn_interface');
  }
  public set remoteMsgVpnInterface(value: string) {
    this._remoteMsgVpnInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMsgVpnInterfaceInput() {
    return this._remoteMsgVpnInterface;
  }

  // remote_msg_vpn_location - computed: false, optional: false, required: true
  private _remoteMsgVpnLocation?: string; 
  public get remoteMsgVpnLocation() {
    return this.getStringAttribute('remote_msg_vpn_location');
  }
  public set remoteMsgVpnLocation(value: string) {
    this._remoteMsgVpnLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMsgVpnLocationInput() {
    return this._remoteMsgVpnLocation;
  }

  // remote_msg_vpn_name - computed: false, optional: false, required: true
  private _remoteMsgVpnName?: string; 
  public get remoteMsgVpnName() {
    return this.getStringAttribute('remote_msg_vpn_name');
  }
  public set remoteMsgVpnName(value: string) {
    this._remoteMsgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMsgVpnNameInput() {
    return this._remoteMsgVpnName;
  }

  // tls_enabled - computed: true, optional: false, required: false
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }

  // unidirectional_client_profile - computed: true, optional: false, required: false
  public get unidirectionalClientProfile() {
    return this.getStringAttribute('unidirectional_client_profile');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_name: cdktf.stringToTerraform(this._bridgeName),
      bridge_virtual_router: cdktf.stringToTerraform(this._bridgeVirtualRouter),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      remote_msg_vpn_interface: cdktf.stringToTerraform(this._remoteMsgVpnInterface),
      remote_msg_vpn_location: cdktf.stringToTerraform(this._remoteMsgVpnLocation),
      remote_msg_vpn_name: cdktf.stringToTerraform(this._remoteMsgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bridge_name: {
        value: cdktf.stringToHclTerraform(this._bridgeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridge_virtual_router: {
        value: cdktf.stringToHclTerraform(this._bridgeVirtualRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_msg_vpn_interface: {
        value: cdktf.stringToHclTerraform(this._remoteMsgVpnInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_msg_vpn_location: {
        value: cdktf.stringToHclTerraform(this._remoteMsgVpnLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._remoteMsgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
