// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_bridge#bridge_name DataSolacebrokerMsgVpnBridge#bridge_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_bridge#bridge_virtual_router DataSolacebrokerMsgVpnBridge#bridge_virtual_router}
  */
  readonly bridgeVirtualRouter: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_bridge#msg_vpn_name DataSolacebrokerMsgVpnBridge#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_bridge solacebroker_msg_vpn_bridge}
*/
export class DataSolacebrokerMsgVpnBridge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnBridge to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_bridge solacebroker_msg_vpn_bridge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_bridge',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0'
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
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

  // remote_authentication_basic_client_username - computed: true, optional: false, required: false
  public get remoteAuthenticationBasicClientUsername() {
    return this.getStringAttribute('remote_authentication_basic_client_username');
  }

  // remote_authentication_scheme - computed: true, optional: false, required: false
  public get remoteAuthenticationScheme() {
    return this.getStringAttribute('remote_authentication_scheme');
  }

  // remote_connection_retry_count - computed: true, optional: false, required: false
  public get remoteConnectionRetryCount() {
    return this.getNumberAttribute('remote_connection_retry_count');
  }

  // remote_connection_retry_delay - computed: true, optional: false, required: false
  public get remoteConnectionRetryDelay() {
    return this.getNumberAttribute('remote_connection_retry_delay');
  }

  // remote_deliver_to_one_priority - computed: true, optional: false, required: false
  public get remoteDeliverToOnePriority() {
    return this.getStringAttribute('remote_deliver_to_one_priority');
  }

  // tls_cipher_suite_list - computed: true, optional: false, required: false
  public get tlsCipherSuiteList() {
    return this.getStringAttribute('tls_cipher_suite_list');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_name: cdktf.stringToTerraform(this._bridgeName),
      bridge_virtual_router: cdktf.stringToTerraform(this._bridgeVirtualRouter),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
