// https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CreateCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#bit_length CreateCertificate#bit_length}
  */
  readonly bitLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#ca_setting_name CreateCertificate#ca_setting_name}
  */
  readonly caSettingName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#certificate_authority CreateCertificate#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#certificate_chain_required CreateCertificate#certificate_chain_required}
  */
  readonly certificateChainRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#certificate_download_format CreateCertificate#certificate_download_format}
  */
  readonly certificateDownloadFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#certificate_download_password CreateCertificate#certificate_download_password}
  */
  readonly certificateDownloadPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#certificate_download_path CreateCertificate#certificate_download_path}
  */
  readonly certificateDownloadPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#certificate_group_name CreateCertificate#certificate_group_name}
  */
  readonly certificateGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#certificate_type CreateCertificate#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#common_name CreateCertificate#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#custom_fields CreateCertificate#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#dns_names CreateCertificate#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#download_password_protected_key CreateCertificate#download_password_protected_key}
  */
  readonly downloadPasswordProtectedKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#hash_function CreateCertificate#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#id CreateCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#is_sync CreateCertificate#is_sync}
  */
  readonly isSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#key_download_password CreateCertificate#key_download_password}
  */
  readonly keyDownloadPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#key_download_path CreateCertificate#key_download_path}
  */
  readonly keyDownloadPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#key_type CreateCertificate#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#validity_days CreateCertificate#validity_days}
  */
  readonly validityDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#validity_unit CreateCertificate#validity_unit}
  */
  readonly validityUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#validity_unit_value CreateCertificate#validity_unit_value}
  */
  readonly validityUnitValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#vendor_specific_fields CreateCertificate#vendor_specific_fields}
  */
  readonly vendorSpecificFields?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate appviewx_create_certificate}
