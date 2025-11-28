// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpAddressFamilyRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#ipv4 BgpAddressFamilyRoutingProfile#ipv4}
  */
  readonly ipv4?: BgpAddressFamilyRoutingProfileIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#ipv6 BgpAddressFamilyRoutingProfile#ipv6}
  */
  readonly ipv6?: BgpAddressFamilyRoutingProfileIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#location BgpAddressFamilyRoutingProfile#location}
  */
  readonly location: BgpAddressFamilyRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#name BgpAddressFamilyRoutingProfile#name}
  */
  readonly name: string;
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastAddPath {
  /**
  * Advertise all paths to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#tx_all_paths BgpAddressFamilyRoutingProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Advertise the bestpath per each neighboring AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#tx_bestpath_per_as BgpAddressFamilyRoutingProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastAddPathToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastAddPathToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tx_all_paths: {
      value: cdktf.booleanToHclTerraform(struct!.txAllPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tx_bestpath_per_as: {
      value: cdktf.booleanToHclTerraform(struct!.txBestpathPerAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._txAllPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.txAllPaths = this._txAllPaths;
    }
    if (this._txBestpathPerAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBestpathPerAs = this._txBestpathPerAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._txAllPaths = undefined;
      this._txBestpathPerAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._txAllPaths = value.txAllPaths;
      this._txBestpathPerAs = value.txBestpathPerAs;
    }
  }

  // tx_all_paths - computed: false, optional: true, required: false
  private _txAllPaths?: boolean | cdktf.IResolvable; 
  public get txAllPaths() {
    return this.getBooleanAttribute('tx_all_paths');
  }
  public set txAllPaths(value: boolean | cdktf.IResolvable) {
    this._txAllPaths = value;
  }
  public resetTxAllPaths() {
    this._txAllPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txAllPathsInput() {
    return this._txAllPaths;
  }

  // tx_bestpath_per_as - computed: false, optional: true, required: false
  private _txBestpathPerAs?: boolean | cdktf.IResolvable; 
  public get txBestpathPerAs() {
    return this.getBooleanAttribute('tx_bestpath_per_as');
  }
  public set txBestpathPerAs(value: boolean | cdktf.IResolvable) {
    this._txBestpathPerAs = value;
  }
  public resetTxBestpathPerAs() {
    this._txBestpathPerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBestpathPerAsInput() {
    return this._txBestpathPerAs;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn {
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#occurrence BgpAddressFamilyRoutingProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#origin BgpAddressFamilyRoutingProfile#origin}
  */
  readonly origin?: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    occurrence: {
      value: cdktf.numberToHclTerraform(struct!.occurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._occurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrence = this._occurrence;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._occurrence = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._occurrence = value.occurrence;
      this._origin.internalValue = value.origin;
    }
  }

  // occurrence - computed: false, optional: true, required: false
  private _occurrence?: number; 
  public get occurrence() {
    return this.getNumberAttribute('occurrence');
  }
  public set occurrence(value: number) {
    this._occurrence = value;
  }
  public resetOccurrence() {
    this._occurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceInput() {
    return this._occurrence;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart {
  /**
  * Restart interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#interval BgpAddressFamilyRoutingProfile#interval}
  */
  readonly interval?: number;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#restart BgpAddressFamilyRoutingProfile#restart}
  */
  readonly restart?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#warning_only BgpAddressFamilyRoutingProfile#warning_only}
  */
  readonly warningOnly?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restart = this._restart?.internalValue;
    }
    if (this._warningOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningOnly = this._warningOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restart.internalValue = undefined;
      this._warningOnly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restart.internalValue = value.restart;
      this._warningOnly.internalValue = value.warningOnly;
    }
  }

  // restart - computed: false, optional: true, required: false
  private _restart = new BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart) {
    this._restart.internalValue = value;
  }
  public resetRestart() {
    this._restart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart.internalValue;
  }

  // warning_only - computed: false, optional: true, required: false
  private _warningOnly = new BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly) {
    this._warningOnly.internalValue = value;
  }
  public resetWarningOnly() {
    this._warningOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningOnlyInput() {
    return this._warningOnly.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#action BgpAddressFamilyRoutingProfile#action}
  */
  readonly action?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction;
  /**
  * Max allowed prefixes from this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#max_prefixes BgpAddressFamilyRoutingProfile#max_prefixes}
  */
  readonly maxPrefixes?: number;
  /**
  * Threshold value (%) at which to generate a warning msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#threshold BgpAddressFamilyRoutingProfile#threshold}
  */
  readonly threshold?: number;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToTerraform(struct!.action),
    max_prefixes: cdktf.numberToTerraform(struct!.maxPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction",
    },
    max_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.maxPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._maxPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrefixes = this._maxPrefixes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._maxPrefixes = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._maxPrefixes = value.maxPrefixes;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // max_prefixes - computed: true, optional: true, required: false
  private _maxPrefixes?: number; 
  public get maxPrefixes() {
    return this.getNumberAttribute('max_prefixes');
  }
  public set maxPrefixes(value: number) {
    this._maxPrefixes = value;
  }
  public resetMaxPrefixes() {
    this._maxPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrefixesInput() {
    return this._maxPrefixes;
  }

  // threshold - computed: true, optional: true, required: false
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
export interface BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastNextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#self BgpAddressFamilyRoutingProfile#self}
  */
  readonly selfAttribute?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#self_force BgpAddressFamilyRoutingProfile#self_force}
  */
  readonly selfForce?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastNextHopToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastNextHopToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf",
    },
    self_force: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._self?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self?.internalValue;
    }
    if (this._selfForce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfForce = this._selfForce?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._self.internalValue = undefined;
      this._selfForce.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._self.internalValue = value.selfAttribute;
      this._selfForce.internalValue = value.selfForce;
    }
  }

  // self - computed: false, optional: true, required: false
  private _self = new BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf) {
    this._self.internalValue = value;
  }
  public resetSelfAttribute() {
    this._self.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self.internalValue;
  }

  // self_force - computed: false, optional: true, required: false
  private _selfForce = new BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: BgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce) {
    this._selfForce.internalValue = value;
  }
  public resetSelfForce() {
    this._selfForce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfForceInput() {
    return this._selfForce.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastOrf {
  /**
  * Advertise Prefix-List ORF Capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#orf_prefix_list BgpAddressFamilyRoutingProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastOrfToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastOrfToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    orf_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.orfPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orfPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.orfPrefixList = this._orfPrefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orfPrefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orfPrefixList = value.orfPrefixList;
    }
  }

  // orf_prefix_list - computed: true, optional: true, required: false
  private _orfPrefixList?: string; 
  public get orfPrefixList() {
    return this.getStringAttribute('orf_prefix_list');
  }
  public set orfPrefixList(value: string) {
    this._orfPrefixList = value;
  }
  public resetOrfPrefixList() {
    this._orfPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfPrefixListInput() {
    return this._orfPrefixList;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#all BgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#replace_as BgpAddressFamilyRoutingProfile#replace_as}
  */
  readonly replaceAs?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll",
    },
    replace_as: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._replaceAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceAs = this._replaceAs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._replaceAs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._replaceAs.internalValue = value.replaceAs;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // replace_as - computed: false, optional: true, required: false
  private _replaceAs = new BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs) {
    this._replaceAs.internalValue = value;
  }
  public resetReplaceAs() {
    this._replaceAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceAsInput() {
    return this._replaceAs.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard {
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#all BgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#both BgpAddressFamilyRoutingProfile#both}
  */
  readonly both?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#extended BgpAddressFamilyRoutingProfile#extended}
  */
  readonly extended?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#large BgpAddressFamilyRoutingProfile#large}
  */
  readonly large?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#standard BgpAddressFamilyRoutingProfile#standard}
  */
  readonly standard?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToTerraform(struct!.all),
    both: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToTerraform(struct!.both),
    extended: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToTerraform(struct!.extended),
    large: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToTerraform(struct!.large),
    standard: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll",
    },
    both: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth",
    },
    extended: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended",
    },
    large: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge",
    },
    standard: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._both?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.both = this._both?.internalValue;
    }
    if (this._extended?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extended = this._extended?.internalValue;
    }
    if (this._large?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.large = this._large?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._both.internalValue = undefined;
      this._extended.internalValue = undefined;
      this._large.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._both.internalValue = value.both;
      this._extended.internalValue = value.extended;
      this._large.internalValue = value.large;
      this._standard.internalValue = value.standard;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // both - computed: false, optional: true, required: false
  private _both = new BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // extended - computed: false, optional: true, required: false
  private _extended = new BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended) {
    this._extended.internalValue = value;
  }
  public resetExtended() {
    this._extended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended.internalValue;
  }

  // large - computed: false, optional: true, required: false
  private _large = new BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4Multicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#add_path BgpAddressFamilyRoutingProfile#add_path}
  */
  readonly addPath?: BgpAddressFamilyRoutingProfileIpv4MulticastAddPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#allowas_in BgpAddressFamilyRoutingProfile#allowas_in}
  */
  readonly allowasIn?: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#as_override BgpAddressFamilyRoutingProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#default_originate BgpAddressFamilyRoutingProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-Map used in Default Originate Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#default_originate_map BgpAddressFamilyRoutingProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#enable BgpAddressFamilyRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#maximum_prefix BgpAddressFamilyRoutingProfile#maximum_prefix}
  */
  readonly maximumPrefix?: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#next_hop BgpAddressFamilyRoutingProfile#next_hop}
  */
  readonly nextHop?: BgpAddressFamilyRoutingProfileIpv4MulticastNextHop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#orf BgpAddressFamilyRoutingProfile#orf}
  */
  readonly orf?: BgpAddressFamilyRoutingProfileIpv4MulticastOrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#remove_private_as BgpAddressFamilyRoutingProfile#remove_private_as}
  */
  readonly removePrivateAs?: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs;
  /**
  * Route Reflector Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#route_reflector_client BgpAddressFamilyRoutingProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#send_community BgpAddressFamilyRoutingProfile#send_community}
  */
  readonly sendCommunity?: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#soft_reconfig_with_stored_info BgpAddressFamilyRoutingProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyRoutingProfileIpv4MulticastToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: bgpAddressFamilyRoutingProfileIpv4MulticastAddPathToTerraform(struct!.addPath),
    allowas_in: bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: bgpAddressFamilyRoutingProfileIpv4MulticastNextHopToTerraform(struct!.nextHop),
    orf: bgpAddressFamilyRoutingProfileIpv4MulticastOrfToTerraform(struct!.orf),
    remove_private_as: bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4MulticastToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastAddPath",
    },
    allowas_in: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_originate: {
      value: cdktf.booleanToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_originate_map: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginateMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_prefix: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix",
    },
    next_hop: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastNextHop",
    },
    orf: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastOrf",
    },
    remove_private_as: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity",
    },
    soft_reconfig_with_stored_info: {
      value: cdktf.booleanToHclTerraform(struct!.softReconfigWithStoredInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPath = this._addPath?.internalValue;
    }
    if (this._allowasIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn?.internalValue;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._defaultOriginateMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginateMap = this._defaultOriginateMap;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maximumPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._orf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orf = this._orf?.internalValue;
    }
    if (this._removePrivateAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs?.internalValue;
    }
    if (this._routeReflectorClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient = this._routeReflectorClient;
    }
    if (this._sendCommunity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity?.internalValue;
    }
    if (this._softReconfigWithStoredInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigWithStoredInfo = this._softReconfigWithStoredInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addPath.internalValue = undefined;
      this._allowasIn.internalValue = undefined;
      this._asOverride = undefined;
      this._defaultOriginate = undefined;
      this._defaultOriginateMap = undefined;
      this._enable = undefined;
      this._maximumPrefix.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._orf.internalValue = undefined;
      this._removePrivateAs.internalValue = undefined;
      this._routeReflectorClient = undefined;
      this._sendCommunity.internalValue = undefined;
      this._softReconfigWithStoredInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addPath.internalValue = value.addPath;
      this._allowasIn.internalValue = value.allowasIn;
      this._asOverride = value.asOverride;
      this._defaultOriginate = value.defaultOriginate;
      this._defaultOriginateMap = value.defaultOriginateMap;
      this._enable = value.enable;
      this._maximumPrefix.internalValue = value.maximumPrefix;
      this._nextHop.internalValue = value.nextHop;
      this._orf.internalValue = value.orf;
      this._removePrivateAs.internalValue = value.removePrivateAs;
      this._routeReflectorClient = value.routeReflectorClient;
      this._sendCommunity.internalValue = value.sendCommunity;
      this._softReconfigWithStoredInfo = value.softReconfigWithStoredInfo;
    }
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath = new BgpAddressFamilyRoutingProfileIpv4MulticastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: BgpAddressFamilyRoutingProfileIpv4MulticastAddPath) {
    this._addPath.internalValue = value;
  }
  public resetAddPath() {
    this._addPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath.internalValue;
  }

  // allowas_in - computed: false, optional: true, required: false
  private _allowasIn = new BgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: BgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn) {
    this._allowasIn.internalValue = value;
  }
  public resetAllowasIn() {
    this._allowasIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn.internalValue;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: boolean | cdktf.IResolvable; 
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }
  public set defaultOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // default_originate_map - computed: false, optional: true, required: false
  private _defaultOriginateMap?: string; 
  public get defaultOriginateMap() {
    return this.getStringAttribute('default_originate_map');
  }
  public set defaultOriginateMap(value: string) {
    this._defaultOriginateMap = value;
  }
  public resetDefaultOriginateMap() {
    this._defaultOriginateMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateMapInput() {
    return this._defaultOriginateMap;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix = new BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: BgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix) {
    this._maximumPrefix.internalValue = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpAddressFamilyRoutingProfileIpv4MulticastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpAddressFamilyRoutingProfileIpv4MulticastNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // orf - computed: false, optional: true, required: false
  private _orf = new BgpAddressFamilyRoutingProfileIpv4MulticastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: BgpAddressFamilyRoutingProfileIpv4MulticastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs = new BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: BgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs) {
    this._removePrivateAs.internalValue = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs.internalValue;
  }

  // route_reflector_client - computed: false, optional: true, required: false
  private _routeReflectorClient?: boolean | cdktf.IResolvable; 
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity = new BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: BgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity) {
    this._sendCommunity.internalValue = value;
  }
  public resetSendCommunity() {
    this._sendCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity.internalValue;
  }

  // soft_reconfig_with_stored_info - computed: false, optional: true, required: false
  private _softReconfigWithStoredInfo?: boolean | cdktf.IResolvable; 
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
  public set softReconfigWithStoredInfo(value: boolean | cdktf.IResolvable) {
    this._softReconfigWithStoredInfo = value;
  }
  public resetSoftReconfigWithStoredInfo() {
    this._softReconfigWithStoredInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigWithStoredInfoInput() {
    return this._softReconfigWithStoredInfo;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastAddPath {
  /**
  * Advertise all paths to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#tx_all_paths BgpAddressFamilyRoutingProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Advertise the bestpath per each neighboring AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#tx_bestpath_per_as BgpAddressFamilyRoutingProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastAddPathToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastAddPathToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tx_all_paths: {
      value: cdktf.booleanToHclTerraform(struct!.txAllPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tx_bestpath_per_as: {
      value: cdktf.booleanToHclTerraform(struct!.txBestpathPerAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._txAllPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.txAllPaths = this._txAllPaths;
    }
    if (this._txBestpathPerAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBestpathPerAs = this._txBestpathPerAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._txAllPaths = undefined;
      this._txBestpathPerAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._txAllPaths = value.txAllPaths;
      this._txBestpathPerAs = value.txBestpathPerAs;
    }
  }

  // tx_all_paths - computed: false, optional: true, required: false
  private _txAllPaths?: boolean | cdktf.IResolvable; 
  public get txAllPaths() {
    return this.getBooleanAttribute('tx_all_paths');
  }
  public set txAllPaths(value: boolean | cdktf.IResolvable) {
    this._txAllPaths = value;
  }
  public resetTxAllPaths() {
    this._txAllPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txAllPathsInput() {
    return this._txAllPaths;
  }

  // tx_bestpath_per_as - computed: false, optional: true, required: false
  private _txBestpathPerAs?: boolean | cdktf.IResolvable; 
  public get txBestpathPerAs() {
    return this.getBooleanAttribute('tx_bestpath_per_as');
  }
  public set txBestpathPerAs(value: boolean | cdktf.IResolvable) {
    this._txBestpathPerAs = value;
  }
  public resetTxBestpathPerAs() {
    this._txBestpathPerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBestpathPerAsInput() {
    return this._txBestpathPerAs;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn {
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#occurrence BgpAddressFamilyRoutingProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#origin BgpAddressFamilyRoutingProfile#origin}
  */
  readonly origin?: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    occurrence: {
      value: cdktf.numberToHclTerraform(struct!.occurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._occurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrence = this._occurrence;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._occurrence = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._occurrence = value.occurrence;
      this._origin.internalValue = value.origin;
    }
  }

  // occurrence - computed: false, optional: true, required: false
  private _occurrence?: number; 
  public get occurrence() {
    return this.getNumberAttribute('occurrence');
  }
  public set occurrence(value: number) {
    this._occurrence = value;
  }
  public resetOccurrence() {
    this._occurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceInput() {
    return this._occurrence;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart {
  /**
  * Restart interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#interval BgpAddressFamilyRoutingProfile#interval}
  */
  readonly interval?: number;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#restart BgpAddressFamilyRoutingProfile#restart}
  */
  readonly restart?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#warning_only BgpAddressFamilyRoutingProfile#warning_only}
  */
  readonly warningOnly?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restart = this._restart?.internalValue;
    }
    if (this._warningOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningOnly = this._warningOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restart.internalValue = undefined;
      this._warningOnly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restart.internalValue = value.restart;
      this._warningOnly.internalValue = value.warningOnly;
    }
  }

  // restart - computed: false, optional: true, required: false
  private _restart = new BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart) {
    this._restart.internalValue = value;
  }
  public resetRestart() {
    this._restart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart.internalValue;
  }

  // warning_only - computed: false, optional: true, required: false
  private _warningOnly = new BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly) {
    this._warningOnly.internalValue = value;
  }
  public resetWarningOnly() {
    this._warningOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningOnlyInput() {
    return this._warningOnly.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#action BgpAddressFamilyRoutingProfile#action}
  */
  readonly action?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction;
  /**
  * Max allowed prefixes from this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#max_prefixes BgpAddressFamilyRoutingProfile#max_prefixes}
  */
  readonly maxPrefixes?: number;
  /**
  * Threshold value (%) at which to generate a warning msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#threshold BgpAddressFamilyRoutingProfile#threshold}
  */
  readonly threshold?: number;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToTerraform(struct!.action),
    max_prefixes: cdktf.numberToTerraform(struct!.maxPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction",
    },
    max_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.maxPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._maxPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrefixes = this._maxPrefixes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._maxPrefixes = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._maxPrefixes = value.maxPrefixes;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // max_prefixes - computed: true, optional: true, required: false
  private _maxPrefixes?: number; 
  public get maxPrefixes() {
    return this.getNumberAttribute('max_prefixes');
  }
  public set maxPrefixes(value: number) {
    this._maxPrefixes = value;
  }
  public resetMaxPrefixes() {
    this._maxPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrefixesInput() {
    return this._maxPrefixes;
  }

  // threshold - computed: true, optional: true, required: false
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
export interface BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastNextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#self BgpAddressFamilyRoutingProfile#self}
  */
  readonly selfAttribute?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#self_force BgpAddressFamilyRoutingProfile#self_force}
  */
  readonly selfForce?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastNextHopToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastNextHopToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf",
    },
    self_force: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._self?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self?.internalValue;
    }
    if (this._selfForce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfForce = this._selfForce?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._self.internalValue = undefined;
      this._selfForce.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._self.internalValue = value.selfAttribute;
      this._selfForce.internalValue = value.selfForce;
    }
  }

  // self - computed: false, optional: true, required: false
  private _self = new BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf) {
    this._self.internalValue = value;
  }
  public resetSelfAttribute() {
    this._self.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self.internalValue;
  }

  // self_force - computed: false, optional: true, required: false
  private _selfForce = new BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: BgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce) {
    this._selfForce.internalValue = value;
  }
  public resetSelfForce() {
    this._selfForce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfForceInput() {
    return this._selfForce.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastOrf {
  /**
  * Advertise Prefix-List ORF Capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#orf_prefix_list BgpAddressFamilyRoutingProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastOrfToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastOrfToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    orf_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.orfPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orfPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.orfPrefixList = this._orfPrefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orfPrefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orfPrefixList = value.orfPrefixList;
    }
  }

  // orf_prefix_list - computed: true, optional: true, required: false
  private _orfPrefixList?: string; 
  public get orfPrefixList() {
    return this.getStringAttribute('orf_prefix_list');
  }
  public set orfPrefixList(value: string) {
    this._orfPrefixList = value;
  }
  public resetOrfPrefixList() {
    this._orfPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfPrefixListInput() {
    return this._orfPrefixList;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#all BgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#replace_as BgpAddressFamilyRoutingProfile#replace_as}
  */
  readonly replaceAs?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll",
    },
    replace_as: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._replaceAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceAs = this._replaceAs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._replaceAs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._replaceAs.internalValue = value.replaceAs;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // replace_as - computed: false, optional: true, required: false
  private _replaceAs = new BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs) {
    this._replaceAs.internalValue = value;
  }
  public resetReplaceAs() {
    this._replaceAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceAsInput() {
    return this._replaceAs.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard {
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#all BgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#both BgpAddressFamilyRoutingProfile#both}
  */
  readonly both?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#extended BgpAddressFamilyRoutingProfile#extended}
  */
  readonly extended?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#large BgpAddressFamilyRoutingProfile#large}
  */
  readonly large?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#standard BgpAddressFamilyRoutingProfile#standard}
  */
  readonly standard?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToTerraform(struct!.all),
    both: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToTerraform(struct!.both),
    extended: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToTerraform(struct!.extended),
    large: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToTerraform(struct!.large),
    standard: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll",
    },
    both: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth",
    },
    extended: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended",
    },
    large: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge",
    },
    standard: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._both?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.both = this._both?.internalValue;
    }
    if (this._extended?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extended = this._extended?.internalValue;
    }
    if (this._large?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.large = this._large?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._both.internalValue = undefined;
      this._extended.internalValue = undefined;
      this._large.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._both.internalValue = value.both;
      this._extended.internalValue = value.extended;
      this._large.internalValue = value.large;
      this._standard.internalValue = value.standard;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // both - computed: false, optional: true, required: false
  private _both = new BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // extended - computed: false, optional: true, required: false
  private _extended = new BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended) {
    this._extended.internalValue = value;
  }
  public resetExtended() {
    this._extended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended.internalValue;
  }

  // large - computed: false, optional: true, required: false
  private _large = new BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#add_path BgpAddressFamilyRoutingProfile#add_path}
  */
  readonly addPath?: BgpAddressFamilyRoutingProfileIpv4UnicastAddPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#allowas_in BgpAddressFamilyRoutingProfile#allowas_in}
  */
  readonly allowasIn?: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#as_override BgpAddressFamilyRoutingProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#default_originate BgpAddressFamilyRoutingProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-Map used in Default Originate Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#default_originate_map BgpAddressFamilyRoutingProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#enable BgpAddressFamilyRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#maximum_prefix BgpAddressFamilyRoutingProfile#maximum_prefix}
  */
  readonly maximumPrefix?: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#next_hop BgpAddressFamilyRoutingProfile#next_hop}
  */
  readonly nextHop?: BgpAddressFamilyRoutingProfileIpv4UnicastNextHop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#orf BgpAddressFamilyRoutingProfile#orf}
  */
  readonly orf?: BgpAddressFamilyRoutingProfileIpv4UnicastOrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#remove_private_as BgpAddressFamilyRoutingProfile#remove_private_as}
  */
  readonly removePrivateAs?: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs;
  /**
  * Route Reflector Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#route_reflector_client BgpAddressFamilyRoutingProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#send_community BgpAddressFamilyRoutingProfile#send_community}
  */
  readonly sendCommunity?: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#soft_reconfig_with_stored_info BgpAddressFamilyRoutingProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyRoutingProfileIpv4UnicastToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: bgpAddressFamilyRoutingProfileIpv4UnicastAddPathToTerraform(struct!.addPath),
    allowas_in: bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: bgpAddressFamilyRoutingProfileIpv4UnicastNextHopToTerraform(struct!.nextHop),
    orf: bgpAddressFamilyRoutingProfileIpv4UnicastOrfToTerraform(struct!.orf),
    remove_private_as: bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4UnicastToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastAddPath",
    },
    allowas_in: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_originate: {
      value: cdktf.booleanToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_originate_map: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginateMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_prefix: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix",
    },
    next_hop: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastNextHop",
    },
    orf: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastOrf",
    },
    remove_private_as: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity",
    },
    soft_reconfig_with_stored_info: {
      value: cdktf.booleanToHclTerraform(struct!.softReconfigWithStoredInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPath = this._addPath?.internalValue;
    }
    if (this._allowasIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn?.internalValue;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._defaultOriginateMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginateMap = this._defaultOriginateMap;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maximumPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._orf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orf = this._orf?.internalValue;
    }
    if (this._removePrivateAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs?.internalValue;
    }
    if (this._routeReflectorClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient = this._routeReflectorClient;
    }
    if (this._sendCommunity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity?.internalValue;
    }
    if (this._softReconfigWithStoredInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigWithStoredInfo = this._softReconfigWithStoredInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addPath.internalValue = undefined;
      this._allowasIn.internalValue = undefined;
      this._asOverride = undefined;
      this._defaultOriginate = undefined;
      this._defaultOriginateMap = undefined;
      this._enable = undefined;
      this._maximumPrefix.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._orf.internalValue = undefined;
      this._removePrivateAs.internalValue = undefined;
      this._routeReflectorClient = undefined;
      this._sendCommunity.internalValue = undefined;
      this._softReconfigWithStoredInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addPath.internalValue = value.addPath;
      this._allowasIn.internalValue = value.allowasIn;
      this._asOverride = value.asOverride;
      this._defaultOriginate = value.defaultOriginate;
      this._defaultOriginateMap = value.defaultOriginateMap;
      this._enable = value.enable;
      this._maximumPrefix.internalValue = value.maximumPrefix;
      this._nextHop.internalValue = value.nextHop;
      this._orf.internalValue = value.orf;
      this._removePrivateAs.internalValue = value.removePrivateAs;
      this._routeReflectorClient = value.routeReflectorClient;
      this._sendCommunity.internalValue = value.sendCommunity;
      this._softReconfigWithStoredInfo = value.softReconfigWithStoredInfo;
    }
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath = new BgpAddressFamilyRoutingProfileIpv4UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: BgpAddressFamilyRoutingProfileIpv4UnicastAddPath) {
    this._addPath.internalValue = value;
  }
  public resetAddPath() {
    this._addPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath.internalValue;
  }

  // allowas_in - computed: false, optional: true, required: false
  private _allowasIn = new BgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: BgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn) {
    this._allowasIn.internalValue = value;
  }
  public resetAllowasIn() {
    this._allowasIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn.internalValue;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: boolean | cdktf.IResolvable; 
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }
  public set defaultOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // default_originate_map - computed: false, optional: true, required: false
  private _defaultOriginateMap?: string; 
  public get defaultOriginateMap() {
    return this.getStringAttribute('default_originate_map');
  }
  public set defaultOriginateMap(value: string) {
    this._defaultOriginateMap = value;
  }
  public resetDefaultOriginateMap() {
    this._defaultOriginateMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateMapInput() {
    return this._defaultOriginateMap;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix = new BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: BgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix) {
    this._maximumPrefix.internalValue = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpAddressFamilyRoutingProfileIpv4UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpAddressFamilyRoutingProfileIpv4UnicastNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // orf - computed: false, optional: true, required: false
  private _orf = new BgpAddressFamilyRoutingProfileIpv4UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: BgpAddressFamilyRoutingProfileIpv4UnicastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs = new BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: BgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs) {
    this._removePrivateAs.internalValue = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs.internalValue;
  }

  // route_reflector_client - computed: false, optional: true, required: false
  private _routeReflectorClient?: boolean | cdktf.IResolvable; 
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity = new BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: BgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity) {
    this._sendCommunity.internalValue = value;
  }
  public resetSendCommunity() {
    this._sendCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity.internalValue;
  }

  // soft_reconfig_with_stored_info - computed: false, optional: true, required: false
  private _softReconfigWithStoredInfo?: boolean | cdktf.IResolvable; 
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
  public set softReconfigWithStoredInfo(value: boolean | cdktf.IResolvable) {
    this._softReconfigWithStoredInfo = value;
  }
  public resetSoftReconfigWithStoredInfo() {
    this._softReconfigWithStoredInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigWithStoredInfoInput() {
    return this._softReconfigWithStoredInfo;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#multicast BgpAddressFamilyRoutingProfile#multicast}
  */
  readonly multicast?: BgpAddressFamilyRoutingProfileIpv4Multicast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#unicast BgpAddressFamilyRoutingProfile#unicast}
  */
  readonly unicast?: BgpAddressFamilyRoutingProfileIpv4Unicast;
}

export function bgpAddressFamilyRoutingProfileIpv4ToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast: bgpAddressFamilyRoutingProfileIpv4MulticastToTerraform(struct!.multicast),
    unicast: bgpAddressFamilyRoutingProfileIpv4UnicastToTerraform(struct!.unicast),
  }
}


