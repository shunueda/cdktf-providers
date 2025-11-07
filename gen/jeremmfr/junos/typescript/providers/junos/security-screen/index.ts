// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityScreenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Do not drop packet, only generate alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#alarm_without_drop SecurityScreen#alarm_without_drop}
  */
  readonly alarmWithoutDrop?: boolean | cdktf.IResolvable;
  /**
  * Text description of screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#description SecurityScreen#description}
  */
  readonly description?: string;
  /**
  * The name of screen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#name SecurityScreen#name}
  */
  readonly name: string;
  /**
  * aggregation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#aggregation SecurityScreen#aggregation}
  */
  readonly aggregation?: SecurityScreenAggregation;
  /**
  * icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#icmp SecurityScreen#icmp}
  */
  readonly icmp?: SecurityScreenIcmp;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ip SecurityScreen#ip}
  */
  readonly ip?: SecurityScreenIp;
  /**
  * limit_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#limit_session SecurityScreen#limit_session}
  */
  readonly limitSession?: SecurityScreenLimitSession;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#tcp SecurityScreen#tcp}
  */
  readonly tcp?: SecurityScreenTcp;
  /**
  * udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#udp SecurityScreen#udp}
  */
  readonly udp?: SecurityScreenUdp;
}
export interface SecurityScreenAggregation {
  /**
  * Destination IPV4 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#destination_prefix_mask SecurityScreen#destination_prefix_mask}
  */
  readonly destinationPrefixMask?: number;
  /**
  * Destination IPV6 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#destination_prefix_v6_mask SecurityScreen#destination_prefix_v6_mask}
  */
  readonly destinationPrefixV6Mask?: number;
  /**
  * Source IPV4 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#source_prefix_mask SecurityScreen#source_prefix_mask}
  */
  readonly sourcePrefixMask?: number;
  /**
  * Source IPV6 prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#source_prefix_v6_mask SecurityScreen#source_prefix_v6_mask}
  */
  readonly sourcePrefixV6Mask?: number;
}

export function securityScreenAggregationToTerraform(struct?: SecurityScreenAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_prefix_mask: cdktf.numberToTerraform(struct!.destinationPrefixMask),
    destination_prefix_v6_mask: cdktf.numberToTerraform(struct!.destinationPrefixV6Mask),
    source_prefix_mask: cdktf.numberToTerraform(struct!.sourcePrefixMask),
    source_prefix_v6_mask: cdktf.numberToTerraform(struct!.sourcePrefixV6Mask),
  }
}


