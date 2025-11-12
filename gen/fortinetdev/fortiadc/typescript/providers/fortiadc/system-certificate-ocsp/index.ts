// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCertificateOcspConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#accept_trusted_root_ca SystemCertificateOcsp#accept_trusted_root_ca}
  */
  readonly acceptTrustedRootCa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#ca_chain SystemCertificateOcsp#ca_chain}
  */
  readonly caChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#caching SystemCertificateOcsp#caching}
  */
  readonly caching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#caching_expire_ahead_time SystemCertificateOcsp#caching_expire_ahead_time}
  */
  readonly cachingExpireAheadTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#caching_extra_max_age_check SystemCertificateOcsp#caching_extra_max_age_check}
  */
  readonly cachingExtraMaxAgeCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#criteria_check SystemCertificateOcsp#criteria_check}
  */
  readonly criteriaCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#id SystemCertificateOcsp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#max_age SystemCertificateOcsp#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#mkey SystemCertificateOcsp#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#nonce_check SystemCertificateOcsp#nonce_check}
  */
  readonly nonceCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#reject_ocsp_response_with_missing_nextupdate SystemCertificateOcsp#reject_ocsp_response_with_missing_nextupdate}
  */
  readonly rejectOcspResponseWithMissingNextupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#remote_certificates SystemCertificateOcsp#remote_certificates}
  */
  readonly remoteCertificates?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#timeout SystemCertificateOcsp#timeout}
  */
  readonly timeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#tunnel_ip SystemCertificateOcsp#tunnel_ip}
  */
  readonly tunnelIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#tunnel_password SystemCertificateOcsp#tunnel_password}
  */
  readonly tunnelPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#tunnel_port SystemCertificateOcsp#tunnel_port}
  */
  readonly tunnelPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#tunnel_status SystemCertificateOcsp#tunnel_status}
  */
  readonly tunnelStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#tunnel_username SystemCertificateOcsp#tunnel_username}
  */
  readonly tunnelUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#url SystemCertificateOcsp#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#vdom SystemCertificateOcsp#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#verify_others SystemCertificateOcsp#verify_others}
  */
  readonly verifyOthers?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp fortiadc_system_certificate_ocsp}