export function bgpAddressFamilyRoutingProfileIpv4ToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast: {
      value: bgpAddressFamilyRoutingProfileIpv4MulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4Multicast",
    },
    unicast: {
      value: bgpAddressFamilyRoutingProfileIpv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multicast.internalValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multicast.internalValue = value.multicast;
      this._unicast.internalValue = value.unicast;
    }
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new BgpAddressFamilyRoutingProfileIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: BgpAddressFamilyRoutingProfileIpv4Multicast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new BgpAddressFamilyRoutingProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpAddressFamilyRoutingProfileIpv4Unicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastAddPath {
  /**
  * Advertise all paths to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#tx_all_paths BgpAddressFamilyRoutingProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Advertise the bestpath per each neighboring AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#tx_bestpath_per_as BgpAddressFamilyRoutingProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastAddPathToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastAddPathToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tx_all_paths: {
      value: cdktf.booleanToHclTerraform(struct!.txAllPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tx_bestpath_per_as: {
      value: cdktf.booleanToHclTerraform(struct!.txBestpathPerAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._txAllPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.txAllPaths = this._txAllPaths;
    }
    if (this._txBestpathPerAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBestpathPerAs = this._txBestpathPerAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._txAllPaths = undefined;
      this._txBestpathPerAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._txAllPaths = value.txAllPaths;
      this._txBestpathPerAs = value.txBestpathPerAs;
    }
  }

  // tx_all_paths - computed: false, optional: true, required: false
  private _txAllPaths?: boolean | cdktf.IResolvable; 
  public get txAllPaths() {
    return this.getBooleanAttribute('tx_all_paths');
  }
  public set txAllPaths(value: boolean | cdktf.IResolvable) {
    this._txAllPaths = value;
  }
  public resetTxAllPaths() {
    this._txAllPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txAllPathsInput() {
    return this._txAllPaths;
  }

  // tx_bestpath_per_as - computed: false, optional: true, required: false
  private _txBestpathPerAs?: boolean | cdktf.IResolvable; 
  public get txBestpathPerAs() {
    return this.getBooleanAttribute('tx_bestpath_per_as');
  }
  public set txBestpathPerAs(value: boolean | cdktf.IResolvable) {
    this._txBestpathPerAs = value;
  }
  public resetTxBestpathPerAs() {
    this._txBestpathPerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBestpathPerAsInput() {
    return this._txBestpathPerAs;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn {
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#occurrence BgpAddressFamilyRoutingProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#origin BgpAddressFamilyRoutingProfile#origin}
  */
  readonly origin?: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    occurrence: {
      value: cdktf.numberToHclTerraform(struct!.occurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._occurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrence = this._occurrence;
    }
    if (this._origin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._occurrence = undefined;
      this._origin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._occurrence = value.occurrence;
      this._origin.internalValue = value.origin;
    }
  }

  // occurrence - computed: false, optional: true, required: false
  private _occurrence?: number; 
  public get occurrence() {
    return this.getNumberAttribute('occurrence');
  }
  public set occurrence(value: number) {
    this._occurrence = value;
  }
  public resetOccurrence() {
    this._occurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceInput() {
    return this._occurrence;
  }

  // origin - computed: false, optional: true, required: false
  private _origin = new BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin) {
    this._origin.internalValue = value;
  }
  public resetOrigin() {
    this._origin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart {
  /**
  * Restart interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#interval BgpAddressFamilyRoutingProfile#interval}
  */
  readonly interval?: number;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
    }
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#restart BgpAddressFamilyRoutingProfile#restart}
  */
  readonly restart?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#warning_only BgpAddressFamilyRoutingProfile#warning_only}
  */
  readonly warningOnly?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restart = this._restart?.internalValue;
    }
    if (this._warningOnly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningOnly = this._warningOnly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restart.internalValue = undefined;
      this._warningOnly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restart.internalValue = value.restart;
      this._warningOnly.internalValue = value.warningOnly;
    }
  }

  // restart - computed: false, optional: true, required: false
  private _restart = new BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart) {
    this._restart.internalValue = value;
  }
  public resetRestart() {
    this._restart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart.internalValue;
  }

  // warning_only - computed: false, optional: true, required: false
  private _warningOnly = new BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly) {
    this._warningOnly.internalValue = value;
  }
  public resetWarningOnly() {
    this._warningOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningOnlyInput() {
    return this._warningOnly.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#action BgpAddressFamilyRoutingProfile#action}
  */
  readonly action?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction;
  /**
  * Max allowed prefixes from this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#max_prefixes BgpAddressFamilyRoutingProfile#max_prefixes}
  */
  readonly maxPrefixes?: number;
  /**
  * Threshold value (%) at which to generate a warning msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#threshold BgpAddressFamilyRoutingProfile#threshold}
  */
  readonly threshold?: number;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToTerraform(struct!.action),
    max_prefixes: cdktf.numberToTerraform(struct!.maxPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction",
    },
    max_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.maxPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._maxPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrefixes = this._maxPrefixes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._maxPrefixes = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._maxPrefixes = value.maxPrefixes;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // max_prefixes - computed: true, optional: true, required: false
  private _maxPrefixes?: number; 
  public get maxPrefixes() {
    return this.getNumberAttribute('max_prefixes');
  }
  public set maxPrefixes(value: number) {
    this._maxPrefixes = value;
  }
  public resetMaxPrefixes() {
    this._maxPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrefixesInput() {
    return this._maxPrefixes;
  }

  // threshold - computed: true, optional: true, required: false
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
export interface BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastNextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#self BgpAddressFamilyRoutingProfile#self}
  */
  readonly selfAttribute?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#self_force BgpAddressFamilyRoutingProfile#self_force}
  */
  readonly selfForce?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastNextHopToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastNextHopToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf",
    },
    self_force: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._self?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self?.internalValue;
    }
    if (this._selfForce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfForce = this._selfForce?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._self.internalValue = undefined;
      this._selfForce.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._self.internalValue = value.selfAttribute;
      this._selfForce.internalValue = value.selfForce;
    }
  }

  // self - computed: false, optional: true, required: false
  private _self = new BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf) {
    this._self.internalValue = value;
  }
  public resetSelfAttribute() {
    this._self.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self.internalValue;
  }

  // self_force - computed: false, optional: true, required: false
  private _selfForce = new BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: BgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce) {
    this._selfForce.internalValue = value;
  }
  public resetSelfForce() {
    this._selfForce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfForceInput() {
    return this._selfForce.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastOrf {
  /**
  * Advertise Prefix-List ORF Capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#orf_prefix_list BgpAddressFamilyRoutingProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastOrfToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastOrfToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    orf_prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.orfPrefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orfPrefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.orfPrefixList = this._orfPrefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orfPrefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orfPrefixList = value.orfPrefixList;
    }
  }

  // orf_prefix_list - computed: true, optional: true, required: false
  private _orfPrefixList?: string; 
  public get orfPrefixList() {
    return this.getStringAttribute('orf_prefix_list');
  }
  public set orfPrefixList(value: string) {
    this._orfPrefixList = value;
  }
  public resetOrfPrefixList() {
    this._orfPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfPrefixListInput() {
    return this._orfPrefixList;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#all BgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#replace_as BgpAddressFamilyRoutingProfile#replace_as}
  */
  readonly replaceAs?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll",
    },
    replace_as: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._replaceAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceAs = this._replaceAs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._replaceAs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._replaceAs.internalValue = value.replaceAs;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // replace_as - computed: false, optional: true, required: false
  private _replaceAs = new BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs) {
    this._replaceAs.internalValue = value;
  }
  public resetReplaceAs() {
    this._replaceAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceAsInput() {
    return this._replaceAs.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard {
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#all BgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#both BgpAddressFamilyRoutingProfile#both}
  */
  readonly both?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#extended BgpAddressFamilyRoutingProfile#extended}
  */
  readonly extended?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#large BgpAddressFamilyRoutingProfile#large}
  */
  readonly large?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#standard BgpAddressFamilyRoutingProfile#standard}
  */
  readonly standard?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToTerraform(struct!.all),
    both: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToTerraform(struct!.both),
    extended: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToTerraform(struct!.extended),
    large: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToTerraform(struct!.large),
    standard: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll",
    },
    both: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth",
    },
    extended: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended",
    },
    large: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge",
    },
    standard: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._both?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.both = this._both?.internalValue;
    }
    if (this._extended?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extended = this._extended?.internalValue;
    }
    if (this._large?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.large = this._large?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all.internalValue = undefined;
      this._both.internalValue = undefined;
      this._extended.internalValue = undefined;
      this._large.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all.internalValue = value.all;
      this._both.internalValue = value.both;
      this._extended.internalValue = value.extended;
      this._large.internalValue = value.large;
      this._standard.internalValue = value.standard;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // both - computed: false, optional: true, required: false
  private _both = new BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // extended - computed: false, optional: true, required: false
  private _extended = new BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended) {
    this._extended.internalValue = value;
  }
  public resetExtended() {
    this._extended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended.internalValue;
  }

  // large - computed: false, optional: true, required: false
  private _large = new BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#add_path BgpAddressFamilyRoutingProfile#add_path}
  */
  readonly addPath?: BgpAddressFamilyRoutingProfileIpv6UnicastAddPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#allowas_in BgpAddressFamilyRoutingProfile#allowas_in}
  */
  readonly allowasIn?: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#as_override BgpAddressFamilyRoutingProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#default_originate BgpAddressFamilyRoutingProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-Map used in Default Originate Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#default_originate_map BgpAddressFamilyRoutingProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#enable BgpAddressFamilyRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#maximum_prefix BgpAddressFamilyRoutingProfile#maximum_prefix}
  */
  readonly maximumPrefix?: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#next_hop BgpAddressFamilyRoutingProfile#next_hop}
  */
  readonly nextHop?: BgpAddressFamilyRoutingProfileIpv6UnicastNextHop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#orf BgpAddressFamilyRoutingProfile#orf}
  */
  readonly orf?: BgpAddressFamilyRoutingProfileIpv6UnicastOrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#remove_private_as BgpAddressFamilyRoutingProfile#remove_private_as}
  */
  readonly removePrivateAs?: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs;
  /**
  * Route Reflector Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#route_reflector_client BgpAddressFamilyRoutingProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#send_community BgpAddressFamilyRoutingProfile#send_community}
  */
  readonly sendCommunity?: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#soft_reconfig_with_stored_info BgpAddressFamilyRoutingProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyRoutingProfileIpv6UnicastToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: bgpAddressFamilyRoutingProfileIpv6UnicastAddPathToTerraform(struct!.addPath),
    allowas_in: bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: bgpAddressFamilyRoutingProfileIpv6UnicastNextHopToTerraform(struct!.nextHop),
    orf: bgpAddressFamilyRoutingProfileIpv6UnicastOrfToTerraform(struct!.orf),
    remove_private_as: bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6UnicastToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastAddPath",
    },
    allowas_in: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn",
    },
    as_override: {
      value: cdktf.booleanToHclTerraform(struct!.asOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_originate: {
      value: cdktf.booleanToHclTerraform(struct!.defaultOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_originate_map: {
      value: cdktf.stringToHclTerraform(struct!.defaultOriginateMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_prefix: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix",
    },
    next_hop: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastNextHop",
    },
    orf: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastOrf",
    },
    remove_private_as: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity",
    },
    soft_reconfig_with_stored_info: {
      value: cdktf.booleanToHclTerraform(struct!.softReconfigWithStoredInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPath = this._addPath?.internalValue;
    }
    if (this._allowasIn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowasIn = this._allowasIn?.internalValue;
    }
    if (this._asOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.asOverride = this._asOverride;
    }
    if (this._defaultOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginate = this._defaultOriginate;
    }
    if (this._defaultOriginateMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOriginateMap = this._defaultOriginateMap;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maximumPrefix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumPrefix = this._maximumPrefix?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._orf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orf = this._orf?.internalValue;
    }
    if (this._removePrivateAs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAs = this._removePrivateAs?.internalValue;
    }
    if (this._routeReflectorClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeReflectorClient = this._routeReflectorClient;
    }
    if (this._sendCommunity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCommunity = this._sendCommunity?.internalValue;
    }
    if (this._softReconfigWithStoredInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.softReconfigWithStoredInfo = this._softReconfigWithStoredInfo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addPath.internalValue = undefined;
      this._allowasIn.internalValue = undefined;
      this._asOverride = undefined;
      this._defaultOriginate = undefined;
      this._defaultOriginateMap = undefined;
      this._enable = undefined;
      this._maximumPrefix.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._orf.internalValue = undefined;
      this._removePrivateAs.internalValue = undefined;
      this._routeReflectorClient = undefined;
      this._sendCommunity.internalValue = undefined;
      this._softReconfigWithStoredInfo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addPath.internalValue = value.addPath;
      this._allowasIn.internalValue = value.allowasIn;
      this._asOverride = value.asOverride;
      this._defaultOriginate = value.defaultOriginate;
      this._defaultOriginateMap = value.defaultOriginateMap;
      this._enable = value.enable;
      this._maximumPrefix.internalValue = value.maximumPrefix;
      this._nextHop.internalValue = value.nextHop;
      this._orf.internalValue = value.orf;
      this._removePrivateAs.internalValue = value.removePrivateAs;
      this._routeReflectorClient = value.routeReflectorClient;
      this._sendCommunity.internalValue = value.sendCommunity;
      this._softReconfigWithStoredInfo = value.softReconfigWithStoredInfo;
    }
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath = new BgpAddressFamilyRoutingProfileIpv6UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: BgpAddressFamilyRoutingProfileIpv6UnicastAddPath) {
    this._addPath.internalValue = value;
  }
  public resetAddPath() {
    this._addPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath.internalValue;
  }

  // allowas_in - computed: false, optional: true, required: false
  private _allowasIn = new BgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: BgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn) {
    this._allowasIn.internalValue = value;
  }
  public resetAllowasIn() {
    this._allowasIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn.internalValue;
  }

  // as_override - computed: false, optional: true, required: false
  private _asOverride?: boolean | cdktf.IResolvable; 
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }
  public set asOverride(value: boolean | cdktf.IResolvable) {
    this._asOverride = value;
  }
  public resetAsOverride() {
    this._asOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideInput() {
    return this._asOverride;
  }

  // default_originate - computed: false, optional: true, required: false
  private _defaultOriginate?: boolean | cdktf.IResolvable; 
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }
  public set defaultOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultOriginate = value;
  }
  public resetDefaultOriginate() {
    this._defaultOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateInput() {
    return this._defaultOriginate;
  }

  // default_originate_map - computed: false, optional: true, required: false
  private _defaultOriginateMap?: string; 
  public get defaultOriginateMap() {
    return this.getStringAttribute('default_originate_map');
  }
  public set defaultOriginateMap(value: string) {
    this._defaultOriginateMap = value;
  }
  public resetDefaultOriginateMap() {
    this._defaultOriginateMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOriginateMapInput() {
    return this._defaultOriginateMap;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // maximum_prefix - computed: false, optional: true, required: false
  private _maximumPrefix = new BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: BgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix) {
    this._maximumPrefix.internalValue = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new BgpAddressFamilyRoutingProfileIpv6UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpAddressFamilyRoutingProfileIpv6UnicastNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // orf - computed: false, optional: true, required: false
  private _orf = new BgpAddressFamilyRoutingProfileIpv6UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: BgpAddressFamilyRoutingProfileIpv6UnicastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private_as - computed: false, optional: true, required: false
  private _removePrivateAs = new BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: BgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs) {
    this._removePrivateAs.internalValue = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs.internalValue;
  }

  // route_reflector_client - computed: false, optional: true, required: false
  private _routeReflectorClient?: boolean | cdktf.IResolvable; 
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }
  public set routeReflectorClient(value: boolean | cdktf.IResolvable) {
    this._routeReflectorClient = value;
  }
  public resetRouteReflectorClient() {
    this._routeReflectorClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeReflectorClientInput() {
    return this._routeReflectorClient;
  }

  // send_community - computed: false, optional: true, required: false
  private _sendCommunity = new BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: BgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity) {
    this._sendCommunity.internalValue = value;
  }
  public resetSendCommunity() {
    this._sendCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity.internalValue;
  }

  // soft_reconfig_with_stored_info - computed: false, optional: true, required: false
  private _softReconfigWithStoredInfo?: boolean | cdktf.IResolvable; 
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
  public set softReconfigWithStoredInfo(value: boolean | cdktf.IResolvable) {
    this._softReconfigWithStoredInfo = value;
  }
  public resetSoftReconfigWithStoredInfo() {
    this._softReconfigWithStoredInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softReconfigWithStoredInfoInput() {
    return this._softReconfigWithStoredInfo;
  }
}
export interface BgpAddressFamilyRoutingProfileIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#unicast BgpAddressFamilyRoutingProfile#unicast}
  */
  readonly unicast?: BgpAddressFamilyRoutingProfileIpv6Unicast;
}

