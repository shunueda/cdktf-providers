// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of CMK. The name can only contain English letters, numbers, underscore and hyphen '-'. The first character must be a letter or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#alias KmsKey#alias}
  */
  readonly alias: string;
  /**
  * Description of CMK. The maximum is 1024 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#description KmsKey#description}
  */
  readonly description?: string;
  /**
  * The HSM cluster ID corresponding to KMS Advanced Edition (only valid for KMS Exclusive/Managed Edition service instances).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#hsm_cluster_id KmsKey#hsm_cluster_id}
  */
  readonly hsmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#id KmsKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify whether to archive key. Default value is `false`. This field is conflict with `is_enabled`, valid when key_state is `Enabled`, `Disabled`, `Archived`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#is_archived KmsKey#is_archived}
  */
  readonly isArchived?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable key. Default value is `false`. This field is conflict with `is_archived`, valid when key_state is `Enabled`, `Disabled`, `Archived`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#is_enabled KmsKey#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specify whether to enable key rotation, valid when key_usage is `ENCRYPT_DECRYPT`. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#key_rotation_enabled KmsKey#key_rotation_enabled}
  */
  readonly keyRotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Usage of CMK. Available values include `ENCRYPT_DECRYPT`, `ASYMMETRIC_DECRYPT_RSA_2048`, `ASYMMETRIC_DECRYPT_SM2`, `ASYMMETRIC_SIGN_VERIFY_SM2`, `ASYMMETRIC_SIGN_VERIFY_RSA_2048`, `ASYMMETRIC_SIGN_VERIFY_ECC`. Default value is `ENCRYPT_DECRYPT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#key_usage KmsKey#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * Duration in days after which the key is deleted after destruction of the resource, must be between 7 and 30 days. Defaults to 7 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#pending_delete_window_in_days KmsKey#pending_delete_window_in_days}
  */
  readonly pendingDeleteWindowInDays?: number;
  /**
  * Tags of CMK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#tags KmsKey#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key tencentcloud_kms_key}
*/
export class KmsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kms_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsKey to import
  * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kms_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/kms_key tencentcloud_kms_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._keyRotationEnabled = config.keyRotationEnabled;
    this._keyUsage = config.keyUsage;
    this._pendingDeleteWindowInDays = config.pendingDeleteWindowInDays;
    this._tags = config.tags;
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

  // key_rotation_enabled - computed: false, optional: true, required: false
  private _keyRotationEnabled?: boolean | cdktf.IResolvable; 
  public get keyRotationEnabled() {
    return this.getBooleanAttribute('key_rotation_enabled');
  }
  public set keyRotationEnabled(value: boolean | cdktf.IResolvable) {
    this._keyRotationEnabled = value;
  }
  public resetKeyRotationEnabled() {
    this._keyRotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRotationEnabledInput() {
    return this._keyRotationEnabled;
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string; 
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
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
      key_rotation_enabled: cdktf.booleanToTerraform(this._keyRotationEnabled),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      pending_delete_window_in_days: cdktf.numberToTerraform(this._pendingDeleteWindowInDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
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
      key_rotation_enabled: {
        value: cdktf.booleanToHclTerraform(this._keyRotationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_usage: {
        value: cdktf.stringToHclTerraform(this._keyUsage),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
