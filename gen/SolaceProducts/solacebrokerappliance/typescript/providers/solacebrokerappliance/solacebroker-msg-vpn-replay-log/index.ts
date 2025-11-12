// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnReplayLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable the transmission of messages from the Replay Log.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager or vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log#egress_enabled SolacebrokerMsgVpnReplayLog#egress_enabled}
  */
  readonly egressEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the reception of messages to the Replay Log.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager or vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log#ingress_enabled SolacebrokerMsgVpnReplayLog#ingress_enabled}
  */
  readonly ingressEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum spool usage allowed by the Replay Log, in megabytes (MB). If this limit is exceeded, old messages will be trimmed.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager or vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log#max_spool_usage SolacebrokerMsgVpnReplayLog#max_spool_usage}
  */
  readonly maxSpoolUsage?: number;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log#msg_vpn_name SolacebrokerMsgVpnReplayLog#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Replay Log.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log#replay_log_name SolacebrokerMsgVpnReplayLog#replay_log_name}
  */
  readonly replayLogName: string;
  /**
  * Enable or disable topic filtering for the Replay Log.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "global/mesh-manager or vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.27.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log#topic_filter_enabled SolacebrokerMsgVpnReplayLog#topic_filter_enabled}
  */
  readonly topicFilterEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log solacebroker_msg_vpn_replay_log}
*/
export class SolacebrokerMsgVpnReplayLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_replay_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnReplayLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnReplayLog to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnReplayLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnReplayLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_replay_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_replay_log solacebroker_msg_vpn_replay_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnReplayLogConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnReplayLogConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_replay_log',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._egressEnabled = config.egressEnabled;
    this._ingressEnabled = config.ingressEnabled;
    this._maxSpoolUsage = config.maxSpoolUsage;
    this._msgVpnName = config.msgVpnName;
    this._replayLogName = config.replayLogName;
    this._topicFilterEnabled = config.topicFilterEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_enabled - computed: false, optional: true, required: false
  private _egressEnabled?: boolean | cdktf.IResolvable; 
  public get egressEnabled() {
    return this.getBooleanAttribute('egress_enabled');
  }
  public set egressEnabled(value: boolean | cdktf.IResolvable) {
    this._egressEnabled = value;
  }
  public resetEgressEnabled() {
    this._egressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressEnabledInput() {
    return this._egressEnabled;
  }

  // ingress_enabled - computed: false, optional: true, required: false
  private _ingressEnabled?: boolean | cdktf.IResolvable; 
  public get ingressEnabled() {
    return this.getBooleanAttribute('ingress_enabled');
  }
  public set ingressEnabled(value: boolean | cdktf.IResolvable) {
    this._ingressEnabled = value;
  }
  public resetIngressEnabled() {
    this._ingressEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressEnabledInput() {
    return this._ingressEnabled;
  }

  // max_spool_usage - computed: false, optional: true, required: false
  private _maxSpoolUsage?: number; 
  public get maxSpoolUsage() {
    return this.getNumberAttribute('max_spool_usage');
  }
  public set maxSpoolUsage(value: number) {
    this._maxSpoolUsage = value;
  }
  public resetMaxSpoolUsage() {
    this._maxSpoolUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpoolUsageInput() {
    return this._maxSpoolUsage;
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

  // topic_filter_enabled - computed: false, optional: true, required: false
  private _topicFilterEnabled?: boolean | cdktf.IResolvable; 
  public get topicFilterEnabled() {
    return this.getBooleanAttribute('topic_filter_enabled');
  }
  public set topicFilterEnabled(value: boolean | cdktf.IResolvable) {
    this._topicFilterEnabled = value;
  }
  public resetTopicFilterEnabled() {
    this._topicFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicFilterEnabledInput() {
    return this._topicFilterEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      egress_enabled: cdktf.booleanToTerraform(this._egressEnabled),
      ingress_enabled: cdktf.booleanToTerraform(this._ingressEnabled),
      max_spool_usage: cdktf.numberToTerraform(this._maxSpoolUsage),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      replay_log_name: cdktf.stringToTerraform(this._replayLogName),
      topic_filter_enabled: cdktf.booleanToTerraform(this._topicFilterEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      egress_enabled: {
        value: cdktf.booleanToHclTerraform(this._egressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ingress_enabled: {
        value: cdktf.booleanToHclTerraform(this._ingressEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_spool_usage: {
        value: cdktf.numberToHclTerraform(this._maxSpoolUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      topic_filter_enabled: {
        value: cdktf.booleanToHclTerraform(this._topicFilterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
