// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_gateway_ssl_client_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnGatewaySslClientCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_gateway_ssl_client_cert#id VpnGatewaySslClientCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SSL-VPN-CLIENT Instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_gateway_ssl_client_cert#ssl_vpn_client_id VpnGatewaySslClientCert#ssl_vpn_client_id}
  */
  readonly sslVpnClientId: string;
  /**
  * `on`: Enable, `off`: Disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_gateway_ssl_client_cert#switch VpnGatewaySslClientCert#switch}
  */
  readonly switch?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_gateway_ssl_client_cert tencentcloud_vpn_gateway_ssl_client_cert}
*/
export class VpnGatewaySslClientCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpn_gateway_ssl_client_cert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnGatewaySslClientCert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnGatewaySslClientCert to import
  * @param importFromId The id of the existing VpnGatewaySslClientCert that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_gateway_ssl_client_cert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnGatewaySslClientCert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpn_gateway_ssl_client_cert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_gateway_ssl_client_cert tencentcloud_vpn_gateway_ssl_client_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnGatewaySslClientCertConfig
  */
  public constructor(scope: Construct, id: string, config: VpnGatewaySslClientCertConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpn_gateway_ssl_client_cert',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._sslVpnClientId = config.sslVpnClientId;
    this._switch = config.switch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ssl_vpn_client_id - computed: false, optional: false, required: true
  private _sslVpnClientId?: string; 
  public get sslVpnClientId() {
    return this.getStringAttribute('ssl_vpn_client_id');
  }
  public set sslVpnClientId(value: string) {
    this._sslVpnClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnClientIdInput() {
    return this._sslVpnClientId;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ssl_vpn_client_id: cdktf.stringToTerraform(this._sslVpnClientId),
      switch: cdktf.stringToTerraform(this._switch),
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
      ssl_vpn_client_id: {
        value: cdktf.stringToHclTerraform(this._sslVpnClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch: {
        value: cdktf.stringToHclTerraform(this._switch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
