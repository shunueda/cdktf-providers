// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceRealServerSslProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#allow_ssl_versions LoadBalanceRealServerSslProfile#allow_ssl_versions}
  */
  readonly allowSslVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#cert_verify LoadBalanceRealServerSslProfile#cert_verify}
  */
  readonly certVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#ciphers_tlsv13 LoadBalanceRealServerSslProfile#ciphers_tlsv13}
  */
  readonly ciphersTlsv13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#customized_ssl_ciphers LoadBalanceRealServerSslProfile#customized_ssl_ciphers}
  */
  readonly customizedSslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#customized_ssl_ciphers_flag LoadBalanceRealServerSslProfile#customized_ssl_ciphers_flag}
  */
  readonly customizedSslCiphersFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#id LoadBalanceRealServerSslProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#local_cert LoadBalanceRealServerSslProfile#local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#mkey LoadBalanceRealServerSslProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#new_ssl_ciphers_long LoadBalanceRealServerSslProfile#new_ssl_ciphers_long}
  */
  readonly newSslCiphersLong?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#renegotiate_period LoadBalanceRealServerSslProfile#renegotiate_period}
  */
  readonly renegotiatePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#renegotiate_size LoadBalanceRealServerSslProfile#renegotiate_size}
  */
  readonly renegotiateSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#renegotiation LoadBalanceRealServerSslProfile#renegotiation}
  */
  readonly renegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#renegotiation_deny_action LoadBalanceRealServerSslProfile#renegotiation_deny_action}
  */
  readonly renegotiationDenyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#rfc7919_comply LoadBalanceRealServerSslProfile#rfc7919_comply}
  */
  readonly rfc7919Comply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#secure_renegotiation LoadBalanceRealServerSslProfile#secure_renegotiation}
  */
  readonly secureRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#server_ocsp_stapling LoadBalanceRealServerSslProfile#server_ocsp_stapling}
  */
  readonly serverOcspStapling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#session_reuse_flag LoadBalanceRealServerSslProfile#session_reuse_flag}
  */
  readonly sessionReuseFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#session_reuse_limit LoadBalanceRealServerSslProfile#session_reuse_limit}
  */
  readonly sessionReuseLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#sni LoadBalanceRealServerSslProfile#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#sni_forward_flag LoadBalanceRealServerSslProfile#sni_forward_flag}
  */
  readonly sniForwardFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#ssl LoadBalanceRealServerSslProfile#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#supported_groups LoadBalanceRealServerSslProfile#supported_groups}
  */
  readonly supportedGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#tls_ticket_flag LoadBalanceRealServerSslProfile#tls_ticket_flag}
  */
  readonly tlsTicketFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#vdom LoadBalanceRealServerSslProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile fortiadc_load_balance_real_server_ssl_profile}
