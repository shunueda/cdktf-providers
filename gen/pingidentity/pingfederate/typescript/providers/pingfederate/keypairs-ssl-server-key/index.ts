// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairsSslServerKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * City for generating the key pair. Optional if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#city KeypairsSslServerKey#city}
  */
  readonly city?: string;
  /**
  * Common name for key pair subject. Required if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#common_name KeypairsSslServerKey#common_name}
  */
  readonly commonName?: string;
  /**
  * Country for generating the key pair. Required if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#country KeypairsSslServerKey#country}
  */
  readonly country?: string;
  /**
  * Cryptographic Provider. This is only applicable if Hybrid HSM mode is true. Supported values are `LOCAL` and `HSM`. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#crypto_provider KeypairsSslServerKey#crypto_provider}
  */
  readonly cryptoProvider?: string;
  /**
  * Base-64 encoded PKCS12 or PEM file data. In the case of PEM, the raw (non-base-64) data is also accepted. In BCFIPS mode, only PEM with PBES2 and AES or Triple DES encryption is accepted and 128-bit salt is required. If not configured, the new key will be generated. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#file_data KeypairsSslServerKey#file_data}
  */
  readonly fileData?: string;
  /**
  * Key pair file format. If specified, this field will control what file format is expected, otherwise the format will be auto-detected. In BCFIPS mode, only `PEM` is supported. Supported values are `PKCS12` and `PEM`. Can only be configured if `file_data` is set. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#format KeypairsSslServerKey#format}
  */
  readonly format?: string;
  /**
  * The public key algorithm. Required if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed. Typically supported values are `RSA` and `EC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#key_algorithm KeypairsSslServerKey#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * The persistent, unique ID for the certificate. It can be any combination of `[a-z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#key_id KeypairsSslServerKey#key_id}
  */
  readonly keyId?: string;
  /**
  * The public key size, in bits. Can only be configured if `file_data` is not set. If not configured and `file_data` is not set, then the default size for the key algorithm will be used. This field is immutable and will trigger a replace plan if changed. Typically supported values are `256`, `384`, and `521` for EC keys and `1024`, `2048`, and `4096` for RSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#key_size KeypairsSslServerKey#key_size}
  */
  readonly keySize?: number;
  /**
  * Organization for generating the key pair. Optional if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#organization KeypairsSslServerKey#organization}
  */
  readonly organization?: string;
  /**
  * Organization unit for generating the key pair. Optional if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#organization_unit KeypairsSslServerKey#organization_unit}
  */
  readonly organizationUnit?: string;
  /**
  * Password for the file. In BCFIPS mode, the password must be at least 14 characters. Must be configured if `file_data` is set, otherwise cannot be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#password KeypairsSslServerKey#password}
  */
  readonly password?: string;
  /**
  * The signature algorithm. Can only be configured if `file_data` is not set. If not configured and `file_data` is not set, then the default signature algorithm for the key algorithm will be used. This field is immutable and will trigger a replace plan if changed. Typically supported values are `SHA256withECDSA`, `SHA384withECDSA`, and `SHA512withECDSA` for EC keys, and `SHA256withRSA`, `SHA384withRSA`, and `SHA512withRSA` for RSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#signature_algorithm KeypairsSslServerKey#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * State for generating the key pair. Optional if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#state KeypairsSslServerKey#state}
  */
  readonly state?: string;
  /**
  * The subject alternative names (SAN). Cannot be configured if `file_data` is set. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#subject_alternative_names KeypairsSslServerKey#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: string[];
  /**
  * Number of days the key pair will be valid for. Required if `file_data` is not set, otherwise can't be configured. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#valid_days KeypairsSslServerKey#valid_days}
  */
  readonly validDays?: number;
}
export interface KeypairsSslServerKeyRotationSettings {
}

