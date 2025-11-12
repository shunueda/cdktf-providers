// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmFirmwareComponentVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#blob_url ConnectMdmFirmwareComponentVersion#blob_url}
  */
  readonly blobUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#component_required ConnectMdmFirmwareComponentVersion#component_required}
  */
  readonly componentRequired: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#custom_resource ConnectMdmFirmwareComponentVersion#custom_resource}
  */
  readonly customResource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#deprecated_date ConnectMdmFirmwareComponentVersion#deprecated_date}
  */
  readonly deprecatedDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#description ConnectMdmFirmwareComponentVersion#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#effective_date ConnectMdmFirmwareComponentVersion#effective_date}
  */
  readonly effectiveDate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#firmware_component_id ConnectMdmFirmwareComponentVersion#firmware_component_id}
  */
  readonly firmwareComponentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#id ConnectMdmFirmwareComponentVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#size ConnectMdmFirmwareComponentVersion#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#version ConnectMdmFirmwareComponentVersion#version}
  */
  readonly version: string;
  /**
  * encryption_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#encryption_info ConnectMdmFirmwareComponentVersion#encryption_info}
  */
  readonly encryptionInfo?: ConnectMdmFirmwareComponentVersionEncryptionInfo;
  /**
  * fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#fingerprint ConnectMdmFirmwareComponentVersion#fingerprint}
  */
  readonly fingerprint?: ConnectMdmFirmwareComponentVersionFingerprint;
}
export interface ConnectMdmFirmwareComponentVersionEncryptionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#algorithm ConnectMdmFirmwareComponentVersion#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#decryption_key ConnectMdmFirmwareComponentVersion#decryption_key}
  */
  readonly decryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#encrypted ConnectMdmFirmwareComponentVersion#encrypted}
  */
  readonly encrypted: boolean | cdktf.IResolvable;
}

export function connectMdmFirmwareComponentVersionEncryptionInfoToTerraform(struct?: ConnectMdmFirmwareComponentVersionEncryptionInfoOutputReference | ConnectMdmFirmwareComponentVersionEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    decryption_key: cdktf.stringToTerraform(struct!.decryptionKey),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
  }
}


export function connectMdmFirmwareComponentVersionEncryptionInfoToHclTerraform(struct?: ConnectMdmFirmwareComponentVersionEncryptionInfoOutputReference | ConnectMdmFirmwareComponentVersionEncryptionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decryption_key: {
      value: cdktf.stringToHclTerraform(struct!.decryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMdmFirmwareComponentVersionEncryptionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectMdmFirmwareComponentVersionEncryptionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._decryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionKey = this._decryptionKey;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMdmFirmwareComponentVersionEncryptionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._decryptionKey = undefined;
      this._encrypted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._decryptionKey = value.decryptionKey;
      this._encrypted = value.encrypted;
    }
  }

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

  // decryption_key - computed: false, optional: true, required: false
  private _decryptionKey?: string; 
  public get decryptionKey() {
    return this.getStringAttribute('decryption_key');
  }
  public set decryptionKey(value: string) {
    this._decryptionKey = value;
  }
  public resetDecryptionKey() {
    this._decryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionKeyInput() {
    return this._decryptionKey;
  }

  // encrypted - computed: false, optional: false, required: true
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }
}
export interface ConnectMdmFirmwareComponentVersionFingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#algorithm ConnectMdmFirmwareComponentVersion#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#hash ConnectMdmFirmwareComponentVersion#hash}
  */
  readonly hash: string;
}

export function connectMdmFirmwareComponentVersionFingerprintToTerraform(struct?: ConnectMdmFirmwareComponentVersionFingerprintOutputReference | ConnectMdmFirmwareComponentVersionFingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    hash: cdktf.stringToTerraform(struct!.hash),
  }
}


