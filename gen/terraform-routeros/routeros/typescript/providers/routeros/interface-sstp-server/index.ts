// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceSstpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#___path___ InterfaceSstpServer#___path___}
  */
  readonly path?: string;
  /**
  * Authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#authentication InterfaceSstpServer#authentication}
  */
  readonly authentication?: string[];
  /**
  * Name of the certificate in use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#certificate InterfaceSstpServer#certificate}
  */
  readonly certificate?: string;
  /**
  * Allowed ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#ciphers InterfaceSstpServer#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Default profile to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#default_profile InterfaceSstpServer#default_profile}
  */
  readonly defaultProfile?: string;
  /**
  * Enables/disables service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#enabled InterfaceSstpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#id InterfaceSstpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sets keepalive timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#keepalive_timeout InterfaceSstpServer#keepalive_timeout}
  */
  readonly keepaliveTimeout?: string;
  /**
  * Maximum Receive Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#max_mru InterfaceSstpServer#max_mru}
  */
  readonly maxMru?: number;
  /**
  * Maximum Transmission Unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#max_mtu InterfaceSstpServer#max_mtu}
  */
  readonly maxMtu?: number;
  /**
  * Maximum packet size that can be received on the link. If a packet is bigger than tunnel MTU, it will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#mrru InterfaceSstpServer#mrru}
  */
  readonly mrru?: string;
  /**
  * Specifies which TLS authentication to use. With pfs=yes, TLS will use ECDHE-RSA- and DHE-RSA-. For maximum security setting pfs=required will use only ECDHE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#pfs InterfaceSstpServer#pfs}
  */
  readonly pfs?: boolean | cdktf.IResolvable;
  /**
  * Sets port used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#port InterfaceSstpServer#port}
  */
  readonly port?: string;
  /**
  * Specifies which TLS versions to allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#tls_version InterfaceSstpServer#tls_version}
  */
  readonly tlsVersion?: string;
  /**
  * SSTP server will verify client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#verify_client_certificate InterfaceSstpServer#verify_client_certificate}
  */
  readonly verifyClientCertificate?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server routeros_interface_sstp_server}
*/
export class InterfaceSstpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_sstp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceSstpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceSstpServer to import
  * @param importFromId The id of the existing InterfaceSstpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceSstpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_sstp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/interface_sstp_server routeros_interface_sstp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceSstpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceSstpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_sstp_server',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
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
    this._authentication = config.authentication;
    this._certificate = config.certificate;
    this._ciphers = config.ciphers;
    this._defaultProfile = config.defaultProfile;
    this._enabled = config.enabled;
    this._id = config.id;
    this._keepaliveTimeout = config.keepaliveTimeout;
    this._maxMru = config.maxMru;
    this._maxMtu = config.maxMtu;
    this._mrru = config.mrru;
    this._pfs = config.pfs;
    this._port = config.port;
    this._tlsVersion = config.tlsVersion;
    this._verifyClientCertificate = config.verifyClientCertificate;
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

  // verify_client_certificate - computed: false, optional: true, required: false
  private _verifyClientCertificate?: boolean | cdktf.IResolvable; 
  public get verifyClientCertificate() {
    return this.getBooleanAttribute('verify_client_certificate');
  }
  public set verifyClientCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyClientCertificate = value;
  }
  public resetVerifyClientCertificate() {
    this._verifyClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClientCertificateInput() {
    return this._verifyClientCertificate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      authentication: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authentication),
      certificate: cdktf.stringToTerraform(this._certificate),
      ciphers: cdktf.stringToTerraform(this._ciphers),
      default_profile: cdktf.stringToTerraform(this._defaultProfile),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      keepalive_timeout: cdktf.stringToTerraform(this._keepaliveTimeout),
      max_mru: cdktf.numberToTerraform(this._maxMru),
      max_mtu: cdktf.numberToTerraform(this._maxMtu),
      mrru: cdktf.stringToTerraform(this._mrru),
      pfs: cdktf.booleanToTerraform(this._pfs),
      port: cdktf.stringToTerraform(this._port),
      tls_version: cdktf.stringToTerraform(this._tlsVersion),
      verify_client_certificate: cdktf.booleanToTerraform(this._verifyClientCertificate),
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
      default_profile: {
        value: cdktf.stringToHclTerraform(this._defaultProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tls_version: {
        value: cdktf.stringToHclTerraform(this._tlsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_client_certificate: {
        value: cdktf.booleanToHclTerraform(this._verifyClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