export function keypairsSslServerKeyRotationSettingsToTerraform(struct?: KeypairsSslServerKeyRotationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function keypairsSslServerKeyRotationSettingsToHclTerraform(struct?: KeypairsSslServerKeyRotationSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KeypairsSslServerKeyRotationSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KeypairsSslServerKeyRotationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeypairsSslServerKeyRotationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_buffer_days - computed: true, optional: false, required: false
  public get activationBufferDays() {
    return this.getNumberAttribute('activation_buffer_days');
  }

  // creation_buffer_days - computed: true, optional: false, required: false
  public get creationBufferDays() {
    return this.getNumberAttribute('creation_buffer_days');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // valid_days - computed: true, optional: false, required: false
  public get validDays() {
    return this.getNumberAttribute('valid_days');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key pingfederate_keypairs_ssl_server_key}
*/
export class KeypairsSslServerKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_keypairs_ssl_server_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeypairsSslServerKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeypairsSslServerKey to import
  * @param importFromId The id of the existing KeypairsSslServerKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeypairsSslServerKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_keypairs_ssl_server_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/keypairs_ssl_server_key pingfederate_keypairs_ssl_server_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairsSslServerKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KeypairsSslServerKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_keypairs_ssl_server_key',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._city = config.city;
    this._commonName = config.commonName;
    this._country = config.country;
    this._cryptoProvider = config.cryptoProvider;
    this._fileData = config.fileData;
    this._format = config.format;
    this._keyAlgorithm = config.keyAlgorithm;
    this._keyId = config.keyId;
    this._keySize = config.keySize;
    this._organization = config.organization;
    this._organizationUnit = config.organizationUnit;
    this._password = config.password;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._state = config.state;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._validDays = config.validDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
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

  // crypto_provider - computed: false, optional: true, required: false
  private _cryptoProvider?: string; 
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }
  public set cryptoProvider(value: string) {
    this._cryptoProvider = value;
  }
  public resetCryptoProvider() {
    this._cryptoProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoProviderInput() {
    return this._cryptoProvider;
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // file_data - computed: false, optional: true, required: false
  private _fileData?: string; 
  public get fileData() {
    return this.getStringAttribute('file_data');
  }
  public set fileData(value: string) {
    this._fileData = value;
  }
  public resetFileData() {
    this._fileData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDataInput() {
    return this._fileData;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // key_algorithm - computed: true, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // organization_unit - computed: false, optional: true, required: false
  private _organizationUnit?: string; 
  public get organizationUnit() {
    return this.getStringAttribute('organization_unit');
  }
  public set organizationUnit(value: string) {
    this._organizationUnit = value;
  }
  public resetOrganizationUnit() {
    this._organizationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
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

  // rotation_settings - computed: true, optional: false, required: false
  private _rotationSettings = new KeypairsSslServerKeyRotationSettingsOutputReference(this, "rotation_settings");
  public get rotationSettings() {
    return this._rotationSettings;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // signature_algorithm - computed: true, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: true, required: false
  private _subjectAlternativeNames?: string[]; 
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames;
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
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

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city: cdktf.stringToTerraform(this._city),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      crypto_provider: cdktf.stringToTerraform(this._cryptoProvider),
      file_data: cdktf.stringToTerraform(this._fileData),
      format: cdktf.stringToTerraform(this._format),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_size: cdktf.numberToTerraform(this._keySize),
      organization: cdktf.stringToTerraform(this._organization),
      organization_unit: cdktf.stringToTerraform(this._organizationUnit),
      password: cdktf.stringToTerraform(this._password),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      state: cdktf.stringToTerraform(this._state),
      subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectAlternativeNames),
      valid_days: cdktf.numberToTerraform(this._validDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city: {
        value: cdktf.stringToHclTerraform(this._city),
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
      crypto_provider: {
        value: cdktf.stringToHclTerraform(this._cryptoProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_data: {
        value: cdktf.stringToHclTerraform(this._fileData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_unit: {
        value: cdktf.stringToHclTerraform(this._organizationUnit),
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
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
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
      subject_alternative_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjectAlternativeNames),
        isBlock: false,
        type: "set",
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
