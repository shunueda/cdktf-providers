// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnRestDeliveryPointRestConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#msg_vpn_name DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the REST Consumer.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#rest_consumer_name DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer#rest_consumer_name}
  */
  readonly restConsumerName: string;
  /**
  * The name of the REST Delivery Point.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#rest_delivery_point_name DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer#rest_delivery_point_name}
  */
  readonly restDeliveryPointName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer solacebroker_msg_vpn_rest_delivery_point_rest_consumer}
*/
export class DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_rest_delivery_point_rest_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnRestDeliveryPointRestConsumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_rest_delivery_point_rest_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point_rest_consumer solacebroker_msg_vpn_rest_delivery_point_rest_consumer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnRestDeliveryPointRestConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnRestDeliveryPointRestConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_rest_delivery_point_rest_consumer',
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
    this._restConsumerName = config.restConsumerName;
    this._restDeliveryPointName = config.restDeliveryPointName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_aws_access_key_id - computed: true, optional: false, required: false
  public get authenticationAwsAccessKeyId() {
    return this.getStringAttribute('authentication_aws_access_key_id');
  }

  // authentication_aws_region - computed: true, optional: false, required: false
  public get authenticationAwsRegion() {
    return this.getStringAttribute('authentication_aws_region');
  }

  // authentication_aws_service - computed: true, optional: false, required: false
  public get authenticationAwsService() {
    return this.getStringAttribute('authentication_aws_service');
  }

  // authentication_http_basic_username - computed: true, optional: false, required: false
  public get authenticationHttpBasicUsername() {
    return this.getStringAttribute('authentication_http_basic_username');
  }

  // authentication_http_header_name - computed: true, optional: false, required: false
  public get authenticationHttpHeaderName() {
    return this.getStringAttribute('authentication_http_header_name');
  }

  // authentication_oauth_client_id - computed: true, optional: false, required: false
  public get authenticationOauthClientId() {
    return this.getStringAttribute('authentication_oauth_client_id');
  }

  // authentication_oauth_client_proxy_name - computed: true, optional: false, required: false
  public get authenticationOauthClientProxyName() {
    return this.getStringAttribute('authentication_oauth_client_proxy_name');
  }

  // authentication_oauth_client_scope - computed: true, optional: false, required: false
  public get authenticationOauthClientScope() {
    return this.getStringAttribute('authentication_oauth_client_scope');
  }

  // authentication_oauth_client_token_endpoint - computed: true, optional: false, required: false
  public get authenticationOauthClientTokenEndpoint() {
    return this.getStringAttribute('authentication_oauth_client_token_endpoint');
  }

  // authentication_oauth_client_token_expiry_default - computed: true, optional: false, required: false
  public get authenticationOauthClientTokenExpiryDefault() {
    return this.getNumberAttribute('authentication_oauth_client_token_expiry_default');
  }

  // authentication_oauth_jwt_proxy_name - computed: true, optional: false, required: false
  public get authenticationOauthJwtProxyName() {
    return this.getStringAttribute('authentication_oauth_jwt_proxy_name');
  }

  // authentication_oauth_jwt_token_endpoint - computed: true, optional: false, required: false
  public get authenticationOauthJwtTokenEndpoint() {
    return this.getStringAttribute('authentication_oauth_jwt_token_endpoint');
  }

  // authentication_oauth_jwt_token_expiry_default - computed: true, optional: false, required: false
  public get authenticationOauthJwtTokenExpiryDefault() {
    return this.getNumberAttribute('authentication_oauth_jwt_token_expiry_default');
  }

  // authentication_scheme - computed: true, optional: false, required: false
  public get authenticationScheme() {
    return this.getStringAttribute('authentication_scheme');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // http_method - computed: true, optional: false, required: false
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }

  // local_interface - computed: true, optional: false, required: false
  public get localInterface() {
    return this.getStringAttribute('local_interface');
  }

  // max_post_wait_time - computed: true, optional: false, required: false
  public get maxPostWaitTime() {
    return this.getNumberAttribute('max_post_wait_time');
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

  // outgoing_connection_count - computed: true, optional: false, required: false
  public get outgoingConnectionCount() {
    return this.getNumberAttribute('outgoing_connection_count');
  }

  // proxy_name - computed: true, optional: false, required: false
  public get proxyName() {
    return this.getStringAttribute('proxy_name');
  }

  // remote_host - computed: true, optional: false, required: false
  public get remoteHost() {
    return this.getStringAttribute('remote_host');
  }

  // remote_port - computed: true, optional: false, required: false
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
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

  // retry_delay - computed: true, optional: false, required: false
  public get retryDelay() {
    return this.getNumberAttribute('retry_delay');
  }

  // tls_cipher_suite_list - computed: true, optional: false, required: false
  public get tlsCipherSuiteList() {
    return this.getStringAttribute('tls_cipher_suite_list');
  }

  // tls_enabled - computed: true, optional: false, required: false
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
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
