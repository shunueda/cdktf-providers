// https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QosPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Adaptive QoS policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#adaptive QosPolicy#adaptive}
  */
  readonly adaptive?: QosPolicyAdaptive;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#cx_profile_name QosPolicy#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Fixed QoS policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#fixed QosPolicy#fixed}
  */
  readonly fixed?: QosPolicyFixed;
  /**
  * QOSPolicies name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#name QosPolicy#name}
  */
  readonly name: string;
  /**
  * QoS policy scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#scope QosPolicy#scope}
  */
  readonly scope?: string;
  /**
  * QOSPolicies svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#svm_name QosPolicy#svm_name}
  */
  readonly svmName: string;
}
export interface QosPolicyAdaptive {
  /**
  * Absolute minimum IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#absolute_min_iops QosPolicy#absolute_min_iops}
  */
  readonly absoluteMinIops?: number;
  /**
  * Block size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#block_size QosPolicy#block_size}
  */
  readonly blockSize?: string;
  /**
  * Expected IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#expected_iops QosPolicy#expected_iops}
  */
  readonly expectedIops: number;
  /**
  * Expected IOPS allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#expected_iops_allocation QosPolicy#expected_iops_allocation}
  */
  readonly expectedIopsAllocation?: string;
  /**
  * Peak IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#peak_iops QosPolicy#peak_iops}
  */
  readonly peakIops: number;
  /**
  * Peak IOPS allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#peak_iops_allocation QosPolicy#peak_iops_allocation}
  */
  readonly peakIopsAllocation?: string;
}

export function qosPolicyAdaptiveToTerraform(struct?: QosPolicyAdaptive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_min_iops: cdktf.numberToTerraform(struct!.absoluteMinIops),
    block_size: cdktf.stringToTerraform(struct!.blockSize),
    expected_iops: cdktf.numberToTerraform(struct!.expectedIops),
    expected_iops_allocation: cdktf.stringToTerraform(struct!.expectedIopsAllocation),
    peak_iops: cdktf.numberToTerraform(struct!.peakIops),
    peak_iops_allocation: cdktf.stringToTerraform(struct!.peakIopsAllocation),
  }
}


