// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpAddressFamilyProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#device BgpAddressFamilyProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#folder BgpAddressFamilyProfile#folder}
  */
  readonly folder?: string;
  /**
  * IPv4 Address Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#ipv4 BgpAddressFamilyProfile#ipv4}
  */
  readonly ipv4?: BgpAddressFamilyProfileIpv4;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#name BgpAddressFamilyProfile#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#snippet BgpAddressFamilyProfile#snippet}
  */
  readonly snippet?: string;
}
export interface BgpAddressFamilyProfileIpv4MulticastAddPath {
  /**
  * Advertise all paths to peer?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#tx_all_paths BgpAddressFamilyProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Tx bestpath per a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#tx_bestpath_per_as BgpAddressFamilyProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4MulticastAddPathToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastAddPathToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastAddPath | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4MulticastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastAddPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastAddPath | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin {
}

export function bgpAddressFamilyProfileIpv4MulticastAllowasInOriginToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastAllowasInOriginToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastAllowasIn {
  /**
  * Number of times the firewalls own AS can be in an AS_PATH
  * > ℹ️ **Note:** You must specify exactly one of `occurrence` and `origin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#occurrence BgpAddressFamilyProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Origin
  * > ℹ️ **Note:** You must specify exactly one of `occurrence` and `origin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#origin BgpAddressFamilyProfile#origin}
  */
  readonly origin?: BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin;
}

