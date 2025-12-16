// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_queue_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnQueueSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_queue_subscription#msg_vpn_name DataSolacebrokerMsgVpnQueueSubscription#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the Queue.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_queue_subscription#queue_name DataSolacebrokerMsgVpnQueueSubscription#queue_name}
  */
  readonly queueName: string;
  /**
  * The topic of the Subscription.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_queue_subscription#subscription_topic DataSolacebrokerMsgVpnQueueSubscription#subscription_topic}
  */
  readonly subscriptionTopic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_queue_subscription solacebroker_msg_vpn_queue_subscription}
*/
export class DataSolacebrokerMsgVpnQueueSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_queue_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnQueueSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnQueueSubscription to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnQueueSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_queue_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnQueueSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_queue_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_queue_subscription solacebroker_msg_vpn_queue_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnQueueSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnQueueSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_queue_subscription',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
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
    this._msgVpnName = config.msgVpnName;
    this._queueName = config.queueName;
    this._subscriptionTopic = config.subscriptionTopic;
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

  // queue_name - computed: false, optional: false, required: true
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // subscription_topic - computed: false, optional: false, required: true
  private _subscriptionTopic?: string; 
  public get subscriptionTopic() {
    return this.getStringAttribute('subscription_topic');
  }
  public set subscriptionTopic(value: string) {
    this._subscriptionTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionTopicInput() {
    return this._subscriptionTopic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      queue_name: cdktf.stringToTerraform(this._queueName),
      subscription_topic: cdktf.stringToTerraform(this._subscriptionTopic),
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
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_topic: {
        value: cdktf.stringToHclTerraform(this._subscriptionTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
