// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerAutoGroupingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#exclude_region_ids_scope ResourceManagerAutoGroupingRule#exclude_region_ids_scope}
  */
  readonly excludeRegionIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#exclude_resource_group_ids_scope ResourceManagerAutoGroupingRule#exclude_resource_group_ids_scope}
  */
  readonly excludeResourceGroupIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#exclude_resource_ids_scope ResourceManagerAutoGroupingRule#exclude_resource_ids_scope}
  */
  readonly excludeResourceIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#exclude_resource_types_scope ResourceManagerAutoGroupingRule#exclude_resource_types_scope}
  */
  readonly excludeResourceTypesScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#id ResourceManagerAutoGroupingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#region_ids_scope ResourceManagerAutoGroupingRule#region_ids_scope}
  */
  readonly regionIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#resource_group_ids_scope ResourceManagerAutoGroupingRule#resource_group_ids_scope}
  */
  readonly resourceGroupIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#resource_ids_scope ResourceManagerAutoGroupingRule#resource_ids_scope}
  */
  readonly resourceIdsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#resource_types_scope ResourceManagerAutoGroupingRule#resource_types_scope}
  */
  readonly resourceTypesScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#rule_desc ResourceManagerAutoGroupingRule#rule_desc}
  */
  readonly ruleDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#rule_name ResourceManagerAutoGroupingRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#rule_type ResourceManagerAutoGroupingRule#rule_type}
  */
  readonly ruleType: string;
  /**
  * rule_contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#rule_contents ResourceManagerAutoGroupingRule#rule_contents}
  */
  readonly ruleContents: ResourceManagerAutoGroupingRuleRuleContents[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#timeouts ResourceManagerAutoGroupingRule#timeouts}
  */
  readonly timeouts?: ResourceManagerAutoGroupingRuleTimeouts;
}
export interface ResourceManagerAutoGroupingRuleRuleContents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#auto_grouping_scope_condition ResourceManagerAutoGroupingRule#auto_grouping_scope_condition}
  */
  readonly autoGroupingScopeCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#target_resource_group_condition ResourceManagerAutoGroupingRule#target_resource_group_condition}
  */
  readonly targetResourceGroupCondition: string;
}

export function resourceManagerAutoGroupingRuleRuleContentsToTerraform(struct?: ResourceManagerAutoGroupingRuleRuleContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_grouping_scope_condition: cdktf.stringToTerraform(struct!.autoGroupingScopeCondition),
    target_resource_group_condition: cdktf.stringToTerraform(struct!.targetResourceGroupCondition),
  }
}


