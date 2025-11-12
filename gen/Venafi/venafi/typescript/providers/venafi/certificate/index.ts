// https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Key encryption algorithm. RSA or ECDSA. RSA is default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#algorithm Certificate#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#certificate_dn Certificate#certificate_dn}
  */
  readonly certificateDn?: string;
  /**
  * Common name of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#common_name Certificate#common_name}
  */
  readonly commonName: string;
  /**
  * Country of the certificate (C)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#country Certificate#country}
  */
  readonly country?: string;
  /**
  * Origin of the CSR. One of local or service. Local: The CSR will be generated locally and sent over for certificate issuance. Service: The CSR will be generated and managed by the Venafi platform. Default is local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#csr_origin Certificate#csr_origin}
  */
  readonly csrOrigin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#csr_pem Certificate#csr_pem}
  */
  readonly csrPem?: string;
  /**
  * Data map in the form key="value1|value2|...|valueN", to be added to the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#custom_fields Certificate#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * ECDSA curve to use when generating a key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#ecdsa_curve Certificate#ecdsa_curve}
  */
  readonly ecdsaCurve?: string;
  /**
  * Number of hours before the certificates expiry when a new certificate will be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#expiration_window Certificate#expiration_window}
  */
  readonly expirationWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#id Certificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicate the target issuer to enable valid days with Venafi Platform. Supported values are DigiCert, Entrust, and Microsoft
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#issuer_hint Certificate#issuer_hint}
  */
  readonly issuerHint?: string;
  /**
  * Password for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#key_password Certificate#key_password}
  */
  readonly keyPassword?: string;
  /**
  * Locality/City of the certificate (L)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#locality Certificate#locality}
  */
  readonly locality?: string;
  /**
  * Use to specify a name for the new certificate object that will be created and placed in a policy. Only valid for TPP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#nickname Certificate#nickname}
  */
  readonly nickname?: string;
  /**
  * Organization of the certificate (O)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#organization Certificate#organization}
  */
  readonly organization?: string;
  /**
  * List of Organizational Units of the certificate (OU)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#organizational_units Certificate#organizational_units}
  */
  readonly organizationalUnits?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#pkcs12 Certificate#pkcs12}
  */
  readonly pkcs12?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#private_key_pem Certificate#private_key_pem}
  */
  readonly privateKeyPem?: string;
  /**
  * Indicates the certificate should be reissued. This means the resource will destroyed and recreated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#renew_required Certificate#renew_required}
  */
  readonly renewRequired?: boolean | cdktf.IResolvable;
  /**
  * Number of bits to use when generating an RSA key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#rsa_bits Certificate#rsa_bits}
  */
  readonly rsaBits?: number;
  /**
  * List of DNS names to use as subjects of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#san_dns Certificate#san_dns}
  */
  readonly sanDns?: string[];
  /**
  * List of email addresses to use as subjects of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#san_email Certificate#san_email}
  */
  readonly sanEmail?: string[];
  /**
  * List of IP addresses to use as subjects of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#san_ip Certificate#san_ip}
  */
  readonly sanIp?: string[];
  /**
  * List of Uniform Resource Identifiers (URIs) to use as subjects of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#san_uri Certificate#san_uri}
  */
  readonly sanUri?: string[];
  /**
  * State of the certificate (S)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#state Certificate#state}
  */
  readonly state?: string;
  /**
  * List of Certificate Tags defined in Venafi Control Plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#tags Certificate#tags}
  */
  readonly tags?: string[];
  /**
  * The desired validity time for the certificate, in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#valid_days Certificate#valid_days}
  */
  readonly validDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate venafi_certificate}