export function connectMdmFirmwareComponentVersionFingerprintToHclTerraform(struct?: ConnectMdmFirmwareComponentVersionFingerprintOutputReference | ConnectMdmFirmwareComponentVersionFingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectMdmFirmwareComponentVersionFingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectMdmFirmwareComponentVersionFingerprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectMdmFirmwareComponentVersionFingerprint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._hash = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._hash = value.hash;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version hsdp_connect_mdm_firmware_component_version}
*/
export class ConnectMdmFirmwareComponentVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_firmware_component_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmFirmwareComponentVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmFirmwareComponentVersion to import
  * @param importFromId The id of the existing ConnectMdmFirmwareComponentVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmFirmwareComponentVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_firmware_component_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/connect_mdm_firmware_component_version hsdp_connect_mdm_firmware_component_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmFirmwareComponentVersionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmFirmwareComponentVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_firmware_component_version',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blobUrl = config.blobUrl;
    this._componentRequired = config.componentRequired;
    this._customResource = config.customResource;
    this._deprecatedDate = config.deprecatedDate;
    this._description = config.description;
    this._effectiveDate = config.effectiveDate;
    this._firmwareComponentId = config.firmwareComponentId;
    this._id = config.id;
    this._size = config.size;
    this._version = config.version;
    this._encryptionInfo.internalValue = config.encryptionInfo;
    this._fingerprint.internalValue = config.fingerprint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blob_url - computed: false, optional: true, required: false
  private _blobUrl?: string; 
  public get blobUrl() {
    return this.getStringAttribute('blob_url');
  }
  public set blobUrl(value: string) {
    this._blobUrl = value;
  }
  public resetBlobUrl() {
    this._blobUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blobUrlInput() {
    return this._blobUrl;
  }

  // component_required - computed: false, optional: false, required: true
  private _componentRequired?: boolean | cdktf.IResolvable; 
  public get componentRequired() {
    return this.getBooleanAttribute('component_required');
  }
  public set componentRequired(value: boolean | cdktf.IResolvable) {
    this._componentRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentRequiredInput() {
    return this._componentRequired;
  }

  // custom_resource - computed: false, optional: true, required: false
  private _customResource?: string; 
  public get customResource() {
    return this.getStringAttribute('custom_resource');
  }
  public set customResource(value: string) {
    this._customResource = value;
  }
  public resetCustomResource() {
    this._customResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResourceInput() {
    return this._customResource;
  }

  // deprecated_date - computed: false, optional: true, required: false
  private _deprecatedDate?: string; 
  public get deprecatedDate() {
    return this.getStringAttribute('deprecated_date');
  }
  public set deprecatedDate(value: string) {
    this._deprecatedDate = value;
  }
  public resetDeprecatedDate() {
    this._deprecatedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedDateInput() {
    return this._deprecatedDate;
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

  // effective_date - computed: false, optional: false, required: true
  private _effectiveDate?: string; 
  public get effectiveDate() {
    return this.getStringAttribute('effective_date');
  }
  public set effectiveDate(value: string) {
    this._effectiveDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveDateInput() {
    return this._effectiveDate;
  }

  // firmware_component_id - computed: false, optional: false, required: true
  private _firmwareComponentId?: string; 
  public get firmwareComponentId() {
    return this.getStringAttribute('firmware_component_id');
  }
  public set firmwareComponentId(value: string) {
    this._firmwareComponentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareComponentIdInput() {
    return this._firmwareComponentId;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // encryption_info - computed: false, optional: true, required: false
  private _encryptionInfo = new ConnectMdmFirmwareComponentVersionEncryptionInfoOutputReference(this, "encryption_info");
  public get encryptionInfo() {
    return this._encryptionInfo;
  }
  public putEncryptionInfo(value: ConnectMdmFirmwareComponentVersionEncryptionInfo) {
    this._encryptionInfo.internalValue = value;
  }
  public resetEncryptionInfo() {
    this._encryptionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInfoInput() {
    return this._encryptionInfo.internalValue;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint = new ConnectMdmFirmwareComponentVersionFingerprintOutputReference(this, "fingerprint");
  public get fingerprint() {
    return this._fingerprint;
  }
  public putFingerprint(value: ConnectMdmFirmwareComponentVersionFingerprint) {
    this._fingerprint.internalValue = value;
  }
  public resetFingerprint() {
    this._fingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blob_url: cdktf.stringToTerraform(this._blobUrl),
      component_required: cdktf.booleanToTerraform(this._componentRequired),
      custom_resource: cdktf.stringToTerraform(this._customResource),
      deprecated_date: cdktf.stringToTerraform(this._deprecatedDate),
      description: cdktf.stringToTerraform(this._description),
      effective_date: cdktf.stringToTerraform(this._effectiveDate),
      firmware_component_id: cdktf.stringToTerraform(this._firmwareComponentId),
      id: cdktf.stringToTerraform(this._id),
      size: cdktf.numberToTerraform(this._size),
      version: cdktf.stringToTerraform(this._version),
      encryption_info: connectMdmFirmwareComponentVersionEncryptionInfoToTerraform(this._encryptionInfo.internalValue),
      fingerprint: connectMdmFirmwareComponentVersionFingerprintToTerraform(this._fingerprint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blob_url: {
        value: cdktf.stringToHclTerraform(this._blobUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component_required: {
        value: cdktf.booleanToHclTerraform(this._componentRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_resource: {
        value: cdktf.stringToHclTerraform(this._customResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated_date: {
        value: cdktf.stringToHclTerraform(this._deprecatedDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_date: {
        value: cdktf.stringToHclTerraform(this._effectiveDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_component_id: {
        value: cdktf.stringToHclTerraform(this._firmwareComponentId),
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
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_info: {
        value: connectMdmFirmwareComponentVersionEncryptionInfoToHclTerraform(this._encryptionInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectMdmFirmwareComponentVersionEncryptionInfoList",
      },
      fingerprint: {
        value: connectMdmFirmwareComponentVersionFingerprintToHclTerraform(this._fingerprint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectMdmFirmwareComponentVersionFingerprintList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
