// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceSstpClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#___path___ InterfaceSstpClient#___path___}
  */
  readonly path?: string;
  /**
  * Whether to add L2TP remote address as a default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#add_default_route InterfaceSstpClient#add_default_route}
  */
  readonly addDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Enables/disables service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#add_sni InterfaceSstpClient#add_sni}
  */
  readonly addSni?: boolean | cdktf.IResolvable;
  /**
  * Authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#authentication InterfaceSstpClient#authentication}
  */
  readonly authentication?: string[];
  /**
  * Name of the certificate in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#certificate InterfaceSstpClient#certificate}
  */
  readonly certificate?: string;
  /**
  * Allowed ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#ciphers InterfaceSstpClient#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#comment InterfaceSstpClient#comment}
  */
  readonly comment?: string;
  /**
  * Remote address of the SSTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#connect_to InterfaceSstpClient#connect_to}
  */
  readonly connectTo: string;
  /**
  * Sets distance value applied to auto created default route, if add-default-route is also selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#default_route_distance InterfaceSstpClient#default_route_distance}
  */
  readonly defaultRouteDistance?: string;
  /**
  * Connects only when outbound traffic is generated. If selected, then route with gateway address from 10.112.112.0/24 network will be added while connection is not established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#dial_on_demand InterfaceSstpClient#dial_on_demand}
  */
  readonly dialOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#disabled InterfaceSstpClient#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Proxy address field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#http_proxy InterfaceSstpClient#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#id InterfaceSstpClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sets keepalive timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#keepalive_timeout InterfaceSstpClient#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * Maximum Receive Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#max_mru InterfaceSstpClient#max_mru}
  */
  readonly maxMru?: number;
  /**
  * Maximum Transmission Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#max_mtu InterfaceSstpClient#max_mtu}
  */
  readonly maxMtu?: number;
  /**
  * Maximum packet size that can be received on the link. If a packet is bigger than tunnel MTU, it will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#mrru InterfaceSstpClient#mrru}
  */
  readonly mrru?: string;
  /**
  * Descriptive name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#name InterfaceSstpClient#name}
  */
  readonly name: string;
  /**
  * Password used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#password InterfaceSstpClient#password}
  */
  readonly password: string;
  /**
  * Specifies which TLS authentication to use. With pfs=yes, TLS will use ECDHE-RSA- and DHE-RSA-. For maximum security setting pfs=required will use only ECDHE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#pfs InterfaceSstpClient#pfs}
  */
  readonly pfs?: boolean | cdktf.IResolvable;
  /**
  * Sets port used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#port InterfaceSstpClient#port}
  */
  readonly port?: string;
  /**
  * Specifies which PPP profile configuration will be used when establishing the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#profile InterfaceSstpClient#profile}
  */
  readonly profile?: string;
  /**
  * Sets proxy port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#proxy_port InterfaceSstpClient#proxy_port}
  */
  readonly proxyPort?: string;
  /**
  * Specifies which TLS versions to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#tls_version InterfaceSstpClient#tls_version}
  */
  readonly tlsVersion?: string;
  /**
  * User name used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#user InterfaceSstpClient#user}
  */
  readonly user: string;
  /**
  * SSTP client will verify server address in certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#verify_server_address_from_certificate InterfaceSstpClient#verify_server_address_from_certificate}
  */
  readonly verifyServerAddressFromCertificate?: boolean | cdktf.IResolvable;
  /**
  * SSTP client will verify server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#verify_server_certificate InterfaceSstpClient#verify_server_certificate}
  */
  readonly verifyServerCertificate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client routeros_interface_sstp_client}
