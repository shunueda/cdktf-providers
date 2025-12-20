// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpAddressFamilyProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile#device DataScmBgpAddressFamilyProfile#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile#folder DataScmBgpAddressFamilyProfile#folder}
  */
  readonly folder?: string;
  /**
  * UUID of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile#id DataScmBgpAddressFamilyProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile#name DataScmBgpAddressFamilyProfile#name}
  */
  readonly name?: string;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile#snippet DataScmBgpAddressFamilyProfile#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastAddPath {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastAddPathToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastAddPathToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastAddPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastAddPath | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOrigin {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOriginToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOriginToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastAllowasIn {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastAllowasInToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastAllowasInToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastAllowasIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastAllowasIn | undefined) {
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
  private _origin = new DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestart | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart - computed: true, optional: false, required: false
  private _restart = new DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }

  // warning_only - computed: true, optional: false, required: false
  private _warningOnly = new DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefix {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixActionOutputReference(this, "action");
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
export interface DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelf {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForce {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForceToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForceToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastNextHop {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastNextHopToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastNextHopToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self - computed: true, optional: false, required: false
  private _self = new DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }

  // self_force - computed: true, optional: false, required: false
  private _selfForce = new DataScmBgpAddressFamilyProfileIpv4MulticastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastOrf {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastOrfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastOrfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastOrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastOrf | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAs {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // replace_as - computed: true, optional: false, required: false
  private _replaceAs = new DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAll {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAllToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBoth {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBothToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBothToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtended {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtended | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtended | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLarge {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLargeToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLargeToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandard {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandardToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandardToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunity {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // extended - computed: true, optional: false, required: false
  private _extended = new DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }

  // large - computed: true, optional: false, required: false
  private _large = new DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Multicast {
}

export function dataScmBgpAddressFamilyProfileIpv4MulticastToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4MulticastToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Multicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4MulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Multicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Multicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_path - computed: true, optional: false, required: false
  private _addPath = new DataScmBgpAddressFamilyProfileIpv4MulticastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }

  // allowas_in - computed: true, optional: false, required: false
  private _allowasIn = new DataScmBgpAddressFamilyProfileIpv4MulticastAllowasInOutputReference(this, "allowas_in");
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
  private _maximumPrefix = new DataScmBgpAddressFamilyProfileIpv4MulticastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpAddressFamilyProfileIpv4MulticastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // orf - computed: true, optional: false, required: false
  private _orf = new DataScmBgpAddressFamilyProfileIpv4MulticastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }

  // remove_private_as - computed: true, optional: false, required: false
  private _removePrivateAs = new DataScmBgpAddressFamilyProfileIpv4MulticastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  private _sendCommunity = new DataScmBgpAddressFamilyProfileIpv4MulticastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: false, required: false
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastAddPath {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastAddPathToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastAddPathToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastAddPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastAddPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastAddPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastAddPath | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOrigin {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOriginToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOriginToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastAllowasIn {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastAllowasInToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastAllowasInToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastAllowasIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastAllowasIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastAllowasIn | undefined) {
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
  private _origin = new DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestart | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // restart - computed: true, optional: false, required: false
  private _restart = new DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionRestartOutputReference(this, "restart");
  public get restart() {
    return this._restart;
  }

  // warning_only - computed: true, optional: false, required: false
  private _warningOnly = new DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionWarningOnlyOutputReference(this, "warning_only");
  public get warningOnly() {
    return this._warningOnly;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefix {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixActionOutputReference(this, "action");
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
export interface DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelf {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForce {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForceToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForceToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastNextHop {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastNextHopToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastNextHopToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastNextHop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastNextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastNextHop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastNextHop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // self - computed: true, optional: false, required: false
  private _self = new DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfOutputReference(this, "self");
  public get selfAttribute() {
    return this._self;
  }

  // self_force - computed: true, optional: false, required: false
  private _selfForce = new DataScmBgpAddressFamilyProfileIpv4UnicastNextHopSelfForceOutputReference(this, "self_force");
  public get selfForce() {
    return this._selfForce;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastOrf {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastOrfToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastOrfToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastOrf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastOrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastOrf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastOrf | undefined) {
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
export interface DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAs {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // replace_as - computed: true, optional: false, required: false
  private _replaceAs = new DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsReplaceAsOutputReference(this, "replace_as");
  public get replaceAs() {
    return this._replaceAs;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAll {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAllToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAllToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBoth {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBothToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBothToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBoth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBoth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBoth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtended {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtended): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtended | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtended | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLarge {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLargeToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLargeToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLarge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLargeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLarge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLarge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandard {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandardToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandardToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunity {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all - computed: true, optional: false, required: false
  private _all = new DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }

  // both - computed: true, optional: false, required: false
  private _both = new DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }

  // extended - computed: true, optional: false, required: false
  private _extended = new DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityExtendedOutputReference(this, "extended");
  public get extended() {
    return this._extended;
  }

  // large - computed: true, optional: false, required: false
  private _large = new DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityLargeOutputReference(this, "large");
  public get large() {
    return this._large;
  }

  // standard - computed: true, optional: false, required: false
  private _standard = new DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
}
export interface DataScmBgpAddressFamilyProfileIpv4Unicast {
}

export function dataScmBgpAddressFamilyProfileIpv4UnicastToTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpAddressFamilyProfileIpv4UnicastToHclTerraform(struct?: DataScmBgpAddressFamilyProfileIpv4Unicast): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpAddressFamilyProfileIpv4UnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpAddressFamilyProfileIpv4Unicast | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpAddressFamilyProfileIpv4Unicast | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_path - computed: true, optional: false, required: false
  private _addPath = new DataScmBgpAddressFamilyProfileIpv4UnicastAddPathOutputReference(this, "add_path");
  public get addPath() {
    return this._addPath;
  }

  // allowas_in - computed: true, optional: false, required: false
  private _allowasIn = new DataScmBgpAddressFamilyProfileIpv4UnicastAllowasInOutputReference(this, "allowas_in");
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
  private _maximumPrefix = new DataScmBgpAddressFamilyProfileIpv4UnicastMaximumPrefixOutputReference(this, "maximum_prefix");
  public get maximumPrefix() {
    return this._maximumPrefix;
  }

  // next_hop - computed: true, optional: false, required: false
  private _nextHop = new DataScmBgpAddressFamilyProfileIpv4UnicastNextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }

  // orf - computed: true, optional: false, required: false
  private _orf = new DataScmBgpAddressFamilyProfileIpv4UnicastOrfOutputReference(this, "orf");
  public get orf() {
    return this._orf;
  }

  // remove_private_as - computed: true, optional: false, required: false
  private _removePrivateAs = new DataScmBgpAddressFamilyProfileIpv4UnicastRemovePrivateAsOutputReference(this, "remove_private_as");
  public get removePrivateAs() {
    return this._removePrivateAs;
  }

  // route_reflector_client - computed: true, optional: false, required: false
  public get routeReflectorClient() {
    return this.getBooleanAttribute('route_reflector_client');
  }

  // send_community - computed: true, optional: false, required: false
  private _sendCommunity = new DataScmBgpAddressFamilyProfileIpv4UnicastSendCommunityOutputReference(this, "send_community");
  public get sendCommunity() {
    return this._sendCommunity;
  }

  // soft_reconfig_with_stored_info - computed: true, optional: false, required: false
  public get softReconfigWithStoredInfo() {
    return this.getBooleanAttribute('soft_reconfig_with_stored_info');
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

  // multicast - computed: true, optional: false, required: false
  private _multicast = new DataScmBgpAddressFamilyProfileIpv4MulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }

  // unicast - computed: true, optional: false, required: false
  private _unicast = new DataScmBgpAddressFamilyProfileIpv4UnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile scm_bgp_address_family_profile}
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
  * @param importFromId The id of the existing DataScmBgpAddressFamilyProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpAddressFamilyProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_address_family_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_address_family_profile scm_bgp_address_family_profile} Data Source
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
    this._id = config.id;
    this._name = config.name;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: true, optional: true, required: false
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

  // folder - computed: true, optional: true, required: false
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

  // snippet - computed: true, optional: true, required: false
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
      id: cdktf.stringToTerraform(this._id),
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
