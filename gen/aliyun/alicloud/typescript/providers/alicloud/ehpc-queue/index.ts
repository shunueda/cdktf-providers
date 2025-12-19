// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EhpcQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#cluster_id EhpcQueue#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#enable_scale_in EhpcQueue#enable_scale_in}
  */
  readonly enableScaleIn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#enable_scale_out EhpcQueue#enable_scale_out}
  */
  readonly enableScaleOut?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#hostname_prefix EhpcQueue#hostname_prefix}
  */
  readonly hostnamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#hostname_suffix EhpcQueue#hostname_suffix}
  */
  readonly hostnameSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#id EhpcQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#initial_count EhpcQueue#initial_count}
  */
  readonly initialCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#inter_connect EhpcQueue#inter_connect}
  */
  readonly interConnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#max_count EhpcQueue#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#min_count EhpcQueue#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#queue_name EhpcQueue#queue_name}
  */
  readonly queueName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#vswitch_ids EhpcQueue#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * compute_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#compute_nodes EhpcQueue#compute_nodes}
  */
  readonly computeNodes?: EhpcQueueComputeNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#timeouts EhpcQueue#timeouts}
  */
  readonly timeouts?: EhpcQueueTimeouts;
}
export interface EhpcQueueComputeNodesSystemDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#category EhpcQueue#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#level EhpcQueue#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#size EhpcQueue#size}
  */
  readonly size?: number;
}

export function ehpcQueueComputeNodesSystemDiskToTerraform(struct?: EhpcQueueComputeNodesSystemDiskOutputReference | EhpcQueueComputeNodesSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    level: cdktf.stringToTerraform(struct!.level),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function ehpcQueueComputeNodesSystemDiskToHclTerraform(struct?: EhpcQueueComputeNodesSystemDiskOutputReference | EhpcQueueComputeNodesSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcQueueComputeNodesSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EhpcQueueComputeNodesSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcQueueComputeNodesSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._level = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._level = value.level;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface EhpcQueueComputeNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#auto_renew EhpcQueue#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#auto_renew_period EhpcQueue#auto_renew_period}
  */
  readonly autoRenewPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#duration EhpcQueue#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#enable_ht EhpcQueue#enable_ht}
  */
  readonly enableHt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#image_id EhpcQueue#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#instance_charge_type EhpcQueue#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#instance_type EhpcQueue#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#period EhpcQueue#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#period_unit EhpcQueue#period_unit}
  */
  readonly periodUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#spot_price_limit EhpcQueue#spot_price_limit}
  */
  readonly spotPriceLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#spot_strategy EhpcQueue#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#system_disk EhpcQueue#system_disk}
  */
  readonly systemDisk?: EhpcQueueComputeNodesSystemDisk;
}

export function ehpcQueueComputeNodesToTerraform(struct?: EhpcQueueComputeNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    auto_renew_period: cdktf.numberToTerraform(struct!.autoRenewPeriod),
    duration: cdktf.numberToTerraform(struct!.duration),
    enable_ht: cdktf.booleanToTerraform(struct!.enableHt),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    instance_charge_type: cdktf.stringToTerraform(struct!.instanceChargeType),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    period: cdktf.numberToTerraform(struct!.period),
    period_unit: cdktf.stringToTerraform(struct!.periodUnit),
    spot_price_limit: cdktf.numberToTerraform(struct!.spotPriceLimit),
    spot_strategy: cdktf.stringToTerraform(struct!.spotStrategy),
    system_disk: ehpcQueueComputeNodesSystemDiskToTerraform(struct!.systemDisk),
  }
}


