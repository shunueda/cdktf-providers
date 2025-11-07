// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TlsCertKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The residing cty of the certificate holder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#city TlsCertKey#city}
  */
  readonly city?: string;
  /**
  * This specifies the confirmation of the passphrase for the key, the value should be the same as the `key_passphrase`. This attribute is required when `key_type` is set to `encrypted-rsa` or `encrypted-ecdsa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#confirm_key_passphrase TlsCertKey#confirm_key_passphrase}
  */
  readonly confirmKeyPassphrase?: string;
  /**
  * The residing country of the certificate holder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#country TlsCertKey#country}
  */
  readonly country?: string;
  /**
  * The number of days for which the certificate is valid, the default value is 30 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#days_valid TlsCertKey#days_valid}
  */
  readonly daysValid?: number;
  /**
  * The email address of the certificate holder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#email TlsCertKey#email}
  */
  readonly email?: string;
  /**
  * This specifies the specific elliptic curve used in ECC, this is only applicable for ECDSA keys. This attribute is required when `key_type` is set to `ecdsa` or `encrypted-ecdsa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#key_curve TlsCertKey#key_curve}
  */
  readonly keyCurve?: string;
  /**
  * This specifies the passphrase for the key. This attribute is required when `key_type` is set to `encrypted-rsa` or `encrypted-ecdsa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#key_passphrase TlsCertKey#key_passphrase}
  */
  readonly keyPassphrase?: string;
  /**
  * This specifies the length of the key, this is only applicable for RSA keys. This attribute is required when `key_type` is set to `rsa` or `encrypted-rsa`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#key_size TlsCertKey#key_size}
  */
  readonly keySize?: number;
  /**
  * The type of the tls key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#key_type TlsCertKey#key_type}
  */
  readonly keyType?: string;
  /**
  * Name of the tls certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#name TlsCertKey#name}
  */
  readonly name: string;
  /**
  * The organization of the certificate holder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#organization TlsCertKey#organization}
  */
  readonly organization?: string;
  /**
  * The residing province of the certificate holder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#province TlsCertKey#province}
  */
  readonly province?: string;
  /**
  * The subject alternative name of the tls certificate. This attribute is required for F5OS v1.8 and above and not supported for F5OS below v1.8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#subject_alternative_name TlsCertKey#subject_alternative_name}
  */
  readonly subjectAlternativeName?: string;
  /**
  * The organizational unit of the certificate holder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#unit TlsCertKey#unit}
  */
  readonly unit?: string;
  /**
  * The version of the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#version TlsCertKey#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key f5os_tls_cert_key}
*/
export class TlsCertKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_tls_cert_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TlsCertKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsCertKey to import
  * @param importFromId The id of the existing TlsCertKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsCertKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_tls_cert_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/tls_cert_key f5os_tls_cert_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsCertKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TlsCertKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_tls_cert_key',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0'
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
    this._confirmKeyPassphrase = config.confirmKeyPassphrase;
    this._country = config.country;
    this._daysValid = config.daysValid;
    this._email = config.email;
    this._keyCurve = config.keyCurve;
    this._keyPassphrase = config.keyPassphrase;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._name = config.name;
    this._organization = config.organization;
    this._province = config.province;
    this._subjectAlternativeName = config.subjectAlternativeName;
    this._unit = config.unit;
    this._version = config.version;
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

  // confirm_key_passphrase - computed: false, optional: true, required: false
  private _confirmKeyPassphrase?: string; 
  public get confirmKeyPassphrase() {
    return this.getStringAttribute('confirm_key_passphrase');
  }
  public set confirmKeyPassphrase(value: string) {
    this._confirmKeyPassphrase = value;
  }
  public resetConfirmKeyPassphrase() {
    this._confirmKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmKeyPassphraseInput() {
    return this._confirmKeyPassphrase;
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

  // days_valid - computed: true, optional: true, required: false
  private _daysValid?: number; 
  public get daysValid() {
    return this.getNumberAttribute('days_valid');
  }
  public set daysValid(value: number) {
    this._daysValid = value;
  }
  public resetDaysValid() {
    this._daysValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysValidInput() {
    return this._daysValid;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
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

  // key_curve - computed: false, optional: true, required: false
  private _keyCurve?: string; 
  public get keyCurve() {
    return this.getStringAttribute('key_curve');
  }
  public set keyCurve(value: string) {
    this._keyCurve = value;
  }
  public resetKeyCurve() {
    this._keyCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCurveInput() {
    return this._keyCurve;
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

  // key_size - computed: false, optional: true, required: false
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

  // key_type - computed: false, optional: true, required: false
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

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
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

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city: cdktf.stringToTerraform(this._city),
      confirm_key_passphrase: cdktf.stringToTerraform(this._confirmKeyPassphrase),
      country: cdktf.stringToTerraform(this._country),
      days_valid: cdktf.numberToTerraform(this._daysValid),
      email: cdktf.stringToTerraform(this._email),
      key_curve: cdktf.stringToTerraform(this._keyCurve),
      key_passphrase: cdktf.stringToTerraform(this._keyPassphrase),
      key_size: cdktf.numberToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      province: cdktf.stringToTerraform(this._province),
      subject_alternative_name: cdktf.stringToTerraform(this._subjectAlternativeName),
      unit: cdktf.stringToTerraform(this._unit),
      version: cdktf.numberToTerraform(this._version),
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
      confirm_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._confirmKeyPassphrase),
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
      days_valid: {
        value: cdktf.numberToHclTerraform(this._daysValid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_curve: {
        value: cdktf.stringToHclTerraform(this._keyCurve),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      province: {
        value: cdktf.stringToHclTerraform(this._province),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_alternative_name: {
        value: cdktf.stringToHclTerraform(this._subjectAlternativeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
