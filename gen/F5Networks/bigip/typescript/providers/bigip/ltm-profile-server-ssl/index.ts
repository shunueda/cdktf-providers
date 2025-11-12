// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileServerSslConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert time out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#alert_timeout LtmProfileServerSsl#alert_timeout}
  */
  readonly alertTimeout?: string;
  /**
  * Server authentication once / always (default is once).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#authenticate LtmProfileServerSsl#authenticate}
  */
  readonly authenticate?: string;
  /**
  * Client certificate chain traversal depth.  Default 9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#authenticate_depth LtmProfileServerSsl#authenticate_depth}
  */
  readonly authenticateDepth?: number;
  /**
  * CA Certificate. Default none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#c3d_ca_cert LtmProfileServerSsl#c3d_ca_cert}
  */
  readonly c3DCaCert?: string;
  /**
  * CA Key.  Default none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#c3d_ca_key LtmProfileServerSsl#c3d_ca_key}
  */
  readonly c3DCaKey?: string;
  /**
  * CA Passphrase. Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#c3d_ca_passphrase LtmProfileServerSsl#c3d_ca_passphrase}
  */
  readonly c3DCaPassphrase?: string;
  /**
  * Certificate Extensions List.  Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#c3d_cert_extension_custom_oids LtmProfileServerSsl#c3d_cert_extension_custom_oids}
  */
  readonly c3DCertExtensionCustomOids?: string[];
  /**
  * Certificate Extensions Includes. Default Extensions List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#c3d_cert_extension_includes LtmProfileServerSsl#c3d_cert_extension_includes}
  */
  readonly c3DCertExtensionIncludes?: string[];
  /**
  * Certificate Lifespan.  Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#c3d_cert_lifespan LtmProfileServerSsl#c3d_cert_lifespan}
  */
  readonly c3DCertLifespan?: number;
  /**
  * CA Passphrase. Default enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#c3d_certificate_extensions LtmProfileServerSsl#c3d_certificate_extensions}
  */
  readonly c3DCertificateExtensions?: string;
  /**
  * Client certificate file path.  Default None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#ca_file LtmProfileServerSsl#ca_file}
  */
  readonly caFile?: string;
  /**
  * Cache size (sessions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#cache_size LtmProfileServerSsl#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Cache time out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#cache_timeout LtmProfileServerSsl#cache_timeout}
  */
  readonly cacheTimeout?: number;
  /**
  * Name of the server certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#cert LtmProfileServerSsl#cert}
  */
  readonly cert?: string;
  /**
  * Server certificate chain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#chain LtmProfileServerSsl#chain}
  */
  readonly chain?: string;
  /**
  * Cipher group for the ssl server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#cipher_group LtmProfileServerSsl#cipher_group}
  */
  readonly cipherGroup?: string;
  /**
  * BigIP Cipher string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#ciphers LtmProfileServerSsl#ciphers}
  */
  readonly ciphers?: string;
  /**
  * Profile name that this profile defaults from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#defaults_from LtmProfileServerSsl#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Response if the cert is expired (drop / ignore). 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#expire_cert_response_control LtmProfileServerSsl#expire_cert_response_control}
  */
  readonly expireCertResponseControl?: string;
  /**
  * full path of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#full_path LtmProfileServerSsl#full_path}
  */
  readonly fullPath?: string;
  /**
  * generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#generation LtmProfileServerSsl#generation}
  */
  readonly generation?: number;
  /**
  * Generic alerts enabled / disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#generic_alert LtmProfileServerSsl#generic_alert}
  */
  readonly genericAlert?: string;
  /**
  * Handshake time out (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#handshake_timeout LtmProfileServerSsl#handshake_timeout}
  */
  readonly handshakeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#id LtmProfileServerSsl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Server SSL profile key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#key LtmProfileServerSsl#key}
  */
  readonly key?: string;
  /**
  * ModSSL Methods enabled / disabled.  Default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#mod_ssl_methods LtmProfileServerSsl#mod_ssl_methods}
  */
  readonly modSslMethods?: string;
  /**
  * ModSSL Methods enabled / disabled.  Default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#mode LtmProfileServerSsl#mode}
  */
  readonly mode?: string;
  /**
  * Name of the Ssl Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#name LtmProfileServerSsl#name}
  */
  readonly name: string;
  /**
  * name of partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#partition LtmProfileServerSsl#partition}
  */
  readonly partition?: string;
  /**
  * Client Certificate Constrained Delegation CA passphrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#passphrase LtmProfileServerSsl#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Peer Cert Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#peer_cert_mode LtmProfileServerSsl#peer_cert_mode}
  */
  readonly peerCertMode?: string;
  /**
  * Proxy CA Cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#proxy_ca_cert LtmProfileServerSsl#proxy_ca_cert}
  */
  readonly proxyCaCert?: string;
  /**
  * Proxy CA Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#proxy_ca_key LtmProfileServerSsl#proxy_ca_key}
  */
  readonly proxyCaKey?: string;
  /**
  * Proxy SSL enabled / disabled.  Default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#proxy_ssl LtmProfileServerSsl#proxy_ssl}
  */
  readonly proxySsl?: string;
  /**
  * Renogotiate Period (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#renegotiate_period LtmProfileServerSsl#renegotiate_period}
  */
  readonly renegotiatePeriod?: string;
  /**
  * Renogotiate Size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#renegotiate_size LtmProfileServerSsl#renegotiate_size}
  */
  readonly renegotiateSize?: string;
  /**
  * Renegotiation (enabled / disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#renegotiation LtmProfileServerSsl#renegotiation}
  */
  readonly renegotiation?: string;
  /**
  * Retain certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#retain_certificate LtmProfileServerSsl#retain_certificate}
  */
  readonly retainCertificate?: string;
  /**
  * Secure reneogotiaton (request / require / require-strict).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#secure_renegotiation LtmProfileServerSsl#secure_renegotiation}
  */
  readonly secureRenegotiation?: string;
  /**
  * Server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#server_name LtmProfileServerSsl#server_name}
  */
  readonly serverName?: string;
  /**
  * Session Mirroring (enabled / disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#session_mirroring LtmProfileServerSsl#session_mirroring}
  */
  readonly sessionMirroring?: string;
  /**
  * Session Ticket (enabled / disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#session_ticket LtmProfileServerSsl#session_ticket}
  */
  readonly sessionTicket?: string;
  /**
  * SNI Default (true / false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#sni_default LtmProfileServerSsl#sni_default}
  */
  readonly sniDefault?: string;
  /**
  * SNI Require (true / false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#sni_require LtmProfileServerSsl#sni_require}
  */
  readonly sniRequire?: string;
  /**
  * Client Certificate Constrained Delegation. Default disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#ssl_c3d LtmProfileServerSsl#ssl_c3d}
  */
  readonly sslC3D?: string;
  /**
  * SSL forward Proxy (enabled / disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#ssl_forward_proxy LtmProfileServerSsl#ssl_forward_proxy}
  */
  readonly sslForwardProxy?: string;
  /**
  * SSL forward Proxy Bypass (enabled / disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#ssl_forward_proxy_bypass LtmProfileServerSsl#ssl_forward_proxy_bypass}
  */
  readonly sslForwardProxyBypass?: string;
  /**
  * SSL sign hash (any, sha1, sha256, sha384)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#ssl_sign_hash LtmProfileServerSsl#ssl_sign_hash}
  */
  readonly sslSignHash?: string;
  /**
  * Strict Resume (enabled / disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#strict_resume LtmProfileServerSsl#strict_resume}
  */
  readonly strictResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#tm_options LtmProfileServerSsl#tm_options}
  */
  readonly tmOptions?: string[];
  /**
  * Unclean Shutdown (enabled / disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#unclean_shutdown LtmProfileServerSsl#unclean_shutdown}
  */
  readonly uncleanShutdown?: string;
  /**
  * Unclean Shutdown (drop / ignore)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#untrusted_cert_response_control LtmProfileServerSsl#untrusted_cert_response_control}
  */
  readonly untrustedCertResponseControl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl bigip_ltm_profile_server_ssl}
