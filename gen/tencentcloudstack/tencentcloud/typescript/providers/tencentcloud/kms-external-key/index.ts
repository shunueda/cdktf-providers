// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsExternalKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of CMK. The name can only contain English letters, numbers, underscore and hyphen '-'. The first character must be a letter or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#alias KmsExternalKey#alias}
  */
  readonly alias: string;
  /**
  * Description of CMK. The maximum is 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#description KmsExternalKey#description}
  */
  readonly description?: string;
  /**
  * The HSM cluster ID corresponding to KMS Advanced Edition (only valid for KMS Exclusive/Managed Edition service instances).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#hsm_cluster_id KmsExternalKey#hsm_cluster_id}
  */
  readonly hsmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#id KmsExternalKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify whether to archive key. Default value is `false`. This field is conflict with `is_enabled`, valid when key_state is `Enabled`, `Disabled`, `Archived`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#is_archived KmsExternalKey#is_archived}
  */
  readonly isArchived?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable key. Default value is `false`. This field is conflict with `is_archived`, valid when key_state is `Enabled`, `Disabled`, `Archived`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#is_enabled KmsExternalKey#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The base64-encoded key material encrypted with the public_key. For regions using the national secret version, the length of the imported key material is required to be 128 bits, and for regions using the FIPS version, the length of the imported key material is required to be 256 bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#key_material_base64 KmsExternalKey#key_material_base64}
  */
  readonly keyMaterialBase64?: string;
  /**
  * Duration in days after which the key is deleted after destruction of the resource, must be between 7 and 30 days. Defaults to 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#pending_delete_window_in_days KmsExternalKey#pending_delete_window_in_days}
  */
  readonly pendingDeleteWindowInDays?: number;
  /**
  * Tags of CMK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#tags KmsExternalKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * This value means the effective timestamp of the key material, 0 means it does not expire. Need to be greater than the current timestamp, the maximum support is 2147443200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#valid_to KmsExternalKey#valid_to}
  */
  readonly validTo?: number;
  /**
  * The algorithm for encrypting key material. Available values include `RSAES_PKCS1_V1_5`, `RSAES_OAEP_SHA_1` and `RSAES_OAEP_SHA_256`. Default value is `RSAES_PKCS1_V1_5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#wrapping_algorithm KmsExternalKey#wrapping_algorithm}
  */
  readonly wrappingAlgorithm?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key tencentcloud_kms_external_key}
*/
export class KmsExternalKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kms_external_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsExternalKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsExternalKey to import
  * @param importFromId The id of the existing KmsExternalKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsExternalKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kms_external_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/kms_external_key tencentcloud_kms_external_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsExternalKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsExternalKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kms_external_key',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._description = config.description;
    this._hsmClusterId = config.hsmClusterId;
    this._id = config.id;
    this._isArchived = config.isArchived;
    this._isEnabled = config.isEnabled;
    this._keyMaterialBase64 = config.keyMaterialBase64;
    this._pendingDeleteWindowInDays = config.pendingDeleteWindowInDays;
    this._tags = config.tags;
    this._validTo = config.validTo;
    this._wrappingAlgorithm = config.wrappingAlgorithm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // hsm_cluster_id - computed: false, optional: true, required: false
  private _hsmClusterId?: string; 
  public get hsmClusterId() {
    return this.getStringAttribute('hsm_cluster_id');
  }
  public set hsmClusterId(value: string) {
    this._hsmClusterId = value;
  }
  public resetHsmClusterId() {
    this._hsmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmClusterIdInput() {
    return this._hsmClusterId;
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

  // is_archived - computed: false, optional: true, required: false
  private _isArchived?: boolean | cdktf.IResolvable; 
  public get isArchived() {
    return this.getBooleanAttribute('is_archived');
  }
  public set isArchived(value: boolean | cdktf.IResolvable) {
    this._isArchived = value;
  }
  public resetIsArchived() {
    this._isArchived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArchivedInput() {
    return this._isArchived;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // key_material_base64 - computed: false, optional: true, required: false
  private _keyMaterialBase64?: string; 
  public get keyMaterialBase64() {
    return this.getStringAttribute('key_material_base64');
  }
  public set keyMaterialBase64(value: string) {
    this._keyMaterialBase64 = value;
  }
  public resetKeyMaterialBase64() {
    this._keyMaterialBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMaterialBase64Input() {
    return this._keyMaterialBase64;
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // pending_delete_window_in_days - computed: false, optional: true, required: false
  private _pendingDeleteWindowInDays?: number; 
  public get pendingDeleteWindowInDays() {
    return this.getNumberAttribute('pending_delete_window_in_days');
  }
  public set pendingDeleteWindowInDays(value: number) {
    this._pendingDeleteWindowInDays = value;
  }
  public resetPendingDeleteWindowInDays() {
    this._pendingDeleteWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDeleteWindowInDaysInput() {
    return this._pendingDeleteWindowInDays;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: number; 
  public get validTo() {
    return this.getNumberAttribute('valid_to');
  }
  public set validTo(value: number) {
    this._validTo = value;
  }
  public resetValidTo() {
    this._validTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToInput() {
    return this._validTo;
  }

  // wrapping_algorithm - computed: false, optional: true, required: false
  private _wrappingAlgorithm?: string; 
  public get wrappingAlgorithm() {
    return this.getStringAttribute('wrapping_algorithm');
  }
  public set wrappingAlgorithm(value: string) {
    this._wrappingAlgorithm = value;
  }
  public resetWrappingAlgorithm() {
    this._wrappingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappingAlgorithmInput() {
    return this._wrappingAlgorithm;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      description: cdktf.stringToTerraform(this._description),
      hsm_cluster_id: cdktf.stringToTerraform(this._hsmClusterId),
      id: cdktf.stringToTerraform(this._id),
      is_archived: cdktf.booleanToTerraform(this._isArchived),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key_material_base64: cdktf.stringToTerraform(this._keyMaterialBase64),
      pending_delete_window_in_days: cdktf.numberToTerraform(this._pendingDeleteWindowInDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      valid_to: cdktf.numberToTerraform(this._validTo),
      wrapping_algorithm: cdktf.stringToTerraform(this._wrappingAlgorithm),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
      hsm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._hsmClusterId),
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
      is_archived: {
        value: cdktf.booleanToHclTerraform(this._isArchived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_material_base64: {
        value: cdktf.stringToHclTerraform(this._keyMaterialBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_delete_window_in_days: {
        value: cdktf.numberToHclTerraform(this._pendingDeleteWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      valid_to: {
        value: cdktf.numberToHclTerraform(this._validTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wrapping_algorithm: {
        value: cdktf.stringToHclTerraform(this._wrappingAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
