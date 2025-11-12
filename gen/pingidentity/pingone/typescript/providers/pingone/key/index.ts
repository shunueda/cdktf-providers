// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the key algorithm.  Options are `EC`, `RSA`, `UNKNOWN`.  Conflicts with `pkcs12_file_base64`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#algorithm Key#algorithm}
  */
  readonly algorithm?: string;
  /**
  * A URL string of a custom Certificate Revokation List endpoint.  Used for certificates of type `ISSUANCE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#custom_crl Key#custom_crl}
  */
  readonly customCrl?: string;
  /**
  * A boolean that specifies whether this is the default key for the specified environment.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#default Key#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * The ID of the environment to manage the key in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#environment_id Key#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the distinguished name of the certificate issuer.  Conflicts with `pkcs12_file_base64`, `pkcs12_file_password`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#issuer_dn Key#issuer_dn}
  */
  readonly issuerDn?: string;
  /**
  * An integer that specifies the key length. For RSA keys, options are `2048`, `3072`, `4096` and `7680`. For elliptical curve (EC) keys, options are `224`, `256`, `384` and `521`.  Conflicts with `pkcs12_file_base64`, `pkcs12_file_password`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#key_length Key#key_length}
  */
  readonly keyLength?: number;
  /**
  * A string that specifies the system name of the key.  Conflicts with `pkcs12_file_base64`, `pkcs12_file_password`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#name Key#name}
  */
  readonly name?: string;
  /**
  * A base64 encoded PKCS12 file to import.  Conflicts with `name`, `algorithm`, `issuer_dn`, `key_length`, `serial_number`, `signature_algorithm`, `subject_dn`, `validity_period`, `custom_crl`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#pkcs12_file_base64 Key#pkcs12_file_base64}
  */
  readonly pkcs12FileBase64?: string;
  /**
  * A string that specifies the password to decrypt the PKCS12 file, if it is encrypted.  Optional if `pkcs12_file_base64` is defined.  Conflicts with `name`, `algorithm`, `issuer_dn`, `key_length`, `serial_number`, `signature_algorithm`, `subject_dn`, `validity_period`, `custom_crl`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#pkcs12_file_password Key#pkcs12_file_password}
  */
  readonly pkcs12FilePassword?: string;
  /**
  * An integer (in string data type) that specifies the serial number of the key or certificate.  Conflicts with `pkcs12_file_base64`, `pkcs12_file_password`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#serial_number Key#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * A string that specifies the signature algorithm of the key. For RSA keys, options are `SHA256withRSA`, `SHA384withRSA` and `SHA512withRSA`. For elliptical curve (EC) keys, options are `SHA256withECDSA`, `SHA384withECDSA` and `SHA512withECDSA`.  Conflicts with `pkcs12_file_base64`, `pkcs12_file_password`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#signature_algorithm Key#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * A string that specifies the distinguished name of the subject being secured.  Conflicts with `pkcs12_file_base64`, `pkcs12_file_password`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#subject_dn Key#subject_dn}
  */
  readonly subjectDn?: string;
  /**
  * A string that specifies how the certificate is used.  Options are `ENCRYPTION`, `ISSUANCE`, `OUTBOUND_MTLS`, `SIGNING`, `SSL/TLS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#usage_type Key#usage_type}
  */
  readonly usageType: string;
  /**
  * An integer that specifies the number of days the key is valid.  Conflicts with `pkcs12_file_base64`, `pkcs12_file_password`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#validity_period Key#validity_period}
  */
  readonly validityPeriod?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key pingone_key}
