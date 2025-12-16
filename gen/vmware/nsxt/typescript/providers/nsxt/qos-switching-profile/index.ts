// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QosSwitchingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class of service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#class_of_service QosSwitchingProfile#class_of_service}
  */
  readonly classOfService?: number;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#description QosSwitchingProfile#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#display_name QosSwitchingProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * DSCP Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#dscp_priority QosSwitchingProfile#dscp_priority}
  */
  readonly dscpPriority?: number;
  /**
  * Trust mode for DSCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#dscp_trusted QosSwitchingProfile#dscp_trusted}
  */
  readonly dscpTrusted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#id QosSwitchingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * egress_rate_shaper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#egress_rate_shaper QosSwitchingProfile#egress_rate_shaper}
  */
  readonly egressRateShaper?: QosSwitchingProfileEgressRateShaper;
  /**
  * ingress_broadcast_rate_shaper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#ingress_broadcast_rate_shaper QosSwitchingProfile#ingress_broadcast_rate_shaper}
  */
  readonly ingressBroadcastRateShaper?: QosSwitchingProfileIngressBroadcastRateShaper;
  /**
  * ingress_rate_shaper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#ingress_rate_shaper QosSwitchingProfile#ingress_rate_shaper}
  */
  readonly ingressRateShaper?: QosSwitchingProfileIngressRateShaper;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#tag QosSwitchingProfile#tag}
  */
  readonly tag?: QosSwitchingProfileTag[] | cdktf.IResolvable;
}
export interface QosSwitchingProfileEgressRateShaper {
  /**
  * Average Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#average_bw_mbps QosSwitchingProfile#average_bw_mbps}
  */
  readonly averageBwMbps?: number;
  /**
  * Burst size in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#burst_size QosSwitchingProfile#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Whether this rate shaper is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#enabled QosSwitchingProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Peak Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#peak_bw_mbps QosSwitchingProfile#peak_bw_mbps}
  */
  readonly peakBwMbps?: number;
}

export function qosSwitchingProfileEgressRateShaperToTerraform(struct?: QosSwitchingProfileEgressRateShaperOutputReference | QosSwitchingProfileEgressRateShaper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_bw_mbps: cdktf.numberToTerraform(struct!.averageBwMbps),
    burst_size: cdktf.numberToTerraform(struct!.burstSize),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    peak_bw_mbps: cdktf.numberToTerraform(struct!.peakBwMbps),
  }
}


