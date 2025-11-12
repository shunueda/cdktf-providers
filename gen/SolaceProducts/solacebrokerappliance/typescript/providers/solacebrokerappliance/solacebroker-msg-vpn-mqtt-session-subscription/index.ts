// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnMqttSessionSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription#mqtt_session_client_id SolacebrokerMsgVpnMqttSessionSubscription#mqtt_session_client_id}
  */
  readonly mqttSessionClientId: string;
  /**
  * The virtual router of the MQTT Session.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "primary" - The MQTT Session belongs to the primary virtual router.
  * "backup" - The MQTT Session belongs to the backup virtual router.
  * "auto" - The MQTT Session is automatically assigned a virtual router at creation, depending on the broker's active-standby role.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription#mqtt_session_virtual_router SolacebrokerMsgVpnMqttSessionSubscription#mqtt_session_virtual_router}
  */
  readonly mqttSessionVirtualRouter: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription#msg_vpn_name SolacebrokerMsgVpnMqttSessionSubscription#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The quality of service (QoS) for the subscription as either 0 (deliver at most once) or 1 (deliver at least once). QoS 2 is not supported, but QoS 2 messages attracted by QoS 0 or QoS 1 subscriptions are accepted and delivered accordingly.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription#subscription_qos SolacebrokerMsgVpnMqttSessionSubscription#subscription_qos}
  */
  readonly subscriptionQos?: number;
  /**
  * The MQTT subscription topic.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription#subscription_topic SolacebrokerMsgVpnMqttSessionSubscription#subscription_topic}
  */
  readonly subscriptionTopic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription solacebroker_msg_vpn_mqtt_session_subscription}
*/
export class SolacebrokerMsgVpnMqttSessionSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_mqtt_session_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnMqttSessionSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnMqttSessionSubscription to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnMqttSessionSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnMqttSessionSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_mqtt_session_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_mqtt_session_subscription solacebroker_msg_vpn_mqtt_session_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnMqttSessionSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnMqttSessionSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_mqtt_session_subscription',
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
    this._mqttSessionClientId = config.mqttSessionClientId;
    this._mqttSessionVirtualRouter = config.mqttSessionVirtualRouter;
    this._msgVpnName = config.msgVpnName;
    this._subscriptionQos = config.subscriptionQos;
    this._subscriptionTopic = config.subscriptionTopic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // mqtt_session_client_id - computed: false, optional: false, required: true
  private _mqttSessionClientId?: string; 
  public get mqttSessionClientId() {
    return this.getStringAttribute('mqtt_session_client_id');
  }
  public set mqttSessionClientId(value: string) {
    this._mqttSessionClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttSessionClientIdInput() {
    return this._mqttSessionClientId;
  }

  // mqtt_session_virtual_router - computed: false, optional: false, required: true
  private _mqttSessionVirtualRouter?: string; 
  public get mqttSessionVirtualRouter() {
    return this.getStringAttribute('mqtt_session_virtual_router');
  }
  public set mqttSessionVirtualRouter(value: string) {
    this._mqttSessionVirtualRouter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttSessionVirtualRouterInput() {
    return this._mqttSessionVirtualRouter;
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

  // subscription_qos - computed: false, optional: true, required: false
  private _subscriptionQos?: number; 
  public get subscriptionQos() {
    return this.getNumberAttribute('subscription_qos');
  }
  public set subscriptionQos(value: number) {
    this._subscriptionQos = value;
  }
  public resetSubscriptionQos() {
    this._subscriptionQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionQosInput() {
    return this._subscriptionQos;
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
      mqtt_session_client_id: cdktf.stringToTerraform(this._mqttSessionClientId),
      mqtt_session_virtual_router: cdktf.stringToTerraform(this._mqttSessionVirtualRouter),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      subscription_qos: cdktf.numberToTerraform(this._subscriptionQos),
      subscription_topic: cdktf.stringToTerraform(this._subscriptionTopic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mqtt_session_client_id: {
        value: cdktf.stringToHclTerraform(this._mqttSessionClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mqtt_session_virtual_router: {
        value: cdktf.stringToHclTerraform(this._mqttSessionVirtualRouter),
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
      subscription_qos: {
        value: cdktf.numberToHclTerraform(this._subscriptionQos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
