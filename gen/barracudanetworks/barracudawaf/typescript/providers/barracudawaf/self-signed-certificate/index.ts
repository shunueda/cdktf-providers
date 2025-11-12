// https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SelfSignedCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set to <b>Yes</b>, the Private Key gets downloaded along with the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#allow_private_key_export SelfSignedCertificate#allow_private_key_export}
  */
  readonly allowPrivateKeyExport?: string;
  /**
  * Locality Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#city SelfSignedCertificate#city}
  */
  readonly city?: string;
  /**
  * Common Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#common_name SelfSignedCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * Country
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#country_code SelfSignedCertificate#country_code}
  */
  readonly countryCode: string;
  /**
  * Elliptic Curve Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#elliptic_curve_name SelfSignedCertificate#elliptic_curve_name}
  */
  readonly ellipticCurveName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#id SelfSignedCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key Size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#key_size SelfSignedCertificate#key_size}
  */
  readonly keySize?: string;
  /**
  * Select Key Type:
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#key_type SelfSignedCertificate#key_type}
  */
  readonly keyType?: string;
  /**
  * None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#name SelfSignedCertificate#name}
  */
  readonly name: string;
  /**
  * Organization Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#organization_name SelfSignedCertificate#organization_name}
  */
  readonly organizationName?: string;
  /**
  * Organizational Unit Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#organizational_unit SelfSignedCertificate#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * SAN Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#san_certificate SelfSignedCertificate#san_certificate}
  */
  readonly sanCertificate?: string[];
  /**
  * State or Province
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#state SelfSignedCertificate#state}
  */
  readonly state?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate barracudawaf_self_signed_certificate}
*/
export class SelfSignedCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "barracudawaf_self_signed_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SelfSignedCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SelfSignedCertificate to import
  * @param importFromId The id of the existing SelfSignedCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SelfSignedCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "barracudawaf_self_signed_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barracudanetworks/barracudawaf/1.0.10/docs/resources/self_signed_certificate barracudawaf_self_signed_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SelfSignedCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SelfSignedCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'barracudawaf_self_signed_certificate',
      terraformGeneratorMetadata: {
        providerName: 'barracudawaf',
        providerVersion: '1.0.10',
        providerVersionConstraint: '1.0.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPrivateKeyExport = config.allowPrivateKeyExport;
    this._city = config.city;
    this._commonName = config.commonName;
    this._countryCode = config.countryCode;
    this._ellipticCurveName = config.ellipticCurveName;
    this._id = config.id;
    this._keySize = config.keySize;
    this._keyType = config.keyType;
    this._name = config.name;
    this._organizationName = config.organizationName;
    this._organizationalUnit = config.organizationalUnit;
    this._sanCertificate = config.sanCertificate;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_private_key_export - computed: false, optional: true, required: false
  private _allowPrivateKeyExport?: string; 
  public get allowPrivateKeyExport() {
    return this.getStringAttribute('allow_private_key_export');
  }
  public set allowPrivateKeyExport(value: string) {
    this._allowPrivateKeyExport = value;
  }
  public resetAllowPrivateKeyExport() {
    this._allowPrivateKeyExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivateKeyExportInput() {
    return this._allowPrivateKeyExport;
  }

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

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // elliptic_curve_name - computed: false, optional: true, required: false
  private _ellipticCurveName?: string; 
  public get ellipticCurveName() {
    return this.getStringAttribute('elliptic_curve_name');
  }
  public set ellipticCurveName(value: string) {
    this._ellipticCurveName = value;
  }
  public resetEllipticCurveName() {
    this._ellipticCurveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ellipticCurveNameInput() {
    return this._ellipticCurveName;
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

  // key_size - computed: false, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
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

  // organization_name - computed: false, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // san_certificate - computed: false, optional: true, required: false
  private _sanCertificate?: string[]; 
  public get sanCertificate() {
    return this.getListAttribute('san_certificate');
  }
  public set sanCertificate(value: string[]) {
    this._sanCertificate = value;
  }
  public resetSanCertificate() {
    this._sanCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanCertificateInput() {
    return this._sanCertificate;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_private_key_export: cdktf.stringToTerraform(this._allowPrivateKeyExport),
      city: cdktf.stringToTerraform(this._city),
      common_name: cdktf.stringToTerraform(this._commonName),
      country_code: cdktf.stringToTerraform(this._countryCode),
      elliptic_curve_name: cdktf.stringToTerraform(this._ellipticCurveName),
      id: cdktf.stringToTerraform(this._id),
      key_size: cdktf.stringToTerraform(this._keySize),
      key_type: cdktf.stringToTerraform(this._keyType),
      name: cdktf.stringToTerraform(this._name),
      organization_name: cdktf.stringToTerraform(this._organizationName),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      san_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sanCertificate),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_private_key_export: {
        value: cdktf.stringToHclTerraform(this._allowPrivateKeyExport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elliptic_curve_name: {
        value: cdktf.stringToHclTerraform(this._ellipticCurveName),
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
      key_size: {
        value: cdktf.stringToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      organization_name: {
        value: cdktf.stringToHclTerraform(this._organizationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      san_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sanCertificate),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
