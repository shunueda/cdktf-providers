// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssScalingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#allocation_strategy EssScalingGroup#allocation_strategy}
  */
  readonly allocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#auto_rebalance EssScalingGroup#auto_rebalance}
  */
  readonly autoRebalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#az_balance EssScalingGroup#az_balance}
  */
  readonly azBalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#balance_mode EssScalingGroup#balance_mode}
  */
  readonly balanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#capacity_options_compensate_with_on_demand EssScalingGroup#capacity_options_compensate_with_on_demand}
  */
  readonly capacityOptionsCompensateWithOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#capacity_options_on_demand_base_capacity EssScalingGroup#capacity_options_on_demand_base_capacity}
  */
  readonly capacityOptionsOnDemandBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#capacity_options_on_demand_percentage_above_base_capacity EssScalingGroup#capacity_options_on_demand_percentage_above_base_capacity}
  */
  readonly capacityOptionsOnDemandPercentageAboveBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#capacity_options_price_comparison_mode EssScalingGroup#capacity_options_price_comparison_mode}
  */
  readonly capacityOptionsPriceComparisonMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#capacity_options_spot_auto_replace_on_demand EssScalingGroup#capacity_options_spot_auto_replace_on_demand}
  */
  readonly capacityOptionsSpotAutoReplaceOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#compensate_with_on_demand EssScalingGroup#compensate_with_on_demand}
  */
  readonly compensateWithOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#container_group_id EssScalingGroup#container_group_id}
  */
  readonly containerGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#db_instance_ids EssScalingGroup#db_instance_ids}
  */
  readonly dbInstanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#default_cooldown EssScalingGroup#default_cooldown}
  */
  readonly defaultCooldown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#desired_capacity EssScalingGroup#desired_capacity}
  */
  readonly desiredCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#group_deletion_protection EssScalingGroup#group_deletion_protection}
  */
  readonly groupDeletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#group_type EssScalingGroup#group_type}
  */
  readonly groupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#health_check_type EssScalingGroup#health_check_type}
  */
  readonly healthCheckType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#health_check_types EssScalingGroup#health_check_types}
  */
  readonly healthCheckTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#id EssScalingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#instance_id EssScalingGroup#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#launch_template_id EssScalingGroup#launch_template_id}
  */
  readonly launchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#launch_template_version EssScalingGroup#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#loadbalancer_ids EssScalingGroup#loadbalancer_ids}
  */
  readonly loadbalancerIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#max_instance_lifetime EssScalingGroup#max_instance_lifetime}
  */
  readonly maxInstanceLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#max_size EssScalingGroup#max_size}
  */
  readonly maxSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#min_size EssScalingGroup#min_size}
  */
  readonly minSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#multi_az_policy EssScalingGroup#multi_az_policy}
  */
  readonly multiAzPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#on_demand_base_capacity EssScalingGroup#on_demand_base_capacity}
  */
  readonly onDemandBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#on_demand_percentage_above_base_capacity EssScalingGroup#on_demand_percentage_above_base_capacity}
  */
  readonly onDemandPercentageAboveBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#protected_instances EssScalingGroup#protected_instances}
  */
  readonly protectedInstances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#removal_policies EssScalingGroup#removal_policies}
  */
  readonly removalPolicies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#resource_group_id EssScalingGroup#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#scaling_group_name EssScalingGroup#scaling_group_name}
  */
  readonly scalingGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#scaling_policy EssScalingGroup#scaling_policy}
  */
  readonly scalingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#spot_allocation_strategy EssScalingGroup#spot_allocation_strategy}
  */
  readonly spotAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#spot_instance_pools EssScalingGroup#spot_instance_pools}
  */
  readonly spotInstancePools?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#spot_instance_remedy EssScalingGroup#spot_instance_remedy}
  */
  readonly spotInstanceRemedy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#stop_instance_timeout EssScalingGroup#stop_instance_timeout}
  */
  readonly stopInstanceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#tags EssScalingGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#vswitch_id EssScalingGroup#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#vswitch_ids EssScalingGroup#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * alb_server_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#alb_server_group EssScalingGroup#alb_server_group}
  */
  readonly albServerGroup?: EssScalingGroupAlbServerGroup[] | cdktf.IResolvable;
  /**
  * launch_template_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#launch_template_override EssScalingGroup#launch_template_override}
  */
  readonly launchTemplateOverride?: EssScalingGroupLaunchTemplateOverride[] | cdktf.IResolvable;
}
export interface EssScalingGroupAlbServerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#alb_server_group_id EssScalingGroup#alb_server_group_id}
  */
  readonly albServerGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#port EssScalingGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#weight EssScalingGroup#weight}
  */
  readonly weight?: number;
}

