// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OvpnServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#___path___ OvpnServer#___path___}
  */
  readonly path?: string;
  /**
  * Authentication methods that the server will accept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#auth OvpnServer#auth}
  */
  readonly auth?: string[];
  /**
  * Name of the certificate that the OVPN server will use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#certificate OvpnServer#certificate}
  */
  readonly certificate?: string;
  /**
  * Allowed ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#cipher OvpnServer#cipher}
  */
  readonly cipher?: string[];
  /**
  * Default profile to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#default_profile OvpnServer#default_profile}
  */
  readonly defaultProfile?: string;
  /**
  * Specifies if IPv6 IP tunneling mode should be possible with this OVPN server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#enable_tun_ipv6 OvpnServer#enable_tun_ipv6}
  */
  readonly enableTunIpv6?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the OVPN server is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#enabled OvpnServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#id OvpnServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Length of IPv6 prefix for IPv6 address which will be used when generating OVPN interface on the server side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#ipv6_prefix_len OvpnServer#ipv6_prefix_len}
  */
  readonly ipv6PrefixLen?: number;
  /**
  * Defines  the time period (in seconds) after which the router is starting to send  keepalive packets every second. If no traffic and no keepalive  responses have come for that period of time (i.e. 2 *  keepalive-timeout), not responding client is proclaimed disconnected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#keepalive_timeout OvpnServer#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * Automatically generated MAC address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#mac_address OvpnServer#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#max_mtu OvpnServer#max_mtu}
  */
  readonly maxMtu?: number;
  /**
  * Layer3 or layer2 tunnel mode (alternatively tun, tap)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#mode OvpnServer#mode}
  */
  readonly mode?: string;
  /**
  * Subnet mask to be applied to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#netmask OvpnServer#netmask}
  */
  readonly netmask?: number;
  /**
  * Port to run the server on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#port OvpnServer#port}
  */
  readonly port?: number;
  /**
  * indicates the protocol to use when connecting with the remote endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#protocol OvpnServer#protocol}
  */
  readonly protocol?: string;
  /**
  * Push routes to the VPN client (available since RouterOS 7.14).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#push_routes OvpnServer#push_routes}
  */
  readonly pushRoutes?: string[];
  /**
  * Specifies what kind of routes the OVPN client must add to the routing table.
  *   * def1 – Use this flag to override the default gateway by using 0.0.0.0/1 and  128.0.0.0/1 rather than 0.0.0.0/0. This has the benefit of overriding  but not wiping out the original default gateway.
  *   * disabled - Do not send redirect-gateway flags to the OVPN client.
  *   * ipv6 - Redirect IPv6 routing into the tunnel on the client side. This works  similarly to the def1 flag, that is, more specific IPv6 routes are added  (2000::/4 and 3000::/4), covering the whole IPv6 unicast space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#redirect_gateway OvpnServer#redirect_gateway}
  */
  readonly redirectGateway?: string[];
  /**
  * Renegotiate data channel key after n seconds (default=3600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#reneg_sec OvpnServer#reneg_sec}
  */
  readonly renegSec?: number;
  /**
  * If set to yes, then the server checks whether the client's certificate belongs to the same certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#require_client_certificate OvpnServer#require_client_certificate}
  */
  readonly requireClientCertificate?: boolean | cdktf.IResolvable;
  /**
  * Specifies which TLS versions to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#tls_version OvpnServer#tls_version}
  */
  readonly tlsVersion?: string;
  /**
  * IPv6 prefix address which will be used when generating the OVPN interface on the server side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#tun_server_ipv6 OvpnServer#tun_server_ipv6}
  */
  readonly tunServerIpv6?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server routeros_ovpn_server}
