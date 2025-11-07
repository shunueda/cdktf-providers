// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_dmr_bridge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnDmrBridgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_dmr_bridge#msg_vpn_name DataSolacebrokerMsgVpnDmrBridge#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the node at the remote end of the DMR Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_dmr_bridge#remote_node_name DataSolacebrokerMsgVpnDmrBridge#remote_node_name}
  */
  readonly remoteNodeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_dmr_bridge solacebroker_msg_vpn_dmr_bridge}
*/
export class DataSolacebrokerMsgVpnDmrBridge extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_dmr_bridge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnDmrBridge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnDmrBridge to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnDmrBridge that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_dmr_bridge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnDmrBridge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_dmr_bridge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_dmr_bridge solacebroker_msg_vpn_dmr_bridge} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnDmrBridgeConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnDmrBridgeConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_dmr_bridge',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._msgVpnName = config.msgVpnName;
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

  // remote_msg_vpn_name - computed: true, optional: false, required: false
  public get remoteMsgVpnName() {
    return this.getStringAttribute('remote_msg_vpn_name');
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
