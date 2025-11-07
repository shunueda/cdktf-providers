// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpAddressFamilyProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#device BgpAddressFamilyProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#folder BgpAddressFamilyProfile#folder}
  */
  readonly folder?: string;
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#ipv4 BgpAddressFamilyProfile#ipv4}
  */
  readonly ipv4?: BgpAddressFamilyProfileIpv4;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#name BgpAddressFamilyProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#snippet BgpAddressFamilyProfile#snippet}
  */
  readonly snippet?: string;
}
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath {
  /**
  * Advertise all paths to peer?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#tx_all_paths BgpAddressFamilyProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Tx bestpath per a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#tx_bestpath_per__a_s BgpAddressFamilyProfile#tx_bestpath_per__a_s}
  */
  readonly txBestpathPerAS?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastAddPathToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per__a_s: cdktf.booleanToTerraform(struct!.txBestpathPerAS),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastAddPathToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath | cdktf.IResolvable): any {
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
    tx_bestpath_per__a_s: {
      value: cdktf.booleanToHclTerraform(struct!.txBestpathPerAS),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._txAllPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.txAllPaths = this._txAllPaths;
    }
    if (this._txBestpathPerAS !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBestpathPerAS = this._txBestpathPerAS;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._txAllPaths = undefined;
      this._txBestpathPerAS = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._txAllPaths = value.txAllPaths;
      this._txBestpathPerAS = value.txBestpathPerAS;
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

  // tx_bestpath_per__a_s - computed: false, optional: true, required: false
  private _txBestpathPerAS?: boolean | cdktf.IResolvable; 
  public get txBestpathPerAS() {
    return this.getBooleanAttribute('tx_bestpath_per__a_s');
  }
  public set txBestpathPerAS(value: boolean | cdktf.IResolvable) {
    this._txBestpathPerAS = value;
  }
  public resetTxBestpathPerAS() {
    this._txBestpathPerAS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBestpathPerASInput() {
    return this._txBestpathPerAS;
  }
}
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn {
  /**
  * Number of times the firewalls own AS can be in an AS_PATH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#occurrence BgpAddressFamilyProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#origin BgpAddressFamilyProfile#origin}
  */
  readonly origin?: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn | cdktf.IResolvable): any {
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
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn | cdktf.IResolvable | undefined) {
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
  private _origin = new BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart {
  /**
  * Restart interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#interval BgpAddressFamilyProfile#interval}
  */
  readonly interval?: number;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
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

  // interval - computed: false, optional: true, required: false
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction {
  /**
  * Restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#restart BgpAddressFamilyProfile#restart}
  */
  readonly restart?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart;
  /**
  * Warning only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#warning_only BgpAddressFamilyProfile#warning_only}
  */
  readonly warningOnly?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined) {
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
  private _restart = new BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart) {
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
  private _warningOnly = new BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#action BgpAddressFamilyProfile#action}
  */
  readonly action?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction;
  /**
  * Maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#num_prefixes BgpAddressFamilyProfile#num_prefixes}
  */
  readonly numPrefixes?: number;
  /**
  * Threshold percentage of the maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#threshold BgpAddressFamilyProfile#threshold}
  */
  readonly threshold?: number;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionToTerraform(struct!.action),
    num_prefixes: cdktf.numberToTerraform(struct!.numPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction",
    },
    num_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.numPrefixes),
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

export class BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._numPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPrefixes = this._numPrefixes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._numPrefixes = undefined;
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
      this._numPrefixes = value.numPrefixes;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // num_prefixes - computed: false, optional: true, required: false
  private _numPrefixes?: number; 
  public get numPrefixes() {
    return this.getNumberAttribute('num_prefixes');
  }
  public set numPrefixes(value: number) {
    this._numPrefixes = value;
  }
  public resetNumPrefixes() {
    this._numPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPrefixesInput() {
    return this._numPrefixes;
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop {
  /**
  * Self
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#self BgpAddressFamilyProfile#self}
  */
  readonly selfAttribute?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf;
  /**
  * Self force
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#self_force BgpAddressFamilyProfile#self_force}
  */
  readonly selfForce?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf",
    },
    self_force: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop | cdktf.IResolvable | undefined) {
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
  private _self = new BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf) {
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
  private _selfForce = new BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastOrf {
  /**
  * ORF prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#orf_prefix_list BgpAddressFamilyProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastOrfToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastOrfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastOrf | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4Ipv4MulticastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastOrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastOrf | cdktf.IResolvable | undefined) {
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

  // orf_prefix_list - computed: false, optional: true, required: false
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS {
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: string;
  /**
  * Replace a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#replace__a_s BgpAddressFamilyProfile#replace__a_s}
  */
  readonly replaceAS?: string;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.stringToTerraform(struct!.all),
    replace__a_s: cdktf.stringToTerraform(struct!.replaceAS),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.stringToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace__a_s: {
      value: cdktf.stringToHclTerraform(struct!.replaceAS),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._replaceAS !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceAS = this._replaceAS;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._replaceAS = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._replaceAS = value.replaceAS;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: string; 
  public get all() {
    return this.getStringAttribute('all');
  }
  public set all(value: string) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // replace__a_s - computed: false, optional: true, required: false
  private _replaceAS?: string; 
  public get replaceAS() {
    return this.getStringAttribute('replace__a_s');
  }
  public set replaceAS(value: string) {
    this._replaceAS = value;
  }
  public resetReplaceAS() {
    this._replaceAS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceASInput() {
    return this._replaceAS;
  }
}
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard {
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity {
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll;
  /**
  * Both
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#both BgpAddressFamilyProfile#both}
  */
  readonly both?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth;
  /**
  * Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#extended BgpAddressFamilyProfile#extended}
  */
  readonly extended?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended;
  /**
  * Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#large BgpAddressFamilyProfile#large}
  */
  readonly large?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge;
  /**
  * Standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#standard BgpAddressFamilyProfile#standard}
  */
  readonly standard?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllToTerraform(struct!.all),
    both: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothToTerraform(struct!.both),
    extended: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedToTerraform(struct!.extended),
    large: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeToTerraform(struct!.large),
    standard: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll",
    },
    both: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth",
    },
    extended: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended",
    },
    large: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge",
    },
    standard: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity | cdktf.IResolvable | undefined) {
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
  private _all = new BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll) {
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
  private _both = new BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth) {
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
  private _extended = new BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended) {
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
  private _large = new BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge) {
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
  private _standard = new BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4Multicast {
  /**
  * Add path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#add_path BgpAddressFamilyProfile#add_path}
  */
  readonly addPath?: BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath;
  /**
  * Allowas in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#allowas_in BgpAddressFamilyProfile#allowas_in}
  */
  readonly allowasIn?: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#as_override BgpAddressFamilyProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate default route?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#default_originate BgpAddressFamilyProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Default originate route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#default_originate_map BgpAddressFamilyProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#enable BgpAddressFamilyProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Maximum prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#maximum_prefix BgpAddressFamilyProfile#maximum_prefix}
  */
  readonly maximumPrefix?: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#next_hop BgpAddressFamilyProfile#next_hop}
  */
  readonly nextHop?: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop;
  /**
  * Orf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#orf BgpAddressFamilyProfile#orf}
  */
  readonly orf?: BgpAddressFamilyProfileIpv4Ipv4MulticastOrf;
  /**
  * Remove private a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#remove_private__a_s BgpAddressFamilyProfile#remove_private__a_s}
  */
  readonly removePrivateAS?: BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS;
  /**
  * Route reflector client?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#route_reflector_client BgpAddressFamilyProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Send community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#send_community BgpAddressFamilyProfile#send_community}
  */
  readonly sendCommunity?: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#soft_reconfig_with_stored_info BgpAddressFamilyProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4Ipv4MulticastToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: bgpAddressFamilyProfileIpv4Ipv4MulticastAddPathToTerraform(struct!.addPath),
    allowas_in: bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopToTerraform(struct!.nextHop),
    orf: bgpAddressFamilyProfileIpv4Ipv4MulticastOrfToTerraform(struct!.orf),
    remove_private__a_s: bgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASToTerraform(struct!.removePrivateAS),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4MulticastToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath",
    },
    allowas_in: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn",
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
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix",
    },
    next_hop: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop",
    },
    orf: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastOrf",
    },
    remove_private__a_s: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASToHclTerraform(struct!.removePrivateAS),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity",
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

export class BgpAddressFamilyProfileIpv4Ipv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4Multicast | cdktf.IResolvable | undefined {
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
    if (this._removePrivateAS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAS = this._removePrivateAS?.internalValue;
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4Multicast | cdktf.IResolvable | undefined) {
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
      this._removePrivateAS.internalValue = undefined;
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
      this._removePrivateAS.internalValue = value.removePrivateAS;
      this._routeReflectorClient = value.routeReflectorClient;
      this._sendCommunity.internalValue = value.sendCommunity;
      this._softReconfigWithStoredInfo = value.softReconfigWithStoredInfo;
    }
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath = new BgpAddressFamilyProfileIpv4Ipv4MulticastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: BgpAddressFamilyProfileIpv4Ipv4MulticastAddPath) {
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
  private _allowasIn = new BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: BgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn) {
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
  private _maximumPrefix = new BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: BgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix) {
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
  private _nextHop = new BgpAddressFamilyProfileIpv4Ipv4MulticastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpAddressFamilyProfileIpv4Ipv4MulticastNextHop) {
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
  private _orf = new BgpAddressFamilyProfileIpv4Ipv4MulticastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: BgpAddressFamilyProfileIpv4Ipv4MulticastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private__a_s - computed: false, optional: true, required: false
  private _removePrivateAS = new BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASOutputReference(this, "remove_private__a_s");
  public get removePrivateAS() {
    return this._removePrivateAS;
  }
  public putRemovePrivateAS(value: BgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS) {
    this._removePrivateAS.internalValue = value;
  }
  public resetRemovePrivateAS() {
    this._removePrivateAS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateASInput() {
    return this._removePrivateAS.internalValue;
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
  private _sendCommunity = new BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: BgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath {
  /**
  * Advertise all paths to peer?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#tx_all_paths BgpAddressFamilyProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Tx bestpath per a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#tx_bestpath_per__a_s BgpAddressFamilyProfile#tx_bestpath_per__a_s}
  */
  readonly txBestpathPerAS?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastAddPathToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per__a_s: cdktf.booleanToTerraform(struct!.txBestpathPerAS),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastAddPathToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath | cdktf.IResolvable): any {
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
    tx_bestpath_per__a_s: {
      value: cdktf.booleanToHclTerraform(struct!.txBestpathPerAS),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._txAllPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.txAllPaths = this._txAllPaths;
    }
    if (this._txBestpathPerAS !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBestpathPerAS = this._txBestpathPerAS;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._txAllPaths = undefined;
      this._txBestpathPerAS = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._txAllPaths = value.txAllPaths;
      this._txBestpathPerAS = value.txBestpathPerAS;
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

  // tx_bestpath_per__a_s - computed: false, optional: true, required: false
  private _txBestpathPerAS?: boolean | cdktf.IResolvable; 
  public get txBestpathPerAS() {
    return this.getBooleanAttribute('tx_bestpath_per__a_s');
  }
  public set txBestpathPerAS(value: boolean | cdktf.IResolvable) {
    this._txBestpathPerAS = value;
  }
  public resetTxBestpathPerAS() {
    this._txBestpathPerAS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBestpathPerASInput() {
    return this._txBestpathPerAS;
  }
}
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn {
  /**
  * Number of times the firewalls own AS can be in an AS_PATH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#occurrence BgpAddressFamilyProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#origin BgpAddressFamilyProfile#origin}
  */
  readonly origin?: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn | cdktf.IResolvable): any {
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
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn | cdktf.IResolvable | undefined) {
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
  private _origin = new BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart {
  /**
  * Restart interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#interval BgpAddressFamilyProfile#interval}
  */
  readonly interval?: number;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
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

  // interval - computed: false, optional: true, required: false
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction {
  /**
  * Restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#restart BgpAddressFamilyProfile#restart}
  */
  readonly restart?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart;
  /**
  * Warning only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#warning_only BgpAddressFamilyProfile#warning_only}
  */
  readonly warningOnly?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined) {
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
  private _restart = new BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart) {
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
  private _warningOnly = new BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#action BgpAddressFamilyProfile#action}
  */
  readonly action?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction;
  /**
  * Maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#num_prefixes BgpAddressFamilyProfile#num_prefixes}
  */
  readonly numPrefixes?: number;
  /**
  * Threshold percentage of the maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#threshold BgpAddressFamilyProfile#threshold}
  */
  readonly threshold?: number;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionToTerraform(struct!.action),
    num_prefixes: cdktf.numberToTerraform(struct!.numPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction",
    },
    num_prefixes: {
      value: cdktf.numberToHclTerraform(struct!.numPrefixes),
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

export class BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._numPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPrefixes = this._numPrefixes;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._numPrefixes = undefined;
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
      this._numPrefixes = value.numPrefixes;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // num_prefixes - computed: false, optional: true, required: false
  private _numPrefixes?: number; 
  public get numPrefixes() {
    return this.getNumberAttribute('num_prefixes');
  }
  public set numPrefixes(value: number) {
    this._numPrefixes = value;
  }
  public resetNumPrefixes() {
    this._numPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPrefixesInput() {
    return this._numPrefixes;
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop {
  /**
  * Self
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#self BgpAddressFamilyProfile#self}
  */
  readonly selfAttribute?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf;
  /**
  * Self force
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#self_force BgpAddressFamilyProfile#self_force}
  */
  readonly selfForce?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf",
    },
    self_force: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop | cdktf.IResolvable | undefined) {
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
  private _self = new BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf) {
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
  private _selfForce = new BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastOrf {
  /**
  * ORF prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#orf_prefix_list BgpAddressFamilyProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastOrfToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastOrfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastOrf | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4Ipv4UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastOrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastOrf | cdktf.IResolvable | undefined) {
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

  // orf_prefix_list - computed: false, optional: true, required: false
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS {
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: string;
  /**
  * Replace a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#replace__a_s BgpAddressFamilyProfile#replace__a_s}
  */
  readonly replaceAS?: string;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.stringToTerraform(struct!.all),
    replace__a_s: cdktf.stringToTerraform(struct!.replaceAS),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.stringToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace__a_s: {
      value: cdktf.stringToHclTerraform(struct!.replaceAS),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._replaceAS !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceAS = this._replaceAS;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._replaceAS = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._replaceAS = value.replaceAS;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: string; 
  public get all() {
    return this.getStringAttribute('all');
  }
  public set all(value: string) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // replace__a_s - computed: false, optional: true, required: false
  private _replaceAS?: string; 
  public get replaceAS() {
    return this.getStringAttribute('replace__a_s');
  }
  public set replaceAS(value: string) {
    this._replaceAS = value;
  }
  public resetReplaceAS() {
    this._replaceAS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceASInput() {
    return this._replaceAS;
  }
}
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard {
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity {
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll;
  /**
  * Both
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#both BgpAddressFamilyProfile#both}
  */
  readonly both?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth;
  /**
  * Extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#extended BgpAddressFamilyProfile#extended}
  */
  readonly extended?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended;
  /**
  * Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#large BgpAddressFamilyProfile#large}
  */
  readonly large?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge;
  /**
  * Standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#standard BgpAddressFamilyProfile#standard}
  */
  readonly standard?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllToTerraform(struct!.all),
    both: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothToTerraform(struct!.both),
    extended: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedToTerraform(struct!.extended),
    large: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeToTerraform(struct!.large),
    standard: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll",
    },
    both: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth",
    },
    extended: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended",
    },
    large: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge",
    },
    standard: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity | cdktf.IResolvable | undefined) {
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
  private _all = new BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll) {
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
  private _both = new BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth) {
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
  private _extended = new BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended) {
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
  private _large = new BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge) {
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
  private _standard = new BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4Unicast {
  /**
  * Add path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#add_path BgpAddressFamilyProfile#add_path}
  */
  readonly addPath?: BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath;
  /**
  * Allowas in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#allowas_in BgpAddressFamilyProfile#allowas_in}
  */
  readonly allowasIn?: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#as_override BgpAddressFamilyProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate default route?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#default_originate BgpAddressFamilyProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Default originate route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#default_originate_map BgpAddressFamilyProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#enable BgpAddressFamilyProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Maximum prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#maximum_prefix BgpAddressFamilyProfile#maximum_prefix}
  */
  readonly maximumPrefix?: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#next_hop BgpAddressFamilyProfile#next_hop}
  */
  readonly nextHop?: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop;
  /**
  * Orf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#orf BgpAddressFamilyProfile#orf}
  */
  readonly orf?: BgpAddressFamilyProfileIpv4Ipv4UnicastOrf;
  /**
  * Remove private a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#remove_private__a_s BgpAddressFamilyProfile#remove_private__a_s}
  */
  readonly removePrivateAS?: BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS;
  /**
  * Route reflector client?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#route_reflector_client BgpAddressFamilyProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Send community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#send_community BgpAddressFamilyProfile#send_community}
  */
  readonly sendCommunity?: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#soft_reconfig_with_stored_info BgpAddressFamilyProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4Ipv4UnicastToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: bgpAddressFamilyProfileIpv4Ipv4UnicastAddPathToTerraform(struct!.addPath),
    allowas_in: bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopToTerraform(struct!.nextHop),
    orf: bgpAddressFamilyProfileIpv4Ipv4UnicastOrfToTerraform(struct!.orf),
    remove_private__a_s: bgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASToTerraform(struct!.removePrivateAS),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4UnicastToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath",
    },
    allowas_in: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn",
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
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix",
    },
    next_hop: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop",
    },
    orf: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastOrf",
    },
    remove_private__a_s: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASToHclTerraform(struct!.removePrivateAS),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity",
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

export class BgpAddressFamilyProfileIpv4Ipv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4Unicast | cdktf.IResolvable | undefined {
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
    if (this._removePrivateAS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.removePrivateAS = this._removePrivateAS?.internalValue;
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4Unicast | cdktf.IResolvable | undefined) {
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
      this._removePrivateAS.internalValue = undefined;
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
      this._removePrivateAS.internalValue = value.removePrivateAS;
      this._routeReflectorClient = value.routeReflectorClient;
      this._sendCommunity.internalValue = value.sendCommunity;
      this._softReconfigWithStoredInfo = value.softReconfigWithStoredInfo;
    }
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath = new BgpAddressFamilyProfileIpv4Ipv4UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: BgpAddressFamilyProfileIpv4Ipv4UnicastAddPath) {
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
  private _allowasIn = new BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: BgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn) {
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
  private _maximumPrefix = new BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: BgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix) {
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
  private _nextHop = new BgpAddressFamilyProfileIpv4Ipv4UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpAddressFamilyProfileIpv4Ipv4UnicastNextHop) {
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
  private _orf = new BgpAddressFamilyProfileIpv4Ipv4UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: BgpAddressFamilyProfileIpv4Ipv4UnicastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private__a_s - computed: false, optional: true, required: false
  private _removePrivateAS = new BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASOutputReference(this, "remove_private__a_s");
  public get removePrivateAS() {
    return this._removePrivateAS;
  }
  public putRemovePrivateAS(value: BgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS) {
    this._removePrivateAS.internalValue = value;
  }
  public resetRemovePrivateAS() {
    this._removePrivateAS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateASInput() {
    return this._removePrivateAS.internalValue;
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
  private _sendCommunity = new BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: BgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity) {
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
export interface BgpAddressFamilyProfileIpv4Ipv4 {
  /**
  * Multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#multicast BgpAddressFamilyProfile#multicast}
  */
  readonly multicast?: BgpAddressFamilyProfileIpv4Ipv4Multicast;
  /**
  * Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#unicast BgpAddressFamilyProfile#unicast}
  */
  readonly unicast?: BgpAddressFamilyProfileIpv4Ipv4Unicast;
}

export function bgpAddressFamilyProfileIpv4Ipv4ToTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast: bgpAddressFamilyProfileIpv4Ipv4MulticastToTerraform(struct!.multicast),
    unicast: bgpAddressFamilyProfileIpv4Ipv4UnicastToTerraform(struct!.unicast),
  }
}


export function bgpAddressFamilyProfileIpv4Ipv4ToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Ipv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast: {
      value: bgpAddressFamilyProfileIpv4Ipv4MulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4Multicast",
    },
    unicast: {
      value: bgpAddressFamilyProfileIpv4Ipv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4Ipv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Ipv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Ipv4 | cdktf.IResolvable | undefined) {
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
  private _multicast = new BgpAddressFamilyProfileIpv4Ipv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: BgpAddressFamilyProfileIpv4Ipv4Multicast) {
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
  private _unicast = new BgpAddressFamilyProfileIpv4Ipv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpAddressFamilyProfileIpv4Ipv4Unicast) {
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
export interface BgpAddressFamilyProfileIpv4 {
  /**
  * Ipv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#ipv4 BgpAddressFamilyProfile#ipv4}
  */
  readonly ipv4: BgpAddressFamilyProfileIpv4Ipv4;
}

export function bgpAddressFamilyProfileIpv4ToTerraform(struct?: BgpAddressFamilyProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: bgpAddressFamilyProfileIpv4Ipv4ToTerraform(struct!.ipv4),
  }
}


export function bgpAddressFamilyProfileIpv4ToHclTerraform(struct?: BgpAddressFamilyProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: bgpAddressFamilyProfileIpv4Ipv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Ipv4",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4 = new BgpAddressFamilyProfileIpv4Ipv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpAddressFamilyProfileIpv4Ipv4) {
    this._ipv4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile scm_bgp_address_family_profile}
*/
export class BgpAddressFamilyProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_address_family_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpAddressFamilyProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpAddressFamilyProfile to import
  * @param importFromId The id of the existing BgpAddressFamilyProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpAddressFamilyProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_address_family_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/bgp_address_family_profile scm_bgp_address_family_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpAddressFamilyProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BgpAddressFamilyProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_address_family_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._ipv4.internalValue = config.ipv4;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new BgpAddressFamilyProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: BgpAddressFamilyProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      ipv4: bgpAddressFamilyProfileIpv4ToTerraform(this._ipv4.internalValue),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4: {
        value: bgpAddressFamilyProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BgpAddressFamilyProfileIpv4",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
