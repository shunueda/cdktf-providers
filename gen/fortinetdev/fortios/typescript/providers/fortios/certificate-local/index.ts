// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#acme_ca_url CertificateLocal#acme_ca_url}
  */
  readonly acmeCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#acme_domain CertificateLocal#acme_domain}
  */
  readonly acmeDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#acme_eab_key_hmac CertificateLocal#acme_eab_key_hmac}
  */
  readonly acmeEabKeyHmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#acme_eab_key_id CertificateLocal#acme_eab_key_id}
  */
  readonly acmeEabKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#acme_email CertificateLocal#acme_email}
  */
  readonly acmeEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#acme_renew_window CertificateLocal#acme_renew_window}
  */
  readonly acmeRenewWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#acme_rsa_key_size CertificateLocal#acme_rsa_key_size}
  */
  readonly acmeRsaKeySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#auto_regenerate_days CertificateLocal#auto_regenerate_days}
  */
  readonly autoRegenerateDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#auto_regenerate_days_warning CertificateLocal#auto_regenerate_days_warning}
  */
  readonly autoRegenerateDaysWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#ca_identifier CertificateLocal#ca_identifier}
  */
  readonly caIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#certificate CertificateLocal#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#cmp_path CertificateLocal#cmp_path}
  */
  readonly cmpPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#cmp_regeneration_method CertificateLocal#cmp_regeneration_method}
  */
  readonly cmpRegenerationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#cmp_server CertificateLocal#cmp_server}
  */
  readonly cmpServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#cmp_server_cert CertificateLocal#cmp_server_cert}
  */
  readonly cmpServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#comments CertificateLocal#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#csr CertificateLocal#csr}
  */
  readonly csr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#enroll_protocol CertificateLocal#enroll_protocol}
  */
  readonly enrollProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_ca_id CertificateLocal#est_ca_id}
  */
  readonly estCaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_client_cert CertificateLocal#est_client_cert}
  */
  readonly estClientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_http_password CertificateLocal#est_http_password}
  */
  readonly estHttpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_http_username CertificateLocal#est_http_username}
  */
  readonly estHttpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_regeneration_method CertificateLocal#est_regeneration_method}
  */
  readonly estRegenerationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_server CertificateLocal#est_server}
  */
  readonly estServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_server_cert CertificateLocal#est_server_cert}
  */
  readonly estServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_srp_password CertificateLocal#est_srp_password}
  */
  readonly estSrpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#est_srp_username CertificateLocal#est_srp_username}
  */
  readonly estSrpUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#id CertificateLocal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#ike_localid CertificateLocal#ike_localid}
  */
  readonly ikeLocalid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#ike_localid_type CertificateLocal#ike_localid_type}
  */
  readonly ikeLocalidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#last_updated CertificateLocal#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#name CertificateLocal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#name_encoding CertificateLocal#name_encoding}
  */
  readonly nameEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#password CertificateLocal#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#private_key CertificateLocal#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#private_key_retain CertificateLocal#private_key_retain}
  */
  readonly privateKeyRetain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#range CertificateLocal#range}
  */
  readonly range?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#scep_password CertificateLocal#scep_password}
  */
  readonly scepPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#scep_url CertificateLocal#scep_url}
  */
  readonly scepUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#source CertificateLocal#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#source_ip CertificateLocal#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#state CertificateLocal#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#vdomparam CertificateLocal#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local fortios_certificate_local}
