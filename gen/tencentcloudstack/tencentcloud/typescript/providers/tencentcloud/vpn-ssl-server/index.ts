// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnSslServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Need compressed. Currently is not supports compress. Default value: False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#compress VpnSslServer#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * The encrypt algorithm. Valid values: AES-128-CBC, AES-192-CBC, AES-256-CBC.Default value: AES-128-CBC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#encrypt_algorithm VpnSslServer#encrypt_algorithm}
  */
  readonly encryptAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#id VpnSslServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The integrity algorithm. Valid values: SHA1. Default value: SHA1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#integrity_algorithm VpnSslServer#integrity_algorithm}
  */
  readonly integrityAlgorithm?: string;
  /**
  * List of local CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#local_address VpnSslServer#local_address}
  */
  readonly localAddress: string[];
  /**
  * Remote CIDR for client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#remote_address VpnSslServer#remote_address}
  */
  readonly remoteAddress: string;
  /**
  * The port of ssl vpn. Currently only supports UDP. Default value: 1194.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#ssl_vpn_port VpnSslServer#ssl_vpn_port}
  */
  readonly sslVpnPort?: number;
  /**
  * The protocol of ssl vpn. Default value: UDP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#ssl_vpn_protocol VpnSslServer#ssl_vpn_protocol}
  */
  readonly sslVpnProtocol?: string;
  /**
  * The name of ssl vpn server to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#ssl_vpn_server_name VpnSslServer#ssl_vpn_server_name}
  */
  readonly sslVpnServerName: string;
  /**
  * VPN gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#vpn_gateway_id VpnSslServer#vpn_gateway_id}
  */
  readonly vpnGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server tencentcloud_vpn_ssl_server}
*/
export class VpnSslServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpn_ssl_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnSslServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnSslServer to import
  * @param importFromId The id of the existing VpnSslServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnSslServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpn_ssl_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/vpn_ssl_server tencentcloud_vpn_ssl_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnSslServerConfig
  */
  public constructor(scope: Construct, id: string, config: VpnSslServerConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpn_ssl_server',
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
    this._compress = config.compress;
    this._encryptAlgorithm = config.encryptAlgorithm;
    this._id = config.id;
    this._integrityAlgorithm = config.integrityAlgorithm;
    this._localAddress = config.localAddress;
    this._remoteAddress = config.remoteAddress;
    this._sslVpnPort = config.sslVpnPort;
    this._sslVpnProtocol = config.sslVpnProtocol;
    this._sslVpnServerName = config.sslVpnServerName;
    this._vpnGatewayId = config.vpnGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // encrypt_algorithm - computed: false, optional: true, required: false
  private _encryptAlgorithm?: string; 
  public get encryptAlgorithm() {
    return this.getStringAttribute('encrypt_algorithm');
  }
  public set encryptAlgorithm(value: string) {
    this._encryptAlgorithm = value;
  }
  public resetEncryptAlgorithm() {
    this._encryptAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAlgorithmInput() {
    return this._encryptAlgorithm;
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

  // integrity_algorithm - computed: false, optional: true, required: false
  private _integrityAlgorithm?: string; 
  public get integrityAlgorithm() {
    return this.getStringAttribute('integrity_algorithm');
  }
  public set integrityAlgorithm(value: string) {
    this._integrityAlgorithm = value;
  }
  public resetIntegrityAlgorithm() {
    this._integrityAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityAlgorithmInput() {
    return this._integrityAlgorithm;
  }

  // local_address - computed: false, optional: false, required: true
  private _localAddress?: string[]; 
  public get localAddress() {
    return this.getListAttribute('local_address');
  }
  public set localAddress(value: string[]) {
    this._localAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // remote_address - computed: false, optional: false, required: true
  private _remoteAddress?: string; 
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }
  public set remoteAddress(value: string) {
    this._remoteAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddressInput() {
    return this._remoteAddress;
  }

  // ssl_vpn_port - computed: false, optional: true, required: false
  private _sslVpnPort?: number; 
  public get sslVpnPort() {
    return this.getNumberAttribute('ssl_vpn_port');
  }
  public set sslVpnPort(value: number) {
    this._sslVpnPort = value;
  }
  public resetSslVpnPort() {
    this._sslVpnPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnPortInput() {
    return this._sslVpnPort;
  }

  // ssl_vpn_protocol - computed: false, optional: true, required: false
  private _sslVpnProtocol?: string; 
  public get sslVpnProtocol() {
    return this.getStringAttribute('ssl_vpn_protocol');
  }
  public set sslVpnProtocol(value: string) {
    this._sslVpnProtocol = value;
  }
  public resetSslVpnProtocol() {
    this._sslVpnProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnProtocolInput() {
    return this._sslVpnProtocol;
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
      compress: cdktf.booleanToTerraform(this._compress),
      encrypt_algorithm: cdktf.stringToTerraform(this._encryptAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      integrity_algorithm: cdktf.stringToTerraform(this._integrityAlgorithm),
      local_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localAddress),
      remote_address: cdktf.stringToTerraform(this._remoteAddress),
      ssl_vpn_port: cdktf.numberToTerraform(this._sslVpnPort),
      ssl_vpn_protocol: cdktf.stringToTerraform(this._sslVpnProtocol),
      ssl_vpn_server_name: cdktf.stringToTerraform(this._sslVpnServerName),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compress: {
        value: cdktf.booleanToHclTerraform(this._compress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encrypt_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integrity_algorithm: {
        value: cdktf.stringToHclTerraform(this._integrityAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_address: {
        value: cdktf.stringToHclTerraform(this._remoteAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_vpn_port: {
        value: cdktf.numberToHclTerraform(this._sslVpnPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_vpn_protocol: {
        value: cdktf.stringToHclTerraform(this._sslVpnProtocol),
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
