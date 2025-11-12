// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpAddressFamilyProfileListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#device DataScmBgpAddressFamilyProfileList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#folder DataScmBgpAddressFamilyProfileList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#limit DataScmBgpAddressFamilyProfileList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#name DataScmBgpAddressFamilyProfileList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#offset DataScmBgpAddressFamilyProfileList#offset}
  */
  readonly offset?: number;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#snippet DataScmBgpAddressFamilyProfileList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPath {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPathToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPathToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tx_all_paths - computed: true, optional: false, required: false
  public get txAllPaths() {
    return this.getBooleanAttribute('tx_all_paths');
  }

  // tx_bestpath_per_as - computed: true, optional: false, required: false
  public get txBestpathPerAs() {
    return this.getBooleanAttribute('tx_bestpath_per_as');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOrigin {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOriginToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOriginToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasIn {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // occurrence - computed: true, optional: false, required: false
  public get occurrence() {
    return this.getNumberAttribute('occurrence');
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestart {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestartToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestartToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnly {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixAction {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart - computed: true, optional: false, required: false
  private _restart = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }

  // warning_only - computed: true, optional: false, required: false
  private _warningOnly = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefix {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // num_prefixes - computed: true, optional: false, required: false
  public get numPrefixes() {
    return this.getNumberAttribute('num_prefixes');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelf {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForce {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForceToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForceToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHop {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self - computed: true, optional: false, required: false
  private _self = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }

  // self_force - computed: true, optional: false, required: false
  private _selfForce = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrf {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrfToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // orf_prefix_list - computed: true, optional: false, required: false
  public get orfPrefixList() {
    return this.getStringAttribute('orf_prefix_list');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAll {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAllToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAs {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAsToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAs {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // replace_as - computed: true, optional: false, required: false
  private _replaceAs = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAll {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAllToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBoth {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBothToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBothToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtended {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtendedToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtendedToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtended | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtended | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLarge {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLargeToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLargeToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandard {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandardToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandardToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunity {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // extended - computed: true, optional: false, required: false
  private _extended = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }

  // large - computed: true, optional: false, required: false
  private _large = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Multicast {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Multicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Multicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_path - computed: true, optional: false, required: false
  private _addPath = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }

  // allowas_in - computed: true, optional: false, required: false
  private _allowasIn = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }

  // default_originate - computed: true, optional: false, required: false
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }

  // default_originate_map - computed: true, optional: false, required: false
  public get defaultOriginateMap() {
    return this.getStringAttribute('default_originate_map');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // maximum_prefix - computed: true, optional: false, required: false
  private _maximumPrefix = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // orf - computed: true, optional: false, required: false
  private _orf = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }

  // remove_private_as - computed: true, optional: false, required: false
  private _removePrivateAs = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  private _sendCommunity = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: false, required: false
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPath {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPathToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPathToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tx_all_paths - computed: true, optional: false, required: false
  public get txAllPaths() {
    return this.getBooleanAttribute('tx_all_paths');
  }

  // tx_bestpath_per_as - computed: true, optional: false, required: false
  public get txBestpathPerAs() {
    return this.getBooleanAttribute('tx_bestpath_per_as');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOrigin {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOriginToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOriginToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasIn {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // occurrence - computed: true, optional: false, required: false
  public get occurrence() {
    return this.getNumberAttribute('occurrence');
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestart {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestartToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestartToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnly {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixAction {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart - computed: true, optional: false, required: false
  private _restart = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }

  // warning_only - computed: true, optional: false, required: false
  private _warningOnly = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefix {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }

  // num_prefixes - computed: true, optional: false, required: false
  public get numPrefixes() {
    return this.getNumberAttribute('num_prefixes');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelf {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForce {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForceToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForceToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHop {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self - computed: true, optional: false, required: false
  private _self = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }

  // self_force - computed: true, optional: false, required: false
  private _selfForce = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrf {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrfToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // orf_prefix_list - computed: true, optional: false, required: false
  public get orfPrefixList() {
    return this.getStringAttribute('orf_prefix_list');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAll {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAllToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAs {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAsToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAs {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // replace_as - computed: true, optional: false, required: false
  private _replaceAs = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAll {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAllToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBoth {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBothToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBothToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtended {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtendedToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtendedToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtended | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtended | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLarge {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLargeToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLargeToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandard {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandardToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandardToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunity {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // extended - computed: true, optional: false, required: false
  private _extended = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }

  // large - computed: true, optional: false, required: false
  private _large = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Unicast {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Unicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4Unicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_path - computed: true, optional: false, required: false
  private _addPath = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }

  // allowas_in - computed: true, optional: false, required: false
  private _allowasIn = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastAllowasInOutputReference(this, "allowas_in");
  public get allowasIn() {
    return this._allowasIn;
  }

  // as_override - computed: true, optional: false, required: false
  public get asOverride() {
    return this.getBooleanAttribute('as_override');
  }

  // default_originate - computed: true, optional: false, required: false
  public get defaultOriginate() {
    return this.getBooleanAttribute('default_originate');
  }

  // default_originate_map - computed: true, optional: false, required: false
  public get defaultOriginateMap() {
    return this.getStringAttribute('default_originate_map');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // maximum_prefix - computed: true, optional: false, required: false
  private _maximumPrefix = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // orf - computed: true, optional: false, required: false
  private _orf = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }

  // remove_private_as - computed: true, optional: false, required: false
  private _removePrivateAs = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  private _sendCommunity = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: false, required: false
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4Ipv4 {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4ToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4Ipv4ToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4Ipv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4Ipv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4Ipv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}
export interface DataScmBgpAddressFamilyProfileListDataIpv4 {
}

export function dataScmBgpAddressFamilyProfileListDataIpv4ToTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileListDataIpv4ToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListDataIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileListDataIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListDataIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListDataIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpAddressFamilyProfileListDataIpv4Ipv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
}
export interface DataScmBgpAddressFamilyProfileListData {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#id DataScmBgpAddressFamilyProfileList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#name DataScmBgpAddressFamilyProfileList#name}
  */
  readonly name?: string;
}

export function dataScmBgpAddressFamilyProfileListDataToTerraform(struct?: DataScmBgpAddressFamilyProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmBgpAddressFamilyProfileListDataToHclTerraform(struct?: DataScmBgpAddressFamilyProfileListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmBgpAddressFamilyProfileListDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpAddressFamilyProfileListDataIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
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

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }
}

export class DataScmBgpAddressFamilyProfileListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmBgpAddressFamilyProfileListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmBgpAddressFamilyProfileListDataOutputReference {
    return new DataScmBgpAddressFamilyProfileListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list scm_bgp_address_family_profile_list}
*/
export class DataScmBgpAddressFamilyProfileList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_address_family_profile_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmBgpAddressFamilyProfileList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmBgpAddressFamilyProfileList to import
  * @param importFromId The id of the existing DataScmBgpAddressFamilyProfileList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpAddressFamilyProfileList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_address_family_profile_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/bgp_address_family_profile_list scm_bgp_address_family_profile_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmBgpAddressFamilyProfileListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmBgpAddressFamilyProfileListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_address_family_profile_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
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
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmBgpAddressFamilyProfileListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // name - computed: false, optional: true, required: false
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
