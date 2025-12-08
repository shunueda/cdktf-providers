// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceOvpnClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#___path___ InterfaceOvpnClient#___path___}
  */
  readonly path?: string;
  /**
  * Whether to add OVPN remote address as a default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#add_default_route InterfaceOvpnClient#add_default_route}
  */
  readonly addDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Authentication methods that the server will accept.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#auth InterfaceOvpnClient#auth}
  */
  readonly auth?: string;
  /**
  * Name of the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#certificate InterfaceOvpnClient#certificate}
  */
  readonly certificate?: string;
  /**
  * Allowed ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#cipher InterfaceOvpnClient#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#comment InterfaceOvpnClient#comment}
  */
  readonly comment?: string;
  /**
  * Remote address of the OVPN server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#connect_to InterfaceOvpnClient#connect_to}
  */
  readonly connectTo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#disabled InterfaceOvpnClient#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#id InterfaceOvpnClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mac address of OVPN interface. Will be automatically generated if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#mac_address InterfaceOvpnClient#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Maximum Transmission Unit. Max packet size that the OVPN interface will be able to send without packet fragmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#max_mtu InterfaceOvpnClient#max_mtu}
  */
  readonly maxMtu?: number;
  /**
  * Layer3 or layer2 tunnel mode (alternatively tun, tap)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#mode InterfaceOvpnClient#mode}
  */
  readonly mode?: string;
  /**
  * Descriptive name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#name InterfaceOvpnClient#name}
  */
  readonly name: string;
  /**
  * Password used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#password InterfaceOvpnClient#password}
  */
  readonly password?: string;
  /**
  * Port to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#port InterfaceOvpnClient#port}
  */
  readonly port?: number;
  /**
  * Specifies which PPP profile configuration will be used when establishing the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#profile InterfaceOvpnClient#profile}
  */
  readonly profile?: string;
  /**
  * Indicates the protocol to use when connecting with the remote endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#protocol InterfaceOvpnClient#protocol}
  */
  readonly protocol?: string;
  /**
  * Specifies whether to allow the OVPN server to add routes to the OVPN client instance routing table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#route_nopull InterfaceOvpnClient#route_nopull}
  */
  readonly routeNopull?: boolean | cdktf.IResolvable;
  /**
  * Specifies which TLS versions to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#tls_version InterfaceOvpnClient#tls_version}
  */
  readonly tlsVersion?: string;
  /**
  * Whether to add DNS servers provided by the OVPN server to IP/DNS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#use_peer_dns InterfaceOvpnClient#use_peer_dns}
  */
  readonly usePeerDns?: boolean | cdktf.IResolvable;
  /**
  * User name used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#user InterfaceOvpnClient#user}
  */
  readonly user: string;
  /**
  * Checks the certificates CN or SAN against the "connect-to" parameter. The IP or hostname must be present in the server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#verify_server_certificate InterfaceOvpnClient#verify_server_certificate}
  */
  readonly verifyServerCertificate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client routeros_interface_ovpn_client}
*/
export class InterfaceOvpnClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ovpn_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceOvpnClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceOvpnClient to import
  * @param importFromId The id of the existing InterfaceOvpnClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceOvpnClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ovpn_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ovpn_client routeros_interface_ovpn_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceOvpnClientConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceOvpnClientConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ovpn_client',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._addDefaultRoute = config.addDefaultRoute;
    this._auth = config.auth;
    this._certificate = config.certificate;
    this._cipher = config.cipher;
    this._comment = config.comment;
    this._connectTo = config.connectTo;
    this._disabled = config.disabled;
    this._id = config.id;
    this._macAddress = config.macAddress;
    this._maxMtu = config.maxMtu;
    this._mode = config.mode;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._profile = config.profile;
    this._protocol = config.protocol;
    this._routeNopull = config.routeNopull;
    this._tlsVersion = config.tlsVersion;
    this._usePeerDns = config.usePeerDns;
    this._user = config.user;
    this._verifyServerCertificate = config.verifyServerCertificate;
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

  // add_default_route - computed: false, optional: true, required: false
  private _addDefaultRoute?: boolean | cdktf.IResolvable; 
  public get addDefaultRoute() {
    return this.getBooleanAttribute('add_default_route');
  }
  public set addDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._addDefaultRoute = value;
  }
  public resetAddDefaultRoute() {
    this._addDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDefaultRouteInput() {
    return this._addDefaultRoute;
  }

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // connect_to - computed: false, optional: false, required: true
  private _connectTo?: string; 
  public get connectTo() {
    return this.getStringAttribute('connect_to');
  }
  public set connectTo(value: string) {
    this._connectTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectToInput() {
    return this._connectTo;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // hw_crypto - computed: true, optional: false, required: false
  public get hwCrypto() {
    return this.getBooleanAttribute('hw_crypto');
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

  // mac_address - computed: false, optional: true, required: false
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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

  // route_nopull - computed: false, optional: true, required: false
  private _routeNopull?: boolean | cdktf.IResolvable; 
  public get routeNopull() {
    return this.getBooleanAttribute('route_nopull');
  }
  public set routeNopull(value: boolean | cdktf.IResolvable) {
    this._routeNopull = value;
  }
  public resetRouteNopull() {
    this._routeNopull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeNopullInput() {
    return this._routeNopull;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
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

  // use_peer_dns - computed: false, optional: true, required: false
  private _usePeerDns?: boolean | cdktf.IResolvable; 
  public get usePeerDns() {
    return this.getBooleanAttribute('use_peer_dns');
  }
  public set usePeerDns(value: boolean | cdktf.IResolvable) {
    this._usePeerDns = value;
  }
  public resetUsePeerDns() {
    this._usePeerDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePeerDnsInput() {
    return this._usePeerDns;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // verify_server_certificate - computed: false, optional: true, required: false
  private _verifyServerCertificate?: boolean | cdktf.IResolvable; 
  public get verifyServerCertificate() {
    return this.getBooleanAttribute('verify_server_certificate');
  }
  public set verifyServerCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyServerCertificate = value;
  }
  public resetVerifyServerCertificate() {
    this._verifyServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyServerCertificateInput() {
    return this._verifyServerCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      add_default_route: cdktf.booleanToTerraform(this._addDefaultRoute),
      auth: cdktf.stringToTerraform(this._auth),
      certificate: cdktf.stringToTerraform(this._certificate),
      cipher: cdktf.stringToTerraform(this._cipher),
      comment: cdktf.stringToTerraform(this._comment),
      connect_to: cdktf.stringToTerraform(this._connectTo),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      max_mtu: cdktf.numberToTerraform(this._maxMtu),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      profile: cdktf.stringToTerraform(this._profile),
      protocol: cdktf.stringToTerraform(this._protocol),
      route_nopull: cdktf.booleanToTerraform(this._routeNopull),
      tls_version: cdktf.stringToTerraform(this._tlsVersion),
      use_peer_dns: cdktf.booleanToTerraform(this._usePeerDns),
      user: cdktf.stringToTerraform(this._user),
      verify_server_certificate: cdktf.booleanToTerraform(this._verifyServerCertificate),
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
      add_default_route: {
        value: cdktf.booleanToHclTerraform(this._addDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_to: {
        value: cdktf.stringToHclTerraform(this._connectTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_nopull: {
        value: cdktf.booleanToHclTerraform(this._routeNopull),
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
      use_peer_dns: {
        value: cdktf.booleanToHclTerraform(this._usePeerDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_server_certificate: {
        value: cdktf.booleanToHclTerraform(this._verifyServerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
