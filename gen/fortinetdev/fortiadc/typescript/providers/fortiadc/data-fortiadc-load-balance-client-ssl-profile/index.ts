// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_client_ssl_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcLoadBalanceClientSslProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_client_ssl_profile#id DataFortiadcLoadBalanceClientSslProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_client_ssl_profile#mkey DataFortiadcLoadBalanceClientSslProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_client_ssl_profile#vdom DataFortiadcLoadBalanceClientSslProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_client_ssl_profile fortiadc_load_balance_client_ssl_profile}
*/
export class DataFortiadcLoadBalanceClientSslProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_client_ssl_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcLoadBalanceClientSslProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcLoadBalanceClientSslProfile to import
  * @param importFromId The id of the existing DataFortiadcLoadBalanceClientSslProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_client_ssl_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcLoadBalanceClientSslProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_client_ssl_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/load_balance_client_ssl_profile fortiadc_load_balance_client_ssl_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcLoadBalanceClientSslProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcLoadBalanceClientSslProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_client_ssl_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
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
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_certificate_verify - computed: true, optional: false, required: false
  public get backendCertificateVerify() {
    return this.getStringAttribute('backend_certificate_verify');
  }

  // backend_ciphers_tlsv13 - computed: true, optional: false, required: false
  public get backendCiphersTlsv13() {
    return this.getStringAttribute('backend_ciphers_tlsv13');
  }

  // backend_customized_ssl_ciphers - computed: true, optional: false, required: false
  public get backendCustomizedSslCiphers() {
    return this.getStringAttribute('backend_customized_ssl_ciphers');
  }

  // backend_customized_ssl_ciphers_flag - computed: true, optional: false, required: false
  public get backendCustomizedSslCiphersFlag() {
    return this.getStringAttribute('backend_customized_ssl_ciphers_flag');
  }

  // backend_ssl_allowed_versions - computed: true, optional: false, required: false
  public get backendSslAllowedVersions() {
    return this.getStringAttribute('backend_ssl_allowed_versions');
  }

  // backend_ssl_ciphers - computed: true, optional: false, required: false
  public get backendSslCiphers() {
    return this.getStringAttribute('backend_ssl_ciphers');
  }

  // backend_ssl_ocsp_stapling_support - computed: true, optional: false, required: false
  public get backendSslOcspStaplingSupport() {
    return this.getStringAttribute('backend_ssl_ocsp_stapling_support');
  }

  // backend_ssl_sni_forward - computed: true, optional: false, required: false
  public get backendSslSniForward() {
    return this.getStringAttribute('backend_ssl_sni_forward');
  }

  // client_certificate_verify - computed: true, optional: false, required: false
  public get clientCertificateVerify() {
    return this.getStringAttribute('client_certificate_verify');
  }

  // client_certificate_verify_mode - computed: true, optional: false, required: false
  public get clientCertificateVerifyMode() {
    return this.getStringAttribute('client_certificate_verify_mode');
  }

  // client_sni_required - computed: true, optional: false, required: false
  public get clientSniRequired() {
    return this.getStringAttribute('client_sni_required');
  }

  // customized_ssl_ciphers - computed: true, optional: false, required: false
  public get customizedSslCiphers() {
    return this.getStringAttribute('customized_ssl_ciphers');
  }

  // customized_ssl_ciphers_flag - computed: true, optional: false, required: false
  public get customizedSslCiphersFlag() {
    return this.getStringAttribute('customized_ssl_ciphers_flag');
  }

  // forward_proxy - computed: true, optional: false, required: false
  public get forwardProxy() {
    return this.getStringAttribute('forward_proxy');
  }

  // forward_proxy_certificate_caching - computed: true, optional: false, required: false
  public get forwardProxyCertificateCaching() {
    return this.getStringAttribute('forward_proxy_certificate_caching');
  }

  // forward_proxy_intermediate_ca_group - computed: true, optional: false, required: false
  public get forwardProxyIntermediateCaGroup() {
    return this.getStringAttribute('forward_proxy_intermediate_ca_group');
  }

  // forward_proxy_local_signing_ca - computed: true, optional: false, required: false
  public get forwardProxyLocalSigningCa() {
    return this.getStringAttribute('forward_proxy_local_signing_ca');
  }

  // http_forward_client_certificate - computed: true, optional: false, required: false
  public get httpForwardClientCertificate() {
    return this.getStringAttribute('http_forward_client_certificate');
  }

  // http_forward_client_certificate_header - computed: true, optional: false, required: false
  public get httpForwardClientCertificateHeader() {
    return this.getStringAttribute('http_forward_client_certificate_header');
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

  // local_certificate_group - computed: true, optional: false, required: false
  public get localCertificateGroup() {
    return this.getStringAttribute('local_certificate_group');
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

  // reject_ocsp_stapling_with_missing_nextupdate - computed: true, optional: false, required: false
  public get rejectOcspStaplingWithMissingNextupdate() {
    return this.getStringAttribute('reject_ocsp_stapling_with_missing_nextupdate');
  }

  // rfc7919_comply - computed: true, optional: false, required: false
  public get rfc7919Comply() {
    return this.getStringAttribute('rfc7919_comply');
  }

  // ssl_allowed_versions - computed: true, optional: false, required: false
  public get sslAllowedVersions() {
    return this.getStringAttribute('ssl_allowed_versions');
  }

  // ssl_ciphers - computed: true, optional: false, required: false
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }

  // ssl_ciphers_tlsv13 - computed: true, optional: false, required: false
  public get sslCiphersTlsv13() {
    return this.getStringAttribute('ssl_ciphers_tlsv13');
  }

  // ssl_dh_param_size - computed: true, optional: false, required: false
  public get sslDhParamSize() {
    return this.getStringAttribute('ssl_dh_param_size');
  }

  // ssl_dynamic_record_sizing - computed: true, optional: false, required: false
  public get sslDynamicRecordSizing() {
    return this.getStringAttribute('ssl_dynamic_record_sizing');
  }

  // ssl_renegotiate_period - computed: true, optional: false, required: false
  public get sslRenegotiatePeriod() {
    return this.getStringAttribute('ssl_renegotiate_period');
  }

  // ssl_renegotiate_size - computed: true, optional: false, required: false
  public get sslRenegotiateSize() {
    return this.getStringAttribute('ssl_renegotiate_size');
  }

  // ssl_renegotiation - computed: true, optional: false, required: false
  public get sslRenegotiation() {
    return this.getStringAttribute('ssl_renegotiation');
  }

  // ssl_renegotiation_interval - computed: true, optional: false, required: false
  public get sslRenegotiationInterval() {
    return this.getStringAttribute('ssl_renegotiation_interval');
  }

  // ssl_secure_renegotiation - computed: true, optional: false, required: false
  public get sslSecureRenegotiation() {
    return this.getStringAttribute('ssl_secure_renegotiation');
  }

  // ssl_session_cache_flag - computed: true, optional: false, required: false
  public get sslSessionCacheFlag() {
    return this.getStringAttribute('ssl_session_cache_flag');
  }

  // supported_groups - computed: true, optional: false, required: false
  public get supportedGroups() {
    return this.getStringAttribute('supported_groups');
  }

  // use_tls_tickets - computed: true, optional: false, required: false
  public get useTlsTickets() {
    return this.getStringAttribute('use_tls_tickets');
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
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
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
