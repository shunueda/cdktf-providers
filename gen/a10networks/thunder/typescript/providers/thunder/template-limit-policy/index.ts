// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateLimitPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#id TemplateLimitPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable Concurrent Session Limit (Number of Concurrent Sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#limit_concurrent_sessions TemplateLimitPolicy#limit_concurrent_sessions}
  */
  readonly limitConcurrentSessions?: number;
  /**
  * 'aggregate': Rule Level; 'subscriber-ip': Subscriber IP Level; 'subscriber-prefix': Subscriber Prefix Level;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#limit_scope TemplateLimitPolicy#limit_scope}
  */
  readonly limitScope?: string;
  /**
  * Log when Session Limit is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#log TemplateLimitPolicy#log}
  */
  readonly log?: number;
  /**
  * Enable max-min-fairness
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#max_min_fair TemplateLimitPolicy#max_min_fair}
  */
  readonly maxMinFair?: number;
  /**
  * Specify the parent of limit-policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#parent TemplateLimitPolicy#parent}
  */
  readonly parent?: number;
  /**
  * Limit Policy Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#policy_number TemplateLimitPolicy#policy_number}
  */
  readonly policyNumber: number;
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#prefix_length TemplateLimitPolicy#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#user_tag TemplateLimitPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uuid TemplateLimitPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * limit_cps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#limit_cps TemplateLimitPolicy#limit_cps}
  */
  readonly limitCps?: TemplateLimitPolicyLimitCps;
  /**
  * limit_pps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#limit_pps TemplateLimitPolicy#limit_pps}
  */
  readonly limitPps?: TemplateLimitPolicyLimitPps;
  /**
  * limit_throughput block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#limit_throughput TemplateLimitPolicy#limit_throughput}
  */
  readonly limitThroughput?: TemplateLimitPolicyLimitThroughput;
}
export interface TemplateLimitPolicyLimitCps {
  /**
  * CPS Token Bucket Size (Must Exceed Configured Rate) (In Connections per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#burstsize TemplateLimitPolicy#burstsize}
  */
  readonly burstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#relaxed TemplateLimitPolicy#relaxed}
  */
  readonly relaxed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uuid TemplateLimitPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Connections Per Second Rate Limit (Number of Connections per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#value TemplateLimitPolicy#value}
  */
  readonly value?: number;
}

export function templateLimitPolicyLimitCpsToTerraform(struct?: TemplateLimitPolicyLimitCpsOutputReference | TemplateLimitPolicyLimitCps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burstsize: cdktf.numberToTerraform(struct!.burstsize),
    relaxed: cdktf.numberToTerraform(struct!.relaxed),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function templateLimitPolicyLimitCpsToHclTerraform(struct?: TemplateLimitPolicyLimitCpsOutputReference | TemplateLimitPolicyLimitCps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burstsize: {
      value: cdktf.numberToHclTerraform(struct!.burstsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relaxed: {
      value: cdktf.numberToHclTerraform(struct!.relaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateLimitPolicyLimitCpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateLimitPolicyLimitCps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsize = this._burstsize;
    }
    if (this._relaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaxed = this._relaxed;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateLimitPolicyLimitCps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burstsize = undefined;
      this._relaxed = undefined;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burstsize = value.burstsize;
      this._relaxed = value.relaxed;
      this._uuid = value.uuid;
      this._value = value.value;
    }
  }

  // burstsize - computed: false, optional: true, required: false
  private _burstsize?: number; 
  public get burstsize() {
    return this.getNumberAttribute('burstsize');
  }
  public set burstsize(value: number) {
    this._burstsize = value;
  }
  public resetBurstsize() {
    this._burstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeInput() {
    return this._burstsize;
  }

  // relaxed - computed: false, optional: true, required: false
  private _relaxed?: number; 
  public get relaxed() {
    return this.getNumberAttribute('relaxed');
  }
  public set relaxed(value: number) {
    this._relaxed = value;
  }
  public resetRelaxed() {
    this._relaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaxedInput() {
    return this._relaxed;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface TemplateLimitPolicyLimitPps {
  /**
  * Enable DDoS Protection (Multiplier of the downlink PPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#ddos_protection_factor TemplateLimitPolicy#ddos_protection_factor}
  */
  readonly ddosProtectionFactor?: number;
  /**
  * Downlink PPS limit (Number of Packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#downlink TemplateLimitPolicy#downlink}
  */
  readonly downlink?: number;
  /**
  * PPS Token Bucket Size (Must Exceed Configured Rate) (In Packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#downlink_burstsize TemplateLimitPolicy#downlink_burstsize}
  */
  readonly downlinkBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#downlink_relaxed TemplateLimitPolicy#downlink_relaxed}
  */
  readonly downlinkRelaxed?: number;
  /**
  * Total PPS limit (Number of Packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#total TemplateLimitPolicy#total}
  */
  readonly total?: number;
  /**
  * PPS Token Bucket Size (Must Exceed Configured Rate) (In Packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#total_burstsize TemplateLimitPolicy#total_burstsize}
  */
  readonly totalBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#total_relaxed TemplateLimitPolicy#total_relaxed}
  */
  readonly totalRelaxed?: number;
  /**
  * Uplink PPS limit (Number of Packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uplink TemplateLimitPolicy#uplink}
  */
  readonly uplink?: number;
  /**
  * PPS Token Bucket Size (Must Exceed Configured Rate) (In Packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uplink_burstsize TemplateLimitPolicy#uplink_burstsize}
  */
  readonly uplinkBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uplink_relaxed TemplateLimitPolicy#uplink_relaxed}
  */
  readonly uplinkRelaxed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uuid TemplateLimitPolicy#uuid}
  */
  readonly uuid?: string;
}

export function templateLimitPolicyLimitPpsToTerraform(struct?: TemplateLimitPolicyLimitPpsOutputReference | TemplateLimitPolicyLimitPps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddos_protection_factor: cdktf.numberToTerraform(struct!.ddosProtectionFactor),
    downlink: cdktf.numberToTerraform(struct!.downlink),
    downlink_burstsize: cdktf.numberToTerraform(struct!.downlinkBurstsize),
    downlink_relaxed: cdktf.numberToTerraform(struct!.downlinkRelaxed),
    total: cdktf.numberToTerraform(struct!.total),
    total_burstsize: cdktf.numberToTerraform(struct!.totalBurstsize),
    total_relaxed: cdktf.numberToTerraform(struct!.totalRelaxed),
    uplink: cdktf.numberToTerraform(struct!.uplink),
    uplink_burstsize: cdktf.numberToTerraform(struct!.uplinkBurstsize),
    uplink_relaxed: cdktf.numberToTerraform(struct!.uplinkRelaxed),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function templateLimitPolicyLimitPpsToHclTerraform(struct?: TemplateLimitPolicyLimitPpsOutputReference | TemplateLimitPolicyLimitPps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddos_protection_factor: {
      value: cdktf.numberToHclTerraform(struct!.ddosProtectionFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink: {
      value: cdktf.numberToHclTerraform(struct!.downlink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_burstsize: {
      value: cdktf.numberToHclTerraform(struct!.downlinkBurstsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_relaxed: {
      value: cdktf.numberToHclTerraform(struct!.downlinkRelaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_burstsize: {
      value: cdktf.numberToHclTerraform(struct!.totalBurstsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_relaxed: {
      value: cdktf.numberToHclTerraform(struct!.totalRelaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink: {
      value: cdktf.numberToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink_burstsize: {
      value: cdktf.numberToHclTerraform(struct!.uplinkBurstsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink_relaxed: {
      value: cdktf.numberToHclTerraform(struct!.uplinkRelaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateLimitPolicyLimitPpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateLimitPolicyLimitPps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddosProtectionFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosProtectionFactor = this._ddosProtectionFactor;
    }
    if (this._downlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlink = this._downlink;
    }
    if (this._downlinkBurstsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkBurstsize = this._downlinkBurstsize;
    }
    if (this._downlinkRelaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkRelaxed = this._downlinkRelaxed;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._totalBurstsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBurstsize = this._totalBurstsize;
    }
    if (this._totalRelaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRelaxed = this._totalRelaxed;
    }
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    if (this._uplinkBurstsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkBurstsize = this._uplinkBurstsize;
    }
    if (this._uplinkRelaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkRelaxed = this._uplinkRelaxed;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateLimitPolicyLimitPps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddosProtectionFactor = undefined;
      this._downlink = undefined;
      this._downlinkBurstsize = undefined;
      this._downlinkRelaxed = undefined;
      this._total = undefined;
      this._totalBurstsize = undefined;
      this._totalRelaxed = undefined;
      this._uplink = undefined;
      this._uplinkBurstsize = undefined;
      this._uplinkRelaxed = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddosProtectionFactor = value.ddosProtectionFactor;
      this._downlink = value.downlink;
      this._downlinkBurstsize = value.downlinkBurstsize;
      this._downlinkRelaxed = value.downlinkRelaxed;
      this._total = value.total;
      this._totalBurstsize = value.totalBurstsize;
      this._totalRelaxed = value.totalRelaxed;
      this._uplink = value.uplink;
      this._uplinkBurstsize = value.uplinkBurstsize;
      this._uplinkRelaxed = value.uplinkRelaxed;
      this._uuid = value.uuid;
    }
  }

  // ddos_protection_factor - computed: false, optional: true, required: false
  private _ddosProtectionFactor?: number; 
  public get ddosProtectionFactor() {
    return this.getNumberAttribute('ddos_protection_factor');
  }
  public set ddosProtectionFactor(value: number) {
    this._ddosProtectionFactor = value;
  }
  public resetDdosProtectionFactor() {
    this._ddosProtectionFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionFactorInput() {
    return this._ddosProtectionFactor;
  }

  // downlink - computed: false, optional: true, required: false
  private _downlink?: number; 
  public get downlink() {
    return this.getNumberAttribute('downlink');
  }
  public set downlink(value: number) {
    this._downlink = value;
  }
  public resetDownlink() {
    this._downlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkInput() {
    return this._downlink;
  }

  // downlink_burstsize - computed: false, optional: true, required: false
  private _downlinkBurstsize?: number; 
  public get downlinkBurstsize() {
    return this.getNumberAttribute('downlink_burstsize');
  }
  public set downlinkBurstsize(value: number) {
    this._downlinkBurstsize = value;
  }
  public resetDownlinkBurstsize() {
    this._downlinkBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkBurstsizeInput() {
    return this._downlinkBurstsize;
  }

  // downlink_relaxed - computed: false, optional: true, required: false
  private _downlinkRelaxed?: number; 
  public get downlinkRelaxed() {
    return this.getNumberAttribute('downlink_relaxed');
  }
  public set downlinkRelaxed(value: number) {
    this._downlinkRelaxed = value;
  }
  public resetDownlinkRelaxed() {
    this._downlinkRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkRelaxedInput() {
    return this._downlinkRelaxed;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // total_burstsize - computed: false, optional: true, required: false
  private _totalBurstsize?: number; 
  public get totalBurstsize() {
    return this.getNumberAttribute('total_burstsize');
  }
  public set totalBurstsize(value: number) {
    this._totalBurstsize = value;
  }
  public resetTotalBurstsize() {
    this._totalBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBurstsizeInput() {
    return this._totalBurstsize;
  }

  // total_relaxed - computed: false, optional: true, required: false
  private _totalRelaxed?: number; 
  public get totalRelaxed() {
    return this.getNumberAttribute('total_relaxed');
  }
  public set totalRelaxed(value: number) {
    this._totalRelaxed = value;
  }
  public resetTotalRelaxed() {
    this._totalRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRelaxedInput() {
    return this._totalRelaxed;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink?: number; 
  public get uplink() {
    return this.getNumberAttribute('uplink');
  }
  public set uplink(value: number) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // uplink_burstsize - computed: false, optional: true, required: false
  private _uplinkBurstsize?: number; 
  public get uplinkBurstsize() {
    return this.getNumberAttribute('uplink_burstsize');
  }
  public set uplinkBurstsize(value: number) {
    this._uplinkBurstsize = value;
  }
  public resetUplinkBurstsize() {
    this._uplinkBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkBurstsizeInput() {
    return this._uplinkBurstsize;
  }

  // uplink_relaxed - computed: false, optional: true, required: false
  private _uplinkRelaxed?: number; 
  public get uplinkRelaxed() {
    return this.getNumberAttribute('uplink_relaxed');
  }
  public set uplinkRelaxed(value: number) {
    this._uplinkRelaxed = value;
  }
  public resetUplinkRelaxed() {
    this._uplinkRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkRelaxedInput() {
    return this._uplinkRelaxed;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface TemplateLimitPolicyLimitThroughput {
  /**
  * Downlink Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#downlink TemplateLimitPolicy#downlink}
  */
  readonly downlink?: number;
  /**
  * Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#downlink_burstsize TemplateLimitPolicy#downlink_burstsize}
  */
  readonly downlinkBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#downlink_relaxed TemplateLimitPolicy#downlink_relaxed}
  */
  readonly downlinkRelaxed?: number;
  /**
  * Total Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#total TemplateLimitPolicy#total}
  */
  readonly total?: number;
  /**
  * Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#total_burstsize TemplateLimitPolicy#total_burstsize}
  */
  readonly totalBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#total_relaxed TemplateLimitPolicy#total_relaxed}
  */
  readonly totalRelaxed?: number;
  /**
  * Uplink Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uplink TemplateLimitPolicy#uplink}
  */
  readonly uplink?: number;
  /**
  * Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uplink_burstsize TemplateLimitPolicy#uplink_burstsize}
  */
  readonly uplinkBurstsize?: number;
  /**
  * Relax the limitation when the policy has more tokens from the parent of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uplink_relaxed TemplateLimitPolicy#uplink_relaxed}
  */
  readonly uplinkRelaxed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#uuid TemplateLimitPolicy#uuid}
  */
  readonly uuid?: string;
}

export function templateLimitPolicyLimitThroughputToTerraform(struct?: TemplateLimitPolicyLimitThroughputOutputReference | TemplateLimitPolicyLimitThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    downlink: cdktf.numberToTerraform(struct!.downlink),
    downlink_burstsize: cdktf.numberToTerraform(struct!.downlinkBurstsize),
    downlink_relaxed: cdktf.numberToTerraform(struct!.downlinkRelaxed),
    total: cdktf.numberToTerraform(struct!.total),
    total_burstsize: cdktf.numberToTerraform(struct!.totalBurstsize),
    total_relaxed: cdktf.numberToTerraform(struct!.totalRelaxed),
    uplink: cdktf.numberToTerraform(struct!.uplink),
    uplink_burstsize: cdktf.numberToTerraform(struct!.uplinkBurstsize),
    uplink_relaxed: cdktf.numberToTerraform(struct!.uplinkRelaxed),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function templateLimitPolicyLimitThroughputToHclTerraform(struct?: TemplateLimitPolicyLimitThroughputOutputReference | TemplateLimitPolicyLimitThroughput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    downlink: {
      value: cdktf.numberToHclTerraform(struct!.downlink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_burstsize: {
      value: cdktf.numberToHclTerraform(struct!.downlinkBurstsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    downlink_relaxed: {
      value: cdktf.numberToHclTerraform(struct!.downlinkRelaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_burstsize: {
      value: cdktf.numberToHclTerraform(struct!.totalBurstsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_relaxed: {
      value: cdktf.numberToHclTerraform(struct!.totalRelaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink: {
      value: cdktf.numberToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink_burstsize: {
      value: cdktf.numberToHclTerraform(struct!.uplinkBurstsize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uplink_relaxed: {
      value: cdktf.numberToHclTerraform(struct!.uplinkRelaxed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateLimitPolicyLimitThroughputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateLimitPolicyLimitThroughput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlink = this._downlink;
    }
    if (this._downlinkBurstsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkBurstsize = this._downlinkBurstsize;
    }
    if (this._downlinkRelaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.downlinkRelaxed = this._downlinkRelaxed;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._totalBurstsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBurstsize = this._totalBurstsize;
    }
    if (this._totalRelaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRelaxed = this._totalRelaxed;
    }
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    if (this._uplinkBurstsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkBurstsize = this._uplinkBurstsize;
    }
    if (this._uplinkRelaxed !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkRelaxed = this._uplinkRelaxed;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateLimitPolicyLimitThroughput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downlink = undefined;
      this._downlinkBurstsize = undefined;
      this._downlinkRelaxed = undefined;
      this._total = undefined;
      this._totalBurstsize = undefined;
      this._totalRelaxed = undefined;
      this._uplink = undefined;
      this._uplinkBurstsize = undefined;
      this._uplinkRelaxed = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downlink = value.downlink;
      this._downlinkBurstsize = value.downlinkBurstsize;
      this._downlinkRelaxed = value.downlinkRelaxed;
      this._total = value.total;
      this._totalBurstsize = value.totalBurstsize;
      this._totalRelaxed = value.totalRelaxed;
      this._uplink = value.uplink;
      this._uplinkBurstsize = value.uplinkBurstsize;
      this._uplinkRelaxed = value.uplinkRelaxed;
      this._uuid = value.uuid;
    }
  }

  // downlink - computed: false, optional: true, required: false
  private _downlink?: number; 
  public get downlink() {
    return this.getNumberAttribute('downlink');
  }
  public set downlink(value: number) {
    this._downlink = value;
  }
  public resetDownlink() {
    this._downlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkInput() {
    return this._downlink;
  }

  // downlink_burstsize - computed: false, optional: true, required: false
  private _downlinkBurstsize?: number; 
  public get downlinkBurstsize() {
    return this.getNumberAttribute('downlink_burstsize');
  }
  public set downlinkBurstsize(value: number) {
    this._downlinkBurstsize = value;
  }
  public resetDownlinkBurstsize() {
    this._downlinkBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkBurstsizeInput() {
    return this._downlinkBurstsize;
  }

  // downlink_relaxed - computed: false, optional: true, required: false
  private _downlinkRelaxed?: number; 
  public get downlinkRelaxed() {
    return this.getNumberAttribute('downlink_relaxed');
  }
  public set downlinkRelaxed(value: number) {
    this._downlinkRelaxed = value;
  }
  public resetDownlinkRelaxed() {
    this._downlinkRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkRelaxedInput() {
    return this._downlinkRelaxed;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // total_burstsize - computed: false, optional: true, required: false
  private _totalBurstsize?: number; 
  public get totalBurstsize() {
    return this.getNumberAttribute('total_burstsize');
  }
  public set totalBurstsize(value: number) {
    this._totalBurstsize = value;
  }
  public resetTotalBurstsize() {
    this._totalBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBurstsizeInput() {
    return this._totalBurstsize;
  }

  // total_relaxed - computed: false, optional: true, required: false
  private _totalRelaxed?: number; 
  public get totalRelaxed() {
    return this.getNumberAttribute('total_relaxed');
  }
  public set totalRelaxed(value: number) {
    this._totalRelaxed = value;
  }
  public resetTotalRelaxed() {
    this._totalRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRelaxedInput() {
    return this._totalRelaxed;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink?: number; 
  public get uplink() {
    return this.getNumberAttribute('uplink');
  }
  public set uplink(value: number) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // uplink_burstsize - computed: false, optional: true, required: false
  private _uplinkBurstsize?: number; 
  public get uplinkBurstsize() {
    return this.getNumberAttribute('uplink_burstsize');
  }
  public set uplinkBurstsize(value: number) {
    this._uplinkBurstsize = value;
  }
  public resetUplinkBurstsize() {
    this._uplinkBurstsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkBurstsizeInput() {
    return this._uplinkBurstsize;
  }

  // uplink_relaxed - computed: false, optional: true, required: false
  private _uplinkRelaxed?: number; 
  public get uplinkRelaxed() {
    return this.getNumberAttribute('uplink_relaxed');
  }
  public set uplinkRelaxed(value: number) {
    this._uplinkRelaxed = value;
  }
  public resetUplinkRelaxed() {
    this._uplinkRelaxed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkRelaxedInput() {
    return this._uplinkRelaxed;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy thunder_template_limit_policy}
*/
export class TemplateLimitPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_limit_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateLimitPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateLimitPolicy to import
  * @param importFromId The id of the existing TemplateLimitPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateLimitPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_limit_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_limit_policy thunder_template_limit_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateLimitPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateLimitPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_limit_policy',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._limitConcurrentSessions = config.limitConcurrentSessions;
    this._limitScope = config.limitScope;
    this._log = config.log;
    this._maxMinFair = config.maxMinFair;
    this._parent = config.parent;
    this._policyNumber = config.policyNumber;
    this._prefixLength = config.prefixLength;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._limitCps.internalValue = config.limitCps;
    this._limitPps.internalValue = config.limitPps;
    this._limitThroughput.internalValue = config.limitThroughput;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // limit_concurrent_sessions - computed: false, optional: true, required: false
  private _limitConcurrentSessions?: number; 
  public get limitConcurrentSessions() {
    return this.getNumberAttribute('limit_concurrent_sessions');
  }
  public set limitConcurrentSessions(value: number) {
    this._limitConcurrentSessions = value;
  }
  public resetLimitConcurrentSessions() {
    this._limitConcurrentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitConcurrentSessionsInput() {
    return this._limitConcurrentSessions;
  }

  // limit_scope - computed: false, optional: true, required: false
  private _limitScope?: string; 
  public get limitScope() {
    return this.getStringAttribute('limit_scope');
  }
  public set limitScope(value: string) {
    this._limitScope = value;
  }
  public resetLimitScope() {
    this._limitScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitScopeInput() {
    return this._limitScope;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // max_min_fair - computed: false, optional: true, required: false
  private _maxMinFair?: number; 
  public get maxMinFair() {
    return this.getNumberAttribute('max_min_fair');
  }
  public set maxMinFair(value: number) {
    this._maxMinFair = value;
  }
  public resetMaxMinFair() {
    this._maxMinFair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMinFairInput() {
    return this._maxMinFair;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: number; 
  public get parent() {
    return this.getNumberAttribute('parent');
  }
  public set parent(value: number) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // policy_number - computed: false, optional: false, required: true
  private _policyNumber?: number; 
  public get policyNumber() {
    return this.getNumberAttribute('policy_number');
  }
  public set policyNumber(value: number) {
    this._policyNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNumberInput() {
    return this._policyNumber;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // limit_cps - computed: false, optional: true, required: false
  private _limitCps = new TemplateLimitPolicyLimitCpsOutputReference(this, "limit_cps");
  public get limitCps() {
    return this._limitCps;
  }
  public putLimitCps(value: TemplateLimitPolicyLimitCps) {
    this._limitCps.internalValue = value;
  }
  public resetLimitCps() {
    this._limitCps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpsInput() {
    return this._limitCps.internalValue;
  }

  // limit_pps - computed: false, optional: true, required: false
  private _limitPps = new TemplateLimitPolicyLimitPpsOutputReference(this, "limit_pps");
  public get limitPps() {
    return this._limitPps;
  }
  public putLimitPps(value: TemplateLimitPolicyLimitPps) {
    this._limitPps.internalValue = value;
  }
  public resetLimitPps() {
    this._limitPps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPpsInput() {
    return this._limitPps.internalValue;
  }

  // limit_throughput - computed: false, optional: true, required: false
  private _limitThroughput = new TemplateLimitPolicyLimitThroughputOutputReference(this, "limit_throughput");
  public get limitThroughput() {
    return this._limitThroughput;
  }
  public putLimitThroughput(value: TemplateLimitPolicyLimitThroughput) {
    this._limitThroughput.internalValue = value;
  }
  public resetLimitThroughput() {
    this._limitThroughput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitThroughputInput() {
    return this._limitThroughput.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit_concurrent_sessions: cdktf.numberToTerraform(this._limitConcurrentSessions),
      limit_scope: cdktf.stringToTerraform(this._limitScope),
      log: cdktf.numberToTerraform(this._log),
      max_min_fair: cdktf.numberToTerraform(this._maxMinFair),
      parent: cdktf.numberToTerraform(this._parent),
      policy_number: cdktf.numberToTerraform(this._policyNumber),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      limit_cps: templateLimitPolicyLimitCpsToTerraform(this._limitCps.internalValue),
      limit_pps: templateLimitPolicyLimitPpsToTerraform(this._limitPps.internalValue),
      limit_throughput: templateLimitPolicyLimitThroughputToTerraform(this._limitThroughput.internalValue),
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
      limit_concurrent_sessions: {
        value: cdktf.numberToHclTerraform(this._limitConcurrentSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_scope: {
        value: cdktf.stringToHclTerraform(this._limitScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.numberToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_min_fair: {
        value: cdktf.numberToHclTerraform(this._maxMinFair),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent: {
        value: cdktf.numberToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_number: {
        value: cdktf.numberToHclTerraform(this._policyNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_cps: {
        value: templateLimitPolicyLimitCpsToHclTerraform(this._limitCps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateLimitPolicyLimitCpsList",
      },
      limit_pps: {
        value: templateLimitPolicyLimitPpsToHclTerraform(this._limitPps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateLimitPolicyLimitPpsList",
      },
      limit_throughput: {
        value: templateLimitPolicyLimitThroughputToHclTerraform(this._limitThroughput.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateLimitPolicyLimitThroughputList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