*/
export class Certificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "venafi_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Certificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Certificate to import
  * @param importFromId The id of the existing Certificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Certificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "venafi_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venafi/venafi/0.23.1/docs/resources/certificate venafi_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'venafi_certificate',
      terraformGeneratorMetadata: {
        providerName: 'venafi',
        providerVersion: '0.23.1',
        providerVersionConstraint: '0.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._certificateDn = config.certificateDn;
    this._commonName = config.commonName;
    this._country = config.country;
    this._csrOrigin = config.csrOrigin;
    this._csrPem = config.csrPem;
    this._customFields = config.customFields;
    this._ecdsaCurve = config.ecdsaCurve;
    this._expirationWindow = config.expirationWindow;
    this._id = config.id;
    this._issuerHint = config.issuerHint;
    this._keyPassword = config.keyPassword;
    this._locality = config.locality;
    this._nickname = config.nickname;
    this._organization = config.organization;
    this._organizationalUnits = config.organizationalUnits;
    this._pkcs12 = config.pkcs12;
    this._privateKeyPem = config.privateKeyPem;
    this._renewRequired = config.renewRequired;
    this._rsaBits = config.rsaBits;
    this._sanDns = config.sanDns;
    this._sanEmail = config.sanEmail;
    this._sanIp = config.sanIp;
    this._sanUri = config.sanUri;
    this._state = config.state;
    this._tags = config.tags;
    this._validDays = config.validDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_dn - computed: true, optional: true, required: false
  private _certificateDn?: string; 
  public get certificateDn() {
    return this.getStringAttribute('certificate_dn');
  }
  public set certificateDn(value: string) {
    this._certificateDn = value;
  }
  public resetCertificateDn() {
    this._certificateDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDnInput() {
    return this._certificateDn;
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // chain - computed: true, optional: false, required: false
  public get chain() {
    return this.getStringAttribute('chain');
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // csr_origin - computed: false, optional: true, required: false
  private _csrOrigin?: string; 
  public get csrOrigin() {
    return this.getStringAttribute('csr_origin');
  }
  public set csrOrigin(value: string) {
    this._csrOrigin = value;
  }
  public resetCsrOrigin() {
    this._csrOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrOriginInput() {
    return this._csrOrigin;
  }

  // csr_pem - computed: true, optional: true, required: false
  private _csrPem?: string; 
  public get csrPem() {
    return this.getStringAttribute('csr_pem');
  }
  public set csrPem(value: string) {
    this._csrPem = value;
  }
  public resetCsrPem() {
    this._csrPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrPemInput() {
    return this._csrPem;
  }

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // ecdsa_curve - computed: false, optional: true, required: false
  private _ecdsaCurve?: string; 
  public get ecdsaCurve() {
    return this.getStringAttribute('ecdsa_curve');
  }
  public set ecdsaCurve(value: string) {
    this._ecdsaCurve = value;
  }
  public resetEcdsaCurve() {
    this._ecdsaCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecdsaCurveInput() {
    return this._ecdsaCurve;
  }

  // expiration_window - computed: false, optional: true, required: false
  private _expirationWindow?: number; 
  public get expirationWindow() {
    return this.getNumberAttribute('expiration_window');
  }
  public set expirationWindow(value: number) {
    this._expirationWindow = value;
  }
  public resetExpirationWindow() {
    this._expirationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationWindowInput() {
    return this._expirationWindow;
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

  // issuer_hint - computed: false, optional: true, required: false
  private _issuerHint?: string; 
  public get issuerHint() {
    return this.getStringAttribute('issuer_hint');
  }
  public set issuerHint(value: string) {
    this._issuerHint = value;
  }
  public resetIssuerHint() {
    this._issuerHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerHintInput() {
    return this._issuerHint;
  }

  // key_password - computed: false, optional: true, required: false
  private _keyPassword?: string; 
  public get keyPassword() {
    return this.getStringAttribute('key_password');
  }
  public set keyPassword(value: string) {
    this._keyPassword = value;
  }
  public resetKeyPassword() {
    this._keyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswordInput() {
    return this._keyPassword;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // nickname - computed: false, optional: true, required: false
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  public resetNickname() {
    this._nickname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_units - computed: false, optional: true, required: false
  private _organizationalUnits?: string[]; 
  public get organizationalUnits() {
    return this.getListAttribute('organizational_units');
  }
  public set organizationalUnits(value: string[]) {
    this._organizationalUnits = value;
  }
  public resetOrganizationalUnits() {
    this._organizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitsInput() {
    return this._organizationalUnits;
  }

  // pkcs12 - computed: true, optional: true, required: false
  private _pkcs12?: string; 
  public get pkcs12() {
    return this.getStringAttribute('pkcs12');
  }
  public set pkcs12(value: string) {
    this._pkcs12 = value;
  }
  public resetPkcs12() {
    this._pkcs12 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs12Input() {
    return this._pkcs12;
  }

  // private_key_pem - computed: true, optional: true, required: false
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  public resetPrivateKeyPem() {
    this._privateKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }

  // renew_required - computed: false, optional: true, required: false
  private _renewRequired?: boolean | cdktf.IResolvable; 
  public get renewRequired() {
    return this.getBooleanAttribute('renew_required');
  }
  public set renewRequired(value: boolean | cdktf.IResolvable) {
    this._renewRequired = value;
  }
  public resetRenewRequired() {
    this._renewRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewRequiredInput() {
    return this._renewRequired;
  }

  // rsa_bits - computed: false, optional: true, required: false
  private _rsaBits?: number; 
  public get rsaBits() {
    return this.getNumberAttribute('rsa_bits');
  }
  public set rsaBits(value: number) {
    this._rsaBits = value;
  }
  public resetRsaBits() {
    this._rsaBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaBitsInput() {
    return this._rsaBits;
  }

  // san_dns - computed: false, optional: true, required: false
  private _sanDns?: string[]; 
  public get sanDns() {
    return this.getListAttribute('san_dns');
  }
  public set sanDns(value: string[]) {
    this._sanDns = value;
  }
  public resetSanDns() {
    this._sanDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanDnsInput() {
    return this._sanDns;
  }

  // san_email - computed: false, optional: true, required: false
  private _sanEmail?: string[]; 
  public get sanEmail() {
    return this.getListAttribute('san_email');
  }
  public set sanEmail(value: string[]) {
    this._sanEmail = value;
  }
  public resetSanEmail() {
    this._sanEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanEmailInput() {
    return this._sanEmail;
  }

  // san_ip - computed: false, optional: true, required: false
  private _sanIp?: string[]; 
  public get sanIp() {
    return this.getListAttribute('san_ip');
  }
  public set sanIp(value: string[]) {
    this._sanIp = value;
  }
  public resetSanIp() {
    this._sanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanIpInput() {
    return this._sanIp;
  }

  // san_uri - computed: false, optional: true, required: false
  private _sanUri?: string[]; 
  public get sanUri() {
    return this.getListAttribute('san_uri');
  }
  public set sanUri(value: string[]) {
    this._sanUri = value;
  }
  public resetSanUri() {
    this._sanUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanUriInput() {
    return this._sanUri;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // valid_days - computed: false, optional: true, required: false
  private _validDays?: number; 
  public get validDays() {
    return this.getNumberAttribute('valid_days');
  }
  public set validDays(value: number) {
    this._validDays = value;
  }
  public resetValidDays() {
    this._validDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validDaysInput() {
    return this._validDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      certificate_dn: cdktf.stringToTerraform(this._certificateDn),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      csr_origin: cdktf.stringToTerraform(this._csrOrigin),
      csr_pem: cdktf.stringToTerraform(this._csrPem),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      ecdsa_curve: cdktf.stringToTerraform(this._ecdsaCurve),
      expiration_window: cdktf.numberToTerraform(this._expirationWindow),
      id: cdktf.stringToTerraform(this._id),
      issuer_hint: cdktf.stringToTerraform(this._issuerHint),
      key_password: cdktf.stringToTerraform(this._keyPassword),
      locality: cdktf.stringToTerraform(this._locality),
      nickname: cdktf.stringToTerraform(this._nickname),
      organization: cdktf.stringToTerraform(this._organization),
      organizational_units: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationalUnits),
      pkcs12: cdktf.stringToTerraform(this._pkcs12),
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
      renew_required: cdktf.booleanToTerraform(this._renewRequired),
      rsa_bits: cdktf.numberToTerraform(this._rsaBits),
      san_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sanDns),
      san_email: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sanEmail),
      san_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sanIp),
      san_uri: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sanUri),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      valid_days: cdktf.numberToTerraform(this._validDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_dn: {
        value: cdktf.stringToHclTerraform(this._certificateDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_origin: {
        value: cdktf.stringToHclTerraform(this._csrOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr_pem: {
        value: cdktf.stringToHclTerraform(this._csrPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ecdsa_curve: {
        value: cdktf.stringToHclTerraform(this._ecdsaCurve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_window: {
        value: cdktf.numberToHclTerraform(this._expirationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_hint: {
        value: cdktf.stringToHclTerraform(this._issuerHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_password: {
        value: cdktf.stringToHclTerraform(this._keyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_units: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizationalUnits),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      pkcs12: {
        value: cdktf.stringToHclTerraform(this._pkcs12),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_pem: {
        value: cdktf.stringToHclTerraform(this._privateKeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      renew_required: {
        value: cdktf.booleanToHclTerraform(this._renewRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rsa_bits: {
        value: cdktf.numberToHclTerraform(this._rsaBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      san_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sanDns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      san_email: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sanEmail),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      san_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sanIp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      san_uri: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sanUri),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      valid_days: {
        value: cdktf.numberToHclTerraform(this._validDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
