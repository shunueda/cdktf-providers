// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallPolicerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policer is filter-specific.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#filter_specific FirewallPolicer#filter_specific}
  */
  readonly filterSpecific?: boolean | cdktf.IResolvable;
  /**
  * Policer uses logical interface bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#logical_bandwidth_policer FirewallPolicer#logical_bandwidth_policer}
  */
  readonly logicalBandwidthPolicer?: boolean | cdktf.IResolvable;
  /**
  * Policer is logical interface policer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#logical_interface_policer FirewallPolicer#logical_interface_policer}
  */
  readonly logicalInterfacePolicer?: boolean | cdktf.IResolvable;
  /**
  * Policer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#name FirewallPolicer#name}
  */
  readonly name: string;
  /**
  * Policer is physical interface policer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#physical_interface_policer FirewallPolicer#physical_interface_policer}
  */
  readonly physicalInterfacePolicer?: boolean | cdktf.IResolvable;
  /**
  * Share policer bandwidth among bundle links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#shared_bandwidth_policer FirewallPolicer#shared_bandwidth_policer}
  */
  readonly sharedBandwidthPolicer?: boolean | cdktf.IResolvable;
  /**
  * if_exceeding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#if_exceeding FirewallPolicer#if_exceeding}
  */
  readonly ifExceeding?: FirewallPolicerIfExceeding;
  /**
  * if_exceeding_pps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#if_exceeding_pps FirewallPolicer#if_exceeding_pps}
  */
  readonly ifExceedingPps?: FirewallPolicerIfExceedingPps;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#then FirewallPolicer#then}
  */
  readonly then?: FirewallPolicerThen;
}
export interface FirewallPolicerIfExceeding {
  /**
  * Bandwidth limit in bits/second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#bandwidth_limit FirewallPolicer#bandwidth_limit}
  */
  readonly bandwidthLimit?: string;
  /**
  * Bandwidth limit in percentage (1..100 percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#bandwidth_percent FirewallPolicer#bandwidth_percent}
  */
  readonly bandwidthPercent?: number;
  /**
  * Burst size limit in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#burst_size_limit FirewallPolicer#burst_size_limit}
  */
  readonly burstSizeLimit?: string;
}

export function firewallPolicerIfExceedingToTerraform(struct?: FirewallPolicerIfExceeding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_limit: cdktf.stringToTerraform(struct!.bandwidthLimit),
    bandwidth_percent: cdktf.numberToTerraform(struct!.bandwidthPercent),
    burst_size_limit: cdktf.stringToTerraform(struct!.burstSizeLimit),
  }
}


