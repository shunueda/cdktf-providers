// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpngatewaySslVpnServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#cipher VpngatewaySslVpnServer#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#client_ip_pool VpngatewaySslVpnServer#client_ip_pool}
  */
  readonly clientIpPool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#compress VpngatewaySslVpnServer#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#id VpngatewaySslVpnServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#local_subnet VpngatewaySslVpnServer#local_subnet}
  */
  readonly localSubnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#port VpngatewaySslVpnServer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#proto VpngatewaySslVpnServer#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#ssl_vpn_server_name VpngatewaySslVpnServer#ssl_vpn_server_name}
  */
  readonly sslVpnServerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#vpn_gateway_id VpngatewaySslVpnServer#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server alibabacloudstack_vpngateway_ssl_vpn_server}
*/
export class VpngatewaySslVpnServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpngateway_ssl_vpn_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpngatewaySslVpnServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpngatewaySslVpnServer to import
  * @param importFromId The id of the existing VpngatewaySslVpnServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpngatewaySslVpnServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpngateway_ssl_vpn_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_ssl_vpn_server alibabacloudstack_vpngateway_ssl_vpn_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpngatewaySslVpnServerConfig
  */
  public constructor(scope: Construct, id: string, config: VpngatewaySslVpnServerConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpngateway_ssl_vpn_server',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipher = config.cipher;
    this._clientIpPool = config.clientIpPool;
    this._compress = config.compress;
    this._id = config.id;
    this._localSubnet = config.localSubnet;
    this._port = config.port;
    this._proto = config.proto;
    this._sslVpnServerName = config.sslVpnServerName;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher - computed: true, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // client_ip_pool - computed: false, optional: false, required: true
  private _clientIpPool?: string; 
  public get clientIpPool() {
    return this.getStringAttribute('client_ip_pool');
  }
  public set clientIpPool(value: string) {
    this._clientIpPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpPoolInput() {
    return this._clientIpPool;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // connections - computed: true, optional: false, required: false
  public get connections() {
    return this.getNumberAttribute('connections');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // internet_ip - computed: true, optional: false, required: false
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }

  // local_subnet - computed: false, optional: false, required: true
  private _localSubnet?: string; 
  public get localSubnet() {
    return this.getStringAttribute('local_subnet');
  }
  public set localSubnet(value: string) {
    this._localSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet;
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: true, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // ssl_vpn_server_id - computed: true, optional: false, required: false
  public get sslVpnServerId() {
    return this.getStringAttribute('ssl_vpn_server_id');
  }

  // ssl_vpn_server_name - computed: false, optional: false, required: true
  private _sslVpnServerName?: string; 
  public get sslVpnServerName() {
    return this.getStringAttribute('ssl_vpn_server_name');
  }
  public set sslVpnServerName(value: string) {
    this._sslVpnServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnServerNameInput() {
    return this._sslVpnServerName;
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
      cipher: cdktf.stringToTerraform(this._cipher),
      client_ip_pool: cdktf.stringToTerraform(this._clientIpPool),
      compress: cdktf.booleanToTerraform(this._compress),
      id: cdktf.stringToTerraform(this._id),
      local_subnet: cdktf.stringToTerraform(this._localSubnet),
      port: cdktf.numberToTerraform(this._port),
      proto: cdktf.stringToTerraform(this._proto),
      ssl_vpn_server_name: cdktf.stringToTerraform(this._sslVpnServerName),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip_pool: {
        value: cdktf.stringToHclTerraform(this._clientIpPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compress: {
        value: cdktf.booleanToHclTerraform(this._compress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_subnet: {
        value: cdktf.stringToHclTerraform(this._localSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_vpn_server_name: {
        value: cdktf.stringToHclTerraform(this._sslVpnServerName),
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