export function securityScreenAggregationToHclTerraform(struct?: SecurityScreenAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_prefix_mask: {
      value: cdktf.numberToHclTerraform(struct!.destinationPrefixMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_prefix_v6_mask: {
      value: cdktf.numberToHclTerraform(struct!.destinationPrefixV6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_prefix_mask: {
      value: cdktf.numberToHclTerraform(struct!.sourcePrefixMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_prefix_v6_mask: {
      value: cdktf.numberToHclTerraform(struct!.sourcePrefixV6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenAggregation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationPrefixMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixMask = this._destinationPrefixMask;
    }
    if (this._destinationPrefixV6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixV6Mask = this._destinationPrefixV6Mask;
    }
    if (this._sourcePrefixMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixMask = this._sourcePrefixMask;
    }
    if (this._sourcePrefixV6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixV6Mask = this._sourcePrefixV6Mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenAggregation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationPrefixMask = undefined;
      this._destinationPrefixV6Mask = undefined;
      this._sourcePrefixMask = undefined;
      this._sourcePrefixV6Mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationPrefixMask = value.destinationPrefixMask;
      this._destinationPrefixV6Mask = value.destinationPrefixV6Mask;
      this._sourcePrefixMask = value.sourcePrefixMask;
      this._sourcePrefixV6Mask = value.sourcePrefixV6Mask;
    }
  }

  // destination_prefix_mask - computed: false, optional: true, required: false
  private _destinationPrefixMask?: number; 
  public get destinationPrefixMask() {
    return this.getNumberAttribute('destination_prefix_mask');
  }
  public set destinationPrefixMask(value: number) {
    this._destinationPrefixMask = value;
  }
  public resetDestinationPrefixMask() {
    this._destinationPrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixMaskInput() {
    return this._destinationPrefixMask;
  }

  // destination_prefix_v6_mask - computed: false, optional: true, required: false
  private _destinationPrefixV6Mask?: number; 
  public get destinationPrefixV6Mask() {
    return this.getNumberAttribute('destination_prefix_v6_mask');
  }
  public set destinationPrefixV6Mask(value: number) {
    this._destinationPrefixV6Mask = value;
  }
  public resetDestinationPrefixV6Mask() {
    this._destinationPrefixV6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixV6MaskInput() {
    return this._destinationPrefixV6Mask;
  }

  // source_prefix_mask - computed: false, optional: true, required: false
  private _sourcePrefixMask?: number; 
  public get sourcePrefixMask() {
    return this.getNumberAttribute('source_prefix_mask');
  }
  public set sourcePrefixMask(value: number) {
    this._sourcePrefixMask = value;
  }
  public resetSourcePrefixMask() {
    this._sourcePrefixMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixMaskInput() {
    return this._sourcePrefixMask;
  }

  // source_prefix_v6_mask - computed: false, optional: true, required: false
  private _sourcePrefixV6Mask?: number; 
  public get sourcePrefixV6Mask() {
    return this.getNumberAttribute('source_prefix_v6_mask');
  }
  public set sourcePrefixV6Mask(value: number) {
    this._sourcePrefixV6Mask = value;
  }
  public resetSourcePrefixV6Mask() {
    this._sourcePrefixV6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixV6MaskInput() {
    return this._sourcePrefixV6Mask;
  }
}
export interface SecurityScreenIcmpFlood {
  /**
  * Threshold (ICMP packets per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
}

export function securityScreenIcmpFloodToTerraform(struct?: SecurityScreenIcmpFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityScreenIcmpFloodToHclTerraform(struct?: SecurityScreenIcmpFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIcmpFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIcmpFlood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIcmpFlood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityScreenIcmpSweep {
  /**
  * Threshold (microseconds in which 10 ICMP packets are detected).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
}

export function securityScreenIcmpSweepToTerraform(struct?: SecurityScreenIcmpSweep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityScreenIcmpSweepToHclTerraform(struct?: SecurityScreenIcmpSweep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIcmpSweepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIcmpSweep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIcmpSweep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityScreenIcmp {
  /**
  * Enable ICMP fragment ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#fragment SecurityScreen#fragment}
  */
  readonly fragment?: boolean | cdktf.IResolvable;
  /**
  * Enable ICMPv6 malformed ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#icmpv6_malformed SecurityScreen#icmpv6_malformed}
  */
  readonly icmpv6Malformed?: boolean | cdktf.IResolvable;
  /**
  * Enable large ICMP packet (size > 1024) ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#large SecurityScreen#large}
  */
  readonly large?: boolean | cdktf.IResolvable;
  /**
  * Enable ping of death ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ping_death SecurityScreen#ping_death}
  */
  readonly pingDeath?: boolean | cdktf.IResolvable;
  /**
  * flood block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#flood SecurityScreen#flood}
  */
  readonly flood?: SecurityScreenIcmpFlood;
  /**
  * sweep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#sweep SecurityScreen#sweep}
  */
  readonly sweep?: SecurityScreenIcmpSweep;
}

export function securityScreenIcmpToTerraform(struct?: SecurityScreenIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fragment: cdktf.booleanToTerraform(struct!.fragment),
    icmpv6_malformed: cdktf.booleanToTerraform(struct!.icmpv6Malformed),
    large: cdktf.booleanToTerraform(struct!.large),
    ping_death: cdktf.booleanToTerraform(struct!.pingDeath),
    flood: securityScreenIcmpFloodToTerraform(struct!.flood),
    sweep: securityScreenIcmpSweepToTerraform(struct!.sweep),
  }
}


export function securityScreenIcmpToHclTerraform(struct?: SecurityScreenIcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fragment: {
      value: cdktf.booleanToHclTerraform(struct!.fragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    icmpv6_malformed: {
      value: cdktf.booleanToHclTerraform(struct!.icmpv6Malformed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    large: {
      value: cdktf.booleanToHclTerraform(struct!.large),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping_death: {
      value: cdktf.booleanToHclTerraform(struct!.pingDeath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flood: {
      value: securityScreenIcmpFloodToHclTerraform(struct!.flood),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIcmpFlood",
    },
    sweep: {
      value: securityScreenIcmpSweepToHclTerraform(struct!.sweep),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIcmpSweep",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragment = this._fragment;
    }
    if (this._icmpv6Malformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6Malformed = this._icmpv6Malformed;
    }
    if (this._large !== undefined) {
      hasAnyValues = true;
      internalValueResult.large = this._large;
    }
    if (this._pingDeath !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingDeath = this._pingDeath;
    }
    if (this._flood?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flood = this._flood?.internalValue;
    }
    if (this._sweep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sweep = this._sweep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fragment = undefined;
      this._icmpv6Malformed = undefined;
      this._large = undefined;
      this._pingDeath = undefined;
      this._flood.internalValue = undefined;
      this._sweep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fragment = value.fragment;
      this._icmpv6Malformed = value.icmpv6Malformed;
      this._large = value.large;
      this._pingDeath = value.pingDeath;
      this._flood.internalValue = value.flood;
      this._sweep.internalValue = value.sweep;
    }
  }

  // fragment - computed: false, optional: true, required: false
  private _fragment?: boolean | cdktf.IResolvable; 
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }
  public set fragment(value: boolean | cdktf.IResolvable) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
  }

  // icmpv6_malformed - computed: false, optional: true, required: false
  private _icmpv6Malformed?: boolean | cdktf.IResolvable; 
  public get icmpv6Malformed() {
    return this.getBooleanAttribute('icmpv6_malformed');
  }
  public set icmpv6Malformed(value: boolean | cdktf.IResolvable) {
    this._icmpv6Malformed = value;
  }
  public resetIcmpv6Malformed() {
    this._icmpv6Malformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6MalformedInput() {
    return this._icmpv6Malformed;
  }

  // large - computed: false, optional: true, required: false
  private _large?: boolean | cdktf.IResolvable; 
  public get large() {
    return this.getBooleanAttribute('large');
  }
  public set large(value: boolean | cdktf.IResolvable) {
    this._large = value;
  }
  public resetLarge() {
    this._large = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large;
  }

  // ping_death - computed: false, optional: true, required: false
  private _pingDeath?: boolean | cdktf.IResolvable; 
  public get pingDeath() {
    return this.getBooleanAttribute('ping_death');
  }
  public set pingDeath(value: boolean | cdktf.IResolvable) {
    this._pingDeath = value;
  }
  public resetPingDeath() {
    this._pingDeath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingDeathInput() {
    return this._pingDeath;
  }

  // flood - computed: false, optional: true, required: false
  private _flood = new SecurityScreenIcmpFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }
  public putFlood(value: SecurityScreenIcmpFlood) {
    this._flood.internalValue = value;
  }
  public resetFlood() {
    this._flood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInput() {
    return this._flood.internalValue;
  }

  // sweep - computed: false, optional: true, required: false
  private _sweep = new SecurityScreenIcmpSweepOutputReference(this, "sweep");
  public get sweep() {
    return this._sweep;
  }
  public putSweep(value: SecurityScreenIcmpSweep) {
    this._sweep.internalValue = value;
  }
  public resetSweep() {
    this._sweep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sweepInput() {
    return this._sweep.internalValue;
  }
}
export interface SecurityScreenIpIpv6ExtensionHeaderDestinationHeader {
  /**
  * Enable home address option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#home_address_option SecurityScreen#home_address_option}
  */
  readonly homeAddressOption?: boolean | cdktf.IResolvable;
  /**
  * Enable Identifier-Locator Network Protocol Nonce option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ilnp_nonce_option SecurityScreen#ilnp_nonce_option}
  */
  readonly ilnpNonceOption?: boolean | cdktf.IResolvable;
  /**
  * Enable line identification option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#line_identification_option SecurityScreen#line_identification_option}
  */
  readonly lineIdentificationOption?: boolean | cdktf.IResolvable;
  /**
  * Enable tunnel encapsulation limit option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#tunnel_encapsulation_limit_option SecurityScreen#tunnel_encapsulation_limit_option}
  */
  readonly tunnelEncapsulationLimitOption?: boolean | cdktf.IResolvable;
  /**
  * User-defined option type range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#user_defined_option_type SecurityScreen#user_defined_option_type}
  */
  readonly userDefinedOptionType?: string[];
}

export function securityScreenIpIpv6ExtensionHeaderDestinationHeaderToTerraform(struct?: SecurityScreenIpIpv6ExtensionHeaderDestinationHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    home_address_option: cdktf.booleanToTerraform(struct!.homeAddressOption),
    ilnp_nonce_option: cdktf.booleanToTerraform(struct!.ilnpNonceOption),
    line_identification_option: cdktf.booleanToTerraform(struct!.lineIdentificationOption),
    tunnel_encapsulation_limit_option: cdktf.booleanToTerraform(struct!.tunnelEncapsulationLimitOption),
    user_defined_option_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userDefinedOptionType),
  }
}


export function securityScreenIpIpv6ExtensionHeaderDestinationHeaderToHclTerraform(struct?: SecurityScreenIpIpv6ExtensionHeaderDestinationHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    home_address_option: {
      value: cdktf.booleanToHclTerraform(struct!.homeAddressOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ilnp_nonce_option: {
      value: cdktf.booleanToHclTerraform(struct!.ilnpNonceOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    line_identification_option: {
      value: cdktf.booleanToHclTerraform(struct!.lineIdentificationOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tunnel_encapsulation_limit_option: {
      value: cdktf.booleanToHclTerraform(struct!.tunnelEncapsulationLimitOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined_option_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userDefinedOptionType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIpIpv6ExtensionHeaderDestinationHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIpIpv6ExtensionHeaderDestinationHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homeAddressOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeAddressOption = this._homeAddressOption;
    }
    if (this._ilnpNonceOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilnpNonceOption = this._ilnpNonceOption;
    }
    if (this._lineIdentificationOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineIdentificationOption = this._lineIdentificationOption;
    }
    if (this._tunnelEncapsulationLimitOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEncapsulationLimitOption = this._tunnelEncapsulationLimitOption;
    }
    if (this._userDefinedOptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedOptionType = this._userDefinedOptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIpIpv6ExtensionHeaderDestinationHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._homeAddressOption = undefined;
      this._ilnpNonceOption = undefined;
      this._lineIdentificationOption = undefined;
      this._tunnelEncapsulationLimitOption = undefined;
      this._userDefinedOptionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._homeAddressOption = value.homeAddressOption;
      this._ilnpNonceOption = value.ilnpNonceOption;
      this._lineIdentificationOption = value.lineIdentificationOption;
      this._tunnelEncapsulationLimitOption = value.tunnelEncapsulationLimitOption;
      this._userDefinedOptionType = value.userDefinedOptionType;
    }
  }

  // home_address_option - computed: false, optional: true, required: false
  private _homeAddressOption?: boolean | cdktf.IResolvable; 
  public get homeAddressOption() {
    return this.getBooleanAttribute('home_address_option');
  }
  public set homeAddressOption(value: boolean | cdktf.IResolvable) {
    this._homeAddressOption = value;
  }
  public resetHomeAddressOption() {
    this._homeAddressOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeAddressOptionInput() {
    return this._homeAddressOption;
  }

  // ilnp_nonce_option - computed: false, optional: true, required: false
  private _ilnpNonceOption?: boolean | cdktf.IResolvable; 
  public get ilnpNonceOption() {
    return this.getBooleanAttribute('ilnp_nonce_option');
  }
  public set ilnpNonceOption(value: boolean | cdktf.IResolvable) {
    this._ilnpNonceOption = value;
  }
  public resetIlnpNonceOption() {
    this._ilnpNonceOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilnpNonceOptionInput() {
    return this._ilnpNonceOption;
  }

  // line_identification_option - computed: false, optional: true, required: false
  private _lineIdentificationOption?: boolean | cdktf.IResolvable; 
  public get lineIdentificationOption() {
    return this.getBooleanAttribute('line_identification_option');
  }
  public set lineIdentificationOption(value: boolean | cdktf.IResolvable) {
    this._lineIdentificationOption = value;
  }
  public resetLineIdentificationOption() {
    this._lineIdentificationOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineIdentificationOptionInput() {
    return this._lineIdentificationOption;
  }

  // tunnel_encapsulation_limit_option - computed: false, optional: true, required: false
  private _tunnelEncapsulationLimitOption?: boolean | cdktf.IResolvable; 
  public get tunnelEncapsulationLimitOption() {
    return this.getBooleanAttribute('tunnel_encapsulation_limit_option');
  }
  public set tunnelEncapsulationLimitOption(value: boolean | cdktf.IResolvable) {
    this._tunnelEncapsulationLimitOption = value;
  }
  public resetTunnelEncapsulationLimitOption() {
    this._tunnelEncapsulationLimitOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncapsulationLimitOptionInput() {
    return this._tunnelEncapsulationLimitOption;
  }

  // user_defined_option_type - computed: false, optional: true, required: false
  private _userDefinedOptionType?: string[]; 
  public get userDefinedOptionType() {
    return this.getListAttribute('user_defined_option_type');
  }
  public set userDefinedOptionType(value: string[]) {
    this._userDefinedOptionType = value;
  }
  public resetUserDefinedOptionType() {
    this._userDefinedOptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedOptionTypeInput() {
    return this._userDefinedOptionType;
  }
}
export interface SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader {
  /**
  * Enable Common Architecture Label IPv6 Security Option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#calipso_option SecurityScreen#calipso_option}
  */
  readonly calipsoOption?: boolean | cdktf.IResolvable;
  /**
  * Enable jumbo payload option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#jumbo_payload_option SecurityScreen#jumbo_payload_option}
  */
  readonly jumboPayloadOption?: boolean | cdktf.IResolvable;
  /**
  * Enable quick start option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#quick_start_option SecurityScreen#quick_start_option}
  */
  readonly quickStartOption?: boolean | cdktf.IResolvable;
  /**
  * Enable router alert option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#router_alert_option SecurityScreen#router_alert_option}
  */
  readonly routerAlertOption?: boolean | cdktf.IResolvable;
  /**
  * nable Routing Protocol for Low-power and Lossy networks option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#rpl_option SecurityScreen#rpl_option}
  */
  readonly rplOption?: boolean | cdktf.IResolvable;
  /**
  * Enable Simplified Multicast Forwarding ipv6 Duplicate Packet Detection option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#smf_dpd_option SecurityScreen#smf_dpd_option}
  */
  readonly smfDpdOption?: boolean | cdktf.IResolvable;
  /**
  * User-defined option type range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#user_defined_option_type SecurityScreen#user_defined_option_type}
  */
  readonly userDefinedOptionType?: string[];
}

export function securityScreenIpIpv6ExtensionHeaderHopByHopHeaderToTerraform(struct?: SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    calipso_option: cdktf.booleanToTerraform(struct!.calipsoOption),
    jumbo_payload_option: cdktf.booleanToTerraform(struct!.jumboPayloadOption),
    quick_start_option: cdktf.booleanToTerraform(struct!.quickStartOption),
    router_alert_option: cdktf.booleanToTerraform(struct!.routerAlertOption),
    rpl_option: cdktf.booleanToTerraform(struct!.rplOption),
    smf_dpd_option: cdktf.booleanToTerraform(struct!.smfDpdOption),
    user_defined_option_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userDefinedOptionType),
  }
}


export function securityScreenIpIpv6ExtensionHeaderHopByHopHeaderToHclTerraform(struct?: SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    calipso_option: {
      value: cdktf.booleanToHclTerraform(struct!.calipsoOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jumbo_payload_option: {
      value: cdktf.booleanToHclTerraform(struct!.jumboPayloadOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quick_start_option: {
      value: cdktf.booleanToHclTerraform(struct!.quickStartOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router_alert_option: {
      value: cdktf.booleanToHclTerraform(struct!.routerAlertOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rpl_option: {
      value: cdktf.booleanToHclTerraform(struct!.rplOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smf_dpd_option: {
      value: cdktf.booleanToHclTerraform(struct!.smfDpdOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined_option_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userDefinedOptionType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIpIpv6ExtensionHeaderHopByHopHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._calipsoOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.calipsoOption = this._calipsoOption;
    }
    if (this._jumboPayloadOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboPayloadOption = this._jumboPayloadOption;
    }
    if (this._quickStartOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickStartOption = this._quickStartOption;
    }
    if (this._routerAlertOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAlertOption = this._routerAlertOption;
    }
    if (this._rplOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.rplOption = this._rplOption;
    }
    if (this._smfDpdOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.smfDpdOption = this._smfDpdOption;
    }
    if (this._userDefinedOptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedOptionType = this._userDefinedOptionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._calipsoOption = undefined;
      this._jumboPayloadOption = undefined;
      this._quickStartOption = undefined;
      this._routerAlertOption = undefined;
      this._rplOption = undefined;
      this._smfDpdOption = undefined;
      this._userDefinedOptionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._calipsoOption = value.calipsoOption;
      this._jumboPayloadOption = value.jumboPayloadOption;
      this._quickStartOption = value.quickStartOption;
      this._routerAlertOption = value.routerAlertOption;
      this._rplOption = value.rplOption;
      this._smfDpdOption = value.smfDpdOption;
      this._userDefinedOptionType = value.userDefinedOptionType;
    }
  }

  // calipso_option - computed: false, optional: true, required: false
  private _calipsoOption?: boolean | cdktf.IResolvable; 
  public get calipsoOption() {
    return this.getBooleanAttribute('calipso_option');
  }
  public set calipsoOption(value: boolean | cdktf.IResolvable) {
    this._calipsoOption = value;
  }
  public resetCalipsoOption() {
    this._calipsoOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calipsoOptionInput() {
    return this._calipsoOption;
  }

  // jumbo_payload_option - computed: false, optional: true, required: false
  private _jumboPayloadOption?: boolean | cdktf.IResolvable; 
  public get jumboPayloadOption() {
    return this.getBooleanAttribute('jumbo_payload_option');
  }
  public set jumboPayloadOption(value: boolean | cdktf.IResolvable) {
    this._jumboPayloadOption = value;
  }
  public resetJumboPayloadOption() {
    this._jumboPayloadOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboPayloadOptionInput() {
    return this._jumboPayloadOption;
  }

  // quick_start_option - computed: false, optional: true, required: false
  private _quickStartOption?: boolean | cdktf.IResolvable; 
  public get quickStartOption() {
    return this.getBooleanAttribute('quick_start_option');
  }
  public set quickStartOption(value: boolean | cdktf.IResolvable) {
    this._quickStartOption = value;
  }
  public resetQuickStartOption() {
    this._quickStartOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickStartOptionInput() {
    return this._quickStartOption;
  }

  // router_alert_option - computed: false, optional: true, required: false
  private _routerAlertOption?: boolean | cdktf.IResolvable; 
  public get routerAlertOption() {
    return this.getBooleanAttribute('router_alert_option');
  }
  public set routerAlertOption(value: boolean | cdktf.IResolvable) {
    this._routerAlertOption = value;
  }
  public resetRouterAlertOption() {
    this._routerAlertOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAlertOptionInput() {
    return this._routerAlertOption;
  }

  // rpl_option - computed: false, optional: true, required: false
  private _rplOption?: boolean | cdktf.IResolvable; 
  public get rplOption() {
    return this.getBooleanAttribute('rpl_option');
  }
  public set rplOption(value: boolean | cdktf.IResolvable) {
    this._rplOption = value;
  }
  public resetRplOption() {
    this._rplOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rplOptionInput() {
    return this._rplOption;
  }

  // smf_dpd_option - computed: false, optional: true, required: false
  private _smfDpdOption?: boolean | cdktf.IResolvable; 
  public get smfDpdOption() {
    return this.getBooleanAttribute('smf_dpd_option');
  }
  public set smfDpdOption(value: boolean | cdktf.IResolvable) {
    this._smfDpdOption = value;
  }
  public resetSmfDpdOption() {
    this._smfDpdOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smfDpdOptionInput() {
    return this._smfDpdOption;
  }

  // user_defined_option_type - computed: false, optional: true, required: false
  private _userDefinedOptionType?: string[]; 
  public get userDefinedOptionType() {
    return this.getListAttribute('user_defined_option_type');
  }
  public set userDefinedOptionType(value: string[]) {
    this._userDefinedOptionType = value;
  }
  public resetUserDefinedOptionType() {
    this._userDefinedOptionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedOptionTypeInput() {
    return this._userDefinedOptionType;
  }
}
export interface SecurityScreenIpIpv6ExtensionHeader {
  /**
  * Enable IPv6 Authentication Header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ah_header SecurityScreen#ah_header}
  */
  readonly ahHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 Encapsulating Security Payload header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#esp_header SecurityScreen#esp_header}
  */
  readonly espHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 fragment header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#fragment_header SecurityScreen#fragment_header}
  */
  readonly fragmentHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 Host Identify Protocol header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#hip_header SecurityScreen#hip_header}
  */
  readonly hipHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 mobility header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#mobility_header SecurityScreen#mobility_header}
  */
  readonly mobilityHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 no next header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#no_next_header SecurityScreen#no_next_header}
  */
  readonly noNextHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 routing header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#routing_header SecurityScreen#routing_header}
  */
  readonly routingHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 shim header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#shim6_header SecurityScreen#shim6_header}
  */
  readonly shim6Header?: boolean | cdktf.IResolvable;
  /**
  * User-defined header type range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#user_defined_header_type SecurityScreen#user_defined_header_type}
  */
  readonly userDefinedHeaderType?: string[];
  /**
  * destination_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#destination_header SecurityScreen#destination_header}
  */
  readonly destinationHeader?: SecurityScreenIpIpv6ExtensionHeaderDestinationHeader;
  /**
  * hop_by_hop_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#hop_by_hop_header SecurityScreen#hop_by_hop_header}
  */
  readonly hopByHopHeader?: SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader;
}

export function securityScreenIpIpv6ExtensionHeaderToTerraform(struct?: SecurityScreenIpIpv6ExtensionHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ah_header: cdktf.booleanToTerraform(struct!.ahHeader),
    esp_header: cdktf.booleanToTerraform(struct!.espHeader),
    fragment_header: cdktf.booleanToTerraform(struct!.fragmentHeader),
    hip_header: cdktf.booleanToTerraform(struct!.hipHeader),
    mobility_header: cdktf.booleanToTerraform(struct!.mobilityHeader),
    no_next_header: cdktf.booleanToTerraform(struct!.noNextHeader),
    routing_header: cdktf.booleanToTerraform(struct!.routingHeader),
    shim6_header: cdktf.booleanToTerraform(struct!.shim6Header),
    user_defined_header_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userDefinedHeaderType),
    destination_header: securityScreenIpIpv6ExtensionHeaderDestinationHeaderToTerraform(struct!.destinationHeader),
    hop_by_hop_header: securityScreenIpIpv6ExtensionHeaderHopByHopHeaderToTerraform(struct!.hopByHopHeader),
  }
}


export function securityScreenIpIpv6ExtensionHeaderToHclTerraform(struct?: SecurityScreenIpIpv6ExtensionHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ah_header: {
      value: cdktf.booleanToHclTerraform(struct!.ahHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    esp_header: {
      value: cdktf.booleanToHclTerraform(struct!.espHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fragment_header: {
      value: cdktf.booleanToHclTerraform(struct!.fragmentHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hip_header: {
      value: cdktf.booleanToHclTerraform(struct!.hipHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobility_header: {
      value: cdktf.booleanToHclTerraform(struct!.mobilityHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_next_header: {
      value: cdktf.booleanToHclTerraform(struct!.noNextHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    routing_header: {
      value: cdktf.booleanToHclTerraform(struct!.routingHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shim6_header: {
      value: cdktf.booleanToHclTerraform(struct!.shim6Header),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_defined_header_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userDefinedHeaderType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_header: {
      value: securityScreenIpIpv6ExtensionHeaderDestinationHeaderToHclTerraform(struct!.destinationHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIpIpv6ExtensionHeaderDestinationHeader",
    },
    hop_by_hop_header: {
      value: securityScreenIpIpv6ExtensionHeaderHopByHopHeaderToHclTerraform(struct!.hopByHopHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIpIpv6ExtensionHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIpIpv6ExtensionHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ahHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ahHeader = this._ahHeader;
    }
    if (this._espHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.espHeader = this._espHeader;
    }
    if (this._fragmentHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentHeader = this._fragmentHeader;
    }
    if (this._hipHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hipHeader = this._hipHeader;
    }
    if (this._mobilityHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilityHeader = this._mobilityHeader;
    }
    if (this._noNextHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNextHeader = this._noNextHeader;
    }
    if (this._routingHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingHeader = this._routingHeader;
    }
    if (this._shim6Header !== undefined) {
      hasAnyValues = true;
      internalValueResult.shim6Header = this._shim6Header;
    }
    if (this._userDefinedHeaderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefinedHeaderType = this._userDefinedHeaderType;
    }
    if (this._destinationHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHeader = this._destinationHeader?.internalValue;
    }
    if (this._hopByHopHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hopByHopHeader = this._hopByHopHeader?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIpIpv6ExtensionHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ahHeader = undefined;
      this._espHeader = undefined;
      this._fragmentHeader = undefined;
      this._hipHeader = undefined;
      this._mobilityHeader = undefined;
      this._noNextHeader = undefined;
      this._routingHeader = undefined;
      this._shim6Header = undefined;
      this._userDefinedHeaderType = undefined;
      this._destinationHeader.internalValue = undefined;
      this._hopByHopHeader.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ahHeader = value.ahHeader;
      this._espHeader = value.espHeader;
      this._fragmentHeader = value.fragmentHeader;
      this._hipHeader = value.hipHeader;
      this._mobilityHeader = value.mobilityHeader;
      this._noNextHeader = value.noNextHeader;
      this._routingHeader = value.routingHeader;
      this._shim6Header = value.shim6Header;
      this._userDefinedHeaderType = value.userDefinedHeaderType;
      this._destinationHeader.internalValue = value.destinationHeader;
      this._hopByHopHeader.internalValue = value.hopByHopHeader;
    }
  }

  // ah_header - computed: false, optional: true, required: false
  private _ahHeader?: boolean | cdktf.IResolvable; 
  public get ahHeader() {
    return this.getBooleanAttribute('ah_header');
  }
  public set ahHeader(value: boolean | cdktf.IResolvable) {
    this._ahHeader = value;
  }
  public resetAhHeader() {
    this._ahHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahHeaderInput() {
    return this._ahHeader;
  }

  // esp_header - computed: false, optional: true, required: false
  private _espHeader?: boolean | cdktf.IResolvable; 
  public get espHeader() {
    return this.getBooleanAttribute('esp_header');
  }
  public set espHeader(value: boolean | cdktf.IResolvable) {
    this._espHeader = value;
  }
  public resetEspHeader() {
    this._espHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espHeaderInput() {
    return this._espHeader;
  }

  // fragment_header - computed: false, optional: true, required: false
  private _fragmentHeader?: boolean | cdktf.IResolvable; 
  public get fragmentHeader() {
    return this.getBooleanAttribute('fragment_header');
  }
  public set fragmentHeader(value: boolean | cdktf.IResolvable) {
    this._fragmentHeader = value;
  }
  public resetFragmentHeader() {
    this._fragmentHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentHeaderInput() {
    return this._fragmentHeader;
  }

  // hip_header - computed: false, optional: true, required: false
  private _hipHeader?: boolean | cdktf.IResolvable; 
  public get hipHeader() {
    return this.getBooleanAttribute('hip_header');
  }
  public set hipHeader(value: boolean | cdktf.IResolvable) {
    this._hipHeader = value;
  }
  public resetHipHeader() {
    this._hipHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hipHeaderInput() {
    return this._hipHeader;
  }

  // mobility_header - computed: false, optional: true, required: false
  private _mobilityHeader?: boolean | cdktf.IResolvable; 
  public get mobilityHeader() {
    return this.getBooleanAttribute('mobility_header');
  }
  public set mobilityHeader(value: boolean | cdktf.IResolvable) {
    this._mobilityHeader = value;
  }
  public resetMobilityHeader() {
    this._mobilityHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilityHeaderInput() {
    return this._mobilityHeader;
  }

  // no_next_header - computed: false, optional: true, required: false
  private _noNextHeader?: boolean | cdktf.IResolvable; 
  public get noNextHeader() {
    return this.getBooleanAttribute('no_next_header');
  }
  public set noNextHeader(value: boolean | cdktf.IResolvable) {
    this._noNextHeader = value;
  }
  public resetNoNextHeader() {
    this._noNextHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNextHeaderInput() {
    return this._noNextHeader;
  }

  // routing_header - computed: false, optional: true, required: false
  private _routingHeader?: boolean | cdktf.IResolvable; 
  public get routingHeader() {
    return this.getBooleanAttribute('routing_header');
  }
  public set routingHeader(value: boolean | cdktf.IResolvable) {
    this._routingHeader = value;
  }
  public resetRoutingHeader() {
    this._routingHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingHeaderInput() {
    return this._routingHeader;
  }

  // shim6_header - computed: false, optional: true, required: false
  private _shim6Header?: boolean | cdktf.IResolvable; 
  public get shim6Header() {
    return this.getBooleanAttribute('shim6_header');
  }
  public set shim6Header(value: boolean | cdktf.IResolvable) {
    this._shim6Header = value;
  }
  public resetShim6Header() {
    this._shim6Header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shim6HeaderInput() {
    return this._shim6Header;
  }

  // user_defined_header_type - computed: false, optional: true, required: false
  private _userDefinedHeaderType?: string[]; 
  public get userDefinedHeaderType() {
    return this.getListAttribute('user_defined_header_type');
  }
  public set userDefinedHeaderType(value: string[]) {
    this._userDefinedHeaderType = value;
  }
  public resetUserDefinedHeaderType() {
    this._userDefinedHeaderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedHeaderTypeInput() {
    return this._userDefinedHeaderType;
  }

  // destination_header - computed: false, optional: true, required: false
  private _destinationHeader = new SecurityScreenIpIpv6ExtensionHeaderDestinationHeaderOutputReference(this, "destination_header");
  public get destinationHeader() {
    return this._destinationHeader;
  }
  public putDestinationHeader(value: SecurityScreenIpIpv6ExtensionHeaderDestinationHeader) {
    this._destinationHeader.internalValue = value;
  }
  public resetDestinationHeader() {
    this._destinationHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHeaderInput() {
    return this._destinationHeader.internalValue;
  }

  // hop_by_hop_header - computed: false, optional: true, required: false
  private _hopByHopHeader = new SecurityScreenIpIpv6ExtensionHeaderHopByHopHeaderOutputReference(this, "hop_by_hop_header");
  public get hopByHopHeader() {
    return this._hopByHopHeader;
  }
  public putHopByHopHeader(value: SecurityScreenIpIpv6ExtensionHeaderHopByHopHeader) {
    this._hopByHopHeader.internalValue = value;
  }
  public resetHopByHopHeader() {
    this._hopByHopHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopByHopHeaderInput() {
    return this._hopByHopHeader.internalValue;
  }
}
export interface SecurityScreenIpTunnelGre {
  /**
  * Enable IP tunnel GRE 4in4 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#gre_4in4 SecurityScreen#gre_4in4}
  */
  readonly gre4In4?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel GRE 4in6 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#gre_4in6 SecurityScreen#gre_4in6}
  */
  readonly gre4In6?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel GRE 6in4 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#gre_6in4 SecurityScreen#gre_6in4}
  */
  readonly gre6In4?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel GRE 6in6 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#gre_6in6 SecurityScreen#gre_6in6}
  */
  readonly gre6In6?: boolean | cdktf.IResolvable;
}

export function securityScreenIpTunnelGreToTerraform(struct?: SecurityScreenIpTunnelGre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gre_4in4: cdktf.booleanToTerraform(struct!.gre4In4),
    gre_4in6: cdktf.booleanToTerraform(struct!.gre4In6),
    gre_6in4: cdktf.booleanToTerraform(struct!.gre6In4),
    gre_6in6: cdktf.booleanToTerraform(struct!.gre6In6),
  }
}


export function securityScreenIpTunnelGreToHclTerraform(struct?: SecurityScreenIpTunnelGre | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gre_4in4: {
      value: cdktf.booleanToHclTerraform(struct!.gre4In4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gre_4in6: {
      value: cdktf.booleanToHclTerraform(struct!.gre4In6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gre_6in4: {
      value: cdktf.booleanToHclTerraform(struct!.gre6In4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gre_6in6: {
      value: cdktf.booleanToHclTerraform(struct!.gre6In6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIpTunnelGreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIpTunnelGre | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gre4In4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gre4In4 = this._gre4In4;
    }
    if (this._gre4In6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gre4In6 = this._gre4In6;
    }
    if (this._gre6In4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gre6In4 = this._gre6In4;
    }
    if (this._gre6In6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gre6In6 = this._gre6In6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIpTunnelGre | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gre4In4 = undefined;
      this._gre4In6 = undefined;
      this._gre6In4 = undefined;
      this._gre6In6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gre4In4 = value.gre4In4;
      this._gre4In6 = value.gre4In6;
      this._gre6In4 = value.gre6In4;
      this._gre6In6 = value.gre6In6;
    }
  }

  // gre_4in4 - computed: false, optional: true, required: false
  private _gre4In4?: boolean | cdktf.IResolvable; 
  public get gre4In4() {
    return this.getBooleanAttribute('gre_4in4');
  }
  public set gre4In4(value: boolean | cdktf.IResolvable) {
    this._gre4In4 = value;
  }
  public resetGre4In4() {
    this._gre4In4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gre4In4Input() {
    return this._gre4In4;
  }

  // gre_4in6 - computed: false, optional: true, required: false
  private _gre4In6?: boolean | cdktf.IResolvable; 
  public get gre4In6() {
    return this.getBooleanAttribute('gre_4in6');
  }
  public set gre4In6(value: boolean | cdktf.IResolvable) {
    this._gre4In6 = value;
  }
  public resetGre4In6() {
    this._gre4In6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gre4In6Input() {
    return this._gre4In6;
  }

  // gre_6in4 - computed: false, optional: true, required: false
  private _gre6In4?: boolean | cdktf.IResolvable; 
  public get gre6In4() {
    return this.getBooleanAttribute('gre_6in4');
  }
  public set gre6In4(value: boolean | cdktf.IResolvable) {
    this._gre6In4 = value;
  }
  public resetGre6In4() {
    this._gre6In4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gre6In4Input() {
    return this._gre6In4;
  }

  // gre_6in6 - computed: false, optional: true, required: false
  private _gre6In6?: boolean | cdktf.IResolvable; 
  public get gre6In6() {
    return this.getBooleanAttribute('gre_6in6');
  }
  public set gre6In6(value: boolean | cdktf.IResolvable) {
    this._gre6In6 = value;
  }
  public resetGre6In6() {
    this._gre6In6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gre6In6Input() {
    return this._gre6In6;
  }
}
export interface SecurityScreenIpTunnelIpip {
  /**
  *  Enable IP tunnel IPIP DS-Lite ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#dslite SecurityScreen#dslite}
  */
  readonly dslite?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPIP 4in4 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipip_4in4 SecurityScreen#ipip_4in4}
  */
  readonly ipip4In4?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPIP 4in6 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipip_4in6 SecurityScreen#ipip_4in6}
  */
  readonly ipip4In6?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPIP 6in4 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipip_6in4 SecurityScreen#ipip_6in4}
  */
  readonly ipip6In4?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPIP 6in6 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipip_6in6 SecurityScreen#ipip_6in6}
  */
  readonly ipip6In6?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPIP 6over4 ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipip_6over4 SecurityScreen#ipip_6over4}
  */
  readonly ipip6Over4?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPIP 6to4 Relay ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipip_6to4relay SecurityScreen#ipip_6to4relay}
  */
  readonly ipip6To4Relay?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPIP ISATAP ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#isatap SecurityScreen#isatap}
  */
  readonly isatap?: boolean | cdktf.IResolvable;
}

export function securityScreenIpTunnelIpipToTerraform(struct?: SecurityScreenIpTunnelIpip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dslite: cdktf.booleanToTerraform(struct!.dslite),
    ipip_4in4: cdktf.booleanToTerraform(struct!.ipip4In4),
    ipip_4in6: cdktf.booleanToTerraform(struct!.ipip4In6),
    ipip_6in4: cdktf.booleanToTerraform(struct!.ipip6In4),
    ipip_6in6: cdktf.booleanToTerraform(struct!.ipip6In6),
    ipip_6over4: cdktf.booleanToTerraform(struct!.ipip6Over4),
    ipip_6to4relay: cdktf.booleanToTerraform(struct!.ipip6To4Relay),
    isatap: cdktf.booleanToTerraform(struct!.isatap),
  }
}


export function securityScreenIpTunnelIpipToHclTerraform(struct?: SecurityScreenIpTunnelIpip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dslite: {
      value: cdktf.booleanToHclTerraform(struct!.dslite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_4in4: {
      value: cdktf.booleanToHclTerraform(struct!.ipip4In4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_4in6: {
      value: cdktf.booleanToHclTerraform(struct!.ipip4In6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_6in4: {
      value: cdktf.booleanToHclTerraform(struct!.ipip6In4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_6in6: {
      value: cdktf.booleanToHclTerraform(struct!.ipip6In6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_6over4: {
      value: cdktf.booleanToHclTerraform(struct!.ipip6Over4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_6to4relay: {
      value: cdktf.booleanToHclTerraform(struct!.ipip6To4Relay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isatap: {
      value: cdktf.booleanToHclTerraform(struct!.isatap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIpTunnelIpipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIpTunnelIpip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dslite !== undefined) {
      hasAnyValues = true;
      internalValueResult.dslite = this._dslite;
    }
    if (this._ipip4In4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip4In4 = this._ipip4In4;
    }
    if (this._ipip4In6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip4In6 = this._ipip4In6;
    }
    if (this._ipip6In4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip6In4 = this._ipip6In4;
    }
    if (this._ipip6In6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip6In6 = this._ipip6In6;
    }
    if (this._ipip6Over4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip6Over4 = this._ipip6Over4;
    }
    if (this._ipip6To4Relay !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip6To4Relay = this._ipip6To4Relay;
    }
    if (this._isatap !== undefined) {
      hasAnyValues = true;
      internalValueResult.isatap = this._isatap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIpTunnelIpip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dslite = undefined;
      this._ipip4In4 = undefined;
      this._ipip4In6 = undefined;
      this._ipip6In4 = undefined;
      this._ipip6In6 = undefined;
      this._ipip6Over4 = undefined;
      this._ipip6To4Relay = undefined;
      this._isatap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dslite = value.dslite;
      this._ipip4In4 = value.ipip4In4;
      this._ipip4In6 = value.ipip4In6;
      this._ipip6In4 = value.ipip6In4;
      this._ipip6In6 = value.ipip6In6;
      this._ipip6Over4 = value.ipip6Over4;
      this._ipip6To4Relay = value.ipip6To4Relay;
      this._isatap = value.isatap;
    }
  }

  // dslite - computed: false, optional: true, required: false
  private _dslite?: boolean | cdktf.IResolvable; 
  public get dslite() {
    return this.getBooleanAttribute('dslite');
  }
  public set dslite(value: boolean | cdktf.IResolvable) {
    this._dslite = value;
  }
  public resetDslite() {
    this._dslite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteInput() {
    return this._dslite;
  }

  // ipip_4in4 - computed: false, optional: true, required: false
  private _ipip4In4?: boolean | cdktf.IResolvable; 
  public get ipip4In4() {
    return this.getBooleanAttribute('ipip_4in4');
  }
  public set ipip4In4(value: boolean | cdktf.IResolvable) {
    this._ipip4In4 = value;
  }
  public resetIpip4In4() {
    this._ipip4In4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipip4In4Input() {
    return this._ipip4In4;
  }

  // ipip_4in6 - computed: false, optional: true, required: false
  private _ipip4In6?: boolean | cdktf.IResolvable; 
  public get ipip4In6() {
    return this.getBooleanAttribute('ipip_4in6');
  }
  public set ipip4In6(value: boolean | cdktf.IResolvable) {
    this._ipip4In6 = value;
  }
  public resetIpip4In6() {
    this._ipip4In6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipip4In6Input() {
    return this._ipip4In6;
  }

  // ipip_6in4 - computed: false, optional: true, required: false
  private _ipip6In4?: boolean | cdktf.IResolvable; 
  public get ipip6In4() {
    return this.getBooleanAttribute('ipip_6in4');
  }
  public set ipip6In4(value: boolean | cdktf.IResolvable) {
    this._ipip6In4 = value;
  }
  public resetIpip6In4() {
    this._ipip6In4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipip6In4Input() {
    return this._ipip6In4;
  }

  // ipip_6in6 - computed: false, optional: true, required: false
  private _ipip6In6?: boolean | cdktf.IResolvable; 
  public get ipip6In6() {
    return this.getBooleanAttribute('ipip_6in6');
  }
  public set ipip6In6(value: boolean | cdktf.IResolvable) {
    this._ipip6In6 = value;
  }
  public resetIpip6In6() {
    this._ipip6In6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipip6In6Input() {
    return this._ipip6In6;
  }

  // ipip_6over4 - computed: false, optional: true, required: false
  private _ipip6Over4?: boolean | cdktf.IResolvable; 
  public get ipip6Over4() {
    return this.getBooleanAttribute('ipip_6over4');
  }
  public set ipip6Over4(value: boolean | cdktf.IResolvable) {
    this._ipip6Over4 = value;
  }
  public resetIpip6Over4() {
    this._ipip6Over4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipip6Over4Input() {
    return this._ipip6Over4;
  }

  // ipip_6to4relay - computed: false, optional: true, required: false
  private _ipip6To4Relay?: boolean | cdktf.IResolvable; 
  public get ipip6To4Relay() {
    return this.getBooleanAttribute('ipip_6to4relay');
  }
  public set ipip6To4Relay(value: boolean | cdktf.IResolvable) {
    this._ipip6To4Relay = value;
  }
  public resetIpip6To4Relay() {
    this._ipip6To4Relay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipip6To4RelayInput() {
    return this._ipip6To4Relay;
  }

  // isatap - computed: false, optional: true, required: false
  private _isatap?: boolean | cdktf.IResolvable; 
  public get isatap() {
    return this.getBooleanAttribute('isatap');
  }
  public set isatap(value: boolean | cdktf.IResolvable) {
    this._isatap = value;
  }
  public resetIsatap() {
    this._isatap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isatapInput() {
    return this._isatap;
  }
}
export interface SecurityScreenIpTunnel {
  /**
  * Enable IP tunnel bad inner header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#bad_inner_header SecurityScreen#bad_inner_header}
  */
  readonly badInnerHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IP tunnel IPinUDP Teredo ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ip_in_udp_teredo SecurityScreen#ip_in_udp_teredo}
  */
  readonly ipInUdpTeredo?: boolean | cdktf.IResolvable;
  /**
  * gre block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#gre SecurityScreen#gre}
  */
  readonly gre?: SecurityScreenIpTunnelGre;
  /**
  * ipip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipip SecurityScreen#ipip}
  */
  readonly ipip?: SecurityScreenIpTunnelIpip;
}

export function securityScreenIpTunnelToTerraform(struct?: SecurityScreenIpTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_inner_header: cdktf.booleanToTerraform(struct!.badInnerHeader),
    ip_in_udp_teredo: cdktf.booleanToTerraform(struct!.ipInUdpTeredo),
    gre: securityScreenIpTunnelGreToTerraform(struct!.gre),
    ipip: securityScreenIpTunnelIpipToTerraform(struct!.ipip),
  }
}


export function securityScreenIpTunnelToHclTerraform(struct?: SecurityScreenIpTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_inner_header: {
      value: cdktf.booleanToHclTerraform(struct!.badInnerHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_in_udp_teredo: {
      value: cdktf.booleanToHclTerraform(struct!.ipInUdpTeredo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gre: {
      value: securityScreenIpTunnelGreToHclTerraform(struct!.gre),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIpTunnelGre",
    },
    ipip: {
      value: securityScreenIpTunnelIpipToHclTerraform(struct!.ipip),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIpTunnelIpip",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIpTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIpTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badInnerHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.badInnerHeader = this._badInnerHeader;
    }
    if (this._ipInUdpTeredo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipInUdpTeredo = this._ipInUdpTeredo;
    }
    if (this._gre?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gre = this._gre?.internalValue;
    }
    if (this._ipip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipip = this._ipip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIpTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._badInnerHeader = undefined;
      this._ipInUdpTeredo = undefined;
      this._gre.internalValue = undefined;
      this._ipip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._badInnerHeader = value.badInnerHeader;
      this._ipInUdpTeredo = value.ipInUdpTeredo;
      this._gre.internalValue = value.gre;
      this._ipip.internalValue = value.ipip;
    }
  }

  // bad_inner_header - computed: false, optional: true, required: false
  private _badInnerHeader?: boolean | cdktf.IResolvable; 
  public get badInnerHeader() {
    return this.getBooleanAttribute('bad_inner_header');
  }
  public set badInnerHeader(value: boolean | cdktf.IResolvable) {
    this._badInnerHeader = value;
  }
  public resetBadInnerHeader() {
    this._badInnerHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badInnerHeaderInput() {
    return this._badInnerHeader;
  }

  // ip_in_udp_teredo - computed: false, optional: true, required: false
  private _ipInUdpTeredo?: boolean | cdktf.IResolvable; 
  public get ipInUdpTeredo() {
    return this.getBooleanAttribute('ip_in_udp_teredo');
  }
  public set ipInUdpTeredo(value: boolean | cdktf.IResolvable) {
    this._ipInUdpTeredo = value;
  }
  public resetIpInUdpTeredo() {
    this._ipInUdpTeredo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInUdpTeredoInput() {
    return this._ipInUdpTeredo;
  }

  // gre - computed: false, optional: true, required: false
  private _gre = new SecurityScreenIpTunnelGreOutputReference(this, "gre");
  public get gre() {
    return this._gre;
  }
  public putGre(value: SecurityScreenIpTunnelGre) {
    this._gre.internalValue = value;
  }
  public resetGre() {
    this._gre.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greInput() {
    return this._gre.internalValue;
  }

  // ipip - computed: false, optional: true, required: false
  private _ipip = new SecurityScreenIpTunnelIpipOutputReference(this, "ipip");
  public get ipip() {
    return this._ipip;
  }
  public putIpip(value: SecurityScreenIpTunnelIpip) {
    this._ipip.internalValue = value;
  }
  public resetIpip() {
    this._ipip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipInput() {
    return this._ipip.internalValue;
  }
}
export interface SecurityScreenIp {
  /**
  * Enable IP with bad option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#bad_option SecurityScreen#bad_option}
  */
  readonly badOption?: boolean | cdktf.IResolvable;
  /**
  * Enable IP fragment blocking ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#block_frag SecurityScreen#block_frag}
  */
  readonly blockFrag?: boolean | cdktf.IResolvable;
  /**
  * Enable IPv6 extension header limit ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipv6_extension_header_limit SecurityScreen#ipv6_extension_header_limit}
  */
  readonly ipv6ExtensionHeaderLimit?: number;
  /**
  * Enable IPv6 malformed header ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipv6_malformed_header SecurityScreen#ipv6_malformed_header}
  */
  readonly ipv6MalformedHeader?: boolean | cdktf.IResolvable;
  /**
  * Enable IP with loose source route ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#loose_source_route_option SecurityScreen#loose_source_route_option}
  */
  readonly looseSourceRouteOption?: boolean | cdktf.IResolvable;
  /**
  * Enable IP with record route option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#record_route_option SecurityScreen#record_route_option}
  */
  readonly recordRouteOption?: boolean | cdktf.IResolvable;
  /**
  * Enable IP with security option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#security_option SecurityScreen#security_option}
  */
  readonly securityOption?: boolean | cdktf.IResolvable;
  /**
  * Enable IP source route ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#source_route_option SecurityScreen#source_route_option}
  */
  readonly sourceRouteOption?: boolean | cdktf.IResolvable;
  /**
  * Enable IP address spoofing ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#spoofing SecurityScreen#spoofing}
  */
  readonly spoofing?: boolean | cdktf.IResolvable;
  /**
  * Enable IP with stream option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#stream_option SecurityScreen#stream_option}
  */
  readonly streamOption?: boolean | cdktf.IResolvable;
  /**
  * Enable IP with strict source route ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#strict_source_route_option SecurityScreen#strict_source_route_option}
  */
  readonly strictSourceRouteOption?: boolean | cdktf.IResolvable;
  /**
  * Enable tear drop ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#tear_drop SecurityScreen#tear_drop}
  */
  readonly tearDrop?: boolean | cdktf.IResolvable;
  /**
  * Enable IP with timestamp option ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#timestamp_option SecurityScreen#timestamp_option}
  */
  readonly timestampOption?: boolean | cdktf.IResolvable;
  /**
  * Enable IP unknown protocol ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#unknown_protocol SecurityScreen#unknown_protocol}
  */
  readonly unknownProtocol?: boolean | cdktf.IResolvable;
  /**
  * ipv6_extension_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#ipv6_extension_header SecurityScreen#ipv6_extension_header}
  */
  readonly ipv6ExtensionHeader?: SecurityScreenIpIpv6ExtensionHeader;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#tunnel SecurityScreen#tunnel}
  */
  readonly tunnel?: SecurityScreenIpTunnel;
}

export function securityScreenIpToTerraform(struct?: SecurityScreenIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_option: cdktf.booleanToTerraform(struct!.badOption),
    block_frag: cdktf.booleanToTerraform(struct!.blockFrag),
    ipv6_extension_header_limit: cdktf.numberToTerraform(struct!.ipv6ExtensionHeaderLimit),
    ipv6_malformed_header: cdktf.booleanToTerraform(struct!.ipv6MalformedHeader),
    loose_source_route_option: cdktf.booleanToTerraform(struct!.looseSourceRouteOption),
    record_route_option: cdktf.booleanToTerraform(struct!.recordRouteOption),
    security_option: cdktf.booleanToTerraform(struct!.securityOption),
    source_route_option: cdktf.booleanToTerraform(struct!.sourceRouteOption),
    spoofing: cdktf.booleanToTerraform(struct!.spoofing),
    stream_option: cdktf.booleanToTerraform(struct!.streamOption),
    strict_source_route_option: cdktf.booleanToTerraform(struct!.strictSourceRouteOption),
    tear_drop: cdktf.booleanToTerraform(struct!.tearDrop),
    timestamp_option: cdktf.booleanToTerraform(struct!.timestampOption),
    unknown_protocol: cdktf.booleanToTerraform(struct!.unknownProtocol),
    ipv6_extension_header: securityScreenIpIpv6ExtensionHeaderToTerraform(struct!.ipv6ExtensionHeader),
    tunnel: securityScreenIpTunnelToTerraform(struct!.tunnel),
  }
}


export function securityScreenIpToHclTerraform(struct?: SecurityScreenIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_option: {
      value: cdktf.booleanToHclTerraform(struct!.badOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_frag: {
      value: cdktf.booleanToHclTerraform(struct!.blockFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_extension_header_limit: {
      value: cdktf.numberToHclTerraform(struct!.ipv6ExtensionHeaderLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_malformed_header: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6MalformedHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    loose_source_route_option: {
      value: cdktf.booleanToHclTerraform(struct!.looseSourceRouteOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_route_option: {
      value: cdktf.booleanToHclTerraform(struct!.recordRouteOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_option: {
      value: cdktf.booleanToHclTerraform(struct!.securityOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_route_option: {
      value: cdktf.booleanToHclTerraform(struct!.sourceRouteOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spoofing: {
      value: cdktf.booleanToHclTerraform(struct!.spoofing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stream_option: {
      value: cdktf.booleanToHclTerraform(struct!.streamOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strict_source_route_option: {
      value: cdktf.booleanToHclTerraform(struct!.strictSourceRouteOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tear_drop: {
      value: cdktf.booleanToHclTerraform(struct!.tearDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timestamp_option: {
      value: cdktf.booleanToHclTerraform(struct!.timestampOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unknown_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.unknownProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_extension_header: {
      value: securityScreenIpIpv6ExtensionHeaderToHclTerraform(struct!.ipv6ExtensionHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIpIpv6ExtensionHeader",
    },
    tunnel: {
      value: securityScreenIpTunnelToHclTerraform(struct!.tunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenIpTunnel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.badOption = this._badOption;
    }
    if (this._blockFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockFrag = this._blockFrag;
    }
    if (this._ipv6ExtensionHeaderLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ExtensionHeaderLimit = this._ipv6ExtensionHeaderLimit;
    }
    if (this._ipv6MalformedHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MalformedHeader = this._ipv6MalformedHeader;
    }
    if (this._looseSourceRouteOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.looseSourceRouteOption = this._looseSourceRouteOption;
    }
    if (this._recordRouteOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRouteOption = this._recordRouteOption;
    }
    if (this._securityOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityOption = this._securityOption;
    }
    if (this._sourceRouteOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRouteOption = this._sourceRouteOption;
    }
    if (this._spoofing !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofing = this._spoofing;
    }
    if (this._streamOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamOption = this._streamOption;
    }
    if (this._strictSourceRouteOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictSourceRouteOption = this._strictSourceRouteOption;
    }
    if (this._tearDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tearDrop = this._tearDrop;
    }
    if (this._timestampOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampOption = this._timestampOption;
    }
    if (this._unknownProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownProtocol = this._unknownProtocol;
    }
    if (this._ipv6ExtensionHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ExtensionHeader = this._ipv6ExtensionHeader?.internalValue;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._badOption = undefined;
      this._blockFrag = undefined;
      this._ipv6ExtensionHeaderLimit = undefined;
      this._ipv6MalformedHeader = undefined;
      this._looseSourceRouteOption = undefined;
      this._recordRouteOption = undefined;
      this._securityOption = undefined;
      this._sourceRouteOption = undefined;
      this._spoofing = undefined;
      this._streamOption = undefined;
      this._strictSourceRouteOption = undefined;
      this._tearDrop = undefined;
      this._timestampOption = undefined;
      this._unknownProtocol = undefined;
      this._ipv6ExtensionHeader.internalValue = undefined;
      this._tunnel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._badOption = value.badOption;
      this._blockFrag = value.blockFrag;
      this._ipv6ExtensionHeaderLimit = value.ipv6ExtensionHeaderLimit;
      this._ipv6MalformedHeader = value.ipv6MalformedHeader;
      this._looseSourceRouteOption = value.looseSourceRouteOption;
      this._recordRouteOption = value.recordRouteOption;
      this._securityOption = value.securityOption;
      this._sourceRouteOption = value.sourceRouteOption;
      this._spoofing = value.spoofing;
      this._streamOption = value.streamOption;
      this._strictSourceRouteOption = value.strictSourceRouteOption;
      this._tearDrop = value.tearDrop;
      this._timestampOption = value.timestampOption;
      this._unknownProtocol = value.unknownProtocol;
      this._ipv6ExtensionHeader.internalValue = value.ipv6ExtensionHeader;
      this._tunnel.internalValue = value.tunnel;
    }
  }

  // bad_option - computed: false, optional: true, required: false
  private _badOption?: boolean | cdktf.IResolvable; 
  public get badOption() {
    return this.getBooleanAttribute('bad_option');
  }
  public set badOption(value: boolean | cdktf.IResolvable) {
    this._badOption = value;
  }
  public resetBadOption() {
    this._badOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badOptionInput() {
    return this._badOption;
  }

  // block_frag - computed: false, optional: true, required: false
  private _blockFrag?: boolean | cdktf.IResolvable; 
  public get blockFrag() {
    return this.getBooleanAttribute('block_frag');
  }
  public set blockFrag(value: boolean | cdktf.IResolvable) {
    this._blockFrag = value;
  }
  public resetBlockFrag() {
    this._blockFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockFragInput() {
    return this._blockFrag;
  }

  // ipv6_extension_header_limit - computed: false, optional: true, required: false
  private _ipv6ExtensionHeaderLimit?: number; 
  public get ipv6ExtensionHeaderLimit() {
    return this.getNumberAttribute('ipv6_extension_header_limit');
  }
  public set ipv6ExtensionHeaderLimit(value: number) {
    this._ipv6ExtensionHeaderLimit = value;
  }
  public resetIpv6ExtensionHeaderLimit() {
    this._ipv6ExtensionHeaderLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExtensionHeaderLimitInput() {
    return this._ipv6ExtensionHeaderLimit;
  }

  // ipv6_malformed_header - computed: false, optional: true, required: false
  private _ipv6MalformedHeader?: boolean | cdktf.IResolvable; 
  public get ipv6MalformedHeader() {
    return this.getBooleanAttribute('ipv6_malformed_header');
  }
  public set ipv6MalformedHeader(value: boolean | cdktf.IResolvable) {
    this._ipv6MalformedHeader = value;
  }
  public resetIpv6MalformedHeader() {
    this._ipv6MalformedHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MalformedHeaderInput() {
    return this._ipv6MalformedHeader;
  }

  // loose_source_route_option - computed: false, optional: true, required: false
  private _looseSourceRouteOption?: boolean | cdktf.IResolvable; 
  public get looseSourceRouteOption() {
    return this.getBooleanAttribute('loose_source_route_option');
  }
  public set looseSourceRouteOption(value: boolean | cdktf.IResolvable) {
    this._looseSourceRouteOption = value;
  }
  public resetLooseSourceRouteOption() {
    this._looseSourceRouteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get looseSourceRouteOptionInput() {
    return this._looseSourceRouteOption;
  }

  // record_route_option - computed: false, optional: true, required: false
  private _recordRouteOption?: boolean | cdktf.IResolvable; 
  public get recordRouteOption() {
    return this.getBooleanAttribute('record_route_option');
  }
  public set recordRouteOption(value: boolean | cdktf.IResolvable) {
    this._recordRouteOption = value;
  }
  public resetRecordRouteOption() {
    this._recordRouteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRouteOptionInput() {
    return this._recordRouteOption;
  }

  // security_option - computed: false, optional: true, required: false
  private _securityOption?: boolean | cdktf.IResolvable; 
  public get securityOption() {
    return this.getBooleanAttribute('security_option');
  }
  public set securityOption(value: boolean | cdktf.IResolvable) {
    this._securityOption = value;
  }
  public resetSecurityOption() {
    this._securityOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityOptionInput() {
    return this._securityOption;
  }

  // source_route_option - computed: false, optional: true, required: false
  private _sourceRouteOption?: boolean | cdktf.IResolvable; 
  public get sourceRouteOption() {
    return this.getBooleanAttribute('source_route_option');
  }
  public set sourceRouteOption(value: boolean | cdktf.IResolvable) {
    this._sourceRouteOption = value;
  }
  public resetSourceRouteOption() {
    this._sourceRouteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRouteOptionInput() {
    return this._sourceRouteOption;
  }

  // spoofing - computed: false, optional: true, required: false
  private _spoofing?: boolean | cdktf.IResolvable; 
  public get spoofing() {
    return this.getBooleanAttribute('spoofing');
  }
  public set spoofing(value: boolean | cdktf.IResolvable) {
    this._spoofing = value;
  }
  public resetSpoofing() {
    this._spoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofingInput() {
    return this._spoofing;
  }

  // stream_option - computed: false, optional: true, required: false
  private _streamOption?: boolean | cdktf.IResolvable; 
  public get streamOption() {
    return this.getBooleanAttribute('stream_option');
  }
  public set streamOption(value: boolean | cdktf.IResolvable) {
    this._streamOption = value;
  }
  public resetStreamOption() {
    this._streamOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOptionInput() {
    return this._streamOption;
  }

  // strict_source_route_option - computed: false, optional: true, required: false
  private _strictSourceRouteOption?: boolean | cdktf.IResolvable; 
  public get strictSourceRouteOption() {
    return this.getBooleanAttribute('strict_source_route_option');
  }
  public set strictSourceRouteOption(value: boolean | cdktf.IResolvable) {
    this._strictSourceRouteOption = value;
  }
  public resetStrictSourceRouteOption() {
    this._strictSourceRouteOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSourceRouteOptionInput() {
    return this._strictSourceRouteOption;
  }

  // tear_drop - computed: false, optional: true, required: false
  private _tearDrop?: boolean | cdktf.IResolvable; 
  public get tearDrop() {
    return this.getBooleanAttribute('tear_drop');
  }
  public set tearDrop(value: boolean | cdktf.IResolvable) {
    this._tearDrop = value;
  }
  public resetTearDrop() {
    this._tearDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tearDropInput() {
    return this._tearDrop;
  }

  // timestamp_option - computed: false, optional: true, required: false
  private _timestampOption?: boolean | cdktf.IResolvable; 
  public get timestampOption() {
    return this.getBooleanAttribute('timestamp_option');
  }
  public set timestampOption(value: boolean | cdktf.IResolvable) {
    this._timestampOption = value;
  }
  public resetTimestampOption() {
    this._timestampOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampOptionInput() {
    return this._timestampOption;
  }

  // unknown_protocol - computed: false, optional: true, required: false
  private _unknownProtocol?: boolean | cdktf.IResolvable; 
  public get unknownProtocol() {
    return this.getBooleanAttribute('unknown_protocol');
  }
  public set unknownProtocol(value: boolean | cdktf.IResolvable) {
    this._unknownProtocol = value;
  }
  public resetUnknownProtocol() {
    this._unknownProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownProtocolInput() {
    return this._unknownProtocol;
  }

  // ipv6_extension_header - computed: false, optional: true, required: false
  private _ipv6ExtensionHeader = new SecurityScreenIpIpv6ExtensionHeaderOutputReference(this, "ipv6_extension_header");
  public get ipv6ExtensionHeader() {
    return this._ipv6ExtensionHeader;
  }
  public putIpv6ExtensionHeader(value: SecurityScreenIpIpv6ExtensionHeader) {
    this._ipv6ExtensionHeader.internalValue = value;
  }
  public resetIpv6ExtensionHeader() {
    this._ipv6ExtensionHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ExtensionHeaderInput() {
    return this._ipv6ExtensionHeader.internalValue;
  }

  // tunnel - computed: false, optional: true, required: false
  private _tunnel = new SecurityScreenIpTunnelOutputReference(this, "tunnel");
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: SecurityScreenIpTunnel) {
    this._tunnel.internalValue = value;
  }
  public resetTunnel() {
    this._tunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }
}
export interface SecurityScreenLimitSession {
  /**
  * Limit sessions to the same destination IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#destination_ip_based SecurityScreen#destination_ip_based}
  */
  readonly destinationIpBased?: number;
  /**
  * Limit sessions from the same source IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#source_ip_based SecurityScreen#source_ip_based}
  */
  readonly sourceIpBased?: number;
}

export function securityScreenLimitSessionToTerraform(struct?: SecurityScreenLimitSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_ip_based: cdktf.numberToTerraform(struct!.destinationIpBased),
    source_ip_based: cdktf.numberToTerraform(struct!.sourceIpBased),
  }
}


export function securityScreenLimitSessionToHclTerraform(struct?: SecurityScreenLimitSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_ip_based: {
      value: cdktf.numberToHclTerraform(struct!.destinationIpBased),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip_based: {
      value: cdktf.numberToHclTerraform(struct!.sourceIpBased),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenLimitSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenLimitSession | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationIpBased !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpBased = this._destinationIpBased;
    }
    if (this._sourceIpBased !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpBased = this._sourceIpBased;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenLimitSession | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationIpBased = undefined;
      this._sourceIpBased = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationIpBased = value.destinationIpBased;
      this._sourceIpBased = value.sourceIpBased;
    }
  }

  // destination_ip_based - computed: false, optional: true, required: false
  private _destinationIpBased?: number; 
  public get destinationIpBased() {
    return this.getNumberAttribute('destination_ip_based');
  }
  public set destinationIpBased(value: number) {
    this._destinationIpBased = value;
  }
  public resetDestinationIpBased() {
    this._destinationIpBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpBasedInput() {
    return this._destinationIpBased;
  }

  // source_ip_based - computed: false, optional: true, required: false
  private _sourceIpBased?: number; 
  public get sourceIpBased() {
    return this.getNumberAttribute('source_ip_based');
  }
  public set sourceIpBased(value: number) {
    this._sourceIpBased = value;
  }
  public resetSourceIpBased() {
    this._sourceIpBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpBasedInput() {
    return this._sourceIpBased;
  }
}
export interface SecurityScreenTcpPortScan {
  /**
  * Threshold (microseconds in which 10 attack packets are detected).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
}

export function securityScreenTcpPortScanToTerraform(struct?: SecurityScreenTcpPortScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityScreenTcpPortScanToHclTerraform(struct?: SecurityScreenTcpPortScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenTcpPortScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenTcpPortScan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenTcpPortScan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityScreenTcpSweep {
  /**
  * Threshold (microseconds in which 10 TCP packets are detected).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
}

export function securityScreenTcpSweepToTerraform(struct?: SecurityScreenTcpSweep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityScreenTcpSweepToHclTerraform(struct?: SecurityScreenTcpSweep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenTcpSweepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenTcpSweep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenTcpSweep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityScreenTcpSynAckAckProxy {
  /**
  * Threshold (un-authenticated connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
}

export function securityScreenTcpSynAckAckProxyToTerraform(struct?: SecurityScreenTcpSynAckAckProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityScreenTcpSynAckAckProxyToHclTerraform(struct?: SecurityScreenTcpSynAckAckProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenTcpSynAckAckProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenTcpSynAckAckProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenTcpSynAckAckProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityScreenTcpSynFloodWhitelistStruct {
  /**
  * Destination address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#destination_address SecurityScreen#destination_address}
  */
  readonly destinationAddress?: string[];
  /**
  * White-list name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#name SecurityScreen#name}
  */
  readonly name: string;
  /**
  * Source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#source_address SecurityScreen#source_address}
  */
  readonly sourceAddress?: string[];
}

export function securityScreenTcpSynFloodWhitelistStructToTerraform(struct?: SecurityScreenTcpSynFloodWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddress),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddress),
  }
}


export function securityScreenTcpSynFloodWhitelistStructToHclTerraform(struct?: SecurityScreenTcpSynFloodWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenTcpSynFloodWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityScreenTcpSynFloodWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddress = this._destinationAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenTcpSynFloodWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationAddress = undefined;
      this._name = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationAddress = value.destinationAddress;
      this._name = value.name;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // destination_address - computed: false, optional: true, required: false
  private _destinationAddress?: string[]; 
  public get destinationAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_address'));
  }
  public set destinationAddress(value: string[]) {
    this._destinationAddress = value;
  }
  public resetDestinationAddress() {
    this._destinationAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressInput() {
    return this._destinationAddress;
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

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string[]; 
  public get sourceAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('source_address'));
  }
  public set sourceAddress(value: string[]) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}

export class SecurityScreenTcpSynFloodWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : SecurityScreenTcpSynFloodWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): SecurityScreenTcpSynFloodWhitelistStructOutputReference {
    return new SecurityScreenTcpSynFloodWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityScreenTcpSynFlood {
  /**
  * Alarm threshold (requests per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#alarm_threshold SecurityScreen#alarm_threshold}
  */
  readonly alarmThreshold?: number;
  /**
  * Attack threshold (proxied requests per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#attack_threshold SecurityScreen#attack_threshold}
  */
  readonly attackThreshold?: number;
  /**
  * Destination threshold (SYN pps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#destination_threshold SecurityScreen#destination_threshold}
  */
  readonly destinationThreshold?: number;
  /**
  * Source threshold (SYN pps).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#source_threshold SecurityScreen#source_threshold}
  */
  readonly sourceThreshold?: number;
  /**
  * SYN flood ager timeout (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#timeout SecurityScreen#timeout}
  */
  readonly timeout?: number;
  /**
  * whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#whitelist SecurityScreen#whitelist}
  */
  readonly whitelist?: SecurityScreenTcpSynFloodWhitelistStruct[] | cdktf.IResolvable;
}

export function securityScreenTcpSynFloodToTerraform(struct?: SecurityScreenTcpSynFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_threshold: cdktf.numberToTerraform(struct!.alarmThreshold),
    attack_threshold: cdktf.numberToTerraform(struct!.attackThreshold),
    destination_threshold: cdktf.numberToTerraform(struct!.destinationThreshold),
    source_threshold: cdktf.numberToTerraform(struct!.sourceThreshold),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    whitelist: cdktf.listMapper(securityScreenTcpSynFloodWhitelistStructToTerraform, true)(struct!.whitelist),
  }
}


export function securityScreenTcpSynFloodToHclTerraform(struct?: SecurityScreenTcpSynFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_threshold: {
      value: cdktf.numberToHclTerraform(struct!.alarmThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attack_threshold: {
      value: cdktf.numberToHclTerraform(struct!.attackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_threshold: {
      value: cdktf.numberToHclTerraform(struct!.destinationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_threshold: {
      value: cdktf.numberToHclTerraform(struct!.sourceThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    whitelist: {
      value: cdktf.listMapperHcl(securityScreenTcpSynFloodWhitelistStructToHclTerraform, true)(struct!.whitelist),
      isBlock: true,
      type: "set",
      storageClassType: "SecurityScreenTcpSynFloodWhitelistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenTcpSynFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenTcpSynFlood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmThreshold = this._alarmThreshold;
    }
    if (this._attackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.attackThreshold = this._attackThreshold;
    }
    if (this._destinationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationThreshold = this._destinationThreshold;
    }
    if (this._sourceThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceThreshold = this._sourceThreshold;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._whitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenTcpSynFlood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmThreshold = undefined;
      this._attackThreshold = undefined;
      this._destinationThreshold = undefined;
      this._sourceThreshold = undefined;
      this._timeout = undefined;
      this._whitelist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmThreshold = value.alarmThreshold;
      this._attackThreshold = value.attackThreshold;
      this._destinationThreshold = value.destinationThreshold;
      this._sourceThreshold = value.sourceThreshold;
      this._timeout = value.timeout;
      this._whitelist.internalValue = value.whitelist;
    }
  }

  // alarm_threshold - computed: false, optional: true, required: false
  private _alarmThreshold?: number; 
  public get alarmThreshold() {
    return this.getNumberAttribute('alarm_threshold');
  }
  public set alarmThreshold(value: number) {
    this._alarmThreshold = value;
  }
  public resetAlarmThreshold() {
    this._alarmThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmThresholdInput() {
    return this._alarmThreshold;
  }

  // attack_threshold - computed: false, optional: true, required: false
  private _attackThreshold?: number; 
  public get attackThreshold() {
    return this.getNumberAttribute('attack_threshold');
  }
  public set attackThreshold(value: number) {
    this._attackThreshold = value;
  }
  public resetAttackThreshold() {
    this._attackThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackThresholdInput() {
    return this._attackThreshold;
  }

  // destination_threshold - computed: false, optional: true, required: false
  private _destinationThreshold?: number; 
  public get destinationThreshold() {
    return this.getNumberAttribute('destination_threshold');
  }
  public set destinationThreshold(value: number) {
    this._destinationThreshold = value;
  }
  public resetDestinationThreshold() {
    this._destinationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationThresholdInput() {
    return this._destinationThreshold;
  }

  // source_threshold - computed: false, optional: true, required: false
  private _sourceThreshold?: number; 
  public get sourceThreshold() {
    return this.getNumberAttribute('source_threshold');
  }
  public set sourceThreshold(value: number) {
    this._sourceThreshold = value;
  }
  public resetSourceThreshold() {
    this._sourceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceThresholdInput() {
    return this._sourceThreshold;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist = new SecurityScreenTcpSynFloodWhitelistStructList(this, "whitelist", true);
  public get whitelist() {
    return this._whitelist;
  }
  public putWhitelist(value: SecurityScreenTcpSynFloodWhitelistStruct[] | cdktf.IResolvable) {
    this._whitelist.internalValue = value;
  }
  public resetWhitelist() {
    this._whitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist.internalValue;
  }
}
export interface SecurityScreenTcp {
  /**
  * Enable Fin bit with no ACK bit ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#fin_no_ack SecurityScreen#fin_no_ack}
  */
  readonly finNoAck?: boolean | cdktf.IResolvable;
  /**
  * Enable land attack ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#land SecurityScreen#land}
  */
  readonly land?: boolean | cdktf.IResolvable;
  /**
  * Enable TCP packet without flag ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#no_flag SecurityScreen#no_flag}
  */
  readonly noFlag?: boolean | cdktf.IResolvable;
  /**
  * Enable SYN and FIN bits set attack ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#syn_fin SecurityScreen#syn_fin}
  */
  readonly synFin?: boolean | cdktf.IResolvable;
  /**
  * Enable SYN fragment ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#syn_frag SecurityScreen#syn_frag}
  */
  readonly synFrag?: boolean | cdktf.IResolvable;
  /**
  * Enable winnuke attack ids option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#winnuke SecurityScreen#winnuke}
  */
  readonly winnuke?: boolean | cdktf.IResolvable;
  /**
  * port_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#port_scan SecurityScreen#port_scan}
  */
  readonly portScan?: SecurityScreenTcpPortScan;
  /**
  * sweep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#sweep SecurityScreen#sweep}
  */
  readonly sweep?: SecurityScreenTcpSweep;
  /**
  * syn_ack_ack_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#syn_ack_ack_proxy SecurityScreen#syn_ack_ack_proxy}
  */
  readonly synAckAckProxy?: SecurityScreenTcpSynAckAckProxy;
  /**
  * syn_flood block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#syn_flood SecurityScreen#syn_flood}
  */
  readonly synFlood?: SecurityScreenTcpSynFlood;
}

export function securityScreenTcpToTerraform(struct?: SecurityScreenTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fin_no_ack: cdktf.booleanToTerraform(struct!.finNoAck),
    land: cdktf.booleanToTerraform(struct!.land),
    no_flag: cdktf.booleanToTerraform(struct!.noFlag),
    syn_fin: cdktf.booleanToTerraform(struct!.synFin),
    syn_frag: cdktf.booleanToTerraform(struct!.synFrag),
    winnuke: cdktf.booleanToTerraform(struct!.winnuke),
    port_scan: securityScreenTcpPortScanToTerraform(struct!.portScan),
    sweep: securityScreenTcpSweepToTerraform(struct!.sweep),
    syn_ack_ack_proxy: securityScreenTcpSynAckAckProxyToTerraform(struct!.synAckAckProxy),
    syn_flood: securityScreenTcpSynFloodToTerraform(struct!.synFlood),
  }
}


export function securityScreenTcpToHclTerraform(struct?: SecurityScreenTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fin_no_ack: {
      value: cdktf.booleanToHclTerraform(struct!.finNoAck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    land: {
      value: cdktf.booleanToHclTerraform(struct!.land),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_flag: {
      value: cdktf.booleanToHclTerraform(struct!.noFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    syn_fin: {
      value: cdktf.booleanToHclTerraform(struct!.synFin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    syn_frag: {
      value: cdktf.booleanToHclTerraform(struct!.synFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    winnuke: {
      value: cdktf.booleanToHclTerraform(struct!.winnuke),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_scan: {
      value: securityScreenTcpPortScanToHclTerraform(struct!.portScan),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenTcpPortScan",
    },
    sweep: {
      value: securityScreenTcpSweepToHclTerraform(struct!.sweep),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenTcpSweep",
    },
    syn_ack_ack_proxy: {
      value: securityScreenTcpSynAckAckProxyToHclTerraform(struct!.synAckAckProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenTcpSynAckAckProxy",
    },
    syn_flood: {
      value: securityScreenTcpSynFloodToHclTerraform(struct!.synFlood),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenTcpSynFlood",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._finNoAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.finNoAck = this._finNoAck;
    }
    if (this._land !== undefined) {
      hasAnyValues = true;
      internalValueResult.land = this._land;
    }
    if (this._noFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFlag = this._noFlag;
    }
    if (this._synFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.synFin = this._synFin;
    }
    if (this._synFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.synFrag = this._synFrag;
    }
    if (this._winnuke !== undefined) {
      hasAnyValues = true;
      internalValueResult.winnuke = this._winnuke;
    }
    if (this._portScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portScan = this._portScan?.internalValue;
    }
    if (this._sweep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sweep = this._sweep?.internalValue;
    }
    if (this._synAckAckProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAckAckProxy = this._synAckAckProxy?.internalValue;
    }
    if (this._synFlood?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synFlood = this._synFlood?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._finNoAck = undefined;
      this._land = undefined;
      this._noFlag = undefined;
      this._synFin = undefined;
      this._synFrag = undefined;
      this._winnuke = undefined;
      this._portScan.internalValue = undefined;
      this._sweep.internalValue = undefined;
      this._synAckAckProxy.internalValue = undefined;
      this._synFlood.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._finNoAck = value.finNoAck;
      this._land = value.land;
      this._noFlag = value.noFlag;
      this._synFin = value.synFin;
      this._synFrag = value.synFrag;
      this._winnuke = value.winnuke;
      this._portScan.internalValue = value.portScan;
      this._sweep.internalValue = value.sweep;
      this._synAckAckProxy.internalValue = value.synAckAckProxy;
      this._synFlood.internalValue = value.synFlood;
    }
  }

  // fin_no_ack - computed: false, optional: true, required: false
  private _finNoAck?: boolean | cdktf.IResolvable; 
  public get finNoAck() {
    return this.getBooleanAttribute('fin_no_ack');
  }
  public set finNoAck(value: boolean | cdktf.IResolvable) {
    this._finNoAck = value;
  }
  public resetFinNoAck() {
    this._finNoAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finNoAckInput() {
    return this._finNoAck;
  }

  // land - computed: false, optional: true, required: false
  private _land?: boolean | cdktf.IResolvable; 
  public get land() {
    return this.getBooleanAttribute('land');
  }
  public set land(value: boolean | cdktf.IResolvable) {
    this._land = value;
  }
  public resetLand() {
    this._land = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landInput() {
    return this._land;
  }

  // no_flag - computed: false, optional: true, required: false
  private _noFlag?: boolean | cdktf.IResolvable; 
  public get noFlag() {
    return this.getBooleanAttribute('no_flag');
  }
  public set noFlag(value: boolean | cdktf.IResolvable) {
    this._noFlag = value;
  }
  public resetNoFlag() {
    this._noFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFlagInput() {
    return this._noFlag;
  }

  // syn_fin - computed: false, optional: true, required: false
  private _synFin?: boolean | cdktf.IResolvable; 
  public get synFin() {
    return this.getBooleanAttribute('syn_fin');
  }
  public set synFin(value: boolean | cdktf.IResolvable) {
    this._synFin = value;
  }
  public resetSynFin() {
    this._synFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synFinInput() {
    return this._synFin;
  }

  // syn_frag - computed: false, optional: true, required: false
  private _synFrag?: boolean | cdktf.IResolvable; 
  public get synFrag() {
    return this.getBooleanAttribute('syn_frag');
  }
  public set synFrag(value: boolean | cdktf.IResolvable) {
    this._synFrag = value;
  }
  public resetSynFrag() {
    this._synFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synFragInput() {
    return this._synFrag;
  }

  // winnuke - computed: false, optional: true, required: false
  private _winnuke?: boolean | cdktf.IResolvable; 
  public get winnuke() {
    return this.getBooleanAttribute('winnuke');
  }
  public set winnuke(value: boolean | cdktf.IResolvable) {
    this._winnuke = value;
  }
  public resetWinnuke() {
    this._winnuke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winnukeInput() {
    return this._winnuke;
  }

  // port_scan - computed: false, optional: true, required: false
  private _portScan = new SecurityScreenTcpPortScanOutputReference(this, "port_scan");
  public get portScan() {
    return this._portScan;
  }
  public putPortScan(value: SecurityScreenTcpPortScan) {
    this._portScan.internalValue = value;
  }
  public resetPortScan() {
    this._portScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanInput() {
    return this._portScan.internalValue;
  }

  // sweep - computed: false, optional: true, required: false
  private _sweep = new SecurityScreenTcpSweepOutputReference(this, "sweep");
  public get sweep() {
    return this._sweep;
  }
  public putSweep(value: SecurityScreenTcpSweep) {
    this._sweep.internalValue = value;
  }
  public resetSweep() {
    this._sweep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sweepInput() {
    return this._sweep.internalValue;
  }

  // syn_ack_ack_proxy - computed: false, optional: true, required: false
  private _synAckAckProxy = new SecurityScreenTcpSynAckAckProxyOutputReference(this, "syn_ack_ack_proxy");
  public get synAckAckProxy() {
    return this._synAckAckProxy;
  }
  public putSynAckAckProxy(value: SecurityScreenTcpSynAckAckProxy) {
    this._synAckAckProxy.internalValue = value;
  }
  public resetSynAckAckProxy() {
    this._synAckAckProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAckAckProxyInput() {
    return this._synAckAckProxy.internalValue;
  }

  // syn_flood - computed: false, optional: true, required: false
  private _synFlood = new SecurityScreenTcpSynFloodOutputReference(this, "syn_flood");
  public get synFlood() {
    return this._synFlood;
  }
  public putSynFlood(value: SecurityScreenTcpSynFlood) {
    this._synFlood.internalValue = value;
  }
  public resetSynFlood() {
    this._synFlood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synFloodInput() {
    return this._synFlood.internalValue;
  }
}
export interface SecurityScreenUdpFlood {
  /**
  * Threshold (UDP packets per second).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
  /**
  * List of UDP flood white list group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#whitelist SecurityScreen#whitelist}
  */
  readonly whitelist?: string[];
}

export function securityScreenUdpFloodToTerraform(struct?: SecurityScreenUdpFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whitelist),
  }
}


export function securityScreenUdpFloodToHclTerraform(struct?: SecurityScreenUdpFlood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whitelist),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenUdpFloodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenUdpFlood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._whitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenUdpFlood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
      this._whitelist = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
      this._whitelist = value.whitelist;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string[]; 
  public get whitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('whitelist'));
  }
  public set whitelist(value: string[]) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }
}
export interface SecurityScreenUdpPortScan {
  /**
  * Threshold (microseconds in which 10 attack packets are detected).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
}

export function securityScreenUdpPortScanToTerraform(struct?: SecurityScreenUdpPortScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityScreenUdpPortScanToHclTerraform(struct?: SecurityScreenUdpPortScan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenUdpPortScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenUdpPortScan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenUdpPortScan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityScreenUdpSweep {
  /**
  * Threshold (microseconds in which 10 UDP packets are detected).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#threshold SecurityScreen#threshold}
  */
  readonly threshold?: number;
}

export function securityScreenUdpSweepToTerraform(struct?: SecurityScreenUdpSweep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function securityScreenUdpSweepToHclTerraform(struct?: SecurityScreenUdpSweep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenUdpSweepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenUdpSweep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenUdpSweep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._threshold = value.threshold;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface SecurityScreenUdp {
  /**
  * flood block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#flood SecurityScreen#flood}
  */
  readonly flood?: SecurityScreenUdpFlood;
  /**
  * port_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#port_scan SecurityScreen#port_scan}
  */
  readonly portScan?: SecurityScreenUdpPortScan;
  /**
  * sweep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#sweep SecurityScreen#sweep}
  */
  readonly sweep?: SecurityScreenUdpSweep;
}

export function securityScreenUdpToTerraform(struct?: SecurityScreenUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flood: securityScreenUdpFloodToTerraform(struct!.flood),
    port_scan: securityScreenUdpPortScanToTerraform(struct!.portScan),
    sweep: securityScreenUdpSweepToTerraform(struct!.sweep),
  }
}


export function securityScreenUdpToHclTerraform(struct?: SecurityScreenUdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flood: {
      value: securityScreenUdpFloodToHclTerraform(struct!.flood),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenUdpFlood",
    },
    port_scan: {
      value: securityScreenUdpPortScanToHclTerraform(struct!.portScan),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenUdpPortScan",
    },
    sweep: {
      value: securityScreenUdpSweepToHclTerraform(struct!.sweep),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityScreenUdpSweep",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityScreenUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityScreenUdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flood?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flood = this._flood?.internalValue;
    }
    if (this._portScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portScan = this._portScan?.internalValue;
    }
    if (this._sweep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sweep = this._sweep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityScreenUdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flood.internalValue = undefined;
      this._portScan.internalValue = undefined;
      this._sweep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flood.internalValue = value.flood;
      this._portScan.internalValue = value.portScan;
      this._sweep.internalValue = value.sweep;
    }
  }

  // flood - computed: false, optional: true, required: false
  private _flood = new SecurityScreenUdpFloodOutputReference(this, "flood");
  public get flood() {
    return this._flood;
  }
  public putFlood(value: SecurityScreenUdpFlood) {
    this._flood.internalValue = value;
  }
  public resetFlood() {
    this._flood.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodInput() {
    return this._flood.internalValue;
  }

  // port_scan - computed: false, optional: true, required: false
  private _portScan = new SecurityScreenUdpPortScanOutputReference(this, "port_scan");
  public get portScan() {
    return this._portScan;
  }
  public putPortScan(value: SecurityScreenUdpPortScan) {
    this._portScan.internalValue = value;
  }
  public resetPortScan() {
    this._portScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanInput() {
    return this._portScan.internalValue;
  }

  // sweep - computed: false, optional: true, required: false
  private _sweep = new SecurityScreenUdpSweepOutputReference(this, "sweep");
  public get sweep() {
    return this._sweep;
  }
  public putSweep(value: SecurityScreenUdpSweep) {
    this._sweep.internalValue = value;
  }
  public resetSweep() {
    this._sweep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sweepInput() {
    return this._sweep.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen junos_security_screen}
*/
export class SecurityScreen extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_screen";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityScreen resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityScreen to import
  * @param importFromId The id of the existing SecurityScreen that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityScreen to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_screen", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_screen junos_security_screen} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityScreenConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityScreenConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_screen',
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
    this._alarmWithoutDrop = config.alarmWithoutDrop;
    this._description = config.description;
    this._name = config.name;
    this._aggregation.internalValue = config.aggregation;
    this._icmp.internalValue = config.icmp;
    this._ip.internalValue = config.ip;
    this._limitSession.internalValue = config.limitSession;
    this._tcp.internalValue = config.tcp;
    this._udp.internalValue = config.udp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarm_without_drop - computed: false, optional: true, required: false
  private _alarmWithoutDrop?: boolean | cdktf.IResolvable; 
  public get alarmWithoutDrop() {
    return this.getBooleanAttribute('alarm_without_drop');
  }
  public set alarmWithoutDrop(value: boolean | cdktf.IResolvable) {
    this._alarmWithoutDrop = value;
  }
  public resetAlarmWithoutDrop() {
    this._alarmWithoutDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmWithoutDropInput() {
    return this._alarmWithoutDrop;
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

  // aggregation - computed: false, optional: true, required: false
  private _aggregation = new SecurityScreenAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: SecurityScreenAggregation) {
    this._aggregation.internalValue = value;
  }
  public resetAggregation() {
    this._aggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation.internalValue;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new SecurityScreenIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: SecurityScreenIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new SecurityScreenIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: SecurityScreenIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // limit_session - computed: false, optional: true, required: false
  private _limitSession = new SecurityScreenLimitSessionOutputReference(this, "limit_session");
  public get limitSession() {
    return this._limitSession;
  }
  public putLimitSession(value: SecurityScreenLimitSession) {
    this._limitSession.internalValue = value;
  }
  public resetLimitSession() {
    this._limitSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitSessionInput() {
    return this._limitSession.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new SecurityScreenTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: SecurityScreenTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new SecurityScreenUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: SecurityScreenUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alarm_without_drop: cdktf.booleanToTerraform(this._alarmWithoutDrop),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      aggregation: securityScreenAggregationToTerraform(this._aggregation.internalValue),
      icmp: securityScreenIcmpToTerraform(this._icmp.internalValue),
      ip: securityScreenIpToTerraform(this._ip.internalValue),
      limit_session: securityScreenLimitSessionToTerraform(this._limitSession.internalValue),
      tcp: securityScreenTcpToTerraform(this._tcp.internalValue),
      udp: securityScreenUdpToTerraform(this._udp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alarm_without_drop: {
        value: cdktf.booleanToHclTerraform(this._alarmWithoutDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      aggregation: {
        value: securityScreenAggregationToHclTerraform(this._aggregation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityScreenAggregation",
      },
      icmp: {
        value: securityScreenIcmpToHclTerraform(this._icmp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityScreenIcmp",
      },
      ip: {
        value: securityScreenIpToHclTerraform(this._ip.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityScreenIp",
      },
      limit_session: {
        value: securityScreenLimitSessionToHclTerraform(this._limitSession.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityScreenLimitSession",
      },
      tcp: {
        value: securityScreenTcpToHclTerraform(this._tcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityScreenTcp",
      },
      udp: {
        value: securityScreenUdpToHclTerraform(this._udp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityScreenUdp",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
