// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoProvisioningGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#auto_provisioning_group_name AutoProvisioningGroup#auto_provisioning_group_name}
  */
  readonly autoProvisioningGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#auto_provisioning_group_type AutoProvisioningGroup#auto_provisioning_group_type}
  */
  readonly autoProvisioningGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#default_target_capacity_type AutoProvisioningGroup#default_target_capacity_type}
  */
  readonly defaultTargetCapacityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#description AutoProvisioningGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#excess_capacity_termination_policy AutoProvisioningGroup#excess_capacity_termination_policy}
  */
  readonly excessCapacityTerminationPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#id AutoProvisioningGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#launch_template_id AutoProvisioningGroup#launch_template_id}
  */
  readonly launchTemplateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#launch_template_version AutoProvisioningGroup#launch_template_version}
  */
  readonly launchTemplateVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#max_spot_price AutoProvisioningGroup#max_spot_price}
  */
  readonly maxSpotPrice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#pay_as_you_go_allocation_strategy AutoProvisioningGroup#pay_as_you_go_allocation_strategy}
  */
  readonly payAsYouGoAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#pay_as_you_go_target_capacity AutoProvisioningGroup#pay_as_you_go_target_capacity}
  */
  readonly payAsYouGoTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#spot_allocation_strategy AutoProvisioningGroup#spot_allocation_strategy}
  */
  readonly spotAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#spot_instance_interruption_behavior AutoProvisioningGroup#spot_instance_interruption_behavior}
  */
  readonly spotInstanceInterruptionBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#spot_instance_pools_to_use_count AutoProvisioningGroup#spot_instance_pools_to_use_count}
  */
  readonly spotInstancePoolsToUseCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#spot_target_capacity AutoProvisioningGroup#spot_target_capacity}
  */
  readonly spotTargetCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#terminate_instances AutoProvisioningGroup#terminate_instances}
  */
  readonly terminateInstances?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#terminate_instances_with_expiration AutoProvisioningGroup#terminate_instances_with_expiration}
  */
  readonly terminateInstancesWithExpiration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#total_target_capacity AutoProvisioningGroup#total_target_capacity}
  */
  readonly totalTargetCapacity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#valid_from AutoProvisioningGroup#valid_from}
  */
  readonly validFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#valid_until AutoProvisioningGroup#valid_until}
  */
  readonly validUntil?: string;
  /**
  * launch_template_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#launch_template_config AutoProvisioningGroup#launch_template_config}
  */
  readonly launchTemplateConfig: AutoProvisioningGroupLaunchTemplateConfig[] | cdktf.IResolvable;
}
export interface AutoProvisioningGroupLaunchTemplateConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#instance_type AutoProvisioningGroup#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#max_price AutoProvisioningGroup#max_price}
  */
  readonly maxPrice: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#priority AutoProvisioningGroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#vswitch_id AutoProvisioningGroup#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#weighted_capacity AutoProvisioningGroup#weighted_capacity}
  */
  readonly weightedCapacity: string;
}

export function autoProvisioningGroupLaunchTemplateConfigToTerraform(struct?: AutoProvisioningGroupLaunchTemplateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    priority: cdktf.stringToTerraform(struct!.priority),
    vswitch_id: cdktf.stringToTerraform(struct!.vswitchId),
    weighted_capacity: cdktf.stringToTerraform(struct!.weightedCapacity),
  }
}


