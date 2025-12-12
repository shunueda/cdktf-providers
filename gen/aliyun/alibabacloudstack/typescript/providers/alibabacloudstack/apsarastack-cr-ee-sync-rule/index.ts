// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackCrEeSyncRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#id ApsarastackCrEeSyncRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#instance_id ApsarastackCrEeSyncRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#name ApsarastackCrEeSyncRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#namespace_name ApsarastackCrEeSyncRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#repo_name ApsarastackCrEeSyncRule#repo_name}
  */
  readonly repoName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#tag_filter ApsarastackCrEeSyncRule#tag_filter}
  */
  readonly tagFilter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#target_instance_id ApsarastackCrEeSyncRule#target_instance_id}
  */
  readonly targetInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#target_namespace_name ApsarastackCrEeSyncRule#target_namespace_name}
  */
  readonly targetNamespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#target_region_id ApsarastackCrEeSyncRule#target_region_id}
  */
  readonly targetRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#target_repo_name ApsarastackCrEeSyncRule#target_repo_name}
  */
  readonly targetRepoName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule apsarastack_cr_ee_sync_rule}
*/
export class ApsarastackCrEeSyncRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cr_ee_sync_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackCrEeSyncRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackCrEeSyncRule to import
  * @param importFromId The id of the existing ApsarastackCrEeSyncRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackCrEeSyncRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cr_ee_sync_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_cr_ee_sync_rule apsarastack_cr_ee_sync_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackCrEeSyncRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackCrEeSyncRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cr_ee_sync_rule',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._repoName = config.repoName;
    this._tagFilter = config.tagFilter;
    this._targetInstanceId = config.targetInstanceId;
    this._targetNamespaceName = config.targetNamespaceName;
    this._targetRegionId = config.targetRegionId;
    this._targetRepoName = config.targetRepoName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // sync_direction - computed: true, optional: false, required: false
  public get syncDirection() {
    return this.getStringAttribute('sync_direction');
  }

  // sync_scope - computed: true, optional: false, required: false
  public get syncScope() {
    return this.getStringAttribute('sync_scope');
  }

  // tag_filter - computed: false, optional: false, required: true
  private _tagFilter?: string; 
  public get tagFilter() {
    return this.getStringAttribute('tag_filter');
  }
  public set tagFilter(value: string) {
    this._tagFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFilterInput() {
    return this._tagFilter;
  }

  // target_instance_id - computed: false, optional: false, required: true
  private _targetInstanceId?: string; 
  public get targetInstanceId() {
    return this.getStringAttribute('target_instance_id');
  }
  public set targetInstanceId(value: string) {
    this._targetInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceIdInput() {
    return this._targetInstanceId;
  }

  // target_namespace_name - computed: false, optional: false, required: true
  private _targetNamespaceName?: string; 
  public get targetNamespaceName() {
    return this.getStringAttribute('target_namespace_name');
  }
  public set targetNamespaceName(value: string) {
    this._targetNamespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNamespaceNameInput() {
    return this._targetNamespaceName;
  }

  // target_region_id - computed: false, optional: false, required: true
  private _targetRegionId?: string; 
  public get targetRegionId() {
    return this.getStringAttribute('target_region_id');
  }
  public set targetRegionId(value: string) {
    this._targetRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRegionIdInput() {
    return this._targetRegionId;
  }

  // target_repo_name - computed: false, optional: true, required: false
  private _targetRepoName?: string; 
  public get targetRepoName() {
    return this.getStringAttribute('target_repo_name');
  }
  public set targetRepoName(value: string) {
    this._targetRepoName = value;
  }
  public resetTargetRepoName() {
    this._targetRepoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRepoNameInput() {
    return this._targetRepoName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      repo_name: cdktf.stringToTerraform(this._repoName),
      tag_filter: cdktf.stringToTerraform(this._tagFilter),
      target_instance_id: cdktf.stringToTerraform(this._targetInstanceId),
      target_namespace_name: cdktf.stringToTerraform(this._targetNamespaceName),
      target_region_id: cdktf.stringToTerraform(this._targetRegionId),
      target_repo_name: cdktf.stringToTerraform(this._targetRepoName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_name: {
        value: cdktf.stringToHclTerraform(this._repoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_filter: {
        value: cdktf.stringToHclTerraform(this._tagFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_instance_id: {
        value: cdktf.stringToHclTerraform(this._targetInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_namespace_name: {
        value: cdktf.stringToHclTerraform(this._targetNamespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_region_id: {
        value: cdktf.stringToHclTerraform(this._targetRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_repo_name: {
        value: cdktf.stringToHclTerraform(this._targetRepoName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