*/
export class CertificateLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_certificate_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateLocal to import
  * @param importFromId The id of the existing CertificateLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_certificate_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/certificate_local fortios_certificate_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateLocalConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateLocalConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_certificate_local',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acmeCaUrl = config.acmeCaUrl;
    this._acmeDomain = config.acmeDomain;
    this._acmeEabKeyHmac = config.acmeEabKeyHmac;
    this._acmeEabKeyId = config.acmeEabKeyId;
    this._acmeEmail = config.acmeEmail;
    this._acmeRenewWindow = config.acmeRenewWindow;
    this._acmeRsaKeySize = config.acmeRsaKeySize;
    this._autoRegenerateDays = config.autoRegenerateDays;
    this._autoRegenerateDaysWarning = config.autoRegenerateDaysWarning;
    this._caIdentifier = config.caIdentifier;
    this._certificate = config.certificate;
    this._cmpPath = config.cmpPath;
    this._cmpRegenerationMethod = config.cmpRegenerationMethod;
    this._cmpServer = config.cmpServer;
    this._cmpServerCert = config.cmpServerCert;
    this._comments = config.comments;
    this._csr = config.csr;
    this._enrollProtocol = config.enrollProtocol;
    this._estCaId = config.estCaId;
    this._estClientCert = config.estClientCert;
    this._estHttpPassword = config.estHttpPassword;
    this._estHttpUsername = config.estHttpUsername;
    this._estRegenerationMethod = config.estRegenerationMethod;
    this._estServer = config.estServer;
    this._estServerCert = config.estServerCert;
    this._estSrpPassword = config.estSrpPassword;
    this._estSrpUsername = config.estSrpUsername;
    this._id = config.id;
    this._ikeLocalid = config.ikeLocalid;
    this._ikeLocalidType = config.ikeLocalidType;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._nameEncoding = config.nameEncoding;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._privateKeyRetain = config.privateKeyRetain;
    this._range = config.range;
    this._scepPassword = config.scepPassword;
    this._scepUrl = config.scepUrl;
    this._source = config.source;
    this._sourceIp = config.sourceIp;
    this._state = config.state;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_ca_url - computed: true, optional: true, required: false
  private _acmeCaUrl?: string; 
  public get acmeCaUrl() {
    return this.getStringAttribute('acme_ca_url');
  }
  public set acmeCaUrl(value: string) {
    this._acmeCaUrl = value;
  }
  public resetAcmeCaUrl() {
    this._acmeCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeCaUrlInput() {
    return this._acmeCaUrl;
  }

  // acme_domain - computed: false, optional: true, required: false
  private _acmeDomain?: string; 
  public get acmeDomain() {
    return this.getStringAttribute('acme_domain');
  }
  public set acmeDomain(value: string) {
    this._acmeDomain = value;
  }
  public resetAcmeDomain() {
    this._acmeDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeDomainInput() {
    return this._acmeDomain;
  }

  // acme_eab_key_hmac - computed: false, optional: true, required: false
  private _acmeEabKeyHmac?: string; 
  public get acmeEabKeyHmac() {
    return this.getStringAttribute('acme_eab_key_hmac');
  }
  public set acmeEabKeyHmac(value: string) {
    this._acmeEabKeyHmac = value;
  }
  public resetAcmeEabKeyHmac() {
    this._acmeEabKeyHmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeEabKeyHmacInput() {
    return this._acmeEabKeyHmac;
  }

  // acme_eab_key_id - computed: false, optional: true, required: false
  private _acmeEabKeyId?: string; 
  public get acmeEabKeyId() {
    return this.getStringAttribute('acme_eab_key_id');
  }
  public set acmeEabKeyId(value: string) {
    this._acmeEabKeyId = value;
  }
  public resetAcmeEabKeyId() {
    this._acmeEabKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeEabKeyIdInput() {
    return this._acmeEabKeyId;
  }

  // acme_email - computed: false, optional: true, required: false
  private _acmeEmail?: string; 
  public get acmeEmail() {
    return this.getStringAttribute('acme_email');
  }
  public set acmeEmail(value: string) {
    this._acmeEmail = value;
  }
  public resetAcmeEmail() {
    this._acmeEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeEmailInput() {
    return this._acmeEmail;
  }

  // acme_renew_window - computed: true, optional: true, required: false
  private _acmeRenewWindow?: number; 
  public get acmeRenewWindow() {
    return this.getNumberAttribute('acme_renew_window');
  }
  public set acmeRenewWindow(value: number) {
    this._acmeRenewWindow = value;
  }
  public resetAcmeRenewWindow() {
    this._acmeRenewWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeRenewWindowInput() {
    return this._acmeRenewWindow;
  }

  // acme_rsa_key_size - computed: true, optional: true, required: false
  private _acmeRsaKeySize?: number; 
  public get acmeRsaKeySize() {
    return this.getNumberAttribute('acme_rsa_key_size');
  }
  public set acmeRsaKeySize(value: number) {
    this._acmeRsaKeySize = value;
  }
  public resetAcmeRsaKeySize() {
    this._acmeRsaKeySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeRsaKeySizeInput() {
    return this._acmeRsaKeySize;
  }

  // auto_regenerate_days - computed: false, optional: true, required: false
  private _autoRegenerateDays?: number; 
  public get autoRegenerateDays() {
    return this.getNumberAttribute('auto_regenerate_days');
  }
  public set autoRegenerateDays(value: number) {
    this._autoRegenerateDays = value;
  }
  public resetAutoRegenerateDays() {
    this._autoRegenerateDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRegenerateDaysInput() {
    return this._autoRegenerateDays;
  }

  // auto_regenerate_days_warning - computed: false, optional: true, required: false
  private _autoRegenerateDaysWarning?: number; 
  public get autoRegenerateDaysWarning() {
    return this.getNumberAttribute('auto_regenerate_days_warning');
  }
  public set autoRegenerateDaysWarning(value: number) {
    this._autoRegenerateDaysWarning = value;
  }
  public resetAutoRegenerateDaysWarning() {
    this._autoRegenerateDaysWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRegenerateDaysWarningInput() {
    return this._autoRegenerateDaysWarning;
  }

  // ca_identifier - computed: false, optional: true, required: false
  private _caIdentifier?: string; 
  public get caIdentifier() {
    return this.getStringAttribute('ca_identifier');
  }
  public set caIdentifier(value: string) {
    this._caIdentifier = value;
  }
  public resetCaIdentifier() {
    this._caIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caIdentifierInput() {
    return this._caIdentifier;
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

  // cmp_path - computed: false, optional: true, required: false
  private _cmpPath?: string; 
  public get cmpPath() {
    return this.getStringAttribute('cmp_path');
  }
  public set cmpPath(value: string) {
    this._cmpPath = value;
  }
  public resetCmpPath() {
    this._cmpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpPathInput() {
    return this._cmpPath;
  }

  // cmp_regeneration_method - computed: true, optional: true, required: false
  private _cmpRegenerationMethod?: string; 
  public get cmpRegenerationMethod() {
    return this.getStringAttribute('cmp_regeneration_method');
  }
  public set cmpRegenerationMethod(value: string) {
    this._cmpRegenerationMethod = value;
  }
  public resetCmpRegenerationMethod() {
    this._cmpRegenerationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpRegenerationMethodInput() {
    return this._cmpRegenerationMethod;
  }

  // cmp_server - computed: false, optional: true, required: false
  private _cmpServer?: string; 
  public get cmpServer() {
    return this.getStringAttribute('cmp_server');
  }
  public set cmpServer(value: string) {
    this._cmpServer = value;
  }
  public resetCmpServer() {
    this._cmpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpServerInput() {
    return this._cmpServer;
  }

  // cmp_server_cert - computed: false, optional: true, required: false
  private _cmpServerCert?: string; 
  public get cmpServerCert() {
    return this.getStringAttribute('cmp_server_cert');
  }
  public set cmpServerCert(value: string) {
    this._cmpServerCert = value;
  }
  public resetCmpServerCert() {
    this._cmpServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpServerCertInput() {
    return this._cmpServerCert;
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // csr - computed: false, optional: true, required: false
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  public resetCsr() {
    this._csr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // enroll_protocol - computed: true, optional: true, required: false
  private _enrollProtocol?: string; 
  public get enrollProtocol() {
    return this.getStringAttribute('enroll_protocol');
  }
  public set enrollProtocol(value: string) {
    this._enrollProtocol = value;
  }
  public resetEnrollProtocol() {
    this._enrollProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollProtocolInput() {
    return this._enrollProtocol;
  }

  // est_ca_id - computed: false, optional: true, required: false
  private _estCaId?: string; 
  public get estCaId() {
    return this.getStringAttribute('est_ca_id');
  }
  public set estCaId(value: string) {
    this._estCaId = value;
  }
  public resetEstCaId() {
    this._estCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estCaIdInput() {
    return this._estCaId;
  }

  // est_client_cert - computed: false, optional: true, required: false
  private _estClientCert?: string; 
  public get estClientCert() {
    return this.getStringAttribute('est_client_cert');
  }
  public set estClientCert(value: string) {
    this._estClientCert = value;
  }
  public resetEstClientCert() {
    this._estClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estClientCertInput() {
    return this._estClientCert;
  }

  // est_http_password - computed: false, optional: true, required: false
  private _estHttpPassword?: string; 
  public get estHttpPassword() {
    return this.getStringAttribute('est_http_password');
  }
  public set estHttpPassword(value: string) {
    this._estHttpPassword = value;
  }
  public resetEstHttpPassword() {
    this._estHttpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estHttpPasswordInput() {
    return this._estHttpPassword;
  }

  // est_http_username - computed: false, optional: true, required: false
  private _estHttpUsername?: string; 
  public get estHttpUsername() {
    return this.getStringAttribute('est_http_username');
  }
  public set estHttpUsername(value: string) {
    this._estHttpUsername = value;
  }
  public resetEstHttpUsername() {
    this._estHttpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estHttpUsernameInput() {
    return this._estHttpUsername;
  }

  // est_regeneration_method - computed: true, optional: true, required: false
  private _estRegenerationMethod?: string; 
  public get estRegenerationMethod() {
    return this.getStringAttribute('est_regeneration_method');
  }
  public set estRegenerationMethod(value: string) {
    this._estRegenerationMethod = value;
  }
  public resetEstRegenerationMethod() {
    this._estRegenerationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estRegenerationMethodInput() {
    return this._estRegenerationMethod;
  }

  // est_server - computed: false, optional: true, required: false
  private _estServer?: string; 
  public get estServer() {
    return this.getStringAttribute('est_server');
  }
  public set estServer(value: string) {
    this._estServer = value;
  }
  public resetEstServer() {
    this._estServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estServerInput() {
    return this._estServer;
  }

  // est_server_cert - computed: false, optional: true, required: false
  private _estServerCert?: string; 
  public get estServerCert() {
    return this.getStringAttribute('est_server_cert');
  }
  public set estServerCert(value: string) {
    this._estServerCert = value;
  }
  public resetEstServerCert() {
    this._estServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estServerCertInput() {
    return this._estServerCert;
  }

  // est_srp_password - computed: false, optional: true, required: false
  private _estSrpPassword?: string; 
  public get estSrpPassword() {
    return this.getStringAttribute('est_srp_password');
  }
  public set estSrpPassword(value: string) {
    this._estSrpPassword = value;
  }
  public resetEstSrpPassword() {
    this._estSrpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estSrpPasswordInput() {
    return this._estSrpPassword;
  }

  // est_srp_username - computed: false, optional: true, required: false
  private _estSrpUsername?: string; 
  public get estSrpUsername() {
    return this.getStringAttribute('est_srp_username');
  }
  public set estSrpUsername(value: string) {
    this._estSrpUsername = value;
  }
  public resetEstSrpUsername() {
    this._estSrpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estSrpUsernameInput() {
    return this._estSrpUsername;
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

  // ike_localid - computed: false, optional: true, required: false
  private _ikeLocalid?: string; 
  public get ikeLocalid() {
    return this.getStringAttribute('ike_localid');
  }
  public set ikeLocalid(value: string) {
    this._ikeLocalid = value;
  }
  public resetIkeLocalid() {
    this._ikeLocalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalidInput() {
    return this._ikeLocalid;
  }

  // ike_localid_type - computed: true, optional: true, required: false
  private _ikeLocalidType?: string; 
  public get ikeLocalidType() {
    return this.getStringAttribute('ike_localid_type');
  }
  public set ikeLocalidType(value: string) {
    this._ikeLocalidType = value;
  }
  public resetIkeLocalidType() {
    this._ikeLocalidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLocalidTypeInput() {
    return this._ikeLocalidType;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // name_encoding - computed: true, optional: true, required: false
  private _nameEncoding?: string; 
  public get nameEncoding() {
    return this.getStringAttribute('name_encoding');
  }
  public set nameEncoding(value: string) {
    this._nameEncoding = value;
  }
  public resetNameEncoding() {
    this._nameEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameEncodingInput() {
    return this._nameEncoding;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_retain - computed: true, optional: true, required: false
  private _privateKeyRetain?: string; 
  public get privateKeyRetain() {
    return this.getStringAttribute('private_key_retain');
  }
  public set privateKeyRetain(value: string) {
    this._privateKeyRetain = value;
  }
  public resetPrivateKeyRetain() {
    this._privateKeyRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyRetainInput() {
    return this._privateKeyRetain;
  }

  // range - computed: true, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // scep_password - computed: false, optional: true, required: false
  private _scepPassword?: string; 
  public get scepPassword() {
    return this.getStringAttribute('scep_password');
  }
  public set scepPassword(value: string) {
    this._scepPassword = value;
  }
  public resetScepPassword() {
    this._scepPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepPasswordInput() {
    return this._scepPassword;
  }

  // scep_url - computed: false, optional: true, required: false
  private _scepUrl?: string; 
  public get scepUrl() {
    return this.getStringAttribute('scep_url');
  }
  public set scepUrl(value: string) {
    this._scepUrl = value;
  }
  public resetScepUrl() {
    this._scepUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scepUrlInput() {
    return this._scepUrl;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acme_ca_url: cdktf.stringToTerraform(this._acmeCaUrl),
      acme_domain: cdktf.stringToTerraform(this._acmeDomain),
      acme_eab_key_hmac: cdktf.stringToTerraform(this._acmeEabKeyHmac),
      acme_eab_key_id: cdktf.stringToTerraform(this._acmeEabKeyId),
      acme_email: cdktf.stringToTerraform(this._acmeEmail),
      acme_renew_window: cdktf.numberToTerraform(this._acmeRenewWindow),
      acme_rsa_key_size: cdktf.numberToTerraform(this._acmeRsaKeySize),
      auto_regenerate_days: cdktf.numberToTerraform(this._autoRegenerateDays),
      auto_regenerate_days_warning: cdktf.numberToTerraform(this._autoRegenerateDaysWarning),
      ca_identifier: cdktf.stringToTerraform(this._caIdentifier),
      certificate: cdktf.stringToTerraform(this._certificate),
      cmp_path: cdktf.stringToTerraform(this._cmpPath),
      cmp_regeneration_method: cdktf.stringToTerraform(this._cmpRegenerationMethod),
      cmp_server: cdktf.stringToTerraform(this._cmpServer),
      cmp_server_cert: cdktf.stringToTerraform(this._cmpServerCert),
      comments: cdktf.stringToTerraform(this._comments),
      csr: cdktf.stringToTerraform(this._csr),
      enroll_protocol: cdktf.stringToTerraform(this._enrollProtocol),
      est_ca_id: cdktf.stringToTerraform(this._estCaId),
      est_client_cert: cdktf.stringToTerraform(this._estClientCert),
      est_http_password: cdktf.stringToTerraform(this._estHttpPassword),
      est_http_username: cdktf.stringToTerraform(this._estHttpUsername),
      est_regeneration_method: cdktf.stringToTerraform(this._estRegenerationMethod),
      est_server: cdktf.stringToTerraform(this._estServer),
      est_server_cert: cdktf.stringToTerraform(this._estServerCert),
      est_srp_password: cdktf.stringToTerraform(this._estSrpPassword),
      est_srp_username: cdktf.stringToTerraform(this._estSrpUsername),
      id: cdktf.stringToTerraform(this._id),
      ike_localid: cdktf.stringToTerraform(this._ikeLocalid),
      ike_localid_type: cdktf.stringToTerraform(this._ikeLocalidType),
      last_updated: cdktf.numberToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      name_encoding: cdktf.stringToTerraform(this._nameEncoding),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_retain: cdktf.stringToTerraform(this._privateKeyRetain),
      range: cdktf.stringToTerraform(this._range),
      scep_password: cdktf.stringToTerraform(this._scepPassword),
      scep_url: cdktf.stringToTerraform(this._scepUrl),
      source: cdktf.stringToTerraform(this._source),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      state: cdktf.stringToTerraform(this._state),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acme_ca_url: {
        value: cdktf.stringToHclTerraform(this._acmeCaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acme_domain: {
        value: cdktf.stringToHclTerraform(this._acmeDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acme_eab_key_hmac: {
        value: cdktf.stringToHclTerraform(this._acmeEabKeyHmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acme_eab_key_id: {
        value: cdktf.stringToHclTerraform(this._acmeEabKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acme_email: {
        value: cdktf.stringToHclTerraform(this._acmeEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      acme_renew_window: {
        value: cdktf.numberToHclTerraform(this._acmeRenewWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acme_rsa_key_size: {
        value: cdktf.numberToHclTerraform(this._acmeRsaKeySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_regenerate_days: {
        value: cdktf.numberToHclTerraform(this._autoRegenerateDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_regenerate_days_warning: {
        value: cdktf.numberToHclTerraform(this._autoRegenerateDaysWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_identifier: {
        value: cdktf.stringToHclTerraform(this._caIdentifier),
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
      cmp_path: {
        value: cdktf.stringToHclTerraform(this._cmpPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmp_regeneration_method: {
        value: cdktf.stringToHclTerraform(this._cmpRegenerationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmp_server: {
        value: cdktf.stringToHclTerraform(this._cmpServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmp_server_cert: {
        value: cdktf.stringToHclTerraform(this._cmpServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enroll_protocol: {
        value: cdktf.stringToHclTerraform(this._enrollProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_ca_id: {
        value: cdktf.stringToHclTerraform(this._estCaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_client_cert: {
        value: cdktf.stringToHclTerraform(this._estClientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_http_password: {
        value: cdktf.stringToHclTerraform(this._estHttpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_http_username: {
        value: cdktf.stringToHclTerraform(this._estHttpUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_regeneration_method: {
        value: cdktf.stringToHclTerraform(this._estRegenerationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_server: {
        value: cdktf.stringToHclTerraform(this._estServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_server_cert: {
        value: cdktf.stringToHclTerraform(this._estServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_srp_password: {
        value: cdktf.stringToHclTerraform(this._estSrpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      est_srp_username: {
        value: cdktf.stringToHclTerraform(this._estSrpUsername),
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
      ike_localid: {
        value: cdktf.stringToHclTerraform(this._ikeLocalid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_localid_type: {
        value: cdktf.stringToHclTerraform(this._ikeLocalidType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.numberToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_encoding: {
        value: cdktf.stringToHclTerraform(this._nameEncoding),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_retain: {
        value: cdktf.stringToHclTerraform(this._privateKeyRetain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.stringToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_password: {
        value: cdktf.stringToHclTerraform(this._scepPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scep_url: {
        value: cdktf.stringToHclTerraform(this._scepUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
