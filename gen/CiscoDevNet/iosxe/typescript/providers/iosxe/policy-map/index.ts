// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * policy criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#classes PolicyMap#classes}
  */
  readonly classes?: PolicyMapClasses[] | cdktf.IResolvable;
  /**
  * Policy-Map description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#description PolicyMap#description}
  */
  readonly description?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#device PolicyMap#device}
  */
  readonly device?: string;
  /**
  * Name of the policy map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#name PolicyMap#name}
  */
  readonly name: string;
  /**
  * Domain name of the policy map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#subscriber PolicyMap#subscriber}
  */
  readonly subscriber?: boolean | cdktf.IResolvable;
  /**
  * type of the policy-map
  *   - Choices: `access-control`, `appnav`, `control`, `epbr`, `inspect`, `ngsw-qos`, `packet-service`, `performance-monitor`, `queueing`, `service`, `service-chain`, `umbrella`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#type PolicyMap#type}
  */
  readonly type?: string;
}
export interface PolicyMapClassesActions {
  /**
  * 
  *   - Range: `1`-`100000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#bandwidth_bits PolicyMap#bandwidth_bits}
  */
  readonly bandwidthBits?: number;
  /**
  * % of total Bandwidth
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#bandwidth_percent PolicyMap#bandwidth_percent}
  */
  readonly bandwidthPercent?: number;
  /**
  * 
  *   - Choices: `percent`, `ratio`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#bandwidth_remaining_option PolicyMap#bandwidth_remaining_option}
  */
  readonly bandwidthRemainingOption?: string;
  /**
  * % of the remaining bandwidth
  *   - Range: `1`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#bandwidth_remaining_percent PolicyMap#bandwidth_remaining_percent}
  */
  readonly bandwidthRemainingPercent?: number;
  /**
  * ratio for sharing excess bandwidth
  *   - Range: `1`-`65536`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#bandwidth_remaining_ratio PolicyMap#bandwidth_remaining_ratio}
  */
  readonly bandwidthRemainingRatio?: number;
  /**
  * Target bit rate (bits per second) (postfix k, m, g optional),decimal point allowed
  *   - Range: `8000`-`100000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#police_target_bitrate PolicyMap#police_target_bitrate}
  */
  readonly policeTargetBitrate?: number;
  /**
  * Burst Byte
  *   - Range: `100`-`512000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#police_target_bitrate_conform_burst_byte PolicyMap#police_target_bitrate_conform_burst_byte}
  */
  readonly policeTargetBitrateConformBurstByte?: number;
  /**
  * transmit packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#police_target_bitrate_conform_transmit PolicyMap#police_target_bitrate_conform_transmit}
  */
  readonly policeTargetBitrateConformTransmit?: boolean | cdktf.IResolvable;
  /**
  * transmit packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#police_target_bitrate_exceed_transmit PolicyMap#police_target_bitrate_exceed_transmit}
  */
  readonly policeTargetBitrateExceedTransmit?: boolean | cdktf.IResolvable;
  /**
  * Burst Byte
  *   - Range: `100`-`512000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#police_target_bitrate_excess_burst_byte PolicyMap#police_target_bitrate_excess_burst_byte}
  */
  readonly policeTargetBitrateExcessBurstByte?: number;
  /**
  * 
  *   - Range: `32`-`2000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#priority_burst PolicyMap#priority_burst}
  */
  readonly priorityBurst?: number;
  /**
  * Multi-Level Priority Queue
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#priority_level PolicyMap#priority_level}
  */
  readonly priorityLevel?: number;
  /**
  * 
  *   - Range: `1`-`64000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#queue_limit PolicyMap#queue_limit}
  */
  readonly queueLimit?: number;
  /**
  * 
  *   - Choices: `bytes`, `ms`, `packets`, `us`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#queue_limit_type PolicyMap#queue_limit_type}
  */
  readonly queueLimitType?: string;
  /**
  * Target Bit Rate (bits/sec)
  *   - Range: `1000`-`100000000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#shape_average_bit_rate PolicyMap#shape_average_bit_rate}
  */
  readonly shapeAverageBitRate?: number;
  /**
  * bits per interval, excess.
  *   - Range: `0`-`154400000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#shape_average_bits_per_interval_excess PolicyMap#shape_average_bits_per_interval_excess}
  */
  readonly shapeAverageBitsPerIntervalExcess?: number;
  /**
  * bits per interval, sustained. Recommend not to configure, algo finds the best value
  *   - Range: `32`-`800000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#shape_average_bits_per_interval_sustained PolicyMap#shape_average_bits_per_interval_sustained}
  */
  readonly shapeAverageBitsPerIntervalSustained?: number;
  /**
  * sustained burst in milliseconds. Recommend not to configure it, the algorithm will find out the best value
  *   - Range: `10`-`2000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#shape_average_burst_size_sustained PolicyMap#shape_average_burst_size_sustained}
  */
  readonly shapeAverageBurstSizeSustained?: number;
  /**
  * milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#shape_average_ms PolicyMap#shape_average_ms}
  */
  readonly shapeAverageMs?: boolean | cdktf.IResolvable;
  /**
  * % of interface bandwidth for Committed information rate
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#shape_average_percent PolicyMap#shape_average_percent}
  */
  readonly shapeAveragePercent?: number;
  /**
  * 
  *   - Choices: `bandwidth`, `compression`, `dbl`, `drop`, `estimate`, `fair-queue`, `forward`, `netflow-sampler`, `police`, `priority`, `queue-buffers`, `queue-limit`, `random-detect`, `service-policy`, `set`, `shape`, `trust`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#type PolicyMap#type}
  */
  readonly type: string;
}

