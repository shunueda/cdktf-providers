// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_dmr_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnDmrBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_dmr_bridge#msg_vpn_name MsgVpnDmrBridge#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The remote Message VPN of the DMR Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_dmr_bridge#remote_msg_vpn_name MsgVpnDmrBridge#remote_msg_vpn_name}
  */
  readonly remoteMsgVpnName?: string;
  /**
  * The name of the node at the remote end of the DMR Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_dmr_bridge#remote_node_name MsgVpnDmrBridge#remote_node_name}
  */
  readonly remoteNodeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_dmr_bridge solacebroker_msg_vpn_dmr_bridge}
*/
export class MsgVpnDmrBridge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_dmr_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnDmrBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnDmrBridge to import
  * @param importFromId The id of the existing MsgVpnDmrBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_dmr_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnDmrBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_dmr_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_dmr_bridge solacebroker_msg_vpn_dmr_bridge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnDmrBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnDmrBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_dmr_bridge',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._msgVpnName = config.msgVpnName;
    this._remoteMsgVpnName = config.remoteMsgVpnName;
    this._remoteNodeName = config.remoteNodeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // remote_msg_vpn_name - computed: false, optional: true, required: false
  private _remoteMsgVpnName?: string; 
  public get remoteMsgVpnName() {
    return this.getStringAttribute('remote_msg_vpn_name');
  }
  public set remoteMsgVpnName(value: string) {
    this._remoteMsgVpnName = value;
  }
  public resetRemoteMsgVpnName() {
    this._remoteMsgVpnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMsgVpnNameInput() {
    return this._remoteMsgVpnName;
  }

  // remote_node_name - computed: false, optional: false, required: true
  private _remoteNodeName?: string; 
  public get remoteNodeName() {
    return this.getStringAttribute('remote_node_name');
  }
  public set remoteNodeName(value: string) {
    this._remoteNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNodeNameInput() {
    return this._remoteNodeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      remote_msg_vpn_name: cdktf.stringToTerraform(this._remoteMsgVpnName),
      remote_node_name: cdktf.stringToTerraform(this._remoteNodeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
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
      remote_node_name: {
        value: cdktf.stringToHclTerraform(this._remoteNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
