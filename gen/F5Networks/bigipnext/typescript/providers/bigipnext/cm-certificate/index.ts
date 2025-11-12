// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * An administrator email to contact your organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#administrator_email CmCertificate#administrator_email}
  */
  readonly administratorEmail?: string;
  /**
  * challenge password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#challenge_password CmCertificate#challenge_password}
  */
  readonly challengePassword?: string;
  /**
  * The fully qualified domain name of your server. The common_name of the certificate cannot be empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#common_name CmCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * The country where your organization is located. An SSL certificate country code is a two-letter code that's used when you generate a CSR. It is Array of strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#country CmCertificate#country}
  */
  readonly country?: string[];
  /**
  * The division of your organization handling the certificate. It is Array of strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#division CmCertificate#division}
  */
  readonly division?: string[];
  /**
  * duration in days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#duration_in_days CmCertificate#duration_in_days}
  */
  readonly durationInDays: number;
  /**
  * An email address to contact your organization. It is Array of strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#email CmCertificate#email}
  */
  readonly email?: string[];
  /**
  * issuer details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#issuer CmCertificate#issuer}
  */
  readonly issuer?: string;
  /**
  * Supported curve names for ECDSA- secp384r1, prime256v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#key_curve_name CmCertificate#key_curve_name}
  */
  readonly keyCurveName?: string;
  /**
  * key passphrase, A passphrase is a word or phrase that protects private key files, It prevents unauthorized users from encrypting them. Usually it's just the secret encryption/decryption key used for Ciphers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#key_passphrase CmCertificate#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * Specifies whether key is password protected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#key_security_type CmCertificate#key_security_type}
  */
  readonly keySecurityType?: string;
  /**
  * Size of key - the number of bits in a key used by a cryptographic algorithm. Supported key size for RSA - 2048, 3072, 4096
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#key_size CmCertificate#key_size}
  */
  readonly keySize?: number;
  /**
  * Specifies Key type to be either `RSA` or `ECDSA`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#key_type CmCertificate#key_type}
  */
  readonly keyType?: string;
  /**
  * The locality where your organization is located. It is Array of strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#locality CmCertificate#locality}
  */
  readonly locality?: string[];
  /**
  * The unique user-given name of the certificate. Certificate names cannot contain spaces or special characters. The allowed characters are a-z, A-Z, 0-9, dot(.), dash (-) and underscore (_). Names starting with only a-z, A-Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#name CmCertificate#name}
  */
  readonly name: string;
  /**
  * The legal name of your organization. It is Array of strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#organization CmCertificate#organization}
  */
  readonly organization?: string[];
  /**
  * The state where your organization is located. It is Array of strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#state CmCertificate#state}
  */
  readonly state?: string[];
  /**
  * A SAN or subject alternative name is a structured way to indicate all of the domain names and IP addresses that are secured by the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#subject_alternative_name CmCertificate#subject_alternative_name}
  */
  readonly subjectAlternativeName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate bigipnext_cm_certificate}
