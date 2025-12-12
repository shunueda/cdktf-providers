// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackNasLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#file_system_id ApsarastackNasLifecyclePolicy#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#id ApsarastackNasLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#lifecycle_policy_name ApsarastackNasLifecyclePolicy#lifecycle_policy_name}
  */
  readonly lifecyclePolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#lifecycle_rule_name ApsarastackNasLifecyclePolicy#lifecycle_rule_name}
  */
  readonly lifecycleRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#oss_bucket ApsarastackNasLifecyclePolicy#oss_bucket}
  */
  readonly ossBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#path ApsarastackNasLifecyclePolicy#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#recursive ApsarastackNasLifecyclePolicy#recursive}
  */
  readonly recursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#storage_type ApsarastackNasLifecyclePolicy#storage_type}
  */
  readonly storageType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy apsarastack_nas_lifecycle_policy}
*/
export class ApsarastackNasLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_nas_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackNasLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackNasLifecyclePolicy to import
  * @param importFromId The id of the existing ApsarastackNasLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackNasLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_nas_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_nas_lifecycle_policy apsarastack_nas_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackNasLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackNasLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_nas_lifecycle_policy',
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
    this._fileSystemId = config.fileSystemId;
    this._id = config.id;
    this._lifecyclePolicyName = config.lifecyclePolicyName;
    this._lifecycleRuleName = config.lifecycleRuleName;
    this._ossBucket = config.ossBucket;
    this._path = config.path;
    this._recursive = config.recursive;
    this._storageType = config.storageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
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

  // lifecycle_policy_name - computed: false, optional: false, required: true
  private _lifecyclePolicyName?: string; 
  public get lifecyclePolicyName() {
    return this.getStringAttribute('lifecycle_policy_name');
  }
  public set lifecyclePolicyName(value: string) {
    this._lifecyclePolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecyclePolicyNameInput() {
    return this._lifecyclePolicyName;
  }

  // lifecycle_rule_name - computed: false, optional: false, required: true
  private _lifecycleRuleName?: string; 
  public get lifecycleRuleName() {
    return this.getStringAttribute('lifecycle_rule_name');
  }
  public set lifecycleRuleName(value: string) {
    this._lifecycleRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleRuleNameInput() {
    return this._lifecycleRuleName;
  }

  // oss_bucket - computed: false, optional: false, required: true
  private _ossBucket?: string; 
  public get ossBucket() {
    return this.getStringAttribute('oss_bucket');
  }
  public set ossBucket(value: string) {
    this._ossBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketInput() {
    return this._ossBucket;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // recursive - computed: false, optional: true, required: false
  private _recursive?: boolean | cdktf.IResolvable; 
  public get recursive() {
    return this.getBooleanAttribute('recursive');
  }
  public set recursive(value: boolean | cdktf.IResolvable) {
    this._recursive = value;
  }
  public resetRecursive() {
    this._recursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveInput() {
    return this._recursive;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_system_id: cdktf.stringToTerraform(this._fileSystemId),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_policy_name: cdktf.stringToTerraform(this._lifecyclePolicyName),
      lifecycle_rule_name: cdktf.stringToTerraform(this._lifecycleRuleName),
      oss_bucket: cdktf.stringToTerraform(this._ossBucket),
      path: cdktf.stringToTerraform(this._path),
      recursive: cdktf.booleanToTerraform(this._recursive),
      storage_type: cdktf.stringToTerraform(this._storageType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_system_id: {
        value: cdktf.stringToHclTerraform(this._fileSystemId),
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
      lifecycle_policy_name: {
        value: cdktf.stringToHclTerraform(this._lifecyclePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_rule_name: {
        value: cdktf.stringToHclTerraform(this._lifecycleRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_bucket: {
        value: cdktf.stringToHclTerraform(this._ossBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive: {
        value: cdktf.booleanToHclTerraform(this._recursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
