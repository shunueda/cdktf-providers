// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnRestDeliveryPointQueueBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable whether the authority for the request-target is replaced with that configured for the REST Consumer remote. When enabled, the broker sends HTTP requests in absolute-form, with the request-target's authority taken from the REST Consumer's remote host and port configuration. When disabled, the broker sends HTTP requests whose request-target matches that of the original request message, including whether to use absolute-form or origin-form. This configuration is applicable only when the Message VPN is in REST gateway mode.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `false`. Available since SEMP API version 2.8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding#gateway_replace_target_authority_enabled SolacebrokerMsgVpnRestDeliveryPointQueueBinding#gateway_replace_target_authority_enabled}
  */
  readonly gatewayReplaceTargetAuthorityEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding#msg_vpn_name SolacebrokerMsgVpnRestDeliveryPointQueueBinding#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The request-target string to use when sending requests. It identifies the target resource on the far-end REST Consumer upon which to apply the request. There are generally two common forms for the request-target. The origin-form is most often used in practice and contains the path and query components of the target URI. If the path component is empty then the client must generally send a "/" as the path. When making a request to a proxy, most often the absolute-form is required. This configuration is only applicable when the Message VPN is in REST messaging mode.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding#post_request_target SolacebrokerMsgVpnRestDeliveryPointQueueBinding#post_request_target}
  */
  readonly postRequestTarget?: string;
  /**
  * The name of a queue in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding#queue_binding_name SolacebrokerMsgVpnRestDeliveryPointQueueBinding#queue_binding_name}
  */
  readonly queueBindingName: string;
  /**
  * The type of evaluation to perform on the request target.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `"none"`. The allowed values and their meaning are:
  * 
  * <pre>
  * "none" - Do not evaluate substitution expressions on the request target.
  * "substitution-expressions" - Evaluate substitution expressions on the request target.
  * </pre>
  *  Available since SEMP API version 2.23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding#request_target_evaluation SolacebrokerMsgVpnRestDeliveryPointQueueBinding#request_target_evaluation}
  */
  readonly requestTargetEvaluation?: string;
  /**
  * The name of the REST Delivery Point.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding#rest_delivery_point_name SolacebrokerMsgVpnRestDeliveryPointQueueBinding#rest_delivery_point_name}
  */
  readonly restDeliveryPointName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding solacebroker_msg_vpn_rest_delivery_point_queue_binding}
*/
export class SolacebrokerMsgVpnRestDeliveryPointQueueBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_rest_delivery_point_queue_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnRestDeliveryPointQueueBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnRestDeliveryPointQueueBinding to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnRestDeliveryPointQueueBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnRestDeliveryPointQueueBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_rest_delivery_point_queue_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding solacebroker_msg_vpn_rest_delivery_point_queue_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnRestDeliveryPointQueueBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnRestDeliveryPointQueueBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_rest_delivery_point_queue_binding',
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
    this._gatewayReplaceTargetAuthorityEnabled = config.gatewayReplaceTargetAuthorityEnabled;
    this._msgVpnName = config.msgVpnName;
    this._postRequestTarget = config.postRequestTarget;
    this._queueBindingName = config.queueBindingName;
    this._requestTargetEvaluation = config.requestTargetEvaluation;
    this._restDeliveryPointName = config.restDeliveryPointName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_replace_target_authority_enabled - computed: false, optional: true, required: false
  private _gatewayReplaceTargetAuthorityEnabled?: boolean | cdktf.IResolvable; 
  public get gatewayReplaceTargetAuthorityEnabled() {
    return this.getBooleanAttribute('gateway_replace_target_authority_enabled');
  }
  public set gatewayReplaceTargetAuthorityEnabled(value: boolean | cdktf.IResolvable) {
    this._gatewayReplaceTargetAuthorityEnabled = value;
  }
  public resetGatewayReplaceTargetAuthorityEnabled() {
    this._gatewayReplaceTargetAuthorityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayReplaceTargetAuthorityEnabledInput() {
    return this._gatewayReplaceTargetAuthorityEnabled;
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

  // post_request_target - computed: false, optional: true, required: false
  private _postRequestTarget?: string; 
  public get postRequestTarget() {
    return this.getStringAttribute('post_request_target');
  }
  public set postRequestTarget(value: string) {
    this._postRequestTarget = value;
  }
  public resetPostRequestTarget() {
    this._postRequestTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postRequestTargetInput() {
    return this._postRequestTarget;
  }

  // queue_binding_name - computed: false, optional: false, required: true
  private _queueBindingName?: string; 
  public get queueBindingName() {
    return this.getStringAttribute('queue_binding_name');
  }
  public set queueBindingName(value: string) {
    this._queueBindingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueBindingNameInput() {
    return this._queueBindingName;
  }

  // request_target_evaluation - computed: false, optional: true, required: false
  private _requestTargetEvaluation?: string; 
  public get requestTargetEvaluation() {
    return this.getStringAttribute('request_target_evaluation');
  }
  public set requestTargetEvaluation(value: string) {
    this._requestTargetEvaluation = value;
  }
  public resetRequestTargetEvaluation() {
    this._requestTargetEvaluation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTargetEvaluationInput() {
    return this._requestTargetEvaluation;
  }

  // rest_delivery_point_name - computed: false, optional: false, required: true
  private _restDeliveryPointName?: string; 
  public get restDeliveryPointName() {
    return this.getStringAttribute('rest_delivery_point_name');
  }
  public set restDeliveryPointName(value: string) {
    this._restDeliveryPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restDeliveryPointNameInput() {
    return this._restDeliveryPointName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_replace_target_authority_enabled: cdktf.booleanToTerraform(this._gatewayReplaceTargetAuthorityEnabled),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      post_request_target: cdktf.stringToTerraform(this._postRequestTarget),
      queue_binding_name: cdktf.stringToTerraform(this._queueBindingName),
      request_target_evaluation: cdktf.stringToTerraform(this._requestTargetEvaluation),
      rest_delivery_point_name: cdktf.stringToTerraform(this._restDeliveryPointName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_replace_target_authority_enabled: {
        value: cdktf.booleanToHclTerraform(this._gatewayReplaceTargetAuthorityEnabled),
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
      post_request_target: {
        value: cdktf.stringToHclTerraform(this._postRequestTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      queue_binding_name: {
        value: cdktf.stringToHclTerraform(this._queueBindingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_target_evaluation: {
        value: cdktf.stringToHclTerraform(this._requestTargetEvaluation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_delivery_point_name: {
        value: cdktf.stringToHclTerraform(this._restDeliveryPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