export function firewallPolicerIfExceedingToHclTerraform(struct?: FirewallPolicerIfExceeding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_limit: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_percent: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst_size_limit: {
      value: cdktf.stringToHclTerraform(struct!.burstSizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicerIfExceedingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallPolicerIfExceeding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthLimit = this._bandwidthLimit;
    }
    if (this._bandwidthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPercent = this._bandwidthPercent;
    }
    if (this._burstSizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSizeLimit = this._burstSizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicerIfExceeding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthLimit = undefined;
      this._bandwidthPercent = undefined;
      this._burstSizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthLimit = value.bandwidthLimit;
      this._bandwidthPercent = value.bandwidthPercent;
      this._burstSizeLimit = value.burstSizeLimit;
    }
  }

  // bandwidth_limit - computed: false, optional: true, required: false
  private _bandwidthLimit?: string; 
  public get bandwidthLimit() {
    return this.getStringAttribute('bandwidth_limit');
  }
  public set bandwidthLimit(value: string) {
    this._bandwidthLimit = value;
  }
  public resetBandwidthLimit() {
    this._bandwidthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitInput() {
    return this._bandwidthLimit;
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

  // burst_size_limit - computed: false, optional: true, required: false
  private _burstSizeLimit?: string; 
  public get burstSizeLimit() {
    return this.getStringAttribute('burst_size_limit');
  }
  public set burstSizeLimit(value: string) {
    this._burstSizeLimit = value;
  }
  public resetBurstSizeLimit() {
    this._burstSizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeLimitInput() {
    return this._burstSizeLimit;
  }
}
export interface FirewallPolicerIfExceedingPps {
  /**
  * PPS burst size limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#packet_burst FirewallPolicer#packet_burst}
  */
  readonly packetBurst?: string;
  /**
  * PPS limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#pps_limit FirewallPolicer#pps_limit}
  */
  readonly ppsLimit?: string;
}

export function firewallPolicerIfExceedingPpsToTerraform(struct?: FirewallPolicerIfExceedingPps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    packet_burst: cdktf.stringToTerraform(struct!.packetBurst),
    pps_limit: cdktf.stringToTerraform(struct!.ppsLimit),
  }
}


export function firewallPolicerIfExceedingPpsToHclTerraform(struct?: FirewallPolicerIfExceedingPps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    packet_burst: {
      value: cdktf.stringToHclTerraform(struct!.packetBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pps_limit: {
      value: cdktf.stringToHclTerraform(struct!.ppsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicerIfExceedingPpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallPolicerIfExceedingPps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBurst = this._packetBurst;
    }
    if (this._ppsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ppsLimit = this._ppsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicerIfExceedingPps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packetBurst = undefined;
      this._ppsLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packetBurst = value.packetBurst;
      this._ppsLimit = value.ppsLimit;
    }
  }

  // packet_burst - computed: false, optional: true, required: false
  private _packetBurst?: string; 
  public get packetBurst() {
    return this.getStringAttribute('packet_burst');
  }
  public set packetBurst(value: string) {
    this._packetBurst = value;
  }
  public resetPacketBurst() {
    this._packetBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBurstInput() {
    return this._packetBurst;
  }

  // pps_limit - computed: false, optional: true, required: false
  private _ppsLimit?: string; 
  public get ppsLimit() {
    return this.getStringAttribute('pps_limit');
  }
  public set ppsLimit(value: string) {
    this._ppsLimit = value;
  }
  public resetPpsLimit() {
    this._ppsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppsLimitInput() {
    return this._ppsLimit;
  }
}
export interface FirewallPolicerThen {
  /**
  * Discard the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#discard FirewallPolicer#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * Classify packet to forwarding class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#forwarding_class FirewallPolicer#forwarding_class}
  */
  readonly forwardingClass?: string;
  /**
  * Packet's loss priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#loss_priority FirewallPolicer#loss_priority}
  */
  readonly lossPriority?: string;
  /**
  * Discard packets only if both congested and over threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#out_of_profile FirewallPolicer#out_of_profile}
  */
  readonly outOfProfile?: boolean | cdktf.IResolvable;
}

export function firewallPolicerThenToTerraform(struct?: FirewallPolicerThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: cdktf.booleanToTerraform(struct!.discard),
    forwarding_class: cdktf.stringToTerraform(struct!.forwardingClass),
    loss_priority: cdktf.stringToTerraform(struct!.lossPriority),
    out_of_profile: cdktf.booleanToTerraform(struct!.outOfProfile),
  }
}


export function firewallPolicerThenToHclTerraform(struct?: FirewallPolicerThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: cdktf.booleanToHclTerraform(struct!.discard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarding_class: {
      value: cdktf.stringToHclTerraform(struct!.forwardingClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loss_priority: {
      value: cdktf.stringToHclTerraform(struct!.lossPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_of_profile: {
      value: cdktf.booleanToHclTerraform(struct!.outOfProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallPolicerThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallPolicerThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard;
    }
    if (this._forwardingClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass;
    }
    if (this._lossPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.lossPriority = this._lossPriority;
    }
    if (this._outOfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfProfile = this._outOfProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallPolicerThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard = undefined;
      this._forwardingClass = undefined;
      this._lossPriority = undefined;
      this._outOfProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard = value.discard;
      this._forwardingClass = value.forwardingClass;
      this._lossPriority = value.lossPriority;
      this._outOfProfile = value.outOfProfile;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: boolean | cdktf.IResolvable; 
  public get discard() {
    return this.getBooleanAttribute('discard');
  }
  public set discard(value: boolean | cdktf.IResolvable) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
  }

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass?: string; 
  public get forwardingClass() {
    return this.getStringAttribute('forwarding_class');
  }
  public set forwardingClass(value: string) {
    this._forwardingClass = value;
  }
  public resetForwardingClass() {
    this._forwardingClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass;
  }

  // loss_priority - computed: false, optional: true, required: false
  private _lossPriority?: string; 
  public get lossPriority() {
    return this.getStringAttribute('loss_priority');
  }
  public set lossPriority(value: string) {
    this._lossPriority = value;
  }
  public resetLossPriority() {
    this._lossPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lossPriorityInput() {
    return this._lossPriority;
  }

  // out_of_profile - computed: false, optional: true, required: false
  private _outOfProfile?: boolean | cdktf.IResolvable; 
  public get outOfProfile() {
    return this.getBooleanAttribute('out_of_profile');
  }
  public set outOfProfile(value: boolean | cdktf.IResolvable) {
    this._outOfProfile = value;
  }
  public resetOutOfProfile() {
    this._outOfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfProfileInput() {
    return this._outOfProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer junos_firewall_policer}
*/
export class FirewallPolicer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_firewall_policer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallPolicer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallPolicer to import
  * @param importFromId The id of the existing FirewallPolicer that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallPolicer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_firewall_policer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/firewall_policer junos_firewall_policer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallPolicerConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallPolicerConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_firewall_policer',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterSpecific = config.filterSpecific;
    this._logicalBandwidthPolicer = config.logicalBandwidthPolicer;
    this._logicalInterfacePolicer = config.logicalInterfacePolicer;
    this._name = config.name;
    this._physicalInterfacePolicer = config.physicalInterfacePolicer;
    this._sharedBandwidthPolicer = config.sharedBandwidthPolicer;
    this._ifExceeding.internalValue = config.ifExceeding;
    this._ifExceedingPps.internalValue = config.ifExceedingPps;
    this._then.internalValue = config.then;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_specific - computed: false, optional: true, required: false
  private _filterSpecific?: boolean | cdktf.IResolvable; 
  public get filterSpecific() {
    return this.getBooleanAttribute('filter_specific');
  }
  public set filterSpecific(value: boolean | cdktf.IResolvable) {
    this._filterSpecific = value;
  }
  public resetFilterSpecific() {
    this._filterSpecific = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSpecificInput() {
    return this._filterSpecific;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logical_bandwidth_policer - computed: false, optional: true, required: false
  private _logicalBandwidthPolicer?: boolean | cdktf.IResolvable; 
  public get logicalBandwidthPolicer() {
    return this.getBooleanAttribute('logical_bandwidth_policer');
  }
  public set logicalBandwidthPolicer(value: boolean | cdktf.IResolvable) {
    this._logicalBandwidthPolicer = value;
  }
  public resetLogicalBandwidthPolicer() {
    this._logicalBandwidthPolicer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBandwidthPolicerInput() {
    return this._logicalBandwidthPolicer;
  }

  // logical_interface_policer - computed: false, optional: true, required: false
  private _logicalInterfacePolicer?: boolean | cdktf.IResolvable; 
  public get logicalInterfacePolicer() {
    return this.getBooleanAttribute('logical_interface_policer');
  }
  public set logicalInterfacePolicer(value: boolean | cdktf.IResolvable) {
    this._logicalInterfacePolicer = value;
  }
  public resetLogicalInterfacePolicer() {
    this._logicalInterfacePolicer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalInterfacePolicerInput() {
    return this._logicalInterfacePolicer;
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

  // physical_interface_policer - computed: false, optional: true, required: false
  private _physicalInterfacePolicer?: boolean | cdktf.IResolvable; 
  public get physicalInterfacePolicer() {
    return this.getBooleanAttribute('physical_interface_policer');
  }
  public set physicalInterfacePolicer(value: boolean | cdktf.IResolvable) {
    this._physicalInterfacePolicer = value;
  }
  public resetPhysicalInterfacePolicer() {
    this._physicalInterfacePolicer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalInterfacePolicerInput() {
    return this._physicalInterfacePolicer;
  }

  // shared_bandwidth_policer - computed: false, optional: true, required: false
  private _sharedBandwidthPolicer?: boolean | cdktf.IResolvable; 
  public get sharedBandwidthPolicer() {
    return this.getBooleanAttribute('shared_bandwidth_policer');
  }
  public set sharedBandwidthPolicer(value: boolean | cdktf.IResolvable) {
    this._sharedBandwidthPolicer = value;
  }
  public resetSharedBandwidthPolicer() {
    this._sharedBandwidthPolicer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBandwidthPolicerInput() {
    return this._sharedBandwidthPolicer;
  }

  // if_exceeding - computed: false, optional: true, required: false
  private _ifExceeding = new FirewallPolicerIfExceedingOutputReference(this, "if_exceeding");
  public get ifExceeding() {
    return this._ifExceeding;
  }
  public putIfExceeding(value: FirewallPolicerIfExceeding) {
    this._ifExceeding.internalValue = value;
  }
  public resetIfExceeding() {
    this._ifExceeding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifExceedingInput() {
    return this._ifExceeding.internalValue;
  }

  // if_exceeding_pps - computed: false, optional: true, required: false
  private _ifExceedingPps = new FirewallPolicerIfExceedingPpsOutputReference(this, "if_exceeding_pps");
  public get ifExceedingPps() {
    return this._ifExceedingPps;
  }
  public putIfExceedingPps(value: FirewallPolicerIfExceedingPps) {
    this._ifExceedingPps.internalValue = value;
  }
  public resetIfExceedingPps() {
    this._ifExceedingPps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifExceedingPpsInput() {
    return this._ifExceedingPps.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new FirewallPolicerThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: FirewallPolicerThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_specific: cdktf.booleanToTerraform(this._filterSpecific),
      logical_bandwidth_policer: cdktf.booleanToTerraform(this._logicalBandwidthPolicer),
      logical_interface_policer: cdktf.booleanToTerraform(this._logicalInterfacePolicer),
      name: cdktf.stringToTerraform(this._name),
      physical_interface_policer: cdktf.booleanToTerraform(this._physicalInterfacePolicer),
      shared_bandwidth_policer: cdktf.booleanToTerraform(this._sharedBandwidthPolicer),
      if_exceeding: firewallPolicerIfExceedingToTerraform(this._ifExceeding.internalValue),
      if_exceeding_pps: firewallPolicerIfExceedingPpsToTerraform(this._ifExceedingPps.internalValue),
      then: firewallPolicerThenToTerraform(this._then.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_specific: {
        value: cdktf.booleanToHclTerraform(this._filterSpecific),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logical_bandwidth_policer: {
        value: cdktf.booleanToHclTerraform(this._logicalBandwidthPolicer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logical_interface_policer: {
        value: cdktf.booleanToHclTerraform(this._logicalInterfacePolicer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      physical_interface_policer: {
        value: cdktf.booleanToHclTerraform(this._physicalInterfacePolicer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_bandwidth_policer: {
        value: cdktf.booleanToHclTerraform(this._sharedBandwidthPolicer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      if_exceeding: {
        value: firewallPolicerIfExceedingToHclTerraform(this._ifExceeding.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallPolicerIfExceeding",
      },
      if_exceeding_pps: {
        value: firewallPolicerIfExceedingPpsToHclTerraform(this._ifExceedingPps.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallPolicerIfExceedingPps",
      },
      then: {
        value: firewallPolicerThenToHclTerraform(this._then.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallPolicerThen",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
