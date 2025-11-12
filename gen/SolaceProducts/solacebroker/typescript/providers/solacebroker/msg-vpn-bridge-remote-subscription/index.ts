// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MsgVpnBridgeRemoteSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Bridge.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription#bridge_name MsgVpnBridgeRemoteSubscription#bridge_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription#bridge_virtual_router MsgVpnBridgeRemoteSubscription#bridge_virtual_router}
  */
  readonly bridgeVirtualRouter: string;
  /**
  * Enable or disable deliver-always for the Bridge remote subscription topic instead of a deliver-to-one remote priority. A given topic for the Bridge may be deliver-to-one or deliver-always but not both.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". Note that this attribute requires replacement of the resource when updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription#deliver_always_enabled MsgVpnBridgeRemoteSubscription#deliver_always_enabled}
  */
  readonly deliverAlwaysEnabled: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription#msg_vpn_name MsgVpnBridgeRemoteSubscription#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The topic of the Bridge remote subscription.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription#remote_subscription_topic MsgVpnBridgeRemoteSubscription#remote_subscription_topic}
  */
  readonly remoteSubscriptionTopic: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription solacebroker_msg_vpn_bridge_remote_subscription}
*/
export class MsgVpnBridgeRemoteSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_bridge_remote_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MsgVpnBridgeRemoteSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MsgVpnBridgeRemoteSubscription to import
  * @param importFromId The id of the existing MsgVpnBridgeRemoteSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MsgVpnBridgeRemoteSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_bridge_remote_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.2.0/docs/resources/msg_vpn_bridge_remote_subscription solacebroker_msg_vpn_bridge_remote_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MsgVpnBridgeRemoteSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: MsgVpnBridgeRemoteSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_bridge_remote_subscription',
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
    this._bridgeName = config.bridgeName;
    this._bridgeVirtualRouter = config.bridgeVirtualRouter;
    this._deliverAlwaysEnabled = config.deliverAlwaysEnabled;
    this._msgVpnName = config.msgVpnName;
    this._remoteSubscriptionTopic = config.remoteSubscriptionTopic;
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

  // deliver_always_enabled - computed: false, optional: false, required: true
  private _deliverAlwaysEnabled?: boolean | cdktf.IResolvable; 
  public get deliverAlwaysEnabled() {
    return this.getBooleanAttribute('deliver_always_enabled');
  }
  public set deliverAlwaysEnabled(value: boolean | cdktf.IResolvable) {
    this._deliverAlwaysEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliverAlwaysEnabledInput() {
    return this._deliverAlwaysEnabled;
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

  // remote_subscription_topic - computed: false, optional: false, required: true
  private _remoteSubscriptionTopic?: string; 
  public get remoteSubscriptionTopic() {
    return this.getStringAttribute('remote_subscription_topic');
  }
  public set remoteSubscriptionTopic(value: string) {
    this._remoteSubscriptionTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubscriptionTopicInput() {
    return this._remoteSubscriptionTopic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bridge_name: cdktf.stringToTerraform(this._bridgeName),
      bridge_virtual_router: cdktf.stringToTerraform(this._bridgeVirtualRouter),
      deliver_always_enabled: cdktf.booleanToTerraform(this._deliverAlwaysEnabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      remote_subscription_topic: cdktf.stringToTerraform(this._remoteSubscriptionTopic),
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
      deliver_always_enabled: {
        value: cdktf.booleanToHclTerraform(this._deliverAlwaysEnabled),
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
      remote_subscription_topic: {
        value: cdktf.stringToHclTerraform(this._remoteSubscriptionTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