*/
export class CmCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmCertificate to import
  * @param importFromId The id of the existing CmCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_certificate bigipnext_cm_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CmCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administratorEmail = config.administratorEmail;
    this._challengePassword = config.challengePassword;
    this._commonName = config.commonName;
    this._country = config.country;
    this._division = config.division;
    this._durationInDays = config.durationInDays;
    this._email = config.email;
    this._issuer = config.issuer;
    this._keyCurveName = config.keyCurveName;
    this._keyPassphrase = config.keyPassphrase;
    this._keySecurityType = config.keySecurityType;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._locality = config.locality;
    this._name = config.name;
    this._organization = config.organization;
    this._state = config.state;
    this._subjectAlternativeName = config.subjectAlternativeName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_email - computed: false, optional: true, required: false
  private _administratorEmail?: string; 
  public get administratorEmail() {
    return this.getStringAttribute('administrator_email');
  }
  public set administratorEmail(value: string) {
    this._administratorEmail = value;
  }
  public resetAdministratorEmail() {
    this._administratorEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorEmailInput() {
    return this._administratorEmail;
  }

  // challenge_password - computed: false, optional: true, required: false
  private _challengePassword?: string; 
  public get challengePassword() {
    return this.getStringAttribute('challenge_password');
  }
  public set challengePassword(value: string) {
    this._challengePassword = value;
  }
  public resetChallengePassword() {
    this._challengePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePasswordInput() {
    return this._challengePassword;
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
  private _country?: string[]; 
  public get country() {
    return this.getListAttribute('country');
  }
  public set country(value: string[]) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // division - computed: false, optional: true, required: false
  private _division?: string[]; 
  public get division() {
    return this.getListAttribute('division');
  }
  public set division(value: string[]) {
    this._division = value;
  }
  public resetDivision() {
    this._division = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionInput() {
    return this._division;
  }

  // duration_in_days - computed: false, optional: false, required: true
  private _durationInDays?: number; 
  public get durationInDays() {
    return this.getNumberAttribute('duration_in_days');
  }
  public set durationInDays(value: number) {
    this._durationInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInDaysInput() {
    return this._durationInDays;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // key_curve_name - computed: false, optional: true, required: false
  private _keyCurveName?: string; 
  public get keyCurveName() {
    return this.getStringAttribute('key_curve_name');
  }
  public set keyCurveName(value: string) {
    this._keyCurveName = value;
  }
  public resetKeyCurveName() {
    this._keyCurveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCurveNameInput() {
    return this._keyCurveName;
  }

  // key_passphrase - computed: false, optional: true, required: false
  private _keyPassphrase?: string; 
  public get keyPassphrase() {
    return this.getStringAttribute('key_passphrase');
  }
  public set keyPassphrase(value: string) {
    this._keyPassphrase = value;
  }
  public resetKeyPassphrase() {
    this._keyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassphraseInput() {
    return this._keyPassphrase;
  }

  // key_security_type - computed: true, optional: true, required: false
  private _keySecurityType?: string; 
  public get keySecurityType() {
    return this.getStringAttribute('key_security_type');
  }
  public set keySecurityType(value: string) {
    this._keySecurityType = value;
  }
  public resetKeySecurityType() {
    this._keySecurityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecurityTypeInput() {
    return this._keySecurityType;
  }

  // key_size - computed: true, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string[]; 
  public get locality() {
    return this.getListAttribute('locality');
  }
  public set locality(value: string[]) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string[]; 
  public get organization() {
    return this.getListAttribute('organization');
  }
  public set organization(value: string[]) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return this.getListAttribute('state');
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subject_alternative_name - computed: false, optional: true, required: false
  private _subjectAlternativeName?: string; 
  public get subjectAlternativeName() {
    return this.getStringAttribute('subject_alternative_name');
  }
  public set subjectAlternativeName(value: string) {
    this._subjectAlternativeName = value;
  }
  public resetSubjectAlternativeName() {
    this._subjectAlternativeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNameInput() {
    return this._subjectAlternativeName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrator_email: cdktf.stringToTerraform(this._administratorEmail),
      challenge_password: cdktf.stringToTerraform(this._challengePassword),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.listMapper(cdktf.stringToTerraform, false)(this._country),
      division: cdktf.listMapper(cdktf.stringToTerraform, false)(this._division),
      duration_in_days: cdktf.numberToTerraform(this._durationInDays),
      email: cdktf.listMapper(cdktf.stringToTerraform, false)(this._email),
      issuer: cdktf.stringToTerraform(this._issuer),
      key_curve_name: cdktf.stringToTerraform(this._keyCurveName),
      key_passphrase: cdktf.stringToTerraform(this._keyPassphrase),
      key_security_type: cdktf.stringToTerraform(this._keySecurityType),
      key_size: cdktf.numberToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      locality: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locality),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organization),
      state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._state),
      subject_alternative_name: cdktf.stringToTerraform(this._subjectAlternativeName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator_email: {
        value: cdktf.stringToHclTerraform(this._administratorEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      challenge_password: {
        value: cdktf.stringToHclTerraform(this._challengePassword),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._country),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      division: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._division),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      duration_in_days: {
        value: cdktf.numberToHclTerraform(this._durationInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._email),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_curve_name: {
        value: cdktf.stringToHclTerraform(this._keyCurveName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_passphrase: {
        value: cdktf.stringToHclTerraform(this._keyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_security_type: {
        value: cdktf.stringToHclTerraform(this._keySecurityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locality: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locality),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organization),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._state),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subject_alternative_name: {
        value: cdktf.stringToHclTerraform(this._subjectAlternativeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