export function resourceManagerAutoGroupingRuleRuleContentsToHclTerraform(struct?: ResourceManagerAutoGroupingRuleRuleContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_grouping_scope_condition: {
      value: cdktf.stringToHclTerraform(struct!.autoGroupingScopeCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_resource_group_condition: {
      value: cdktf.stringToHclTerraform(struct!.targetResourceGroupCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceManagerAutoGroupingRuleRuleContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ResourceManagerAutoGroupingRuleRuleContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoGroupingScopeCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoGroupingScopeCondition = this._autoGroupingScopeCondition;
    }
    if (this._targetResourceGroupCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceGroupCondition = this._targetResourceGroupCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceManagerAutoGroupingRuleRuleContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoGroupingScopeCondition = undefined;
      this._targetResourceGroupCondition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoGroupingScopeCondition = value.autoGroupingScopeCondition;
      this._targetResourceGroupCondition = value.targetResourceGroupCondition;
    }
  }

  // auto_grouping_scope_condition - computed: true, optional: true, required: false
  private _autoGroupingScopeCondition?: string; 
  public get autoGroupingScopeCondition() {
    return this.getStringAttribute('auto_grouping_scope_condition');
  }
  public set autoGroupingScopeCondition(value: string) {
    this._autoGroupingScopeCondition = value;
  }
  public resetAutoGroupingScopeCondition() {
    this._autoGroupingScopeCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGroupingScopeConditionInput() {
    return this._autoGroupingScopeCondition;
  }

  // target_resource_group_condition - computed: false, optional: false, required: true
  private _targetResourceGroupCondition?: string; 
  public get targetResourceGroupCondition() {
    return this.getStringAttribute('target_resource_group_condition');
  }
  public set targetResourceGroupCondition(value: string) {
    this._targetResourceGroupCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceGroupConditionInput() {
    return this._targetResourceGroupCondition;
  }
}

export class ResourceManagerAutoGroupingRuleRuleContentsList extends cdktf.ComplexList {
  public internalValue? : ResourceManagerAutoGroupingRuleRuleContents[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ResourceManagerAutoGroupingRuleRuleContentsOutputReference {
    return new ResourceManagerAutoGroupingRuleRuleContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceManagerAutoGroupingRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#create ResourceManagerAutoGroupingRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#delete ResourceManagerAutoGroupingRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#update ResourceManagerAutoGroupingRule#update}
  */
  readonly update?: string;
}

export function resourceManagerAutoGroupingRuleTimeoutsToTerraform(struct?: ResourceManagerAutoGroupingRuleTimeouts | cdktf.IResolvable): any {
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


export function resourceManagerAutoGroupingRuleTimeoutsToHclTerraform(struct?: ResourceManagerAutoGroupingRuleTimeouts | cdktf.IResolvable): any {
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

export class ResourceManagerAutoGroupingRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceManagerAutoGroupingRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceManagerAutoGroupingRuleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule alicloud_resource_manager_auto_grouping_rule}
*/
export class ResourceManagerAutoGroupingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_resource_manager_auto_grouping_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerAutoGroupingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerAutoGroupingRule to import
  * @param importFromId The id of the existing ResourceManagerAutoGroupingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerAutoGroupingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_resource_manager_auto_grouping_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/resource_manager_auto_grouping_rule alicloud_resource_manager_auto_grouping_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerAutoGroupingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerAutoGroupingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_resource_manager_auto_grouping_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._excludeRegionIdsScope = config.excludeRegionIdsScope;
    this._excludeResourceGroupIdsScope = config.excludeResourceGroupIdsScope;
    this._excludeResourceIdsScope = config.excludeResourceIdsScope;
    this._excludeResourceTypesScope = config.excludeResourceTypesScope;
    this._id = config.id;
    this._regionIdsScope = config.regionIdsScope;
    this._resourceGroupIdsScope = config.resourceGroupIdsScope;
    this._resourceIdsScope = config.resourceIdsScope;
    this._resourceTypesScope = config.resourceTypesScope;
    this._ruleDesc = config.ruleDesc;
    this._ruleName = config.ruleName;
    this._ruleType = config.ruleType;
    this._ruleContents.internalValue = config.ruleContents;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_region_ids_scope - computed: false, optional: true, required: false
  private _excludeRegionIdsScope?: string; 
  public get excludeRegionIdsScope() {
    return this.getStringAttribute('exclude_region_ids_scope');
  }
  public set excludeRegionIdsScope(value: string) {
    this._excludeRegionIdsScope = value;
  }
  public resetExcludeRegionIdsScope() {
    this._excludeRegionIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRegionIdsScopeInput() {
    return this._excludeRegionIdsScope;
  }

  // exclude_resource_group_ids_scope - computed: false, optional: true, required: false
  private _excludeResourceGroupIdsScope?: string; 
  public get excludeResourceGroupIdsScope() {
    return this.getStringAttribute('exclude_resource_group_ids_scope');
  }
  public set excludeResourceGroupIdsScope(value: string) {
    this._excludeResourceGroupIdsScope = value;
  }
  public resetExcludeResourceGroupIdsScope() {
    this._excludeResourceGroupIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceGroupIdsScopeInput() {
    return this._excludeResourceGroupIdsScope;
  }

  // exclude_resource_ids_scope - computed: false, optional: true, required: false
  private _excludeResourceIdsScope?: string; 
  public get excludeResourceIdsScope() {
    return this.getStringAttribute('exclude_resource_ids_scope');
  }
  public set excludeResourceIdsScope(value: string) {
    this._excludeResourceIdsScope = value;
  }
  public resetExcludeResourceIdsScope() {
    this._excludeResourceIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceIdsScopeInput() {
    return this._excludeResourceIdsScope;
  }

  // exclude_resource_types_scope - computed: false, optional: true, required: false
  private _excludeResourceTypesScope?: string; 
  public get excludeResourceTypesScope() {
    return this.getStringAttribute('exclude_resource_types_scope');
  }
  public set excludeResourceTypesScope(value: string) {
    this._excludeResourceTypesScope = value;
  }
  public resetExcludeResourceTypesScope() {
    this._excludeResourceTypesScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeResourceTypesScopeInput() {
    return this._excludeResourceTypesScope;
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

  // region_ids_scope - computed: false, optional: true, required: false
  private _regionIdsScope?: string; 
  public get regionIdsScope() {
    return this.getStringAttribute('region_ids_scope');
  }
  public set regionIdsScope(value: string) {
    this._regionIdsScope = value;
  }
  public resetRegionIdsScope() {
    this._regionIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdsScopeInput() {
    return this._regionIdsScope;
  }

  // resource_group_ids_scope - computed: false, optional: true, required: false
  private _resourceGroupIdsScope?: string; 
  public get resourceGroupIdsScope() {
    return this.getStringAttribute('resource_group_ids_scope');
  }
  public set resourceGroupIdsScope(value: string) {
    this._resourceGroupIdsScope = value;
  }
  public resetResourceGroupIdsScope() {
    this._resourceGroupIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdsScopeInput() {
    return this._resourceGroupIdsScope;
  }

  // resource_ids_scope - computed: false, optional: true, required: false
  private _resourceIdsScope?: string; 
  public get resourceIdsScope() {
    return this.getStringAttribute('resource_ids_scope');
  }
  public set resourceIdsScope(value: string) {
    this._resourceIdsScope = value;
  }
  public resetResourceIdsScope() {
    this._resourceIdsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsScopeInput() {
    return this._resourceIdsScope;
  }

  // resource_types_scope - computed: false, optional: true, required: false
  private _resourceTypesScope?: string; 
  public get resourceTypesScope() {
    return this.getStringAttribute('resource_types_scope');
  }
  public set resourceTypesScope(value: string) {
    this._resourceTypesScope = value;
  }
  public resetResourceTypesScope() {
    this._resourceTypesScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesScopeInput() {
    return this._resourceTypesScope;
  }

  // rule_desc - computed: false, optional: true, required: false
  private _ruleDesc?: string; 
  public get ruleDesc() {
    return this.getStringAttribute('rule_desc');
  }
  public set ruleDesc(value: string) {
    this._ruleDesc = value;
  }
  public resetRuleDesc() {
    this._ruleDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleDescInput() {
    return this._ruleDesc;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // rule_contents - computed: false, optional: false, required: true
  private _ruleContents = new ResourceManagerAutoGroupingRuleRuleContentsList(this, "rule_contents", false);
  public get ruleContents() {
    return this._ruleContents;
  }
  public putRuleContents(value: ResourceManagerAutoGroupingRuleRuleContents[] | cdktf.IResolvable) {
    this._ruleContents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleContentsInput() {
    return this._ruleContents.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceManagerAutoGroupingRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceManagerAutoGroupingRuleTimeouts) {
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
      exclude_region_ids_scope: cdktf.stringToTerraform(this._excludeRegionIdsScope),
      exclude_resource_group_ids_scope: cdktf.stringToTerraform(this._excludeResourceGroupIdsScope),
      exclude_resource_ids_scope: cdktf.stringToTerraform(this._excludeResourceIdsScope),
      exclude_resource_types_scope: cdktf.stringToTerraform(this._excludeResourceTypesScope),
      id: cdktf.stringToTerraform(this._id),
      region_ids_scope: cdktf.stringToTerraform(this._regionIdsScope),
      resource_group_ids_scope: cdktf.stringToTerraform(this._resourceGroupIdsScope),
      resource_ids_scope: cdktf.stringToTerraform(this._resourceIdsScope),
      resource_types_scope: cdktf.stringToTerraform(this._resourceTypesScope),
      rule_desc: cdktf.stringToTerraform(this._ruleDesc),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      rule_contents: cdktf.listMapper(resourceManagerAutoGroupingRuleRuleContentsToTerraform, true)(this._ruleContents.internalValue),
      timeouts: resourceManagerAutoGroupingRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      exclude_region_ids_scope: {
        value: cdktf.stringToHclTerraform(this._excludeRegionIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_resource_group_ids_scope: {
        value: cdktf.stringToHclTerraform(this._excludeResourceGroupIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_resource_ids_scope: {
        value: cdktf.stringToHclTerraform(this._excludeResourceIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_resource_types_scope: {
        value: cdktf.stringToHclTerraform(this._excludeResourceTypesScope),
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
      region_ids_scope: {
        value: cdktf.stringToHclTerraform(this._regionIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_ids_scope: {
        value: cdktf.stringToHclTerraform(this._resourceGroupIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_ids_scope: {
        value: cdktf.stringToHclTerraform(this._resourceIdsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_types_scope: {
        value: cdktf.stringToHclTerraform(this._resourceTypesScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_desc: {
        value: cdktf.stringToHclTerraform(this._ruleDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_type: {
        value: cdktf.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_contents: {
        value: cdktf.listMapperHcl(resourceManagerAutoGroupingRuleRuleContentsToHclTerraform, true)(this._ruleContents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceManagerAutoGroupingRuleRuleContentsList",
      },
      timeouts: {
        value: resourceManagerAutoGroupingRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceManagerAutoGroupingRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