*/
export class SystemCertificateOcsp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_certificate_ocsp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCertificateOcsp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCertificateOcsp to import
  * @param importFromId The id of the existing SystemCertificateOcsp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCertificateOcsp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_certificate_ocsp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_certificate_ocsp fortiadc_system_certificate_ocsp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCertificateOcspConfig
  */
  public constructor(scope: Construct, id: string, config: SystemCertificateOcspConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_certificate_ocsp',
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
    this._acceptTrustedRootCa = config.acceptTrustedRootCa;
    this._caChain = config.caChain;
    this._caching = config.caching;
    this._cachingExpireAheadTime = config.cachingExpireAheadTime;
    this._cachingExtraMaxAgeCheck = config.cachingExtraMaxAgeCheck;
    this._criteriaCheck = config.criteriaCheck;
    this._id = config.id;
    this._maxAge = config.maxAge;
    this._mkey = config.mkey;
    this._nonceCheck = config.nonceCheck;
    this._rejectOcspResponseWithMissingNextupdate = config.rejectOcspResponseWithMissingNextupdate;
    this._remoteCertificates = config.remoteCertificates;
    this._timeout = config.timeout;
    this._tunnelIp = config.tunnelIp;
    this._tunnelPassword = config.tunnelPassword;
    this._tunnelPort = config.tunnelPort;
    this._tunnelStatus = config.tunnelStatus;
    this._tunnelUsername = config.tunnelUsername;
    this._url = config.url;
    this._vdom = config.vdom;
    this._verifyOthers = config.verifyOthers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_trusted_root_ca - computed: true, optional: true, required: false
  private _acceptTrustedRootCa?: string; 
  public get acceptTrustedRootCa() {
    return this.getStringAttribute('accept_trusted_root_ca');
  }
  public set acceptTrustedRootCa(value: string) {
    this._acceptTrustedRootCa = value;
  }
  public resetAcceptTrustedRootCa() {
    this._acceptTrustedRootCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptTrustedRootCaInput() {
    return this._acceptTrustedRootCa;
  }

  // ca_chain - computed: true, optional: true, required: false
  private _caChain?: string; 
  public get caChain() {
    return this.getStringAttribute('ca_chain');
  }
  public set caChain(value: string) {
    this._caChain = value;
  }
  public resetCaChain() {
    this._caChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caChainInput() {
    return this._caChain;
  }

  // caching - computed: true, optional: true, required: false
  private _caching?: string; 
  public get caching() {
    return this.getStringAttribute('caching');
  }
  public set caching(value: string) {
    this._caching = value;
  }
  public resetCaching() {
    this._caching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingInput() {
    return this._caching;
  }

  // caching_expire_ahead_time - computed: true, optional: true, required: false
  private _cachingExpireAheadTime?: string; 
  public get cachingExpireAheadTime() {
    return this.getStringAttribute('caching_expire_ahead_time');
  }
  public set cachingExpireAheadTime(value: string) {
    this._cachingExpireAheadTime = value;
  }
  public resetCachingExpireAheadTime() {
    this._cachingExpireAheadTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingExpireAheadTimeInput() {
    return this._cachingExpireAheadTime;
  }

  // caching_extra_max_age_check - computed: true, optional: true, required: false
  private _cachingExtraMaxAgeCheck?: string; 
  public get cachingExtraMaxAgeCheck() {
    return this.getStringAttribute('caching_extra_max_age_check');
  }
  public set cachingExtraMaxAgeCheck(value: string) {
    this._cachingExtraMaxAgeCheck = value;
  }
  public resetCachingExtraMaxAgeCheck() {
    this._cachingExtraMaxAgeCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingExtraMaxAgeCheckInput() {
    return this._cachingExtraMaxAgeCheck;
  }

  // criteria_check - computed: true, optional: true, required: false
  private _criteriaCheck?: string; 
  public get criteriaCheck() {
    return this.getStringAttribute('criteria_check');
  }
  public set criteriaCheck(value: string) {
    this._criteriaCheck = value;
  }
  public resetCriteriaCheck() {
    this._criteriaCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaCheckInput() {
    return this._criteriaCheck;
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

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // nonce_check - computed: true, optional: true, required: false
  private _nonceCheck?: string; 
  public get nonceCheck() {
    return this.getStringAttribute('nonce_check');
  }
  public set nonceCheck(value: string) {
    this._nonceCheck = value;
  }
  public resetNonceCheck() {
    this._nonceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonceCheckInput() {
    return this._nonceCheck;
  }

  // reject_ocsp_response_with_missing_nextupdate - computed: true, optional: true, required: false
  private _rejectOcspResponseWithMissingNextupdate?: string; 
  public get rejectOcspResponseWithMissingNextupdate() {
    return this.getStringAttribute('reject_ocsp_response_with_missing_nextupdate');
  }
  public set rejectOcspResponseWithMissingNextupdate(value: string) {
    this._rejectOcspResponseWithMissingNextupdate = value;
  }
  public resetRejectOcspResponseWithMissingNextupdate() {
    this._rejectOcspResponseWithMissingNextupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectOcspResponseWithMissingNextupdateInput() {
    return this._rejectOcspResponseWithMissingNextupdate;
  }

  // remote_certificates - computed: true, optional: true, required: false
  private _remoteCertificates?: string; 
  public get remoteCertificates() {
    return this.getStringAttribute('remote_certificates');
  }
  public set remoteCertificates(value: string) {
    this._remoteCertificates = value;
  }
  public resetRemoteCertificates() {
    this._remoteCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCertificatesInput() {
    return this._remoteCertificates;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tunnel_ip - computed: true, optional: true, required: false
  private _tunnelIp?: string; 
  public get tunnelIp() {
    return this.getStringAttribute('tunnel_ip');
  }
  public set tunnelIp(value: string) {
    this._tunnelIp = value;
  }
  public resetTunnelIp() {
    this._tunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIpInput() {
    return this._tunnelIp;
  }

  // tunnel_password - computed: true, optional: true, required: false
  private _tunnelPassword?: string; 
  public get tunnelPassword() {
    return this.getStringAttribute('tunnel_password');
  }
  public set tunnelPassword(value: string) {
    this._tunnelPassword = value;
  }
  public resetTunnelPassword() {
    this._tunnelPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPasswordInput() {
    return this._tunnelPassword;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: string; 
  public get tunnelPort() {
    return this.getStringAttribute('tunnel_port');
  }
  public set tunnelPort(value: string) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_status - computed: true, optional: true, required: false
  private _tunnelStatus?: string; 
  public get tunnelStatus() {
    return this.getStringAttribute('tunnel_status');
  }
  public set tunnelStatus(value: string) {
    this._tunnelStatus = value;
  }
  public resetTunnelStatus() {
    this._tunnelStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelStatusInput() {
    return this._tunnelStatus;
  }

  // tunnel_username - computed: true, optional: true, required: false
  private _tunnelUsername?: string; 
  public get tunnelUsername() {
    return this.getStringAttribute('tunnel_username');
  }
  public set tunnelUsername(value: string) {
    this._tunnelUsername = value;
  }
  public resetTunnelUsername() {
    this._tunnelUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUsernameInput() {
    return this._tunnelUsername;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // verify_others - computed: true, optional: true, required: false
  private _verifyOthers?: string; 
  public get verifyOthers() {
    return this.getStringAttribute('verify_others');
  }
  public set verifyOthers(value: string) {
    this._verifyOthers = value;
  }
  public resetVerifyOthers() {
    this._verifyOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyOthersInput() {
    return this._verifyOthers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_trusted_root_ca: cdktf.stringToTerraform(this._acceptTrustedRootCa),
      ca_chain: cdktf.stringToTerraform(this._caChain),
      caching: cdktf.stringToTerraform(this._caching),
      caching_expire_ahead_time: cdktf.stringToTerraform(this._cachingExpireAheadTime),
      caching_extra_max_age_check: cdktf.stringToTerraform(this._cachingExtraMaxAgeCheck),
      criteria_check: cdktf.stringToTerraform(this._criteriaCheck),
      id: cdktf.stringToTerraform(this._id),
      max_age: cdktf.stringToTerraform(this._maxAge),
      mkey: cdktf.stringToTerraform(this._mkey),
      nonce_check: cdktf.stringToTerraform(this._nonceCheck),
      reject_ocsp_response_with_missing_nextupdate: cdktf.stringToTerraform(this._rejectOcspResponseWithMissingNextupdate),
      remote_certificates: cdktf.stringToTerraform(this._remoteCertificates),
      timeout: cdktf.stringToTerraform(this._timeout),
      tunnel_ip: cdktf.stringToTerraform(this._tunnelIp),
      tunnel_password: cdktf.stringToTerraform(this._tunnelPassword),
      tunnel_port: cdktf.stringToTerraform(this._tunnelPort),
      tunnel_status: cdktf.stringToTerraform(this._tunnelStatus),
      tunnel_username: cdktf.stringToTerraform(this._tunnelUsername),
      url: cdktf.stringToTerraform(this._url),
      vdom: cdktf.stringToTerraform(this._vdom),
      verify_others: cdktf.stringToTerraform(this._verifyOthers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_trusted_root_ca: {
        value: cdktf.stringToHclTerraform(this._acceptTrustedRootCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_chain: {
        value: cdktf.stringToHclTerraform(this._caChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caching: {
        value: cdktf.stringToHclTerraform(this._caching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caching_expire_ahead_time: {
        value: cdktf.stringToHclTerraform(this._cachingExpireAheadTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caching_extra_max_age_check: {
        value: cdktf.stringToHclTerraform(this._cachingExtraMaxAgeCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria_check: {
        value: cdktf.stringToHclTerraform(this._criteriaCheck),
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
      max_age: {
        value: cdktf.stringToHclTerraform(this._maxAge),
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
      nonce_check: {
        value: cdktf.stringToHclTerraform(this._nonceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_ocsp_response_with_missing_nextupdate: {
        value: cdktf.stringToHclTerraform(this._rejectOcspResponseWithMissingNextupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_certificates: {
        value: cdktf.stringToHclTerraform(this._remoteCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_ip: {
        value: cdktf.stringToHclTerraform(this._tunnelIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_password: {
        value: cdktf.stringToHclTerraform(this._tunnelPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_port: {
        value: cdktf.stringToHclTerraform(this._tunnelPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_status: {
        value: cdktf.stringToHclTerraform(this._tunnelStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_username: {
        value: cdktf.stringToHclTerraform(this._tunnelUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      verify_others: {
        value: cdktf.stringToHclTerraform(this._verifyOthers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
