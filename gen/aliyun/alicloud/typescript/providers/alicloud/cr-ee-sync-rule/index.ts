// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrEeSyncRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#id CrEeSyncRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#instance_id CrEeSyncRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#name CrEeSyncRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#namespace_name CrEeSyncRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#repo_name CrEeSyncRule#repo_name}
  */
  readonly repoName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#sync_rule_name CrEeSyncRule#sync_rule_name}
  */
  readonly syncRuleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#sync_scope CrEeSyncRule#sync_scope}
  */
  readonly syncScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#sync_trigger CrEeSyncRule#sync_trigger}
  */
  readonly syncTrigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#tag_filter CrEeSyncRule#tag_filter}
  */
  readonly tagFilter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#target_instance_id CrEeSyncRule#target_instance_id}
  */
  readonly targetInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#target_namespace_name CrEeSyncRule#target_namespace_name}
  */
  readonly targetNamespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#target_region_id CrEeSyncRule#target_region_id}
  */
  readonly targetRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#target_repo_name CrEeSyncRule#target_repo_name}
  */
  readonly targetRepoName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#target_user_id CrEeSyncRule#target_user_id}
  */
  readonly targetUserId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#timeouts CrEeSyncRule#timeouts}
  */
  readonly timeouts?: CrEeSyncRuleTimeouts;
}
export interface CrEeSyncRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#create CrEeSyncRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#delete CrEeSyncRule#delete}
  */
  readonly delete?: string;
}

export function crEeSyncRuleTimeoutsToTerraform(struct?: CrEeSyncRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function crEeSyncRuleTimeoutsToHclTerraform(struct?: CrEeSyncRuleTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CrEeSyncRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CrEeSyncRuleTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CrEeSyncRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule alicloud_cr_ee_sync_rule}
*/
export class CrEeSyncRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cr_ee_sync_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CrEeSyncRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CrEeSyncRule to import
  * @param importFromId The id of the existing CrEeSyncRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CrEeSyncRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cr_ee_sync_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/cr_ee_sync_rule alicloud_cr_ee_sync_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrEeSyncRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CrEeSyncRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cr_ee_sync_rule',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._repoName = config.repoName;
    this._syncRuleName = config.syncRuleName;
    this._syncScope = config.syncScope;
    this._syncTrigger = config.syncTrigger;
    this._tagFilter = config.tagFilter;
    this._targetInstanceId = config.targetInstanceId;
    this._targetNamespaceName = config.targetNamespaceName;
    this._targetRegionId = config.targetRegionId;
    this._targetRepoName = config.targetRepoName;
    this._targetUserId = config.targetUserId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // repo_sync_rule_id - computed: true, optional: false, required: false
  public get repoSyncRuleId() {
    return this.getStringAttribute('repo_sync_rule_id');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // sync_direction - computed: true, optional: false, required: false
  public get syncDirection() {
    return this.getStringAttribute('sync_direction');
  }

  // sync_rule_name - computed: true, optional: true, required: false
  private _syncRuleName?: string; 
  public get syncRuleName() {
    return this.getStringAttribute('sync_rule_name');
  }
  public set syncRuleName(value: string) {
    this._syncRuleName = value;
  }
  public resetSyncRuleName() {
    this._syncRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRuleNameInput() {
    return this._syncRuleName;
  }

  // sync_scope - computed: true, optional: true, required: false
  private _syncScope?: string; 
  public get syncScope() {
    return this.getStringAttribute('sync_scope');
  }
  public set syncScope(value: string) {
    this._syncScope = value;
  }
  public resetSyncScope() {
    this._syncScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncScopeInput() {
    return this._syncScope;
  }

  // sync_trigger - computed: true, optional: true, required: false
  private _syncTrigger?: string; 
  public get syncTrigger() {
    return this.getStringAttribute('sync_trigger');
  }
  public set syncTrigger(value: string) {
    this._syncTrigger = value;
  }
  public resetSyncTrigger() {
    this._syncTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTriggerInput() {
    return this._syncTrigger;
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

  // target_user_id - computed: false, optional: true, required: false
  private _targetUserId?: string; 
  public get targetUserId() {
    return this.getStringAttribute('target_user_id');
  }
  public set targetUserId(value: string) {
    this._targetUserId = value;
  }
  public resetTargetUserId() {
    this._targetUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUserIdInput() {
    return this._targetUserId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CrEeSyncRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CrEeSyncRuleTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      repo_name: cdktf.stringToTerraform(this._repoName),
      sync_rule_name: cdktf.stringToTerraform(this._syncRuleName),
      sync_scope: cdktf.stringToTerraform(this._syncScope),
      sync_trigger: cdktf.stringToTerraform(this._syncTrigger),
      tag_filter: cdktf.stringToTerraform(this._tagFilter),
      target_instance_id: cdktf.stringToTerraform(this._targetInstanceId),
      target_namespace_name: cdktf.stringToTerraform(this._targetNamespaceName),
      target_region_id: cdktf.stringToTerraform(this._targetRegionId),
      target_repo_name: cdktf.stringToTerraform(this._targetRepoName),
      target_user_id: cdktf.stringToTerraform(this._targetUserId),
      timeouts: crEeSyncRuleTimeoutsToTerraform(this._timeouts.internalValue),
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
      sync_rule_name: {
        value: cdktf.stringToHclTerraform(this._syncRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_scope: {
        value: cdktf.stringToHclTerraform(this._syncScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_trigger: {
        value: cdktf.stringToHclTerraform(this._syncTrigger),
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
      target_user_id: {
        value: cdktf.stringToHclTerraform(this._targetUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: crEeSyncRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CrEeSyncRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