*/
export class LtmProfileServerSsl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_server_ssl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileServerSsl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileServerSsl to import
  * @param importFromId The id of the existing LtmProfileServerSsl that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileServerSsl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_server_ssl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_server_ssl bigip_ltm_profile_server_ssl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileServerSslConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileServerSslConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_server_ssl',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertTimeout = config.alertTimeout;
    this._authenticate = config.authenticate;
    this._authenticateDepth = config.authenticateDepth;
    this._c3DCaCert = config.c3DCaCert;
    this._c3DCaKey = config.c3DCaKey;
    this._c3DCaPassphrase = config.c3DCaPassphrase;
    this._c3DCertExtensionCustomOids = config.c3DCertExtensionCustomOids;
    this._c3DCertExtensionIncludes = config.c3DCertExtensionIncludes;
    this._c3DCertLifespan = config.c3DCertLifespan;
    this._c3DCertificateExtensions = config.c3DCertificateExtensions;
    this._caFile = config.caFile;
    this._cacheSize = config.cacheSize;
    this._cacheTimeout = config.cacheTimeout;
    this._cert = config.cert;
    this._chain = config.chain;
    this._cipherGroup = config.cipherGroup;
    this._ciphers = config.ciphers;
    this._defaultsFrom = config.defaultsFrom;
    this._expireCertResponseControl = config.expireCertResponseControl;
    this._fullPath = config.fullPath;
    this._generation = config.generation;
    this._genericAlert = config.genericAlert;
    this._handshakeTimeout = config.handshakeTimeout;
    this._id = config.id;
    this._key = config.key;
    this._modSslMethods = config.modSslMethods;
    this._mode = config.mode;
    this._name = config.name;
    this._partition = config.partition;
    this._passphrase = config.passphrase;
    this._peerCertMode = config.peerCertMode;
    this._proxyCaCert = config.proxyCaCert;
    this._proxyCaKey = config.proxyCaKey;
    this._proxySsl = config.proxySsl;
    this._renegotiatePeriod = config.renegotiatePeriod;
    this._renegotiateSize = config.renegotiateSize;
    this._renegotiation = config.renegotiation;
    this._retainCertificate = config.retainCertificate;
    this._secureRenegotiation = config.secureRenegotiation;
    this._serverName = config.serverName;
    this._sessionMirroring = config.sessionMirroring;
    this._sessionTicket = config.sessionTicket;
    this._sniDefault = config.sniDefault;
    this._sniRequire = config.sniRequire;
    this._sslC3D = config.sslC3D;
    this._sslForwardProxy = config.sslForwardProxy;
    this._sslForwardProxyBypass = config.sslForwardProxyBypass;
    this._sslSignHash = config.sslSignHash;
    this._strictResume = config.strictResume;
    this._tmOptions = config.tmOptions;
    this._uncleanShutdown = config.uncleanShutdown;
    this._untrustedCertResponseControl = config.untrustedCertResponseControl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_timeout - computed: true, optional: true, required: false
  private _alertTimeout?: string; 
  public get alertTimeout() {
    return this.getStringAttribute('alert_timeout');
  }
  public set alertTimeout(value: string) {
    this._alertTimeout = value;
  }
  public resetAlertTimeout() {
    this._alertTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTimeoutInput() {
    return this._alertTimeout;
  }

  // authenticate - computed: true, optional: true, required: false
  private _authenticate?: string; 
  public get authenticate() {
    return this.getStringAttribute('authenticate');
  }
  public set authenticate(value: string) {
    this._authenticate = value;
  }
  public resetAuthenticate() {
    this._authenticate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // authenticate_depth - computed: true, optional: true, required: false
  private _authenticateDepth?: number; 
  public get authenticateDepth() {
    return this.getNumberAttribute('authenticate_depth');
  }
  public set authenticateDepth(value: number) {
    this._authenticateDepth = value;
  }
  public resetAuthenticateDepth() {
    this._authenticateDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateDepthInput() {
    return this._authenticateDepth;
  }

  // c3d_ca_cert - computed: false, optional: true, required: false
  private _c3DCaCert?: string; 
  public get c3DCaCert() {
    return this.getStringAttribute('c3d_ca_cert');
  }
  public set c3DCaCert(value: string) {
    this._c3DCaCert = value;
  }
  public resetC3DCaCert() {
    this._c3DCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c3DCaCertInput() {
    return this._c3DCaCert;
  }

  // c3d_ca_key - computed: false, optional: true, required: false
  private _c3DCaKey?: string; 
  public get c3DCaKey() {
    return this.getStringAttribute('c3d_ca_key');
  }
  public set c3DCaKey(value: string) {
    this._c3DCaKey = value;
  }
  public resetC3DCaKey() {
    this._c3DCaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c3DCaKeyInput() {
    return this._c3DCaKey;
  }

  // c3d_ca_passphrase - computed: true, optional: true, required: false
  private _c3DCaPassphrase?: string; 
  public get c3DCaPassphrase() {
    return this.getStringAttribute('c3d_ca_passphrase');
  }
  public set c3DCaPassphrase(value: string) {
    this._c3DCaPassphrase = value;
  }
  public resetC3DCaPassphrase() {
    this._c3DCaPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c3DCaPassphraseInput() {
    return this._c3DCaPassphrase;
  }

  // c3d_cert_extension_custom_oids - computed: false, optional: true, required: false
  private _c3DCertExtensionCustomOids?: string[]; 
  public get c3DCertExtensionCustomOids() {
    return this.getListAttribute('c3d_cert_extension_custom_oids');
  }
  public set c3DCertExtensionCustomOids(value: string[]) {
    this._c3DCertExtensionCustomOids = value;
  }
  public resetC3DCertExtensionCustomOids() {
    this._c3DCertExtensionCustomOids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c3DCertExtensionCustomOidsInput() {
    return this._c3DCertExtensionCustomOids;
  }

  // c3d_cert_extension_includes - computed: false, optional: true, required: false
  private _c3DCertExtensionIncludes?: string[]; 
  public get c3DCertExtensionIncludes() {
    return this.getListAttribute('c3d_cert_extension_includes');
  }
  public set c3DCertExtensionIncludes(value: string[]) {
    this._c3DCertExtensionIncludes = value;
  }
  public resetC3DCertExtensionIncludes() {
    this._c3DCertExtensionIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c3DCertExtensionIncludesInput() {
    return this._c3DCertExtensionIncludes;
  }

  // c3d_cert_lifespan - computed: true, optional: true, required: false
  private _c3DCertLifespan?: number; 
  public get c3DCertLifespan() {
    return this.getNumberAttribute('c3d_cert_lifespan');
  }
  public set c3DCertLifespan(value: number) {
    this._c3DCertLifespan = value;
  }
  public resetC3DCertLifespan() {
    this._c3DCertLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c3DCertLifespanInput() {
    return this._c3DCertLifespan;
  }

  // c3d_certificate_extensions - computed: true, optional: true, required: false
  private _c3DCertificateExtensions?: string; 
  public get c3DCertificateExtensions() {
    return this.getStringAttribute('c3d_certificate_extensions');
  }
  public set c3DCertificateExtensions(value: string) {
    this._c3DCertificateExtensions = value;
  }
  public resetC3DCertificateExtensions() {
    this._c3DCertificateExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get c3DCertificateExtensionsInput() {
    return this._c3DCertificateExtensions;
  }

  // ca_file - computed: true, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cache_size - computed: true, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // cache_timeout - computed: true, optional: true, required: false
  private _cacheTimeout?: number; 
  public get cacheTimeout() {
    return this.getNumberAttribute('cache_timeout');
  }
  public set cacheTimeout(value: number) {
    this._cacheTimeout = value;
  }
  public resetCacheTimeout() {
    this._cacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeoutInput() {
    return this._cacheTimeout;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // chain - computed: false, optional: true, required: false
  private _chain?: string; 
  public get chain() {
    return this.getStringAttribute('chain');
  }
  public set chain(value: string) {
    this._chain = value;
  }
  public resetChain() {
    this._chain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInput() {
    return this._chain;
  }

  // cipher_group - computed: false, optional: true, required: false
  private _cipherGroup?: string; 
  public get cipherGroup() {
    return this.getStringAttribute('cipher_group');
  }
  public set cipherGroup(value: string) {
    this._cipherGroup = value;
  }
  public resetCipherGroup() {
    this._cipherGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherGroupInput() {
    return this._cipherGroup;
  }

  // ciphers - computed: true, optional: true, required: false
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

  // defaults_from - computed: false, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // expire_cert_response_control - computed: true, optional: true, required: false
  private _expireCertResponseControl?: string; 
  public get expireCertResponseControl() {
    return this.getStringAttribute('expire_cert_response_control');
  }
  public set expireCertResponseControl(value: string) {
    this._expireCertResponseControl = value;
  }
  public resetExpireCertResponseControl() {
    this._expireCertResponseControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireCertResponseControlInput() {
    return this._expireCertResponseControl;
  }

  // full_path - computed: true, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
  }

  // generation - computed: true, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // generic_alert - computed: true, optional: true, required: false
  private _genericAlert?: string; 
  public get genericAlert() {
    return this.getStringAttribute('generic_alert');
  }
  public set genericAlert(value: string) {
    this._genericAlert = value;
  }
  public resetGenericAlert() {
    this._genericAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericAlertInput() {
    return this._genericAlert;
  }

  // handshake_timeout - computed: true, optional: true, required: false
  private _handshakeTimeout?: string; 
  public get handshakeTimeout() {
    return this.getStringAttribute('handshake_timeout');
  }
  public set handshakeTimeout(value: string) {
    this._handshakeTimeout = value;
  }
  public resetHandshakeTimeout() {
    this._handshakeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeTimeoutInput() {
    return this._handshakeTimeout;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mod_ssl_methods - computed: true, optional: true, required: false
  private _modSslMethods?: string; 
  public get modSslMethods() {
    return this.getStringAttribute('mod_ssl_methods');
  }
  public set modSslMethods(value: string) {
    this._modSslMethods = value;
  }
  public resetModSslMethods() {
    this._modSslMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modSslMethodsInput() {
    return this._modSslMethods;
  }

  // mode - computed: true, optional: true, required: false
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

  // partition - computed: true, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // passphrase - computed: true, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // peer_cert_mode - computed: true, optional: true, required: false
  private _peerCertMode?: string; 
  public get peerCertMode() {
    return this.getStringAttribute('peer_cert_mode');
  }
  public set peerCertMode(value: string) {
    this._peerCertMode = value;
  }
  public resetPeerCertMode() {
    this._peerCertMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCertModeInput() {
    return this._peerCertMode;
  }

  // proxy_ca_cert - computed: true, optional: true, required: false
  private _proxyCaCert?: string; 
  public get proxyCaCert() {
    return this.getStringAttribute('proxy_ca_cert');
  }
  public set proxyCaCert(value: string) {
    this._proxyCaCert = value;
  }
  public resetProxyCaCert() {
    this._proxyCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCaCertInput() {
    return this._proxyCaCert;
  }

  // proxy_ca_key - computed: true, optional: true, required: false
  private _proxyCaKey?: string; 
  public get proxyCaKey() {
    return this.getStringAttribute('proxy_ca_key');
  }
  public set proxyCaKey(value: string) {
    this._proxyCaKey = value;
  }
  public resetProxyCaKey() {
    this._proxyCaKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCaKeyInput() {
    return this._proxyCaKey;
  }

  // proxy_ssl - computed: true, optional: true, required: false
  private _proxySsl?: string; 
  public get proxySsl() {
    return this.getStringAttribute('proxy_ssl');
  }
  public set proxySsl(value: string) {
    this._proxySsl = value;
  }
  public resetProxySsl() {
    this._proxySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySslInput() {
    return this._proxySsl;
  }

  // renegotiate_period - computed: true, optional: true, required: false
  private _renegotiatePeriod?: string; 
  public get renegotiatePeriod() {
    return this.getStringAttribute('renegotiate_period');
  }
  public set renegotiatePeriod(value: string) {
    this._renegotiatePeriod = value;
  }
  public resetRenegotiatePeriod() {
    this._renegotiatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiatePeriodInput() {
    return this._renegotiatePeriod;
  }

  // renegotiate_size - computed: true, optional: true, required: false
  private _renegotiateSize?: string; 
  public get renegotiateSize() {
    return this.getStringAttribute('renegotiate_size');
  }
  public set renegotiateSize(value: string) {
    this._renegotiateSize = value;
  }
  public resetRenegotiateSize() {
    this._renegotiateSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiateSizeInput() {
    return this._renegotiateSize;
  }

  // renegotiation - computed: true, optional: true, required: false
  private _renegotiation?: string; 
  public get renegotiation() {
    return this.getStringAttribute('renegotiation');
  }
  public set renegotiation(value: string) {
    this._renegotiation = value;
  }
  public resetRenegotiation() {
    this._renegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationInput() {
    return this._renegotiation;
  }

  // retain_certificate - computed: true, optional: true, required: false
  private _retainCertificate?: string; 
  public get retainCertificate() {
    return this.getStringAttribute('retain_certificate');
  }
  public set retainCertificate(value: string) {
    this._retainCertificate = value;
  }
  public resetRetainCertificate() {
    this._retainCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainCertificateInput() {
    return this._retainCertificate;
  }

  // secure_renegotiation - computed: true, optional: true, required: false
  private _secureRenegotiation?: string; 
  public get secureRenegotiation() {
    return this.getStringAttribute('secure_renegotiation');
  }
  public set secureRenegotiation(value: string) {
    this._secureRenegotiation = value;
  }
  public resetSecureRenegotiation() {
    this._secureRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureRenegotiationInput() {
    return this._secureRenegotiation;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // session_mirroring - computed: true, optional: true, required: false
  private _sessionMirroring?: string; 
  public get sessionMirroring() {
    return this.getStringAttribute('session_mirroring');
  }
  public set sessionMirroring(value: string) {
    this._sessionMirroring = value;
  }
  public resetSessionMirroring() {
    this._sessionMirroring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMirroringInput() {
    return this._sessionMirroring;
  }

  // session_ticket - computed: true, optional: true, required: false
  private _sessionTicket?: string; 
  public get sessionTicket() {
    return this.getStringAttribute('session_ticket');
  }
  public set sessionTicket(value: string) {
    this._sessionTicket = value;
  }
  public resetSessionTicket() {
    this._sessionTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTicketInput() {
    return this._sessionTicket;
  }

  // sni_default - computed: true, optional: true, required: false
  private _sniDefault?: string; 
  public get sniDefault() {
    return this.getStringAttribute('sni_default');
  }
  public set sniDefault(value: string) {
    this._sniDefault = value;
  }
  public resetSniDefault() {
    this._sniDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniDefaultInput() {
    return this._sniDefault;
  }

  // sni_require - computed: true, optional: true, required: false
  private _sniRequire?: string; 
  public get sniRequire() {
    return this.getStringAttribute('sni_require');
  }
  public set sniRequire(value: string) {
    this._sniRequire = value;
  }
  public resetSniRequire() {
    this._sniRequire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniRequireInput() {
    return this._sniRequire;
  }

  // ssl_c3d - computed: false, optional: true, required: false
  private _sslC3D?: string; 
  public get sslC3D() {
    return this.getStringAttribute('ssl_c3d');
  }
  public set sslC3D(value: string) {
    this._sslC3D = value;
  }
  public resetSslC3D() {
    this._sslC3D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslC3DInput() {
    return this._sslC3D;
  }

  // ssl_forward_proxy - computed: true, optional: true, required: false
  private _sslForwardProxy?: string; 
  public get sslForwardProxy() {
    return this.getStringAttribute('ssl_forward_proxy');
  }
  public set sslForwardProxy(value: string) {
    this._sslForwardProxy = value;
  }
  public resetSslForwardProxy() {
    this._sslForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForwardProxyInput() {
    return this._sslForwardProxy;
  }

  // ssl_forward_proxy_bypass - computed: true, optional: true, required: false
  private _sslForwardProxyBypass?: string; 
  public get sslForwardProxyBypass() {
    return this.getStringAttribute('ssl_forward_proxy_bypass');
  }
  public set sslForwardProxyBypass(value: string) {
    this._sslForwardProxyBypass = value;
  }
  public resetSslForwardProxyBypass() {
    this._sslForwardProxyBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForwardProxyBypassInput() {
    return this._sslForwardProxyBypass;
  }

  // ssl_sign_hash - computed: true, optional: true, required: false
  private _sslSignHash?: string; 
  public get sslSignHash() {
    return this.getStringAttribute('ssl_sign_hash');
  }
  public set sslSignHash(value: string) {
    this._sslSignHash = value;
  }
  public resetSslSignHash() {
    this._sslSignHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSignHashInput() {
    return this._sslSignHash;
  }

  // strict_resume - computed: true, optional: true, required: false
  private _strictResume?: string; 
  public get strictResume() {
    return this.getStringAttribute('strict_resume');
  }
  public set strictResume(value: string) {
    this._strictResume = value;
  }
  public resetStrictResume() {
    this._strictResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictResumeInput() {
    return this._strictResume;
  }

  // tm_options - computed: true, optional: true, required: false
  private _tmOptions?: string[]; 
  public get tmOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('tm_options'));
  }
  public set tmOptions(value: string[]) {
    this._tmOptions = value;
  }
  public resetTmOptions() {
    this._tmOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmOptionsInput() {
    return this._tmOptions;
  }

  // unclean_shutdown - computed: true, optional: true, required: false
  private _uncleanShutdown?: string; 
  public get uncleanShutdown() {
    return this.getStringAttribute('unclean_shutdown');
  }
  public set uncleanShutdown(value: string) {
    this._uncleanShutdown = value;
  }
  public resetUncleanShutdown() {
    this._uncleanShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uncleanShutdownInput() {
    return this._uncleanShutdown;
  }

  // untrusted_cert_response_control - computed: true, optional: true, required: false
  private _untrustedCertResponseControl?: string; 
  public get untrustedCertResponseControl() {
    return this.getStringAttribute('untrusted_cert_response_control');
  }
  public set untrustedCertResponseControl(value: string) {
    this._untrustedCertResponseControl = value;
  }
  public resetUntrustedCertResponseControl() {
    this._untrustedCertResponseControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCertResponseControlInput() {
    return this._untrustedCertResponseControl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_timeout: cdktf.stringToTerraform(this._alertTimeout),
      authenticate: cdktf.stringToTerraform(this._authenticate),
      authenticate_depth: cdktf.numberToTerraform(this._authenticateDepth),
      c3d_ca_cert: cdktf.stringToTerraform(this._c3DCaCert),
      c3d_ca_key: cdktf.stringToTerraform(this._c3DCaKey),
      c3d_ca_passphrase: cdktf.stringToTerraform(this._c3DCaPassphrase),
      c3d_cert_extension_custom_oids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._c3DCertExtensionCustomOids),
      c3d_cert_extension_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._c3DCertExtensionIncludes),
      c3d_cert_lifespan: cdktf.numberToTerraform(this._c3DCertLifespan),
      c3d_certificate_extensions: cdktf.stringToTerraform(this._c3DCertificateExtensions),
      ca_file: cdktf.stringToTerraform(this._caFile),
      cache_size: cdktf.numberToTerraform(this._cacheSize),
      cache_timeout: cdktf.numberToTerraform(this._cacheTimeout),
      cert: cdktf.stringToTerraform(this._cert),
      chain: cdktf.stringToTerraform(this._chain),
      cipher_group: cdktf.stringToTerraform(this._cipherGroup),
      ciphers: cdktf.stringToTerraform(this._ciphers),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      expire_cert_response_control: cdktf.stringToTerraform(this._expireCertResponseControl),
      full_path: cdktf.stringToTerraform(this._fullPath),
      generation: cdktf.numberToTerraform(this._generation),
      generic_alert: cdktf.stringToTerraform(this._genericAlert),
      handshake_timeout: cdktf.stringToTerraform(this._handshakeTimeout),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      mod_ssl_methods: cdktf.stringToTerraform(this._modSslMethods),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      peer_cert_mode: cdktf.stringToTerraform(this._peerCertMode),
      proxy_ca_cert: cdktf.stringToTerraform(this._proxyCaCert),
      proxy_ca_key: cdktf.stringToTerraform(this._proxyCaKey),
      proxy_ssl: cdktf.stringToTerraform(this._proxySsl),
      renegotiate_period: cdktf.stringToTerraform(this._renegotiatePeriod),
      renegotiate_size: cdktf.stringToTerraform(this._renegotiateSize),
      renegotiation: cdktf.stringToTerraform(this._renegotiation),
      retain_certificate: cdktf.stringToTerraform(this._retainCertificate),
      secure_renegotiation: cdktf.stringToTerraform(this._secureRenegotiation),
      server_name: cdktf.stringToTerraform(this._serverName),
      session_mirroring: cdktf.stringToTerraform(this._sessionMirroring),
      session_ticket: cdktf.stringToTerraform(this._sessionTicket),
      sni_default: cdktf.stringToTerraform(this._sniDefault),
      sni_require: cdktf.stringToTerraform(this._sniRequire),
      ssl_c3d: cdktf.stringToTerraform(this._sslC3D),
      ssl_forward_proxy: cdktf.stringToTerraform(this._sslForwardProxy),
      ssl_forward_proxy_bypass: cdktf.stringToTerraform(this._sslForwardProxyBypass),
      ssl_sign_hash: cdktf.stringToTerraform(this._sslSignHash),
      strict_resume: cdktf.stringToTerraform(this._strictResume),
      tm_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tmOptions),
      unclean_shutdown: cdktf.stringToTerraform(this._uncleanShutdown),
      untrusted_cert_response_control: cdktf.stringToTerraform(this._untrustedCertResponseControl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_timeout: {
        value: cdktf.stringToHclTerraform(this._alertTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticate: {
        value: cdktf.stringToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticate_depth: {
        value: cdktf.numberToHclTerraform(this._authenticateDepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      c3d_ca_cert: {
        value: cdktf.stringToHclTerraform(this._c3DCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      c3d_ca_key: {
        value: cdktf.stringToHclTerraform(this._c3DCaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      c3d_ca_passphrase: {
        value: cdktf.stringToHclTerraform(this._c3DCaPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      c3d_cert_extension_custom_oids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._c3DCertExtensionCustomOids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      c3d_cert_extension_includes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._c3DCertExtensionIncludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      c3d_cert_lifespan: {
        value: cdktf.numberToHclTerraform(this._c3DCertLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      c3d_certificate_extensions: {
        value: cdktf.stringToHclTerraform(this._c3DCertificateExtensions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_file: {
        value: cdktf.stringToHclTerraform(this._caFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_size: {
        value: cdktf.numberToHclTerraform(this._cacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_timeout: {
        value: cdktf.numberToHclTerraform(this._cacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chain: {
        value: cdktf.stringToHclTerraform(this._chain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher_group: {
        value: cdktf.stringToHclTerraform(this._cipherGroup),
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
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire_cert_response_control: {
        value: cdktf.stringToHclTerraform(this._expireCertResponseControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_path: {
        value: cdktf.stringToHclTerraform(this._fullPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generation: {
        value: cdktf.numberToHclTerraform(this._generation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generic_alert: {
        value: cdktf.stringToHclTerraform(this._genericAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handshake_timeout: {
        value: cdktf.stringToHclTerraform(this._handshakeTimeout),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mod_ssl_methods: {
        value: cdktf.stringToHclTerraform(this._modSslMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_cert_mode: {
        value: cdktf.stringToHclTerraform(this._peerCertMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_ca_cert: {
        value: cdktf.stringToHclTerraform(this._proxyCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_ca_key: {
        value: cdktf.stringToHclTerraform(this._proxyCaKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_ssl: {
        value: cdktf.stringToHclTerraform(this._proxySsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renegotiate_period: {
        value: cdktf.stringToHclTerraform(this._renegotiatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renegotiate_size: {
        value: cdktf.stringToHclTerraform(this._renegotiateSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renegotiation: {
        value: cdktf.stringToHclTerraform(this._renegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_certificate: {
        value: cdktf.stringToHclTerraform(this._retainCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_renegotiation: {
        value: cdktf.stringToHclTerraform(this._secureRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_mirroring: {
        value: cdktf.stringToHclTerraform(this._sessionMirroring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_ticket: {
        value: cdktf.stringToHclTerraform(this._sessionTicket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_default: {
        value: cdktf.stringToHclTerraform(this._sniDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_require: {
        value: cdktf.stringToHclTerraform(this._sniRequire),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_c3d: {
        value: cdktf.stringToHclTerraform(this._sslC3D),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_forward_proxy: {
        value: cdktf.stringToHclTerraform(this._sslForwardProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_forward_proxy_bypass: {
        value: cdktf.stringToHclTerraform(this._sslForwardProxyBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_sign_hash: {
        value: cdktf.stringToHclTerraform(this._sslSignHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_resume: {
        value: cdktf.stringToHclTerraform(this._strictResume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tm_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tmOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unclean_shutdown: {
        value: cdktf.stringToHclTerraform(this._uncleanShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untrusted_cert_response_control: {
        value: cdktf.stringToHclTerraform(this._untrustedCertResponseControl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
