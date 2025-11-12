// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DfcKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * DFCKey type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, AES128CBC, AES256CBC, RSA1024, RSA2048, RSA3072, RSA4096]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#alg DfcKey#alg}
  */
  readonly alg: string;
  /**
  * Whether to automatically rotate every rotation_interval days, or disable existing automatic rotation [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#auto_rotate DfcKey#auto_rotate}
  */
  readonly autoRotate?: string;
  /**
  * PEM Certificate in a Base64 format. Used for updating RSA keys' certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#cert_data_base64 DfcKey#cert_data_base64}
  */
  readonly certDataBase64?: string;
  /**
  * Common name for the generated certificate. Relevant only for generate-self-signed-certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#certificate_common_name DfcKey#certificate_common_name}
  */
  readonly certificateCommonName?: string;
  /**
  * Country name for the generated certificate. Relevant only for generate-self-signed-certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#certificate_country DfcKey#certificate_country}
  */
  readonly certificateCountry?: string;
  /**
  * The format of the returned certificate [pem/der]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#certificate_format DfcKey#certificate_format}
  */
  readonly certificateFormat?: string;
  /**
  * Locality for the generated certificate. Relevant only for generate-self-signed-certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#certificate_locality DfcKey#certificate_locality}
  */
  readonly certificateLocality?: string;
  /**
  * Organization name for the generated certificate. Relevant only for generate-self-signed-certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#certificate_organization DfcKey#certificate_organization}
  */
  readonly certificateOrganization?: string;
  /**
  * Province name for the generated certificate. Relevant only for generate-self-signed-certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#certificate_province DfcKey#certificate_province}
  */
  readonly certificateProvince?: string;
  /**
  * TTL in days for the generated certificate. Required only for generate-self-signed-certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#certificate_ttl DfcKey#certificate_ttl}
  */
  readonly certificateTtl?: number;
  /**
  * The csr config data in base64 encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#conf_file_data DfcKey#conf_file_data}
  */
  readonly confFileData?: string;
  /**
  * The customer fragment ID that will be used to create the DFC key (if empty, the key will be created independently of a customer fragment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#customer_frg_id DfcKey#customer_frg_id}
  */
  readonly customerFrgId?: string;
  /**
  * Protection from accidental deletion of this item, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#delete_protection DfcKey#delete_protection}
  */
  readonly deleteProtection?: boolean | cdktf.IResolvable;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#description DfcKey#description}
  */
  readonly description?: string;
  /**
  * How many days before the expiration of the certificate would you like to be notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#expiration_event_in DfcKey#expiration_event_in}
  */
  readonly expirationEventIn?: string[];
  /**
  * Whether to generate a self signed certificate with the key. If set, certificate-ttl must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#generate_self_signed_certificate DfcKey#generate_self_signed_certificate}
  */
  readonly generateSelfSignedCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#id DfcKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DFCKey name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#name DfcKey#name}
  */
  readonly name: string;
  /**
  * How many days before the rotation of the item would you like to be notified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#rotation_event_in DfcKey#rotation_event_in}
  */
  readonly rotationEventIn?: string[];
  /**
  * The number of days to wait between every automatic rotation (7-365)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#rotation_interval DfcKey#rotation_interval}
  */
  readonly rotationInterval?: string;
  /**
  * The number of fragments that the item will be split into (not includes customer fragment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#split_level DfcKey#split_level}
  */
  readonly splitLevel?: number;
  /**
  * List of the tags attached to this DFC key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#tags DfcKey#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key akeyless_dfc_key}
*/
export class DfcKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dfc_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DfcKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DfcKey to import
  * @param importFromId The id of the existing DfcKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DfcKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dfc_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dfc_key akeyless_dfc_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DfcKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DfcKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dfc_key',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alg = config.alg;
    this._autoRotate = config.autoRotate;
    this._certDataBase64 = config.certDataBase64;
    this._certificateCommonName = config.certificateCommonName;
    this._certificateCountry = config.certificateCountry;
    this._certificateFormat = config.certificateFormat;
    this._certificateLocality = config.certificateLocality;
    this._certificateOrganization = config.certificateOrganization;
    this._certificateProvince = config.certificateProvince;
    this._certificateTtl = config.certificateTtl;
    this._confFileData = config.confFileData;
    this._customerFrgId = config.customerFrgId;
    this._deleteProtection = config.deleteProtection;
    this._description = config.description;
    this._expirationEventIn = config.expirationEventIn;
    this._generateSelfSignedCertificate = config.generateSelfSignedCertificate;
    this._id = config.id;
    this._name = config.name;
    this._rotationEventIn = config.rotationEventIn;
    this._rotationInterval = config.rotationInterval;
    this._splitLevel = config.splitLevel;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alg - computed: false, optional: false, required: true
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // auto_rotate - computed: false, optional: true, required: false
  private _autoRotate?: string; 
  public get autoRotate() {
    return this.getStringAttribute('auto_rotate');
  }
  public set autoRotate(value: string) {
    this._autoRotate = value;
  }
  public resetAutoRotate() {
    this._autoRotate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotateInput() {
    return this._autoRotate;
  }

  // cert_data_base64 - computed: true, optional: true, required: false
  private _certDataBase64?: string; 
  public get certDataBase64() {
    return this.getStringAttribute('cert_data_base64');
  }
  public set certDataBase64(value: string) {
    this._certDataBase64 = value;
  }
  public resetCertDataBase64() {
    this._certDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataBase64Input() {
    return this._certDataBase64;
  }

  // certificate_common_name - computed: false, optional: true, required: false
  private _certificateCommonName?: string; 
  public get certificateCommonName() {
    return this.getStringAttribute('certificate_common_name');
  }
  public set certificateCommonName(value: string) {
    this._certificateCommonName = value;
  }
  public resetCertificateCommonName() {
    this._certificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCommonNameInput() {
    return this._certificateCommonName;
  }

  // certificate_country - computed: false, optional: true, required: false
  private _certificateCountry?: string; 
  public get certificateCountry() {
    return this.getStringAttribute('certificate_country');
  }
  public set certificateCountry(value: string) {
    this._certificateCountry = value;
  }
  public resetCertificateCountry() {
    this._certificateCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateCountryInput() {
    return this._certificateCountry;
  }

  // certificate_format - computed: false, optional: true, required: false
  private _certificateFormat?: string; 
  public get certificateFormat() {
    return this.getStringAttribute('certificate_format');
  }
  public set certificateFormat(value: string) {
    this._certificateFormat = value;
  }
  public resetCertificateFormat() {
    this._certificateFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFormatInput() {
    return this._certificateFormat;
  }

  // certificate_locality - computed: false, optional: true, required: false
  private _certificateLocality?: string; 
  public get certificateLocality() {
    return this.getStringAttribute('certificate_locality');
  }
  public set certificateLocality(value: string) {
    this._certificateLocality = value;
  }
  public resetCertificateLocality() {
    this._certificateLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateLocalityInput() {
    return this._certificateLocality;
  }

  // certificate_organization - computed: false, optional: true, required: false
  private _certificateOrganization?: string; 
  public get certificateOrganization() {
    return this.getStringAttribute('certificate_organization');
  }
  public set certificateOrganization(value: string) {
    this._certificateOrganization = value;
  }
  public resetCertificateOrganization() {
    this._certificateOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateOrganizationInput() {
    return this._certificateOrganization;
  }

  // certificate_province - computed: false, optional: true, required: false
  private _certificateProvince?: string; 
  public get certificateProvince() {
    return this.getStringAttribute('certificate_province');
  }
  public set certificateProvince(value: string) {
    this._certificateProvince = value;
  }
  public resetCertificateProvince() {
    this._certificateProvince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProvinceInput() {
    return this._certificateProvince;
  }

  // certificate_ttl - computed: false, optional: true, required: false
  private _certificateTtl?: number; 
  public get certificateTtl() {
    return this.getNumberAttribute('certificate_ttl');
  }
  public set certificateTtl(value: number) {
    this._certificateTtl = value;
  }
  public resetCertificateTtl() {
    this._certificateTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTtlInput() {
    return this._certificateTtl;
  }

  // conf_file_data - computed: false, optional: true, required: false
  private _confFileData?: string; 
  public get confFileData() {
    return this.getStringAttribute('conf_file_data');
  }
  public set confFileData(value: string) {
    this._confFileData = value;
  }
  public resetConfFileData() {
    this._confFileData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confFileDataInput() {
    return this._confFileData;
  }

  // customer_frg_id - computed: false, optional: true, required: false
  private _customerFrgId?: string; 
  public get customerFrgId() {
    return this.getStringAttribute('customer_frg_id');
  }
  public set customerFrgId(value: string) {
    this._customerFrgId = value;
  }
  public resetCustomerFrgId() {
    this._customerFrgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerFrgIdInput() {
    return this._customerFrgId;
  }

  // delete_protection - computed: false, optional: true, required: false
  private _deleteProtection?: boolean | cdktf.IResolvable; 
  public get deleteProtection() {
    return this.getBooleanAttribute('delete_protection');
  }
  public set deleteProtection(value: boolean | cdktf.IResolvable) {
    this._deleteProtection = value;
  }
  public resetDeleteProtection() {
    this._deleteProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionInput() {
    return this._deleteProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expiration_event_in - computed: false, optional: true, required: false
  private _expirationEventIn?: string[]; 
  public get expirationEventIn() {
    return cdktf.Fn.tolist(this.getListAttribute('expiration_event_in'));
  }
  public set expirationEventIn(value: string[]) {
    this._expirationEventIn = value;
  }
  public resetExpirationEventIn() {
    this._expirationEventIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationEventInInput() {
    return this._expirationEventIn;
  }

  // generate_self_signed_certificate - computed: false, optional: true, required: false
  private _generateSelfSignedCertificate?: boolean | cdktf.IResolvable; 
  public get generateSelfSignedCertificate() {
    return this.getBooleanAttribute('generate_self_signed_certificate');
  }
  public set generateSelfSignedCertificate(value: boolean | cdktf.IResolvable) {
    this._generateSelfSignedCertificate = value;
  }
  public resetGenerateSelfSignedCertificate() {
    this._generateSelfSignedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSelfSignedCertificateInput() {
    return this._generateSelfSignedCertificate;
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

  // rotation_event_in - computed: false, optional: true, required: false
  private _rotationEventIn?: string[]; 
  public get rotationEventIn() {
    return cdktf.Fn.tolist(this.getListAttribute('rotation_event_in'));
  }
  public set rotationEventIn(value: string[]) {
    this._rotationEventIn = value;
  }
  public resetRotationEventIn() {
    this._rotationEventIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationEventInInput() {
    return this._rotationEventIn;
  }

  // rotation_interval - computed: false, optional: true, required: false
  private _rotationInterval?: string; 
  public get rotationInterval() {
    return this.getStringAttribute('rotation_interval');
  }
  public set rotationInterval(value: string) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }

  // split_level - computed: false, optional: true, required: false
  private _splitLevel?: number; 
  public get splitLevel() {
    return this.getNumberAttribute('split_level');
  }
  public set splitLevel(value: number) {
    this._splitLevel = value;
  }
  public resetSplitLevel() {
    this._splitLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitLevelInput() {
    return this._splitLevel;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alg: cdktf.stringToTerraform(this._alg),
      auto_rotate: cdktf.stringToTerraform(this._autoRotate),
      cert_data_base64: cdktf.stringToTerraform(this._certDataBase64),
      certificate_common_name: cdktf.stringToTerraform(this._certificateCommonName),
      certificate_country: cdktf.stringToTerraform(this._certificateCountry),
      certificate_format: cdktf.stringToTerraform(this._certificateFormat),
      certificate_locality: cdktf.stringToTerraform(this._certificateLocality),
      certificate_organization: cdktf.stringToTerraform(this._certificateOrganization),
      certificate_province: cdktf.stringToTerraform(this._certificateProvince),
      certificate_ttl: cdktf.numberToTerraform(this._certificateTtl),
      conf_file_data: cdktf.stringToTerraform(this._confFileData),
      customer_frg_id: cdktf.stringToTerraform(this._customerFrgId),
      delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
      description: cdktf.stringToTerraform(this._description),
      expiration_event_in: cdktf.listMapper(cdktf.stringToTerraform, false)(this._expirationEventIn),
      generate_self_signed_certificate: cdktf.booleanToTerraform(this._generateSelfSignedCertificate),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rotation_event_in: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rotationEventIn),
      rotation_interval: cdktf.stringToTerraform(this._rotationInterval),
      split_level: cdktf.numberToTerraform(this._splitLevel),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alg: {
        value: cdktf.stringToHclTerraform(this._alg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_rotate: {
        value: cdktf.stringToHclTerraform(this._autoRotate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_data_base64: {
        value: cdktf.stringToHclTerraform(this._certDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_common_name: {
        value: cdktf.stringToHclTerraform(this._certificateCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_country: {
        value: cdktf.stringToHclTerraform(this._certificateCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_format: {
        value: cdktf.stringToHclTerraform(this._certificateFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_locality: {
        value: cdktf.stringToHclTerraform(this._certificateLocality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_organization: {
        value: cdktf.stringToHclTerraform(this._certificateOrganization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_province: {
        value: cdktf.stringToHclTerraform(this._certificateProvince),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_ttl: {
        value: cdktf.numberToHclTerraform(this._certificateTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      conf_file_data: {
        value: cdktf.stringToHclTerraform(this._confFileData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_frg_id: {
        value: cdktf.stringToHclTerraform(this._customerFrgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection: {
        value: cdktf.booleanToHclTerraform(this._deleteProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_event_in: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._expirationEventIn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      generate_self_signed_certificate: {
        value: cdktf.booleanToHclTerraform(this._generateSelfSignedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      rotation_event_in: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rotationEventIn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rotation_interval: {
        value: cdktf.stringToHclTerraform(this._rotationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_level: {
        value: cdktf.numberToHclTerraform(this._splitLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
