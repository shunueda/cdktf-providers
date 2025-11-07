// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadBalanceClientSslProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_certificate_verify LoadBalanceClientSslProfile#backend_certificate_verify}
  */
  readonly backendCertificateVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_ciphers_tlsv13 LoadBalanceClientSslProfile#backend_ciphers_tlsv13}
  */
  readonly backendCiphersTlsv13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_customized_ssl_ciphers LoadBalanceClientSslProfile#backend_customized_ssl_ciphers}
  */
  readonly backendCustomizedSslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_customized_ssl_ciphers_flag LoadBalanceClientSslProfile#backend_customized_ssl_ciphers_flag}
  */
  readonly backendCustomizedSslCiphersFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_ssl_allowed_versions LoadBalanceClientSslProfile#backend_ssl_allowed_versions}
  */
  readonly backendSslAllowedVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_ssl_ciphers LoadBalanceClientSslProfile#backend_ssl_ciphers}
  */
  readonly backendSslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_ssl_ocsp_stapling_support LoadBalanceClientSslProfile#backend_ssl_ocsp_stapling_support}
  */
  readonly backendSslOcspStaplingSupport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#backend_ssl_sni_forward LoadBalanceClientSslProfile#backend_ssl_sni_forward}
  */
  readonly backendSslSniForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#client_certificate_verify LoadBalanceClientSslProfile#client_certificate_verify}
  */
  readonly clientCertificateVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#client_certificate_verify_mode LoadBalanceClientSslProfile#client_certificate_verify_mode}
  */
  readonly clientCertificateVerifyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#client_sni_required LoadBalanceClientSslProfile#client_sni_required}
  */
  readonly clientSniRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#customized_ssl_ciphers LoadBalanceClientSslProfile#customized_ssl_ciphers}
  */
  readonly customizedSslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#customized_ssl_ciphers_flag LoadBalanceClientSslProfile#customized_ssl_ciphers_flag}
  */
  readonly customizedSslCiphersFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#forward_proxy LoadBalanceClientSslProfile#forward_proxy}
  */
  readonly forwardProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#forward_proxy_certificate_caching LoadBalanceClientSslProfile#forward_proxy_certificate_caching}
  */
  readonly forwardProxyCertificateCaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#forward_proxy_intermediate_ca_group LoadBalanceClientSslProfile#forward_proxy_intermediate_ca_group}
  */
  readonly forwardProxyIntermediateCaGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#forward_proxy_local_signing_ca LoadBalanceClientSslProfile#forward_proxy_local_signing_ca}
  */
  readonly forwardProxyLocalSigningCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#http_forward_client_certificate LoadBalanceClientSslProfile#http_forward_client_certificate}
  */
  readonly httpForwardClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#http_forward_client_certificate_header LoadBalanceClientSslProfile#http_forward_client_certificate_header}
  */
  readonly httpForwardClientCertificateHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#id LoadBalanceClientSslProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#local_certificate_group LoadBalanceClientSslProfile#local_certificate_group}
  */
  readonly localCertificateGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#mkey LoadBalanceClientSslProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#reject_ocsp_stapling_with_missing_nextupdate LoadBalanceClientSslProfile#reject_ocsp_stapling_with_missing_nextupdate}
  */
  readonly rejectOcspStaplingWithMissingNextupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#rfc7919_comply LoadBalanceClientSslProfile#rfc7919_comply}
  */
  readonly rfc7919Comply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_allowed_versions LoadBalanceClientSslProfile#ssl_allowed_versions}
  */
  readonly sslAllowedVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_ciphers LoadBalanceClientSslProfile#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_ciphers_tlsv13 LoadBalanceClientSslProfile#ssl_ciphers_tlsv13}
  */
  readonly sslCiphersTlsv13?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_dh_param_size LoadBalanceClientSslProfile#ssl_dh_param_size}
  */
  readonly sslDhParamSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_dynamic_record_sizing LoadBalanceClientSslProfile#ssl_dynamic_record_sizing}
  */
  readonly sslDynamicRecordSizing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_renegotiate_period LoadBalanceClientSslProfile#ssl_renegotiate_period}
  */
  readonly sslRenegotiatePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_renegotiate_size LoadBalanceClientSslProfile#ssl_renegotiate_size}
  */
  readonly sslRenegotiateSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_renegotiation LoadBalanceClientSslProfile#ssl_renegotiation}
  */
  readonly sslRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_renegotiation_interval LoadBalanceClientSslProfile#ssl_renegotiation_interval}
  */
  readonly sslRenegotiationInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_secure_renegotiation LoadBalanceClientSslProfile#ssl_secure_renegotiation}
  */
  readonly sslSecureRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#ssl_session_cache_flag LoadBalanceClientSslProfile#ssl_session_cache_flag}
  */
  readonly sslSessionCacheFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#supported_groups LoadBalanceClientSslProfile#supported_groups}
  */
  readonly supportedGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#use_tls_tickets LoadBalanceClientSslProfile#use_tls_tickets}
  */
  readonly useTlsTickets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#vdom LoadBalanceClientSslProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile fortiadc_load_balance_client_ssl_profile}
