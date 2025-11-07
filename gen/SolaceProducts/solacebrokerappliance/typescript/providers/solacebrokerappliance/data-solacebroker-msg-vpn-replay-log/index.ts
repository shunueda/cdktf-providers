// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_replay_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnReplayLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_replay_log#msg_vpn_name DataSolacebrokerMsgVpnReplayLog#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Replay Log.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_replay_log#replay_log_name DataSolacebrokerMsgVpnReplayLog#replay_log_name}
  */
  readonly replayLogName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_replay_log solacebroker_msg_vpn_replay_log}
*/
export class DataSolacebrokerMsgVpnReplayLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_replay_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnReplayLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnReplayLog to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnReplayLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_replay_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnReplayLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_replay_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_replay_log solacebroker_msg_vpn_replay_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnReplayLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnReplayLogConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_replay_log',
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
    this._replayLogName = config.replayLogName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_enabled - computed: true, optional: false, required: false
  public get egressEnabled() {
    return this.getBooleanAttribute('egress_enabled');
  }

  // ingress_enabled - computed: true, optional: false, required: false
  public get ingressEnabled() {
    return this.getBooleanAttribute('ingress_enabled');
  }

  // max_spool_usage - computed: true, optional: false, required: false
  public get maxSpoolUsage() {
    return this.getNumberAttribute('max_spool_usage');
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

  // replay_log_name - computed: false, optional: false, required: true
  private _replayLogName?: string; 
  public get replayLogName() {
    return this.getStringAttribute('replay_log_name');
  }
  public set replayLogName(value: string) {
    this._replayLogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replayLogNameInput() {
    return this._replayLogName;
  }

  // topic_filter_enabled - computed: true, optional: false, required: false
  public get topicFilterEnabled() {
    return this.getBooleanAttribute('topic_filter_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      replay_log_name: cdktf.stringToTerraform(this._replayLogName),
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
      replay_log_name: {
        value: cdktf.stringToHclTerraform(this._replayLogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
