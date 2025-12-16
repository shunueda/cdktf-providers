// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnBridgeRemoteMsgVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#bridge_name MsgVpnBridgeRemoteMsgVpn#bridge_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#bridge_virtual_router MsgVpnBridgeRemoteMsgVpn#bridge_virtual_router}
  */
  readonly bridgeVirtualRouter: string;
  /**
  * The Client Username the Bridge uses to login to the remote Message VPN. This per remote Message VPN value overrides the value provided for the Bridge overall.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#client_username MsgVpnBridgeRemoteMsgVpn#client_username}
  */
  readonly clientUsername?: string;
  /**
  * Enable or disable data compression for the remote Message VPN connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#compressed_data_enabled MsgVpnBridgeRemoteMsgVpn#compressed_data_enabled}
  */
  readonly compressedDataEnabled?: boolean | cdktf.IResolvable;
  /**
  * The preference given to incoming connections from remote Message VPN hosts, from 1 (highest priority) to 4 (lowest priority).
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#connect_order MsgVpnBridgeRemoteMsgVpn#connect_order}
  */
  readonly connectOrder?: number;
  /**
  * The number of outstanding guaranteed messages that can be transmitted over the remote Message VPN connection before an acknowledgment is received.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `255`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#egress_flow_window_size MsgVpnBridgeRemoteMsgVpn#egress_flow_window_size}
  */
  readonly egressFlowWindowSize?: number;
  /**
  * Enable or disable the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#enabled MsgVpnBridgeRemoteMsgVpn#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#msg_vpn_name MsgVpnBridgeRemoteMsgVpn#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The password for the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#password MsgVpnBridgeRemoteMsgVpn#password}
  */
  readonly password?: string;
  /**
  * The queue binding of the Bridge in the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#queue_binding MsgVpnBridgeRemoteMsgVpn#queue_binding}
  */
  readonly queueBinding?: string;
  /**
  * The physical interface on the local Message VPN host for connecting to the remote Message VPN. By default, an interface is chosen automatically (recommended), but if specified, `remote_msg_vpn_location` must not be a virtual router name.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#remote_msg_vpn_interface MsgVpnBridgeRemoteMsgVpn#remote_msg_vpn_interface}
  */
  readonly remoteMsgVpnInterface?: string;
  /**
  * The location of the remote Message VPN as either an FQDN with port, IP address with port, or virtual router name (starting with "v:").
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#remote_msg_vpn_location MsgVpnBridgeRemoteMsgVpn#remote_msg_vpn_location}
  */
  readonly remoteMsgVpnLocation: string;
  /**
  * The name of the remote Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#remote_msg_vpn_name MsgVpnBridgeRemoteMsgVpn#remote_msg_vpn_name}
  */
  readonly remoteMsgVpnName: string;
  /**
  * Enable or disable encryption (TLS) for the remote Message VPN connection.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Modifying this attribute while the object (or the relevant part of the object) is administratively enabled may be service impacting as enabled will be temporarily set to false to apply the change. Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#tls_enabled MsgVpnBridgeRemoteMsgVpn#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Client Profile for the unidirectional Bridge of the remote Message VPN. The Client Profile must exist in the local Message VPN, and it is used only for the TCP parameters. Note that the default client profile has a TCP maximum window size of 2 MB.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"#client-profile"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#unidirectional_client_profile MsgVpnBridgeRemoteMsgVpn#unidirectional_client_profile}
  */
  readonly unidirectionalClientProfile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn solacebroker_msg_vpn_bridge_remote_msg_vpn}