*/
export class CreateCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_create_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CreateCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CreateCertificate to import
  * @param importFromId The id of the existing CreateCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CreateCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_create_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/create_certificate appviewx_create_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CreateCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CreateCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'appviewx_create_certificate',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bitLength = config.bitLength;
    this._caSettingName = config.caSettingName;
    this._certificateAuthority = config.certificateAuthority;
    this._certificateChainRequired = config.certificateChainRequired;
    this._certificateDownloadFormat = config.certificateDownloadFormat;
    this._certificateDownloadPassword = config.certificateDownloadPassword;
    this._certificateDownloadPath = config.certificateDownloadPath;
    this._certificateGroupName = config.certificateGroupName;
    this._certificateType = config.certificateType;
    this._commonName = config.commonName;
    this._customFields = config.customFields;
    this._dnsNames = config.dnsNames;
    this._downloadPasswordProtectedKey = config.downloadPasswordProtectedKey;
    this._hashFunction = config.hashFunction;
    this._id = config.id;
    this._isSync = config.isSync;
    this._keyDownloadPassword = config.keyDownloadPassword;
    this._keyDownloadPath = config.keyDownloadPath;
    this._keyType = config.keyType;
    this._validityDays = config.validityDays;
    this._validityUnit = config.validityUnit;
    this._validityUnitValue = config.validityUnitValue;
    this._vendorSpecificFields = config.vendorSpecificFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bit_length - computed: false, optional: true, required: false
  private _bitLength?: string; 
  public get bitLength() {
    return this.getStringAttribute('bit_length');
  }
  public set bitLength(value: string) {
    this._bitLength = value;
  }
  public resetBitLength() {
    this._bitLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitLengthInput() {
    return this._bitLength;
  }

  // ca_setting_name - computed: false, optional: true, required: false
  private _caSettingName?: string; 
  public get caSettingName() {
    return this.getStringAttribute('ca_setting_name');
  }
  public set caSettingName(value: string) {
    this._caSettingName = value;
  }
  public resetCaSettingName() {
    this._caSettingName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSettingNameInput() {
    return this._caSettingName;
  }

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // certificate_chain_required - computed: false, optional: true, required: false
  private _certificateChainRequired?: boolean | cdktf.IResolvable; 
  public get certificateChainRequired() {
    return this.getBooleanAttribute('certificate_chain_required');
  }
  public set certificateChainRequired(value: boolean | cdktf.IResolvable) {
    this._certificateChainRequired = value;
  }
  public resetCertificateChainRequired() {
    this._certificateChainRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainRequiredInput() {
    return this._certificateChainRequired;
  }

  // certificate_download_format - computed: false, optional: true, required: false
  private _certificateDownloadFormat?: string; 
  public get certificateDownloadFormat() {
    return this.getStringAttribute('certificate_download_format');
  }
  public set certificateDownloadFormat(value: string) {
    this._certificateDownloadFormat = value;
  }
  public resetCertificateDownloadFormat() {
    this._certificateDownloadFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadFormatInput() {
    return this._certificateDownloadFormat;
  }

  // certificate_download_password - computed: false, optional: true, required: false
  private _certificateDownloadPassword?: string; 
  public get certificateDownloadPassword() {
    return this.getStringAttribute('certificate_download_password');
  }
  public set certificateDownloadPassword(value: string) {
    this._certificateDownloadPassword = value;
  }
  public resetCertificateDownloadPassword() {
    this._certificateDownloadPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadPasswordInput() {
    return this._certificateDownloadPassword;
  }

  // certificate_download_path - computed: false, optional: true, required: false
  private _certificateDownloadPath?: string; 
  public get certificateDownloadPath() {
    return this.getStringAttribute('certificate_download_path');
  }
  public set certificateDownloadPath(value: string) {
    this._certificateDownloadPath = value;
  }
  public resetCertificateDownloadPath() {
    this._certificateDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadPathInput() {
    return this._certificateDownloadPath;
  }

  // certificate_group_name - computed: false, optional: true, required: false
  private _certificateGroupName?: string; 
  public get certificateGroupName() {
    return this.getStringAttribute('certificate_group_name');
  }
  public set certificateGroupName(value: string) {
    this._certificateGroupName = value;
  }
  public resetCertificateGroupName() {
    this._certificateGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateGroupNameInput() {
    return this._certificateGroupName;
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
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

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // download_password_protected_key - computed: false, optional: true, required: false
  private _downloadPasswordProtectedKey?: boolean | cdktf.IResolvable; 
  public get downloadPasswordProtectedKey() {
    return this.getBooleanAttribute('download_password_protected_key');
  }
  public set downloadPasswordProtectedKey(value: boolean | cdktf.IResolvable) {
    this._downloadPasswordProtectedKey = value;
  }
  public resetDownloadPasswordProtectedKey() {
    this._downloadPasswordProtectedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadPasswordProtectedKeyInput() {
    return this._downloadPasswordProtectedKey;
  }

  // hash_function - computed: false, optional: true, required: false
  private _hashFunction?: string; 
  public get hashFunction() {
    return this.getStringAttribute('hash_function');
  }
  public set hashFunction(value: string) {
    this._hashFunction = value;
  }
  public resetHashFunction() {
    this._hashFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFunctionInput() {
    return this._hashFunction;
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

  // is_sync - computed: false, optional: true, required: false
  private _isSync?: boolean | cdktf.IResolvable; 
  public get isSync() {
    return this.getBooleanAttribute('is_sync');
  }
  public set isSync(value: boolean | cdktf.IResolvable) {
    this._isSync = value;
  }
  public resetIsSync() {
    this._isSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSyncInput() {
    return this._isSync;
  }

  // key_download_password - computed: false, optional: true, required: false
  private _keyDownloadPassword?: string; 
  public get keyDownloadPassword() {
    return this.getStringAttribute('key_download_password');
  }
  public set keyDownloadPassword(value: string) {
    this._keyDownloadPassword = value;
  }
  public resetKeyDownloadPassword() {
    this._keyDownloadPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDownloadPasswordInput() {
    return this._keyDownloadPassword;
  }

  // key_download_path - computed: false, optional: true, required: false
  private _keyDownloadPath?: string; 
  public get keyDownloadPath() {
    return this.getStringAttribute('key_download_path');
  }
  public set keyDownloadPath(value: string) {
    this._keyDownloadPath = value;
  }
  public resetKeyDownloadPath() {
    this._keyDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDownloadPathInput() {
    return this._keyDownloadPath;
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // validity_days - computed: false, optional: true, required: false
  private _validityDays?: number; 
  public get validityDays() {
    return this.getNumberAttribute('validity_days');
  }
  public set validityDays(value: number) {
    this._validityDays = value;
  }
  public resetValidityDays() {
    this._validityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityDaysInput() {
    return this._validityDays;
  }

  // validity_unit - computed: false, optional: true, required: false
  private _validityUnit?: string; 
  public get validityUnit() {
    return this.getStringAttribute('validity_unit');
  }
  public set validityUnit(value: string) {
    this._validityUnit = value;
  }
  public resetValidityUnit() {
    this._validityUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityUnitInput() {
    return this._validityUnit;
  }

  // validity_unit_value - computed: false, optional: true, required: false
  private _validityUnitValue?: number; 
  public get validityUnitValue() {
    return this.getNumberAttribute('validity_unit_value');
  }
  public set validityUnitValue(value: number) {
    this._validityUnitValue = value;
  }
  public resetValidityUnitValue() {
    this._validityUnitValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityUnitValueInput() {
    return this._validityUnitValue;
  }

  // vendor_specific_fields - computed: false, optional: true, required: false
  private _vendorSpecificFields?: { [key: string]: string }; 
  public get vendorSpecificFields() {
    return this.getStringMapAttribute('vendor_specific_fields');
  }
  public set vendorSpecificFields(value: { [key: string]: string }) {
    this._vendorSpecificFields = value;
  }
  public resetVendorSpecificFields() {
    this._vendorSpecificFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorSpecificFieldsInput() {
    return this._vendorSpecificFields;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bit_length: cdktf.stringToTerraform(this._bitLength),
      ca_setting_name: cdktf.stringToTerraform(this._caSettingName),
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      certificate_chain_required: cdktf.booleanToTerraform(this._certificateChainRequired),
      certificate_download_format: cdktf.stringToTerraform(this._certificateDownloadFormat),
      certificate_download_password: cdktf.stringToTerraform(this._certificateDownloadPassword),
      certificate_download_path: cdktf.stringToTerraform(this._certificateDownloadPath),
      certificate_group_name: cdktf.stringToTerraform(this._certificateGroupName),
      certificate_type: cdktf.stringToTerraform(this._certificateType),
      common_name: cdktf.stringToTerraform(this._commonName),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsNames),
      download_password_protected_key: cdktf.booleanToTerraform(this._downloadPasswordProtectedKey),
      hash_function: cdktf.stringToTerraform(this._hashFunction),
      id: cdktf.stringToTerraform(this._id),
      is_sync: cdktf.booleanToTerraform(this._isSync),
      key_download_password: cdktf.stringToTerraform(this._keyDownloadPassword),
      key_download_path: cdktf.stringToTerraform(this._keyDownloadPath),
      key_type: cdktf.stringToTerraform(this._keyType),
      validity_days: cdktf.numberToTerraform(this._validityDays),
      validity_unit: cdktf.stringToTerraform(this._validityUnit),
      validity_unit_value: cdktf.numberToTerraform(this._validityUnitValue),
      vendor_specific_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._vendorSpecificFields),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bit_length: {
        value: cdktf.stringToHclTerraform(this._bitLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_setting_name: {
        value: cdktf.stringToHclTerraform(this._caSettingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_authority: {
        value: cdktf.stringToHclTerraform(this._certificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain_required: {
        value: cdktf.booleanToHclTerraform(this._certificateChainRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_download_format: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_password: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_path: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_group_name: {
        value: cdktf.stringToHclTerraform(this._certificateGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_type: {
        value: cdktf.stringToHclTerraform(this._certificateType),
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
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dns_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      download_password_protected_key: {
        value: cdktf.booleanToHclTerraform(this._downloadPasswordProtectedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_function: {
        value: cdktf.stringToHclTerraform(this._hashFunction),
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
      is_sync: {
        value: cdktf.booleanToHclTerraform(this._isSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_download_password: {
        value: cdktf.stringToHclTerraform(this._keyDownloadPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_download_path: {
        value: cdktf.stringToHclTerraform(this._keyDownloadPath),
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
      validity_days: {
        value: cdktf.numberToHclTerraform(this._validityDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validity_unit: {
        value: cdktf.stringToHclTerraform(this._validityUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validity_unit_value: {
        value: cdktf.numberToHclTerraform(this._validityUnitValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vendor_specific_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vendorSpecificFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