*/
export class Key extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Key resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Key to import
  * @param importFromId The id of the existing Key that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Key to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/key pingone_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyConfig
  */
  public constructor(scope: Construct, id: string, config: KeyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_key',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._customCrl = config.customCrl;
    this._default = config.default;
    this._environmentId = config.environmentId;
    this._issuerDn = config.issuerDn;
    this._keyLength = config.keyLength;
    this._name = config.name;
    this._pkcs12FileBase64 = config.pkcs12FileBase64;
    this._pkcs12FilePassword = config.pkcs12FilePassword;
    this._serialNumber = config.serialNumber;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._subjectDn = config.subjectDn;
    this._usageType = config.usageType;
    this._validityPeriod = config.validityPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
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

  // custom_crl - computed: false, optional: true, required: false
  private _customCrl?: string; 
  public get customCrl() {
    return this.getStringAttribute('custom_crl');
  }
  public set customCrl(value: string) {
    this._customCrl = value;
  }
  public resetCustomCrl() {
    this._customCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCrlInput() {
    return this._customCrl;
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_dn - computed: true, optional: true, required: false
  private _issuerDn?: string; 
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }
  public set issuerDn(value: string) {
    this._issuerDn = value;
  }
  public resetIssuerDn() {
    this._issuerDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerDnInput() {
    return this._issuerDn;
  }

  // key_length - computed: true, optional: true, required: false
  private _keyLength?: number; 
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }
  public set keyLength(value: number) {
    this._keyLength = value;
  }
  public resetKeyLength() {
    this._keyLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLengthInput() {
    return this._keyLength;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pkcs12_file_base64 - computed: false, optional: true, required: false
  private _pkcs12FileBase64?: string; 
  public get pkcs12FileBase64() {
    return this.getStringAttribute('pkcs12_file_base64');
  }
  public set pkcs12FileBase64(value: string) {
    this._pkcs12FileBase64 = value;
  }
  public resetPkcs12FileBase64() {
    this._pkcs12FileBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs12FileBase64Input() {
    return this._pkcs12FileBase64;
  }

  // pkcs12_file_password - computed: false, optional: true, required: false
  private _pkcs12FilePassword?: string; 
  public get pkcs12FilePassword() {
    return this.getStringAttribute('pkcs12_file_password');
  }
  public set pkcs12FilePassword(value: string) {
    this._pkcs12FilePassword = value;
  }
  public resetPkcs12FilePassword() {
    this._pkcs12FilePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs12FilePasswordInput() {
    return this._pkcs12FilePassword;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
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

  // starts_at - computed: true, optional: false, required: false
  public get startsAt() {
    return this.getStringAttribute('starts_at');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_dn - computed: true, optional: true, required: false
  private _subjectDn?: string; 
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }
  public set subjectDn(value: string) {
    this._subjectDn = value;
  }
  public resetSubjectDn() {
    this._subjectDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectDnInput() {
    return this._subjectDn;
  }

  // usage_type - computed: false, optional: false, required: true
  private _usageType?: string; 
  public get usageType() {
    return this.getStringAttribute('usage_type');
  }
  public set usageType(value: string) {
    this._usageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usageTypeInput() {
    return this._usageType;
  }

  // validity_period - computed: true, optional: true, required: false
  private _validityPeriod?: number; 
  public get validityPeriod() {
    return this.getNumberAttribute('validity_period');
  }
  public set validityPeriod(value: number) {
    this._validityPeriod = value;
  }
  public resetValidityPeriod() {
    this._validityPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityPeriodInput() {
    return this._validityPeriod;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      custom_crl: cdktf.stringToTerraform(this._customCrl),
      default: cdktf.booleanToTerraform(this._default),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      issuer_dn: cdktf.stringToTerraform(this._issuerDn),
      key_length: cdktf.numberToTerraform(this._keyLength),
      name: cdktf.stringToTerraform(this._name),
      pkcs12_file_base64: cdktf.stringToTerraform(this._pkcs12FileBase64),
      pkcs12_file_password: cdktf.stringToTerraform(this._pkcs12FilePassword),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      subject_dn: cdktf.stringToTerraform(this._subjectDn),
      usage_type: cdktf.stringToTerraform(this._usageType),
      validity_period: cdktf.numberToTerraform(this._validityPeriod),
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
      custom_crl: {
        value: cdktf.stringToHclTerraform(this._customCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_dn: {
        value: cdktf.stringToHclTerraform(this._issuerDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_length: {
        value: cdktf.numberToHclTerraform(this._keyLength),
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
      pkcs12_file_base64: {
        value: cdktf.stringToHclTerraform(this._pkcs12FileBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkcs12_file_password: {
        value: cdktf.stringToHclTerraform(this._pkcs12FilePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
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
      subject_dn: {
        value: cdktf.stringToHclTerraform(this._subjectDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_type: {
        value: cdktf.stringToHclTerraform(this._usageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_period: {
        value: cdktf.numberToHclTerraform(this._validityPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