*/
export class InterfaceSstpClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_sstp_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceSstpClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceSstpClient to import
  * @param importFromId The id of the existing InterfaceSstpClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceSstpClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_sstp_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_sstp_client routeros_interface_sstp_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceSstpClientConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceSstpClientConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_sstp_client',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
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
    this._addSni = config.addSni;
    this._authentication = config.authentication;
    this._certificate = config.certificate;
    this._ciphers = config.ciphers;
    this._comment = config.comment;
    this._connectTo = config.connectTo;
    this._defaultRouteDistance = config.defaultRouteDistance;
    this._dialOnDemand = config.dialOnDemand;
    this._disabled = config.disabled;
    this._httpProxy = config.httpProxy;
    this._id = config.id;
    this._keepaliveTimeout = config.keepaliveTimeout;
    this._maxMru = config.maxMru;
    this._maxMtu = config.maxMtu;
    this._mrru = config.mrru;
    this._name = config.name;
    this._password = config.password;
    this._pfs = config.pfs;
    this._port = config.port;
    this._profile = config.profile;
    this._proxyPort = config.proxyPort;
    this._tlsVersion = config.tlsVersion;
    this._user = config.user;
    this._verifyServerAddressFromCertificate = config.verifyServerAddressFromCertificate;
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

  // add_sni - computed: false, optional: true, required: false
  private _addSni?: boolean | cdktf.IResolvable; 
  public get addSni() {
    return this.getBooleanAttribute('add_sni');
  }
  public set addSni(value: boolean | cdktf.IResolvable) {
    this._addSni = value;
  }
  public resetAddSni() {
    this._addSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSniInput() {
    return this._addSni;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string[]; 
  public get authentication() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication'));
  }
  public set authentication(value: string[]) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
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

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string; 
  public get ciphers() {
    return this.getStringAttribute('ciphers');
  }
  public set ciphers(value: string) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
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

  // default_route_distance - computed: false, optional: true, required: false
  private _defaultRouteDistance?: string; 
  public get defaultRouteDistance() {
    return this.getStringAttribute('default_route_distance');
  }
  public set defaultRouteDistance(value: string) {
    this._defaultRouteDistance = value;
  }
  public resetDefaultRouteDistance() {
    this._defaultRouteDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteDistanceInput() {
    return this._defaultRouteDistance;
  }

  // dial_on_demand - computed: false, optional: true, required: false
  private _dialOnDemand?: boolean | cdktf.IResolvable; 
  public get dialOnDemand() {
    return this.getBooleanAttribute('dial_on_demand');
  }
  public set dialOnDemand(value: boolean | cdktf.IResolvable) {
    this._dialOnDemand = value;
  }
  public resetDialOnDemand() {
    this._dialOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialOnDemandInput() {
    return this._dialOnDemand;
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

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
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

  // max_mru - computed: false, optional: true, required: false
  private _maxMru?: number; 
  public get maxMru() {
    return this.getNumberAttribute('max_mru');
  }
  public set maxMru(value: number) {
    this._maxMru = value;
  }
  public resetMaxMru() {
    this._maxMru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMruInput() {
    return this._maxMru;
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

  // mrru - computed: false, optional: true, required: false
  private _mrru?: string; 
  public get mrru() {
    return this.getStringAttribute('mrru');
  }
  public set mrru(value: string) {
    this._mrru = value;
  }
  public resetMrru() {
    this._mrru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrruInput() {
    return this._mrru;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pfs - computed: false, optional: true, required: false
  private _pfs?: boolean | cdktf.IResolvable; 
  public get pfs() {
    return this.getBooleanAttribute('pfs');
  }
  public set pfs(value: boolean | cdktf.IResolvable) {
    this._pfs = value;
  }
  public resetPfs() {
    this._pfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
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

  // proxy_port - computed: false, optional: true, required: false
  private _proxyPort?: string; 
  public get proxyPort() {
    return this.getStringAttribute('proxy_port');
  }
  public set proxyPort(value: string) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
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

  // verify_server_address_from_certificate - computed: false, optional: true, required: false
  private _verifyServerAddressFromCertificate?: boolean | cdktf.IResolvable; 
  public get verifyServerAddressFromCertificate() {
    return this.getBooleanAttribute('verify_server_address_from_certificate');
  }
  public set verifyServerAddressFromCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyServerAddressFromCertificate = value;
  }
  public resetVerifyServerAddressFromCertificate() {
    this._verifyServerAddressFromCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyServerAddressFromCertificateInput() {
    return this._verifyServerAddressFromCertificate;
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
      add_sni: cdktf.booleanToTerraform(this._addSni),
      authentication: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authentication),
      certificate: cdktf.stringToTerraform(this._certificate),
      ciphers: cdktf.stringToTerraform(this._ciphers),
      comment: cdktf.stringToTerraform(this._comment),
      connect_to: cdktf.stringToTerraform(this._connectTo),
      default_route_distance: cdktf.stringToTerraform(this._defaultRouteDistance),
      dial_on_demand: cdktf.booleanToTerraform(this._dialOnDemand),
      disabled: cdktf.booleanToTerraform(this._disabled),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      id: cdktf.stringToTerraform(this._id),
      keepalive_timeout: cdktf.stringToTerraform(this._keepaliveTimeout),
      max_mru: cdktf.numberToTerraform(this._maxMru),
      max_mtu: cdktf.numberToTerraform(this._maxMtu),
      mrru: cdktf.stringToTerraform(this._mrru),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      pfs: cdktf.booleanToTerraform(this._pfs),
      port: cdktf.stringToTerraform(this._port),
      profile: cdktf.stringToTerraform(this._profile),
      proxy_port: cdktf.stringToTerraform(this._proxyPort),
      tls_version: cdktf.stringToTerraform(this._tlsVersion),
      user: cdktf.stringToTerraform(this._user),
      verify_server_address_from_certificate: cdktf.booleanToTerraform(this._verifyServerAddressFromCertificate),
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
      add_sni: {
        value: cdktf.booleanToHclTerraform(this._addSni),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authentication),
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
      ciphers: {
        value: cdktf.stringToHclTerraform(this._ciphers),
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
      default_route_distance: {
        value: cdktf.stringToHclTerraform(this._defaultRouteDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dial_on_demand: {
        value: cdktf.booleanToHclTerraform(this._dialOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
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
      keepalive_timeout: {
        value: cdktf.stringToHclTerraform(this._keepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_mru: {
        value: cdktf.numberToHclTerraform(this._maxMru),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_mtu: {
        value: cdktf.numberToHclTerraform(this._maxMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mrru: {
        value: cdktf.stringToHclTerraform(this._mrru),
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
      pfs: {
        value: cdktf.booleanToHclTerraform(this._pfs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_port: {
        value: cdktf.stringToHclTerraform(this._proxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_version: {
        value: cdktf.stringToHclTerraform(this._tlsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_server_address_from_certificate: {
        value: cdktf.booleanToHclTerraform(this._verifyServerAddressFromCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