export function autoProvisioningGroupLaunchTemplateConfigToHclTerraform(struct?: AutoProvisioningGroupLaunchTemplateConfig | cdktf.IResolvable): any {
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
    max_price: {
      value: cdktf.stringToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_id: {
      value: cdktf.stringToHclTerraform(struct!.vswitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weighted_capacity: {
      value: cdktf.stringToHclTerraform(struct!.weightedCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoProvisioningGroupLaunchTemplateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutoProvisioningGroupLaunchTemplateConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._vswitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchId = this._vswitchId;
    }
    if (this._weightedCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedCapacity = this._weightedCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoProvisioningGroupLaunchTemplateConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._maxPrice = undefined;
      this._priority = undefined;
      this._vswitchId = undefined;
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
      this._maxPrice = value.maxPrice;
      this._priority = value.priority;
      this._vswitchId = value.vswitchId;
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

  // max_price - computed: false, optional: false, required: true
  private _maxPrice?: string; 
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }
  public set maxPrice(value: string) {
    this._maxPrice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // weighted_capacity - computed: false, optional: false, required: true
  private _weightedCapacity?: string; 
  public get weightedCapacity() {
    return this.getStringAttribute('weighted_capacity');
  }
  public set weightedCapacity(value: string) {
    this._weightedCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedCapacityInput() {
    return this._weightedCapacity;
  }
}

export class AutoProvisioningGroupLaunchTemplateConfigList extends cdktf.ComplexList {
  public internalValue? : AutoProvisioningGroupLaunchTemplateConfig[] | cdktf.IResolvable

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
  public get(index: number): AutoProvisioningGroupLaunchTemplateConfigOutputReference {
    return new AutoProvisioningGroupLaunchTemplateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group alicloud_auto_provisioning_group}
*/
export class AutoProvisioningGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_auto_provisioning_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoProvisioningGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoProvisioningGroup to import
  * @param importFromId The id of the existing AutoProvisioningGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoProvisioningGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_auto_provisioning_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/auto_provisioning_group alicloud_auto_provisioning_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoProvisioningGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AutoProvisioningGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_auto_provisioning_group',
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
    this._autoProvisioningGroupName = config.autoProvisioningGroupName;
    this._autoProvisioningGroupType = config.autoProvisioningGroupType;
    this._defaultTargetCapacityType = config.defaultTargetCapacityType;
    this._description = config.description;
    this._excessCapacityTerminationPolicy = config.excessCapacityTerminationPolicy;
    this._id = config.id;
    this._launchTemplateId = config.launchTemplateId;
    this._launchTemplateVersion = config.launchTemplateVersion;
    this._maxSpotPrice = config.maxSpotPrice;
    this._payAsYouGoAllocationStrategy = config.payAsYouGoAllocationStrategy;
    this._payAsYouGoTargetCapacity = config.payAsYouGoTargetCapacity;
    this._spotAllocationStrategy = config.spotAllocationStrategy;
    this._spotInstanceInterruptionBehavior = config.spotInstanceInterruptionBehavior;
    this._spotInstancePoolsToUseCount = config.spotInstancePoolsToUseCount;
    this._spotTargetCapacity = config.spotTargetCapacity;
    this._terminateInstances = config.terminateInstances;
    this._terminateInstancesWithExpiration = config.terminateInstancesWithExpiration;
    this._totalTargetCapacity = config.totalTargetCapacity;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._launchTemplateConfig.internalValue = config.launchTemplateConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_provisioning_group_name - computed: true, optional: true, required: false
  private _autoProvisioningGroupName?: string; 
  public get autoProvisioningGroupName() {
    return this.getStringAttribute('auto_provisioning_group_name');
  }
  public set autoProvisioningGroupName(value: string) {
    this._autoProvisioningGroupName = value;
  }
  public resetAutoProvisioningGroupName() {
    this._autoProvisioningGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisioningGroupNameInput() {
    return this._autoProvisioningGroupName;
  }

  // auto_provisioning_group_type - computed: false, optional: true, required: false
  private _autoProvisioningGroupType?: string; 
  public get autoProvisioningGroupType() {
    return this.getStringAttribute('auto_provisioning_group_type');
  }
  public set autoProvisioningGroupType(value: string) {
    this._autoProvisioningGroupType = value;
  }
  public resetAutoProvisioningGroupType() {
    this._autoProvisioningGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisioningGroupTypeInput() {
    return this._autoProvisioningGroupType;
  }

  // default_target_capacity_type - computed: false, optional: true, required: false
  private _defaultTargetCapacityType?: string; 
  public get defaultTargetCapacityType() {
    return this.getStringAttribute('default_target_capacity_type');
  }
  public set defaultTargetCapacityType(value: string) {
    this._defaultTargetCapacityType = value;
  }
  public resetDefaultTargetCapacityType() {
    this._defaultTargetCapacityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetCapacityTypeInput() {
    return this._defaultTargetCapacityType;
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

  // excess_capacity_termination_policy - computed: false, optional: true, required: false
  private _excessCapacityTerminationPolicy?: string; 
  public get excessCapacityTerminationPolicy() {
    return this.getStringAttribute('excess_capacity_termination_policy');
  }
  public set excessCapacityTerminationPolicy(value: string) {
    this._excessCapacityTerminationPolicy = value;
  }
  public resetExcessCapacityTerminationPolicy() {
    this._excessCapacityTerminationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excessCapacityTerminationPolicyInput() {
    return this._excessCapacityTerminationPolicy;
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

  // launch_template_id - computed: false, optional: false, required: true
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_version - computed: true, optional: true, required: false
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

  // max_spot_price - computed: true, optional: true, required: false
  private _maxSpotPrice?: number; 
  public get maxSpotPrice() {
    return this.getNumberAttribute('max_spot_price');
  }
  public set maxSpotPrice(value: number) {
    this._maxSpotPrice = value;
  }
  public resetMaxSpotPrice() {
    this._maxSpotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpotPriceInput() {
    return this._maxSpotPrice;
  }

  // pay_as_you_go_allocation_strategy - computed: false, optional: true, required: false
  private _payAsYouGoAllocationStrategy?: string; 
  public get payAsYouGoAllocationStrategy() {
    return this.getStringAttribute('pay_as_you_go_allocation_strategy');
  }
  public set payAsYouGoAllocationStrategy(value: string) {
    this._payAsYouGoAllocationStrategy = value;
  }
  public resetPayAsYouGoAllocationStrategy() {
    this._payAsYouGoAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payAsYouGoAllocationStrategyInput() {
    return this._payAsYouGoAllocationStrategy;
  }

  // pay_as_you_go_target_capacity - computed: false, optional: true, required: false
  private _payAsYouGoTargetCapacity?: string; 
  public get payAsYouGoTargetCapacity() {
    return this.getStringAttribute('pay_as_you_go_target_capacity');
  }
  public set payAsYouGoTargetCapacity(value: string) {
    this._payAsYouGoTargetCapacity = value;
  }
  public resetPayAsYouGoTargetCapacity() {
    this._payAsYouGoTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payAsYouGoTargetCapacityInput() {
    return this._payAsYouGoTargetCapacity;
  }

  // spot_allocation_strategy - computed: false, optional: true, required: false
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

  // spot_instance_interruption_behavior - computed: false, optional: true, required: false
  private _spotInstanceInterruptionBehavior?: string; 
  public get spotInstanceInterruptionBehavior() {
    return this.getStringAttribute('spot_instance_interruption_behavior');
  }
  public set spotInstanceInterruptionBehavior(value: string) {
    this._spotInstanceInterruptionBehavior = value;
  }
  public resetSpotInstanceInterruptionBehavior() {
    this._spotInstanceInterruptionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceInterruptionBehaviorInput() {
    return this._spotInstanceInterruptionBehavior;
  }

  // spot_instance_pools_to_use_count - computed: true, optional: true, required: false
  private _spotInstancePoolsToUseCount?: number; 
  public get spotInstancePoolsToUseCount() {
    return this.getNumberAttribute('spot_instance_pools_to_use_count');
  }
  public set spotInstancePoolsToUseCount(value: number) {
    this._spotInstancePoolsToUseCount = value;
  }
  public resetSpotInstancePoolsToUseCount() {
    this._spotInstancePoolsToUseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePoolsToUseCountInput() {
    return this._spotInstancePoolsToUseCount;
  }

  // spot_target_capacity - computed: false, optional: true, required: false
  private _spotTargetCapacity?: string; 
  public get spotTargetCapacity() {
    return this.getStringAttribute('spot_target_capacity');
  }
  public set spotTargetCapacity(value: string) {
    this._spotTargetCapacity = value;
  }
  public resetSpotTargetCapacity() {
    this._spotTargetCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotTargetCapacityInput() {
    return this._spotTargetCapacity;
  }

  // terminate_instances - computed: false, optional: true, required: false
  private _terminateInstances?: boolean | cdktf.IResolvable; 
  public get terminateInstances() {
    return this.getBooleanAttribute('terminate_instances');
  }
  public set terminateInstances(value: boolean | cdktf.IResolvable) {
    this._terminateInstances = value;
  }
  public resetTerminateInstances() {
    this._terminateInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesInput() {
    return this._terminateInstances;
  }

  // terminate_instances_with_expiration - computed: false, optional: true, required: false
  private _terminateInstancesWithExpiration?: boolean | cdktf.IResolvable; 
  public get terminateInstancesWithExpiration() {
    return this.getBooleanAttribute('terminate_instances_with_expiration');
  }
  public set terminateInstancesWithExpiration(value: boolean | cdktf.IResolvable) {
    this._terminateInstancesWithExpiration = value;
  }
  public resetTerminateInstancesWithExpiration() {
    this._terminateInstancesWithExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInstancesWithExpirationInput() {
    return this._terminateInstancesWithExpiration;
  }

  // total_target_capacity - computed: false, optional: false, required: true
  private _totalTargetCapacity?: string; 
  public get totalTargetCapacity() {
    return this.getStringAttribute('total_target_capacity');
  }
  public set totalTargetCapacity(value: string) {
    this._totalTargetCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTargetCapacityInput() {
    return this._totalTargetCapacity;
  }

  // valid_from - computed: true, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_until - computed: true, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // launch_template_config - computed: false, optional: false, required: true
  private _launchTemplateConfig = new AutoProvisioningGroupLaunchTemplateConfigList(this, "launch_template_config", false);
  public get launchTemplateConfig() {
    return this._launchTemplateConfig;
  }
  public putLaunchTemplateConfig(value: AutoProvisioningGroupLaunchTemplateConfig[] | cdktf.IResolvable) {
    this._launchTemplateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateConfigInput() {
    return this._launchTemplateConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_provisioning_group_name: cdktf.stringToTerraform(this._autoProvisioningGroupName),
      auto_provisioning_group_type: cdktf.stringToTerraform(this._autoProvisioningGroupType),
      default_target_capacity_type: cdktf.stringToTerraform(this._defaultTargetCapacityType),
      description: cdktf.stringToTerraform(this._description),
      excess_capacity_termination_policy: cdktf.stringToTerraform(this._excessCapacityTerminationPolicy),
      id: cdktf.stringToTerraform(this._id),
      launch_template_id: cdktf.stringToTerraform(this._launchTemplateId),
      launch_template_version: cdktf.stringToTerraform(this._launchTemplateVersion),
      max_spot_price: cdktf.numberToTerraform(this._maxSpotPrice),
      pay_as_you_go_allocation_strategy: cdktf.stringToTerraform(this._payAsYouGoAllocationStrategy),
      pay_as_you_go_target_capacity: cdktf.stringToTerraform(this._payAsYouGoTargetCapacity),
      spot_allocation_strategy: cdktf.stringToTerraform(this._spotAllocationStrategy),
      spot_instance_interruption_behavior: cdktf.stringToTerraform(this._spotInstanceInterruptionBehavior),
      spot_instance_pools_to_use_count: cdktf.numberToTerraform(this._spotInstancePoolsToUseCount),
      spot_target_capacity: cdktf.stringToTerraform(this._spotTargetCapacity),
      terminate_instances: cdktf.booleanToTerraform(this._terminateInstances),
      terminate_instances_with_expiration: cdktf.booleanToTerraform(this._terminateInstancesWithExpiration),
      total_target_capacity: cdktf.stringToTerraform(this._totalTargetCapacity),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      launch_template_config: cdktf.listMapper(autoProvisioningGroupLaunchTemplateConfigToTerraform, true)(this._launchTemplateConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_provisioning_group_name: {
        value: cdktf.stringToHclTerraform(this._autoProvisioningGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_provisioning_group_type: {
        value: cdktf.stringToHclTerraform(this._autoProvisioningGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_target_capacity_type: {
        value: cdktf.stringToHclTerraform(this._defaultTargetCapacityType),
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
      excess_capacity_termination_policy: {
        value: cdktf.stringToHclTerraform(this._excessCapacityTerminationPolicy),
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
      max_spot_price: {
        value: cdktf.numberToHclTerraform(this._maxSpotPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_as_you_go_allocation_strategy: {
        value: cdktf.stringToHclTerraform(this._payAsYouGoAllocationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_as_you_go_target_capacity: {
        value: cdktf.stringToHclTerraform(this._payAsYouGoTargetCapacity),
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
      spot_instance_interruption_behavior: {
        value: cdktf.stringToHclTerraform(this._spotInstanceInterruptionBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spot_instance_pools_to_use_count: {
        value: cdktf.numberToHclTerraform(this._spotInstancePoolsToUseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_target_capacity: {
        value: cdktf.stringToHclTerraform(this._spotTargetCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminate_instances: {
        value: cdktf.booleanToHclTerraform(this._terminateInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terminate_instances_with_expiration: {
        value: cdktf.booleanToHclTerraform(this._terminateInstancesWithExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      total_target_capacity: {
        value: cdktf.stringToHclTerraform(this._totalTargetCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_from: {
        value: cdktf.stringToHclTerraform(this._validFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_until: {
        value: cdktf.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_config: {
        value: cdktf.listMapperHcl(autoProvisioningGroupLaunchTemplateConfigToHclTerraform, true)(this._launchTemplateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutoProvisioningGroupLaunchTemplateConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