export function policyMapClassesActionsToTerraform(struct?: PolicyMapClassesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_bits: cdktf.numberToTerraform(struct!.bandwidthBits),
    bandwidth_percent: cdktf.numberToTerraform(struct!.bandwidthPercent),
    bandwidth_remaining_option: cdktf.stringToTerraform(struct!.bandwidthRemainingOption),
    bandwidth_remaining_percent: cdktf.numberToTerraform(struct!.bandwidthRemainingPercent),
    bandwidth_remaining_ratio: cdktf.numberToTerraform(struct!.bandwidthRemainingRatio),
    police_target_bitrate: cdktf.numberToTerraform(struct!.policeTargetBitrate),
    police_target_bitrate_conform_burst_byte: cdktf.numberToTerraform(struct!.policeTargetBitrateConformBurstByte),
    police_target_bitrate_conform_transmit: cdktf.booleanToTerraform(struct!.policeTargetBitrateConformTransmit),
    police_target_bitrate_exceed_transmit: cdktf.booleanToTerraform(struct!.policeTargetBitrateExceedTransmit),
    police_target_bitrate_excess_burst_byte: cdktf.numberToTerraform(struct!.policeTargetBitrateExcessBurstByte),
    priority_burst: cdktf.numberToTerraform(struct!.priorityBurst),
    priority_level: cdktf.numberToTerraform(struct!.priorityLevel),
    queue_limit: cdktf.numberToTerraform(struct!.queueLimit),
    queue_limit_type: cdktf.stringToTerraform(struct!.queueLimitType),
    shape_average_bit_rate: cdktf.numberToTerraform(struct!.shapeAverageBitRate),
    shape_average_bits_per_interval_excess: cdktf.numberToTerraform(struct!.shapeAverageBitsPerIntervalExcess),
    shape_average_bits_per_interval_sustained: cdktf.numberToTerraform(struct!.shapeAverageBitsPerIntervalSustained),
    shape_average_burst_size_sustained: cdktf.numberToTerraform(struct!.shapeAverageBurstSizeSustained),
    shape_average_ms: cdktf.booleanToTerraform(struct!.shapeAverageMs),
    shape_average_percent: cdktf.numberToTerraform(struct!.shapeAveragePercent),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyMapClassesActionsToHclTerraform(struct?: PolicyMapClassesActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_bits: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthBits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_percent: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_remaining_option: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthRemainingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_remaining_percent: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthRemainingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bandwidth_remaining_ratio: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthRemainingRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    police_target_bitrate: {
      value: cdktf.numberToHclTerraform(struct!.policeTargetBitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    police_target_bitrate_conform_burst_byte: {
      value: cdktf.numberToHclTerraform(struct!.policeTargetBitrateConformBurstByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    police_target_bitrate_conform_transmit: {
      value: cdktf.booleanToHclTerraform(struct!.policeTargetBitrateConformTransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    police_target_bitrate_exceed_transmit: {
      value: cdktf.booleanToHclTerraform(struct!.policeTargetBitrateExceedTransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    police_target_bitrate_excess_burst_byte: {
      value: cdktf.numberToHclTerraform(struct!.policeTargetBitrateExcessBurstByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_burst: {
      value: cdktf.numberToHclTerraform(struct!.priorityBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_level: {
      value: cdktf.numberToHclTerraform(struct!.priorityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_limit: {
      value: cdktf.numberToHclTerraform(struct!.queueLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_limit_type: {
      value: cdktf.stringToHclTerraform(struct!.queueLimitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shape_average_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.shapeAverageBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_average_bits_per_interval_excess: {
      value: cdktf.numberToHclTerraform(struct!.shapeAverageBitsPerIntervalExcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_average_bits_per_interval_sustained: {
      value: cdktf.numberToHclTerraform(struct!.shapeAverageBitsPerIntervalSustained),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_average_burst_size_sustained: {
      value: cdktf.numberToHclTerraform(struct!.shapeAverageBurstSizeSustained),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_average_ms: {
      value: cdktf.booleanToHclTerraform(struct!.shapeAverageMs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shape_average_percent: {
      value: cdktf.numberToHclTerraform(struct!.shapeAveragePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyMapClassesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMapClassesActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthBits = this._bandwidthBits;
    }
    if (this._bandwidthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPercent = this._bandwidthPercent;
    }
    if (this._bandwidthRemainingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthRemainingOption = this._bandwidthRemainingOption;
    }
    if (this._bandwidthRemainingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthRemainingPercent = this._bandwidthRemainingPercent;
    }
    if (this._bandwidthRemainingRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthRemainingRatio = this._bandwidthRemainingRatio;
    }
    if (this._policeTargetBitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeTargetBitrate = this._policeTargetBitrate;
    }
    if (this._policeTargetBitrateConformBurstByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeTargetBitrateConformBurstByte = this._policeTargetBitrateConformBurstByte;
    }
    if (this._policeTargetBitrateConformTransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeTargetBitrateConformTransmit = this._policeTargetBitrateConformTransmit;
    }
    if (this._policeTargetBitrateExceedTransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeTargetBitrateExceedTransmit = this._policeTargetBitrateExceedTransmit;
    }
    if (this._policeTargetBitrateExcessBurstByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.policeTargetBitrateExcessBurstByte = this._policeTargetBitrateExcessBurstByte;
    }
    if (this._priorityBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityBurst = this._priorityBurst;
    }
    if (this._priorityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityLevel = this._priorityLevel;
    }
    if (this._queueLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLimit = this._queueLimit;
    }
    if (this._queueLimitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLimitType = this._queueLimitType;
    }
    if (this._shapeAverageBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAverageBitRate = this._shapeAverageBitRate;
    }
    if (this._shapeAverageBitsPerIntervalExcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAverageBitsPerIntervalExcess = this._shapeAverageBitsPerIntervalExcess;
    }
    if (this._shapeAverageBitsPerIntervalSustained !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAverageBitsPerIntervalSustained = this._shapeAverageBitsPerIntervalSustained;
    }
    if (this._shapeAverageBurstSizeSustained !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAverageBurstSizeSustained = this._shapeAverageBurstSizeSustained;
    }
    if (this._shapeAverageMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAverageMs = this._shapeAverageMs;
    }
    if (this._shapeAveragePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeAveragePercent = this._shapeAveragePercent;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyMapClassesActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthBits = undefined;
      this._bandwidthPercent = undefined;
      this._bandwidthRemainingOption = undefined;
      this._bandwidthRemainingPercent = undefined;
      this._bandwidthRemainingRatio = undefined;
      this._policeTargetBitrate = undefined;
      this._policeTargetBitrateConformBurstByte = undefined;
      this._policeTargetBitrateConformTransmit = undefined;
      this._policeTargetBitrateExceedTransmit = undefined;
      this._policeTargetBitrateExcessBurstByte = undefined;
      this._priorityBurst = undefined;
      this._priorityLevel = undefined;
      this._queueLimit = undefined;
      this._queueLimitType = undefined;
      this._shapeAverageBitRate = undefined;
      this._shapeAverageBitsPerIntervalExcess = undefined;
      this._shapeAverageBitsPerIntervalSustained = undefined;
      this._shapeAverageBurstSizeSustained = undefined;
      this._shapeAverageMs = undefined;
      this._shapeAveragePercent = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthBits = value.bandwidthBits;
      this._bandwidthPercent = value.bandwidthPercent;
      this._bandwidthRemainingOption = value.bandwidthRemainingOption;
      this._bandwidthRemainingPercent = value.bandwidthRemainingPercent;
      this._bandwidthRemainingRatio = value.bandwidthRemainingRatio;
      this._policeTargetBitrate = value.policeTargetBitrate;
      this._policeTargetBitrateConformBurstByte = value.policeTargetBitrateConformBurstByte;
      this._policeTargetBitrateConformTransmit = value.policeTargetBitrateConformTransmit;
      this._policeTargetBitrateExceedTransmit = value.policeTargetBitrateExceedTransmit;
      this._policeTargetBitrateExcessBurstByte = value.policeTargetBitrateExcessBurstByte;
      this._priorityBurst = value.priorityBurst;
      this._priorityLevel = value.priorityLevel;
      this._queueLimit = value.queueLimit;
      this._queueLimitType = value.queueLimitType;
      this._shapeAverageBitRate = value.shapeAverageBitRate;
      this._shapeAverageBitsPerIntervalExcess = value.shapeAverageBitsPerIntervalExcess;
      this._shapeAverageBitsPerIntervalSustained = value.shapeAverageBitsPerIntervalSustained;
      this._shapeAverageBurstSizeSustained = value.shapeAverageBurstSizeSustained;
      this._shapeAverageMs = value.shapeAverageMs;
      this._shapeAveragePercent = value.shapeAveragePercent;
      this._type = value.type;
    }
  }

  // bandwidth_bits - computed: false, optional: true, required: false
  private _bandwidthBits?: number; 
  public get bandwidthBits() {
    return this.getNumberAttribute('bandwidth_bits');
  }
  public set bandwidthBits(value: number) {
    this._bandwidthBits = value;
  }
  public resetBandwidthBits() {
    this._bandwidthBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthBitsInput() {
    return this._bandwidthBits;
  }

  // bandwidth_percent - computed: false, optional: true, required: false
  private _bandwidthPercent?: number; 
  public get bandwidthPercent() {
    return this.getNumberAttribute('bandwidth_percent');
  }
  public set bandwidthPercent(value: number) {
    this._bandwidthPercent = value;
  }
  public resetBandwidthPercent() {
    this._bandwidthPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPercentInput() {
    return this._bandwidthPercent;
  }

  // bandwidth_remaining_option - computed: false, optional: true, required: false
  private _bandwidthRemainingOption?: string; 
  public get bandwidthRemainingOption() {
    return this.getStringAttribute('bandwidth_remaining_option');
  }
  public set bandwidthRemainingOption(value: string) {
    this._bandwidthRemainingOption = value;
  }
  public resetBandwidthRemainingOption() {
    this._bandwidthRemainingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthRemainingOptionInput() {
    return this._bandwidthRemainingOption;
  }

  // bandwidth_remaining_percent - computed: false, optional: true, required: false
  private _bandwidthRemainingPercent?: number; 
  public get bandwidthRemainingPercent() {
    return this.getNumberAttribute('bandwidth_remaining_percent');
  }
  public set bandwidthRemainingPercent(value: number) {
    this._bandwidthRemainingPercent = value;
  }
  public resetBandwidthRemainingPercent() {
    this._bandwidthRemainingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthRemainingPercentInput() {
    return this._bandwidthRemainingPercent;
  }

  // bandwidth_remaining_ratio - computed: false, optional: true, required: false
  private _bandwidthRemainingRatio?: number; 
  public get bandwidthRemainingRatio() {
    return this.getNumberAttribute('bandwidth_remaining_ratio');
  }
  public set bandwidthRemainingRatio(value: number) {
    this._bandwidthRemainingRatio = value;
  }
  public resetBandwidthRemainingRatio() {
    this._bandwidthRemainingRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthRemainingRatioInput() {
    return this._bandwidthRemainingRatio;
  }

  // police_target_bitrate - computed: false, optional: true, required: false
  private _policeTargetBitrate?: number; 
  public get policeTargetBitrate() {
    return this.getNumberAttribute('police_target_bitrate');
  }
  public set policeTargetBitrate(value: number) {
    this._policeTargetBitrate = value;
  }
  public resetPoliceTargetBitrate() {
    this._policeTargetBitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeTargetBitrateInput() {
    return this._policeTargetBitrate;
  }

  // police_target_bitrate_conform_burst_byte - computed: false, optional: true, required: false
  private _policeTargetBitrateConformBurstByte?: number; 
  public get policeTargetBitrateConformBurstByte() {
    return this.getNumberAttribute('police_target_bitrate_conform_burst_byte');
  }
  public set policeTargetBitrateConformBurstByte(value: number) {
    this._policeTargetBitrateConformBurstByte = value;
  }
  public resetPoliceTargetBitrateConformBurstByte() {
    this._policeTargetBitrateConformBurstByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeTargetBitrateConformBurstByteInput() {
    return this._policeTargetBitrateConformBurstByte;
  }

  // police_target_bitrate_conform_transmit - computed: false, optional: true, required: false
  private _policeTargetBitrateConformTransmit?: boolean | cdktf.IResolvable; 
  public get policeTargetBitrateConformTransmit() {
    return this.getBooleanAttribute('police_target_bitrate_conform_transmit');
  }
  public set policeTargetBitrateConformTransmit(value: boolean | cdktf.IResolvable) {
    this._policeTargetBitrateConformTransmit = value;
  }
  public resetPoliceTargetBitrateConformTransmit() {
    this._policeTargetBitrateConformTransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeTargetBitrateConformTransmitInput() {
    return this._policeTargetBitrateConformTransmit;
  }

  // police_target_bitrate_exceed_transmit - computed: false, optional: true, required: false
  private _policeTargetBitrateExceedTransmit?: boolean | cdktf.IResolvable; 
  public get policeTargetBitrateExceedTransmit() {
    return this.getBooleanAttribute('police_target_bitrate_exceed_transmit');
  }
  public set policeTargetBitrateExceedTransmit(value: boolean | cdktf.IResolvable) {
    this._policeTargetBitrateExceedTransmit = value;
  }
  public resetPoliceTargetBitrateExceedTransmit() {
    this._policeTargetBitrateExceedTransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeTargetBitrateExceedTransmitInput() {
    return this._policeTargetBitrateExceedTransmit;
  }

  // police_target_bitrate_excess_burst_byte - computed: false, optional: true, required: false
  private _policeTargetBitrateExcessBurstByte?: number; 
  public get policeTargetBitrateExcessBurstByte() {
    return this.getNumberAttribute('police_target_bitrate_excess_burst_byte');
  }
  public set policeTargetBitrateExcessBurstByte(value: number) {
    this._policeTargetBitrateExcessBurstByte = value;
  }
  public resetPoliceTargetBitrateExcessBurstByte() {
    this._policeTargetBitrateExcessBurstByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policeTargetBitrateExcessBurstByteInput() {
    return this._policeTargetBitrateExcessBurstByte;
  }

  // priority_burst - computed: false, optional: true, required: false
  private _priorityBurst?: number; 
  public get priorityBurst() {
    return this.getNumberAttribute('priority_burst');
  }
  public set priorityBurst(value: number) {
    this._priorityBurst = value;
  }
  public resetPriorityBurst() {
    this._priorityBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityBurstInput() {
    return this._priorityBurst;
  }

  // priority_level - computed: false, optional: true, required: false
  private _priorityLevel?: number; 
  public get priorityLevel() {
    return this.getNumberAttribute('priority_level');
  }
  public set priorityLevel(value: number) {
    this._priorityLevel = value;
  }
  public resetPriorityLevel() {
    this._priorityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLevelInput() {
    return this._priorityLevel;
  }

  // queue_limit - computed: false, optional: true, required: false
  private _queueLimit?: number; 
  public get queueLimit() {
    return this.getNumberAttribute('queue_limit');
  }
  public set queueLimit(value: number) {
    this._queueLimit = value;
  }
  public resetQueueLimit() {
    this._queueLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLimitInput() {
    return this._queueLimit;
  }

  // queue_limit_type - computed: false, optional: true, required: false
  private _queueLimitType?: string; 
  public get queueLimitType() {
    return this.getStringAttribute('queue_limit_type');
  }
  public set queueLimitType(value: string) {
    this._queueLimitType = value;
  }
  public resetQueueLimitType() {
    this._queueLimitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLimitTypeInput() {
    return this._queueLimitType;
  }

  // shape_average_bit_rate - computed: false, optional: true, required: false
  private _shapeAverageBitRate?: number; 
  public get shapeAverageBitRate() {
    return this.getNumberAttribute('shape_average_bit_rate');
  }
  public set shapeAverageBitRate(value: number) {
    this._shapeAverageBitRate = value;
  }
  public resetShapeAverageBitRate() {
    this._shapeAverageBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAverageBitRateInput() {
    return this._shapeAverageBitRate;
  }

  // shape_average_bits_per_interval_excess - computed: false, optional: true, required: false
  private _shapeAverageBitsPerIntervalExcess?: number; 
  public get shapeAverageBitsPerIntervalExcess() {
    return this.getNumberAttribute('shape_average_bits_per_interval_excess');
  }
  public set shapeAverageBitsPerIntervalExcess(value: number) {
    this._shapeAverageBitsPerIntervalExcess = value;
  }
  public resetShapeAverageBitsPerIntervalExcess() {
    this._shapeAverageBitsPerIntervalExcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAverageBitsPerIntervalExcessInput() {
    return this._shapeAverageBitsPerIntervalExcess;
  }

  // shape_average_bits_per_interval_sustained - computed: false, optional: true, required: false
  private _shapeAverageBitsPerIntervalSustained?: number; 
  public get shapeAverageBitsPerIntervalSustained() {
    return this.getNumberAttribute('shape_average_bits_per_interval_sustained');
  }
  public set shapeAverageBitsPerIntervalSustained(value: number) {
    this._shapeAverageBitsPerIntervalSustained = value;
  }
  public resetShapeAverageBitsPerIntervalSustained() {
    this._shapeAverageBitsPerIntervalSustained = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAverageBitsPerIntervalSustainedInput() {
    return this._shapeAverageBitsPerIntervalSustained;
  }

  // shape_average_burst_size_sustained - computed: false, optional: true, required: false
  private _shapeAverageBurstSizeSustained?: number; 
  public get shapeAverageBurstSizeSustained() {
    return this.getNumberAttribute('shape_average_burst_size_sustained');
  }
  public set shapeAverageBurstSizeSustained(value: number) {
    this._shapeAverageBurstSizeSustained = value;
  }
  public resetShapeAverageBurstSizeSustained() {
    this._shapeAverageBurstSizeSustained = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAverageBurstSizeSustainedInput() {
    return this._shapeAverageBurstSizeSustained;
  }

  // shape_average_ms - computed: false, optional: true, required: false
  private _shapeAverageMs?: boolean | cdktf.IResolvable; 
  public get shapeAverageMs() {
    return this.getBooleanAttribute('shape_average_ms');
  }
  public set shapeAverageMs(value: boolean | cdktf.IResolvable) {
    this._shapeAverageMs = value;
  }
  public resetShapeAverageMs() {
    this._shapeAverageMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAverageMsInput() {
    return this._shapeAverageMs;
  }

  // shape_average_percent - computed: false, optional: true, required: false
  private _shapeAveragePercent?: number; 
  public get shapeAveragePercent() {
    return this.getNumberAttribute('shape_average_percent');
  }
  public set shapeAveragePercent(value: number) {
    this._shapeAveragePercent = value;
  }
  public resetShapeAveragePercent() {
    this._shapeAveragePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeAveragePercentInput() {
    return this._shapeAveragePercent;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class PolicyMapClassesActionsList extends cdktf.ComplexList {
  public internalValue? : PolicyMapClassesActions[] | cdktf.IResolvable

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
  public get(index: number): PolicyMapClassesActionsOutputReference {
    return new PolicyMapClassesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyMapClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#actions PolicyMap#actions}
  */
  readonly actions?: PolicyMapClassesActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#name PolicyMap#name}
  */
  readonly name: string;
}

export function policyMapClassesToTerraform(struct?: PolicyMapClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(policyMapClassesActionsToTerraform, false)(struct!.actions),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function policyMapClassesToHclTerraform(struct?: PolicyMapClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(policyMapClassesActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyMapClassesActionsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyMapClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMapClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyMapClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._name = value.name;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new PolicyMapClassesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: PolicyMapClassesActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
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
}

export class PolicyMapClassesList extends cdktf.ComplexList {
  public internalValue? : PolicyMapClasses[] | cdktf.IResolvable

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
  public get(index: number): PolicyMapClassesOutputReference {
    return new PolicyMapClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map iosxe_policy_map}
*/
export class PolicyMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_policy_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyMap to import
  * @param importFromId The id of the existing PolicyMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_policy_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/policy_map iosxe_policy_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyMapConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_policy_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classes.internalValue = config.classes;
    this._description = config.description;
    this._device = config.device;
    this._name = config.name;
    this._subscriber = config.subscriber;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classes - computed: false, optional: true, required: false
  private _classes = new PolicyMapClassesList(this, "classes", false);
  public get classes() {
    return this._classes;
  }
  public putClasses(value: PolicyMapClasses[] | cdktf.IResolvable) {
    this._classes.internalValue = value;
  }
  public resetClasses() {
    this._classes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes.internalValue;
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

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // subscriber - computed: false, optional: true, required: false
  private _subscriber?: boolean | cdktf.IResolvable; 
  public get subscriber() {
    return this.getBooleanAttribute('subscriber');
  }
  public set subscriber(value: boolean | cdktf.IResolvable) {
    this._subscriber = value;
  }
  public resetSubscriber() {
    this._subscriber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      classes: cdktf.listMapper(policyMapClassesToTerraform, false)(this._classes.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      subscriber: cdktf.booleanToTerraform(this._subscriber),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      classes: {
        value: cdktf.listMapperHcl(policyMapClassesToHclTerraform, false)(this._classes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyMapClassesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
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
      subscriber: {
        value: cdktf.booleanToHclTerraform(this._subscriber),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
