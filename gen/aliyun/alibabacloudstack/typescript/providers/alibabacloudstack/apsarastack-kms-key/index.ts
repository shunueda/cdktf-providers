// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackKmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#automatic_rotation ApsarastackKmsKey#automatic_rotation}
  */
  readonly automaticRotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#deletion_window_in_days ApsarastackKmsKey#deletion_window_in_days}
  */
  readonly deletionWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#description ApsarastackKmsKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#id ApsarastackKmsKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#is_enabled ApsarastackKmsKey#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#key_state ApsarastackKmsKey#key_state}
  */
  readonly keyState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#key_usage ApsarastackKmsKey#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#origin ApsarastackKmsKey#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#pending_window_in_days ApsarastackKmsKey#pending_window_in_days}
  */
  readonly pendingWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#protection_level ApsarastackKmsKey#protection_level}
  */
  readonly protectionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#rotation_interval ApsarastackKmsKey#rotation_interval}
  */
  readonly rotationInterval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key apsarastack_kms_key}
*/
export class ApsarastackKmsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_kms_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackKmsKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackKmsKey to import
  * @param importFromId The id of the existing ApsarastackKmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackKmsKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_kms_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_kms_key apsarastack_kms_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackKmsKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApsarastackKmsKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticRotation = config.automaticRotation;
    this._deletionWindowInDays = config.deletionWindowInDays;
    this._description = config.description;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._keyState = config.keyState;
    this._keyUsage = config.keyUsage;
    this._origin = config.origin;
    this._pendingWindowInDays = config.pendingWindowInDays;
    this._protectionLevel = config.protectionLevel;
    this._rotationInterval = config.rotationInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // automatic_rotation - computed: false, optional: true, required: false
  private _automaticRotation?: string; 
  public get automaticRotation() {
    return this.getStringAttribute('automatic_rotation');
  }
  public set automaticRotation(value: string) {
    this._automaticRotation = value;
  }
  public resetAutomaticRotation() {
    this._automaticRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticRotationInput() {
    return this._automaticRotation;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // delete_date - computed: true, optional: false, required: false
  public get deleteDate() {
    return this.getStringAttribute('delete_date');
  }

  // deletion_window_in_days - computed: false, optional: true, required: false
  private _deletionWindowInDays?: number; 
  public get deletionWindowInDays() {
    return this.getNumberAttribute('deletion_window_in_days');
  }
  public set deletionWindowInDays(value: number) {
    this._deletionWindowInDays = value;
  }
  public resetDeletionWindowInDays() {
    this._deletionWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionWindowInDaysInput() {
    return this._deletionWindowInDays;
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

  // key_state - computed: false, optional: true, required: false
  private _keyState?: string; 
  public get keyState() {
    return this.getStringAttribute('key_state');
  }
  public set keyState(value: string) {
    this._keyState = value;
  }
  public resetKeyState() {
    this._keyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStateInput() {
    return this._keyState;
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

  // last_rotation_date - computed: true, optional: false, required: false
  public get lastRotationDate() {
    return this.getStringAttribute('last_rotation_date');
  }

  // material_expire_time - computed: true, optional: false, required: false
  public get materialExpireTime() {
    return this.getStringAttribute('material_expire_time');
  }

  // next_rotation_date - computed: true, optional: false, required: false
  public get nextRotationDate() {
    return this.getStringAttribute('next_rotation_date');
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // pending_window_in_days - computed: false, optional: true, required: false
  private _pendingWindowInDays?: number; 
  public get pendingWindowInDays() {
    return this.getNumberAttribute('pending_window_in_days');
  }
  public set pendingWindowInDays(value: number) {
    this._pendingWindowInDays = value;
  }
  public resetPendingWindowInDays() {
    this._pendingWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingWindowInDaysInput() {
    return this._pendingWindowInDays;
  }

  // primary_key_version - computed: true, optional: false, required: false
  public get primaryKeyVersion() {
    return this.getStringAttribute('primary_key_version');
  }

  // protection_level - computed: false, optional: true, required: false
  private _protectionLevel?: string; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_rotation: cdktf.stringToTerraform(this._automaticRotation),
      deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key_state: cdktf.stringToTerraform(this._keyState),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      origin: cdktf.stringToTerraform(this._origin),
      pending_window_in_days: cdktf.numberToTerraform(this._pendingWindowInDays),
      protection_level: cdktf.stringToTerraform(this._protectionLevel),
      rotation_interval: cdktf.stringToTerraform(this._rotationInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_rotation: {
        value: cdktf.stringToHclTerraform(this._automaticRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_window_in_days: {
        value: cdktf.numberToHclTerraform(this._deletionWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_state: {
        value: cdktf.stringToHclTerraform(this._keyState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_usage: {
        value: cdktf.stringToHclTerraform(this._keyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_window_in_days: {
        value: cdktf.numberToHclTerraform(this._pendingWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_level: {
        value: cdktf.stringToHclTerraform(this._protectionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_interval: {
        value: cdktf.stringToHclTerraform(this._rotationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
