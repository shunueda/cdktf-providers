// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosBgpAddressFamilyRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#ipv4 DataPanosBgpAddressFamilyRoutingProfile#ipv4}
  */
  readonly ipv4?: DataPanosBgpAddressFamilyRoutingProfileIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#ipv6 DataPanosBgpAddressFamilyRoutingProfile#ipv6}
  */
  readonly ipv6?: DataPanosBgpAddressFamilyRoutingProfileIpv6;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#location DataPanosBgpAddressFamilyRoutingProfile#location}
  */
  readonly location: DataPanosBgpAddressFamilyRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#name DataPanosBgpAddressFamilyRoutingProfile#name}
  */
  readonly name: string;
}
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath {
  /**
  * Advertise all paths to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#tx_all_paths DataPanosBgpAddressFamilyRoutingProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Advertise the bestpath per each neighboring AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#tx_bestpath_per_as DataPanosBgpAddressFamilyRoutingProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPathToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPathToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath | cdktf.IResolvable | undefined) {
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

  // tx_all_paths - computed: true, optional: true, required: false
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

  // tx_bestpath_per_as - computed: true, optional: true, required: false
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn {
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#occurrence DataPanosBgpAddressFamilyRoutingProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#origin DataPanosBgpAddressFamilyRoutingProfile#origin}
  */
  readonly origin?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable): any {
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
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn | cdktf.IResolvable | undefined) {
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

  // occurrence - computed: true, optional: true, required: false
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

  // origin - computed: true, optional: true, required: false
  private _origin = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOrigin) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart {
  /**
  * Restart interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#interval DataPanosBgpAddressFamilyRoutingProfile#interval}
  */
  readonly interval?: number;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#restart DataPanosBgpAddressFamilyRoutingProfile#restart}
  */
  readonly restart?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#warning_only DataPanosBgpAddressFamilyRoutingProfile#warning_only}
  */
  readonly warningOnly?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction | cdktf.IResolvable | undefined) {
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

  // restart - computed: true, optional: true, required: false
  private _restart = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionRestart) {
    this._restart.internalValue = value;
  }
  public resetRestart() {
    this._restart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart.internalValue;
  }

  // warning_only - computed: true, optional: true, required: false
  private _warningOnly = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionWarningOnly) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#action DataPanosBgpAddressFamilyRoutingProfile#action}
  */
  readonly action?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction;
  /**
  * Max allowed prefixes from this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#max_prefixes DataPanosBgpAddressFamilyRoutingProfile#max_prefixes}
  */
  readonly maxPrefixes?: number;
  /**
  * Threshold value (%) at which to generate a warning msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#threshold DataPanosBgpAddressFamilyRoutingProfile#threshold}
  */
  readonly threshold?: number;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToTerraform(struct!.action),
    max_prefixes: cdktf.numberToTerraform(struct!.maxPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction",
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixAction) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#self DataPanosBgpAddressFamilyRoutingProfile#self}
  */
  readonly selfAttribute?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#self_force DataPanosBgpAddressFamilyRoutingProfile#self_force}
  */
  readonly selfForce?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf",
    },
    self_force: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop | cdktf.IResolvable | undefined) {
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

  // self - computed: true, optional: true, required: false
  private _self = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelf) {
    this._self.internalValue = value;
  }
  public resetSelfAttribute() {
    this._self.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self.internalValue;
  }

  // self_force - computed: true, optional: true, required: false
  private _selfForce = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopSelfForce) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf {
  /**
  * Advertise Prefix-List ORF Capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#orf_prefix_list DataPanosBgpAddressFamilyRoutingProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrfToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrfToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#all DataPanosBgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#replace_as DataPanosBgpAddressFamilyRoutingProfile#replace_as}
  */
  readonly replaceAs?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll",
    },
    replace_as: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs | cdktf.IResolvable | undefined) {
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

  // all - computed: true, optional: true, required: false
  private _all = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // replace_as - computed: true, optional: true, required: false
  private _replaceAs = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsReplaceAs) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#all DataPanosBgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#both DataPanosBgpAddressFamilyRoutingProfile#both}
  */
  readonly both?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#extended DataPanosBgpAddressFamilyRoutingProfile#extended}
  */
  readonly extended?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#large DataPanosBgpAddressFamilyRoutingProfile#large}
  */
  readonly large?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#standard DataPanosBgpAddressFamilyRoutingProfile#standard}
  */
  readonly standard?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToTerraform(struct!.all),
    both: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToTerraform(struct!.both),
    extended: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToTerraform(struct!.extended),
    large: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToTerraform(struct!.large),
    standard: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll",
    },
    both: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth",
    },
    extended: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended",
    },
    large: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge",
    },
    standard: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity | cdktf.IResolvable | undefined) {
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

  // all - computed: true, optional: true, required: false
  private _all = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // both - computed: true, optional: true, required: false
  private _both = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // extended - computed: true, optional: true, required: false
  private _extended = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityExtended) {
    this._extended.internalValue = value;
  }
  public resetExtended() {
    this._extended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended.internalValue;
  }

  // large - computed: true, optional: true, required: false
  private _large = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // standard - computed: true, optional: true, required: false
  private _standard = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityStandard) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#add_path DataPanosBgpAddressFamilyRoutingProfile#add_path}
  */
  readonly addPath?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#allowas_in DataPanosBgpAddressFamilyRoutingProfile#allowas_in}
  */
  readonly allowasIn?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#as_override DataPanosBgpAddressFamilyRoutingProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#default_originate DataPanosBgpAddressFamilyRoutingProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-Map used in Default Originate Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#default_originate_map DataPanosBgpAddressFamilyRoutingProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#enable DataPanosBgpAddressFamilyRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#maximum_prefix DataPanosBgpAddressFamilyRoutingProfile#maximum_prefix}
  */
  readonly maximumPrefix?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#next_hop DataPanosBgpAddressFamilyRoutingProfile#next_hop}
  */
  readonly nextHop?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#orf DataPanosBgpAddressFamilyRoutingProfile#orf}
  */
  readonly orf?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#remove_private_as DataPanosBgpAddressFamilyRoutingProfile#remove_private_as}
  */
  readonly removePrivateAs?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs;
  /**
  * Route Reflector Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#route_reflector_client DataPanosBgpAddressFamilyRoutingProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#send_community DataPanosBgpAddressFamilyRoutingProfile#send_community}
  */
  readonly sendCommunity?: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#soft_reconfig_with_stored_info DataPanosBgpAddressFamilyRoutingProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPathToTerraform(struct!.addPath),
    allowas_in: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopToTerraform(struct!.nextHop),
    orf: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrfToTerraform(struct!.orf),
    remove_private_as: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath",
    },
    allowas_in: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn",
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
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix",
    },
    next_hop: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop",
    },
    orf: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf",
    },
    remove_private_as: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity",
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast | cdktf.IResolvable | undefined) {
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

  // add_path - computed: true, optional: true, required: false
  private _addPath = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAddPath) {
    this._addPath.internalValue = value;
  }
  public resetAddPath() {
    this._addPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath.internalValue;
  }

  // allowas_in - computed: true, optional: true, required: false
  private _allowasIn = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastAllowasIn) {
    this._allowasIn.internalValue = value;
  }
  public resetAllowasIn() {
    this._allowasIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn.internalValue;
  }

  // as_override - computed: true, optional: true, required: false
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

  // default_originate - computed: true, optional: true, required: false
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

  // default_originate_map - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // maximum_prefix - computed: true, optional: true, required: false
  private _maximumPrefix = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastMaximumPrefix) {
    this._maximumPrefix.internalValue = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix.internalValue;
  }

  // next_hop - computed: true, optional: true, required: false
  private _nextHop = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // orf - computed: true, optional: true, required: false
  private _orf = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastRemovePrivateAs) {
    this._removePrivateAs.internalValue = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs.internalValue;
  }

  // route_reflector_client - computed: true, optional: true, required: false
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

  // send_community - computed: true, optional: true, required: false
  private _sendCommunity = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastSendCommunity) {
    this._sendCommunity.internalValue = value;
  }
  public resetSendCommunity() {
    this._sendCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity.internalValue;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: true, required: false
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath {
  /**
  * Advertise all paths to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#tx_all_paths DataPanosBgpAddressFamilyRoutingProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Advertise the bestpath per each neighboring AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#tx_bestpath_per_as DataPanosBgpAddressFamilyRoutingProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPathToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPathToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath | cdktf.IResolvable | undefined) {
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

  // tx_all_paths - computed: true, optional: true, required: false
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

  // tx_bestpath_per_as - computed: true, optional: true, required: false
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn {
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#occurrence DataPanosBgpAddressFamilyRoutingProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#origin DataPanosBgpAddressFamilyRoutingProfile#origin}
  */
  readonly origin?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable): any {
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
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn | cdktf.IResolvable | undefined) {
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

  // occurrence - computed: true, optional: true, required: false
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

  // origin - computed: true, optional: true, required: false
  private _origin = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOrigin) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart {
  /**
  * Restart interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#interval DataPanosBgpAddressFamilyRoutingProfile#interval}
  */
  readonly interval?: number;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#restart DataPanosBgpAddressFamilyRoutingProfile#restart}
  */
  readonly restart?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#warning_only DataPanosBgpAddressFamilyRoutingProfile#warning_only}
  */
  readonly warningOnly?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction | cdktf.IResolvable | undefined) {
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

  // restart - computed: true, optional: true, required: false
  private _restart = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionRestart) {
    this._restart.internalValue = value;
  }
  public resetRestart() {
    this._restart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart.internalValue;
  }

  // warning_only - computed: true, optional: true, required: false
  private _warningOnly = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionWarningOnly) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#action DataPanosBgpAddressFamilyRoutingProfile#action}
  */
  readonly action?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction;
  /**
  * Max allowed prefixes from this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#max_prefixes DataPanosBgpAddressFamilyRoutingProfile#max_prefixes}
  */
  readonly maxPrefixes?: number;
  /**
  * Threshold value (%) at which to generate a warning msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#threshold DataPanosBgpAddressFamilyRoutingProfile#threshold}
  */
  readonly threshold?: number;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToTerraform(struct!.action),
    max_prefixes: cdktf.numberToTerraform(struct!.maxPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction",
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixAction) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#self DataPanosBgpAddressFamilyRoutingProfile#self}
  */
  readonly selfAttribute?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#self_force DataPanosBgpAddressFamilyRoutingProfile#self_force}
  */
  readonly selfForce?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf",
    },
    self_force: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop | cdktf.IResolvable | undefined) {
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

  // self - computed: true, optional: true, required: false
  private _self = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelf) {
    this._self.internalValue = value;
  }
  public resetSelfAttribute() {
    this._self.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self.internalValue;
  }

  // self_force - computed: true, optional: true, required: false
  private _selfForce = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopSelfForce) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf {
  /**
  * Advertise Prefix-List ORF Capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#orf_prefix_list DataPanosBgpAddressFamilyRoutingProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrfToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrfToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#all DataPanosBgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#replace_as DataPanosBgpAddressFamilyRoutingProfile#replace_as}
  */
  readonly replaceAs?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll",
    },
    replace_as: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs | cdktf.IResolvable | undefined) {
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

  // all - computed: true, optional: true, required: false
  private _all = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // replace_as - computed: true, optional: true, required: false
  private _replaceAs = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsReplaceAs) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#all DataPanosBgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#both DataPanosBgpAddressFamilyRoutingProfile#both}
  */
  readonly both?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#extended DataPanosBgpAddressFamilyRoutingProfile#extended}
  */
  readonly extended?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#large DataPanosBgpAddressFamilyRoutingProfile#large}
  */
  readonly large?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#standard DataPanosBgpAddressFamilyRoutingProfile#standard}
  */
  readonly standard?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToTerraform(struct!.all),
    both: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToTerraform(struct!.both),
    extended: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToTerraform(struct!.extended),
    large: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToTerraform(struct!.large),
    standard: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll",
    },
    both: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth",
    },
    extended: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended",
    },
    large: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge",
    },
    standard: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity | cdktf.IResolvable | undefined) {
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

  // all - computed: true, optional: true, required: false
  private _all = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // both - computed: true, optional: true, required: false
  private _both = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // extended - computed: true, optional: true, required: false
  private _extended = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityExtended) {
    this._extended.internalValue = value;
  }
  public resetExtended() {
    this._extended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended.internalValue;
  }

  // large - computed: true, optional: true, required: false
  private _large = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // standard - computed: true, optional: true, required: false
  private _standard = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityStandard) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#add_path DataPanosBgpAddressFamilyRoutingProfile#add_path}
  */
  readonly addPath?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#allowas_in DataPanosBgpAddressFamilyRoutingProfile#allowas_in}
  */
  readonly allowasIn?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#as_override DataPanosBgpAddressFamilyRoutingProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#default_originate DataPanosBgpAddressFamilyRoutingProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-Map used in Default Originate Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#default_originate_map DataPanosBgpAddressFamilyRoutingProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#enable DataPanosBgpAddressFamilyRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#maximum_prefix DataPanosBgpAddressFamilyRoutingProfile#maximum_prefix}
  */
  readonly maximumPrefix?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#next_hop DataPanosBgpAddressFamilyRoutingProfile#next_hop}
  */
  readonly nextHop?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#orf DataPanosBgpAddressFamilyRoutingProfile#orf}
  */
  readonly orf?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#remove_private_as DataPanosBgpAddressFamilyRoutingProfile#remove_private_as}
  */
  readonly removePrivateAs?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs;
  /**
  * Route Reflector Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#route_reflector_client DataPanosBgpAddressFamilyRoutingProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#send_community DataPanosBgpAddressFamilyRoutingProfile#send_community}
  */
  readonly sendCommunity?: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#soft_reconfig_with_stored_info DataPanosBgpAddressFamilyRoutingProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPathToTerraform(struct!.addPath),
    allowas_in: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopToTerraform(struct!.nextHop),
    orf: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrfToTerraform(struct!.orf),
    remove_private_as: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath",
    },
    allowas_in: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn",
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
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix",
    },
    next_hop: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop",
    },
    orf: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf",
    },
    remove_private_as: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity",
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast | cdktf.IResolvable | undefined) {
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

  // add_path - computed: true, optional: true, required: false
  private _addPath = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAddPath) {
    this._addPath.internalValue = value;
  }
  public resetAddPath() {
    this._addPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath.internalValue;
  }

  // allowas_in - computed: true, optional: true, required: false
  private _allowasIn = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastAllowasIn) {
    this._allowasIn.internalValue = value;
  }
  public resetAllowasIn() {
    this._allowasIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn.internalValue;
  }

  // as_override - computed: true, optional: true, required: false
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

  // default_originate - computed: true, optional: true, required: false
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

  // default_originate_map - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // maximum_prefix - computed: true, optional: true, required: false
  private _maximumPrefix = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastMaximumPrefix) {
    this._maximumPrefix.internalValue = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix.internalValue;
  }

  // next_hop - computed: true, optional: true, required: false
  private _nextHop = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // orf - computed: true, optional: true, required: false
  private _orf = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastRemovePrivateAs) {
    this._removePrivateAs.internalValue = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs.internalValue;
  }

  // route_reflector_client - computed: true, optional: true, required: false
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

  // send_community - computed: true, optional: true, required: false
  private _sendCommunity = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastSendCommunity) {
    this._sendCommunity.internalValue = value;
  }
  public resetSendCommunity() {
    this._sendCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity.internalValue;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: true, required: false
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#multicast DataPanosBgpAddressFamilyRoutingProfile#multicast}
  */
  readonly multicast?: DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#unicast DataPanosBgpAddressFamilyRoutingProfile#unicast}
  */
  readonly unicast?: DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv4ToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicast: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastToTerraform(struct!.multicast),
    unicast: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastToTerraform(struct!.unicast),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv4ToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicast: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4MulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast",
    },
    unicast: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv4UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv4 | cdktf.IResolvable | undefined) {
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

  // multicast - computed: true, optional: true, required: false
  private _multicast = new DataPanosBgpAddressFamilyRoutingProfileIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: DataPanosBgpAddressFamilyRoutingProfileIpv4Multicast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // unicast - computed: true, optional: true, required: false
  private _unicast = new DataPanosBgpAddressFamilyRoutingProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: DataPanosBgpAddressFamilyRoutingProfileIpv4Unicast) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath {
  /**
  * Advertise all paths to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#tx_all_paths DataPanosBgpAddressFamilyRoutingProfile#tx_all_paths}
  */
  readonly txAllPaths?: boolean | cdktf.IResolvable;
  /**
  * Advertise the bestpath per each neighboring AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#tx_bestpath_per_as DataPanosBgpAddressFamilyRoutingProfile#tx_bestpath_per_as}
  */
  readonly txBestpathPerAs?: boolean | cdktf.IResolvable;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPathToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tx_all_paths: cdktf.booleanToTerraform(struct!.txAllPaths),
    tx_bestpath_per_as: cdktf.booleanToTerraform(struct!.txBestpathPerAs),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPathToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath | cdktf.IResolvable | undefined) {
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

  // tx_all_paths - computed: true, optional: true, required: false
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

  // tx_bestpath_per_as - computed: true, optional: true, required: false
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn {
  /**
  * Number of occurrences of AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#occurrence DataPanosBgpAddressFamilyRoutingProfile#occurrence}
  */
  readonly occurrence?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#origin DataPanosBgpAddressFamilyRoutingProfile#origin}
  */
  readonly origin?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    occurrence: cdktf.numberToTerraform(struct!.occurrence),
    origin: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToTerraform(struct!.origin),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable): any {
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
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginToHclTerraform(struct!.origin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn | cdktf.IResolvable | undefined) {
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

  // occurrence - computed: true, optional: true, required: false
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

  // origin - computed: true, optional: true, required: false
  private _origin = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOrigin) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart {
  /**
  * Restart interval in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#interval DataPanosBgpAddressFamilyRoutingProfile#interval}
  */
  readonly interval?: number;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#restart DataPanosBgpAddressFamilyRoutingProfile#restart}
  */
  readonly restart?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#warning_only DataPanosBgpAddressFamilyRoutingProfile#warning_only}
  */
  readonly warningOnly?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToTerraform(struct!.restart),
    warning_only: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToTerraform(struct!.warningOnly),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartToHclTerraform(struct!.restart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart",
    },
    warning_only: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct!.warningOnly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction | cdktf.IResolvable | undefined) {
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

  // restart - computed: true, optional: true, required: false
  private _restart = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }
  public putRestart(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionRestart) {
    this._restart.internalValue = value;
  }
  public resetRestart() {
    this._restart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartInput() {
    return this._restart.internalValue;
  }

  // warning_only - computed: true, optional: true, required: false
  private _warningOnly = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
  public putWarningOnly(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionWarningOnly) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#action DataPanosBgpAddressFamilyRoutingProfile#action}
  */
  readonly action?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction;
  /**
  * Max allowed prefixes from this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#max_prefixes DataPanosBgpAddressFamilyRoutingProfile#max_prefixes}
  */
  readonly maxPrefixes?: number;
  /**
  * Threshold value (%) at which to generate a warning msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#threshold DataPanosBgpAddressFamilyRoutingProfile#threshold}
  */
  readonly threshold?: number;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToTerraform(struct!.action),
    max_prefixes: cdktf.numberToTerraform(struct!.maxPrefixes),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction",
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix | cdktf.IResolvable | undefined) {
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

  // action - computed: true, optional: true, required: false
  private _action = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixAction) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#self DataPanosBgpAddressFamilyRoutingProfile#self}
  */
  readonly selfAttribute?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#self_force DataPanosBgpAddressFamilyRoutingProfile#self_force}
  */
  readonly selfForce?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    self: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToTerraform(struct!.selfAttribute),
    self_force: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToTerraform(struct!.selfForce),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    self: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfToHclTerraform(struct!.selfAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf",
    },
    self_force: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceToHclTerraform(struct!.selfForce),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop | cdktf.IResolvable | undefined) {
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

  // self - computed: true, optional: true, required: false
  private _self = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }
  public putSelfAttribute(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelf) {
    this._self.internalValue = value;
  }
  public resetSelfAttribute() {
    this._self.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self.internalValue;
  }

  // self_force - computed: true, optional: true, required: false
  private _selfForce = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
  public putSelfForce(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopSelfForce) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf {
  /**
  * Advertise Prefix-List ORF Capability
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#orf_prefix_list DataPanosBgpAddressFamilyRoutingProfile#orf_prefix_list}
  */
  readonly orfPrefixList?: string;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrfToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orf_prefix_list: cdktf.stringToTerraform(struct!.orfPrefixList),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrfToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#all DataPanosBgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#replace_as DataPanosBgpAddressFamilyRoutingProfile#replace_as}
  */
  readonly replaceAs?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToTerraform(struct!.all),
    replace_as: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToTerraform(struct!.replaceAs),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll",
    },
    replace_as: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsToHclTerraform(struct!.replaceAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs | cdktf.IResolvable | undefined) {
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

  // all - computed: true, optional: true, required: false
  private _all = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // replace_as - computed: true, optional: true, required: false
  private _replaceAs = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
  public putReplaceAs(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsReplaceAs) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard {
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#all DataPanosBgpAddressFamilyRoutingProfile#all}
  */
  readonly all?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#both DataPanosBgpAddressFamilyRoutingProfile#both}
  */
  readonly both?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#extended DataPanosBgpAddressFamilyRoutingProfile#extended}
  */
  readonly extended?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#large DataPanosBgpAddressFamilyRoutingProfile#large}
  */
  readonly large?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#standard DataPanosBgpAddressFamilyRoutingProfile#standard}
  */
  readonly standard?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToTerraform(struct!.all),
    both: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToTerraform(struct!.both),
    extended: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToTerraform(struct!.extended),
    large: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToTerraform(struct!.large),
    standard: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToTerraform(struct!.standard),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllToHclTerraform(struct!.all),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll",
    },
    both: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth",
    },
    extended: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedToHclTerraform(struct!.extended),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended",
    },
    large: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeToHclTerraform(struct!.large),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge",
    },
    standard: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardToHclTerraform(struct!.standard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity | cdktf.IResolvable | undefined) {
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

  // all - computed: true, optional: true, required: false
  private _all = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // both - computed: true, optional: true, required: false
  private _both = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // extended - computed: true, optional: true, required: false
  private _extended = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }
  public putExtended(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityExtended) {
    this._extended.internalValue = value;
  }
  public resetExtended() {
    this._extended.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedInput() {
    return this._extended.internalValue;
  }

  // large - computed: true, optional: true, required: false
  private _large = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }
  public putLarge(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityLarge) {
    this._large.internalValue = value;
  }
  public resetLarge() {
    this._large.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeInput() {
    return this._large.internalValue;
  }

  // standard - computed: true, optional: true, required: false
  private _standard = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityStandard) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#add_path DataPanosBgpAddressFamilyRoutingProfile#add_path}
  */
  readonly addPath?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#allowas_in DataPanosBgpAddressFamilyRoutingProfile#allowas_in}
  */
  readonly allowasIn?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn;
  /**
  * Override ASNs in outbound updates if AS-Path equals Remote-AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#as_override DataPanosBgpAddressFamilyRoutingProfile#as_override}
  */
  readonly asOverride?: boolean | cdktf.IResolvable;
  /**
  * Originate Default Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#default_originate DataPanosBgpAddressFamilyRoutingProfile#default_originate}
  */
  readonly defaultOriginate?: boolean | cdktf.IResolvable;
  /**
  * Route-Map used in Default Originate Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#default_originate_map DataPanosBgpAddressFamilyRoutingProfile#default_originate_map}
  */
  readonly defaultOriginateMap?: string;
  /**
  * Enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#enable DataPanosBgpAddressFamilyRoutingProfile#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#maximum_prefix DataPanosBgpAddressFamilyRoutingProfile#maximum_prefix}
  */
  readonly maximumPrefix?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#next_hop DataPanosBgpAddressFamilyRoutingProfile#next_hop}
  */
  readonly nextHop?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#orf DataPanosBgpAddressFamilyRoutingProfile#orf}
  */
  readonly orf?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#remove_private_as DataPanosBgpAddressFamilyRoutingProfile#remove_private_as}
  */
  readonly removePrivateAs?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs;
  /**
  * Route Reflector Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#route_reflector_client DataPanosBgpAddressFamilyRoutingProfile#route_reflector_client}
  */
  readonly routeReflectorClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#send_community DataPanosBgpAddressFamilyRoutingProfile#send_community}
  */
  readonly sendCommunity?: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity;
  /**
  * Soft reconfiguration of peer with stored routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#soft_reconfig_with_stored_info DataPanosBgpAddressFamilyRoutingProfile#soft_reconfig_with_stored_info}
  */
  readonly softReconfigWithStoredInfo?: boolean | cdktf.IResolvable;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_path: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPathToTerraform(struct!.addPath),
    allowas_in: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToTerraform(struct!.allowasIn),
    as_override: cdktf.booleanToTerraform(struct!.asOverride),
    default_originate: cdktf.booleanToTerraform(struct!.defaultOriginate),
    default_originate_map: cdktf.stringToTerraform(struct!.defaultOriginateMap),
    enable: cdktf.booleanToTerraform(struct!.enable),
    maximum_prefix: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToTerraform(struct!.maximumPrefix),
    next_hop: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopToTerraform(struct!.nextHop),
    orf: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrfToTerraform(struct!.orf),
    remove_private_as: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToTerraform(struct!.removePrivateAs),
    route_reflector_client: cdktf.booleanToTerraform(struct!.routeReflectorClient),
    send_community: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToTerraform(struct!.sendCommunity),
    soft_reconfig_with_stored_info: cdktf.booleanToTerraform(struct!.softReconfigWithStoredInfo),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_path: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPathToHclTerraform(struct!.addPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath",
    },
    allowas_in: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInToHclTerraform(struct!.allowasIn),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn",
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
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixToHclTerraform(struct!.maximumPrefix),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix",
    },
    next_hop: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop",
    },
    orf: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrfToHclTerraform(struct!.orf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf",
    },
    remove_private_as: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsToHclTerraform(struct!.removePrivateAs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs",
    },
    route_reflector_client: {
      value: cdktf.booleanToHclTerraform(struct!.routeReflectorClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_community: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityToHclTerraform(struct!.sendCommunity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity",
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

export class DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast | cdktf.IResolvable | undefined) {
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

  // add_path - computed: true, optional: true, required: false
  private _addPath = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }
  public putAddPath(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAddPath) {
    this._addPath.internalValue = value;
  }
  public resetAddPath() {
    this._addPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath.internalValue;
  }

  // allowas_in - computed: true, optional: true, required: false
  private _allowasIn = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }
  public putAllowasIn(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastAllowasIn) {
    this._allowasIn.internalValue = value;
  }
  public resetAllowasIn() {
    this._allowasIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasInInput() {
    return this._allowasIn.internalValue;
  }

  // as_override - computed: true, optional: true, required: false
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

  // default_originate - computed: true, optional: true, required: false
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

  // default_originate_map - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // maximum_prefix - computed: true, optional: true, required: false
  private _maximumPrefix = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }
  public putMaximumPrefix(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastMaximumPrefix) {
    this._maximumPrefix.internalValue = value;
  }
  public resetMaximumPrefix() {
    this._maximumPrefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPrefixInput() {
    return this._maximumPrefix.internalValue;
  }

  // next_hop - computed: true, optional: true, required: false
  private _nextHop = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastNextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // orf - computed: true, optional: true, required: false
  private _orf = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }
  public putOrf(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOrf) {
    this._orf.internalValue = value;
  }
  public resetOrf() {
    this._orf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orfInput() {
    return this._orf.internalValue;
  }

  // remove_private_as - computed: true, optional: true, required: false
  private _removePrivateAs = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }
  public putRemovePrivateAs(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastRemovePrivateAs) {
    this._removePrivateAs.internalValue = value;
  }
  public resetRemovePrivateAs() {
    this._removePrivateAs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePrivateAsInput() {
    return this._removePrivateAs.internalValue;
  }

  // route_reflector_client - computed: true, optional: true, required: false
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

  // send_community - computed: true, optional: true, required: false
  private _sendCommunity = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }
  public putSendCommunity(value: DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastSendCommunity) {
    this._sendCommunity.internalValue = value;
  }
  public resetSendCommunity() {
    this._sendCommunity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCommunityInput() {
    return this._sendCommunity.internalValue;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: true, required: false
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
export interface DataPanosBgpAddressFamilyRoutingProfileIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#unicast DataPanosBgpAddressFamilyRoutingProfile#unicast}
  */
  readonly unicast?: DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast;
}

export function dataPanosBgpAddressFamilyRoutingProfileIpv6ToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastToTerraform(struct!.unicast),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileIpv6ToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: dataPanosBgpAddressFamilyRoutingProfileIpv6UnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileIpv6 | cdktf.IResolvable | undefined) {
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

  // unicast - computed: true, optional: true, required: false
  private _unicast = new DataPanosBgpAddressFamilyRoutingProfileIpv6UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: DataPanosBgpAddressFamilyRoutingProfileIpv6Unicast) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#ngfw_device DataPanosBgpAddressFamilyRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosBgpAddressFamilyRoutingProfileLocationNgfwToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileLocationNgfwToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#name DataPanosBgpAddressFamilyRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#ngfw_device DataPanosBgpAddressFamilyRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#panorama_device DataPanosBgpAddressFamilyRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosBgpAddressFamilyRoutingProfileLocationTemplateToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosBgpAddressFamilyRoutingProfileLocationTemplateToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#name DataPanosBgpAddressFamilyRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#ngfw_device DataPanosBgpAddressFamilyRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#panorama_device DataPanosBgpAddressFamilyRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosBgpAddressFamilyRoutingProfileLocationTemplateStackToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosBgpAddressFamilyRoutingProfileLocationTemplateStackToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpAddressFamilyRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#ngfw DataPanosBgpAddressFamilyRoutingProfile#ngfw}
  */
  readonly ngfw?: DataPanosBgpAddressFamilyRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#template DataPanosBgpAddressFamilyRoutingProfile#template}
  */
  readonly template?: DataPanosBgpAddressFamilyRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#template_stack DataPanosBgpAddressFamilyRoutingProfile#template_stack}
  */
  readonly templateStack?: DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack;
}