export function bgpAddressFamilyRoutingProfileIpv6ToTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: bgpAddressFamilyRoutingProfileIpv6UnicastToTerraform(struct!.unicast),
  }
}


export function bgpAddressFamilyRoutingProfileIpv6ToHclTerraform(struct?: BgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: bgpAddressFamilyRoutingProfileIpv6UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileIpv6Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unicast.internalValue = value.unicast;
    }
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new BgpAddressFamilyRoutingProfileIpv6UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpAddressFamilyRoutingProfileIpv6Unicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface BgpAddressFamilyRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#ngfw_device BgpAddressFamilyRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function bgpAddressFamilyRoutingProfileLocationNgfwToTerraform(struct?: BgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function bgpAddressFamilyRoutingProfileLocationNgfwToHclTerraform(struct?: BgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface BgpAddressFamilyRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#name BgpAddressFamilyRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#ngfw_device BgpAddressFamilyRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#panorama_device BgpAddressFamilyRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function bgpAddressFamilyRoutingProfileLocationTemplateToTerraform(struct?: BgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function bgpAddressFamilyRoutingProfileLocationTemplateToHclTerraform(struct?: BgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface BgpAddressFamilyRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#name BgpAddressFamilyRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#ngfw_device BgpAddressFamilyRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#panorama_device BgpAddressFamilyRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function bgpAddressFamilyRoutingProfileLocationTemplateStackToTerraform(struct?: BgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function bgpAddressFamilyRoutingProfileLocationTemplateStackToHclTerraform(struct?: BgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface BgpAddressFamilyRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#ngfw BgpAddressFamilyRoutingProfile#ngfw}
  */
  readonly ngfw?: BgpAddressFamilyRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#template BgpAddressFamilyRoutingProfile#template}
  */
  readonly template?: BgpAddressFamilyRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#template_stack BgpAddressFamilyRoutingProfile#template_stack}
  */
  readonly templateStack?: BgpAddressFamilyRoutingProfileLocationTemplateStack;
}

