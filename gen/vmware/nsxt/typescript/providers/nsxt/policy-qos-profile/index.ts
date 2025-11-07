// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyQosProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Class of service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#class_of_service PolicyQosProfile#class_of_service}
  */
  readonly classOfService?: number;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#description PolicyQosProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#display_name PolicyQosProfile#display_name}
  */
  readonly displayName: string;
  /**
  * DSCP Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#dscp_priority PolicyQosProfile#dscp_priority}
  */
  readonly dscpPriority?: number;
  /**
  * Trust mode for DSCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#dscp_trusted PolicyQosProfile#dscp_trusted}
  */
  readonly dscpTrusted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#id PolicyQosProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#nsx_id PolicyQosProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#context PolicyQosProfile#context}
  */
  readonly context?: PolicyQosProfileContext;
  /**
  * egress_rate_shaper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#egress_rate_shaper PolicyQosProfile#egress_rate_shaper}
  */
  readonly egressRateShaper?: PolicyQosProfileEgressRateShaper;
  /**
  * ingress_broadcast_rate_shaper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#ingress_broadcast_rate_shaper PolicyQosProfile#ingress_broadcast_rate_shaper}
  */
  readonly ingressBroadcastRateShaper?: PolicyQosProfileIngressBroadcastRateShaper;
  /**
  * ingress_rate_shaper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#ingress_rate_shaper PolicyQosProfile#ingress_rate_shaper}
  */
  readonly ingressRateShaper?: PolicyQosProfileIngressRateShaper;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#tag PolicyQosProfile#tag}
  */
  readonly tag?: PolicyQosProfileTag[] | cdktf.IResolvable;
}
export interface PolicyQosProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#project_id PolicyQosProfile#project_id}
  */
  readonly projectId: string;
}