export function qosPolicyAdaptiveToHclTerraform(struct?: QosPolicyAdaptive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_min_iops: {
      value: cdktf.numberToHclTerraform(struct!.absoluteMinIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_size: {
      value: cdktf.stringToHclTerraform(struct!.blockSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_iops: {
      value: cdktf.numberToHclTerraform(struct!.expectedIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expected_iops_allocation: {
      value: cdktf.stringToHclTerraform(struct!.expectedIopsAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peak_iops: {
      value: cdktf.numberToHclTerraform(struct!.peakIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_iops_allocation: {
      value: cdktf.stringToHclTerraform(struct!.peakIopsAllocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyAdaptiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyAdaptive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteMinIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteMinIops = this._absoluteMinIops;
    }
    if (this._blockSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSize = this._blockSize;
    }
    if (this._expectedIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedIops = this._expectedIops;
    }
    if (this._expectedIopsAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedIopsAllocation = this._expectedIopsAllocation;
    }
    if (this._peakIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakIops = this._peakIops;
    }
    if (this._peakIopsAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakIopsAllocation = this._peakIopsAllocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyAdaptive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteMinIops = undefined;
      this._blockSize = undefined;
      this._expectedIops = undefined;
      this._expectedIopsAllocation = undefined;
      this._peakIops = undefined;
      this._peakIopsAllocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteMinIops = value.absoluteMinIops;
      this._blockSize = value.blockSize;
      this._expectedIops = value.expectedIops;
      this._expectedIopsAllocation = value.expectedIopsAllocation;
      this._peakIops = value.peakIops;
      this._peakIopsAllocation = value.peakIopsAllocation;
    }
  }

  // absolute_min_iops - computed: true, optional: true, required: false
  private _absoluteMinIops?: number; 
  public get absoluteMinIops() {
    return this.getNumberAttribute('absolute_min_iops');
  }
  public set absoluteMinIops(value: number) {
    this._absoluteMinIops = value;
  }
  public resetAbsoluteMinIops() {
    this._absoluteMinIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteMinIopsInput() {
    return this._absoluteMinIops;
  }

  // block_size - computed: true, optional: true, required: false
  private _blockSize?: string; 
  public get blockSize() {
    return this.getStringAttribute('block_size');
  }
  public set blockSize(value: string) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
  }

  // expected_iops - computed: true, optional: false, required: true
  private _expectedIops?: number; 
  public get expectedIops() {
    return this.getNumberAttribute('expected_iops');
  }
  public set expectedIops(value: number) {
    this._expectedIops = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedIopsInput() {
    return this._expectedIops;
  }

  // expected_iops_allocation - computed: true, optional: true, required: false
  private _expectedIopsAllocation?: string; 
  public get expectedIopsAllocation() {
    return this.getStringAttribute('expected_iops_allocation');
  }
  public set expectedIopsAllocation(value: string) {
    this._expectedIopsAllocation = value;
  }
  public resetExpectedIopsAllocation() {
    this._expectedIopsAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedIopsAllocationInput() {
    return this._expectedIopsAllocation;
  }

  // peak_iops - computed: true, optional: false, required: true
  private _peakIops?: number; 
  public get peakIops() {
    return this.getNumberAttribute('peak_iops');
  }
  public set peakIops(value: number) {
    this._peakIops = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peakIopsInput() {
    return this._peakIops;
  }

  // peak_iops_allocation - computed: true, optional: true, required: false
  private _peakIopsAllocation?: string; 
  public get peakIopsAllocation() {
    return this.getStringAttribute('peak_iops_allocation');
  }
  public set peakIopsAllocation(value: string) {
    this._peakIopsAllocation = value;
  }
  public resetPeakIopsAllocation() {
    this._peakIopsAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakIopsAllocationInput() {
    return this._peakIopsAllocation;
  }
}
export interface QosPolicyFixed {
  /**
  * Capacity shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#capacity_shared QosPolicy#capacity_shared}
  */
  readonly capacityShared?: boolean | cdktf.IResolvable;
  /**
  * Maximum throughput in IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#max_throughput_iops QosPolicy#max_throughput_iops}
  */
  readonly maxThroughputIops?: number;
  /**
  * Maximum throughput in MBPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#max_throughput_mbps QosPolicy#max_throughput_mbps}
  */
  readonly maxThroughputMbps?: number;
  /**
  * Minimum throughput in IOPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#min_throughput_iops QosPolicy#min_throughput_iops}
  */
  readonly minThroughputIops?: number;
  /**
  * Minimum throughput in MBPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#min_throughput_mbps QosPolicy#min_throughput_mbps}
  */
  readonly minThroughputMbps?: number;
}

export function qosPolicyFixedToTerraform(struct?: QosPolicyFixed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_shared: cdktf.booleanToTerraform(struct!.capacityShared),
    max_throughput_iops: cdktf.numberToTerraform(struct!.maxThroughputIops),
    max_throughput_mbps: cdktf.numberToTerraform(struct!.maxThroughputMbps),
    min_throughput_iops: cdktf.numberToTerraform(struct!.minThroughputIops),
    min_throughput_mbps: cdktf.numberToTerraform(struct!.minThroughputMbps),
  }
}


export function qosPolicyFixedToHclTerraform(struct?: QosPolicyFixed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_shared: {
      value: cdktf.booleanToHclTerraform(struct!.capacityShared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_throughput_iops: {
      value: cdktf.numberToHclTerraform(struct!.maxThroughputIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_throughput_mbps: {
      value: cdktf.numberToHclTerraform(struct!.maxThroughputMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_throughput_iops: {
      value: cdktf.numberToHclTerraform(struct!.minThroughputIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_throughput_mbps: {
      value: cdktf.numberToHclTerraform(struct!.minThroughputMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyFixedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): QosPolicyFixed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityShared = this._capacityShared;
    }
    if (this._maxThroughputIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThroughputIops = this._maxThroughputIops;
    }
    if (this._maxThroughputMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThroughputMbps = this._maxThroughputMbps;
    }
    if (this._minThroughputIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.minThroughputIops = this._minThroughputIops;
    }
    if (this._minThroughputMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.minThroughputMbps = this._minThroughputMbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyFixed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._capacityShared = undefined;
      this._maxThroughputIops = undefined;
      this._maxThroughputMbps = undefined;
      this._minThroughputIops = undefined;
      this._minThroughputMbps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._capacityShared = value.capacityShared;
      this._maxThroughputIops = value.maxThroughputIops;
      this._maxThroughputMbps = value.maxThroughputMbps;
      this._minThroughputIops = value.minThroughputIops;
      this._minThroughputMbps = value.minThroughputMbps;
    }
  }

  // capacity_shared - computed: true, optional: true, required: false
  private _capacityShared?: boolean | cdktf.IResolvable; 
  public get capacityShared() {
    return this.getBooleanAttribute('capacity_shared');
  }
  public set capacityShared(value: boolean | cdktf.IResolvable) {
    this._capacityShared = value;
  }
  public resetCapacityShared() {
    this._capacityShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacitySharedInput() {
    return this._capacityShared;
  }

  // max_throughput_iops - computed: true, optional: true, required: false
  private _maxThroughputIops?: number; 
  public get maxThroughputIops() {
    return this.getNumberAttribute('max_throughput_iops');
  }
  public set maxThroughputIops(value: number) {
    this._maxThroughputIops = value;
  }
  public resetMaxThroughputIops() {
    this._maxThroughputIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputIopsInput() {
    return this._maxThroughputIops;
  }

  // max_throughput_mbps - computed: true, optional: true, required: false
  private _maxThroughputMbps?: number; 
  public get maxThroughputMbps() {
    return this.getNumberAttribute('max_throughput_mbps');
  }
  public set maxThroughputMbps(value: number) {
    this._maxThroughputMbps = value;
  }
  public resetMaxThroughputMbps() {
    this._maxThroughputMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputMbpsInput() {
    return this._maxThroughputMbps;
  }

  // min_throughput_iops - computed: true, optional: true, required: false
  private _minThroughputIops?: number; 
  public get minThroughputIops() {
    return this.getNumberAttribute('min_throughput_iops');
  }
  public set minThroughputIops(value: number) {
    this._minThroughputIops = value;
  }
  public resetMinThroughputIops() {
    this._minThroughputIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThroughputIopsInput() {
    return this._minThroughputIops;
  }

  // min_throughput_mbps - computed: true, optional: true, required: false
  private _minThroughputMbps?: number; 
  public get minThroughputMbps() {
    return this.getNumberAttribute('min_throughput_mbps');
  }
  public set minThroughputMbps(value: number) {
    this._minThroughputMbps = value;
  }
  public resetMinThroughputMbps() {
    this._minThroughputMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThroughputMbpsInput() {
    return this._minThroughputMbps;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy netapp-ontap_qos_policy}
*/
export class QosPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_qos_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QosPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QosPolicy to import
  * @param importFromId The id of the existing QosPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QosPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_qos_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.4.0/docs/resources/qos_policy netapp-ontap_qos_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QosPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: QosPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_qos_policy',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adaptive.internalValue = config.adaptive;
    this._cxProfileName = config.cxProfileName;
    this._fixed.internalValue = config.fixed;
    this._name = config.name;
    this._scope = config.scope;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adaptive - computed: true, optional: true, required: false
  private _adaptive = new QosPolicyAdaptiveOutputReference(this, "adaptive");
  public get adaptive() {
    return this._adaptive;
  }
  public putAdaptive(value: QosPolicyAdaptive) {
    this._adaptive.internalValue = value;
  }
  public resetAdaptive() {
    this._adaptive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveInput() {
    return this._adaptive.internalValue;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // fixed - computed: true, optional: true, required: false
  private _fixed = new QosPolicyFixedOutputReference(this, "fixed");
  public get fixed() {
    return this._fixed;
  }
  public putFixed(value: QosPolicyFixed) {
    this._fixed.internalValue = value;
  }
  public resetFixed() {
    this._fixed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed.internalValue;
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

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adaptive: qosPolicyAdaptiveToTerraform(this._adaptive.internalValue),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      fixed: qosPolicyFixedToTerraform(this._fixed.internalValue),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adaptive: {
        value: qosPolicyAdaptiveToHclTerraform(this._adaptive.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QosPolicyAdaptive",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed: {
        value: qosPolicyFixedToHclTerraform(this._fixed.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "QosPolicyFixed",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
