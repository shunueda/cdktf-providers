// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_replay_log_topic_filter_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnReplayLogTopicFilterSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_replay_log_topic_filter_subscription#msg_vpn_name DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Replay Log.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_replay_log_topic_filter_subscription#replay_log_name DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription#replay_log_name}
  */
  readonly replayLogName: string;
  /**
  * The topic of the Subscription.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_replay_log_topic_filter_subscription#topic_filter_subscription DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription#topic_filter_subscription}
  */
  readonly topicFilterSubscription: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_replay_log_topic_filter_subscription solacebroker_msg_vpn_replay_log_topic_filter_subscription}
*/
export class DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_replay_log_topic_filter_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_replay_log_topic_filter_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnReplayLogTopicFilterSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_replay_log_topic_filter_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/data-sources/msg_vpn_replay_log_topic_filter_subscription solacebroker_msg_vpn_replay_log_topic_filter_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnReplayLogTopicFilterSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnReplayLogTopicFilterSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_replay_log_topic_filter_subscription',
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
    this._replayLogName = config.replayLogName;
    this._topicFilterSubscription = config.topicFilterSubscription;
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

  // topic_filter_subscription - computed: false, optional: false, required: true
  private _topicFilterSubscription?: string; 
  public get topicFilterSubscription() {
    return this.getStringAttribute('topic_filter_subscription');
  }
  public set topicFilterSubscription(value: string) {
    this._topicFilterSubscription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicFilterSubscriptionInput() {
    return this._topicFilterSubscription;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      replay_log_name: cdktf.stringToTerraform(this._replayLogName),
      topic_filter_subscription: cdktf.stringToTerraform(this._topicFilterSubscription),
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
      topic_filter_subscription: {
        value: cdktf.stringToHclTerraform(this._topicFilterSubscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
