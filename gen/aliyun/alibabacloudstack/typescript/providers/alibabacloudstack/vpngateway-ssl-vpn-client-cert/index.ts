// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpngatewaySslVpnClientCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert#id VpngatewaySslVpnClientCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert#ssl_vpn_client_cert_name VpngatewaySslVpnClientCert#ssl_vpn_client_cert_name}
  */
  readonly sslVpnClientCertName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert#ssl_vpn_server_id VpngatewaySslVpnClientCert#ssl_vpn_server_id}
  */
  readonly sslVpnServerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert#vpn_gateway_id VpngatewaySslVpnClientCert#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert alibabacloudstack_vpngateway_ssl_vpn_client_cert}
*/
export class VpngatewaySslVpnClientCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpngateway_ssl_vpn_client_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpngatewaySslVpnClientCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpngatewaySslVpnClientCert to import
  * @param importFromId The id of the existing VpngatewaySslVpnClientCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpngatewaySslVpnClientCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpngateway_ssl_vpn_client_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/vpngateway_ssl_vpn_client_cert alibabacloudstack_vpngateway_ssl_vpn_client_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpngatewaySslVpnClientCertConfig
  */
  public constructor(scope: Construct, id: string, config: VpngatewaySslVpnClientCertConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpngateway_ssl_vpn_client_cert',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._sslVpnClientCertName = config.sslVpnClientCertName;
    this._sslVpnServerId = config.sslVpnServerId;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // client_cert - computed: true, optional: false, required: false
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }

  // client_config - computed: true, optional: false, required: false
  public get clientConfig() {
    return this.getStringAttribute('client_config');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ssl_vpn_client_cert_id - computed: true, optional: false, required: false
  public get sslVpnClientCertId() {
    return this.getStringAttribute('ssl_vpn_client_cert_id');
  }

  // ssl_vpn_client_cert_name - computed: false, optional: false, required: true
  private _sslVpnClientCertName?: string; 
  public get sslVpnClientCertName() {
    return this.getStringAttribute('ssl_vpn_client_cert_name');
  }
  public set sslVpnClientCertName(value: string) {
    this._sslVpnClientCertName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnClientCertNameInput() {
    return this._sslVpnClientCertName;
  }

  // ssl_vpn_server_id - computed: false, optional: false, required: true
  private _sslVpnServerId?: string; 
  public get sslVpnServerId() {
    return this.getStringAttribute('ssl_vpn_server_id');
  }
  public set sslVpnServerId(value: string) {
    this._sslVpnServerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnServerIdInput() {
    return this._sslVpnServerId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpn_gateway_id - computed: false, optional: false, required: true
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ssl_vpn_client_cert_name: cdktf.stringToTerraform(this._sslVpnClientCertName),
      ssl_vpn_server_id: cdktf.stringToTerraform(this._sslVpnServerId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_vpn_client_cert_name: {
        value: cdktf.stringToHclTerraform(this._sslVpnClientCertName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_vpn_server_id: {
        value: cdktf.stringToHclTerraform(this._sslVpnServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_gateway_id: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