export function essScalingGroupAlbServerGroupToTerraform(struct?: EssScalingGroupAlbServerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alb_server_group_id: cdktf.stringToTerraform(struct!.albServerGroupId),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function essScalingGroupAlbServerGroupToHclTerraform(struct?: EssScalingGroupAlbServerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alb_server_group_id: {
      value: cdktf.stringToHclTerraform(struct!.albServerGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingGroupAlbServerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingGroupAlbServerGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._albServerGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.albServerGroupId = this._albServerGroupId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingGroupAlbServerGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._albServerGroupId = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._albServerGroupId = value.albServerGroupId;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // alb_server_group_id - computed: false, optional: true, required: false
  private _albServerGroupId?: string; 
  public get albServerGroupId() {
    return this.getStringAttribute('alb_server_group_id');
  }
  public set albServerGroupId(value: string) {
    this._albServerGroupId = value;
  }
  public resetAlbServerGroupId() {
    this._albServerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albServerGroupIdInput() {
    return this._albServerGroupId;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class EssScalingGroupAlbServerGroupList extends cdktf.ComplexList {
  public internalValue? : EssScalingGroupAlbServerGroup[] | cdktf.IResolvable

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
  public get(index: number): EssScalingGroupAlbServerGroupOutputReference {
    return new EssScalingGroupAlbServerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssScalingGroupLaunchTemplateOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#instance_type EssScalingGroup#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#spot_price_limit EssScalingGroup#spot_price_limit}
  */
  readonly spotPriceLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#weighted_capacity EssScalingGroup#weighted_capacity}
  */
  readonly weightedCapacity?: number;
}

export function essScalingGroupLaunchTemplateOverrideToTerraform(struct?: EssScalingGroupLaunchTemplateOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    spot_price_limit: cdktf.numberToTerraform(struct!.spotPriceLimit),
    weighted_capacity: cdktf.numberToTerraform(struct!.weightedCapacity),
  }
}


export function essScalingGroupLaunchTemplateOverrideToHclTerraform(struct?: EssScalingGroupLaunchTemplateOverride | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_price_limit: {
      value: cdktf.numberToHclTerraform(struct!.spotPriceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weighted_capacity: {
      value: cdktf.numberToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssScalingGroupLaunchTemplateOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssScalingGroupLaunchTemplateOverride | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._spotPriceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPriceLimit = this._spotPriceLimit;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssScalingGroupLaunchTemplateOverride | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._spotPriceLimit = undefined;
      this._weightedCapacity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._spotPriceLimit = value.spotPriceLimit;
      this._weightedCapacity = value.weightedCapacity;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // spot_price_limit - computed: false, optional: true, required: false
  private _spotPriceLimit?: number; 
  public get spotPriceLimit() {
    return this.getNumberAttribute('spot_price_limit');
  }
  public set spotPriceLimit(value: number) {
    this._spotPriceLimit = value;
  }
  public resetSpotPriceLimit() {
    this._spotPriceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceLimitInput() {
    return this._spotPriceLimit;
  }

  // weighted_capacity - computed: false, optional: true, required: false
  private _weightedCapacity?: number; 
  public get weightedCapacity() {
    return this.getNumberAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: number) {
    this._weightedCapacity = value;
  }
  public resetWeightedCapacity() {
    this._weightedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }
}

export class EssScalingGroupLaunchTemplateOverrideList extends cdktf.ComplexList {
  public internalValue? : EssScalingGroupLaunchTemplateOverride[] | cdktf.IResolvable

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
  public get(index: number): EssScalingGroupLaunchTemplateOverrideOutputReference {
    return new EssScalingGroupLaunchTemplateOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group alicloud_ess_scaling_group}
*/
export class EssScalingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_scaling_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssScalingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssScalingGroup to import
  * @param importFromId The id of the existing EssScalingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssScalingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_scaling_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/ess_scaling_group alicloud_ess_scaling_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssScalingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EssScalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_scaling_group',
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
    this._allocationStrategy = config.allocationStrategy;
    this._autoRebalance = config.autoRebalance;
    this._azBalance = config.azBalance;
    this._balanceMode = config.balanceMode;
    this._capacityOptionsCompensateWithOnDemand = config.capacityOptionsCompensateWithOnDemand;
    this._capacityOptionsOnDemandBaseCapacity = config.capacityOptionsOnDemandBaseCapacity;
    this._capacityOptionsOnDemandPercentageAboveBaseCapacity = config.capacityOptionsOnDemandPercentageAboveBaseCapacity;
    this._capacityOptionsPriceComparisonMode = config.capacityOptionsPriceComparisonMode;
    this._capacityOptionsSpotAutoReplaceOnDemand = config.capacityOptionsSpotAutoReplaceOnDemand;
    this._compensateWithOnDemand = config.compensateWithOnDemand;
    this._containerGroupId = config.containerGroupId;
    this._dbInstanceIds = config.dbInstanceIds;
    this._defaultCooldown = config.defaultCooldown;
    this._desiredCapacity = config.desiredCapacity;
    this._groupDeletionProtection = config.groupDeletionProtection;
    this._groupType = config.groupType;
    this._healthCheckType = config.healthCheckType;
    this._healthCheckTypes = config.healthCheckTypes;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._launchTemplateId = config.launchTemplateId;
    this._launchTemplateVersion = config.launchTemplateVersion;
    this._loadbalancerIds = config.loadbalancerIds;
    this._maxInstanceLifetime = config.maxInstanceLifetime;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._multiAzPolicy = config.multiAzPolicy;
    this._onDemandBaseCapacity = config.onDemandBaseCapacity;
    this._onDemandPercentageAboveBaseCapacity = config.onDemandPercentageAboveBaseCapacity;
    this._protectedInstances = config.protectedInstances;
    this._removalPolicies = config.removalPolicies;
    this._resourceGroupId = config.resourceGroupId;
    this._scalingGroupName = config.scalingGroupName;
    this._scalingPolicy = config.scalingPolicy;
    this._spotAllocationStrategy = config.spotAllocationStrategy;
    this._spotInstancePools = config.spotInstancePools;
    this._spotInstanceRemedy = config.spotInstanceRemedy;
    this._stopInstanceTimeout = config.stopInstanceTimeout;
    this._tags = config.tags;
    this._vswitchId = config.vswitchId;
    this._vswitchIds = config.vswitchIds;
    this._albServerGroup.internalValue = config.albServerGroup;
    this._launchTemplateOverride.internalValue = config.launchTemplateOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_strategy - computed: true, optional: true, required: false
  private _allocationStrategy?: string; 
  public get allocationStrategy() {
    return this.getStringAttribute('allocation_strategy');
  }
  public set allocationStrategy(value: string) {
    this._allocationStrategy = value;
  }
  public resetAllocationStrategy() {
    this._allocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationStrategyInput() {
    return this._allocationStrategy;
  }

  // auto_rebalance - computed: false, optional: true, required: false
  private _autoRebalance?: boolean | cdktf.IResolvable; 
  public get autoRebalance() {
    return this.getBooleanAttribute('auto_rebalance');
  }
  public set autoRebalance(value: boolean | cdktf.IResolvable) {
    this._autoRebalance = value;
  }
  public resetAutoRebalance() {
    this._autoRebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRebalanceInput() {
    return this._autoRebalance;
  }

  // az_balance - computed: false, optional: true, required: false
  private _azBalance?: boolean | cdktf.IResolvable; 
  public get azBalance() {
    return this.getBooleanAttribute('az_balance');
  }
  public set azBalance(value: boolean | cdktf.IResolvable) {
    this._azBalance = value;
  }
  public resetAzBalance() {
    this._azBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azBalanceInput() {
    return this._azBalance;
  }

  // balance_mode - computed: false, optional: true, required: false
  private _balanceMode?: string; 
  public get balanceMode() {
    return this.getStringAttribute('balance_mode');
  }
  public set balanceMode(value: string) {
    this._balanceMode = value;
  }
  public resetBalanceMode() {
    this._balanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceModeInput() {
    return this._balanceMode;
  }

  // capacity_options_compensate_with_on_demand - computed: true, optional: true, required: false
  private _capacityOptionsCompensateWithOnDemand?: boolean | cdktf.IResolvable; 
  public get capacityOptionsCompensateWithOnDemand() {
    return this.getBooleanAttribute('capacity_options_compensate_with_on_demand');
  }
  public set capacityOptionsCompensateWithOnDemand(value: boolean | cdktf.IResolvable) {
    this._capacityOptionsCompensateWithOnDemand = value;
  }
  public resetCapacityOptionsCompensateWithOnDemand() {
    this._capacityOptionsCompensateWithOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityOptionsCompensateWithOnDemandInput() {
    return this._capacityOptionsCompensateWithOnDemand;
  }

  // capacity_options_on_demand_base_capacity - computed: true, optional: true, required: false
  private _capacityOptionsOnDemandBaseCapacity?: number; 
  public get capacityOptionsOnDemandBaseCapacity() {
    return this.getNumberAttribute('capacity_options_on_demand_base_capacity');
  }
  public set capacityOptionsOnDemandBaseCapacity(value: number) {
    this._capacityOptionsOnDemandBaseCapacity = value;
  }
  public resetCapacityOptionsOnDemandBaseCapacity() {
    this._capacityOptionsOnDemandBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityOptionsOnDemandBaseCapacityInput() {
    return this._capacityOptionsOnDemandBaseCapacity;
  }

  // capacity_options_on_demand_percentage_above_base_capacity - computed: true, optional: true, required: false
  private _capacityOptionsOnDemandPercentageAboveBaseCapacity?: number; 
  public get capacityOptionsOnDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('capacity_options_on_demand_percentage_above_base_capacity');
  }
  public set capacityOptionsOnDemandPercentageAboveBaseCapacity(value: number) {
    this._capacityOptionsOnDemandPercentageAboveBaseCapacity = value;
  }
  public resetCapacityOptionsOnDemandPercentageAboveBaseCapacity() {
    this._capacityOptionsOnDemandPercentageAboveBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityOptionsOnDemandPercentageAboveBaseCapacityInput() {
    return this._capacityOptionsOnDemandPercentageAboveBaseCapacity;
  }

  // capacity_options_price_comparison_mode - computed: true, optional: true, required: false
  private _capacityOptionsPriceComparisonMode?: string; 
  public get capacityOptionsPriceComparisonMode() {
    return this.getStringAttribute('capacity_options_price_comparison_mode');
  }
  public set capacityOptionsPriceComparisonMode(value: string) {
    this._capacityOptionsPriceComparisonMode = value;
  }
  public resetCapacityOptionsPriceComparisonMode() {
    this._capacityOptionsPriceComparisonMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityOptionsPriceComparisonModeInput() {
    return this._capacityOptionsPriceComparisonMode;
  }

  // capacity_options_spot_auto_replace_on_demand - computed: true, optional: true, required: false
  private _capacityOptionsSpotAutoReplaceOnDemand?: boolean | cdktf.IResolvable; 
  public get capacityOptionsSpotAutoReplaceOnDemand() {
    return this.getBooleanAttribute('capacity_options_spot_auto_replace_on_demand');
  }
  public set capacityOptionsSpotAutoReplaceOnDemand(value: boolean | cdktf.IResolvable) {
    this._capacityOptionsSpotAutoReplaceOnDemand = value;
  }
  public resetCapacityOptionsSpotAutoReplaceOnDemand() {
    this._capacityOptionsSpotAutoReplaceOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityOptionsSpotAutoReplaceOnDemandInput() {
    return this._capacityOptionsSpotAutoReplaceOnDemand;
  }

  // compensate_with_on_demand - computed: true, optional: true, required: false
  private _compensateWithOnDemand?: boolean | cdktf.IResolvable; 
  public get compensateWithOnDemand() {
    return this.getBooleanAttribute('compensate_with_on_demand');
  }
  public set compensateWithOnDemand(value: boolean | cdktf.IResolvable) {
    this._compensateWithOnDemand = value;
  }
  public resetCompensateWithOnDemand() {
    this._compensateWithOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compensateWithOnDemandInput() {
    return this._compensateWithOnDemand;
  }

  // container_group_id - computed: false, optional: true, required: false
  private _containerGroupId?: string; 
  public get containerGroupId() {
    return this.getStringAttribute('container_group_id');
  }
  public set containerGroupId(value: string) {
    this._containerGroupId = value;
  }
  public resetContainerGroupId() {
    this._containerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerGroupIdInput() {
    return this._containerGroupId;
  }

  // db_instance_ids - computed: false, optional: true, required: false
  private _dbInstanceIds?: string[]; 
  public get dbInstanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('db_instance_ids'));
  }
  public set dbInstanceIds(value: string[]) {
    this._dbInstanceIds = value;
  }
  public resetDbInstanceIds() {
    this._dbInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdsInput() {
    return this._dbInstanceIds;
  }

  // default_cooldown - computed: false, optional: true, required: false
  private _defaultCooldown?: number; 
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number) {
    this._defaultCooldown = value;
  }
  public resetDefaultCooldown() {
    this._defaultCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCooldownInput() {
    return this._defaultCooldown;
  }

  // desired_capacity - computed: false, optional: true, required: false
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // group_deletion_protection - computed: false, optional: true, required: false
  private _groupDeletionProtection?: boolean | cdktf.IResolvable; 
  public get groupDeletionProtection() {
    return this.getBooleanAttribute('group_deletion_protection');
  }
  public set groupDeletionProtection(value: boolean | cdktf.IResolvable) {
    this._groupDeletionProtection = value;
  }
  public resetGroupDeletionProtection() {
    this._groupDeletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupDeletionProtectionInput() {
    return this._groupDeletionProtection;
  }

  // group_type - computed: true, optional: true, required: false
  private _groupType?: string; 
  public get groupType() {
    return this.getStringAttribute('group_type');
  }
  public set groupType(value: string) {
    this._groupType = value;
  }
  public resetGroupType() {
    this._groupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTypeInput() {
    return this._groupType;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string; 
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string) {
    this._healthCheckType = value;
  }
  public resetHealthCheckType() {
    this._healthCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypeInput() {
    return this._healthCheckType;
  }

  // health_check_types - computed: false, optional: true, required: false
  private _healthCheckTypes?: string[]; 
  public get healthCheckTypes() {
    return this.getListAttribute('health_check_types');
  }
  public set healthCheckTypes(value: string[]) {
    this._healthCheckTypes = value;
  }
  public resetHealthCheckTypes() {
    this._healthCheckTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckTypesInput() {
    return this._healthCheckTypes;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // launch_template_id - computed: false, optional: true, required: false
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  public resetLaunchTemplateId() {
    this._launchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_version - computed: false, optional: true, required: false
  private _launchTemplateVersion?: string; 
  public get launchTemplateVersion() {
    return this.getStringAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: string) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // loadbalancer_ids - computed: false, optional: true, required: false
  private _loadbalancerIds?: string[]; 
  public get loadbalancerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('loadbalancer_ids'));
  }
  public set loadbalancerIds(value: string[]) {
    this._loadbalancerIds = value;
  }
  public resetLoadbalancerIds() {
    this._loadbalancerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdsInput() {
    return this._loadbalancerIds;
  }

  // max_instance_lifetime - computed: false, optional: true, required: false
  private _maxInstanceLifetime?: number; 
  public get maxInstanceLifetime() {
    return this.getNumberAttribute('max_instance_lifetime');
  }
  public set maxInstanceLifetime(value: number) {
    this._maxInstanceLifetime = value;
  }
  public resetMaxInstanceLifetime() {
    this._maxInstanceLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceLifetimeInput() {
    return this._maxInstanceLifetime;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // multi_az_policy - computed: false, optional: true, required: false
  private _multiAzPolicy?: string; 
  public get multiAzPolicy() {
    return this.getStringAttribute('multi_az_policy');
  }
  public set multiAzPolicy(value: string) {
    this._multiAzPolicy = value;
  }
  public resetMultiAzPolicy() {
    this._multiAzPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzPolicyInput() {
    return this._multiAzPolicy;
  }

  // on_demand_base_capacity - computed: true, optional: true, required: false
  private _onDemandBaseCapacity?: number; 
  public get onDemandBaseCapacity() {
    return this.getNumberAttribute('on_demand_base_capacity');
  }
  public set onDemandBaseCapacity(value: number) {
    this._onDemandBaseCapacity = value;
  }
  public resetOnDemandBaseCapacity() {
    this._onDemandBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBaseCapacityInput() {
    return this._onDemandBaseCapacity;
  }

  // on_demand_percentage_above_base_capacity - computed: true, optional: true, required: false
  private _onDemandPercentageAboveBaseCapacity?: number; 
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
  }
  public set onDemandPercentageAboveBaseCapacity(value: number) {
    this._onDemandPercentageAboveBaseCapacity = value;
  }
  public resetOnDemandPercentageAboveBaseCapacity() {
    this._onDemandPercentageAboveBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPercentageAboveBaseCapacityInput() {
    return this._onDemandPercentageAboveBaseCapacity;
  }

  // protected_instances - computed: false, optional: true, required: false
  private _protectedInstances?: string[]; 
  public get protectedInstances() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_instances'));
  }
  public set protectedInstances(value: string[]) {
    this._protectedInstances = value;
  }
  public resetProtectedInstances() {
    this._protectedInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedInstancesInput() {
    return this._protectedInstances;
  }

  // removal_policies - computed: true, optional: true, required: false
  private _removalPolicies?: string[]; 
  public get removalPolicies() {
    return this.getListAttribute('removal_policies');
  }
  public set removalPolicies(value: string[]) {
    this._removalPolicies = value;
  }
  public resetRemovalPolicies() {
    this._removalPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removalPoliciesInput() {
    return this._removalPolicies;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // scaling_group_name - computed: false, optional: true, required: false
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  public resetScalingGroupName() {
    this._scalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }

  // scaling_policy - computed: true, optional: true, required: false
  private _scalingPolicy?: string; 
  public get scalingPolicy() {
    return this.getStringAttribute('scaling_policy');
  }
  public set scalingPolicy(value: string) {
    this._scalingPolicy = value;
  }
  public resetScalingPolicy() {
    this._scalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyInput() {
    return this._scalingPolicy;
  }

  // spot_allocation_strategy - computed: true, optional: true, required: false
  private _spotAllocationStrategy?: string; 
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }
  public set spotAllocationStrategy(value: string) {
    this._spotAllocationStrategy = value;
  }
  public resetSpotAllocationStrategy() {
    this._spotAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAllocationStrategyInput() {
    return this._spotAllocationStrategy;
  }

  // spot_instance_pools - computed: true, optional: true, required: false
  private _spotInstancePools?: number; 
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }
  public set spotInstancePools(value: number) {
    this._spotInstancePools = value;
  }
  public resetSpotInstancePools() {
    this._spotInstancePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePoolsInput() {
    return this._spotInstancePools;
  }

  // spot_instance_remedy - computed: true, optional: true, required: false
  private _spotInstanceRemedy?: boolean | cdktf.IResolvable; 
  public get spotInstanceRemedy() {
    return this.getBooleanAttribute('spot_instance_remedy');
  }
  public set spotInstanceRemedy(value: boolean | cdktf.IResolvable) {
    this._spotInstanceRemedy = value;
  }
  public resetSpotInstanceRemedy() {
    this._spotInstanceRemedy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceRemedyInput() {
    return this._spotInstanceRemedy;
  }

  // stop_instance_timeout - computed: false, optional: true, required: false
  private _stopInstanceTimeout?: number; 
  public get stopInstanceTimeout() {
    return this.getNumberAttribute('stop_instance_timeout');
  }
  public set stopInstanceTimeout(value: number) {
    this._stopInstanceTimeout = value;
  }
  public resetStopInstanceTimeout() {
    this._stopInstanceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopInstanceTimeoutInput() {
    return this._stopInstanceTimeout;
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

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vswitch_ids'));
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // alb_server_group - computed: false, optional: true, required: false
  private _albServerGroup = new EssScalingGroupAlbServerGroupList(this, "alb_server_group", true);
  public get albServerGroup() {
    return this._albServerGroup;
  }
  public putAlbServerGroup(value: EssScalingGroupAlbServerGroup[] | cdktf.IResolvable) {
    this._albServerGroup.internalValue = value;
  }
  public resetAlbServerGroup() {
    this._albServerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albServerGroupInput() {
    return this._albServerGroup.internalValue;
  }

  // launch_template_override - computed: false, optional: true, required: false
  private _launchTemplateOverride = new EssScalingGroupLaunchTemplateOverrideList(this, "launch_template_override", true);
  public get launchTemplateOverride() {
    return this._launchTemplateOverride;
  }
  public putLaunchTemplateOverride(value: EssScalingGroupLaunchTemplateOverride[] | cdktf.IResolvable) {
    this._launchTemplateOverride.internalValue = value;
  }
  public resetLaunchTemplateOverride() {
    this._launchTemplateOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateOverrideInput() {
    return this._launchTemplateOverride.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_strategy: cdktf.stringToTerraform(this._allocationStrategy),
      auto_rebalance: cdktf.booleanToTerraform(this._autoRebalance),
      az_balance: cdktf.booleanToTerraform(this._azBalance),
      balance_mode: cdktf.stringToTerraform(this._balanceMode),
      capacity_options_compensate_with_on_demand: cdktf.booleanToTerraform(this._capacityOptionsCompensateWithOnDemand),
      capacity_options_on_demand_base_capacity: cdktf.numberToTerraform(this._capacityOptionsOnDemandBaseCapacity),
      capacity_options_on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(this._capacityOptionsOnDemandPercentageAboveBaseCapacity),
      capacity_options_price_comparison_mode: cdktf.stringToTerraform(this._capacityOptionsPriceComparisonMode),
      capacity_options_spot_auto_replace_on_demand: cdktf.booleanToTerraform(this._capacityOptionsSpotAutoReplaceOnDemand),
      compensate_with_on_demand: cdktf.booleanToTerraform(this._compensateWithOnDemand),
      container_group_id: cdktf.stringToTerraform(this._containerGroupId),
      db_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dbInstanceIds),
      default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      group_deletion_protection: cdktf.booleanToTerraform(this._groupDeletionProtection),
      group_type: cdktf.stringToTerraform(this._groupType),
      health_check_type: cdktf.stringToTerraform(this._healthCheckType),
      health_check_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._healthCheckTypes),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      launch_template_id: cdktf.stringToTerraform(this._launchTemplateId),
      launch_template_version: cdktf.stringToTerraform(this._launchTemplateVersion),
      loadbalancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadbalancerIds),
      max_instance_lifetime: cdktf.numberToTerraform(this._maxInstanceLifetime),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      multi_az_policy: cdktf.stringToTerraform(this._multiAzPolicy),
      on_demand_base_capacity: cdktf.numberToTerraform(this._onDemandBaseCapacity),
      on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(this._onDemandPercentageAboveBaseCapacity),
      protected_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protectedInstances),
      removal_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._removalPolicies),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      scaling_group_name: cdktf.stringToTerraform(this._scalingGroupName),
      scaling_policy: cdktf.stringToTerraform(this._scalingPolicy),
      spot_allocation_strategy: cdktf.stringToTerraform(this._spotAllocationStrategy),
      spot_instance_pools: cdktf.numberToTerraform(this._spotInstancePools),
      spot_instance_remedy: cdktf.booleanToTerraform(this._spotInstanceRemedy),
      stop_instance_timeout: cdktf.numberToTerraform(this._stopInstanceTimeout),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      alb_server_group: cdktf.listMapper(essScalingGroupAlbServerGroupToTerraform, true)(this._albServerGroup.internalValue),
      launch_template_override: cdktf.listMapper(essScalingGroupLaunchTemplateOverrideToTerraform, true)(this._launchTemplateOverride.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_strategy: {
        value: cdktf.stringToHclTerraform(this._allocationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_rebalance: {
        value: cdktf.booleanToHclTerraform(this._autoRebalance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      az_balance: {
        value: cdktf.booleanToHclTerraform(this._azBalance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      balance_mode: {
        value: cdktf.stringToHclTerraform(this._balanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_options_compensate_with_on_demand: {
        value: cdktf.booleanToHclTerraform(this._capacityOptionsCompensateWithOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capacity_options_on_demand_base_capacity: {
        value: cdktf.numberToHclTerraform(this._capacityOptionsOnDemandBaseCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capacity_options_on_demand_percentage_above_base_capacity: {
        value: cdktf.numberToHclTerraform(this._capacityOptionsOnDemandPercentageAboveBaseCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capacity_options_price_comparison_mode: {
        value: cdktf.stringToHclTerraform(this._capacityOptionsPriceComparisonMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity_options_spot_auto_replace_on_demand: {
        value: cdktf.booleanToHclTerraform(this._capacityOptionsSpotAutoReplaceOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compensate_with_on_demand: {
        value: cdktf.booleanToHclTerraform(this._compensateWithOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container_group_id: {
        value: cdktf.stringToHclTerraform(this._containerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dbInstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_cooldown: {
        value: cdktf.numberToHclTerraform(this._defaultCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._groupDeletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_type: {
        value: cdktf.stringToHclTerraform(this._groupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_type: {
        value: cdktf.stringToHclTerraform(this._healthCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._healthCheckTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
      launch_template_id: {
        value: cdktf.stringToHclTerraform(this._launchTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_version: {
        value: cdktf.stringToHclTerraform(this._launchTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadbalancerIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_instance_lifetime: {
        value: cdktf.numberToHclTerraform(this._maxInstanceLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_az_policy: {
        value: cdktf.stringToHclTerraform(this._multiAzPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_demand_base_capacity: {
        value: cdktf.numberToHclTerraform(this._onDemandBaseCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      on_demand_percentage_above_base_capacity: {
        value: cdktf.numberToHclTerraform(this._onDemandPercentageAboveBaseCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protected_instances: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protectedInstances),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      removal_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._removalPolicies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_name: {
        value: cdktf.stringToHclTerraform(this._scalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy: {
        value: cdktf.stringToHclTerraform(this._scalingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_allocation_strategy: {
        value: cdktf.stringToHclTerraform(this._spotAllocationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_instance_pools: {
        value: cdktf.numberToHclTerraform(this._spotInstancePools),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_instance_remedy: {
        value: cdktf.booleanToHclTerraform(this._spotInstanceRemedy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stop_instance_timeout: {
        value: cdktf.numberToHclTerraform(this._stopInstanceTimeout),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alb_server_group: {
        value: cdktf.listMapperHcl(essScalingGroupAlbServerGroupToHclTerraform, true)(this._albServerGroup.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalingGroupAlbServerGroupList",
      },
      launch_template_override: {
        value: cdktf.listMapperHcl(essScalingGroupLaunchTemplateOverrideToHclTerraform, true)(this._launchTemplateOverride.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EssScalingGroupLaunchTemplateOverrideList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