*/
export class MsgVpnBridgeRemoteMsgVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_bridge_remote_msg_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnBridgeRemoteMsgVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnBridgeRemoteMsgVpn to import
  * @param importFromId The id of the existing MsgVpnBridgeRemoteMsgVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnBridgeRemoteMsgVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_bridge_remote_msg_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/resources/msg_vpn_bridge_remote_msg_vpn solacebroker_msg_vpn_bridge_remote_msg_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnBridgeRemoteMsgVpnConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnBridgeRemoteMsgVpnConfig) {
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
    this._clientUsername = config.clientUsername;
    this._compressedDataEnabled = config.compressedDataEnabled;
    this._connectOrder = config.connectOrder;
    this._egressFlowWindowSize = config.egressFlowWindowSize;
    this._enabled = config.enabled;
    this._msgVpnName = config.msgVpnName;
    this._password = config.password;
    this._queueBinding = config.queueBinding;
    this._remoteMsgVpnInterface = config.remoteMsgVpnInterface;
    this._remoteMsgVpnLocation = config.remoteMsgVpnLocation;
    this._remoteMsgVpnName = config.remoteMsgVpnName;
    this._tlsEnabled = config.tlsEnabled;
    this._unidirectionalClientProfile = config.unidirectionalClientProfile;
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

  // client_username - computed: false, optional: true, required: false
  private _clientUsername?: string; 
  public get clientUsername() {
    return this.getStringAttribute('client_username');
  }
  public set clientUsername(value: string) {
    this._clientUsername = value;
  }
  public resetClientUsername() {
    this._clientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUsernameInput() {
    return this._clientUsername;
  }

  // compressed_data_enabled - computed: false, optional: true, required: false
  private _compressedDataEnabled?: boolean | cdktf.IResolvable; 
  public get compressedDataEnabled() {
    return this.getBooleanAttribute('compressed_data_enabled');
  }
  public set compressedDataEnabled(value: boolean | cdktf.IResolvable) {
    this._compressedDataEnabled = value;
  }
  public resetCompressedDataEnabled() {
    this._compressedDataEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedDataEnabledInput() {
    return this._compressedDataEnabled;
  }

  // connect_order - computed: false, optional: true, required: false
  private _connectOrder?: number; 
  public get connectOrder() {
    return this.getNumberAttribute('connect_order');
  }
  public set connectOrder(value: number) {
    this._connectOrder = value;
  }
  public resetConnectOrder() {
    this._connectOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectOrderInput() {
    return this._connectOrder;
  }

  // egress_flow_window_size - computed: false, optional: true, required: false
  private _egressFlowWindowSize?: number; 
  public get egressFlowWindowSize() {
    return this.getNumberAttribute('egress_flow_window_size');
  }
  public set egressFlowWindowSize(value: number) {
    this._egressFlowWindowSize = value;
  }
  public resetEgressFlowWindowSize() {
    this._egressFlowWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFlowWindowSizeInput() {
    return this._egressFlowWindowSize;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // queue_binding - computed: false, optional: true, required: false
  private _queueBinding?: string; 
  public get queueBinding() {
    return this.getStringAttribute('queue_binding');
  }
  public set queueBinding(value: string) {
    this._queueBinding = value;
  }
  public resetQueueBinding() {
    this._queueBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueBindingInput() {
    return this._queueBinding;
  }

  // remote_msg_vpn_interface - computed: false, optional: true, required: false
  private _remoteMsgVpnInterface?: string; 
  public get remoteMsgVpnInterface() {
    return this.getStringAttribute('remote_msg_vpn_interface');
  }
  public set remoteMsgVpnInterface(value: string) {
    this._remoteMsgVpnInterface = value;
  }
  public resetRemoteMsgVpnInterface() {
    this._remoteMsgVpnInterface = undefined;
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

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled;
  }

  // unidirectional_client_profile - computed: false, optional: true, required: false
  private _unidirectionalClientProfile?: string; 
  public get unidirectionalClientProfile() {
    return this.getStringAttribute('unidirectional_client_profile');
  }
  public set unidirectionalClientProfile(value: string) {
    this._unidirectionalClientProfile = value;
  }
  public resetUnidirectionalClientProfile() {
    this._unidirectionalClientProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unidirectionalClientProfileInput() {
    return this._unidirectionalClientProfile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_name: cdktf.stringToTerraform(this._bridgeName),
      bridge_virtual_router: cdktf.stringToTerraform(this._bridgeVirtualRouter),
      client_username: cdktf.stringToTerraform(this._clientUsername),
      compressed_data_enabled: cdktf.booleanToTerraform(this._compressedDataEnabled),
      connect_order: cdktf.numberToTerraform(this._connectOrder),
      egress_flow_window_size: cdktf.numberToTerraform(this._egressFlowWindowSize),
      enabled: cdktf.booleanToTerraform(this._enabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      password: cdktf.stringToTerraform(this._password),
      queue_binding: cdktf.stringToTerraform(this._queueBinding),
      remote_msg_vpn_interface: cdktf.stringToTerraform(this._remoteMsgVpnInterface),
      remote_msg_vpn_location: cdktf.stringToTerraform(this._remoteMsgVpnLocation),
      remote_msg_vpn_name: cdktf.stringToTerraform(this._remoteMsgVpnName),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
      unidirectional_client_profile: cdktf.stringToTerraform(this._unidirectionalClientProfile),
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
      client_username: {
        value: cdktf.stringToHclTerraform(this._clientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compressed_data_enabled: {
        value: cdktf.booleanToHclTerraform(this._compressedDataEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connect_order: {
        value: cdktf.numberToHclTerraform(this._connectOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      egress_flow_window_size: {
        value: cdktf.numberToHclTerraform(this._egressFlowWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
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
      queue_binding: {
        value: cdktf.stringToHclTerraform(this._queueBinding),
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
      tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._tlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unidirectional_client_profile: {
        value: cdktf.stringToHclTerraform(this._unidirectionalClientProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