export function ehpcQueueComputeNodesToHclTerraform(struct?: EhpcQueueComputeNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_renew_period: {
      value: cdktf.numberToHclTerraform(struct!.autoRenewPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_ht: {
      value: cdktf.booleanToHclTerraform(struct!.enableHt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_unit: {
      value: cdktf.stringToHclTerraform(struct!.periodUnit),
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
    spot_strategy: {
      value: cdktf.stringToHclTerraform(struct!.spotStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk: {
      value: ehpcQueueComputeNodesSystemDiskToHclTerraform(struct!.systemDisk),
      isBlock: true,
      type: "list",
      storageClassType: "EhpcQueueComputeNodesSystemDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EhpcQueueComputeNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EhpcQueueComputeNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenew = this._autoRenew;
    }
    if (this._autoRenewPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenewPeriod = this._autoRenewPeriod;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enableHt !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHt = this._enableHt;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._instanceChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceChargeType = this._instanceChargeType;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._periodUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodUnit = this._periodUnit;
    }
    if (this._spotPriceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPriceLimit = this._spotPriceLimit;
    }
    if (this._spotStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotStrategy = this._spotStrategy;
    }
    if (this._systemDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDisk = this._systemDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EhpcQueueComputeNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRenew = undefined;
      this._autoRenewPeriod = undefined;
      this._duration = undefined;
      this._enableHt = undefined;
      this._imageId = undefined;
      this._instanceChargeType = undefined;
      this._instanceType = undefined;
      this._period = undefined;
      this._periodUnit = undefined;
      this._spotPriceLimit = undefined;
      this._spotStrategy = undefined;
      this._systemDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRenew = value.autoRenew;
      this._autoRenewPeriod = value.autoRenewPeriod;
      this._duration = value.duration;
      this._enableHt = value.enableHt;
      this._imageId = value.imageId;
      this._instanceChargeType = value.instanceChargeType;
      this._instanceType = value.instanceType;
      this._period = value.period;
      this._periodUnit = value.periodUnit;
      this._spotPriceLimit = value.spotPriceLimit;
      this._spotStrategy = value.spotStrategy;
      this._systemDisk.internalValue = value.systemDisk;
    }
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: number; 
  public get autoRenewPeriod() {
    return this.getNumberAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: number) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enable_ht - computed: true, optional: true, required: false
  private _enableHt?: boolean | cdktf.IResolvable; 
  public get enableHt() {
    return this.getBooleanAttribute('enable_ht');
  }
  public set enableHt(value: boolean | cdktf.IResolvable) {
    this._enableHt = value;
  }
  public resetEnableHt() {
    this._enableHt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHtInput() {
    return this._enableHt;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // period_unit - computed: false, optional: true, required: false
  private _periodUnit?: string; 
  public get periodUnit() {
    return this.getStringAttribute('period_unit');
  }
  public set periodUnit(value: string) {
    this._periodUnit = value;
  }
  public resetPeriodUnit() {
    this._periodUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodUnitInput() {
    return this._periodUnit;
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

  // spot_strategy - computed: true, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // system_disk - computed: false, optional: true, required: false
  private _systemDisk = new EhpcQueueComputeNodesSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: EhpcQueueComputeNodesSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  public resetSystemDisk() {
    this._systemDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }
}

export class EhpcQueueComputeNodesList extends cdktf.ComplexList {
  public internalValue? : EhpcQueueComputeNodes[] | cdktf.IResolvable

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
  public get(index: number): EhpcQueueComputeNodesOutputReference {
    return new EhpcQueueComputeNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EhpcQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#create EhpcQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#delete EhpcQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#update EhpcQueue#update}
  */
  readonly update?: string;
}

export function ehpcQueueTimeoutsToTerraform(struct?: EhpcQueueTimeouts | cdktf.IResolvable): any {
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


export function ehpcQueueTimeoutsToHclTerraform(struct?: EhpcQueueTimeouts | cdktf.IResolvable): any {
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

export class EhpcQueueTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EhpcQueueTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EhpcQueueTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue alicloud_ehpc_queue}
*/
export class EhpcQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ehpc_queue";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EhpcQueue resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EhpcQueue to import
  * @param importFromId The id of the existing EhpcQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EhpcQueue to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ehpc_queue", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ehpc_queue alicloud_ehpc_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EhpcQueueConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EhpcQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ehpc_queue',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._enableScaleIn = config.enableScaleIn;
    this._enableScaleOut = config.enableScaleOut;
    this._hostnamePrefix = config.hostnamePrefix;
    this._hostnameSuffix = config.hostnameSuffix;
    this._id = config.id;
    this._initialCount = config.initialCount;
    this._interConnect = config.interConnect;
    this._maxCount = config.maxCount;
    this._minCount = config.minCount;
    this._queueName = config.queueName;
    this._vswitchIds = config.vswitchIds;
    this._computeNodes.internalValue = config.computeNodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_scale_in - computed: true, optional: true, required: false
  private _enableScaleIn?: boolean | cdktf.IResolvable; 
  public get enableScaleIn() {
    return this.getBooleanAttribute('enable_scale_in');
  }
  public set enableScaleIn(value: boolean | cdktf.IResolvable) {
    this._enableScaleIn = value;
  }
  public resetEnableScaleIn() {
    this._enableScaleIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScaleInInput() {
    return this._enableScaleIn;
  }

  // enable_scale_out - computed: true, optional: true, required: false
  private _enableScaleOut?: boolean | cdktf.IResolvable; 
  public get enableScaleOut() {
    return this.getBooleanAttribute('enable_scale_out');
  }
  public set enableScaleOut(value: boolean | cdktf.IResolvable) {
    this._enableScaleOut = value;
  }
  public resetEnableScaleOut() {
    this._enableScaleOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScaleOutInput() {
    return this._enableScaleOut;
  }

  // hostname_prefix - computed: true, optional: true, required: false
  private _hostnamePrefix?: string; 
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string) {
    this._hostnamePrefix = value;
  }
  public resetHostnamePrefix() {
    this._hostnamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamePrefixInput() {
    return this._hostnamePrefix;
  }

  // hostname_suffix - computed: true, optional: true, required: false
  private _hostnameSuffix?: string; 
  public get hostnameSuffix() {
    return this.getStringAttribute('hostname_suffix');
  }
  public set hostnameSuffix(value: string) {
    this._hostnameSuffix = value;
  }
  public resetHostnameSuffix() {
    this._hostnameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameSuffixInput() {
    return this._hostnameSuffix;
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

  // initial_count - computed: true, optional: true, required: false
  private _initialCount?: number; 
  public get initialCount() {
    return this.getNumberAttribute('initial_count');
  }
  public set initialCount(value: number) {
    this._initialCount = value;
  }
  public resetInitialCount() {
    this._initialCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCountInput() {
    return this._initialCount;
  }

  // inter_connect - computed: true, optional: true, required: false
  private _interConnect?: string; 
  public get interConnect() {
    return this.getStringAttribute('inter_connect');
  }
  public set interConnect(value: string) {
    this._interConnect = value;
  }
  public resetInterConnect() {
    this._interConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interConnectInput() {
    return this._interConnect;
  }

  // max_count - computed: true, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: true, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // queue_name - computed: true, optional: true, required: false
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  public resetQueueName() {
    this._queueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
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

  // compute_nodes - computed: false, optional: true, required: false
  private _computeNodes = new EhpcQueueComputeNodesList(this, "compute_nodes", false);
  public get computeNodes() {
    return this._computeNodes;
  }
  public putComputeNodes(value: EhpcQueueComputeNodes[] | cdktf.IResolvable) {
    this._computeNodes.internalValue = value;
  }
  public resetComputeNodes() {
    this._computeNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeNodesInput() {
    return this._computeNodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EhpcQueueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EhpcQueueTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      enable_scale_in: cdktf.booleanToTerraform(this._enableScaleIn),
      enable_scale_out: cdktf.booleanToTerraform(this._enableScaleOut),
      hostname_prefix: cdktf.stringToTerraform(this._hostnamePrefix),
      hostname_suffix: cdktf.stringToTerraform(this._hostnameSuffix),
      id: cdktf.stringToTerraform(this._id),
      initial_count: cdktf.numberToTerraform(this._initialCount),
      inter_connect: cdktf.stringToTerraform(this._interConnect),
      max_count: cdktf.numberToTerraform(this._maxCount),
      min_count: cdktf.numberToTerraform(this._minCount),
      queue_name: cdktf.stringToTerraform(this._queueName),
      vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vswitchIds),
      compute_nodes: cdktf.listMapper(ehpcQueueComputeNodesToTerraform, true)(this._computeNodes.internalValue),
      timeouts: ehpcQueueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_scale_in: {
        value: cdktf.booleanToHclTerraform(this._enableScaleIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_scale_out: {
        value: cdktf.booleanToHclTerraform(this._enableScaleOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname_prefix: {
        value: cdktf.stringToHclTerraform(this._hostnamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname_suffix: {
        value: cdktf.stringToHclTerraform(this._hostnameSuffix),
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
      initial_count: {
        value: cdktf.numberToHclTerraform(this._initialCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inter_connect: {
        value: cdktf.stringToHclTerraform(this._interConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_count: {
        value: cdktf.numberToHclTerraform(this._maxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_count: {
        value: cdktf.numberToHclTerraform(this._minCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_name: {
        value: cdktf.stringToHclTerraform(this._queueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vswitchIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compute_nodes: {
        value: cdktf.listMapperHcl(ehpcQueueComputeNodesToHclTerraform, true)(this._computeNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EhpcQueueComputeNodesList",
      },
      timeouts: {
        value: ehpcQueueTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EhpcQueueTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