export function qosSwitchingProfileEgressRateShaperToHclTerraform(struct?: QosSwitchingProfileEgressRateShaperOutputReference | QosSwitchingProfileEgressRateShaper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_bw_mbps: {
      value: cdktf.numberToHclTerraform(struct!.averageBwMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst_size: {
      value: cdktf.numberToHclTerraform(struct!.burstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peak_bw_mbps: {
      value: cdktf.numberToHclTerraform(struct!.peakBwMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosSwitchingProfileEgressRateShaperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QosSwitchingProfileEgressRateShaper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageBwMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageBwMbps = this._averageBwMbps;
    }
    if (this._burstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSize = this._burstSize;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._peakBwMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakBwMbps = this._peakBwMbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosSwitchingProfileEgressRateShaper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageBwMbps = undefined;
      this._burstSize = undefined;
      this._enabled = undefined;
      this._peakBwMbps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageBwMbps = value.averageBwMbps;
      this._burstSize = value.burstSize;
      this._enabled = value.enabled;
      this._peakBwMbps = value.peakBwMbps;
    }
  }

  // average_bw_mbps - computed: false, optional: true, required: false
  private _averageBwMbps?: number; 
  public get averageBwMbps() {
    return this.getNumberAttribute('average_bw_mbps');
  }
  public set averageBwMbps(value: number) {
    this._averageBwMbps = value;
  }
  public resetAverageBwMbps() {
    this._averageBwMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageBwMbpsInput() {
    return this._averageBwMbps;
  }

  // burst_size - computed: false, optional: true, required: false
  private _burstSize?: number; 
  public get burstSize() {
    return this.getNumberAttribute('burst_size');
  }
  public set burstSize(value: number) {
    this._burstSize = value;
  }
  public resetBurstSize() {
    this._burstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeInput() {
    return this._burstSize;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // peak_bw_mbps - computed: false, optional: true, required: false
  private _peakBwMbps?: number; 
  public get peakBwMbps() {
    return this.getNumberAttribute('peak_bw_mbps');
  }
  public set peakBwMbps(value: number) {
    this._peakBwMbps = value;
  }
  public resetPeakBwMbps() {
    this._peakBwMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakBwMbpsInput() {
    return this._peakBwMbps;
  }
}
export interface QosSwitchingProfileIngressBroadcastRateShaper {
  /**
  * Average Bandwidth in kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#average_bw_kbps QosSwitchingProfile#average_bw_kbps}
  */
  readonly averageBwKbps?: number;
  /**
  * Burst size in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#burst_size QosSwitchingProfile#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Whether this rate shaper is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#enabled QosSwitchingProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Peak Bandwidth in kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#peak_bw_kbps QosSwitchingProfile#peak_bw_kbps}
  */
  readonly peakBwKbps?: number;
}

export function qosSwitchingProfileIngressBroadcastRateShaperToTerraform(struct?: QosSwitchingProfileIngressBroadcastRateShaperOutputReference | QosSwitchingProfileIngressBroadcastRateShaper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_bw_kbps: cdktf.numberToTerraform(struct!.averageBwKbps),
    burst_size: cdktf.numberToTerraform(struct!.burstSize),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    peak_bw_kbps: cdktf.numberToTerraform(struct!.peakBwKbps),
  }
}


export function qosSwitchingProfileIngressBroadcastRateShaperToHclTerraform(struct?: QosSwitchingProfileIngressBroadcastRateShaperOutputReference | QosSwitchingProfileIngressBroadcastRateShaper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_bw_kbps: {
      value: cdktf.numberToHclTerraform(struct!.averageBwKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst_size: {
      value: cdktf.numberToHclTerraform(struct!.burstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peak_bw_kbps: {
      value: cdktf.numberToHclTerraform(struct!.peakBwKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosSwitchingProfileIngressBroadcastRateShaperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QosSwitchingProfileIngressBroadcastRateShaper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageBwKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageBwKbps = this._averageBwKbps;
    }
    if (this._burstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSize = this._burstSize;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._peakBwKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakBwKbps = this._peakBwKbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosSwitchingProfileIngressBroadcastRateShaper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageBwKbps = undefined;
      this._burstSize = undefined;
      this._enabled = undefined;
      this._peakBwKbps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageBwKbps = value.averageBwKbps;
      this._burstSize = value.burstSize;
      this._enabled = value.enabled;
      this._peakBwKbps = value.peakBwKbps;
    }
  }

  // average_bw_kbps - computed: false, optional: true, required: false
  private _averageBwKbps?: number; 
  public get averageBwKbps() {
    return this.getNumberAttribute('average_bw_kbps');
  }
  public set averageBwKbps(value: number) {
    this._averageBwKbps = value;
  }
  public resetAverageBwKbps() {
    this._averageBwKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageBwKbpsInput() {
    return this._averageBwKbps;
  }

  // burst_size - computed: false, optional: true, required: false
  private _burstSize?: number; 
  public get burstSize() {
    return this.getNumberAttribute('burst_size');
  }
  public set burstSize(value: number) {
    this._burstSize = value;
  }
  public resetBurstSize() {
    this._burstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeInput() {
    return this._burstSize;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // peak_bw_kbps - computed: false, optional: true, required: false
  private _peakBwKbps?: number; 
  public get peakBwKbps() {
    return this.getNumberAttribute('peak_bw_kbps');
  }
  public set peakBwKbps(value: number) {
    this._peakBwKbps = value;
  }
  public resetPeakBwKbps() {
    this._peakBwKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakBwKbpsInput() {
    return this._peakBwKbps;
  }
}
export interface QosSwitchingProfileIngressRateShaper {
  /**
  * Average Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#average_bw_mbps QosSwitchingProfile#average_bw_mbps}
  */
  readonly averageBwMbps?: number;
  /**
  * Burst size in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#burst_size QosSwitchingProfile#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Whether this rate shaper is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#enabled QosSwitchingProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Peak Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#peak_bw_mbps QosSwitchingProfile#peak_bw_mbps}
  */
  readonly peakBwMbps?: number;
}

export function qosSwitchingProfileIngressRateShaperToTerraform(struct?: QosSwitchingProfileIngressRateShaperOutputReference | QosSwitchingProfileIngressRateShaper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_bw_mbps: cdktf.numberToTerraform(struct!.averageBwMbps),
    burst_size: cdktf.numberToTerraform(struct!.burstSize),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    peak_bw_mbps: cdktf.numberToTerraform(struct!.peakBwMbps),
  }
}


export function qosSwitchingProfileIngressRateShaperToHclTerraform(struct?: QosSwitchingProfileIngressRateShaperOutputReference | QosSwitchingProfileIngressRateShaper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_bw_mbps: {
      value: cdktf.numberToHclTerraform(struct!.averageBwMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst_size: {
      value: cdktf.numberToHclTerraform(struct!.burstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peak_bw_mbps: {
      value: cdktf.numberToHclTerraform(struct!.peakBwMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosSwitchingProfileIngressRateShaperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): QosSwitchingProfileIngressRateShaper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageBwMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageBwMbps = this._averageBwMbps;
    }
    if (this._burstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSize = this._burstSize;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._peakBwMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakBwMbps = this._peakBwMbps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosSwitchingProfileIngressRateShaper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._averageBwMbps = undefined;
      this._burstSize = undefined;
      this._enabled = undefined;
      this._peakBwMbps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._averageBwMbps = value.averageBwMbps;
      this._burstSize = value.burstSize;
      this._enabled = value.enabled;
      this._peakBwMbps = value.peakBwMbps;
    }
  }

  // average_bw_mbps - computed: false, optional: true, required: false
  private _averageBwMbps?: number; 
  public get averageBwMbps() {
    return this.getNumberAttribute('average_bw_mbps');
  }
  public set averageBwMbps(value: number) {
    this._averageBwMbps = value;
  }
  public resetAverageBwMbps() {
    this._averageBwMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageBwMbpsInput() {
    return this._averageBwMbps;
  }

  // burst_size - computed: false, optional: true, required: false
  private _burstSize?: number; 
  public get burstSize() {
    return this.getNumberAttribute('burst_size');
  }
  public set burstSize(value: number) {
    this._burstSize = value;
  }
  public resetBurstSize() {
    this._burstSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeInput() {
    return this._burstSize;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // peak_bw_mbps - computed: false, optional: true, required: false
  private _peakBwMbps?: number; 
  public get peakBwMbps() {
    return this.getNumberAttribute('peak_bw_mbps');
  }
  public set peakBwMbps(value: number) {
    this._peakBwMbps = value;
  }
  public resetPeakBwMbps() {
    this._peakBwMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakBwMbpsInput() {
    return this._peakBwMbps;
  }
}
export interface QosSwitchingProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#scope QosSwitchingProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#tag QosSwitchingProfile#tag}
  */
  readonly tag?: string;
}

export function qosSwitchingProfileTagToTerraform(struct?: QosSwitchingProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function qosSwitchingProfileTagToHclTerraform(struct?: QosSwitchingProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosSwitchingProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosSwitchingProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosSwitchingProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class QosSwitchingProfileTagList extends cdktf.ComplexList {
  public internalValue? : QosSwitchingProfileTag[] | cdktf.IResolvable

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
  public get(index: number): QosSwitchingProfileTagOutputReference {
    return new QosSwitchingProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile nsxt_qos_switching_profile}
*/
export class QosSwitchingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_qos_switching_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QosSwitchingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QosSwitchingProfile to import
  * @param importFromId The id of the existing QosSwitchingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QosSwitchingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_qos_switching_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/qos_switching_profile nsxt_qos_switching_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QosSwitchingProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: QosSwitchingProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_qos_switching_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classOfService = config.classOfService;
    this._description = config.description;
    this._displayName = config.displayName;
    this._dscpPriority = config.dscpPriority;
    this._dscpTrusted = config.dscpTrusted;
    this._id = config.id;
    this._egressRateShaper.internalValue = config.egressRateShaper;
    this._ingressBroadcastRateShaper.internalValue = config.ingressBroadcastRateShaper;
    this._ingressRateShaper.internalValue = config.ingressRateShaper;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_of_service - computed: false, optional: true, required: false
  private _classOfService?: number; 
  public get classOfService() {
    return this.getNumberAttribute('class_of_service');
  }
  public set classOfService(value: number) {
    this._classOfService = value;
  }
  public resetClassOfService() {
    this._classOfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classOfServiceInput() {
    return this._classOfService;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // dscp_priority - computed: false, optional: true, required: false
  private _dscpPriority?: number; 
  public get dscpPriority() {
    return this.getNumberAttribute('dscp_priority');
  }
  public set dscpPriority(value: number) {
    this._dscpPriority = value;
  }
  public resetDscpPriority() {
    this._dscpPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpPriorityInput() {
    return this._dscpPriority;
  }

  // dscp_trusted - computed: false, optional: true, required: false
  private _dscpTrusted?: boolean | cdktf.IResolvable; 
  public get dscpTrusted() {
    return this.getBooleanAttribute('dscp_trusted');
  }
  public set dscpTrusted(value: boolean | cdktf.IResolvable) {
    this._dscpTrusted = value;
  }
  public resetDscpTrusted() {
    this._dscpTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpTrustedInput() {
    return this._dscpTrusted;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // egress_rate_shaper - computed: false, optional: true, required: false
  private _egressRateShaper = new QosSwitchingProfileEgressRateShaperOutputReference(this, "egress_rate_shaper");
  public get egressRateShaper() {
    return this._egressRateShaper;
  }
  public putEgressRateShaper(value: QosSwitchingProfileEgressRateShaper) {
    this._egressRateShaper.internalValue = value;
  }
  public resetEgressRateShaper() {
    this._egressRateShaper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRateShaperInput() {
    return this._egressRateShaper.internalValue;
  }

  // ingress_broadcast_rate_shaper - computed: false, optional: true, required: false
  private _ingressBroadcastRateShaper = new QosSwitchingProfileIngressBroadcastRateShaperOutputReference(this, "ingress_broadcast_rate_shaper");
  public get ingressBroadcastRateShaper() {
    return this._ingressBroadcastRateShaper;
  }
  public putIngressBroadcastRateShaper(value: QosSwitchingProfileIngressBroadcastRateShaper) {
    this._ingressBroadcastRateShaper.internalValue = value;
  }
  public resetIngressBroadcastRateShaper() {
    this._ingressBroadcastRateShaper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressBroadcastRateShaperInput() {
    return this._ingressBroadcastRateShaper.internalValue;
  }

  // ingress_rate_shaper - computed: false, optional: true, required: false
  private _ingressRateShaper = new QosSwitchingProfileIngressRateShaperOutputReference(this, "ingress_rate_shaper");
  public get ingressRateShaper() {
    return this._ingressRateShaper;
  }
  public putIngressRateShaper(value: QosSwitchingProfileIngressRateShaper) {
    this._ingressRateShaper.internalValue = value;
  }
  public resetIngressRateShaper() {
    this._ingressRateShaper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRateShaperInput() {
    return this._ingressRateShaper.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new QosSwitchingProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: QosSwitchingProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_of_service: cdktf.numberToTerraform(this._classOfService),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      dscp_priority: cdktf.numberToTerraform(this._dscpPriority),
      dscp_trusted: cdktf.booleanToTerraform(this._dscpTrusted),
      id: cdktf.stringToTerraform(this._id),
      egress_rate_shaper: qosSwitchingProfileEgressRateShaperToTerraform(this._egressRateShaper.internalValue),
      ingress_broadcast_rate_shaper: qosSwitchingProfileIngressBroadcastRateShaperToTerraform(this._ingressBroadcastRateShaper.internalValue),
      ingress_rate_shaper: qosSwitchingProfileIngressRateShaperToTerraform(this._ingressRateShaper.internalValue),
      tag: cdktf.listMapper(qosSwitchingProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_of_service: {
        value: cdktf.numberToHclTerraform(this._classOfService),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dscp_priority: {
        value: cdktf.numberToHclTerraform(this._dscpPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_trusted: {
        value: cdktf.booleanToHclTerraform(this._dscpTrusted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_rate_shaper: {
        value: qosSwitchingProfileEgressRateShaperToHclTerraform(this._egressRateShaper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QosSwitchingProfileEgressRateShaperList",
      },
      ingress_broadcast_rate_shaper: {
        value: qosSwitchingProfileIngressBroadcastRateShaperToHclTerraform(this._ingressBroadcastRateShaper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QosSwitchingProfileIngressBroadcastRateShaperList",
      },
      ingress_rate_shaper: {
        value: qosSwitchingProfileIngressRateShaperToHclTerraform(this._ingressRateShaper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QosSwitchingProfileIngressRateShaperList",
      },
      tag: {
        value: cdktf.listMapperHcl(qosSwitchingProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "QosSwitchingProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
