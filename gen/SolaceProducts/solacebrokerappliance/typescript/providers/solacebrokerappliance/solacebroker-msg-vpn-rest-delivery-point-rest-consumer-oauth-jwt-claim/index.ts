// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim#msg_vpn_name SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the additional claim. Cannot be "exp", "iat", or "jti".
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim#oauth_jwt_claim_name SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim#oauth_jwt_claim_name}
  */
  readonly oauthJwtClaimName: string;
  /**
  * The value of the additional claim, which must be a string containing a valid JSON value.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". Note that this attribute requires replacement of the resource when updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim#oauth_jwt_claim_value SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim#oauth_jwt_claim_value}
  */
  readonly oauthJwtClaimValue: string;
  /**
  * The name of the REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim#rest_consumer_name SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim#rest_consumer_name}
  */
  readonly restConsumerName: string;
  /**
  * The name of the REST Delivery Point.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim#rest_delivery_point_name SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim#rest_delivery_point_name}
  */
  readonly restDeliveryPointName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim}
*/
export class SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim to import
  * @param importFromId The id of the existing SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/resources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimConfig
  */
  public constructor(scope: Construct, id: string, config: SolacebrokerMsgVpnRestDeliveryPointRestConsumerOauthJwtClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_rest_delivery_point_rest_consumer_oauth_jwt_claim',
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
    this._msgVpnName = config.msgVpnName;
    this._oauthJwtClaimName = config.oauthJwtClaimName;
    this._oauthJwtClaimValue = config.oauthJwtClaimValue;
    this._restConsumerName = config.restConsumerName;
    this._restDeliveryPointName = config.restDeliveryPointName;
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

  // oauth_jwt_claim_name - computed: false, optional: false, required: true
  private _oauthJwtClaimName?: string; 
  public get oauthJwtClaimName() {
    return this.getStringAttribute('oauth_jwt_claim_name');
  }
  public set oauthJwtClaimName(value: string) {
    this._oauthJwtClaimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthJwtClaimNameInput() {
    return this._oauthJwtClaimName;
  }

  // oauth_jwt_claim_value - computed: false, optional: false, required: true
  private _oauthJwtClaimValue?: string; 
  public get oauthJwtClaimValue() {
    return this.getStringAttribute('oauth_jwt_claim_value');
  }
  public set oauthJwtClaimValue(value: string) {
    this._oauthJwtClaimValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthJwtClaimValueInput() {
    return this._oauthJwtClaimValue;
  }

  // rest_consumer_name - computed: false, optional: false, required: true
  private _restConsumerName?: string; 
  public get restConsumerName() {
    return this.getStringAttribute('rest_consumer_name');
  }
  public set restConsumerName(value: string) {
    this._restConsumerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restConsumerNameInput() {
    return this._restConsumerName;
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
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      oauth_jwt_claim_name: cdktf.stringToTerraform(this._oauthJwtClaimName),
      oauth_jwt_claim_value: cdktf.stringToTerraform(this._oauthJwtClaimValue),
      rest_consumer_name: cdktf.stringToTerraform(this._restConsumerName),
      rest_delivery_point_name: cdktf.stringToTerraform(this._restDeliveryPointName),
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
      oauth_jwt_claim_name: {
        value: cdktf.stringToHclTerraform(this._oauthJwtClaimName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_jwt_claim_value: {
        value: cdktf.stringToHclTerraform(this._oauthJwtClaimValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_consumer_name: {
        value: cdktf.stringToHclTerraform(this._restConsumerName),
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