export function bgpAddressFamilyProfileIpv4MulticastAllowasInToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: bgpAddressFamilyProfileIpv4MulticastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastAllowasInToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastAllowasIn | cdktf.IResolvable): any {
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
      value: bgpAddressFamilyProfileIpv4MulticastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4MulticastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastAllowasIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastAllowasIn | cdktf.IResolvable | undefined) {
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
  private _origin = new BgpAddressFamilyProfileIpv4MulticastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: BgpAddressFamilyProfileIpv4MulticastAllowasInOrigin) {
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
export interface BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart {
  /**
  * Restart interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#interval BgpAddressFamilyProfile#interval}
  */
  readonly interval?: number;
}

export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly {
}

export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction {
  /**
  * Restart
  * > ℹ️ **Note:** You must specify exactly one of `restart` and `warning_only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#restart BgpAddressFamilyProfile#restart}
  */
  readonly restart?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart;
  /**
  * Warning only
  * > ℹ️ **Note:** You must specify exactly one of `restart` and `warning_only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#warning_only BgpAddressFamilyProfile#warning_only}
  */
  readonly warningOnly?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly;
}

export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined) {
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
  private _restart = new BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart) {
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
  private _warningOnly = new BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly) {
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
export interface BgpAddressFamilyProfileIpv4MulticastMaximumPrefix {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#action BgpAddressFamilyProfile#action}
  */
  readonly action?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction;
  /**
  * Maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#num_prefixes BgpAddressFamilyProfile#num_prefixes}
  */
  readonly numPrefixes?: number;
  /**
  * Threshold percentage of the maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#threshold BgpAddressFamilyProfile#threshold}
  */
  readonly threshold?: number;
}

export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionToTerraform(struct!.action),
    num_prefixes: cdktf.numberToTerraform(struct!.numPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastMaximumPrefixToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction",
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

export class BgpAddressFamilyProfileIpv4MulticastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable | undefined) {
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
  private _action = new BgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction) {
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
export interface BgpAddressFamilyProfileIpv4MulticastNextHopSelf {
}

export function bgpAddressFamilyProfileIpv4MulticastNextHopSelfToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastNextHopSelfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastNextHopSelf | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce {
}

export function bgpAddressFamilyProfileIpv4MulticastNextHopSelfForceToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastNextHopSelfForceToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastNextHop {
  /**
  * Self
  * > ℹ️ **Note:** You must specify exactly one of `self` and `self_force`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#self BgpAddressFamilyProfile#self}
  */
  readonly selfAttribute?: BgpAddressFamilyProfileIpv4MulticastNextHopSelf;
  /**
  * Self force
  * > ℹ️ **Note:** You must specify exactly one of `self` and `self_force`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#self_force BgpAddressFamilyProfile#self_force}
  */
  readonly selfForce?: BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce;
}

export function bgpAddressFamilyProfileIpv4MulticastNextHopToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: bgpAddressFamilyProfileIpv4MulticastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: bgpAddressFamilyProfileIpv4MulticastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastNextHopToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: bgpAddressFamilyProfileIpv4MulticastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastNextHopSelf",
    },
    self_force: {
      value: bgpAddressFamilyProfileIpv4MulticastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4MulticastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastNextHop | cdktf.IResolvable | undefined) {
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
  private _self = new BgpAddressFamilyProfileIpv4MulticastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: BgpAddressFamilyProfileIpv4MulticastNextHopSelf) {
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
  private _selfForce = new BgpAddressFamilyProfileIpv4MulticastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: BgpAddressFamilyProfileIpv4MulticastNextHopSelfForce) {
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
export interface BgpAddressFamilyProfileIpv4MulticastOrf {
  /**
  * ORF prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#orf_prefix_list BgpAddressFamilyProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function bgpAddressFamilyProfileIpv4MulticastOrfToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastOrfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastOrf | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4MulticastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastOrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastOrf | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll {
}

export function bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs {
}

export function bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs {
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll;
  /**
  * Replace a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#replace_as BgpAddressFamilyProfile#replace_as}
  */
  readonly replaceAs?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs;
}

export function bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll",
    },
    replace_as: {
      value: bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable | undefined) {
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
  private _all = new BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll) {
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
  private _replaceAs = new BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs) {
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
export interface BgpAddressFamilyProfileIpv4MulticastSendCommunityAll {
}

export function bgpAddressFamilyProfileIpv4MulticastSendCommunityAllToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastSendCommunityAllToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth {
}

export function bgpAddressFamilyProfileIpv4MulticastSendCommunityBothToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastSendCommunityBothToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended {
}

export function bgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge {
}

export function bgpAddressFamilyProfileIpv4MulticastSendCommunityLargeToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastSendCommunityLargeToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard {
}

export function bgpAddressFamilyProfileIpv4MulticastSendCommunityStandardToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4MulticastSendCommunityStandardToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4MulticastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4MulticastSendCommunity {
  /**
  * All
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: BgpAddressFamilyProfileIpv4MulticastSendCommunityAll;
  /**
  * Both
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#both BgpAddressFamilyProfile#both}
  */
  readonly both?: BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth;
  /**
  * Extended
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#extended BgpAddressFamilyProfile#extended}
  */
  readonly extended?: BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended;
  /**
  * Large
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#large BgpAddressFamilyProfile#large}
  */
  readonly large?: BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge;
  /**
  * Standard
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#standard BgpAddressFamilyProfile#standard}
  */
  readonly standard?: BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard;
}

export function bgpAddressFamilyProfileIpv4MulticastSendCommunityToTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyProfileIpv4MulticastSendCommunityAllToTerraform(struct!.all),
    both: bgpAddressFamilyProfileIpv4MulticastSendCommunityBothToTerraform(struct!.both),
    extended: bgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedToTerraform(struct!.extended),
    large: bgpAddressFamilyProfileIpv4MulticastSendCommunityLargeToTerraform(struct!.large),
    standard: bgpAddressFamilyProfileIpv4MulticastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastSendCommunityToHclTerraform(struct?: BgpAddressFamilyProfileIpv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyProfileIpv4MulticastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastSendCommunityAll",
    },
    both: {
      value: bgpAddressFamilyProfileIpv4MulticastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth",
    },
    extended: {
      value: bgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended",
    },
    large: {
      value: bgpAddressFamilyProfileIpv4MulticastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge",
    },
    standard: {
      value: bgpAddressFamilyProfileIpv4MulticastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4MulticastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4MulticastSendCommunity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4MulticastSendCommunity | cdktf.IResolvable | undefined) {
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
  private _all = new BgpAddressFamilyProfileIpv4MulticastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityAll) {
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
  private _both = new BgpAddressFamilyProfileIpv4MulticastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityBoth) {
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
  private _extended = new BgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityExtended) {
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
  private _large = new BgpAddressFamilyProfileIpv4MulticastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityLarge) {
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
  private _standard = new BgpAddressFamilyProfileIpv4MulticastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: BgpAddressFamilyProfileIpv4MulticastSendCommunityStandard) {
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
export interface BgpAddressFamilyProfileIpv4Multicast {
  /**
  * Add path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#add_path BgpAddressFamilyProfile#add_path}
  */
  readonly addPath?: BgpAddressFamilyProfileIpv4MulticastAddPath;
  /**
  * Allowas in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#allowas_in BgpAddressFamilyProfile#allowas_in}
  */
  readonly allowasIn?: BgpAddressFamilyProfileIpv4MulticastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#as_override BgpAddressFamilyProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate default route?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#default_originate BgpAddressFamilyProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Default originate route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#default_originate_map BgpAddressFamilyProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#enable BgpAddressFamilyProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Maximum prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#maximum_prefix BgpAddressFamilyProfile#maximum_prefix}
  */
  readonly maximumPrefix?: BgpAddressFamilyProfileIpv4MulticastMaximumPrefix;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#next_hop BgpAddressFamilyProfile#next_hop}
  */
  readonly nextHop?: BgpAddressFamilyProfileIpv4MulticastNextHop;
  /**
  * Orf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#orf BgpAddressFamilyProfile#orf}
  */
  readonly orf?: BgpAddressFamilyProfileIpv4MulticastOrf;
  /**
  * Remove private a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#remove_private_as BgpAddressFamilyProfile#remove_private_as}
  */
  readonly removePrivateAs?: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs;
  /**
  * Route reflector client?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#route_reflector_client BgpAddressFamilyProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Send community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#send_community BgpAddressFamilyProfile#send_community}
  */
  readonly sendCommunity?: BgpAddressFamilyProfileIpv4MulticastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#soft_reconfig_with_stored_info BgpAddressFamilyProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4MulticastToTerraform(struct?: BgpAddressFamilyProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: bgpAddressFamilyProfileIpv4MulticastAddPathToTerraform(struct!.addPath),
    allowas_in: bgpAddressFamilyProfileIpv4MulticastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: bgpAddressFamilyProfileIpv4MulticastNextHopToTerraform(struct!.nextHop),
    orf: bgpAddressFamilyProfileIpv4MulticastOrfToTerraform(struct!.orf),
    remove_private_as: bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: bgpAddressFamilyProfileIpv4MulticastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function bgpAddressFamilyProfileIpv4MulticastToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: bgpAddressFamilyProfileIpv4MulticastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastAddPath",
    },
    allowas_in: {
      value: bgpAddressFamilyProfileIpv4MulticastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastAllowasIn",
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
      value: bgpAddressFamilyProfileIpv4MulticastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastMaximumPrefix",
    },
    next_hop: {
      value: bgpAddressFamilyProfileIpv4MulticastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastNextHop",
    },
    orf: {
      value: bgpAddressFamilyProfileIpv4MulticastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastOrf",
    },
    remove_private_as: {
      value: bgpAddressFamilyProfileIpv4MulticastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: bgpAddressFamilyProfileIpv4MulticastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4MulticastSendCommunity",
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

export class BgpAddressFamilyProfileIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Multicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Multicast | cdktf.IResolvable | undefined) {
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
  private _addPath = new BgpAddressFamilyProfileIpv4MulticastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: BgpAddressFamilyProfileIpv4MulticastAddPath) {
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
  private _allowasIn = new BgpAddressFamilyProfileIpv4MulticastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: BgpAddressFamilyProfileIpv4MulticastAllowasIn) {
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
  private _maximumPrefix = new BgpAddressFamilyProfileIpv4MulticastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: BgpAddressFamilyProfileIpv4MulticastMaximumPrefix) {
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
  private _nextHop = new BgpAddressFamilyProfileIpv4MulticastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpAddressFamilyProfileIpv4MulticastNextHop) {
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
  private _orf = new BgpAddressFamilyProfileIpv4MulticastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: BgpAddressFamilyProfileIpv4MulticastOrf) {
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
  private _removePrivateAs = new BgpAddressFamilyProfileIpv4MulticastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: BgpAddressFamilyProfileIpv4MulticastRemovePrivateAs) {
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
  private _sendCommunity = new BgpAddressFamilyProfileIpv4MulticastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: BgpAddressFamilyProfileIpv4MulticastSendCommunity) {
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
export interface BgpAddressFamilyProfileIpv4UnicastAddPath {
  /**
  * Advertise all paths to peer?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#tx_all_paths BgpAddressFamilyProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Tx bestpath per a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#tx_bestpath_per_as BgpAddressFamilyProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4UnicastAddPathToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastAddPathToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastAddPath | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastAddPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastAddPath | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin {
}

export function bgpAddressFamilyProfileIpv4UnicastAllowasInOriginToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastAllowasInOriginToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastAllowasIn {
  /**
  * Number of times the firewalls own AS can be in an AS_PATH
  * > ℹ️ **Note:** You must specify exactly one of `occurrence` and `origin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#occurrence BgpAddressFamilyProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Origin
  * > ℹ️ **Note:** You must specify exactly one of `occurrence` and `origin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#origin BgpAddressFamilyProfile#origin}
  */
  readonly origin?: BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin;
}

export function bgpAddressFamilyProfileIpv4UnicastAllowasInToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: bgpAddressFamilyProfileIpv4UnicastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastAllowasInToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastAllowasIn | cdktf.IResolvable): any {
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
      value: bgpAddressFamilyProfileIpv4UnicastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastAllowasIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastAllowasIn | cdktf.IResolvable | undefined) {
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
  private _origin = new BgpAddressFamilyProfileIpv4UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: BgpAddressFamilyProfileIpv4UnicastAllowasInOrigin) {
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
export interface BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart {
  /**
  * Restart interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#interval BgpAddressFamilyProfile#interval}
  */
  readonly interval?: number;
}

export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly {
}

export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction {
  /**
  * Restart
  * > ℹ️ **Note:** You must specify exactly one of `restart` and `warning_only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#restart BgpAddressFamilyProfile#restart}
  */
  readonly restart?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart;
  /**
  * Warning only
  * > ℹ️ **Note:** You must specify exactly one of `restart` and `warning_only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#warning_only BgpAddressFamilyProfile#warning_only}
  */
  readonly warningOnly?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly;
}

export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined) {
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
  private _restart = new BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart) {
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
  private _warningOnly = new BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly) {
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
export interface BgpAddressFamilyProfileIpv4UnicastMaximumPrefix {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#action BgpAddressFamilyProfile#action}
  */
  readonly action?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction;
  /**
  * Maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#num_prefixes BgpAddressFamilyProfile#num_prefixes}
  */
  readonly numPrefixes?: number;
  /**
  * Threshold percentage of the maximum number of prefixes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#threshold BgpAddressFamilyProfile#threshold}
  */
  readonly threshold?: number;
}

export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionToTerraform(struct!.action),
    num_prefixes: cdktf.numberToTerraform(struct!.numPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastMaximumPrefixToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction",
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

export class BgpAddressFamilyProfileIpv4UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable | undefined) {
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
  private _action = new BgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction) {
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
export interface BgpAddressFamilyProfileIpv4UnicastNextHopSelf {
}

export function bgpAddressFamilyProfileIpv4UnicastNextHopSelfToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastNextHopSelfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastNextHopSelf | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce {
}

export function bgpAddressFamilyProfileIpv4UnicastNextHopSelfForceToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastNextHopSelfForceToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastNextHop {
  /**
  * Self
  * > ℹ️ **Note:** You must specify exactly one of `self` and `self_force`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#self BgpAddressFamilyProfile#self}
  */
  readonly selfAttribute?: BgpAddressFamilyProfileIpv4UnicastNextHopSelf;
  /**
  * Self force
  * > ℹ️ **Note:** You must specify exactly one of `self` and `self_force`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#self_force BgpAddressFamilyProfile#self_force}
  */
  readonly selfForce?: BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce;
}

export function bgpAddressFamilyProfileIpv4UnicastNextHopToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: bgpAddressFamilyProfileIpv4UnicastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: bgpAddressFamilyProfileIpv4UnicastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastNextHopToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: bgpAddressFamilyProfileIpv4UnicastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastNextHopSelf",
    },
    self_force: {
      value: bgpAddressFamilyProfileIpv4UnicastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastNextHop | cdktf.IResolvable | undefined) {
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
  private _self = new BgpAddressFamilyProfileIpv4UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: BgpAddressFamilyProfileIpv4UnicastNextHopSelf) {
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
  private _selfForce = new BgpAddressFamilyProfileIpv4UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: BgpAddressFamilyProfileIpv4UnicastNextHopSelfForce) {
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
export interface BgpAddressFamilyProfileIpv4UnicastOrf {
  /**
  * ORF prefix list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#orf_prefix_list BgpAddressFamilyProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function bgpAddressFamilyProfileIpv4UnicastOrfToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastOrfToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastOrf | cdktf.IResolvable): any {
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

export class BgpAddressFamilyProfileIpv4UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastOrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastOrf | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll {
}

export function bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs {
}

export function bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs {
  /**
  * All
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll;
  /**
  * Replace a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#replace_as BgpAddressFamilyProfile#replace_as}
  */
  readonly replaceAs?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs;
}

export function bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll",
    },
    replace_as: {
      value: bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable | undefined) {
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
  private _all = new BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll) {
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
  private _replaceAs = new BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs) {
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
export interface BgpAddressFamilyProfileIpv4UnicastSendCommunityAll {
}

export function bgpAddressFamilyProfileIpv4UnicastSendCommunityAllToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastSendCommunityAllToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth {
}

export function bgpAddressFamilyProfileIpv4UnicastSendCommunityBothToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastSendCommunityBothToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended {
}

export function bgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge {
}

export function bgpAddressFamilyProfileIpv4UnicastSendCommunityLargeToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastSendCommunityLargeToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard {
}

export function bgpAddressFamilyProfileIpv4UnicastSendCommunityStandardToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bgpAddressFamilyProfileIpv4UnicastSendCommunityStandardToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BgpAddressFamilyProfileIpv4UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined) {
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
export interface BgpAddressFamilyProfileIpv4UnicastSendCommunity {
  /**
  * All
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#all BgpAddressFamilyProfile#all}
  */
  readonly all?: BgpAddressFamilyProfileIpv4UnicastSendCommunityAll;
  /**
  * Both
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#both BgpAddressFamilyProfile#both}
  */
  readonly both?: BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth;
  /**
  * Extended
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#extended BgpAddressFamilyProfile#extended}
  */
  readonly extended?: BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended;
  /**
  * Large
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#large BgpAddressFamilyProfile#large}
  */
  readonly large?: BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge;
  /**
  * Standard
  * > ℹ️ **Note:** You must specify exactly one of `all`, `both`, `extended`, `large`, and `standard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#standard BgpAddressFamilyProfile#standard}
  */
  readonly standard?: BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard;
}

export function bgpAddressFamilyProfileIpv4UnicastSendCommunityToTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: bgpAddressFamilyProfileIpv4UnicastSendCommunityAllToTerraform(struct!.all),
    both: bgpAddressFamilyProfileIpv4UnicastSendCommunityBothToTerraform(struct!.both),
    extended: bgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedToTerraform(struct!.extended),
    large: bgpAddressFamilyProfileIpv4UnicastSendCommunityLargeToTerraform(struct!.large),
    standard: bgpAddressFamilyProfileIpv4UnicastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastSendCommunityToHclTerraform(struct?: BgpAddressFamilyProfileIpv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: bgpAddressFamilyProfileIpv4UnicastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastSendCommunityAll",
    },
    both: {
      value: bgpAddressFamilyProfileIpv4UnicastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth",
    },
    extended: {
      value: bgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended",
    },
    large: {
      value: bgpAddressFamilyProfileIpv4UnicastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge",
    },
    standard: {
      value: bgpAddressFamilyProfileIpv4UnicastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpAddressFamilyProfileIpv4UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4UnicastSendCommunity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4UnicastSendCommunity | cdktf.IResolvable | undefined) {
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
  private _all = new BgpAddressFamilyProfileIpv4UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityAll) {
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
  private _both = new BgpAddressFamilyProfileIpv4UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityBoth) {
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
  private _extended = new BgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityExtended) {
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
  private _large = new BgpAddressFamilyProfileIpv4UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityLarge) {
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
  private _standard = new BgpAddressFamilyProfileIpv4UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: BgpAddressFamilyProfileIpv4UnicastSendCommunityStandard) {
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
export interface BgpAddressFamilyProfileIpv4Unicast {
  /**
  * Add path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#add_path BgpAddressFamilyProfile#add_path}
  */
  readonly addPath?: BgpAddressFamilyProfileIpv4UnicastAddPath;
  /**
  * Allowas in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#allowas_in BgpAddressFamilyProfile#allowas_in}
  */
  readonly allowasIn?: BgpAddressFamilyProfileIpv4UnicastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#as_override BgpAddressFamilyProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate default route?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#default_originate BgpAddressFamilyProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Default originate route map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#default_originate_map BgpAddressFamilyProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#enable BgpAddressFamilyProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Maximum prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#maximum_prefix BgpAddressFamilyProfile#maximum_prefix}
  */
  readonly maximumPrefix?: BgpAddressFamilyProfileIpv4UnicastMaximumPrefix;
  /**
  * Next hop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#next_hop BgpAddressFamilyProfile#next_hop}
  */
  readonly nextHop?: BgpAddressFamilyProfileIpv4UnicastNextHop;
  /**
  * Orf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#orf BgpAddressFamilyProfile#orf}
  */
  readonly orf?: BgpAddressFamilyProfileIpv4UnicastOrf;
  /**
  * Remove private a s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#remove_private_as BgpAddressFamilyProfile#remove_private_as}
  */
  readonly removePrivateAs?: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs;
  /**
  * Route reflector client?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#route_reflector_client BgpAddressFamilyProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Send community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#send_community BgpAddressFamilyProfile#send_community}
  */
  readonly sendCommunity?: BgpAddressFamilyProfileIpv4UnicastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#soft_reconfig_with_stored_info BgpAddressFamilyProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function bgpAddressFamilyProfileIpv4UnicastToTerraform(struct?: BgpAddressFamilyProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: bgpAddressFamilyProfileIpv4UnicastAddPathToTerraform(struct!.addPath),
    allowas_in: bgpAddressFamilyProfileIpv4UnicastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: bgpAddressFamilyProfileIpv4UnicastNextHopToTerraform(struct!.nextHop),
    orf: bgpAddressFamilyProfileIpv4UnicastOrfToTerraform(struct!.orf),
    remove_private_as: bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: bgpAddressFamilyProfileIpv4UnicastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function bgpAddressFamilyProfileIpv4UnicastToHclTerraform(struct?: BgpAddressFamilyProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: bgpAddressFamilyProfileIpv4UnicastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastAddPath",
    },
    allowas_in: {
      value: bgpAddressFamilyProfileIpv4UnicastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastAllowasIn",
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
      value: bgpAddressFamilyProfileIpv4UnicastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastMaximumPrefix",
    },
    next_hop: {
      value: bgpAddressFamilyProfileIpv4UnicastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastNextHop",
    },
    orf: {
      value: bgpAddressFamilyProfileIpv4UnicastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastOrf",
    },
    remove_private_as: {
      value: bgpAddressFamilyProfileIpv4UnicastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: bgpAddressFamilyProfileIpv4UnicastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4UnicastSendCommunity",
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

export class BgpAddressFamilyProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BgpAddressFamilyProfileIpv4Unicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4Unicast | cdktf.IResolvable | undefined) {
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
  private _addPath = new BgpAddressFamilyProfileIpv4UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: BgpAddressFamilyProfileIpv4UnicastAddPath) {
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
  private _allowasIn = new BgpAddressFamilyProfileIpv4UnicastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: BgpAddressFamilyProfileIpv4UnicastAllowasIn) {
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
  private _maximumPrefix = new BgpAddressFamilyProfileIpv4UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: BgpAddressFamilyProfileIpv4UnicastMaximumPrefix) {
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
  private _nextHop = new BgpAddressFamilyProfileIpv4UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: BgpAddressFamilyProfileIpv4UnicastNextHop) {
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
  private _orf = new BgpAddressFamilyProfileIpv4UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: BgpAddressFamilyProfileIpv4UnicastOrf) {
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
  private _removePrivateAs = new BgpAddressFamilyProfileIpv4UnicastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: BgpAddressFamilyProfileIpv4UnicastRemovePrivateAs) {
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
  private _sendCommunity = new BgpAddressFamilyProfileIpv4UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: BgpAddressFamilyProfileIpv4UnicastSendCommunity) {
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
export interface BgpAddressFamilyProfileIpv4 {
  /**
  * Multicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#multicast BgpAddressFamilyProfile#multicast}
  */
  readonly multicast?: BgpAddressFamilyProfileIpv4Multicast;
  /**
  * Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#unicast BgpAddressFamilyProfile#unicast}
  */
  readonly unicast?: BgpAddressFamilyProfileIpv4Unicast;
}

export function bgpAddressFamilyProfileIpv4ToTerraform(struct?: BgpAddressFamilyProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast: bgpAddressFamilyProfileIpv4MulticastToTerraform(struct!.multicast),
    unicast: bgpAddressFamilyProfileIpv4UnicastToTerraform(struct!.unicast),
  }
}


export function bgpAddressFamilyProfileIpv4ToHclTerraform(struct?: BgpAddressFamilyProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast: {
      value: bgpAddressFamilyProfileIpv4MulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Multicast",
    },
    unicast: {
      value: bgpAddressFamilyProfileIpv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "BgpAddressFamilyProfileIpv4Unicast",
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

  public set internalValue(value: BgpAddressFamilyProfileIpv4 | cdktf.IResolvable | undefined) {
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
  private _multicast = new BgpAddressFamilyProfileIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: BgpAddressFamilyProfileIpv4Multicast) {
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
  private _unicast = new BgpAddressFamilyProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: BgpAddressFamilyProfileIpv4Unicast) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile scm_bgp_address_family_profile}
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
  * @param importFromId The id of the existing BgpAddressFamilyProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpAddressFamilyProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_address_family_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/bgp_address_family_profile scm_bgp_address_family_profile} Resource
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
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
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
