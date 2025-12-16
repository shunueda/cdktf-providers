// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the protected HTTP request header.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header#header_name SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader#header_name}
  */
  readonly headerName: string;
  /**
  * The value of the protected HTTP request header. Unlike a non-protected request header, this value cannot be displayed after it is set, and does not support substitution expressions.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The minimum access scope/level required to change this attribute is "vpn/read-write". This attribute is absent from a GET and not updated when absent in a PUT, subject to the exceptions [here](https://docs.solace.com/Admin/SEMP/SEMP-API-Archit.htm#HTTP_Methods). Changes to this attribute are synchronized to HA mates and replication sites via config-sync. The default value is `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header#header_value SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader#header_value}
  */
  readonly headerValue?: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header#msg_vpn_name SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of a queue in the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header#queue_binding_name SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader#queue_binding_name}
  */
  readonly queueBindingName: string;
  /**
  * The name of the REST Delivery Point.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header#rest_delivery_point_name SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader#rest_delivery_point_name}
  */
  readonly restDeliveryPointName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header}
*/
export class SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeader to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnRestDeliveryPointQueueBindingProtectedRequestHeaderConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_rest_delivery_point_queue_binding_protected_request_header',
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
    this._headerName = config.headerName;
    this._headerValue = config.headerValue;
    this._msgVpnName = config.msgVpnName;
    this._queueBindingName = config.queueBindingName;
    this._restDeliveryPointName = config.restDeliveryPointName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
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
      header_name: cdktf.stringToTerraform(this._headerName),
      header_value: cdktf.stringToTerraform(this._headerValue),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      queue_binding_name: cdktf.stringToTerraform(this._queueBindingName),
      rest_delivery_point_name: cdktf.stringToTerraform(this._restDeliveryPointName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      header_name: {
        value: cdktf.stringToHclTerraform(this._headerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_value: {
        value: cdktf.stringToHclTerraform(this._headerValue),
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
      queue_binding_name: {
        value: cdktf.stringToHclTerraform(this._queueBindingName),
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
