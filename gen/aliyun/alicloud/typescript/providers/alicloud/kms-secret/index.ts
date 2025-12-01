// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#description KmsSecret#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#dkms_instance_id KmsSecret#dkms_instance_id}
  */
  readonly dkmsInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#enable_automatic_rotation KmsSecret#enable_automatic_rotation}
  */
  readonly enableAutomaticRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#encryption_key_id KmsSecret#encryption_key_id}
  */
  readonly encryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#extended_config KmsSecret#extended_config}
  */
  readonly extendedConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#force_delete_without_recovery KmsSecret#force_delete_without_recovery}
  */
  readonly forceDeleteWithoutRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#id KmsSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#policy KmsSecret#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#recovery_window_in_days KmsSecret#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#rotation_interval KmsSecret#rotation_interval}
  */
  readonly rotationInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#secret_data KmsSecret#secret_data}
  */
  readonly secretData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#secret_data_type KmsSecret#secret_data_type}
  */
  readonly secretDataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#secret_name KmsSecret#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#secret_type KmsSecret#secret_type}
  */
  readonly secretType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#tags KmsSecret#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#version_id KmsSecret#version_id}
  */
  readonly versionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#version_stages KmsSecret#version_stages}
  */
  readonly versionStages?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#timeouts KmsSecret#timeouts}
  */
  readonly timeouts?: KmsSecretTimeouts;
}
export interface KmsSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#create KmsSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#delete KmsSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#update KmsSecret#update}
  */
  readonly update?: string;
}

