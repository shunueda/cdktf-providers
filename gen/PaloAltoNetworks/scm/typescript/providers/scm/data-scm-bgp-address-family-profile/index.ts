// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/bgp_address_family_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpAddressFamilyProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/bgp_address_family_profile#id DataScmBgpAddressFamilyProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/bgp_address_family_profile#name DataScmBgpAddressFamilyProfile#name}
  */
  readonly name?: string;
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPath {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPathToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPathToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPath | undefined) {
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

  // tx_bestpath_per__a_s - computed: true, optional: false, required: false
  public get txBestpathPerAS() {
    return this.getBooleanAttribute('tx_bestpath_per__a_s');
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasIn | undefined) {
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
  private _origin = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestart | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart - computed: true, optional: false, required: false
  private _restart = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }

  // warning_only - computed: true, optional: false, required: false
  private _warningOnly = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixActionOutputReference(this, "action");
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
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHop {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self - computed: true, optional: false, required: false
  private _self = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }

  // self_force - computed: true, optional: false, required: false
  private _selfForce = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrf {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrf | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateAS | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getStringAttribute('all');
  }

  // replace__a_s - computed: true, optional: false, required: false
  public get replaceAS() {
    return this.getStringAttribute('replace__a_s');
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtended | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // extended - computed: true, optional: false, required: false
  private _extended = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }

  // large - computed: true, optional: false, required: false
  private _large = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4Multicast {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4MulticastToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4Multicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4Multicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_path - computed: true, optional: false, required: false
  private _addPath = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }

  // allowas_in - computed: true, optional: false, required: false
  private _allowasIn = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastAllowasInOutputReference(this, "allowas_in");
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
  private _maximumPrefix = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // orf - computed: true, optional: false, required: false
  private _orf = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }

  // remove_private__a_s - computed: true, optional: false, required: false
  private _removePrivateAS = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastRemovePrivateASOutputReference(this, "remove_private__a_s");
  public get removePrivateAS() {
    return this._removePrivateAS;
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  private _sendCommunity = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: false, required: false
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPath {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPathToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPathToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPath | undefined) {
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

  // tx_bestpath_per__a_s - computed: true, optional: false, required: false
  public get txBestpathPerAS() {
    return this.getBooleanAttribute('tx_bestpath_per__a_s');
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasIn | undefined) {
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
  private _origin = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestart | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart - computed: true, optional: false, required: false
  private _restart = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }

  // warning_only - computed: true, optional: false, required: false
  private _warningOnly = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixActionOutputReference(this, "action");
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
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHop {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self - computed: true, optional: false, required: false
  private _self = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }

  // self_force - computed: true, optional: false, required: false
  private _selfForce = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrf {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrf | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateAS | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  public get all() {
    return this.getStringAttribute('all');
  }

  // replace__a_s - computed: true, optional: false, required: false
  public get replaceAS() {
    return this.getStringAttribute('replace__a_s');
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtended | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // extended - computed: true, optional: false, required: false
  private _extended = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }

  // large - computed: true, optional: false, required: false
  private _large = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4Unicast {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4UnicastToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4Unicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4Unicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_path - computed: true, optional: false, required: false
  private _addPath = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }

  // allowas_in - computed: true, optional: false, required: false
  private _allowasIn = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastAllowasInOutputReference(this, "allowas_in");
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
  private _maximumPrefix = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // orf - computed: true, optional: false, required: false
  private _orf = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }

  // remove_private__a_s - computed: true, optional: false, required: false
  private _removePrivateAS = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastRemovePrivateASOutputReference(this, "remove_private__a_s");
  public get removePrivateAS() {
    return this._removePrivateAS;
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  private _sendCommunity = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: false, required: false
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Ipv4 {
}

export function dataScmBgpAddressFamilyProfileIpv4Ipv4ToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4Ipv4ToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Ipv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4Ipv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Ipv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Ipv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmBgpAddressFamilyProfileIpv4Ipv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmBgpAddressFamilyProfileIpv4Ipv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4 {
}

export function dataScmBgpAddressFamilyProfileIpv4ToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4ToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataScmBgpAddressFamilyProfileIpv4Ipv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/bgp_address_family_profile scm_bgp_address_family_profile}
*/
export class DataScmBgpAddressFamilyProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_address_family_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmBgpAddressFamilyProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmBgpAddressFamilyProfile to import
  * @param importFromId The id of the existing DataScmBgpAddressFamilyProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/bgp_address_family_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpAddressFamilyProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_address_family_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/data-sources/bgp_address_family_profile scm_bgp_address_family_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmBgpAddressFamilyProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmBgpAddressFamilyProfileConfig) {
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: false, optional: false, required: true
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
  private _ipv4 = new DataScmBgpAddressFamilyProfileIpv4OutputReference(this, "ipv4");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
