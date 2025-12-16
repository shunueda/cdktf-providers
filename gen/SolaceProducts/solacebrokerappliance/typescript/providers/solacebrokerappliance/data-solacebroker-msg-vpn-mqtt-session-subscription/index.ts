// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnMqttSessionSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Client ID of the MQTT Session, which corresponds to the ClientId provided in the MQTT CONNECT packet.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription#mqtt_session_client_id DataSolacebrokerMsgVpnMqttSessionSubscription#mqtt_session_client_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription#mqtt_session_virtual_router DataSolacebrokerMsgVpnMqttSessionSubscription#mqtt_session_virtual_router}
  */
  readonly mqttSessionVirtualRouter: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription#msg_vpn_name DataSolacebrokerMsgVpnMqttSessionSubscription#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The MQTT subscription topic.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription#subscription_topic DataSolacebrokerMsgVpnMqttSessionSubscription#subscription_topic}
  */
  readonly subscriptionTopic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription solacebroker_msg_vpn_mqtt_session_subscription}
*/
export class DataSolacebrokerMsgVpnMqttSessionSubscription extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_mqtt_session_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnMqttSessionSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnMqttSessionSubscription to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnMqttSessionSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnMqttSessionSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_mqtt_session_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_mqtt_session_subscription solacebroker_msg_vpn_mqtt_session_subscription} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnMqttSessionSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnMqttSessionSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_mqtt_session_subscription',
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
    this._mqttSessionClientId = config.mqttSessionClientId;
    this._mqttSessionVirtualRouter = config.mqttSessionVirtualRouter;
    this._msgVpnName = config.msgVpnName;
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

  // subscription_qos - computed: true, optional: false, required: false
  public get subscriptionQos() {
    return this.getNumberAttribute('subscription_qos');
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
