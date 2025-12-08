// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudEssScalingGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups#id DataAlicloudEssScalingGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups#ids DataAlicloudEssScalingGroups#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups#name_regex DataAlicloudEssScalingGroups#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups#output_file DataAlicloudEssScalingGroups#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverride {
}

export function dataAlicloudEssScalingGroupsGroupsLaunchTemplateOverrideToTerraform(struct?: DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEssScalingGroupsGroupsLaunchTemplateOverrideToHclTerraform(struct?: DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // spot_price_limit - computed: true, optional: false, required: false
  public get spotPriceLimit() {
    return this.getNumberAttribute('spot_price_limit');
  }

  // weighted_capacity - computed: true, optional: false, required: false
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
}

export class DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverrideList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverrideOutputReference {
    return new DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudEssScalingGroupsGroups {
}

export function dataAlicloudEssScalingGroupsGroupsToTerraform(struct?: DataAlicloudEssScalingGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudEssScalingGroupsGroupsToHclTerraform(struct?: DataAlicloudEssScalingGroupsGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudEssScalingGroupsGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudEssScalingGroupsGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudEssScalingGroupsGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_capacity - computed: true, optional: false, required: false
  public get activeCapacity() {
    return this.getNumberAttribute('active_capacity');
  }

  // active_scaling_configuration - computed: true, optional: false, required: false
  public get activeScalingConfiguration() {
    return this.getStringAttribute('active_scaling_configuration');
  }

  // allocation_strategy - computed: true, optional: false, required: false
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }

  // az_balance - computed: true, optional: false, required: false
  public get azBalance() {
    return this.getBooleanAttribute('az_balance');
  }

  // capacity_options_compensate_with_on_demand - computed: true, optional: false, required: false
  public get capacityOptionsCompensateWithOnDemand() {
    return this.getBooleanAttribute('capacity_options_compensate_with_on_demand');
  }

  // capacity_options_on_demand_base_capacity - computed: true, optional: false, required: false
  public get capacityOptionsOnDemandBaseCapacity() {
    return this.getNumberAttribute('capacity_options_on_demand_base_capacity');
  }

  // capacity_options_on_demand_percentage_above_base_capacity - computed: true, optional: false, required: false
  public get capacityOptionsOnDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('capacity_options_on_demand_percentage_above_base_capacity');
  }

  // capacity_options_spot_auto_replace_on_demand - computed: true, optional: false, required: false
  public get capacityOptionsSpotAutoReplaceOnDemand() {
    return this.getBooleanAttribute('capacity_options_spot_auto_replace_on_demand');
  }

  // compensate_with_on_demand - computed: true, optional: false, required: false
  public get compensateWithOnDemand() {
    return this.getBooleanAttribute('compensate_with_on_demand');
  }

  // cooldown_time - computed: true, optional: false, required: false
  public get cooldownTime() {
    return this.getNumberAttribute('cooldown_time');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // db_instance_ids - computed: true, optional: false, required: false
  public get dbInstanceIds() {
    return this.getListAttribute('db_instance_ids');
  }

  // desired_capacity - computed: true, optional: false, required: false
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }

  // enable_desired_capacity - computed: true, optional: false, required: false
  public get enableDesiredCapacity() {
    return this.getBooleanAttribute('enable_desired_capacity');
  }

  // group_deletion_protection - computed: true, optional: false, required: false
  public get groupDeletionProtection() {
    return this.getBooleanAttribute('group_deletion_protection');
  }

  // group_type - computed: true, optional: false, required: false
  public get groupType() {
    return this.getStringAttribute('group_type');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_capacity - computed: true, optional: false, required: false
  public get initCapacity() {
    return this.getNumberAttribute('init_capacity');
  }

  // launch_template_id - computed: true, optional: false, required: false
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }

  // launch_template_override - computed: true, optional: false, required: false
  private _launchTemplateOverride = new DataAlicloudEssScalingGroupsGroupsLaunchTemplateOverrideList(this, "launch_template_override", false);
  public get launchTemplateOverride() {
    return this._launchTemplateOverride;
  }

  // launch_template_version - computed: true, optional: false, required: false
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // load_balancer_ids - computed: true, optional: false, required: false
  public get loadBalancerIds() {
    return this.getListAttribute('load_balancer_ids');
  }

  // max_instance_lifetime - computed: true, optional: false, required: false
  public get maxInstanceLifetime() {
    return this.getNumberAttribute('max_instance_lifetime');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // modification_time - computed: true, optional: false, required: false
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }

  // monitor_group_id - computed: true, optional: false, required: false
  public get monitorGroupId() {
    return this.getStringAttribute('monitor_group_id');
  }

  // multi_az_policy - computed: true, optional: false, required: false
  public get multiAzPolicy() {
    return this.getStringAttribute('multi_az_policy');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_demand_base_capacity - computed: true, optional: false, required: false
  public get onDemandBaseCapacity() {
    return this.getNumberAttribute('on_demand_base_capacity');
  }

  // on_demand_percentage_above_base_capacity - computed: true, optional: false, required: false
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
  }

  // pending_capacity - computed: true, optional: false, required: false
  public get pendingCapacity() {
    return this.getNumberAttribute('pending_capacity');
  }

  // pending_wait_capacity - computed: true, optional: false, required: false
  public get pendingWaitCapacity() {
    return this.getNumberAttribute('pending_wait_capacity');
  }

  // protected_capacity - computed: true, optional: false, required: false
  public get protectedCapacity() {
    return this.getNumberAttribute('protected_capacity');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // removal_policies - computed: true, optional: false, required: false
  public get removalPolicies() {
    return this.getListAttribute('removal_policies');
  }

  // removing_capacity - computed: true, optional: false, required: false
  public get removingCapacity() {
    return this.getNumberAttribute('removing_capacity');
  }

  // removing_wait_capacity - computed: true, optional: false, required: false
  public get removingWaitCapacity() {
    return this.getNumberAttribute('removing_wait_capacity');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // scaling_policy - computed: true, optional: false, required: false
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }

  // spot_allocation_strategy - computed: true, optional: false, required: false
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }

  // spot_capacity - computed: true, optional: false, required: false
  public get spotCapacity() {
    return this.getNumberAttribute('spot_capacity');
  }

  // spot_instance_pools - computed: true, optional: false, required: false
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }

  // spot_instance_remedy - computed: true, optional: false, required: false
  public get spotInstanceRemedy() {
    return this.getBooleanAttribute('spot_instance_remedy');
  }

  // standby_capacity - computed: true, optional: false, required: false
  public get standbyCapacity() {
    return this.getNumberAttribute('standby_capacity');
  }

  // stop_instance_timeout - computed: true, optional: false, required: false
  public get stopInstanceTimeout() {
    return this.getNumberAttribute('stop_instance_timeout');
  }

  // stopped_capacity - computed: true, optional: false, required: false
  public get stoppedCapacity() {
    return this.getNumberAttribute('stopped_capacity');
  }

  // suspended_processes - computed: true, optional: false, required: false
  public get suspendedProcesses() {
    return this.getListAttribute('suspended_processes');
  }

  // system_suspended - computed: true, optional: false, required: false
  public get systemSuspended() {
    return this.getBooleanAttribute('system_suspended');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // total_capacity - computed: true, optional: false, required: false
  public get totalCapacity() {
    return this.getNumberAttribute('total_capacity');
  }

  // total_instance_count - computed: true, optional: false, required: false
  public get totalInstanceCount() {
    return this.getNumberAttribute('total_instance_count');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vswitch_id - computed: true, optional: false, required: false
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }

  // vswitch_ids - computed: true, optional: false, required: false
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
}

export class DataAlicloudEssScalingGroupsGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudEssScalingGroupsGroupsOutputReference {
    return new DataAlicloudEssScalingGroupsGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups alicloud_ess_scaling_groups}
*/
export class DataAlicloudEssScalingGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_scaling_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudEssScalingGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudEssScalingGroups to import
  * @param importFromId The id of the existing DataAlicloudEssScalingGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudEssScalingGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_scaling_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/ess_scaling_groups alicloud_ess_scaling_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudEssScalingGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudEssScalingGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_scaling_groups',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: true, optional: false, required: false
  private _groups = new DataAlicloudEssScalingGroupsGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