export function kmsSecretTimeoutsToTerraform(struct?: KmsSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kmsSecretTimeoutsToHclTerraform(struct?: KmsSecretTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsSecretTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsSecretTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret alicloud_kms_secret}
*/
export class KmsSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_kms_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsSecret to import
  * @param importFromId The id of the existing KmsSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_kms_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/kms_secret alicloud_kms_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: KmsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_kms_secret',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dkmsInstanceId = config.dkmsInstanceId;
    this._enableAutomaticRotation = config.enableAutomaticRotation;
    this._encryptionKeyId = config.encryptionKeyId;
    this._extendedConfig = config.extendedConfig;
    this._forceDeleteWithoutRecovery = config.forceDeleteWithoutRecovery;
    this._id = config.id;
    this._policy = config.policy;
    this._recoveryWindowInDays = config.recoveryWindowInDays;
    this._rotationInterval = config.rotationInterval;
    this._secretData = config.secretData;
    this._secretDataType = config.secretDataType;
    this._secretName = config.secretName;
    this._secretType = config.secretType;
    this._tags = config.tags;
    this._versionId = config.versionId;
    this._versionStages = config.versionStages;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // dkms_instance_id - computed: false, optional: true, required: false
  private _dkmsInstanceId?: string; 
  public get dkmsInstanceId() {
    return this.getStringAttribute('dkms_instance_id');
  }
  public set dkmsInstanceId(value: string) {
    this._dkmsInstanceId = value;
  }
  public resetDkmsInstanceId() {
    this._dkmsInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dkmsInstanceIdInput() {
    return this._dkmsInstanceId;
  }

  // enable_automatic_rotation - computed: false, optional: true, required: false
  private _enableAutomaticRotation?: boolean | cdktf.IResolvable; 
  public get enableAutomaticRotation() {
    return this.getBooleanAttribute('enable_automatic_rotation');
  }
  public set enableAutomaticRotation(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticRotation = value;
  }
  public resetEnableAutomaticRotation() {
    this._enableAutomaticRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticRotationInput() {
    return this._enableAutomaticRotation;
  }

  // encryption_key_id - computed: false, optional: true, required: false
  private _encryptionKeyId?: string; 
  public get encryptionKeyId() {
    return this.getStringAttribute('encryption_key_id');
  }
  public set encryptionKeyId(value: string) {
    this._encryptionKeyId = value;
  }
  public resetEncryptionKeyId() {
    this._encryptionKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyIdInput() {
    return this._encryptionKeyId;
  }

  // extended_config - computed: false, optional: true, required: false
  private _extendedConfig?: string; 
  public get extendedConfig() {
    return this.getStringAttribute('extended_config');
  }
  public set extendedConfig(value: string) {
    this._extendedConfig = value;
  }
  public resetExtendedConfig() {
    this._extendedConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedConfigInput() {
    return this._extendedConfig;
  }

  // force_delete_without_recovery - computed: false, optional: true, required: false
  private _forceDeleteWithoutRecovery?: boolean | cdktf.IResolvable; 
  public get forceDeleteWithoutRecovery() {
    return this.getBooleanAttribute('force_delete_without_recovery');
  }
  public set forceDeleteWithoutRecovery(value: boolean | cdktf.IResolvable) {
    this._forceDeleteWithoutRecovery = value;
  }
  public resetForceDeleteWithoutRecovery() {
    this._forceDeleteWithoutRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteWithoutRecoveryInput() {
    return this._forceDeleteWithoutRecovery;
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

  // planned_delete_time - computed: true, optional: false, required: false
  public get plannedDeleteTime() {
    return this.getStringAttribute('planned_delete_time');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // recovery_window_in_days - computed: false, optional: true, required: false
  private _recoveryWindowInDays?: number; 
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
  public set recoveryWindowInDays(value: number) {
    this._recoveryWindowInDays = value;
  }
  public resetRecoveryWindowInDays() {
    this._recoveryWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInDaysInput() {
    return this._recoveryWindowInDays;
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

  // secret_data - computed: false, optional: false, required: true
  private _secretData?: string; 
  public get secretData() {
    return this.getStringAttribute('secret_data');
  }
  public set secretData(value: string) {
    this._secretData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretDataInput() {
    return this._secretData;
  }

  // secret_data_type - computed: false, optional: true, required: false
  private _secretDataType?: string; 
  public get secretDataType() {
    return this.getStringAttribute('secret_data_type');
  }
  public set secretDataType(value: string) {
    this._secretDataType = value;
  }
  public resetSecretDataType() {
    this._secretDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretDataTypeInput() {
    return this._secretDataType;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_type - computed: true, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
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

  // version_id - computed: false, optional: false, required: true
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // version_stages - computed: true, optional: true, required: false
  private _versionStages?: string[]; 
  public get versionStages() {
    return cdktf.Fn.tolist(this.getListAttribute('version_stages'));
  }
  public set versionStages(value: string[]) {
    this._versionStages = value;
  }
  public resetVersionStages() {
    this._versionStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStagesInput() {
    return this._versionStages;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsSecretTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dkms_instance_id: cdktf.stringToTerraform(this._dkmsInstanceId),
      enable_automatic_rotation: cdktf.booleanToTerraform(this._enableAutomaticRotation),
      encryption_key_id: cdktf.stringToTerraform(this._encryptionKeyId),
      extended_config: cdktf.stringToTerraform(this._extendedConfig),
      force_delete_without_recovery: cdktf.booleanToTerraform(this._forceDeleteWithoutRecovery),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
      recovery_window_in_days: cdktf.numberToTerraform(this._recoveryWindowInDays),
      rotation_interval: cdktf.stringToTerraform(this._rotationInterval),
      secret_data: cdktf.stringToTerraform(this._secretData),
      secret_data_type: cdktf.stringToTerraform(this._secretDataType),
      secret_name: cdktf.stringToTerraform(this._secretName),
      secret_type: cdktf.stringToTerraform(this._secretType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version_id: cdktf.stringToTerraform(this._versionId),
      version_stages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versionStages),
      timeouts: kmsSecretTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dkms_instance_id: {
        value: cdktf.stringToHclTerraform(this._dkmsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_automatic_rotation: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_key_id: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_config: {
        value: cdktf.stringToHclTerraform(this._extendedConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete_without_recovery: {
        value: cdktf.booleanToHclTerraform(this._forceDeleteWithoutRecovery),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_window_in_days: {
        value: cdktf.numberToHclTerraform(this._recoveryWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_interval: {
        value: cdktf.stringToHclTerraform(this._rotationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_data: {
        value: cdktf.stringToHclTerraform(this._secretData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_data_type: {
        value: cdktf.stringToHclTerraform(this._secretDataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_name: {
        value: cdktf.stringToHclTerraform(this._secretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_type: {
        value: cdktf.stringToHclTerraform(this._secretType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version_id: {
        value: cdktf.stringToHclTerraform(this._versionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_stages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._versionStages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: kmsSecretTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsSecretTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