export function bgpAddressFamilyRoutingProfileLocationToTerraform(struct?: BgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: bgpAddressFamilyRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: bgpAddressFamilyRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: bgpAddressFamilyRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function bgpAddressFamilyRoutingProfileLocationToHclTerraform(struct?: BgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: bgpAddressFamilyRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileLocationNgfw",
    },
    template: {
      value: bgpAddressFamilyRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: bgpAddressFamilyRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new BgpAddressFamilyRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: BgpAddressFamilyRoutingProfileLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new BgpAddressFamilyRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: BgpAddressFamilyRoutingProfileLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new BgpAddressFamilyRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: BgpAddressFamilyRoutingProfileLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile panos_bgp_address_family_routing_profile}
*/
export class BgpAddressFamilyRoutingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_bgp_address_family_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpAddressFamilyRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpAddressFamilyRoutingProfile to import
  * @param importFromId The id of the existing BgpAddressFamilyRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpAddressFamilyRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_bgp_address_family_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/bgp_address_family_routing_profile panos_bgp_address_family_routing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpAddressFamilyRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BgpAddressFamilyRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_bgp_address_family_routing_profile',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipv4.internalValue = config.ipv4;
    this._ipv6.internalValue = config.ipv6;
    this._location.internalValue = config.location;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpAddressFamilyRoutingProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpAddressFamilyRoutingProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new BgpAddressFamilyRoutingProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: BgpAddressFamilyRoutingProfileIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new BgpAddressFamilyRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: BgpAddressFamilyRoutingProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipv4: bgpAddressFamilyRoutingProfileIpv4ToTerraform(this._ipv4.internalValue),
      ipv6: bgpAddressFamilyRoutingProfileIpv6ToTerraform(this._ipv6.internalValue),
      location: bgpAddressFamilyRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv4: {
        value: bgpAddressFamilyRoutingProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpAddressFamilyRoutingProfileIpv4",
      },
      ipv6: {
        value: bgpAddressFamilyRoutingProfileIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpAddressFamilyRoutingProfileIpv6",
      },
      location: {
        value: bgpAddressFamilyRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpAddressFamilyRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
