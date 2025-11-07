// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#description KmsSecret#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#encryption_key_id KmsSecret#encryption_key_id}
  */
  readonly encryptionKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#force_delete_without_recovery KmsSecret#force_delete_without_recovery}
  */
  readonly forceDeleteWithoutRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#id KmsSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#recovery_window_in_days KmsSecret#recovery_window_in_days}
  */
  readonly recoveryWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#secret_data KmsSecret#secret_data}
  */
  readonly secretData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#secret_data_type KmsSecret#secret_data_type}
  */
  readonly secretDataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#secret_name KmsSecret#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#tags KmsSecret#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#version_id KmsSecret#version_id}
  */
  readonly versionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#version_stages KmsSecret#version_stages}
  */
  readonly versionStages?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret alibabacloudstack_kms_secret}
*/
export class KmsSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_kms_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsSecret to import
  * @param importFromId The id of the existing KmsSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_kms_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/kms_secret alibabacloudstack_kms_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: KmsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_kms_secret',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._encryptionKeyId = config.encryptionKeyId;
    this._forceDeleteWithoutRecovery = config.forceDeleteWithoutRecovery;
    this._id = config.id;
    this._recoveryWindowInDays = config.recoveryWindowInDays;
    this._secretData = config.secretData;
    this._secretDataType = config.secretDataType;
    this._secretName = config.secretName;
    this._tags = config.tags;
    this._versionId = config.versionId;
    this._versionStages = config.versionStages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      encryption_key_id: cdktf.stringToTerraform(this._encryptionKeyId),
      force_delete_without_recovery: cdktf.booleanToTerraform(this._forceDeleteWithoutRecovery),
      id: cdktf.stringToTerraform(this._id),
      recovery_window_in_days: cdktf.numberToTerraform(this._recoveryWindowInDays),
      secret_data: cdktf.stringToTerraform(this._secretData),
      secret_data_type: cdktf.stringToTerraform(this._secretDataType),
      secret_name: cdktf.stringToTerraform(this._secretName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version_id: cdktf.stringToTerraform(this._versionId),
      version_stages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versionStages),
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
      encryption_key_id: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyId),
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
      recovery_window_in_days: {
        value: cdktf.numberToHclTerraform(this._recoveryWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