*/
export class LoadBalanceRealServerSslProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_real_server_ssl_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceRealServerSslProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceRealServerSslProfile to import
  * @param importFromId The id of the existing LoadBalanceRealServerSslProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceRealServerSslProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_real_server_ssl_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_real_server_ssl_profile fortiadc_load_balance_real_server_ssl_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceRealServerSslProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceRealServerSslProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_real_server_ssl_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSslVersions = config.allowSslVersions;
    this._certVerify = config.certVerify;
    this._ciphersTlsv13 = config.ciphersTlsv13;
    this._customizedSslCiphers = config.customizedSslCiphers;
    this._customizedSslCiphersFlag = config.customizedSslCiphersFlag;
    this._id = config.id;
    this._localCert = config.localCert;
    this._mkey = config.mkey;
    this._newSslCiphersLong = config.newSslCiphersLong;
    this._renegotiatePeriod = config.renegotiatePeriod;
    this._renegotiateSize = config.renegotiateSize;
    this._renegotiation = config.renegotiation;
    this._renegotiationDenyAction = config.renegotiationDenyAction;
    this._rfc7919Comply = config.rfc7919Comply;
    this._secureRenegotiation = config.secureRenegotiation;
    this._serverOcspStapling = config.serverOcspStapling;
    this._sessionReuseFlag = config.sessionReuseFlag;
    this._sessionReuseLimit = config.sessionReuseLimit;
    this._sni = config.sni;
    this._sniForwardFlag = config.sniForwardFlag;
    this._ssl = config.ssl;
    this._supportedGroups = config.supportedGroups;
    this._tlsTicketFlag = config.tlsTicketFlag;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ssl_versions - computed: true, optional: true, required: false
  private _allowSslVersions?: string; 
  public get allowSslVersions() {
    return this.getStringAttribute('allow_ssl_versions');
  }
  public set allowSslVersions(value: string) {
    this._allowSslVersions = value;
  }
  public resetAllowSslVersions() {
    this._allowSslVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSslVersionsInput() {
    return this._allowSslVersions;
  }

  // cert_verify - computed: true, optional: true, required: false
  private _certVerify?: string; 
  public get certVerify() {
    return this.getStringAttribute('cert_verify');
  }
  public set certVerify(value: string) {
    this._certVerify = value;
  }
  public resetCertVerify() {
    this._certVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certVerifyInput() {
    return this._certVerify;
  }

  // ciphers_tlsv13 - computed: true, optional: true, required: false
  private _ciphersTlsv13?: string; 
  public get ciphersTlsv13() {
    return this.getStringAttribute('ciphers_tlsv13');
  }
  public set ciphersTlsv13(value: string) {
    this._ciphersTlsv13 = value;
  }
  public resetCiphersTlsv13() {
    this._ciphersTlsv13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersTlsv13Input() {
    return this._ciphersTlsv13;
  }

  // customized_ssl_ciphers - computed: true, optional: true, required: false
  private _customizedSslCiphers?: string; 
  public get customizedSslCiphers() {
    return this.getStringAttribute('customized_ssl_ciphers');
  }
  public set customizedSslCiphers(value: string) {
    this._customizedSslCiphers = value;
  }
  public resetCustomizedSslCiphers() {
    this._customizedSslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedSslCiphersInput() {
    return this._customizedSslCiphers;
  }

  // customized_ssl_ciphers_flag - computed: true, optional: true, required: false
  private _customizedSslCiphersFlag?: string; 
  public get customizedSslCiphersFlag() {
    return this.getStringAttribute('customized_ssl_ciphers_flag');
  }
  public set customizedSslCiphersFlag(value: string) {
    this._customizedSslCiphersFlag = value;
  }
  public resetCustomizedSslCiphersFlag() {
    this._customizedSslCiphersFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizedSslCiphersFlagInput() {
    return this._customizedSslCiphersFlag;
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

  // local_cert - computed: true, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // new_ssl_ciphers_long - computed: true, optional: true, required: false
  private _newSslCiphersLong?: string; 
  public get newSslCiphersLong() {
    return this.getStringAttribute('new_ssl_ciphers_long');
  }
  public set newSslCiphersLong(value: string) {
    this._newSslCiphersLong = value;
  }
  public resetNewSslCiphersLong() {
    this._newSslCiphersLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSslCiphersLongInput() {
    return this._newSslCiphersLong;
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

  // renegotiation_deny_action - computed: true, optional: true, required: false
  private _renegotiationDenyAction?: string; 
  public get renegotiationDenyAction() {
    return this.getStringAttribute('renegotiation_deny_action');
  }
  public set renegotiationDenyAction(value: string) {
    this._renegotiationDenyAction = value;
  }
  public resetRenegotiationDenyAction() {
    this._renegotiationDenyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renegotiationDenyActionInput() {
    return this._renegotiationDenyAction;
  }

  // rfc7919_comply - computed: true, optional: true, required: false
  private _rfc7919Comply?: string; 
  public get rfc7919Comply() {
    return this.getStringAttribute('rfc7919_comply');
  }
  public set rfc7919Comply(value: string) {
    this._rfc7919Comply = value;
  }
  public resetRfc7919Comply() {
    this._rfc7919Comply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc7919ComplyInput() {
    return this._rfc7919Comply;
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

  // server_ocsp_stapling - computed: true, optional: true, required: false
  private _serverOcspStapling?: string; 
  public get serverOcspStapling() {
    return this.getStringAttribute('server_ocsp_stapling');
  }
  public set serverOcspStapling(value: string) {
    this._serverOcspStapling = value;
  }
  public resetServerOcspStapling() {
    this._serverOcspStapling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOcspStaplingInput() {
    return this._serverOcspStapling;
  }

  // session_reuse_flag - computed: true, optional: true, required: false
  private _sessionReuseFlag?: string; 
  public get sessionReuseFlag() {
    return this.getStringAttribute('session_reuse_flag');
  }
  public set sessionReuseFlag(value: string) {
    this._sessionReuseFlag = value;
  }
  public resetSessionReuseFlag() {
    this._sessionReuseFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReuseFlagInput() {
    return this._sessionReuseFlag;
  }

  // session_reuse_limit - computed: true, optional: true, required: false
  private _sessionReuseLimit?: string; 
  public get sessionReuseLimit() {
    return this.getStringAttribute('session_reuse_limit');
  }
  public set sessionReuseLimit(value: string) {
    this._sessionReuseLimit = value;
  }
  public resetSessionReuseLimit() {
    this._sessionReuseLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReuseLimitInput() {
    return this._sessionReuseLimit;
  }

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // sni_forward_flag - computed: true, optional: true, required: false
  private _sniForwardFlag?: string; 
  public get sniForwardFlag() {
    return this.getStringAttribute('sni_forward_flag');
  }
  public set sniForwardFlag(value: string) {
    this._sniForwardFlag = value;
  }
  public resetSniForwardFlag() {
    this._sniForwardFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniForwardFlagInput() {
    return this._sniForwardFlag;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // supported_groups - computed: true, optional: true, required: false
  private _supportedGroups?: string; 
  public get supportedGroups() {
    return this.getStringAttribute('supported_groups');
  }
  public set supportedGroups(value: string) {
    this._supportedGroups = value;
  }
  public resetSupportedGroups() {
    this._supportedGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedGroupsInput() {
    return this._supportedGroups;
  }

  // tls_ticket_flag - computed: true, optional: true, required: false
  private _tlsTicketFlag?: string; 
  public get tlsTicketFlag() {
    return this.getStringAttribute('tls_ticket_flag');
  }
  public set tlsTicketFlag(value: string) {
    this._tlsTicketFlag = value;
  }
  public resetTlsTicketFlag() {
    this._tlsTicketFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTicketFlagInput() {
    return this._tlsTicketFlag;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ssl_versions: cdktf.stringToTerraform(this._allowSslVersions),
      cert_verify: cdktf.stringToTerraform(this._certVerify),
      ciphers_tlsv13: cdktf.stringToTerraform(this._ciphersTlsv13),
      customized_ssl_ciphers: cdktf.stringToTerraform(this._customizedSslCiphers),
      customized_ssl_ciphers_flag: cdktf.stringToTerraform(this._customizedSslCiphersFlag),
      id: cdktf.stringToTerraform(this._id),
      local_cert: cdktf.stringToTerraform(this._localCert),
      mkey: cdktf.stringToTerraform(this._mkey),
      new_ssl_ciphers_long: cdktf.stringToTerraform(this._newSslCiphersLong),
      renegotiate_period: cdktf.stringToTerraform(this._renegotiatePeriod),
      renegotiate_size: cdktf.stringToTerraform(this._renegotiateSize),
      renegotiation: cdktf.stringToTerraform(this._renegotiation),
      renegotiation_deny_action: cdktf.stringToTerraform(this._renegotiationDenyAction),
      rfc7919_comply: cdktf.stringToTerraform(this._rfc7919Comply),
      secure_renegotiation: cdktf.stringToTerraform(this._secureRenegotiation),
      server_ocsp_stapling: cdktf.stringToTerraform(this._serverOcspStapling),
      session_reuse_flag: cdktf.stringToTerraform(this._sessionReuseFlag),
      session_reuse_limit: cdktf.stringToTerraform(this._sessionReuseLimit),
      sni: cdktf.stringToTerraform(this._sni),
      sni_forward_flag: cdktf.stringToTerraform(this._sniForwardFlag),
      ssl: cdktf.stringToTerraform(this._ssl),
      supported_groups: cdktf.stringToTerraform(this._supportedGroups),
      tls_ticket_flag: cdktf.stringToTerraform(this._tlsTicketFlag),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ssl_versions: {
        value: cdktf.stringToHclTerraform(this._allowSslVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_verify: {
        value: cdktf.stringToHclTerraform(this._certVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphers_tlsv13: {
        value: cdktf.stringToHclTerraform(this._ciphersTlsv13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._customizedSslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customized_ssl_ciphers_flag: {
        value: cdktf.stringToHclTerraform(this._customizedSslCiphersFlag),
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
      local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_ssl_ciphers_long: {
        value: cdktf.stringToHclTerraform(this._newSslCiphersLong),
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
      renegotiation_deny_action: {
        value: cdktf.stringToHclTerraform(this._renegotiationDenyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rfc7919_comply: {
        value: cdktf.stringToHclTerraform(this._rfc7919Comply),
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
      server_ocsp_stapling: {
        value: cdktf.stringToHclTerraform(this._serverOcspStapling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_reuse_flag: {
        value: cdktf.stringToHclTerraform(this._sessionReuseFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_reuse_limit: {
        value: cdktf.stringToHclTerraform(this._sessionReuseLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni: {
        value: cdktf.stringToHclTerraform(this._sni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_forward_flag: {
        value: cdktf.stringToHclTerraform(this._sniForwardFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_groups: {
        value: cdktf.stringToHclTerraform(this._supportedGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_ticket_flag: {
        value: cdktf.stringToHclTerraform(this._tlsTicketFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