export function policyQosProfileContextToTerraform(struct?: PolicyQosProfileContextOutputReference | PolicyQosProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyQosProfileContextToHclTerraform(struct?: PolicyQosProfileContextOutputReference | PolicyQosProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyQosProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyQosProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyQosProfileContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyQosProfileEgressRateShaper {
  /**
  * Average Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#average_bw_mbps PolicyQosProfile#average_bw_mbps}
  */
  readonly averageBwMbps?: number;
  /**
  * Burst size in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#burst_size PolicyQosProfile#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Whether this rate shaper is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#enabled PolicyQosProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Peak Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#peak_bw_mbps PolicyQosProfile#peak_bw_mbps}
  */
  readonly peakBwMbps?: number;
}

export function policyQosProfileEgressRateShaperToTerraform(struct?: PolicyQosProfileEgressRateShaperOutputReference | PolicyQosProfileEgressRateShaper): any {
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


export function policyQosProfileEgressRateShaperToHclTerraform(struct?: PolicyQosProfileEgressRateShaperOutputReference | PolicyQosProfileEgressRateShaper): any {
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

export class PolicyQosProfileEgressRateShaperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyQosProfileEgressRateShaper | undefined {
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

  public set internalValue(value: PolicyQosProfileEgressRateShaper | undefined) {
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
export interface PolicyQosProfileIngressBroadcastRateShaper {
  /**
  * Average Bandwidth in kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#average_bw_kbps PolicyQosProfile#average_bw_kbps}
  */
  readonly averageBwKbps?: number;
  /**
  * Burst size in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#burst_size PolicyQosProfile#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Whether this rate shaper is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#enabled PolicyQosProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Peak Bandwidth in kbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#peak_bw_kbps PolicyQosProfile#peak_bw_kbps}
  */
  readonly peakBwKbps?: number;
}

export function policyQosProfileIngressBroadcastRateShaperToTerraform(struct?: PolicyQosProfileIngressBroadcastRateShaperOutputReference | PolicyQosProfileIngressBroadcastRateShaper): any {
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


export function policyQosProfileIngressBroadcastRateShaperToHclTerraform(struct?: PolicyQosProfileIngressBroadcastRateShaperOutputReference | PolicyQosProfileIngressBroadcastRateShaper): any {
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

export class PolicyQosProfileIngressBroadcastRateShaperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyQosProfileIngressBroadcastRateShaper | undefined {
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

  public set internalValue(value: PolicyQosProfileIngressBroadcastRateShaper | undefined) {
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
export interface PolicyQosProfileIngressRateShaper {
  /**
  * Average Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#average_bw_mbps PolicyQosProfile#average_bw_mbps}
  */
  readonly averageBwMbps?: number;
  /**
  * Burst size in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#burst_size PolicyQosProfile#burst_size}
  */
  readonly burstSize?: number;
  /**
  * Whether this rate shaper is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#enabled PolicyQosProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Peak Bandwidth in mbps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#peak_bw_mbps PolicyQosProfile#peak_bw_mbps}
  */
  readonly peakBwMbps?: number;
}

export function policyQosProfileIngressRateShaperToTerraform(struct?: PolicyQosProfileIngressRateShaperOutputReference | PolicyQosProfileIngressRateShaper): any {
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


export function policyQosProfileIngressRateShaperToHclTerraform(struct?: PolicyQosProfileIngressRateShaperOutputReference | PolicyQosProfileIngressRateShaper): any {
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

export class PolicyQosProfileIngressRateShaperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyQosProfileIngressRateShaper | undefined {
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

  public set internalValue(value: PolicyQosProfileIngressRateShaper | undefined) {
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
export interface PolicyQosProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#scope PolicyQosProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#tag PolicyQosProfile#tag}
  */
  readonly tag?: string;
}

export function policyQosProfileTagToTerraform(struct?: PolicyQosProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyQosProfileTagToHclTerraform(struct?: PolicyQosProfileTag | cdktf.IResolvable): any {
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

export class PolicyQosProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyQosProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyQosProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyQosProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyQosProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyQosProfileTagOutputReference {
    return new PolicyQosProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile nsxt_policy_qos_profile}
*/
export class PolicyQosProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_qos_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyQosProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyQosProfile to import
  * @param importFromId The id of the existing PolicyQosProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyQosProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_qos_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_qos_profile nsxt_policy_qos_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyQosProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyQosProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_qos_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._nsxId = config.nsxId;
    this._context.internalValue = config.context;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyQosProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyQosProfileContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // egress_rate_shaper - computed: false, optional: true, required: false
  private _egressRateShaper = new PolicyQosProfileEgressRateShaperOutputReference(this, "egress_rate_shaper");
  public get egressRateShaper() {
    return this._egressRateShaper;
  }
  public putEgressRateShaper(value: PolicyQosProfileEgressRateShaper) {
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
  private _ingressBroadcastRateShaper = new PolicyQosProfileIngressBroadcastRateShaperOutputReference(this, "ingress_broadcast_rate_shaper");
  public get ingressBroadcastRateShaper() {
    return this._ingressBroadcastRateShaper;
  }
  public putIngressBroadcastRateShaper(value: PolicyQosProfileIngressBroadcastRateShaper) {
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
  private _ingressRateShaper = new PolicyQosProfileIngressRateShaperOutputReference(this, "ingress_rate_shaper");
  public get ingressRateShaper() {
    return this._ingressRateShaper;
  }
  public putIngressRateShaper(value: PolicyQosProfileIngressRateShaper) {
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
  private _tag = new PolicyQosProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyQosProfileTag[] | cdktf.IResolvable) {
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
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      context: policyQosProfileContextToTerraform(this._context.internalValue),
      egress_rate_shaper: policyQosProfileEgressRateShaperToTerraform(this._egressRateShaper.internalValue),
      ingress_broadcast_rate_shaper: policyQosProfileIngressBroadcastRateShaperToTerraform(this._ingressBroadcastRateShaper.internalValue),
      ingress_rate_shaper: policyQosProfileIngressRateShaperToTerraform(this._ingressRateShaper.internalValue),
      tag: cdktf.listMapper(policyQosProfileTagToTerraform, true)(this._tag.internalValue),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: policyQosProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyQosProfileContextList",
      },
      egress_rate_shaper: {
        value: policyQosProfileEgressRateShaperToHclTerraform(this._egressRateShaper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyQosProfileEgressRateShaperList",
      },
      ingress_broadcast_rate_shaper: {
        value: policyQosProfileIngressBroadcastRateShaperToHclTerraform(this._ingressBroadcastRateShaper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyQosProfileIngressBroadcastRateShaperList",
      },
      ingress_rate_shaper: {
        value: policyQosProfileIngressRateShaperToHclTerraform(this._ingressRateShaper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyQosProfileIngressRateShaperList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyQosProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyQosProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