*/
export class OvpnServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ovpn_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OvpnServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OvpnServer to import
  * @param importFromId The id of the existing OvpnServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OvpnServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ovpn_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/ovpn_server routeros_ovpn_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OvpnServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OvpnServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ovpn_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._auth = config.auth;
    this._certificate = config.certificate;
    this._cipher = config.cipher;
    this._defaultProfile = config.defaultProfile;
    this._enableTunIpv6 = config.enableTunIpv6;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipv6PrefixLen = config.ipv6PrefixLen;
    this._keepaliveTimeout = config.keepaliveTimeout;
    this._macAddress = config.macAddress;
    this._maxMtu = config.maxMtu;
    this._mode = config.mode;
    this._netmask = config.netmask;
    this._port = config.port;
    this._protocol = config.protocol;
    this._pushRoutes = config.pushRoutes;
    this._redirectGateway = config.redirectGateway;
    this._renegSec = config.renegSec;
    this._requireClientCertificate = config.requireClientCertificate;
    this._tlsVersion = config.tlsVersion;
    this._tunServerIpv6 = config.tunServerIpv6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string[]; 
  public get auth() {
    return cdktf.Fn.tolist(this.getListAttribute('auth'));
  }
  public set auth(value: string[]) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string[]; 
  public get cipher() {
    return cdktf.Fn.tolist(this.getListAttribute('cipher'));
  }
  public set cipher(value: string[]) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // default_profile - computed: false, optional: true, required: false
  private _defaultProfile?: string; 
  public get defaultProfile() {
    return this.getStringAttribute('default_profile');
  }
  public set defaultProfile(value: string) {
    this._defaultProfile = value;
  }
  public resetDefaultProfile() {
    this._defaultProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProfileInput() {
    return this._defaultProfile;
  }

  // enable_tun_ipv6 - computed: false, optional: true, required: false
  private _enableTunIpv6?: boolean | cdktf.IResolvable; 
  public get enableTunIpv6() {
    return this.getBooleanAttribute('enable_tun_ipv6');
  }
  public set enableTunIpv6(value: boolean | cdktf.IResolvable) {
    this._enableTunIpv6 = value;
  }
  public resetEnableTunIpv6() {
    this._enableTunIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTunIpv6Input() {
    return this._enableTunIpv6;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ipv6_prefix_len - computed: false, optional: true, required: false
  private _ipv6PrefixLen?: number; 
  public get ipv6PrefixLen() {
    return this.getNumberAttribute('ipv6_prefix_len');
  }
  public set ipv6PrefixLen(value: number) {
    this._ipv6PrefixLen = value;
  }
  public resetIpv6PrefixLen() {
    this._ipv6PrefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLenInput() {
    return this._ipv6PrefixLen;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: string; 
  public get keepaliveTimeout() {
    return this.getStringAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: string) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // max_mtu - computed: false, optional: true, required: false
  private _maxMtu?: number; 
  public get maxMtu() {
    return this.getNumberAttribute('max_mtu');
  }
  public set maxMtu(value: number) {
    this._maxMtu = value;
  }
  public resetMaxMtu() {
    this._maxMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMtuInput() {
    return this._maxMtu;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: number; 
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // port - computed: false, optional: true, required: false
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // push_routes - computed: false, optional: true, required: false
  private _pushRoutes?: string[]; 
  public get pushRoutes() {
    return cdktf.Fn.tolist(this.getListAttribute('push_routes'));
  }
  public set pushRoutes(value: string[]) {
    this._pushRoutes = value;
  }
  public resetPushRoutes() {
    this._pushRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushRoutesInput() {
    return this._pushRoutes;
  }

  // redirect_gateway - computed: false, optional: true, required: false
  private _redirectGateway?: string[]; 
  public get redirectGateway() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_gateway'));
  }
  public set redirectGateway(value: string[]) {
    this._redirectGateway = value;
  }
  public resetRedirectGateway() {
    this._redirectGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectGatewayInput() {
    return this._redirectGateway;
  }

  // reneg_sec - computed: false, optional: true, required: false
  private _renegSec?: number; 
  public get renegSec() {
    return this.getNumberAttribute('reneg_sec');
  }
  public set renegSec(value: number) {
    this._renegSec = value;
  }
  public resetRenegSec() {
    this._renegSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegSecInput() {
    return this._renegSec;
  }

  // require_client_certificate - computed: false, optional: true, required: false
  private _requireClientCertificate?: boolean | cdktf.IResolvable; 
  public get requireClientCertificate() {
    return this.getBooleanAttribute('require_client_certificate');
  }
  public set requireClientCertificate(value: boolean | cdktf.IResolvable) {
    this._requireClientCertificate = value;
  }
  public resetRequireClientCertificate() {
    this._requireClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireClientCertificateInput() {
    return this._requireClientCertificate;
  }

  // tls_version - computed: false, optional: true, required: false
  private _tlsVersion?: string; 
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }
  public set tlsVersion(value: string) {
    this._tlsVersion = value;
  }
  public resetTlsVersion() {
    this._tlsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionInput() {
    return this._tlsVersion;
  }

  // tun_server_ipv6 - computed: false, optional: true, required: false
  private _tunServerIpv6?: string; 
  public get tunServerIpv6() {
    return this.getStringAttribute('tun_server_ipv6');
  }
  public set tunServerIpv6(value: string) {
    this._tunServerIpv6 = value;
  }
  public resetTunServerIpv6() {
    this._tunServerIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunServerIpv6Input() {
    return this._tunServerIpv6;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      auth: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auth),
      certificate: cdktf.stringToTerraform(this._certificate),
      cipher: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cipher),
      default_profile: cdktf.stringToTerraform(this._defaultProfile),
      enable_tun_ipv6: cdktf.booleanToTerraform(this._enableTunIpv6),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ipv6_prefix_len: cdktf.numberToTerraform(this._ipv6PrefixLen),
      keepalive_timeout: cdktf.stringToTerraform(this._keepaliveTimeout),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      max_mtu: cdktf.numberToTerraform(this._maxMtu),
      mode: cdktf.stringToTerraform(this._mode),
      netmask: cdktf.numberToTerraform(this._netmask),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      push_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pushRoutes),
      redirect_gateway: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectGateway),
      reneg_sec: cdktf.numberToTerraform(this._renegSec),
      require_client_certificate: cdktf.booleanToTerraform(this._requireClientCertificate),
      tls_version: cdktf.stringToTerraform(this._tlsVersion),
      tun_server_ipv6: cdktf.stringToTerraform(this._tunServerIpv6),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._auth),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cipher),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_profile: {
        value: cdktf.stringToHclTerraform(this._defaultProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_tun_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableTunIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      ipv6_prefix_len: {
        value: cdktf.numberToHclTerraform(this._ipv6PrefixLen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keepalive_timeout: {
        value: cdktf.stringToHclTerraform(this._keepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_mtu: {
        value: cdktf.numberToHclTerraform(this._maxMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask: {
        value: cdktf.numberToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pushRoutes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      redirect_gateway: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectGateway),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reneg_sec: {
        value: cdktf.numberToHclTerraform(this._renegSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      require_client_certificate: {
        value: cdktf.booleanToHclTerraform(this._requireClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_version: {
        value: cdktf.stringToHclTerraform(this._tlsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tun_server_ipv6: {
        value: cdktf.stringToHclTerraform(this._tunServerIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