*/
export class LoadBalanceClientSslProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_load_balance_client_ssl_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoadBalanceClientSslProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoadBalanceClientSslProfile to import
  * @param importFromId The id of the existing LoadBalanceClientSslProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoadBalanceClientSslProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_load_balance_client_ssl_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/load_balance_client_ssl_profile fortiadc_load_balance_client_ssl_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadBalanceClientSslProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LoadBalanceClientSslProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_load_balance_client_ssl_profile',
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
    this._backendCertificateVerify = config.backendCertificateVerify;
    this._backendCiphersTlsv13 = config.backendCiphersTlsv13;
    this._backendCustomizedSslCiphers = config.backendCustomizedSslCiphers;
    this._backendCustomizedSslCiphersFlag = config.backendCustomizedSslCiphersFlag;
    this._backendSslAllowedVersions = config.backendSslAllowedVersions;
    this._backendSslCiphers = config.backendSslCiphers;
    this._backendSslOcspStaplingSupport = config.backendSslOcspStaplingSupport;
    this._backendSslSniForward = config.backendSslSniForward;
    this._clientCertificateVerify = config.clientCertificateVerify;
    this._clientCertificateVerifyMode = config.clientCertificateVerifyMode;
    this._clientSniRequired = config.clientSniRequired;
    this._customizedSslCiphers = config.customizedSslCiphers;
    this._customizedSslCiphersFlag = config.customizedSslCiphersFlag;
    this._forwardProxy = config.forwardProxy;
    this._forwardProxyCertificateCaching = config.forwardProxyCertificateCaching;
    this._forwardProxyIntermediateCaGroup = config.forwardProxyIntermediateCaGroup;
    this._forwardProxyLocalSigningCa = config.forwardProxyLocalSigningCa;
    this._httpForwardClientCertificate = config.httpForwardClientCertificate;
    this._httpForwardClientCertificateHeader = config.httpForwardClientCertificateHeader;
    this._id = config.id;
    this._localCertificateGroup = config.localCertificateGroup;
    this._mkey = config.mkey;
    this._rejectOcspStaplingWithMissingNextupdate = config.rejectOcspStaplingWithMissingNextupdate;
    this._rfc7919Comply = config.rfc7919Comply;
    this._sslAllowedVersions = config.sslAllowedVersions;
    this._sslCiphers = config.sslCiphers;
    this._sslCiphersTlsv13 = config.sslCiphersTlsv13;
    this._sslDhParamSize = config.sslDhParamSize;
    this._sslDynamicRecordSizing = config.sslDynamicRecordSizing;
    this._sslRenegotiatePeriod = config.sslRenegotiatePeriod;
    this._sslRenegotiateSize = config.sslRenegotiateSize;
    this._sslRenegotiation = config.sslRenegotiation;
    this._sslRenegotiationInterval = config.sslRenegotiationInterval;
    this._sslSecureRenegotiation = config.sslSecureRenegotiation;
    this._sslSessionCacheFlag = config.sslSessionCacheFlag;
    this._supportedGroups = config.supportedGroups;
    this._useTlsTickets = config.useTlsTickets;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_certificate_verify - computed: true, optional: true, required: false
  private _backendCertificateVerify?: string; 
  public get backendCertificateVerify() {
    return this.getStringAttribute('backend_certificate_verify');
  }
  public set backendCertificateVerify(value: string) {
    this._backendCertificateVerify = value;
  }
  public resetBackendCertificateVerify() {
    this._backendCertificateVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendCertificateVerifyInput() {
    return this._backendCertificateVerify;
  }

  // backend_ciphers_tlsv13 - computed: true, optional: true, required: false
  private _backendCiphersTlsv13?: string; 
  public get backendCiphersTlsv13() {
    return this.getStringAttribute('backend_ciphers_tlsv13');
  }
  public set backendCiphersTlsv13(value: string) {
    this._backendCiphersTlsv13 = value;
  }
  public resetBackendCiphersTlsv13() {
    this._backendCiphersTlsv13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendCiphersTlsv13Input() {
    return this._backendCiphersTlsv13;
  }

  // backend_customized_ssl_ciphers - computed: true, optional: true, required: false
  private _backendCustomizedSslCiphers?: string; 
  public get backendCustomizedSslCiphers() {
    return this.getStringAttribute('backend_customized_ssl_ciphers');
  }
  public set backendCustomizedSslCiphers(value: string) {
    this._backendCustomizedSslCiphers = value;
  }
  public resetBackendCustomizedSslCiphers() {
    this._backendCustomizedSslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendCustomizedSslCiphersInput() {
    return this._backendCustomizedSslCiphers;
  }

  // backend_customized_ssl_ciphers_flag - computed: true, optional: true, required: false
  private _backendCustomizedSslCiphersFlag?: string; 
  public get backendCustomizedSslCiphersFlag() {
    return this.getStringAttribute('backend_customized_ssl_ciphers_flag');
  }
  public set backendCustomizedSslCiphersFlag(value: string) {
    this._backendCustomizedSslCiphersFlag = value;
  }
  public resetBackendCustomizedSslCiphersFlag() {
    this._backendCustomizedSslCiphersFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendCustomizedSslCiphersFlagInput() {
    return this._backendCustomizedSslCiphersFlag;
  }

  // backend_ssl_allowed_versions - computed: true, optional: true, required: false
  private _backendSslAllowedVersions?: string; 
  public get backendSslAllowedVersions() {
    return this.getStringAttribute('backend_ssl_allowed_versions');
  }
  public set backendSslAllowedVersions(value: string) {
    this._backendSslAllowedVersions = value;
  }
  public resetBackendSslAllowedVersions() {
    this._backendSslAllowedVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSslAllowedVersionsInput() {
    return this._backendSslAllowedVersions;
  }

  // backend_ssl_ciphers - computed: true, optional: true, required: false
  private _backendSslCiphers?: string; 
  public get backendSslCiphers() {
    return this.getStringAttribute('backend_ssl_ciphers');
  }
  public set backendSslCiphers(value: string) {
    this._backendSslCiphers = value;
  }
  public resetBackendSslCiphers() {
    this._backendSslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSslCiphersInput() {
    return this._backendSslCiphers;
  }

  // backend_ssl_ocsp_stapling_support - computed: true, optional: true, required: false
  private _backendSslOcspStaplingSupport?: string; 
  public get backendSslOcspStaplingSupport() {
    return this.getStringAttribute('backend_ssl_ocsp_stapling_support');
  }
  public set backendSslOcspStaplingSupport(value: string) {
    this._backendSslOcspStaplingSupport = value;
  }
  public resetBackendSslOcspStaplingSupport() {
    this._backendSslOcspStaplingSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSslOcspStaplingSupportInput() {
    return this._backendSslOcspStaplingSupport;
  }

  // backend_ssl_sni_forward - computed: true, optional: true, required: false
  private _backendSslSniForward?: string; 
  public get backendSslSniForward() {
    return this.getStringAttribute('backend_ssl_sni_forward');
  }
  public set backendSslSniForward(value: string) {
    this._backendSslSniForward = value;
  }
  public resetBackendSslSniForward() {
    this._backendSslSniForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSslSniForwardInput() {
    return this._backendSslSniForward;
  }

  // client_certificate_verify - computed: true, optional: true, required: false
  private _clientCertificateVerify?: string; 
  public get clientCertificateVerify() {
    return this.getStringAttribute('client_certificate_verify');
  }
  public set clientCertificateVerify(value: string) {
    this._clientCertificateVerify = value;
  }
  public resetClientCertificateVerify() {
    this._clientCertificateVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateVerifyInput() {
    return this._clientCertificateVerify;
  }

  // client_certificate_verify_mode - computed: true, optional: true, required: false
  private _clientCertificateVerifyMode?: string; 
  public get clientCertificateVerifyMode() {
    return this.getStringAttribute('client_certificate_verify_mode');
  }
  public set clientCertificateVerifyMode(value: string) {
    this._clientCertificateVerifyMode = value;
  }
  public resetClientCertificateVerifyMode() {
    this._clientCertificateVerifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateVerifyModeInput() {
    return this._clientCertificateVerifyMode;
  }

  // client_sni_required - computed: true, optional: true, required: false
  private _clientSniRequired?: string; 
  public get clientSniRequired() {
    return this.getStringAttribute('client_sni_required');
  }
  public set clientSniRequired(value: string) {
    this._clientSniRequired = value;
  }
  public resetClientSniRequired() {
    this._clientSniRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSniRequiredInput() {
    return this._clientSniRequired;
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

  // forward_proxy - computed: true, optional: true, required: false
  private _forwardProxy?: string; 
  public get forwardProxy() {
    return this.getStringAttribute('forward_proxy');
  }
  public set forwardProxy(value: string) {
    this._forwardProxy = value;
  }
  public resetForwardProxy() {
    this._forwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyInput() {
    return this._forwardProxy;
  }

  // forward_proxy_certificate_caching - computed: true, optional: true, required: false
  private _forwardProxyCertificateCaching?: string; 
  public get forwardProxyCertificateCaching() {
    return this.getStringAttribute('forward_proxy_certificate_caching');
  }
  public set forwardProxyCertificateCaching(value: string) {
    this._forwardProxyCertificateCaching = value;
  }
  public resetForwardProxyCertificateCaching() {
    this._forwardProxyCertificateCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyCertificateCachingInput() {
    return this._forwardProxyCertificateCaching;
  }

  // forward_proxy_intermediate_ca_group - computed: true, optional: true, required: false
  private _forwardProxyIntermediateCaGroup?: string; 
  public get forwardProxyIntermediateCaGroup() {
    return this.getStringAttribute('forward_proxy_intermediate_ca_group');
  }
  public set forwardProxyIntermediateCaGroup(value: string) {
    this._forwardProxyIntermediateCaGroup = value;
  }
  public resetForwardProxyIntermediateCaGroup() {
    this._forwardProxyIntermediateCaGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyIntermediateCaGroupInput() {
    return this._forwardProxyIntermediateCaGroup;
  }

  // forward_proxy_local_signing_ca - computed: true, optional: true, required: false
  private _forwardProxyLocalSigningCa?: string; 
  public get forwardProxyLocalSigningCa() {
    return this.getStringAttribute('forward_proxy_local_signing_ca');
  }
  public set forwardProxyLocalSigningCa(value: string) {
    this._forwardProxyLocalSigningCa = value;
  }
  public resetForwardProxyLocalSigningCa() {
    this._forwardProxyLocalSigningCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyLocalSigningCaInput() {
    return this._forwardProxyLocalSigningCa;
  }

  // http_forward_client_certificate - computed: true, optional: true, required: false
  private _httpForwardClientCertificate?: string; 
  public get httpForwardClientCertificate() {
    return this.getStringAttribute('http_forward_client_certificate');
  }
  public set httpForwardClientCertificate(value: string) {
    this._httpForwardClientCertificate = value;
  }
  public resetHttpForwardClientCertificate() {
    this._httpForwardClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpForwardClientCertificateInput() {
    return this._httpForwardClientCertificate;
  }

  // http_forward_client_certificate_header - computed: true, optional: true, required: false
  private _httpForwardClientCertificateHeader?: string; 
  public get httpForwardClientCertificateHeader() {
    return this.getStringAttribute('http_forward_client_certificate_header');
  }
  public set httpForwardClientCertificateHeader(value: string) {
    this._httpForwardClientCertificateHeader = value;
  }
  public resetHttpForwardClientCertificateHeader() {
    this._httpForwardClientCertificateHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpForwardClientCertificateHeaderInput() {
    return this._httpForwardClientCertificateHeader;
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

  // local_certificate_group - computed: true, optional: true, required: false
  private _localCertificateGroup?: string; 
  public get localCertificateGroup() {
    return this.getStringAttribute('local_certificate_group');
  }
  public set localCertificateGroup(value: string) {
    this._localCertificateGroup = value;
  }
  public resetLocalCertificateGroup() {
    this._localCertificateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertificateGroupInput() {
    return this._localCertificateGroup;
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

  // reject_ocsp_stapling_with_missing_nextupdate - computed: true, optional: true, required: false
  private _rejectOcspStaplingWithMissingNextupdate?: string; 
  public get rejectOcspStaplingWithMissingNextupdate() {
    return this.getStringAttribute('reject_ocsp_stapling_with_missing_nextupdate');
  }
  public set rejectOcspStaplingWithMissingNextupdate(value: string) {
    this._rejectOcspStaplingWithMissingNextupdate = value;
  }
  public resetRejectOcspStaplingWithMissingNextupdate() {
    this._rejectOcspStaplingWithMissingNextupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectOcspStaplingWithMissingNextupdateInput() {
    return this._rejectOcspStaplingWithMissingNextupdate;
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

  // ssl_allowed_versions - computed: true, optional: true, required: false
  private _sslAllowedVersions?: string; 
  public get sslAllowedVersions() {
    return this.getStringAttribute('ssl_allowed_versions');
  }
  public set sslAllowedVersions(value: string) {
    this._sslAllowedVersions = value;
  }
  public resetSslAllowedVersions() {
    this._sslAllowedVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAllowedVersionsInput() {
    return this._sslAllowedVersions;
  }

  // ssl_ciphers - computed: true, optional: true, required: false
  private _sslCiphers?: string; 
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }
  public set sslCiphers(value: string) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers;
  }

  // ssl_ciphers_tlsv13 - computed: true, optional: true, required: false
  private _sslCiphersTlsv13?: string; 
  public get sslCiphersTlsv13() {
    return this.getStringAttribute('ssl_ciphers_tlsv13');
  }
  public set sslCiphersTlsv13(value: string) {
    this._sslCiphersTlsv13 = value;
  }
  public resetSslCiphersTlsv13() {
    this._sslCiphersTlsv13 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersTlsv13Input() {
    return this._sslCiphersTlsv13;
  }

  // ssl_dh_param_size - computed: true, optional: true, required: false
  private _sslDhParamSize?: string; 
  public get sslDhParamSize() {
    return this.getStringAttribute('ssl_dh_param_size');
  }
  public set sslDhParamSize(value: string) {
    this._sslDhParamSize = value;
  }
  public resetSslDhParamSize() {
    this._sslDhParamSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDhParamSizeInput() {
    return this._sslDhParamSize;
  }

  // ssl_dynamic_record_sizing - computed: true, optional: true, required: false
  private _sslDynamicRecordSizing?: string; 
  public get sslDynamicRecordSizing() {
    return this.getStringAttribute('ssl_dynamic_record_sizing');
  }
  public set sslDynamicRecordSizing(value: string) {
    this._sslDynamicRecordSizing = value;
  }
  public resetSslDynamicRecordSizing() {
    this._sslDynamicRecordSizing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDynamicRecordSizingInput() {
    return this._sslDynamicRecordSizing;
  }

  // ssl_renegotiate_period - computed: true, optional: true, required: false
  private _sslRenegotiatePeriod?: string; 
  public get sslRenegotiatePeriod() {
    return this.getStringAttribute('ssl_renegotiate_period');
  }
  public set sslRenegotiatePeriod(value: string) {
    this._sslRenegotiatePeriod = value;
  }
  public resetSslRenegotiatePeriod() {
    this._sslRenegotiatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRenegotiatePeriodInput() {
    return this._sslRenegotiatePeriod;
  }

  // ssl_renegotiate_size - computed: true, optional: true, required: false
  private _sslRenegotiateSize?: string; 
  public get sslRenegotiateSize() {
    return this.getStringAttribute('ssl_renegotiate_size');
  }
  public set sslRenegotiateSize(value: string) {
    this._sslRenegotiateSize = value;
  }
  public resetSslRenegotiateSize() {
    this._sslRenegotiateSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRenegotiateSizeInput() {
    return this._sslRenegotiateSize;
  }

  // ssl_renegotiation - computed: true, optional: true, required: false
  private _sslRenegotiation?: string; 
  public get sslRenegotiation() {
    return this.getStringAttribute('ssl_renegotiation');
  }
  public set sslRenegotiation(value: string) {
    this._sslRenegotiation = value;
  }
  public resetSslRenegotiation() {
    this._sslRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRenegotiationInput() {
    return this._sslRenegotiation;
  }

  // ssl_renegotiation_interval - computed: true, optional: true, required: false
  private _sslRenegotiationInterval?: string; 
  public get sslRenegotiationInterval() {
    return this.getStringAttribute('ssl_renegotiation_interval');
  }
  public set sslRenegotiationInterval(value: string) {
    this._sslRenegotiationInterval = value;
  }
  public resetSslRenegotiationInterval() {
    this._sslRenegotiationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRenegotiationIntervalInput() {
    return this._sslRenegotiationInterval;
  }

  // ssl_secure_renegotiation - computed: true, optional: true, required: false
  private _sslSecureRenegotiation?: string; 
  public get sslSecureRenegotiation() {
    return this.getStringAttribute('ssl_secure_renegotiation');
  }
  public set sslSecureRenegotiation(value: string) {
    this._sslSecureRenegotiation = value;
  }
  public resetSslSecureRenegotiation() {
    this._sslSecureRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecureRenegotiationInput() {
    return this._sslSecureRenegotiation;
  }

  // ssl_session_cache_flag - computed: true, optional: true, required: false
  private _sslSessionCacheFlag?: string; 
  public get sslSessionCacheFlag() {
    return this.getStringAttribute('ssl_session_cache_flag');
  }
  public set sslSessionCacheFlag(value: string) {
    this._sslSessionCacheFlag = value;
  }
  public resetSslSessionCacheFlag() {
    this._sslSessionCacheFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionCacheFlagInput() {
    return this._sslSessionCacheFlag;
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

  // use_tls_tickets - computed: true, optional: true, required: false
  private _useTlsTickets?: string; 
  public get useTlsTickets() {
    return this.getStringAttribute('use_tls_tickets');
  }
  public set useTlsTickets(value: string) {
    this._useTlsTickets = value;
  }
  public resetUseTlsTickets() {
    this._useTlsTickets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsTicketsInput() {
    return this._useTlsTickets;
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
      backend_certificate_verify: cdktf.stringToTerraform(this._backendCertificateVerify),
      backend_ciphers_tlsv13: cdktf.stringToTerraform(this._backendCiphersTlsv13),
      backend_customized_ssl_ciphers: cdktf.stringToTerraform(this._backendCustomizedSslCiphers),
      backend_customized_ssl_ciphers_flag: cdktf.stringToTerraform(this._backendCustomizedSslCiphersFlag),
      backend_ssl_allowed_versions: cdktf.stringToTerraform(this._backendSslAllowedVersions),
      backend_ssl_ciphers: cdktf.stringToTerraform(this._backendSslCiphers),
      backend_ssl_ocsp_stapling_support: cdktf.stringToTerraform(this._backendSslOcspStaplingSupport),
      backend_ssl_sni_forward: cdktf.stringToTerraform(this._backendSslSniForward),
      client_certificate_verify: cdktf.stringToTerraform(this._clientCertificateVerify),
      client_certificate_verify_mode: cdktf.stringToTerraform(this._clientCertificateVerifyMode),
      client_sni_required: cdktf.stringToTerraform(this._clientSniRequired),
      customized_ssl_ciphers: cdktf.stringToTerraform(this._customizedSslCiphers),
      customized_ssl_ciphers_flag: cdktf.stringToTerraform(this._customizedSslCiphersFlag),
      forward_proxy: cdktf.stringToTerraform(this._forwardProxy),
      forward_proxy_certificate_caching: cdktf.stringToTerraform(this._forwardProxyCertificateCaching),
      forward_proxy_intermediate_ca_group: cdktf.stringToTerraform(this._forwardProxyIntermediateCaGroup),
      forward_proxy_local_signing_ca: cdktf.stringToTerraform(this._forwardProxyLocalSigningCa),
      http_forward_client_certificate: cdktf.stringToTerraform(this._httpForwardClientCertificate),
      http_forward_client_certificate_header: cdktf.stringToTerraform(this._httpForwardClientCertificateHeader),
      id: cdktf.stringToTerraform(this._id),
      local_certificate_group: cdktf.stringToTerraform(this._localCertificateGroup),
      mkey: cdktf.stringToTerraform(this._mkey),
      reject_ocsp_stapling_with_missing_nextupdate: cdktf.stringToTerraform(this._rejectOcspStaplingWithMissingNextupdate),
      rfc7919_comply: cdktf.stringToTerraform(this._rfc7919Comply),
      ssl_allowed_versions: cdktf.stringToTerraform(this._sslAllowedVersions),
      ssl_ciphers: cdktf.stringToTerraform(this._sslCiphers),
      ssl_ciphers_tlsv13: cdktf.stringToTerraform(this._sslCiphersTlsv13),
      ssl_dh_param_size: cdktf.stringToTerraform(this._sslDhParamSize),
      ssl_dynamic_record_sizing: cdktf.stringToTerraform(this._sslDynamicRecordSizing),
      ssl_renegotiate_period: cdktf.stringToTerraform(this._sslRenegotiatePeriod),
      ssl_renegotiate_size: cdktf.stringToTerraform(this._sslRenegotiateSize),
      ssl_renegotiation: cdktf.stringToTerraform(this._sslRenegotiation),
      ssl_renegotiation_interval: cdktf.stringToTerraform(this._sslRenegotiationInterval),
      ssl_secure_renegotiation: cdktf.stringToTerraform(this._sslSecureRenegotiation),
      ssl_session_cache_flag: cdktf.stringToTerraform(this._sslSessionCacheFlag),
      supported_groups: cdktf.stringToTerraform(this._supportedGroups),
      use_tls_tickets: cdktf.stringToTerraform(this._useTlsTickets),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_certificate_verify: {
        value: cdktf.stringToHclTerraform(this._backendCertificateVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_ciphers_tlsv13: {
        value: cdktf.stringToHclTerraform(this._backendCiphersTlsv13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_customized_ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._backendCustomizedSslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_customized_ssl_ciphers_flag: {
        value: cdktf.stringToHclTerraform(this._backendCustomizedSslCiphersFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_ssl_allowed_versions: {
        value: cdktf.stringToHclTerraform(this._backendSslAllowedVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._backendSslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_ssl_ocsp_stapling_support: {
        value: cdktf.stringToHclTerraform(this._backendSslOcspStaplingSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_ssl_sni_forward: {
        value: cdktf.stringToHclTerraform(this._backendSslSniForward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_verify: {
        value: cdktf.stringToHclTerraform(this._clientCertificateVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate_verify_mode: {
        value: cdktf.stringToHclTerraform(this._clientCertificateVerifyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_sni_required: {
        value: cdktf.stringToHclTerraform(this._clientSniRequired),
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
      forward_proxy: {
        value: cdktf.stringToHclTerraform(this._forwardProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_certificate_caching: {
        value: cdktf.stringToHclTerraform(this._forwardProxyCertificateCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_intermediate_ca_group: {
        value: cdktf.stringToHclTerraform(this._forwardProxyIntermediateCaGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_proxy_local_signing_ca: {
        value: cdktf.stringToHclTerraform(this._forwardProxyLocalSigningCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_forward_client_certificate: {
        value: cdktf.stringToHclTerraform(this._httpForwardClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_forward_client_certificate_header: {
        value: cdktf.stringToHclTerraform(this._httpForwardClientCertificateHeader),
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
      local_certificate_group: {
        value: cdktf.stringToHclTerraform(this._localCertificateGroup),
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
      reject_ocsp_stapling_with_missing_nextupdate: {
        value: cdktf.stringToHclTerraform(this._rejectOcspStaplingWithMissingNextupdate),
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
      ssl_allowed_versions: {
        value: cdktf.stringToHclTerraform(this._sslAllowedVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._sslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ciphers_tlsv13: {
        value: cdktf.stringToHclTerraform(this._sslCiphersTlsv13),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_dh_param_size: {
        value: cdktf.stringToHclTerraform(this._sslDhParamSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_dynamic_record_sizing: {
        value: cdktf.stringToHclTerraform(this._sslDynamicRecordSizing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_renegotiate_period: {
        value: cdktf.stringToHclTerraform(this._sslRenegotiatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_renegotiate_size: {
        value: cdktf.stringToHclTerraform(this._sslRenegotiateSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_renegotiation: {
        value: cdktf.stringToHclTerraform(this._sslRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_renegotiation_interval: {
        value: cdktf.stringToHclTerraform(this._sslRenegotiationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_secure_renegotiation: {
        value: cdktf.stringToHclTerraform(this._sslSecureRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_session_cache_flag: {
        value: cdktf.stringToHclTerraform(this._sslSessionCacheFlag),
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
      use_tls_tickets: {
        value: cdktf.stringToHclTerraform(this._useTlsTickets),
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