export function dataPanosBgpAddressFamilyRoutingProfileLocationToTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosBgpAddressFamilyRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosBgpAddressFamilyRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosBgpAddressFamilyRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosBgpAddressFamilyRoutingProfileLocationToHclTerraform(struct?: DataPanosBgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosBgpAddressFamilyRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileLocationNgfw",
    },
    template: {
      value: dataPanosBgpAddressFamilyRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosBgpAddressFamilyRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpAddressFamilyRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpAddressFamilyRoutingProfileLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosBgpAddressFamilyRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosBgpAddressFamilyRoutingProfileLocationNgfw) {
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
  private _template = new DataPanosBgpAddressFamilyRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosBgpAddressFamilyRoutingProfileLocationTemplate) {
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
  private _templateStack = new DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosBgpAddressFamilyRoutingProfileLocationTemplateStack) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile panos_bgp_address_family_routing_profile}
*/
export class DataPanosBgpAddressFamilyRoutingProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_bgp_address_family_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosBgpAddressFamilyRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosBgpAddressFamilyRoutingProfile to import
  * @param importFromId The id of the existing DataPanosBgpAddressFamilyRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosBgpAddressFamilyRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_bgp_address_family_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_address_family_routing_profile panos_bgp_address_family_routing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosBgpAddressFamilyRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosBgpAddressFamilyRoutingProfileConfig) {
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataPanosBgpAddressFamilyRoutingProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosBgpAddressFamilyRoutingProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosBgpAddressFamilyRoutingProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosBgpAddressFamilyRoutingProfileIpv6) {
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
  private _location = new DataPanosBgpAddressFamilyRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosBgpAddressFamilyRoutingProfileLocation) {
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
      ipv4: dataPanosBgpAddressFamilyRoutingProfileIpv4ToTerraform(this._ipv4.internalValue),
      ipv6: dataPanosBgpAddressFamilyRoutingProfileIpv6ToTerraform(this._ipv6.internalValue),
      location: dataPanosBgpAddressFamilyRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv4: {
        value: dataPanosBgpAddressFamilyRoutingProfileIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv4",
      },
      ipv6: {
        value: dataPanosBgpAddressFamilyRoutingProfileIpv6ToHclTerraform(this._ipv6.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosBgpAddressFamilyRoutingProfileIpv6",
      },
      location: {
        value: dataPanosBgpAddressFamilyRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosBgpAddressFamilyRoutingProfileLocation",
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
